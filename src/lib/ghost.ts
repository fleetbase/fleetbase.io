import 'server-only';

const BLOG_REVALIDATE_SECONDS = 300;
const GHOST_API_VERSION = process.env.GHOST_API_VERSION?.trim() || 'v6.0';

export type BlogAuthor = {
  name: string;
  slug: string;
  profileImage: string | null;
};

export type BlogTag = {
  name: string;
  slug: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  html: string;
  publishedAt: string;
  featureImage: string | null;
  featureImageAlt: string | null;
  readingTime: string;
  authors: BlogAuthor[];
  tags: BlogTag[];
  isFeatured: boolean;
};

type GhostBrowseOptions = {
  featured?: boolean;
  limit?: number;
  page?: number;
  tag?: string;
};

type GhostAuthor = {
  name: string;
  slug: string;
  profile_image: string | null;
};

type GhostTag = {
  name: string;
  slug: string;
};

type GhostPost = {
  id: string;
  slug: string;
  title: string;
  custom_excerpt: string | null;
  excerpt: string | null;
  html: string | null;
  plaintext: string | null;
  published_at: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  reading_time: number | null;
  featured: boolean;
  authors?: GhostAuthor[];
  tags?: GhostTag[];
};

type GhostPostsResponse = {
  posts: GhostPost[];
  meta?: {
    pagination?: {
      next: number | null;
      page: number;
      pages: number;
      total: number;
    };
  };
};

function getGhostConfig() {
  const apiUrl = process.env.GHOST_API_URL?.trim();
  const contentApiKey = process.env.GHOST_CONTENT_API_KEY?.trim();

  const missing = [
    !apiUrl ? 'GHOST_API_URL' : null,
    !contentApiKey ? 'GHOST_CONTENT_API_KEY' : null,
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(
      `Ghost blog is not configured. Missing required environment variable(s): ${missing.join(', ')}.`,
    );
  }

  return {
    apiUrl: apiUrl!.replace(/\/+$/, ''),
    contentApiKey: contentApiKey!,
  };
}

function buildGhostUrl(pathname: string, params: Record<string, string>) {
  const { apiUrl, contentApiKey } = getGhostConfig();
  const searchParams = new URLSearchParams({
    key: contentApiKey,
    ...params,
  });

  return `${apiUrl}/ghost/api/content/${pathname}?${searchParams.toString()}`;
}

async function requestGhost(pathname: string, params: Record<string, string>) {
  return fetch(buildGhostUrl(pathname, params), {
    headers: {
      Accept: 'application/json',
      'Accept-Version': GHOST_API_VERSION,
    },
    next: {
      revalidate: BLOG_REVALIDATE_SECONDS,
    },
  });
}

async function fetchGhost<T>(pathname: string, params: Record<string, string>) {
  const response = await requestGhost(pathname, params);

  if (!response.ok) {
    throw new Error(
      `Ghost Content API request failed for ${pathname} with status ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

// Ghost answers an unknown resource with a 404. For a lookup by slug that is a
// normal "no such post" answer rather than a failure, so it must not throw:
// doing so turned every bad /blog/* URL into a 500 — including
// /blog/robots.txt, which Ahrefs flagged and which makes crawlers treat the
// whole host as unhealthy. Any other non-OK status is still a real error.
async function fetchGhostAllowingMissing<T>(
  pathname: string,
  params: Record<string, string>,
) {
  const response = await requestGhost(pathname, params);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Ghost Content API request failed for ${pathname} with status ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

function toReadingTimeLabel(post: GhostPost) {
  if (post.reading_time && post.reading_time > 0) {
    return `${post.reading_time} min read`;
  }

  const plainText = post.plaintext?.trim() || '';
  if (!plainText) return '1 min read';

  const words = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function toExcerpt(post: GhostPost) {
  return (
    post.custom_excerpt?.trim() ||
    post.excerpt?.trim() ||
    post.plaintext?.trim().slice(0, 220) ||
    ''
  );
}

function normalizePost(post: GhostPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: toExcerpt(post),
    html: post.html || '',
    publishedAt: post.published_at,
    featureImage: post.feature_image,
    featureImageAlt: post.feature_image_alt,
    readingTime: toReadingTimeLabel(post),
    authors:
      post.authors?.map((author) => ({
        name: author.name,
        slug: author.slug,
        profileImage: author.profile_image,
      })) || [],
    tags:
      post.tags?.map((tag) => ({
        name: tag.name,
        slug: tag.slug,
      })) || [],
    isFeatured: post.featured,
  };
}

function buildFilter({ featured, tag }: Pick<GhostBrowseOptions, 'featured' | 'tag'>) {
  const filters: string[] = [];

  if (featured) {
    filters.push('featured:true');
  }

  if (tag) {
    filters.push(`tag:${tag}`);
  }

  return filters.length > 0 ? filters.join('+') : undefined;
}

export async function getBlogPosts(options: GhostBrowseOptions = {}) {
  const { featured = false, limit = 6, page = 1, tag } = options;
  const filter = buildFilter({ featured, tag });
  const response = await fetchGhost<GhostPostsResponse>('posts/', {
    include: 'authors,tags',
    formats: 'html,plaintext',
    limit: String(limit),
    page: String(page),
    ...(filter ? { filter } : {}),
  });

  return response.posts.map(normalizePost);
}

export async function getAllBlogPosts() {
  const posts: BlogPost[] = [];
  let nextPage: number | null = 1;

  while (nextPage) {
    const response: GhostPostsResponse = await fetchGhost<GhostPostsResponse>('posts/', {
      include: 'authors,tags',
      formats: 'html,plaintext',
      limit: '100',
      page: String(nextPage),
    });

    posts.push(...response.posts.map(normalizePost));
    nextPage = response.meta?.pagination?.next ?? null;
  }

  return posts;
}

export async function getBlogPostBySlug(slug: string) {
  const response = await fetchGhostAllowingMissing<GhostPostsResponse>(
    `posts/slug/${encodeURIComponent(slug)}/`,
    {
      include: 'authors,tags',
      formats: 'html,plaintext',
    },
  );

  const post = response?.posts[0];

  return post ? normalizePost(post) : null;
}

export async function getAllBlogSlugs() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => post.slug);
}

export const blogRevalidateSeconds = BLOG_REVALIDATE_SECONDS;
