import { readdir, readFile, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const root = fileURLToPath(new URL('../', import.meta.url));
const scopes = ['Fleetbase API', 'Fleetbase Core API'];
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export async function requestIds(collectionsDirectory) {
  const ids = [];
  async function visit(directory, segments) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const next = [...segments, entry.name];
      if (entry.isDirectory()) {
        await visit(path.join(directory, entry.name), next);
      } else if (entry.isFile() && entry.name.endsWith('.request.yaml')) {
        ids.push(slug(next.join('-').replace(/\.request\.yaml$/, '')));
      }
    }
  }
  for (const scope of scopes) await visit(path.join(collectionsDirectory, scope), [scope]);
  if (new Set(ids).size !== ids.length) throw new Error('Postman contains duplicate PHP catalog request IDs.');
  return ids.sort();
}

export function validateCatalog(catalog, expectedIds) {
  if (catalog?.schema_version !== 1 || catalog?.package !== 'fleetbase/fleetbase-php' ||
      !catalog.examples || typeof catalog.examples !== 'object' || Array.isArray(catalog.examples)) {
    throw new Error('Invalid Fleetbase PHP SDK example catalog.');
  }
  const expected = new Set(expectedIds);
  const actual = Object.keys(catalog.examples);
  const missing = expectedIds.filter((id) => !Object.hasOwn(catalog.examples, id));
  const stale = actual.filter((id) => !expected.has(id));
  const invalid = actual.filter((id) => {
    const entry = catalog.examples[id];
    return !entry || !['implementation', 'call', 'code'].every((key) => typeof entry[key] === 'string' && entry[key].trim());
  });
  if (missing.length || stale.length || invalid.length) {
    throw new Error(
      `PHP SDK catalog does not match Postman. Missing: ${missing.join(', ') || 'none'}. ` +
      `Stale: ${stale.join(', ') || 'none'}. Invalid: ${invalid.join(', ') || 'none'}. ` +
      'Merge the matching fleetbase/fleetbase-php contract update, then rerun Bump Postman Submodule.',
    );
  }
  return actual.length;
}

export async function syncCatalog({ source, destination, collectionsDirectory }) {
  const contents = await readFile(source, 'utf8');
  const count = validateCatalog(JSON.parse(contents), await requestIds(collectionsDirectory));
  // Validate the complete candidate before replacing the checked-in catalog.
  if (path.resolve(source) !== path.resolve(destination)) {
    const temporary = `${destination}.${process.pid}.tmp`;
    await writeFile(temporary, contents);
    await rename(temporary, destination);
  }
  return count;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: {
    source: { type: 'string' },
    collections: { type: 'string' },
  } });
  const destination = path.join(root, 'scripts/php-sdk-examples.generated.json');
  try {
    const count = await syncCatalog({
      source: values.source ?? destination,
      destination,
      collectionsDirectory: values.collections ?? path.join(root, 'vendor/postman/postman/collections'),
    });
    console.log(`PHP SDK catalog verified: ${count}/${count} Postman request IDs.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
