/**
 * Code-sample emitters for the API-docs generator.
 *
 * Given an endpoint (method + path + body) and the per-collection SDK config,
 * produces the multi-language code samples shown in <HttpRequest>.
 *
 * Languages:
 *   - curl   (always emitted, raw HTTP)
 *   - js     (uses the SDK if mapped, else raw fetch)
 *   - php    (uses the generated PHP SDK catalog when mapped, else raw Guzzle)
 *   - python (always raw `requests` — no Python SDK exists)
 */

const HOST_PLACEHOLDER = 'https://api.fleetbase.io';
const KEY_PLACEHOLDER = 'flb_live_…';

/**
 * Classify an endpoint by Postman name + URL shape so we know which SDK
 * method (if any) to emit. Returns { kind, action }.
 */
export function classifyEndpoint({ name, method, pathSegments }) {
  const m = method.toUpperCase();
  const lastSeg = pathSegments[pathSegments.length - 1] ?? '';

  // Custom action endpoints look like /<resource>/<id>/<action>
  // e.g. POST /v1/orders/:id/dispatch
  if (
    pathSegments.length >= 3 &&
    isIdParam(pathSegments[pathSegments.length - 2]) &&
    !isIdParam(lastSeg)
  ) {
    return { kind: 'custom-action', action: lastSeg };
  }

  // Has trailing :id → CRUD on a specific record
  if (isIdParam(lastSeg)) {
    if (m === 'GET') return { kind: 'find' };
    if (m === 'PUT' || m === 'PATCH') return { kind: 'update' };
    if (m === 'DELETE') return { kind: 'delete' };
  }

  // No :id → collection-level
  if (m === 'POST') return { kind: 'create' };
  if (m === 'GET') {
    if (/^Query|^List/i.test(name)) return { kind: 'query' };
    return { kind: 'query' };
  }

  return { kind: 'raw' };
}

function isIdParam(seg) {
  return seg.startsWith(':') || seg.startsWith('{');
}

// ---------------------------------------------------------------------------
// curl
// ---------------------------------------------------------------------------

export function emitCurl({ method, fullUrl, headers, body }) {
  const lines = [`curl ${method === 'GET' ? '' : `-X ${method} `}${fullUrl}`];
  const allHeaders = {
    Authorization: `Bearer ${KEY_PLACEHOLDER}`,
    ...(body ? { 'Content-Type': 'application/json' } : {}),
    ...filterUserHeaders(headers),
  };
  for (const [k, v] of Object.entries(allHeaders)) {
    lines.push(`  -H "${k}: ${v}"`);
  }
  if (body) {
    lines.push(`  -d '${escapeBodyForCurl(body)}'`);
  }
  return lines.join(' \\\n');
}

function filterUserHeaders(headers = {}) {
  const out = {};
  for (const [k, v] of Object.entries(headers)) {
    const key = k.toLowerCase();
    if (key === 'authorization' || key === 'content-type') continue;
    out[k] = v;
  }
  return out;
}

function escapeBodyForCurl(body) {
  return body.replace(/'/g, `'\\''`);
}

// ---------------------------------------------------------------------------
// JavaScript
// ---------------------------------------------------------------------------

export function emitJs({
  method,
  fullUrl,
  body,
  queryParams,
  endpointKind,
  endpointAction,
  resourceFolder,
  sdkConfig,
}) {
  const js = sdkConfig?.js;
  if (!js) return emitJsRaw({ method, fullUrl, body });

  const store = js.stores?.[resourceFolder] ?? camelCase(resourceFolder);
  const isOrderAction =
    endpointKind === 'custom-action' && resourceFolder === 'Orders';
  const sdkMethod = orderActionMethod(js, endpointAction);

  if (isOrderAction && sdkMethod) {
    return [
      `import Fleetbase from '${js.pkg}';`,
      ``,
      `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
      ``,
      `const order = await ${js.client}.orders.findRecord(orderId);`,
      `await order.${sdkMethod}(${body ? formatJsArg(body) : ''});`,
    ].join('\n');
  }

  switch (endpointKind) {
    case 'create':
      return [
        `import Fleetbase from '${js.pkg}';`,
        ``,
        `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `const record = await ${js.client}.${store}.create(${body ? formatJsArg(body) : '{}'});`,
      ].join('\n');
    case 'find':
      return [
        `import Fleetbase from '${js.pkg}';`,
        ``,
        `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `const record = await ${js.client}.${store}.findRecord(id);`,
      ].join('\n');
    case 'query': {
      // Prefer the structured queryParams block (the documented inputs to a
      // list/search call) over the request body, which is empty for GET.
      const arg = formatJsObjectArg(queryParams ?? {});
      return [
        `import Fleetbase from '${js.pkg}';`,
        ``,
        `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `const records = await ${js.client}.${store}.query(${arg});`,
      ].join('\n');
    }
    case 'update':
      return [
        `import Fleetbase from '${js.pkg}';`,
        ``,
        `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `const record = await ${js.client}.${store}.update(id, ${body ? formatJsArg(body) : '{}'});`,
      ].join('\n');
    case 'delete':
      return [
        `import Fleetbase from '${js.pkg}';`,
        ``,
        `const ${js.client} = new Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `await ${js.client}.${store}.delete(id);`,
      ].join('\n');
    default:
      return emitJsRaw({ method, fullUrl, body });
  }
}

/** Format a key→value map as a JS object literal. Empty → `{}`. */
function formatJsObjectArg(map) {
  const keys = Object.keys(map ?? {});
  if (keys.length === 0) return '{}';
  const lines = keys.map((k) => {
    const v = map[k];
    return `  ${jsKeyEscape(k)}: ${JSON.stringify(v ?? '')}`;
  });
  return `{\n${lines.join(',\n')}\n}`;
}

function jsKeyEscape(k) {
  // Plain identifiers can render unquoted; everything else needs quoting.
  return /^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
}

function emitJsRaw({ method, fullUrl, body }) {
  const verb = method.toUpperCase();
  const init = [
    `method: '${verb}'`,
    `headers: { 'Authorization': 'Bearer ${KEY_PLACEHOLDER}'${body ? `, 'Content-Type': 'application/json'` : ''} }`,
    body ? `body: JSON.stringify(${formatJsArg(body)})` : null,
  ]
    .filter(Boolean)
    .join(',\n  ');

  return [
    `const response = await fetch('${fullUrl}', {`,
    `  ${init}`,
    `});`,
    `const data = await response.json();`,
  ].join('\n');
}

function formatJsArg(body) {
  try {
    const parsed = JSON.parse(body);
    return JSON.stringify(parsed, null, 2);
  } catch {
    return body;
  }
}

function orderActionMethod(jsConfig, action) {
  if (!action) return null;
  return jsConfig.orderActions?.[action] ?? null;
}

// ---------------------------------------------------------------------------
// PHP
// ---------------------------------------------------------------------------

export function emitPhp({
  method,
  fullUrl,
  body,
  queryParams,
  endpointKind,
  endpointAction,
  endpointName,
  rawUrl,
  resourceFolder,
  sdkConfig,
  sdkExample,
}) {
  const php = sdkConfig?.php;
  if (!php) return emitPhpRaw({ method, fullUrl, body });

  if (
    typeof sdkExample?.code === 'string' &&
    !isCanonicalPhpCrud({ endpointKind, endpointName, rawUrl })
  ) {
    return sdkExample.code;
  }

  const store = php.stores?.[resourceFolder] ?? camelCase(resourceFolder);

  switch (endpointKind) {
    case 'create':
      return [
        `<?php`,
        `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `$record = $${php.client}->${store}->create(${body ? formatPhpArg(body) : '[]'});`,
      ].join('\n');
    case 'find':
      return [
        `<?php`,
        `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `$record = $${php.client}->${store}->findRecord($id);`,
      ].join('\n');
    case 'query': {
      // Prefer the structured queryParams block (the documented inputs to a
      // list/search call) over the request body, which is empty for GET.
      const arg = formatPhpAssocArg(queryParams ?? {});
      return [
        `<?php`,
        `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `$records = $${php.client}->${store}->query(${arg});`,
      ].join('\n');
    }
    case 'update':
      return [
        `<?php`,
        `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `$record = $${php.client}->${store}->update($id, ${body ? formatPhpArg(body) : '[]'});`,
      ].join('\n');
    case 'delete':
      return [
        `<?php`,
        `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
        ``,
        `$${php.client}->${store}->destroy($id);`,
      ].join('\n');
    case 'custom-action':
      if (resourceFolder === 'Orders') {
        const sdkMethod = php.orderActions?.[endpointAction] ?? endpointAction;
        return [
          `<?php`,
          `$${php.client} = new \\Fleetbase\\Sdk\\Fleetbase('${KEY_PLACEHOLDER}');`,
          ``,
          `$order = $${php.client}->orders->findRecord($orderId);`,
          `$order->${sdkMethod}(${body ? formatPhpArg(body) : ''});`,
        ].join('\n');
      }
      return emitPhpRaw({ method, fullUrl, body });
    default:
      return emitPhpRaw({ method, fullUrl, body });
  }
}

function isCanonicalPhpCrud({ endpointKind, endpointName, rawUrl }) {
  const path = String(rawUrl ?? '')
    .replace(/^\{\{base_url\}\}\/\{\{namespace\}\}\/?/i, '')
    .split('?', 1)[0]
    .replace(/^\/+|\/+$/g, '');
  const segments = path === '' ? [] : path.split('/');
  const itemPath = segments.length === 2 && isIdParam(segments[1]);

  if (endpointKind === 'create') {
    return segments.length === 1 && /^Create\b/i.test(endpointName ?? '');
  }
  if (endpointKind === 'query') return segments.length === 1;
  if (endpointKind === 'find') return itemPath;
  if (endpointKind === 'update') return itemPath;
  if (endpointKind === 'delete') return itemPath;
  return false;
}

function emitPhpRaw({ method, fullUrl, body }) {
  const verb = method.toLowerCase();
  const opts = [`'headers' => ['Authorization' => 'Bearer ${KEY_PLACEHOLDER}']`];
  if (body) {
    opts.push(`'json' => ${formatPhpArg(body)}`);
  }
  return [
    `<?php`,
    `$client = new \\GuzzleHttp\\Client();`,
    ``,
    `$response = $client->${verb}('${fullUrl}', [`,
    `    ${opts.join(',\n    ')}`,
    `]);`,
    `$data = json_decode($response->getBody(), true);`,
  ].join('\n');
}

function formatPhpArg(body) {
  try {
    const parsed = JSON.parse(body);
    return phpArrayLiteral(parsed, 0);
  } catch {
    return `'${body.replace(/'/g, "\\'")}'`;
  }
}

/** Format a key→value map as a PHP associative array literal. Empty → `[]`. */
function formatPhpAssocArg(map) {
  const keys = Object.keys(map ?? {});
  if (keys.length === 0) return '[]';
  const lines = keys.map((k) => {
    const v = map[k];
    return `    '${k}' => ${phpScalarLiteral(v)}`;
  });
  return `[\n${lines.join(',\n')}\n]`;
}

function phpScalarLiteral(value) {
  if (value === null || value === undefined) return "''";
  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}

function phpArrayLiteral(value, indent) {
  const pad = '    '.repeat(indent);
  const innerPad = '    '.repeat(indent + 1);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return [
      `[`,
      ...value.map((v) => `${innerPad}${phpArrayLiteral(v, indent + 1)},`),
      `${pad}]`,
    ].join('\n');
  }
  if (value && typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return '[]';
    return [
      `[`,
      ...keys.map(
        (k) =>
          `${innerPad}'${k}' => ${phpArrayLiteral(value[k], indent + 1)},`,
      ),
      `${pad}]`,
    ].join('\n');
  }
  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`;
  if (value === null) return 'null';
  return String(value);
}

// ---------------------------------------------------------------------------
// Python
// ---------------------------------------------------------------------------

export function emitPython({ method, fullUrl, body }) {
  const verb = method.toLowerCase();
  const args = [
    `'${fullUrl}'`,
    `headers={'Authorization': 'Bearer ${KEY_PLACEHOLDER}'}`,
  ];
  if (body) {
    try {
      const parsed = JSON.parse(body);
      args.push(`json=${pythonLiteral(parsed, 0)}`);
    } catch {
      args.push(`data=${JSON.stringify(body)}`);
    }
  }
  return [
    `import requests`,
    ``,
    `response = requests.${verb}(`,
    `    ${args.join(',\n    ')},`,
    `)`,
    `data = response.json()`,
  ].join('\n');
}

function pythonLiteral(value, indent) {
  const pad = '    '.repeat(indent);
  const innerPad = '    '.repeat(indent + 1);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return [
      `[`,
      ...value.map((v) => `${innerPad}${pythonLiteral(v, indent + 1)},`),
      `${pad}]`,
    ].join('\n');
  }
  if (value && typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';
    return [
      `{`,
      ...keys.map(
        (k) =>
          `${innerPad}'${k}': ${pythonLiteral(value[k], indent + 1)},`,
      ),
      `${pad}}`,
    ].join('\n');
  }
  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`;
  if (value === null) return 'None';
  if (typeof value === 'boolean') return value ? 'True' : 'False';
  return String(value);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function camelCase(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());
}

export const RESOLVED_HOST = HOST_PLACEHOLDER;
export const API_KEY_PLACEHOLDER = KEY_PLACEHOLDER;
