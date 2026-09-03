import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import LedgerPageContent from './ledger-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/ledger' },
  title: 'Ledger — Financial Management for Logistics',
  description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  keywords: 'fleetbase ledger, logistics financial management, fleet invoicing, delivery billing, logistics accounting',
  openGraph: {
    title: 'Ledger — Financial Management | Fleetbase Platform',
    description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ledger — Financial Management | Fleetbase Platform',
    description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  },
};

export default function LedgerPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Ledger"
        url="https://fleetbase.io/platform/ledger"
        description="Double-entry financial ledger built for logistics operators — invoicing, revenue tracking, payment gateways, and chart of accounts."
        applicationCategory="FinanceApplication"
      />
      <LedgerPageContent />
    </>
  );
}
