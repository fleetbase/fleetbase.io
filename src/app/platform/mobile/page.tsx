import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import MobileAppsPageContent from './mobile-page-content';
import RelatedPages from '@/components/seo/related-pages';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/mobile' },
  title: 'Mobile Apps — Navigator & Storefront',
  description:
    'Fleetbase ships two open-source mobile apps — Navigator for drivers and Storefront for customers. White-label them or build your own on the Fleetbase API.',
  keywords: [
    'Fleetbase mobile apps',
    'driver app',
    'delivery driver app',
    'Navigator app',
    'Storefront customer app',
    'fleet management mobile',
    'open-source driver app',
    'React Native logistics',
    'proof of delivery app',
    'iOS Android logistics',
    'white-label delivery app',
  ],
  openGraph: {
    title: 'Mobile Apps — Navigator & Storefront | Fleetbase',
    description:
      'Two open-source mobile apps for every delivery — Navigator for drivers, Storefront for customers. Use as-is, white-label, or build your own.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Apps | Fleetbase',
    description:
      'Navigator for drivers, Storefront for customers — open-source React Native apps built on the Fleetbase platform.',
  },
};

export default function MobileAppsPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Mobile Apps"
        url="https://fleetbase.io/platform/mobile"
        description="Two open-source mobile apps from Fleetbase — Navigator for drivers and Storefront for customers. White-label them or build your own on the Fleetbase API."
        applicationCategory="MobileApplication"
        operatingSystem="iOS, Android"
      />
      <MobileAppsPageContent />
      <RelatedPages heading="Explore related" />
    </>
  );
}
