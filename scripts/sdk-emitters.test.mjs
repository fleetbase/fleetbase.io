import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { emitPhp } from './sdk-emitters.mjs';

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

  assert.match(code, /\$fleetbase->orders->dispatchOrder\('order_id-fixture'\);/);
  assert.doesNotMatch(code, /findRecord/);
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
