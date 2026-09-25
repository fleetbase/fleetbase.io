import { buildBlogRss } from '@/lib/blog-rss';
import { getBlogPosts } from '@/lib/ghost';

const BASE_URL = 'https://fleetbase.io';

export const revalidate = 300;

// The feed Ghost used to serve at blog.fleetbase.io/rss/, which now redirects
// here. Fleetbase consoles read it for their dashboard blog widget.
export async function GET() {
  try {
    const posts = await getBlogPosts({ limit: 20 });

    return new Response(buildBlogRss(posts, { siteUrl: BASE_URL }), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    console.error('[blog/rss] Failed to build the RSS feed', error);

    return new Response('The blog feed is temporarily unavailable.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Retry-After': '300' },
    });
  }
}
