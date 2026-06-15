import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();
const ghostImageHostname = (() => {
  const ghostUrl = process.env.GHOST_API_URL;

  if (!ghostUrl) {
    return null;
  }

  try {
    return new URL(ghostUrl).hostname;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Import ordering and minor lint warnings should not block production builds.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // fumadocs-mdx spreads frontmatter + body/toc onto page.data at runtime;
    // TypeScript's static analysis cannot see these fields through the generic
    // PageData interface, so we suppress build-time type errors here.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/support-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/customers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs/webhooks',
        destination: '/developers/webhooks',
        permanent: true,
      },
      {
        source: '/docs/community/contributing',
        destination: '/docs/contributing',
        permanent: true,
      },

      // ── Broken inbound links (marketing) ──────────────────────────────────
      // Legacy/blog links that point at paths the App Router never served.
      {
        source: '/contact',
        destination: '/contact/sales',
        permanent: true,
      },
      {
        source: '/company/contact',
        destination: '/contact/sales',
        permanent: true,
      },
      {
        source: '/products/fleet-ops',
        destination: '/platform/fleetops',
        permanent: true,
      },
      {
        source: '/products/developers-console',
        destination: '/platform/developer-console',
        permanent: true,
      },
      {
        source: '/platform/fleet-ops',
        destination: '/platform/fleetops',
        permanent: true,
      },
      {
        // No Bringg comparison page exists yet — send to the compare index.
        source: '/compare/vs-bringg',
        destination: '/compare',
        permanent: true,
      },

      // ── Broken inbound links (docs) ───────────────────────────────────────
      // Section roots and renamed slugs land on the canonical Fumadocs page.
      {
        source: '/docs/fleetops',
        destination: '/docs/fleet-ops',
        permanent: true,
      },
      {
        source: '/docs/extending-fleetbase',
        destination: '/docs/extension-development',
        permanent: true,
      },
      {
        source: '/docs/fleet-ops/drivers',
        destination: '/docs/fleet-ops/resources/drivers/overview',
        permanent: true,
      },
      {
        // No dedicated driver-import doc — send to the drivers overview.
        source: '/docs/fleet-ops/drivers/importing',
        destination: '/docs/fleet-ops/resources/drivers/overview',
        permanent: true,
      },
      {
        source: '/docs/fleet-ops/orders',
        destination: '/docs/fleet-ops/operations/orders/overview',
        permanent: true,
      },
      {
        source: '/docs/fleet-ops/orders/importing',
        destination: '/docs/fleet-ops/operations/orders/importing-orders',
        permanent: true,
      },
      {
        source: '/docs/fleet-ops/orders/order-config',
        destination: '/docs/fleet-ops/operations/order-configurations/overview',
        permanent: true,
      },
      {
        source: '/docs/fleet-ops/service-areas',
        destination: '/docs/fleet-ops/operations/service-areas-geofences/service-areas',
        permanent: true,
      },
      {
        source: '/docs/platform/identity-and-access',
        destination: '/docs/platform/identity-and-access/users',
        permanent: true,
      },
      {
        source: '/docs/platform/identity-and-access/permissions',
        destination: '/docs/platform/identity-and-access/roles-and-permissions',
        permanent: true,
      },
      {
        source: '/docs/platform/identity-and-access/roles',
        destination: '/docs/platform/identity-and-access/roles-and-permissions',
        permanent: true,
      },
      {
        source: '/docs/platform/system-setup',
        destination: '/docs/platform/system-setup/branding',
        permanent: true,
      },
      {
        source: '/docs/platform/quickstart',
        destination: '/docs/platform/quickstart/cloud-quickstart',
        permanent: true,
      },
      {
        source: '/docs/storefront/catalog',
        destination: '/docs/storefront/catalog/overview',
        permanent: true,
      },
      {
        source: '/docs/pallet/audits',
        destination: '/docs/pallet/audits/overview',
        permanent: true,
      },
      {
        source: '/docs/pallet/warehouses',
        destination: '/docs/pallet/warehouses/overview',
        permanent: true,
      },
      {
        source: '/docs/pallet/fulfillment',
        destination: '/docs/pallet/fulfillment/overview',
        permanent: true,
      },
      {
        source: '/docs/pallet/inventory',
        destination: '/docs/pallet/inventory/overview',
        permanent: true,
      },
      {
        source: '/docs/pallet/suppliers',
        destination: '/docs/pallet/suppliers/overview',
        permanent: true,
      },
      {
        source: '/docs/extension-development/getting-started',
        destination: '/docs/extension-development/getting-started/quickstart',
        permanent: true,
      },
      {
        source: '/docs/extension-development/universe',
        destination: '/docs/extension-development/universe/overview',
        permanent: true,
      },
      {
        source: '/docs/api/storefront',
        destination: '/docs/api/storefront/store',
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: [
    '*.manus.computer',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    qualities: [75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
      },
      {
        protocol: 'https',
        hostname: 'storage.ghost.io',
      },
      {
        protocol: 'https',
        hostname: 'fleetbase-web-media.s3.ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.manus.computer',
      },
      ...(ghostImageHostname
        ? [
            {
              protocol: 'https' as const,
              hostname: ghostImageHostname,
            },
          ]
        : []),
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
      // Self-host Google Analytics — bypasses ad blockers that target
      // googletagmanager.com / google-analytics.com. /g/collect is the path
      // gtag.js hardcodes for data collection, so transport_url just needs to
      // point at the current origin (set in GoogleAnalyticsProvider.tsx).
      {
        source: '/gtm/:path*',
        destination: 'https://www.googletagmanager.com/:path*',
      },
      {
        source: '/g/collect',
        destination: 'https://www.google-analytics.com/g/collect',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withMDX(nextConfig);
