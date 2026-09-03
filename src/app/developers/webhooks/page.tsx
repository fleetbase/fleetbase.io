import type { Metadata } from 'next';
import WebhooksPageContent from './webhooks-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/developers/webhooks' },
  title: 'Webhooks — Real-Time Event Delivery',
  description: 'Use Fleetbase webhooks to receive real-time event notifications for orders, drivers, tracking, and fleet activity in your systems.',
  keywords: 'fleetbase webhooks, order webhooks, real-time logistics events, delivery notifications, fleet webhook',
  openGraph: {
    title: 'Webhooks | Fleetbase Developer Platform',
    description: 'Use Fleetbase webhooks to receive real-time event notifications for orders, drivers, tracking, and fleet activity in your systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webhooks | Fleetbase Developer Platform',
    description: 'Use Fleetbase webhooks to receive real-time event notifications for orders, drivers, tracking, and fleet activity in your systems.',
  },
};

export default function WebhooksPage() {
  return <WebhooksPageContent />;
}
