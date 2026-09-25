/**
 * The blog RSS feed is read by every Fleetbase console's dashboard blog widget
 * (core-api `FleetbaseBlog::parseRss`), so its shape is a contract.
 *
 * Run with `pnpm test`.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildBlogRss, escapeXml } from './blog-rss.ts';
import type { BlogPost } from './ghost.ts';

function post(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    id: '65f0c0ffee',
    slug: 'fleetbase-0-7-48',
    title: 'Fleetbase 0.7.48: REST coverage & settlement status',
    excerpt: 'Settlement status <and> "quoted" details.',
    html: '<p>Body</p>',
    publishedAt: '2026-09-18T08:30:00.000Z',
    featureImage: 'https://blog.fleetbase.io/content/images/cover.png?w=1200&h=630',
    featureImageAlt: null,
    readingTime: '3 min read',
    authors: [{ name: 'Ronald A. Richardson', slug: 'ron', profileImage: null }],
    tags: [{ name: 'Releases', slug: 'releases' }],
    isFeatured: false,
    ...overrides,
  };
}

describe('buildBlogRss', () => {
  it('describes the channel and links back to the blog and the feed itself', () => {
    const xml = buildBlogRss([post()], { siteUrl: 'https://fleetbase.io/' });

    assert.match(xml, /^<\?xml version="1.0" encoding="UTF-8"\?>/);
    assert.match(xml, /<rss version="2.0" [^>]*xmlns:dc="http:\/\/purl.org\/dc\/elements\/1.1\/"[^>]*xmlns:media="http:\/\/search.yahoo.com\/mrss\/"/);
    assert.match(xml, /<channel>\n {4}<title>Fleetbase Blog<\/title>\n {4}<link>https:\/\/fleetbase.io\/blog<\/link>/);
    assert.match(xml, /<atom:link href="https:\/\/fleetbase.io\/blog\/rss" rel="self" type="application\/rss\+xml"\/>/);
    assert.match(xml, /<lastBuildDate>Fri, 18 Sep 2026 08:30:00 GMT<\/lastBuildDate>/);
  });

  it('gives each post the elements the console blog widget reads', () => {
    const xml = buildBlogRss([post()], { siteUrl: 'https://fleetbase.io' });

    assert.match(xml, /<title>Fleetbase 0.7.48: REST coverage &amp; settlement status<\/title>/);
    assert.match(xml, /<link>https:\/\/fleetbase.io\/blog\/fleetbase-0-7-48<\/link>/);
    assert.match(xml, /<guid isPermaLink="false">65f0c0ffee<\/guid>/);
    assert.match(xml, /<description>Settlement status &lt;and&gt; &quot;quoted&quot; details.<\/description>/);
    assert.match(xml, /<pubDate>Fri, 18 Sep 2026 08:30:00 GMT<\/pubDate>/);
    assert.match(xml, /<dc:creator>Ronald A. Richardson<\/dc:creator>/);
    assert.match(xml, /<category>Releases<\/category>/);
    assert.match(xml, /<media:content url="https:\/\/blog.fleetbase.io\/content\/images\/cover.png\?w=1200&amp;h=630" medium="image"\/>/);
  });

  it('leaves out optional elements a post does not have', () => {
    const xml = buildBlogRss([post({ authors: [], tags: [], featureImage: null, publishedAt: 'not a date' })], {
      siteUrl: 'https://fleetbase.io',
    });

    assert.doesNotMatch(xml, /<dc:creator>/);
    assert.doesNotMatch(xml, /<category>/);
    assert.doesNotMatch(xml, /<media:content/);
    assert.doesNotMatch(xml, /<pubDate>/);
    assert.doesNotMatch(xml, /<lastBuildDate>/);
  });

  it('is a valid empty channel when there are no posts', () => {
    const xml = buildBlogRss([], { siteUrl: 'https://fleetbase.io', title: 'News', description: 'Nothing yet' });

    assert.doesNotMatch(xml, /<item>/);
    assert.match(xml, /<title>News<\/title>/);
    assert.match(xml, /<description>Nothing yet<\/description>/);
    assert.match(xml, /<\/channel>\n<\/rss>\n$/);
  });

  it('keeps posts in the order given, newest first as Ghost returns them', () => {
    const xml = buildBlogRss([post({ id: 'newer', slug: 'newer' }), post({ id: 'older', slug: 'older' })], {
      siteUrl: 'https://fleetbase.io',
    });

    assert.ok(xml.indexOf('/blog/newer') < xml.indexOf('/blog/older'));
  });
});

describe('escapeXml', () => {
  it('escapes every character that is special in XML text and attributes', () => {
    assert.equal(escapeXml(`<a href="x" title='y'>&</a>`), '&lt;a href=&quot;x&quot; title=&apos;y&apos;&gt;&amp;&lt;/a&gt;');
  });
});
