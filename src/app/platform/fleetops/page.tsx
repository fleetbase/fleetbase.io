import type { Metadata } from 'next';

import FleetOpsPageContent from './fleetops-page-content';

const TITLE = 'Fleet-Ops — Fleet Management & Dispatch Software | Fleetbase';
const DESCRIPTION =
  'Open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, configurable workflows and automated dispatch.';
const CANONICAL = 'https://fleetbase.io/platform/fleetops';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'fleet management software',
    'dispatch software',
    'route optimization',
    'real time fleet tracking',
    'GPS fleet tracking',
    'driver management software',
    'open source fleet management',
    'transport management system',
    'TMS software',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: CANONICAL,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

/**
 * JSON-LD schema for Fleet-Ops — emitted into the page as a <script> tag so
 * search engines can render richer results (product name, description,
 * features, pricing model). Schema.org SoftwareApplication is the right
 * type for a SaaS / open-source TMS product page.
 */
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fleet-Ops',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Fleet Management Software',
  operatingSystem: 'Web, iOS, Android',
  url: CANONICAL,
  description: DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: 'Fleetbase',
    url: 'https://fleetbase.io',
    logo: 'https://fleetbase.io/images/icon.png',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'Free to self-host under AGPL-3.0. Cloud is $29 a month plus $5 per driver or vehicle, with unlimited orders — never a per-delivery fee.',
    url: 'https://fleetbase.io/pricing',
  },
  featureList: [
    'Phase-based Orchestrator Workbench',
    'Live GPS tracking and geofences',
    'Configurable order types and activity flows',
    'Vehicle maintenance scheduling and work orders',
    'Telematics integrations (Samsara, Geotab, Flespi)',
    'REST API, webhooks, and WebSocket event streams',
    'Open-source under AGPL-3.0',
    'Self-hostable or managed cloud',
  ],
  softwareVersion: 'Latest',
  // No aggregateRating block — Google requires real review data for ratings.
  // Add this back once a verified review source is wired up.
};

export default function FleetOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <FleetOpsPageContent />
    </>
  );
}
