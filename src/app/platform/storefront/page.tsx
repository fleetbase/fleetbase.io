import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import StorefrontPageContent from './storefront-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/storefront' },
  title: 'Storefront — Headless Commerce Platform',
  description:
    'Open-source headless commerce for on-demand business. Zero commission, white-label mobile apps, multi-vendor marketplace and native delivery.',
  keywords: [
    'headless commerce platform',
    'online ordering software',
    'white label delivery app',
    'multi vendor marketplace software',
    'on demand commerce platform',
    'open source storefront',
    'delivery management ecommerce',
    'hyperlocal delivery platform',
    'zero commission ordering',
  ],
  openGraph: {
    title: 'Storefront — Headless Commerce & Marketplace Platform | Fleetbase',
    description:
      'Open-source, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storefront — Headless Commerce & Marketplace Platform | Fleetbase',
    description:
      'Open-source, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
  },
};

export default function StorefrontPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Storefront"
        url="https://fleetbase.io/platform/storefront"
        description="Open-source headless commerce and multi-vendor marketplace platform with white-label mobile apps, zero commission fees, and native Fleet-Ops delivery integration."
      />
      <StorefrontPageContent />
    </>
  );
}
