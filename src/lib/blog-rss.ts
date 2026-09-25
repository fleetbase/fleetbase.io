import type { BlogPost } from './ghost.ts';

/**
 * RSS 2.0 for the blog, built from the posts the site already reads from
 * Ghost's Content API.
 *
 * The feed replaces the one Ghost used to serve at blog.fleetbase.io/rss/,
 * which now redirects here. Fleetbase consoles read that URL for their
 * dashboard blog widget (core-api `FleetbaseBlog::parseRss`), so the items
 * keep the elements that parser reads: title, link, guid, description,
 * pubDate, dc:creator and media:content.
 */

export type BlogRssOptions = {
  siteUrl: string;
  title?: string;
  description?: string;
};

export function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(value: string) {
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? null : date.toUTCString();
}

function buildItem(post: BlogPost, siteUrl: string) {
  const link = `${siteUrl}/blog/${post.slug}`;
  const pubDate = toRfc822(post.publishedAt);
  const author = post.authors[0]?.name;

  return [
    '    <item>',
    `      <title>${escapeXml(post.title)}</title>`,
    `      <link>${escapeXml(link)}</link>`,
    `      <guid isPermaLink="false">${escapeXml(post.id)}</guid>`,
    `      <description>${escapeXml(post.excerpt)}</description>`,
    pubDate ? `      <pubDate>${pubDate}</pubDate>` : null,
    author ? `      <dc:creator>${escapeXml(author)}</dc:creator>` : null,
    ...post.tags.map((tag) => `      <category>${escapeXml(tag.name)}</category>`),
    post.featureImage
      ? `      <media:content url="${escapeXml(post.featureImage)}" medium="image"/>`
      : null,
    '    </item>',
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export function buildBlogRss(
  posts: BlogPost[],
  {
    siteUrl,
    title = 'Fleetbase Blog',
    description = 'News, releases and guides from the Fleetbase team.',
  }: BlogRssOptions,
) {
  const base = siteUrl.replace(/\/+$/, '');
  const lastBuildDate = posts.length ? toRfc822(posts[0].publishedAt) : null;

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">',
    '  <channel>',
    `    <title>${escapeXml(title)}</title>`,
    `    <link>${escapeXml(`${base}/blog`)}</link>`,
    `    <description>${escapeXml(description)}</description>`,
    '    <language>en</language>',
    `    <atom:link href="${escapeXml(`${base}/blog/rss`)}" rel="self" type="application/rss+xml"/>`,
    lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>` : null,
    ...posts.map((post) => buildItem(post, base)),
    '  </channel>',
    '</rss>',
    '',
  ]
    .filter((line) => line !== null)
    .join('\n');
}
