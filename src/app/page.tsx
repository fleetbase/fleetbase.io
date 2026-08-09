import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { getGitHubStars } from '@/lib/github-stars';
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema } from '@/components/seo/json-ld';
import Hero from '@/components/sections/hero';
import PlatformModules from '@/components/sections/platform-modules';
import StatsBar from '@/components/sections/stats-bar';

// Below-the-fold sections — split into separate client bundles so the
// initial homepage JS payload stays small. SSR remains on (default) so
// crawlers still receive complete HTML.
const FleetOpsShowcase = dynamic(
  () => import('@/components/sections/fleetops-showcase'),
);
const OpenSourceAdvantage = dynamic(
  () => import('@/components/sections/open-source-advantage'),
);
const FeaturesTabsSection = dynamic(
  () => import('@/components/sections/features-tabs'),
);
const IndustryUseCases = dynamic(
  () => import('@/components/sections/industry-use-cases'),
);
const IntegrationsEcosystem = dynamic(
  () => import('@/components/sections/integrations-ecosystem'),
);
const DeploymentOptions = dynamic(
  () => import('@/components/sections/deployment-options'),
);
const FinalCTA = dynamic(() => import('@/components/sections/final-cta'));

export const metadata: Metadata = {
  title: 'Fleetbase | Open-Source Logistics & Supply Chain Platform',
  description:
    'Fleetbase is the open-source logistics OS. Fleet management, e-commerce fulfillment, warehouse, and accounting — one platform, never a per-delivery fee, self-hosted or cloud.',
  keywords:
    'open source logistics platform, fleet management software, TMS software, transportation management system, delivery management, supply chain software, self hosted fleet management, open source logistics, last mile delivery software, route optimization software, warehouse management',
  alternates: {
    canonical: 'https://fleetbase.io',
  },
  openGraph: {
    title: 'Fleetbase | Open-Source Logistics & Supply Chain Platform',
    description:
      'Fleet management, e-commerce fulfillment, warehouse, and accounting — unified in one open-source platform. Never a per-delivery fee. Self-hosted or cloud.',
    url: 'https://fleetbase.io',
    type: 'website',
    images: [
      {
        url: '/og?title=Open-Source%20Logistics%20%26%20Supply%20Chain%20Platform&eyebrow=Fleetbase&subtitle=Fleet%20management%2C%20fulfillment%2C%20warehouse%2C%20and%20accounting%20%E2%80%94%20one%20platform%2C%20never%20a%20per-delivery%20fee',
        width: 1200,
        height: 630,
        alt: 'Fleetbase — open-source logistics and supply chain platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleetbase | Open-Source Logistics Platform',
    description:
      'Fleet management, e-commerce fulfillment, warehouse, and accounting — unified, open-source, never a per-delivery fee.',
    images: [
      '/og?title=Open-Source%20Logistics%20%26%20Supply%20Chain%20Platform&eyebrow=Fleetbase&subtitle=Fleet%20management%2C%20fulfillment%2C%20warehouse%2C%20and%20accounting%20%E2%80%94%20one%20platform%2C%20never%20a%20per-delivery%20fee',
    ],
  },
};

export default async function Home() {
  const stars = await getGitHubStars();
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <Hero />
      <StatsBar />
      <PlatformModules />
      <FleetOpsShowcase />
      <OpenSourceAdvantage stars={stars} />
      <FeaturesTabsSection />
      <IndustryUseCases />
      <IntegrationsEcosystem />
      <DeploymentOptions />
      <FinalCTA />
    </>
  );
}
