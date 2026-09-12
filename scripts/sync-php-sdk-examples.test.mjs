import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import YAML from 'yaml';
import { requestIds, syncCatalog, validateCatalog } from './sync-php-sdk-examples.mjs';

const example = { implementation: 'Fleetbase\\Sdk\\Services\\TrailerService::createTrailer', call: '$fleetbase->trailers->createTrailer([]);', code: '<?php' };
const catalog = (examples) => ({ schema_version: 1, package: 'fleetbase/fleetbase-php', examples });

test('Postman bump remains SDK-independent and skips expensive work when unchanged', async () => {
  const workflow = YAML.parse(await readFile(new URL('../.github/workflows/bump-postman.yml', import.meta.url), 'utf8'));
  assert.equal(workflow.on.schedule, undefined);
  const steps = workflow.jobs.bump.steps;
  assert.ok(steps.some((step) => step.name === 'Stop early if nothing changed'));
  assert.equal(steps.some((step) => step.with?.repository === 'fleetbase/fleetbase-php'), false);
  for (const name of ['Setup pnpm', 'Setup Node.js', 'Install dependencies', 'Regenerate API docs', 'Create Pull Request']) {
    assert.equal(steps.find((step) => step.name === name)?.if, "steps.bump.outputs.no_change != 'true'");
  }
});

test('accepts independent SDK coverage but rejects malformed supplied mappings', () => {
  assert.equal(validateCatalog(catalog({ trailer: example }), ['trailer']), 1);
  assert.equal(validateCatalog(catalog({ old: example }), ['trailer']), 0);
  assert.throws(() => validateCatalog(catalog({ old: example }), ['trailer'], { requireComplete: true }), /Missing: trailer.*Stale: old/);
  assert.throws(() => validateCatalog(catalog({ trailer: {} }), ['trailer']), /Invalid: trailer/);
  assert.throws(() => validateCatalog({}, []), /Invalid Fleetbase/);
});

test('sync uses stable IDs and never overwrites with malformed examples', async () => {
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
    await writeFile(source, JSON.stringify(catalog({ [ids[0]]: {} })));
    await assert.rejects(syncCatalog({ source, destination, collectionsDirectory: directory }), /Invalid:/);
    assert.equal(await readFile(destination, 'utf8'), 'existing catalog');
    await writeFile(source, JSON.stringify(catalog({ [ids[0]]: example })));
    assert.equal(await syncCatalog({ source, destination, collectionsDirectory: directory }), 1);
    const contents = JSON.stringify(catalog(Object.fromEntries(ids.map((id) => [id, example]))));
    await writeFile(source, contents);
    assert.equal(await syncCatalog({ source, destination, collectionsDirectory: directory }), 2);
    assert.equal(await readFile(destination, 'utf8'), contents);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
