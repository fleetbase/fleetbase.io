import type { Metadata } from 'next';
import ApiIntegrationsPageContent from './api-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/developers/api' },
  title: 'API & Integrations — REST, WebSocket & Webhooks',
  description:
    'A complete REST API, real-time SocketCluster channels and event-driven webhooks to integrate Fleetbase with your existing systems.',
  keywords: [
    'Fleetbase API',
    'logistics REST API',
    'fleet management API',
    'WebSocket real-time tracking',
    'webhook integration',
    'Fleetbase integrations',
    'SocketCluster',
    'Storefront API',
  ],
  openGraph: {
    title: 'API & Integrations | Fleetbase',
    description:
      'REST API, SocketCluster channels, and webhooks — everything you need to build on top of Fleetbase.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API & Integrations | Fleetbase',
    description:
      'Full REST API, real-time SocketCluster channels, and event-driven webhooks for logistics integration.',
  },
};

export default function ApiIntegrationsPage() {
  return <ApiIntegrationsPageContent />;
}
