# API Docs Generator

Generates the `/docs/api/*` pages from the [Postman collection submodule](../vendor/postman) at build time. The hand-authored `content/docs/api/index.mdx` (intro / auth / errors copy) is left alone.

## What gets generated

- `content/docs/api/<api-slug>/<resource>.mdx` — one MDX page per resource
- `content/docs/api/workflows/<workflow>.mdx` — one MDX page per workflow
- `src/lib/api-nav.generated.ts` — sidebar nav config

All four are git-ignored. The generator runs in `postinstall`, `predev`, and `prebuild`, so dev and CI builds always have fresh output.

## Running locally

```bash
node scripts/generate-api-docs.mjs
# or
pnpm generate:api-docs
```

If the submodule isn't initialized, the generator writes an empty stub `api-nav.generated.ts` (so TypeScript compiles), warns, and exits 0.

To initialize the submodule:

```bash
git submodule update --init --recursive
```

## Adding a new collection

When the postman repo gains a new top-level collection folder (e.g. `Fleetbase Ledger API`):

1. **Bump the submodule** in this repo so it picks up the new collection:

   ```bash
   git submodule update --remote vendor/postman
   git add vendor/postman
   git commit -m "Bump postman submodule to pick up Ledger API"
   ```

2. **Add a config entry** in [`api-docs.config.mjs`](./api-docs.config.mjs):

   ```js
   'Fleetbase Ledger API': {
     slug: 'ledger',
     sidebarGroup: 'APIs',
     type: 'api',
     sdk: { /* SDK package + per-resource store mappings, optional */ },
   },
   ```

3. **Run the generator** to verify:

   ```bash
   pnpm generate:api-docs
   ```

   You should see `📘 Fleetbase Ledger API → /docs/api/ledger/` plus one `.mdx` line per resource.

If you skip step 2, the generator picks the collection up anyway with sluggified defaults (slug = sluggified folder name, group = `"APIs"`, no SDK code samples). It emits a warning so you know to add config when you have time.

## What stays manual

- `content/docs/api/index.mdx` — Introduction, Authentication, Errors, Pagination, Versioning narrative content. The generator never touches this file; edit it directly when the platform's auth or pagination changes.
- The five top-level sidebar items (Introduction, Authentication, etc.) are hard-coded in the generator. Adjust there if you add a new top-level intro section.

## YAML side-files the generator consumes

Alongside each `<Request>.request.yaml`, the generator looks for these optional companion files. All are picked up automatically — no config or registration needed.

### `.resources/definition.yaml` (per resource folder)

The resource-level intro that appears as the paragraph under the page title. Lives at `<ResourceFolder>/.resources/definition.yaml`. The generator reads its `description:` and surfaces it in `<ResourceHeader>` (left column, under the title).

```yaml
$kind: collection
description: |-
  Places represent geographic locations — addresses, coordinates, or named
  landmarks. They serve as pickup/dropoff points on orders, the boundaries
  of service areas, and saved locations on customer profiles.
order: 1000
```

This is the right place for **resource-page** descriptions (the intro that frames the whole resource). The complementary `.resources/object.yaml` `description:` field is for the **model object** description (rendered inside the "The X object" section). They're often similar in spirit but live in different sections of the page — keep them distinct so each section reads naturally on its own.

### `<Request>.params.yaml`

Body-parameter descriptions for the request. Renders as a `<ParamTable title="Body parameters">` above the code example.

```yaml
$kind: params
fields:
  - name: pickup
    type: object
    required: true
    description: "Pickup location for the order."
    fields:
      - name: public_id
        type: string
        required: true
        description: "Public identifier of an existing place."
  - name: status
    type: enum
    values: ["created", "preparing", "dispatched"]
    description: "Initial status."
```

Per-field keys: `name`, `type`, `description` are required. `required`, `default`, `values` (for `type: enum`), and `fields` (for nested objects) are optional. Type vocabulary: `string`, `integer`, `number`, `boolean`, `timestamp`, `date`, `currency`, `object`, `array of strings`, `array of objects`, `enum`.

### `<Request>.queryParams.yaml`

Same schema as `params.yaml`, but for query parameters. Renders as `<ParamTable title="Query parameters">`.

### `<Request>.resources/examples/<Variant>.example.yaml`

Response examples for the request. The generator picks the first 2xx-with-body example as the canonical response panel; additional examples become "Other ways to call this" accordion items inside the request panel.

```yaml
$kind: http-example
request:
  url: "{{base_url}}/{{namespace}}/orders"
  method: POST
  body:
    type: json
    content: |
      { ... request body ... }
response:
  statusCode: 201
  statusText: Created
  body:
    type: json
    content: |
      { ... response body ... }
order: 1000
```

For an endpoint to render a response panel, at least one example must have `response.statusCode` in the 2xx range with a non-empty `response.body.content`.

### `.resources/object.yaml` (per resource folder)

Drops a Stripe-style "The X object" section at the top of each resource page. When present, the section is prepended to both the page TOC and the sidebar's resource sub-items.

```yaml
$kind: object
name: Order
description: |-
  An order represents a delivery, pickup, or service request. It carries a
  pickup point, a dropoff (or waypoint list), the assigned driver, and
  lifecycle timestamps.
example: |
  {
    "id": "order_a1b2c3",
    "object": "order",
    "status": "created",
    ...
  }
fields:
  - name: id
    type: string
    description: "Unique identifier for the order."
  - name: status
    type: enum
    values: ["created", "preparing", "dispatched", "in_progress", "completed", "canceled"]
    description: "Lifecycle status."
  # ...one entry per attribute, same schema as params.yaml fields
```

Required keys: `name`. Optional: `description`, `example`, `fields`. The `example` is pre-highlighted with Shiki at generation time, so the rendered docs show colored JSON. The `fields` array uses the same schema as `params.yaml` (including nested `fields:` for object attributes).

Drop one `object.yaml` per resource folder when you want it to appear; omit when you don't.

## Architecture

```
scripts/
├── api-docs.config.mjs   # per-collection config (slug, group, SDK mappings)
├── sdk-emitters.mjs       # produces curl / JS / PHP / Python code samples
└── generate-api-docs.mjs  # walks postman YAML, emits MDX, writes nav config
```

### Auto-discovery

The generator walks `vendor/postman/postman/collections/` and treats every top-level folder as a collection. For each:

- **Standard API** (default) — every subfolder is a resource page; every `*.request.yaml` becomes an endpoint section
- **Workflow** (`type: 'workflow'` in config) — every `*.request.yaml` at the top level becomes a sequenced step

Examples (`*.example.yaml` files under `.resources/`) are picked up automatically. Each endpoint:

- Renders the canonical 2xx-with-body example as the response panel
- Renders alternative request bodies (no response body) as collapsible accordions

### When the script needs code changes

Only for **new kinds** of behavior, not new instances:

- New SDK with a new call signature → add a sample emitter to `sdk-emitters.mjs`
- PHP SDK endpoint mappings come from `php-sdk-examples.generated.json`, generated by `fleetbase/fleetbase-php`. Refresh that catalog when the SDK contract changes; ordinary CRUD examples remain intentionally concise while custom endpoints use the exact SDK method.
- New rendering pattern (different layout for some endpoint type) → add a template variant in `generate-api-docs.mjs`
- Postman invents a new YAML shape → adapt the parser in `loadRequests` / `loadExamples`

Day-to-day collection changes (resources added, examples updated, descriptions reworded) need zero code changes — just bump the submodule.
