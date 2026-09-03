#!/usr/bin/env node
/**
 * API-docs generator.
 *
 * Walks `vendor/postman/postman/collections/<Collection>/<Resource>/<request>.request.yaml`
 * and emits one MDX page per resource into `content/docs/api/<api-slug>/<resource>.mdx`.
 *
 * Output layout:
 *   content/docs/api/
 *     index.mdx                        ← hand-authored, NOT touched by the generator
 *     fleetbase/<resource>.mdx         ← generated
 *     storefront/<resource>.mdx        ← generated
 *     workflows/integrated-vendor.mdx  ← generated
 *
 * The generator also emits `src/lib/api-nav.generated.ts` — the structure
 * config consumed by <ApiSidebar>.
 *
 * Run:
 *   node scripts/generate-api-docs.mjs
 *   pnpm prebuild        (auto)
 *
 * See scripts/README.md for adding new collections.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createHighlighter } from 'shiki';
import YAML from 'yaml';

import { apis as apisConfig, defaultConfig } from './api-docs.config.mjs';
import {
  classifyEndpoint,
  emitCurl,
  emitJs,
  emitPhp,
  emitPython,
  RESOLVED_HOST,
} from './sdk-emitters.mjs';

// Shiki highlighter (lazy-init). Themes match fumadocs' dual-theme convention
// so the rendered HTML uses CSS variables that respond to light/dark mode.
let _highlighter = null;
async function getHighlighter() {
  if (_highlighter) return _highlighter;
  _highlighter = await createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: ['bash', 'javascript', 'php', 'python', 'json'],
  });
  return _highlighter;
}

/**
 * Tokenize a code string with Shiki and return the rendered HTML. Wrapped in
 * a `<pre>` so it embeds cleanly into our <HttpRequest> / <HttpResponse>
 * components via dangerouslySetInnerHTML.
 */
async function highlightCode(code, lang) {
  if (!code) return '';
  const highlighter = await getHighlighter();
  const shikiLang = SHIKI_LANG[lang] ?? 'bash';
  return highlighter.codeToHtml(code, {
    lang: shikiLang,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
  });
}

const SHIKI_LANG = {
  curl: 'bash',
  js: 'javascript',
  php: 'php',
  python: 'python',
  json: 'json',
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Where to read collection YAML from. Defaults to the submodule. Override
// with the POSTMAN_COLLECTIONS_DIR env var when iterating against an
// uncommitted local clone (e.g. during collection authoring).
const COLLECTIONS_DIR = process.env.POSTMAN_COLLECTIONS_DIR
  ? path.resolve(process.env.POSTMAN_COLLECTIONS_DIR)
  : path.join(ROOT, 'vendor/postman/postman/collections');

const OUT_BASE = path.join(ROOT, 'content/docs/api');
const NAV_OUT = path.join(ROOT, 'src/lib/api-nav.generated.ts');
const PHP_SDK_EXAMPLES_PATH = path.join(
  ROOT,
  'scripts/php-sdk-examples.generated.json',
);
let phpSdkExamples = {};
const usedPhpSdkExampleIds = new Set();

// ---------------------------------------------------------------------------
// Entry
// ---------------------------------------------------------------------------

async function main() {
  const phpSdkCatalog = JSON.parse(
    await fs.readFile(PHP_SDK_EXAMPLES_PATH, 'utf8'),
  );
  phpSdkExamples = phpSdkCatalog.examples ?? {};

  if (!(await collectionsAvailable())) {
    console.warn(
      `\n⚠️  Postman collections not found at ${path.relative(ROOT, COLLECTIONS_DIR)}.\n` +
        `   Did you initialize the submodule?\n` +
        `   $ git submodule update --init --recursive\n\n` +
        `   Writing empty nav stub so the build can continue. API pages will be missing.\n`,
    );
    await writeNavConfig({});
    return;
  }

  const collectionFolders = (
    await fs.readdir(COLLECTIONS_DIR, { withFileTypes: true })
  )
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  /** @type {Record<string, ResourcePageMeta[]>} resource pages grouped by sidebar group */
  const navGroups = {};

  for (const folder of collectionFolders) {
    const config = apisConfig[folder] ?? {
      ...defaultConfig(folder),
      _isDefault: true,
    };

    if (config._isDefault) {
      console.warn(
        `⚠️  No config entry for "${folder}". Falling back to defaults — slug "${config.slug}", group "${config.sidebarGroup}", no SDK samples. Add an entry to scripts/api-docs.config.mjs.`,
      );
    }

    if (config.type === 'workflow') {
      const meta = await generateWorkflow(folder, config);
      navGroups[config.sidebarGroup] ??= [];
      navGroups[config.sidebarGroup].push(meta);
    } else {
      const apiMeta = await generateApi(folder, config);
      navGroups[config.sidebarGroup] ??= [];
      navGroups[config.sidebarGroup].push(...apiMeta);
    }
  }

  await writeNavConfig(navGroups);

  const catalogIds = Object.keys(phpSdkExamples);
  if (usedPhpSdkExampleIds.size !== catalogIds.length) {
    const unused = catalogIds.filter((id) => !usedPhpSdkExampleIds.has(id));
    throw new Error(
      `PHP SDK catalog coverage is ${usedPhpSdkExampleIds.size}/${catalogIds.length}; unused IDs: ${unused.join(', ')}`,
    );
  }

  console.log('\n✅ API docs generated.');
}

async function collectionsAvailable() {
  try {
    await fs.access(COLLECTIONS_DIR);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Standard API generation
// ---------------------------------------------------------------------------

async function generateApi(folder, config) {
  console.log(`\n📘 ${folder} → /docs/api/${config.slug}/`);

  const apiOutDir = path.join(OUT_BASE, config.slug);
  await fs.rm(apiOutDir, { recursive: true, force: true });
  await fs.mkdir(apiOutDir, { recursive: true });

  const collectionDir = path.join(COLLECTIONS_DIR, folder);
  const resourceDirs = (
    await fs.readdir(collectionDir, { withFileTypes: true })
  )
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name);

  /** @type {ResourcePageMeta[]} */
  const pages = [];

  for (const resourceFolder of resourceDirs) {
    const meta = await generateResourcePage({
      folder,
      resourceFolder,
      config,
      apiOutDir,
    });
    if (meta) pages.push(meta);
  }

  return pages;
}

async function generateResourcePage({
  folder,
  resourceFolder,
  config,
  apiOutDir,
}) {
  const resourceDir = path.join(COLLECTIONS_DIR, folder, resourceFolder);
  const requests = await loadRequests(resourceDir);

  if (requests.length === 0) {
    return null;
  }

  const slug = slugify(resourceFolder);
  const outFile = path.join(apiOutDir, `${slug}.mdx`);

  // Resource-level "Object" section — optional. Read from
  // <ResourceFolder>/.resources/object.yaml. When present, rendered as the
  // first section on the page and prepended to the page TOC + sidebar.
  const objectMeta = await loadResourceObject(resourceDir);

  const endpoints = await Promise.all(
    requests.map((req) =>
      buildEndpointSection(req, {
        folder,
        resourceFolder,
        sdkConfig: config.sdk,
      }),
    ),
  );

  const mdx = renderResourcePage({
    title: resourceFolder,
    description: await loadResourceDefinition(resourceDir),
    endpoints,
    objectMeta,
  });

  await fs.writeFile(outFile, mdx, 'utf8');
  const total = endpoints.length + (objectMeta ? 1 : 0);
  const objectSuffix = objectMeta ? ' + object' : '';
  console.log(`   • ${slug}.mdx (${endpoints.length} endpoints${objectSuffix})`);

  // Sidebar / TOC entries — prepend the object section when present so it's
  // the first link both in the resource-page header and the sidebar.
  const navEntries = [];
  if (objectMeta) {
    navEntries.push({
      title: `The ${objectMeta.name} object`,
      id: objectMeta.id,
    });
  }
  for (const e of endpoints) {
    navEntries.push({
      title: e.endpointTitle,
      id: e.id,
      method: e.method,
      path: e.displayPath,
    });
  }

  return {
    title: resourceFolder,
    slug: `${config.slug}/${slug}`,
    endpoints: navEntries,
  };
}

// ---------------------------------------------------------------------------
// Endpoint section building
// ---------------------------------------------------------------------------

async function buildEndpointSection(
  req,
  { folder, resourceFolder, sdkConfig },
) {
  const id = slugify(req.name);
  const displayPath = templatedPathToDisplay(req.url);
  const queryString = buildQueryString(req.structuredQueryParams);
  const requestUrl = displayPath + queryString;
  const fullUrl = `${RESOLVED_HOST}${requestUrl}`;
  const pathSegments = displayPath.split('/').filter(Boolean);

  const { kind, action } = classifyEndpoint({
    name: req.name,
    method: req.method,
    pathSegments,
  });
  const sdkExampleId = slugify(`${folder}-${resourceFolder}-${req.name}`);
  const sdkExample = phpSdkExamples[sdkExampleId];
  if (sdkConfig?.php) {
    if (!sdkExample) {
      throw new Error(`No PHP SDK example is mapped for ${sdkExampleId}.`);
    }
    usedPhpSdkExampleIds.add(sdkExampleId);
  }

  const rawSamples = {
    curl: emitCurl({
      method: req.method,
      fullUrl,
      headers: req.headers,
      body: req.body,
    }),
    js: emitJs({
      method: req.method,
      fullUrl,
      body: req.body,
      queryParams: req.structuredQueryParams,
      endpointKind: kind,
      endpointAction: action,
      resourceFolder,
      sdkConfig,
    }),
    php: emitPhp({
      method: req.method,
      fullUrl,
      body: req.body,
      queryParams: req.structuredQueryParams,
      endpointKind: kind,
      endpointAction: action,
      endpointName: req.name,
      rawUrl: req.url,
      resourceFolder,
      sdkConfig,
      sdkExample,
    }),
    python: emitPython({
      method: req.method,
      fullUrl,
      body: req.body,
    }),
  };

  const samples = await highlightSampleSet(rawSamples);

  const variants = await Promise.all(
    req.examples
      .filter((ex) => ex.requestBody && ex.requestBody !== req.body)
      .map(async (ex) => {
        const variantSamples = {
          curl: emitCurl({
            method: req.method,
            fullUrl,
            headers: req.headers,
            body: ex.requestBody,
          }),
          js: emitJs({
            method: req.method,
            fullUrl,
            body: ex.requestBody,
            queryParams: req.structuredQueryParams,
            endpointKind: kind,
            endpointAction: action,
            resourceFolder,
            sdkConfig,
          }),
          php: emitPhp({
            method: req.method,
            fullUrl,
            body: ex.requestBody,
            queryParams: req.structuredQueryParams,
            endpointKind: kind,
            endpointAction: action,
            endpointName: req.name,
            rawUrl: req.url,
            resourceFolder,
            sdkConfig,
            sdkExample,
          }),
          python: emitPython({
            method: req.method,
            fullUrl,
            body: ex.requestBody,
          }),
        };

        return {
          title: ex.name,
          samples: await highlightSampleSet(variantSamples),
        };
      }),
  );

  const canonicalResponse = pickCanonicalResponse(req.examples);
  const responseHtml = canonicalResponse?.responseBody
    ? await highlightCode(formatJson(canonicalResponse.responseBody), 'json')
    : '';

  return {
    id,
    method: req.method,
    displayPath,
    description: req.description ?? '',
    endpointTitle: req.name,
    samples,
    variants,
    canonicalResponse,
    responseHtml,
    bodyParams: req.bodyParams ?? [],
    queryParams: req.queryParams ?? [],
  };
}

/**
 * Highlight every code string in a sample set, returning `{lang: {code, html}}`.
 */
async function highlightSampleSet(samples) {
  const out = {};
  for (const [lang, code] of Object.entries(samples)) {
    out[lang] = { code, html: await highlightCode(code, lang) };
  }
  return out;
}

function formatJson(s) {
  try {
    return JSON.stringify(JSON.parse(s), null, 2);
  } catch {
    return s;
  }
}

function pickCanonicalResponse(examples) {
  // Prefer 2xx with a non-empty body.
  for (const ex of examples) {
    if (ex.responseBody && ex.responseStatus >= 200 && ex.responseStatus < 300) {
      return ex;
    }
  }
  for (const ex of examples) {
    if (ex.responseBody) return ex;
  }
  return null;
}

/**
 * Render a `?key=value&key=value` string from a structured queryParams map.
 * Returns '' when the map is empty. Postman example values often use
 * `<string>` placeholders — we keep them as-is so the rendered curl matches
 * what Postman would send.
 */
function buildQueryString(params) {
  if (!params || typeof params !== 'object') return '';
  const entries = Object.entries(params);
  if (entries.length === 0) return '';
  return (
    '?' +
    entries
      .map(([k, v]) => `${encodeForQuery(k)}=${encodeForQuery(v)}`)
      .join('&')
  );
}

function encodeForQuery(s) {
  // Don't double-encode placeholders like `{{place_name}}` or `<string>`;
  // those are documentation-time stand-ins, leave them readable.
  if (typeof s !== 'string') s = String(s);
  if (s.includes('{{') || s.includes('<')) return s;
  return encodeURIComponent(s);
}

function templatedPathToDisplay(rawUrl) {
  // Strip {{base_url}} entirely and collapse any remaining template variables
  // that just denote routing prefix (e.g. {{api_prefix}} on Ledger, {{namespace}}).
  let s = rawUrl.replace(/\{\{base_url\}\}/g, '');

  // Replace the namespace placeholder with a concrete /v1.
  s = s.replace(/\/?\{\{namespace\}\}/g, '/v1');

  // Strip any other unresolved path-segment placeholders ({{api_prefix}}, etc.).
  // Whole-segment variables get removed; collapse the resulting `//` cleanup
  // happens below.
  s = s.replace(/\/?\{\{[a-z0-9_]+\}\}(?=\/|$|\?)/gi, '');

  // Convert :id-style and {{xxx_id}} to :id placeholders.
  s = s.replace(/\{\{([a-z0-9_]+_id|id)\}\}/gi, ':id');

  // Normalize duplicate slashes left behind by stripping segments.
  s = s.replace(/\/{2,}/g, '/');

  return s.startsWith('/') ? s : `/${s}`;
}

/**
 * Read the resource description from `<ResourceFolder>/.resources/definition.yaml`.
 *
 * The definition.yaml is the Postman Native Git canonical home for
 * folder-level metadata. We pluck its `description:` and surface it as the
 * paragraph under the resource title in <ResourceHeader>. Returns an empty
 * string when the file or field is absent — the renderer falls back to a
 * generic placeholder in that case.
 */
async function loadResourceDefinition(resourceDir) {
  const filePath = path.join(resourceDir, '.resources', 'definition.yaml');
  try {
    const yamlText = await fs.readFile(filePath, 'utf8');
    const data = YAML.parse(yamlText);
    return cleanText(data?.description ?? '');
  } catch {
    return '';
  }
}

// ---------------------------------------------------------------------------
// Loading from native-git YAML
// ---------------------------------------------------------------------------

/**
 * Returns the requests in a resource folder, ordered by the `order` field
 * (Postman uses this to control display order in the collection panel).
 */
async function loadRequests(resourceDir) {
  const entries = (await fs.readdir(resourceDir, { withFileTypes: true })).filter(
    (e) => e.isFile() && e.name.endsWith('.request.yaml'),
  );

  const requests = [];
  for (const e of entries) {
    const filePath = path.join(resourceDir, e.name);
    const yamlText = await fs.readFile(filePath, 'utf8');
    const data = YAML.parse(yamlText);

    const requestName = e.name.replace(/\.request\.yaml$/, '');
    const examples = await loadExamples(resourceDir, requestName);
    const bodyParams = await loadParamsFile(
      resourceDir,
      requestName,
      'params',
    );
    const queryParams = await loadParamsFile(
      resourceDir,
      requestName,
      'queryParams',
    );

    requests.push({
      name: requestName,
      description: cleanText(data.description),
      method: data.method ?? 'GET',
      url: data.url ?? '',
      headers: extractHeaders(data.headers),
      body: extractBody(data.body),
      structuredQueryParams: extractStructuredQueryParams(data.queryParams),
      bodyParams,
      queryParams,
      order: typeof data.order === 'number' ? data.order : 1000,
      examples,
    });
  }

  requests.sort((a, b) => a.order - b.order);
  return requests;
}

/**
 * Load `<requestName>.<suffix>.yaml` (suffix = 'params' or 'queryParams').
 * Returns the `fields` array, or [] when the file is absent.
 */
async function loadParamsFile(resourceDir, requestName, suffix) {
  const filePath = path.join(resourceDir, `${requestName}.${suffix}.yaml`);
  try {
    const yamlText = await fs.readFile(filePath, 'utf8');
    const data = YAML.parse(yamlText);
    if (!data || !Array.isArray(data.fields)) return [];
    return data.fields;
  } catch {
    return [];
  }
}

/**
 * Load `<ResourceFolder>/.resources/object.yaml` if it exists. Pre-highlights
 * the JSON `example` with Shiki so the rendered MDX can drop the html into
 * a <ResourceObject> via `dangerouslySetInnerHTML`. Returns null when no
 * `object.yaml` is present.
 *
 * Schema:
 *   $kind: object
 *   name: Order
 *   description: |- "..."
 *   example: "{...json...}"
 *   fields: [{ name, type, description, required?, fields? }]
 */
async function loadResourceObject(resourceDir) {
  const filePath = path.join(resourceDir, '.resources', 'object.yaml');
  let yamlText;
  try {
    yamlText = await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }

  const data = YAML.parse(yamlText);
  if (!data || typeof data !== 'object') return null;

  const name = typeof data.name === 'string' ? data.name : null;
  if (!name) return null;

  const example = typeof data.example === 'string' ? data.example : '';
  const formatted = formatJson(example);

  return {
    name,
    id: `the-${slugify(name)}-object`,
    description: cleanText(data.description),
    example: formatted,
    exampleHtml: formatted ? await highlightCode(formatted, 'json') : '',
    fields: Array.isArray(data.fields) ? data.fields : [],
  };
}

/**
 * Pull the structured query-parameter map (`{key: value}`) from the request
 * YAML's top-level `queryParams:` block, if present. Used to display the
 * sample query-string in the curl-and-friends code samples.
 */
function extractStructuredQueryParams(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
  const out = {};
  for (const [k, v] of Object.entries(raw)) {
    if (typeof v === 'string') out[k] = v;
    else if (typeof v === 'number' || typeof v === 'boolean') out[k] = String(v);
  }
  return out;
}

function extractHeaders(raw) {
  if (!raw) return {};
  if (typeof raw === 'object' && !Array.isArray(raw)) return raw;
  if (Array.isArray(raw)) {
    const out = {};
    for (const h of raw) {
      if (h?.key) out[h.key] = h.value ?? '';
    }
    return out;
  }
  return {};
}

function extractBody(body) {
  if (!body) return null;
  if (body.type === 'json' || body.type === 'raw') {
    return cleanText(body.content);
  }
  return null;
}

async function loadExamples(resourceDir, requestName) {
  const examplesDir = path.join(
    resourceDir,
    '.resources',
    `${requestName}.resources`,
    'examples',
  );

  let entries;
  try {
    entries = await fs.readdir(examplesDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const yamls = entries.filter(
    (e) => e.isFile() && e.name.endsWith('.example.yaml'),
  );

  const examples = [];
  for (const e of yamls) {
    const yamlText = await fs.readFile(path.join(examplesDir, e.name), 'utf8');
    const data = YAML.parse(yamlText);
    examples.push({
      name: e.name.replace(/\.example\.yaml$/, ''),
      requestBody: extractBody(data.request?.body),
      responseStatus: data.response?.statusCode ?? 200,
      responseStatusText: data.response?.statusText,
      responseBody: extractBody(data.response?.body),
      order: typeof data.order === 'number' ? data.order : 1000,
    });
  }

  examples.sort((a, b) => a.order - b.order);
  return examples;
}

// ---------------------------------------------------------------------------
// Workflow generation
// ---------------------------------------------------------------------------

async function generateWorkflow(folder, config) {
  console.log(`\n🔁 ${folder} → /docs/api/${config.slug}.mdx`);

  const collectionDir = path.join(COLLECTIONS_DIR, folder);
  const requests = await loadFlatRequests(collectionDir);

  const slugParts = config.slug.split('/');
  const apiOutDir = path.join(OUT_BASE, ...slugParts.slice(0, -1));
  await fs.mkdir(apiOutDir, { recursive: true });

  const outFile = path.join(OUT_BASE, `${config.slug}.mdx`);

  // Workflow steps touch many different resources, so a single resource-folder
  // → SDK store mapping doesn't apply per step. Fall back to raw HTTP code
  // samples for workflows. Future improvement: infer the resource from each
  // step's URL path and emit a real SDK call per step.
  const steps = await Promise.all(
    requests.map((req) =>
      buildEndpointSection(req, {
        folder,
        resourceFolder: '__workflow__',
        sdkConfig: undefined,
      }),
    ),
  );

  const mdx = renderWorkflowPage({
    title: humanTitle(folder),
    description: descriptionForWorkflow(folder),
    steps,
  });

  await fs.writeFile(outFile, mdx, 'utf8');
  console.log(`   • ${path.basename(outFile)} (${steps.length} steps)`);

  return {
    title: humanTitle(folder),
    slug: config.slug,
    endpoints: steps.map((s) => ({
      title: s.endpointTitle,
      id: s.id,
      method: s.method,
      path: s.displayPath,
    })),
  };
}

function descriptionForWorkflow() {
  return '';
}

/**
 * Workflow collections store every request at the top level of the collection
 * folder (no per-resource subfolders). Walk the folder for `*.request.yaml`.
 */
async function loadFlatRequests(collectionDir) {
  const entries = (await fs.readdir(collectionDir, { withFileTypes: true }))
    .filter((e) => e.isFile() && e.name.endsWith('.request.yaml'));

  const requests = [];
  for (const e of entries) {
    const filePath = path.join(collectionDir, e.name);
    const yamlText = await fs.readFile(filePath, 'utf8');
    const data = YAML.parse(yamlText);

    const requestName = e.name.replace(/\.request\.yaml$/, '');
    const examples = await loadExamples(collectionDir, requestName);
    const bodyParams = await loadParamsFile(
      collectionDir,
      requestName,
      'params',
    );
    const queryParams = await loadParamsFile(
      collectionDir,
      requestName,
      'queryParams',
    );

    requests.push({
      name: requestName,
      description: cleanText(data.description),
      method: data.method ?? 'GET',
      url: data.url ?? '',
      headers: extractHeaders(data.headers),
      body: extractBody(data.body),
      structuredQueryParams: extractStructuredQueryParams(data.queryParams),
      bodyParams,
      queryParams,
      order: typeof data.order === 'number' ? data.order : 1000,
      examples,
    });
  }

  requests.sort((a, b) => a.order - b.order);
  return requests;
}

// ---------------------------------------------------------------------------
// MDX rendering
// ---------------------------------------------------------------------------

function renderResourcePage({ title, description, endpoints, objectMeta }) {
  // Build the page-header TOC. The resource object (when present) goes first
  // — it has no method/path, just an anchor link.
  const tocEntries = [];
  if (objectMeta) {
    tocEntries.push(
      `    { title: ${jsString(`The ${objectMeta.name} object`)}, id: ${jsString(objectMeta.id)} },`,
    );
  }
  for (const e of endpoints) {
    tocEntries.push(
      `    { title: ${jsString(e.endpointTitle)}, id: ${jsString(e.id)}, method: ${jsString(e.method)}, path: ${jsString(e.displayPath)} },`,
    );
  }

  return [
    `---`,
    `title: ${escapeFrontmatter(title)}`,
    `description: ${escapeFrontmatter(description || `${title} REST API reference.`)}`,
    `---`,
    ``,
    `<ResourceHeader`,
    `  title=${jsxString(title)}`,
    description
      ? `  description=${jsxString(description)}`
      : `  description=${jsxString(`${title} REST API reference.`)}`,
    `  endpoints={[`,
    tocEntries.join('\n'),
    `  ]}`,
    `/>`,
    ``,
    objectMeta ? renderResourceObject(objectMeta) : '',
    ...endpoints.map(renderEndpoint),
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Render the resource-level "Object" section as MDX. Renders <ResourceObject>
 * with the pre-highlighted JSON example on the right, and a <ParamTable
 * title="Attributes"> with one <Param> per field on the left.
 */
function renderResourceObject(meta) {
  const attrTable =
    meta.fields.length > 0
      ? renderParamTable(meta.fields, 'Attributes')
      : '';

  return [
    `<ResourceObject`,
    `  name=${jsxString(meta.name)}`,
    `  id=${jsxString(meta.id)}`,
    meta.description
      ? `  description=${jsxString(meta.description)}`
      : '',
    `  example={${jsxBacktickString(meta.example)}}`,
    `  exampleHtml={${jsxBacktickString(meta.exampleHtml)}}`,
    `>`,
    attrTable,
    `</ResourceObject>`,
    '',
  ]
    .filter(Boolean)
    .join('\n');
}

function renderEndpoint(e) {
  const desc = e.description ? mdxEscapeProse(e.description) + '\n' : '';
  const queryTable =
    e.queryParams.length > 0
      ? renderParamTable(e.queryParams, 'Query parameters')
      : '';
  const bodyTable =
    e.bodyParams.length > 0
      ? renderParamTable(e.bodyParams, 'Body parameters')
      : '';
  const variantsProp =
    e.variants.length > 0
      ? `      variants={${renderVariantsProp(e.variants)}}`
      : '';
  return [
    `<Endpoint method=${jsxString(e.method)} path=${jsxString(e.displayPath)} title=${jsxString(e.endpointTitle)} id=${jsxString(e.id)}>`,
    desc,
    queryTable,
    bodyTable,
    `  <HttpExample>`,
    `    <HttpRequest`,
    `      method=${jsxString(e.method)}`,
    `      path=${jsxString(e.displayPath)}`,
    `      samples={${renderSamplesProp(e.samples)}}`,
    variantsProp,
    `    />`,
    e.canonicalResponse && e.canonicalResponse.responseBody
      ? `    <HttpResponse status={${e.canonicalResponse.responseStatus}} body={${jsxBacktickString(e.canonicalResponse.responseBody)}} html={${jsxBacktickString(e.responseHtml ?? '')}} />`
      : '',
    `  </HttpExample>`,
    `</Endpoint>`,
    '',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Render the `samples` prop as `{{ curl: { code: `…`, html: `…` }, ... }}`
 * Each lang gets both raw code (for copy) and pre-highlighted HTML (for display).
 */
function renderSamplesProp(samples) {
  const langs = ['curl', 'js', 'php', 'python'];
  const inner = langs
    .map((l) => {
      const s = samples[l];
      if (!s) return '';
      return `        ${l}: { code: ${jsxBacktickString(s.code)}, html: ${jsxBacktickString(s.html)} },`;
    })
    .filter(Boolean)
    .join('\n');
  return ['{', inner, '      }'].join('\n');
}

/**
 * Render a list of param descriptors as a <ParamTable> with <Param> children.
 * Recursively renders nested object params via the `nested` prop.
 */
function renderParamTable(fields, title, indent = '  ') {
  const rows = fields.map((f) => renderParam(f, indent + '  '));
  return [
    `${indent}<ParamTable title=${jsxString(title)}>`,
    ...rows,
    `${indent}</ParamTable>`,
    '',
  ].join('\n');
}

function renderParam(field, indent) {
  const { name, type, required, description, values, fields: nested } = field;
  const typeLabel = formatParamType(type, values);

  // Compose description: use `description` directly. If the field has enum
  // values, append them as a parenthetical so users see the allowed set
  // without us needing a dedicated <enum> visual.
  const desc = formatParamDescription(description, type, values);

  const head =
    `${indent}<Param name=${jsxString(name)} type=${jsxString(typeLabel)}` +
    (required ? ` required` : '') +
    (field.default !== undefined && field.default !== null
      ? ` default=${jsxString(String(field.default))}`
      : '') +
    `>`;

  const lines = [head];
  if (desc) {
    const escaped = escapeJsxText(desc);
    const descLines = escaped.split('\n');
    for (const dl of descLines) {
      lines.push(dl.length ? `${indent}  ${dl}` : '');
    }
  }

  if (Array.isArray(nested) && nested.length > 0) {
    for (const child of nested) {
      lines.push(renderParam(child, indent + '  '));
    }
  }

  lines.push(`${indent}</Param>`);
  return lines.join('\n');
}

function formatParamType(type, values) {
  if (!type) return 'string';
  if (type === 'enum' && Array.isArray(values) && values.length) {
    return 'enum';
  }
  return type;
}

function formatParamDescription(description, type, values) {
  let out = (description ?? '').trim();
  if (type === 'enum' && Array.isArray(values) && values.length) {
    const list = values.map((v) => `\`${v}\``).join(', ');
    out = out ? `${out} One of ${list}.` : `One of ${list}.`;
  }
  return out;
}

/** Inline-escape a string of plain prose for safe placement inside JSX. */
function escapeJsxText(s) {
  return String(s)
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');
}

/**
 * Render variants as a JS array literal that becomes the `variants` prop on
 * <HttpRequest>. The component renders them as a joined accordion section
 * inside the same code-panel container.
 */
function renderVariantsProp(variants) {
  const items = variants
    .map(
      (v) =>
        `        { title: ${jsString(v.title)}, samples: ${renderSamplesProp(v.samples)} },`,
    )
    .join('\n');
  return ['[', items, '      ]'].join('\n');
}

function renderWorkflowPage({ title, description, steps }) {
  return [
    `---`,
    `title: ${escapeFrontmatter(title)}`,
    `description: ${escapeFrontmatter(description || `${title} workflow.`)}`,
    `---`,
    ``,
    `<Workflow title=${jsxString(title)}${description ? ` description=${jsxString(description)}` : ''}>`,
    ...steps.map(renderWorkflowStep),
    `</Workflow>`,
  ].join('\n');
}

function renderWorkflowStep(step) {
  const queryTable =
    step.queryParams.length > 0
      ? renderParamTable(step.queryParams, 'Query parameters', '    ')
      : '';
  const bodyTable =
    step.bodyParams.length > 0
      ? renderParamTable(step.bodyParams, 'Body parameters', '    ')
      : '';
  const variantsProp =
    step.variants.length > 0
      ? `          variants={${renderVariantsProp(step.variants)}}`
      : '';
  return [
    `  <WorkflowStep title=${jsxString(step.endpointTitle)} id=${jsxString(step.id)}>`,
    step.description ? `${mdxEscapeProse(step.description)}\n` : '',
    `    <Endpoint method=${jsxString(step.method)} path=${jsxString(step.displayPath)} id=${jsxString(`${step.id}-endpoint`)}>`,
    queryTable,
    bodyTable,
    `      <HttpExample>`,
    `        <HttpRequest`,
    `          method=${jsxString(step.method)}`,
    `          path=${jsxString(step.displayPath)}`,
    `          samples={${renderSamplesProp(step.samples)}}`,
    variantsProp,
    `        />`,
    step.canonicalResponse && step.canonicalResponse.responseBody
      ? `        <HttpResponse status={${step.canonicalResponse.responseStatus}} body={${jsxBacktickString(step.canonicalResponse.responseBody)}} html={${jsxBacktickString(step.responseHtml ?? '')}} />`
      : '',
    `      </HttpExample>`,
    `    </Endpoint>`,
    `  </WorkflowStep>`,
  ]
    .filter(Boolean)
    .join('\n');
}

// ---------------------------------------------------------------------------
// Sidebar config emission
// ---------------------------------------------------------------------------

async function writeNavConfig(navGroups) {
  // Build the apiNav object literal as a string.
  const groupsByLabel = {};
  for (const [label, items] of Object.entries(navGroups)) {
    groupsByLabel[label] ??= [];
    for (const it of items) {
      groupsByLabel[label].push(it);
    }
  }

  // Pin the "APIs" group above "Workflows".
  const orderedGroups = Object.entries(groupsByLabel).sort(
    ([a], [b]) => groupOrder(a) - groupOrder(b),
  );

  const groupsCode = orderedGroups
    .map(([label, resources]) => {
      const inner = resources
        .map(
          (r) => `        {
          title: ${jsString(r.title)},
          slug: ${jsString(r.slug)},
          endpoints: [
${r.endpoints
  .map(
    (e) =>
      `            { title: ${jsString(e.title)}, id: ${jsString(e.id)}, method: ${jsString(e.method)}, path: ${jsString(e.path)} },`,
  )
  .join('\n')}
          ],
        },`,
        )
        .join('\n');
      return `    {
      title: ${jsString(label)},
      resources: [
${inner}
      ],
    },`;
    })
    .join('\n');

  const out = `/**
 * AUTO-GENERATED — do not edit by hand.
 * Run \`node scripts/generate-api-docs.mjs\` to regenerate.
 *
 * The structural source of truth for the API reference sidebar — produced by
 * the API-docs generator from the postman collection submodule.
 */

import type { ApiNav } from './api-nav';

export const apiNav: ApiNav = {
  topSectionsPageSlug: '',
  topSections: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Authentication', id: 'authentication' },
    { title: 'Errors', id: 'errors' },
    { title: 'Pagination', id: 'pagination' },
    { title: 'Versioning', id: 'versioning' },
  ],
  resourceGroups: [
${groupsCode}
  ],
};
`;

  await fs.writeFile(NAV_OUT, out, 'utf8');
  console.log(`\n📑 Wrote ${path.relative(ROOT, NAV_OUT)}`);
}

function groupOrder(label) {
  const order = [
    'Fleetbase API',
    'Core API',
    'Ledger API',
    'Storefront API',
    'Workflows',
  ];
  const idx = order.indexOf(label);
  return idx === -1 ? 999 : idx;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanTitle(folder) {
  return folder.replace(/^Fleetbase\s+/i, '');
}

function cleanText(s) {
  if (!s) return '';
  return s.trim();
}

function escapeFrontmatter(s) {
  // Single-line YAML scalar: escape quotes, collapse newlines.
  const oneLine = s.replace(/\s+/g, ' ').trim();
  if (oneLine.includes('"') || oneLine.includes(':')) {
    return `'${oneLine.replace(/'/g, "''")}'`;
  }
  return `"${oneLine}"`;
}

function jsString(s) {
  return JSON.stringify(s ?? '');
}

function jsxString(s) {
  return `"${(s ?? '').replace(/"/g, '&quot;')}"`;
}

function jsxBacktickString(s) {
  // Backtick template literal — escape backticks and ${ sequences.
  const escaped = (s ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  return `\`${escaped}\``;
}

function mdxEscapeProse(text) {
  // Postman descriptions are markdown; pass them through but indent so they
  // render inside the surrounding <Endpoint>. Newlines preserved.
  return text
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');
}

main().catch((err) => {
  console.error('\n❌ API docs generation failed.');
  console.error(err);
  process.exit(1);
});
