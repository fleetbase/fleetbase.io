import type { Metadata } from 'next';

import { getGitHubStars } from '@/lib/github-stars';

import PlatformPageContent from './platform-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform' },
  title: 'Platform Overview — Open-Source Logistics OS',
  description:
    'Explore the Fleetbase platform — Fleet-Ops, Storefront, Ledger, Pallet and Navigator. One modular, open-source logistics OS. Self-host or cloud.',
  keywords: [
    'fleetbase platform',
    'open source logistics platform',
    'fleet management software',
    'logistics operating system',
    'transport management system',
    'open source TMS',
    'delivery management platform',
    'warehouse management software',
  ],
  openGraph: {
    title: 'Platform Overview — Open-Source Logistics OS | Fleetbase',
    description:
      'Modular, open-source logistics OS. Fleet-Ops, Storefront, Ledger, Pallet, Navigator — deploy what you need, own your stack.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Overview — Open-Source Logistics OS | Fleetbase',
    description:
      'Modular, open-source logistics OS. Fleet-Ops, Storefront, Ledger, Pallet, Navigator — deploy what you need, own your stack.',
  },
};

export default async function PlatformOverviewPage() {
  const stars = await getGitHubStars();
  return <PlatformPageContent stars={stars} />;
}
