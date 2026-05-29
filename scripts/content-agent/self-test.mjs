#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { buildAhrefsKeywordUrl, normalizeAhrefsKeyword } from './ahrefs.mjs';
import { callClaudeJson, generateFeatureImageBrief } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { buildContextManifest, selectContextSources } from './context.mjs';
import {
  buildGhostDraftPayload,
  createGhostAdminToken,
  getGhostPost,
  uploadGhostImage,
  updateGhostPost,
} from './ghost-admin.mjs';
import { normalizeArticleLinks, normalizeFleetbaseLinks } from './links.mjs';
import { generateFeatureImage } from './openai-image.mjs';
import { ArticleDraftSchema, RevisedArticleSchema, parseJsonObject } from './schemas.mjs';

async function testAhrefsUrl() {
  const url = buildAhrefsKeywordUrl(contentAgentConfig, 'route optimization API', {
    apiBaseUrl: 'https://example.test/v3',
    country: 'us',
    limit: 25,
  });

  assert.equal(url.origin, 'https://example.test');
  assert.equal(url.pathname, '/v3/keywords-explorer/matching-terms');
  assert.equal(url.searchParams.get('matching'), 'route optimization API');
  assert.equal(url.searchParams.get('limit'), '25');
  assert.ok(url.searchParams.get('select').includes('keyword'));
  assert.ok(url.searchParams.get('select').includes('volume'));
}

function testAhrefsNormalize() {
  const row = normalizeAhrefsKeyword(
    {
      keyword: 'open source fleet management software',
      volume: '1200',
      difficulty: '18',
      traffic_potential: '2100',
      parent_topic: { keyword: 'fleet management software' },
      intents: 'commercial,informational',
    },
    'open source fleet management',
  );

  assert.equal(row.volume, 1200);
  assert.equal(row.difficulty, 18);
  assert.deepEqual(row.intents, ['commercial', 'informational']);
}

function testGhostTokenAndPayload() {
  const token = createGhostAdminToken(
    'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    1700000000,
  );
  const parts = token.split('.');

  assert.equal(parts.length, 3);

  const payload = buildGhostDraftPayload(
    {
      title: 'Route Optimization API Guide',
      slug: 'route-optimization-api-guide',
      html: '<h2>Guide</h2><p>Useful draft.</p>',
      excerpt: 'A practical guide to route optimization APIs.',
      metaTitle: 'Route Optimization API Guide',
      metaDescription: 'Learn how route optimization APIs help logistics teams.',
      publicTags: ['Route Optimization'],
      featureImage: 'https://ghost.example/content/images/feature.png',
      featureImageAlt: 'Abstract logistics dashboard with route planning cards.',
    },
    contentAgentConfig,
  );

  assert.equal(payload.posts[0].status, 'draft');
  assert.equal(payload.posts[0].feature_image, 'https://ghost.example/content/images/feature.png');
  assert.equal(payload.posts[0].feature_image_alt, 'Abstract logistics dashboard with route planning cards.');
  assert.equal(payload.posts[0].tags.some((tag) => tag.name === '#needs-review'), true);
  assert.equal(payload.posts[0].tags.some((tag) => tag.name === 'Route Optimization'), true);
}

async function testClaudeJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>${'Useful content. '.repeat(80)}</p>`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          }),
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: ArticleDraftSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'route-optimization-api-guide');
}

async function testClaudeToolJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>${'Useful content. '.repeat(80)}</p>`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          },
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: ArticleDraftSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'route-optimization-api-guide');
}

async function testClaudeMaxTokensResponseFails() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      stop_reason: 'max_tokens',
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>Truncated response`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          },
        },
      ],
    }),
  });

  await assert.rejects(
    callClaudeJson({
      apiKey: 'test-key',
      model: 'test-model',
      system: 'test',
      prompt: 'test',
      schema: ArticleDraftSchema,
      fetchImpl: fakeFetch,
      retries: 0,
    }),
    /max_tokens/,
  );
}

async function testRevisedArticleJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            title: 'Updated Fleetbase API Tutorial',
            slug: 'updated-fleetbase-api-tutorial',
            excerpt:
              'A revised Fleetbase API tutorial for logistics teams building order workflows.',
            htmlBase64: Buffer.from(
              `<h2>${'Updated'.repeat(130)}</h2><p>${'Useful revised content. '.repeat(80)}</p>`,
            ).toString('base64'),
            metaTitle: 'Updated Fleetbase API Tutorial',
            metaDescription:
              'Revise a Fleetbase API tutorial for logistics and supply chain operators.',
            revisionSummary: ['Tightened intro', 'Added API workflow emphasis'],
          }),
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: RevisedArticleSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'updated-fleetbase-api-tutorial');
  assert.equal(Boolean(draft.htmlBase64), true);
  assert.equal(draft.revisionSummary.length, 2);
}

async function testRevisedArticleMetadataFallbackParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Updated Fleetbase API Tutorial',
            slug: 'updated-fleetbase-api-tutorial',
            excerpt:
              'A revised Fleetbase API tutorial for logistics teams building order workflows.',
            htmlBase64: Buffer.from(
              `<h2>${'Updated'.repeat(130)}</h2><p>${'Useful revised content. '.repeat(80)}</p>`,
            ).toString('base64'),
            revisionSummary: ['Tightened intro', 'Kept metadata fallback compatible'],
          },
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: RevisedArticleSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.metaTitle, undefined);
  assert.equal(draft.metaDescription, undefined);
}

async function testFeatureImageBriefGeneration() {
  const previousApiKey = process.env.ANTHROPIC_API_KEY;
  process.env.ANTHROPIC_API_KEY = 'test-key';
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            prompt:
              'Landscape editorial image of a modern logistics software dashboard with route lines, dispatch cards, and warehouse workflow panels. No text or logos.',
            altText: 'Modern logistics software dashboard with route and dispatch visuals.',
            filename: 'fleetbase-logistics-dashboard.png',
          }),
        },
      ],
    }),
  });

  const brief = await generateFeatureImageBrief({
    brief: {
      title: 'Fleetbase API Tutorial',
      targetKeyword: 'fleetbase api tutorial',
    },
    draft: {
      title: 'Fleetbase API Tutorial',
      excerpt: 'Build logistics workflows with Fleetbase.',
      metaTitle: 'Fleetbase API Tutorial',
      metaDescription: 'Build logistics workflows with Fleetbase.',
      publicTags: ['API'],
    },
    config: contentAgentConfig,
    contentFocus: 'fleetbase-api-tutorial',
    fetchImpl: fakeFetch,
  });

  assert.equal(brief.filename, 'fleetbase-logistics-dashboard.png');

  if (previousApiKey === undefined) {
    delete process.env.ANTHROPIC_API_KEY;
  } else {
    process.env.ANTHROPIC_API_KEY = previousApiKey;
  }
}

async function testOpenAiImageGeneration() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      data: [
        {
          b64_json: Buffer.from('image-bytes').toString('base64'),
          revised_prompt: 'Revised prompt',
        },
      ],
    }),
  });

  const image = await generateFeatureImage(
    {
      prompt:
        'Landscape editorial image of a logistics software dashboard with map routes and dispatch panels.',
    },
    contentAgentConfig,
    {
      apiKey: 'test-openai-key',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(image.bytes.toString(), 'image-bytes');
  assert.equal(image.revisedPrompt, 'Revised prompt');
}

async function testGhostImageUpload() {
  const fakeFetch = async (url, options) => {
    assert.equal(String(url), 'https://ghost.example/ghost/api/admin/images/upload/');
    assert.equal(options.method, 'POST');
    assert.equal(options.body instanceof FormData, true);

    return {
      ok: true,
      json: async () => ({
        images: [{ url: 'https://ghost.example/content/images/fleetbase.png' }],
      }),
    };
  };

  const image = await uploadGhostImage(
    {
      bytes: Buffer.from('image-bytes'),
      mimeType: 'image/png',
    },
    'fleetbase.png',
    contentAgentConfig,
    {
      adminApiUrl: 'https://ghost.example',
      adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(image.url, 'https://ghost.example/content/images/fleetbase.png');
}

async function testGhostAdminReadAndUpdate() {
  const calls = [];
  const fakeFetch = async (url, options) => {
    calls.push({ url: String(url), options });

    if (options.method === 'PUT') {
      const body = JSON.parse(options.body);
      assert.equal(body.posts[0].status, 'draft');
      assert.equal(body.posts[0].updated_at, '2026-05-28T00:00:00.000Z');

      return {
        ok: true,
        json: async () => ({
          posts: [
            {
              id: 'post-id',
              title: body.posts[0].title,
              slug: body.posts[0].slug,
              status: 'draft',
            },
          ],
        }),
      };
    }

    return {
      ok: true,
      json: async () => ({
        posts: [
          {
            id: 'post-id',
            title: 'Original title',
            slug: 'original-title',
            status: 'draft',
            html: '<p>Original content</p>',
            updated_at: '2026-05-28T00:00:00.000Z',
          },
        ],
      }),
    };
  };

  const post = await getGhostPost('original-title', contentAgentConfig, {
    adminApiUrl: 'https://ghost.example',
    adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    fetchImpl: fakeFetch,
  });
  const updated = await updateGhostPost(
    post,
    {
      title: 'Revised title',
      slug: 'revised-title',
      html: '<p>Revised content</p>',
      excerpt: 'Revised excerpt for the post.',
      metaTitle: 'Revised title',
      metaDescription: 'Revised meta description for the post.',
    },
    contentAgentConfig,
    {
      adminApiUrl: 'https://ghost.example',
      adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(calls.length, 2);
  assert.equal(updated.slug, 'revised-title');
}

function testParseJsonObject() {
  assert.deepEqual(parseJsonObject('prefix {"ok": true} suffix'), { ok: true });
  assert.deepEqual(parseJsonObject('{"html": "<p>Line one\nLine two</p>"}'), {
    html: '<p>Line one\nLine two</p>',
  });
}

function testFleetbaseLinkNormalization() {
  assert.equal(
    normalizeFleetbaseLinks('Read https://fleetbase.ghost.io/docs/api/fleetbase/orders now.'),
    'Read https://fleetbase.io/docs/api/fleetbase/orders now.',
  );
  assert.equal(
    normalizeFleetbaseLinks('<a href="https://www.fleetbase.io/docs">Docs</a>'),
    '<a href="https://fleetbase.io/docs">Docs</a>',
  );

  const article = normalizeArticleLinks({
    excerpt: 'See https://fleetbase.ghost.io/docs',
    html: '<a href="https://fleetbase.ghost.io/docs/platform">Platform docs</a>',
    metaDescription: 'Visit https://www.fleetbase.io/docs',
  });

  assert.equal(article.excerpt, 'See https://fleetbase.io/docs');
  assert.equal(article.html, '<a href="https://fleetbase.io/docs/platform">Platform docs</a>');
  assert.equal(article.metaDescription, 'Visit https://fleetbase.io/docs');
}

function testFleetbaseContentRules() {
  const normalized = normalizeFleetbaseArticle({
    title: 'FleetOps Order Configurations Guide',
    excerpt: 'See https://fleetbase.ghost.io/docs for FleetOps help.',
    html: '<p>FleetOps extension docs at https://fleetbase.ghost.io/docs/api.</p>',
    metaTitle: 'FleetOps Guide',
    metaDescription: 'FleetOps and Order Configurations.',
  });

  assert.equal(normalized.title, 'Fleet-Ops Order Config Guide');
  assert.equal(normalized.excerpt, 'See https://fleetbase.io/docs for Fleet-Ops help.');
  assert.equal(normalized.html, '<p>Fleet-Ops docs at https://fleetbase.io/docs/api.</p>');
  assert.equal(normalized.metaDescription, 'Fleet-Ops and Order Config.');

  const invalid = validateFleetbaseArticle({
    title: 'API-first ride hailing app',
    excerpt: 'Use order_config for quotes.',
    html: '<p>Create an adhoc order and then run orchestrator for manual dispatch.</p>',
    metaTitle: 'API-first guide',
    metaDescription: 'Uses platform-level activity.',
  });

  assert.equal(invalid.blockingIssues.length, 0);
  assert.equal(
    invalid.warnings.some((item) => item.includes('[outdated-api-first-positioning]')),
    true,
  );

  const warning = validateFleetbaseArticle({
    title: 'Build proof of delivery in Fleetbase',
    excerpt: 'A proof of delivery guide.',
    html: '<p>Capture delivery proof for an order.</p>',
    metaTitle: 'Proof of delivery',
    metaDescription: 'Proof of delivery guide.',
  });

  assert.equal(warning.warnings.some((item) => item.includes('/v1/orders/:id/proofs')), true);
}

function testSourceTruthRepoConfig() {
  const expectedRepos = [
    'fleetbase/core-api',
    'fleetbase/fleetops',
    'fleetbase/ledger',
    'fleetbase/storefront',
    'fleetbase/dev-engine',
    'fleetbase/iam-engine',
    'fleetbase/ember-core',
    'fleetbase/pallet',
  ];

  assert.deepEqual(
    contentAgentConfig.sourceTruthRepos.map((repo) => repo.repo),
    expectedRepos,
  );
  assert.equal(
    contentAgentConfig.sourceTruthRepos.every((repo) => repo.path.startsWith('source-truth/')),
    true,
  );
}

async function writeFixtureFile(root, filePath, content) {
  const absolutePath = path.join(root, filePath);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, content);
}

async function testContextManifestAndSelection() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetbase-content-agent-'));

  await writeFixtureFile(
    root,
    'content/docs/api/fleetbase/orders.mdx',
    '# Orders API\nCreate and manage Fleetbase orders with pickup, dropoff, payload, tracking, and dispatch examples.',
  );
  await writeFixtureFile(
    root,
    'src/app/developers/api/api-page-content.tsx',
    'export default function ApiPageContent() { return <main>Fleetbase API tutorials for developers building logistics workflows.</main>; }',
  );
  await writeFixtureFile(
    root,
    'src/app/page.tsx',
    'export default function HomePage() { return <main>Fleetbase logistics software for fleet operations, dispatch, and supply chain workflows.</main>; }',
  );
  await writeFixtureFile(
    root,
    'source-truth/core-api/src/Http/Controllers/Api/v1/OrderController.php',
    '<?php class OrderController { public function create() { return "Create Fleetbase orders, payloads, and dispatch workflows through the API."; } }',
  );

  const manifest = await buildContextManifest(contentAgentConfig, { root });
  const selected = selectContextSources(manifest, contentAgentConfig, {
    contentFocus: 'fleetbase-api-tutorial',
    topic: {
      title: 'Build an order tracking workflow with the Fleetbase API',
      keyword: 'fleetbase api tutorial',
    },
  });

  assert.equal(
    manifest.some((item) => item.path === 'content/docs/api/fleetbase/orders.mdx'),
    true,
  );
  assert.equal(
    manifest.some((item) => item.path === 'src/app/developers/api/api-page-content.tsx'),
    true,
  );
  assert.equal(manifest.some((item) => item.path === 'src/app/page.tsx'), true);
  assert.equal(selected.some((item) => item.path.includes('content/docs/api/')), true);
  assert.equal(
    selected.some(
      (item) =>
        item.path ===
        'source-truth/core-api/src/Http/Controllers/Api/v1/OrderController.php',
    ),
    true,
  );
}

await testAhrefsUrl();
testAhrefsNormalize();
testGhostTokenAndPayload();
await testClaudeJsonParsing();
await testClaudeToolJsonParsing();
await testClaudeMaxTokensResponseFails();
await testRevisedArticleJsonParsing();
await testRevisedArticleMetadataFallbackParsing();
await testFeatureImageBriefGeneration();
await testOpenAiImageGeneration();
await testGhostImageUpload();
await testGhostAdminReadAndUpdate();
testParseJsonObject();
testFleetbaseLinkNormalization();
testFleetbaseContentRules();
testSourceTruthRepoConfig();
await testContextManifestAndSelection();

console.log('[content-agent:test] All self-tests passed.');
