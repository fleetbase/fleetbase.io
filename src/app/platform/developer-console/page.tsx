import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import DeveloperConsolePageContent from './console-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/developer-console' },
  title: 'Developer Console — API Keys & Webhooks',
  description:
    'Manage API keys, configure webhooks, inspect request logs, and monitor real-time socket channels from the Fleetbase Developer Console.',
  keywords: [
    'Fleetbase developer console',
    'API key management',
    'webhook configuration',
    'request logs',
    'socket channels',
    'API monitoring',
    'Fleetbase developer tools',
  ],
  openGraph: {
    title: 'Developer Console — API Keys, Webhooks & Monitoring | Fleetbase',
    description:
      'Full developer control built into the platform. API keys, webhooks, request logs, and real-time socket channel monitoring.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Console | Fleetbase',
    description:
      'Manage API keys, webhooks, and monitor every request — all from the Fleetbase Developer Console.',
  },
};

export default function DeveloperConsolePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Developer Console"
        url="https://fleetbase.io/platform/developer-console"
        description="Manage API keys, configure webhooks, inspect request logs, and monitor real-time socket channels from the Fleetbase Developer Console."
        applicationCategory="DeveloperApplication"
      />
      <DeveloperConsolePageContent />
    </>
  );
}
