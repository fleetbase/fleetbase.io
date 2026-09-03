import type { Metadata } from 'next';

import { titleWithinLimit, truncateAtWord } from '@/lib/seo-text';

const BASE_URL = 'https://fleetbase.io';

// Docs pages carried a bare title and description — no canonical, no Open Graph
// — so every documentation link shared into Slack, LinkedIn or a GitHub issue
// rendered as a naked URL. Docs are the bulk of the site's indexable content
// and the pages developers actually pass around, so they get the same treatment
// as marketing pages: one branded card, built from the page's own frontmatter.
type DocsPageData = {
  title?: string;
  description?: string;
};

/**
 * Build the metadata for one docs page.
 *
 * `baseUrl` is the docs source's mount point (`/docs/pallet`), and `slug` is the
 * catch-all segment array, so the two together reconstruct the canonical path.
 */
export function buildDocsMetadata({
  data,
  baseUrl,
  slug,
}: {
  data: DocsPageData;
  baseUrl: string;
  slug?: string[];
}): Metadata {
  const title = data.title ?? 'Documentation';
  const description = data.description
    ? truncateAtWord(data.description)
    : 'Documentation for Fleetbase, the open-source logistics and supply chain platform.';

  const path = [baseUrl, ...(slug ?? [])].join('/').replace(/\/+/g, '/');
  const canonical = `${BASE_URL}${path}`;

  const ogImage = `${BASE_URL}/og?title=${encodeURIComponent(
    title,
  )}&eyebrow=Docs&subtitle=${encodeURIComponent(description)}`;

  return {
    title: titleWithinLimit(title),
    description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title,
      description,
      siteName: 'Fleetbase',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
