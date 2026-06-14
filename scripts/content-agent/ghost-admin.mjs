import crypto from 'node:crypto';

import { GhostDraftResultSchema } from './schemas.mjs';

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

export function createGhostAdminToken(adminApiKey, now = Math.floor(Date.now() / 1000)) {
  if (!adminApiKey || !adminApiKey.includes(':')) {
    throw new Error('GHOST_ADMIN_API_KEY must use Ghost Admin API key format: id:secret.');
  }

  const [id, secret] = adminApiKey.split(':');
  const header = { alg: 'HS256', kid: id, typ: 'JWT' };
  const payload = {
    iat: now,
    exp: now + 5 * 60,
    aud: '/admin/',
  };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', Buffer.from(secret, 'hex'))
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

function normalizeAdminUrl(value) {
  const apiUrl = value?.trim().replace(/\/+$/, '');

  if (!apiUrl) {
    throw new Error('Missing GHOST_ADMIN_API_URL. Add it as a GitHub Actions secret.');
  }

  return apiUrl;
}

function getGhostAdminConfig(options = {}) {
  const adminApiUrl = normalizeAdminUrl(options.adminApiUrl || process.env.GHOST_ADMIN_API_URL);
  const adminApiKey = options.adminApiKey || process.env.GHOST_ADMIN_API_KEY;

  if (!adminApiKey) {
    throw new Error('Missing GHOST_ADMIN_API_KEY. Add it as a GitHub Actions secret.');
  }

  return { adminApiUrl, adminApiKey };
}

async function ghostAdminFetch(pathname, options = {}) {
  const { adminApiUrl, adminApiKey } = getGhostAdminConfig(options);
  const token = createGhostAdminToken(adminApiKey);
  const url = new URL(`${adminApiUrl}/ghost/api/admin/${pathname.replace(/^\/+/, '')}`);

  for (const [key, value] of Object.entries(options.searchParams || {})) {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  }

  return (options.fetchImpl || fetch)(url, {
    method: options.method || 'GET',
    headers: {
      Authorization: `Ghost ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Version': process.env.GHOST_API_VERSION || options.apiVersion || 'v6.0',
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
}

function toGhostTags(publicTags, internalTags) {
  return [...new Set([...(publicTags || []), ...internalTags])]
    .filter(Boolean)
    .map((name) => ({ name }));
}

function toImageBlob(image) {
  return new Blob([image.bytes], { type: image.mimeType || 'image/png' });
}

export function buildGhostDraftPayload(draft, config) {
  return {
    posts: [
      {
        title: draft.title,
        slug: draft.slug,
        status: 'draft',
        html: draft.html,
        custom_excerpt: draft.excerpt,
        meta_title: draft.metaTitle,
        meta_description: draft.metaDescription,
        feature_image: draft.featureImage || null,
        feature_image_alt: draft.featureImageAlt || null,
        tags: toGhostTags(draft.publicTags, config.ghost.internalTags),
      },
    ],
  };
}

export async function createGhostDraft(draft, config, options = {}) {
  const response = await ghostAdminFetch('posts/', {
    ...options,
    method: 'POST',
    apiVersion: config.ghost.apiVersion,
    searchParams: { source: 'html' },
    body: buildGhostDraftPayload(draft, config),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API draft creation failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  const post = payload.posts?.[0];

  return GhostDraftResultSchema.parse({
    id: post.id,
    title: post.title,
    slug: post.slug,
    url: post.url || null,
    status: post.status,
  });
}

export async function listGhostPosts(config, options = {}) {
  const response = await ghostAdminFetch('posts/', {
    ...options,
    apiVersion: config.ghost.apiVersion,
    searchParams: {
      formats: 'plaintext',
      include: 'tags',
      limit: options.limit || 'all',
      order: 'updated_at desc',
      fields: [
        'id',
        'title',
        'slug',
        'status',
        'custom_excerpt',
        'meta_title',
        'meta_description',
        'published_at',
        'created_at',
        'updated_at',
      ].join(','),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API post history failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  return payload.posts || [];
}

export async function uploadGhostImage(image, filename, config, options = {}) {
  const { adminApiUrl, adminApiKey } = getGhostAdminConfig(options);
  const token = createGhostAdminToken(adminApiKey);
  const url = new URL(`${adminApiUrl}/ghost/api/admin/images/upload/`);
  const form = new FormData();

  form.append('file', toImageBlob(image), filename);
  form.append('ref', filename);

  const response = await (options.fetchImpl || fetch)(url, {
    method: 'POST',
    headers: {
      Authorization: `Ghost ${token}`,
      Accept: 'application/json',
      'Accept-Version': process.env.GHOST_API_VERSION || config.ghost.apiVersion,
    },
    body: form,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API image upload failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  const uploaded = payload.images?.[0];

  if (!uploaded?.url) {
    throw new Error('Ghost image upload response did not include an image URL.');
  }

  return uploaded;
}

export async function getGhostPost(identifier, config, options = {}) {
  const isId = options.identifierType === 'id';
  const pathname = isId
    ? `posts/${encodeURIComponent(identifier)}/`
    : `posts/slug/${encodeURIComponent(identifier)}/`;
  const response = await ghostAdminFetch(pathname, {
    ...options,
    apiVersion: config.ghost.apiVersion,
    searchParams: {
      formats: 'html,plaintext',
      include: 'tags,authors',
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API post lookup failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  const post = payload.posts?.[0];

  if (!post) {
    throw new Error(`No Ghost post found for ${options.identifierType || 'slug'} "${identifier}".`);
  }

  return post;
}

export async function updateGhostPost(post, updates, config, options = {}) {
  const response = await ghostAdminFetch(`posts/${encodeURIComponent(post.id)}/`, {
    ...options,
    method: 'PUT',
    apiVersion: config.ghost.apiVersion,
    searchParams: { source: 'html' },
    body: {
      posts: [
        {
          id: post.id,
          updated_at: post.updated_at,
          title: updates.title,
          slug: updates.slug,
          status: post.status,
          html: updates.html,
          custom_excerpt: updates.excerpt,
          meta_title: updates.metaTitle,
          meta_description: updates.metaDescription,
        },
      ],
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API post update failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  return payload.posts?.[0];
}
