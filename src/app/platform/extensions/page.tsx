import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import ExtensionsMarketplacePageContent from './extensions-page-content';
import RelatedPages from '@/components/seo/related-pages';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/extensions' },
  title: 'Extensions Marketplace — Build & Monetize',
  description:
    'Browse and install extensions from Fleetbase and the open-source community, or publish your own and monetise it to operators worldwide.',
  keywords: [
    'Fleetbase extensions',
    'logistics platform extensions',
    'fleet management plugins',
    'extensions marketplace',
    'Fleetbase developer platform',
    'build Fleetbase extension',
    'logistics integrations',
  ],
  openGraph: {
    title: 'Extensions Marketplace — Build, Install & Monetize | Fleetbase',
    description:
      'Install first-party and community extensions into Fleetbase in one click, or publish your own and earn from thousands of logistics operators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extensions Marketplace | Fleetbase',
    description:
      'Browse, install, and monetize Fleetbase extensions. Open publisher platform with built-in Stripe payouts.',
  },
};

export default function ExtensionsMarketplacePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Extensions Marketplace"
        url="https://fleetbase.io/platform/extensions"
        description="Browse and install Fleetbase extensions in one click, or publish your own and earn from thousands of logistics operators."
      />
      <ExtensionsMarketplacePageContent />
      <RelatedPages heading="Explore related" />
    </>
  );
}
