import type { Metadata } from 'next';
import { Webhook, Code2, Puzzle, Zap, Shield, BarChart3, RefreshCw, Bell, Settings, Globe } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/integrations' },
  title: 'Logistics API & Integrations',
  description: 'Connect Fleetbase to your stack with a full REST API, real-time webhooks and pre-built integrations that fit your existing workflows.',
  keywords: ['logistics API', 'fleet management API', 'logistics integration platform', 'delivery API', 'logistics webhook integration', 'headless logistics platform'],
  openGraph: {
    title: 'Logistics API & Integrations | Fleetbase',
    description: 'A logistics platform that fits your stack — not one that replaces it.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics API & Integrations | Fleetbase`,
    description: `A logistics platform that fits your stack — not one that replaces it.`,
  },
};

export default function IntegrationsPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'API & Integrations', href: '/solutions/use-cases/integrations' },
      ]}
      badge="Use Case — API & Integrations"
      title={<>A Logistics Platform That<br /><span className="text-gradient">Fits Your Stack.</span></>}
      description="The best logistics platform is one that works with what you've already built — not one that forces you to rip and replace your existing tools. Fleetbase is built API-first from the ground up. Every capability is accessible programmatically. Connect your OMS, WMS, ERP, storefront, or custom systems and build the exact logistics workflow your operation needs — without writing a logistics platform from scratch."
      stats={[
        { value: 'API-first', label: 'Every feature accessible programmatically' },
        { value: '<200ms', label: 'Average API response time' },
        { value: 'Real-time', label: 'Webhook delivery for every platform event' },
        { value: '98%', label: 'API uptime SLA on cloud plans' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp"
      heroScreenshotAlt="Fleetbase developer console — API keys, webhooks, and real-time event logs"
      painPoints={{
        heading: 'Integration problems that slow every logistics team down',
        items: [
          'Orders manually re-entered between your OMS and logistics system — expensive and error-prone',
          'Delivery status updates that don\'t flow back to your storefront or ERP until someone manually triggers a sync',
          'No programmatic access to operational data — you\'re stuck with whatever the UI exposes',
          'Vendor lock-in to a closed platform that won\'t integrate with your existing infrastructure',
          'Webhook events that are unreliable, incomplete, or too slow to support real-time customer tracking',
          'Development teams blocked by poor API documentation and slow vendor support',
        ],
      }}
      featuresHeading="Built for developers. Designed for real operational workflows."
      featuresSubheading="Open source, API-first, and documented to the level that developers actually need."
      features={[
        {
          title: 'Full REST API',
          description: 'Every Fleetbase capability is accessible via a documented REST API — order creation and management, driver assignment, route management, tracking events, POD retrieval, analytics data, and more. Build exactly the integration your operation requires with a stable, versioned API.',
          bullets: [
            'Complete order lifecycle management via API — create, update, assign, complete',
            'Driver and vehicle management endpoints with real-time status',
            'Tracking events, ETAs, and POD retrieval programmable endpoints',
          ],
          icon: Code2,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Real-Time Webhooks',
          description: 'Don\'t poll for delivery status — receive it instantly. Fleetbase fires webhook events for every meaningful platform event: order created, assigned, picked up, delivered, failed, and dozens more. Configure multiple endpoints, filter by event type, and retry automatically on failure.',
          bullets: [
            'Event-driven webhooks for every order and delivery lifecycle event',
            'Configurable endpoint targets with per-event filtering',
            'Automatic retry with exponential back-off on delivery failure',
          ],
          icon: Webhook,
          screenshot: '/images/screenshots/ledger/ledger-payment-gateway-details.webp',
        },
        {
          title: 'Storefront & E-commerce Connectors',
          description: 'Native connectors for Shopify and WooCommerce push orders into Fleetbase at checkout and return delivery events to your storefront — keeping inventory, order status, and customer notifications in sync without custom development.',
          bullets: [
            'Shopify and WooCommerce native order sync connectors',
            'Delivery status returned to storefront order management',
            'Customer notification triggers from storefront order timeline',
          ],
          icon: Puzzle,
          screenshot: '/images/screenshots/storefront/storefront-dashboard.webp',
        },
        {
          title: 'JavaScript & Mobile SDKs',
          description: 'Build custom logistics interfaces, customer-facing tracking experiences, or internal tools on top of Fleetbase without writing raw HTTP calls. The official JavaScript SDK and React Native bindings give your developers type-safe, well-documented access to the full platform.',
          bullets: [
            'Official JavaScript SDK with full TypeScript support',
            'React Native bindings for mobile app integration',
            'Detailed API reference with code examples in multiple languages',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Extension & Plugin System',
          description: 'When a pre-built integration doesn\'t exist, build one. Fleetbase\'s extension system lets your development team build custom modules that run inside the platform — adding new UI panels, API endpoints, background workers, and data models without forking the core.',
          bullets: [
            'Extension scaffold generator for rapid custom module development',
            'Custom API endpoints that run within the Fleetbase authentication context',
            'Ember.js frontend engine for building custom console UI panels',
          ],
          icon: Settings,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Developer Console & API Monitoring',
          description: 'Every API call, webhook delivery, and system event is logged in the developer console with full request and response data. Debug integration issues in minutes rather than days. Monitor webhook delivery rates and API error patterns from a single view.',
          bullets: [
            'API request log with full request/response detail and latency',
            'Webhook delivery log with retry history and failure reasons',
            'System event stream for real-time integration debugging',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Globe, label: 'Multi-region API endpoints' },
        { icon: Shield, label: 'API key scoping & rotation' },
        { icon: Bell, label: 'Webhook failure alerting' },
        { icon: RefreshCw, label: 'Webhook auto-retry' },
        { icon: Code2, label: 'OpenAPI specification' },
        { icon: Webhook, label: 'Event filtering' },
        { icon: Puzzle, label: 'Pre-built connectors' },
        { icon: Zap, label: 'Sub-200ms response time' },
      ]}
      testimonial={{
        quote: "We integrated Fleetbase with our custom WMS and Shopify store in three days. The API documentation is genuinely complete — we didn't need to reverse engineer anything or raise a support ticket. It just worked.",
        author: 'Thomas R.',
        role: 'Lead Engineer',
        company: 'Fulfilment First',
      }}
      faqs={[
        {
          q: 'Is there a JavaScript SDK for Fleetbase?',
          a: 'Yes. The official Fleetbase JS SDK provides a typed, documented interface to the full REST API. React Native bindings are also available for mobile app integration.',
        },
        {
          q: 'How quickly are webhooks delivered after an event occurs?',
          a: 'Webhook delivery is near real-time — typically under 500ms from event occurrence to delivery attempt. Failed deliveries are retried automatically with exponential back-off.',
        },
        {
          q: 'Can we restrict API keys to specific operations or data types?',
          a: 'Yes. API keys can be scoped to specific resource types and operations — read-only, write-only, or granular per resource. Keys can be rotated or revoked from the developer console.',
        },
        {
          q: 'Is there a sandbox environment for integration development?',
          a: 'Yes. Fleetbase accounts include a sandbox environment for integration testing with full API and webhook functionality — no production data affected.',
        },
        {
          q: 'Can we build custom UI panels and modules inside the Fleetbase console?',
          a: 'Yes. The extension system allows development teams to build custom modules that render UI panels inside the Fleetbase console and expose custom API endpoints — all within the existing authentication and permission context.',
        },
      ]}
      ctaHeading="Build the logistics workflow your operation actually needs"
      ctaBody="Connect Fleetbase to everything you already run. Start your free trial and make your first API call in under 10 minutes — complete documentation included."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="View API Docs"
      ctaSecondaryHref="https://fleetbase.io/docs"
    />
  );
}
