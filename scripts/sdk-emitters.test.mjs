import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { classifyEndpoint, emitJs, emitPhp } from './sdk-emitters.mjs';

const catalog = JSON.parse(
  await readFile(new URL('./php-sdk-examples.generated.json', import.meta.url)),
);
const sdkConfig = {
  php: {
    client: 'fleetbase',
    stores: {
      Places: 'places',
      Orders: 'orders',
      Organizations: 'organizations',
    },
  },
};

test('new API endpoints do not invent PHP SDK methods when no example exists', () => {
  for (const endpointKind of ['create', 'find', 'query', 'custom-action']) {
    assert.equal(emitPhp({
      method: 'GET', fullUrl: 'https://api.fleetbase.io/v1/inspection-forms',
      endpointKind, resourceFolder: 'Inspections', sdkConfig,
    }), null);
  }
});

test('unknown JavaScript SDK resources use raw HTTP rather than guessed stores', () => {
  const code = emitJs({
    method: 'GET', fullUrl: 'https://api.fleetbase.io/v1/inspection-forms',
    endpointKind: 'query', resourceFolder: 'Inspections',
    sdkConfig: { js: { pkg: '@fleetbase/sdk', client: 'fleetbase', stores: {} } },
  });
  assert.match(code, /fetch\(/);
  assert.doesNotMatch(code, /fleetbase\.inspections|import Fleetbase/);
});

test('uses concise PHP SDK calls for canonical CRUD endpoints', () => {
  const code = emitPhp({
    method: 'POST',
    fullUrl: 'https://api.fleetbase.io/v1/places',
    body: '{"name":"Warehouse"}',
    queryParams: {},
    endpointKind: 'create',
    endpointName: 'Create a Place',
    rawUrl: '{{base_url}}/{{namespace}}/places',
    resourceFolder: 'Places',
    sdkConfig,
    sdkExample: catalog.examples['fleetbase-api-places-create-a-place'],
  });

  assert.match(code, /\$fleetbase->places->create\(/);
  assert.doesNotMatch(code, /createPlace/);
});

test('uses the exact positional dispatchOrder signature for the custom endpoint', () => {
  const code = emitPhp({
    method: 'PATCH',
    fullUrl: 'https://api.fleetbase.io/v1/orders/:id/dispatch',
    body: null,
    queryParams: {},
    endpointKind: 'custom-action',
    endpointName: 'Dispatch an Order',
    rawUrl: '{{base_url}}/{{namespace}}/orders/:id/dispatch',
    resourceFolder: 'Orders',
    sdkConfig,
    sdkExample: catalog.examples['fleetbase-api-orders-dispatch-an-order'],
  });

  assert.match(code, /\$orderId = 'order_id-fixture';/);
  assert.match(code, /\$fleetbase->orders->dispatchOrder\(\$orderId\);/);
  assert.doesNotMatch(code, /findRecord/);
});

test('uses positional identifiers and direct data for PHP SDK actions', () => {
  const code = emitPhp({
    method: 'POST',
    fullUrl: 'https://api.fleetbase.io/v1/drivers/:id/change-password',
    body: '{"password":"new-password"}',
    queryParams: {},
    endpointKind: 'custom-action',
    endpointName: 'Change Driver Password',
    rawUrl: '{{base_url}}/{{namespace}}/drivers/:id/change-password',
    resourceFolder: 'Drivers',
    sdkConfig,
    sdkExample:
      catalog.examples['fleetbase-api-drivers-change-driver-password'],
  });

  assert.match(code, /changeDriverPassword\(\n    \$driverId,\n    \[/);
  assert.doesNotMatch(code, /'id'\s*=>/);
  assert.doesNotMatch(code, /'body'\s*=>/);
});

test('uses the correct services for trailer and equipment actions', () => {
  const cases = [
    ['fleetbase-api-trailers-attach-trailer-to-vehicle', 'POST', '/trailers/:id/attach', 'Attach Trailer to Vehicle', 'Trailers', /\$fleetbase->trailers->attachTrailerToVehicle\(/],
    ['fleetbase-api-trailers-list-vehicle-trailers', 'GET', '/vehicles/:id/trailers', 'List Vehicle Trailers', 'Trailers', /\$fleetbase->vehicles->listVehicleTrailers\(\$vehicleId\)/],
    ['fleetbase-api-trailers-attach-device-to-trailer', 'POST', '/devices/:id/attach', 'Attach Device to Trailer', 'Trailers', /\$fleetbase->devices->attachDevice\(/],
    ['fleetbase-api-equipment-attach-equipment', 'POST', '/equipment/:id/attach', 'Attach Equipment', 'Equipment', /\$fleetbase->equipment->attachEquipment\(/],
  ];
  for (const [id, method, url, endpointName, resourceFolder, expected] of cases) {
    const code = emitPhp({ method, fullUrl: `https://api.fleetbase.io/v1${url}`, body: null, queryParams: {},
      endpointKind: 'custom-action', endpointName, rawUrl: `{{base_url}}/{{namespace}}${url}`,
      resourceFolder, sdkConfig, sdkExample: catalog.examples[id] });
    assert.match(code, expected);
    assert.doesNotMatch(code, /GuzzleHttp|'body'\s*=>/);
  }
});

test('uses first-class PHP SDK methods for Core API custom endpoints', () => {
  const code = emitPhp({
    method: 'GET',
    fullUrl: 'https://api.fleetbase.io/v1/organizations/current',
    body: null,
    queryParams: {},
    endpointKind: 'query',
    endpointName: 'Get Current Organization',
    rawUrl: '{{base_url}}/{{namespace}}/organizations/current',
    resourceFolder: 'Organizations',
    sdkConfig,
    sdkExample:
      catalog.examples[
        'fleetbase-core-api-organizations-get-current-organization'
      ],
  });

  assert.match(code, /\$fleetbase->organizations->getCurrentOrganization\(/);
  assert.doesNotMatch(code, /GuzzleHttp/);
});

test('renders all released inspection examples on their correct SDK services', () => {
  const cases = [
    ['list-inspection-forms', 'GET', '/inspection-forms', /\$fleetbase->inspectionForms->listInspectionForms\(/],
    ['retrieve-an-inspection-form', 'GET', '/inspection-forms/:id', /\$fleetbase->inspectionForms->retrieveInspectionForm\(\$inspectionFormId\)/],
    ['submit-an-inspection', 'POST', '/inspections', /\$fleetbase->inspections->submitInspection\(/],
    ['list-inspections', 'GET', '/inspections', /\$fleetbase->inspections->query\(/],
    ['retrieve-an-inspection', 'GET', '/inspections/:id', /\$fleetbase->inspections->findRecord\(\$id\)/],
    ['list-vehicle-inspections', 'GET', '/vehicles/:id/inspections', /\$fleetbase->vehicles->listVehicleInspections\(\$vehicleId\)/],
  ];
  for (const [suffix, method, url, expected] of cases) {
    const sdkExample = catalog.examples[`fleetbase-api-inspections-${suffix}`];
    assert.ok(sdkExample, `Missing released inspection example: ${suffix}`);
    const endpoint = classifyEndpoint({ name: sdkExample.name, method, pathSegments: url.slice(1).split('/') });
    const code = emitPhp({
      method, fullUrl: `https://api.fleetbase.io/v1${url}`, body: null,
      queryParams: suffix === 'list-inspections' ? { driver: 'driver_id-fixture' } : {},
      endpointKind: endpoint.kind, endpointAction: endpoint.action,
      endpointName: sdkExample.name, rawUrl: `{{base_url}}/{{namespace}}${url}`,
      resourceFolder: 'Inspections', sdkConfig, sdkExample,
    });
    assert.match(code, expected, suffix);
    assert.doesNotMatch(code, /GuzzleHttp|'body'\s*=>/, suffix);
    if (suffix.includes('inspection-form')) {
      assert.doesNotMatch(code, /\$fleetbase->inspections->/, suffix);
    }
    if (suffix === 'submit-an-inspection') {
      assert.match(code, /'item_results'\s*=>/);
    }
    if (suffix === 'list-inspections') {
      assert.match(code, /'driver'\s*=>/);
    }
  }
});
