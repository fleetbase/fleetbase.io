import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { requestIds, syncCatalog, validateCatalog } from './sync-php-sdk-examples.mjs';

const example = { implementation: 'Fleetbase\\Sdk\\Services\\TrailerService::createTrailer', call: '$fleetbase->trailers->createTrailer([]);', code: '<?php' };
const catalog = (examples) => ({ schema_version: 1, package: 'fleetbase/fleetbase-php', examples });

test('requires complete, non-stale, executable SDK mappings', () => {
  assert.equal(validateCatalog(catalog({ trailer: example }), ['trailer']), 1);
  assert.throws(() => validateCatalog(catalog({ old: example }), ['trailer']), /Missing: trailer.*Stale: old/);
  assert.throws(() => validateCatalog(catalog({ trailer: {} }), ['trailer']), /Invalid: trailer/);
  assert.throws(() => validateCatalog({}, []), /Invalid Fleetbase/);
});

test('sync uses stable IDs from both PHP collections and never overwrites with an incomplete catalog', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'php-catalog-test-'));
  try {
    for (const group of ['Fleetbase API/Trailers', 'Fleetbase Core API/Organizations', 'Fleetbase API/Trailers/.resources']) {
      await mkdir(path.join(directory, group), { recursive: true });
    }
    await writeFile(path.join(directory, 'Fleetbase API/Trailers/Create a Trailer.request.yaml'), 'method: POST');
    await writeFile(path.join(directory, 'Fleetbase API/Trailers/Create a Trailer.params.yaml'), '{}');
    await writeFile(path.join(directory, 'Fleetbase API/Trailers/.resources/Ignore.request.yaml'), '{}');
    await writeFile(path.join(directory, 'Fleetbase Core API/Organizations/Get Current Organization.request.yaml'), 'method: GET');
    const ids = await requestIds(directory);
    assert.deepEqual(ids, ['fleetbase-api-trailers-create-a-trailer', 'fleetbase-core-api-organizations-get-current-organization']);
    const source = path.join(directory, 'source.json');
    const destination = path.join(directory, 'destination.json');
    await writeFile(destination, 'existing catalog');
    await writeFile(source, JSON.stringify(catalog({})));
    await assert.rejects(syncCatalog({ source, destination, collectionsDirectory: directory }), /Missing:/);
    assert.equal(await readFile(destination, 'utf8'), 'existing catalog');
    const contents = JSON.stringify(catalog(Object.fromEntries(ids.map((id) => [id, example]))));
    await writeFile(source, contents);
    assert.equal(await syncCatalog({ source, destination, collectionsDirectory: directory }), 2);
    assert.equal(await readFile(destination, 'utf8'), contents);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
