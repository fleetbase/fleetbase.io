import type { Metadata } from 'next';

import { FAQSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';

import { PRICING_FAQS } from './faqs';
import PricingClient from './pricing-client';

const DESCRIPTION =
  'Fleetbase Cloud is $29/month plus $5 per driver or vehicle. Orders are free at any volume — no per-delivery fee. Every module included. Self-hosted implementation from $2,500 one-time.';

const OG_IMAGE =
  '/og?title=%2429%20a%20month%2C%20plus%20%245%20per%20driver%20or%20vehicle&eyebrow=Pricing&subtitle=One%20plan.%20Every%20module.%20Orders%20are%20free%20at%20any%20volume.';

export const metadata: Metadata = {
  title: 'Pricing | Open-Source Fleet Management Software',
  description: DESCRIPTION,
  keywords: [
    'fleet management software pricing',
    'logistics software pricing',
    'open source fleet management cost',
    'TMS software pricing',
    'delivery management software pricing',
    'Onfleet pricing alternative',
    'no per delivery fee dispatch software',
    'open source dispatch software pricing',
  ],
  alternates: { canonical: 'https://fleetbase.io/pricing' },
  openGraph: {
    title: 'Pricing | Open-Source Fleet Management Software',
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Fleetbase pricing — $29/month plus $5 per driver or vehicle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleetbase Pricing | Never Pay Per Delivery',
    description:
      '$29/month plus $5 per driver or vehicle. Orders are free at any volume. Every module included.',
    images: [OG_IMAGE],
  },
};

export default function PricingPage() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://fleetbase.io/pricing"
        description={DESCRIPTION}
        price="29"
      />
      <FAQSchema faqs={PRICING_FAQS} />
      <PricingClient />
    </>
  );
}
