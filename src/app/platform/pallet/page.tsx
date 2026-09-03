import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import PalletPageContent from './pallet-page-content';
import RelatedPages from '@/components/seo/related-pages';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/pallet' },
  title: 'Pallet — Open-Source Warehouse Management System',
  description:
    'An open-source WMS for inventory, pick lists, cycle counts and fulfilment — natively connected to Fleet-Ops dispatch and Storefront orders.',
  keywords: [
    'open source warehouse management system',
    'WMS software',
    'inventory management',
    'pick list software',
    'cycle counting',
    'stock transfers',
    'warehouse fulfilment',
    'Fleetbase Pallet',
  ],
  openGraph: {
    title: 'Pallet — Open-Source Warehouse Management System | Fleetbase',
    description:
      'Pallet by Fleetbase is an open-source WMS for inventory management, pick lists, cycle counts, and fulfilment — natively connected to Fleet-Ops and Storefront.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallet — Open-Source Warehouse Management System | Fleetbase',
    description:
      'Open-source WMS with pick lists, cycle counts, stock transfers, and native Fleet-Ops integration.',
  },
};

export default function PalletPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Pallet"
        url="https://fleetbase.io/platform/pallet"
        description="Open-source warehouse management system for inventory tracking, pick lists, cycle counts, and fulfilment — natively connected to Fleet-Ops dispatch and Storefront orders."
      />
      <PalletPageContent />
      <RelatedPages heading="Explore related" />
    </>
  );
}
