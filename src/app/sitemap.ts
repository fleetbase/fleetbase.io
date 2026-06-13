import { statSync } from 'node:fs';
import { join } from 'node:path';

import type { MetadataRoute } from 'next';

import { getAllBlogPosts } from '@/lib/ghost';

const BASE_URL = 'https://fleetbase.io';

// Conservative fallback when a route can't be mapped to a single page file
// (or when fs reads fail in a sandboxed build). Update on major content
// reorganizations; per-page mtime is preferred where available.
const FALLBACK_DATE = new Date('2026-05-01');

const APP_DIR = join(process.cwd(), 'src', 'app');

function lastModifiedFor(routePath: string): Date {
  // routePath is the URL-style path under the App Router, e.g. "/platform/ledger".
  // It maps to src/app<routePath>/page.tsx.
  const relative = routePath === '/' ? 'page.tsx' : `${routePath.slice(1)}/page.tsx`;
  try {
    const stat = statSync(join(APP_DIR, relative));
    return stat.mtime;
  } catch {
    return FALLBACK_DATE;
  }
}

type StaticEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const STATIC_ROUTES: StaticEntry[] = [
  // Core
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/product', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/changelog', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/partners', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/installation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/navigator-publishing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/storefront-publishing', changeFrequency: 'monthly', priority: 0.8 },

  // Customer stories
  { path: '/oli-max', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/true-vegan', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/community', changeFrequency: 'monthly', priority: 0.6 },

  // Platform
  { path: '/platform', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/platform/fleetops', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/platform/storefront', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/ledger', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/pallet', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/navigator', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/mobile', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/extensions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/platform/ai', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/security', changeFrequency: 'monthly', priority: 0.7 },

  // Solutions — Verticals
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/courier-services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/food-delivery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/ecommerce', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/trucking', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/container-operations', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/healthcare', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/government', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/waste-management', changeFrequency: 'monthly', priority: 0.7 },

  // Solutions — Use Cases
  { path: '/solutions/use-cases/order-management', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/use-cases/fleet-management', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions/use-cases/last-mile-delivery', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions/use-cases/route-optimization', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/use-cases/analytics', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/use-cases/integrations', changeFrequency: 'monthly', priority: 0.7 },

  // Solutions — Roles
  { path: '/solutions/roles/fleet-managers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/roles/operations-managers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/roles/executives', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/roles/developers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/roles/warehouse-managers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/roles/customer-success', changeFrequency: 'monthly', priority: 0.7 },

  // Developers
  { path: '/developers', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/developers/api', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/developer-console', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/developers/extensions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/developers/sdks', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/developers/webhooks', changeFrequency: 'monthly', priority: 0.7 },

  // Compare
  { path: '/compare', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/compare/vs-onfleet', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/compare/onfleet-route-optimization-alternative', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/compare/onfleet-dispatch-alternative', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/compare/onfleet-tracking-notifications-alternative', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/compare/onfleet-driver-app-pod-alternative', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/compare/onfleet-api-platform-alternative', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/compare/vs-route4me', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/compare/vs-tookan', changeFrequency: 'monthly', priority: 0.9 },

  // Company
  { path: '/company', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/company/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/company/open-source', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/company/investors', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/licensing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/licensing/commercial', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact/sales', changeFrequency: 'monthly', priority: 0.7 },

  // Legal
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((entry) => ({
    url: `${BASE_URL}${entry.path}`,
    lastModified: lastModifiedFor(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await getAllBlogPosts();
    blogRoutes = blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('[sitemap] Failed to fetch blog posts from Ghost:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
