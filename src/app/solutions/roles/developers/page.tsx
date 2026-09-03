import type { Metadata } from 'next';
import { Code2, Webhook, Puzzle, Shield, GitBranch, Zap, BarChart3, Globe, Settings, FileCheck } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/developers' },
  title: 'Logistics Platform for Developers',
  description: 'An open-source, API-first logistics platform. Full REST API, real-time webhooks, an Extensions SDK, self-hosting and complete source access.',
  keywords: ['logistics API for developers', 'open source logistics platform', 'fleet management API', 'logistics developer tools', 'self-hosted logistics software', 'logistics SDK'],
  openGraph: {
    title: 'Logistics Platform for Developers | Fleetbase',
    description: 'Open source, API-first, and built to be extended. The logistics platform developers actually want to work with.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics Platform for Developers | Fleetbase`,
    description: `Open source, API-first, and built to be extended. The logistics platform developers actually want to work with.`,
  },
};

export default function DevelopersPage() {
  return (
    <SolutionPageLayout
      badge="For Developers & Engineering Teams"
      title={<>Open Source. API-First.<br /><span className="text-gradient">Built to Be Extended.</span></>}
      description="Most logistics platforms are black boxes — closed source, poorly documented, and built for forms-based configuration rather than programmatic control. Fleetbase is different. The full source code is on GitHub. Every capability is accessible via a documented REST API. The extension system lets you build custom modules that run inside the platform. And self-hosted deployment means your team owns the infrastructure."
      stats={[
        { value: 'AGPL-3.0', label: 'Open source — full source code on GitHub' },
        { value: '<200ms', label: 'Average API response time' },
        { value: '1,800+', label: 'GitHub stars and growing' },
        { value: '100%', label: 'API coverage — every feature accessible programmatically' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp"
      heroScreenshotAlt="Fleetbase developer console — API keys, webhook configuration, and request logs"
      painPoints={{
        heading: 'Why developers hate working with most logistics platforms',
        items: [
          'Closed-source platforms you can\'t inspect, modify, or security-assess',
          'APIs that expose 30% of functionality while the other 70% is locked behind the UI',
          'Webhook implementations that are unreliable, poorly documented, and missing half the events you need',
          'No programmatic access to deploy, configure, or manage the platform — everything requires UI interaction',
          'Vendor lock-in that makes migrating your data or switching platforms a multi-month project',
          'Developer documentation that\'s out of date, incomplete, or requires a support ticket to understand',
        ],
      }}
      featuresHeading="A logistics platform engineers actually want to work with"
      featuresSubheading="Open source, API-first, extensible, and deployable anywhere."
      features={[
        {
          title: 'Full REST API — Every Feature Accessible',
          description: 'Not a subset of features — every platform capability is accessible via a documented REST API. Order management, driver assignment, route planning, tracking events, POD retrieval, analytics, fleet management, user and permissions — all programmable.',
          bullets: [
            'Complete OpenAPI specification with request/response examples',
            'Versioned endpoints with stable API contracts',
            'API key scoping — restrict keys to specific resources and operations',
          ],
          icon: Code2,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Real-Time Webhooks',
          description: 'Every meaningful platform event fires a webhook. Order created, assigned, picked up, delivered, failed — and dozens more. Configure multiple endpoints, filter by event type, and rely on automatic retry with exponential back-off when delivery fails.',
          bullets: [
            'Events for the complete order and delivery lifecycle',
            'Per-endpoint event type filtering',
            'Delivery log with retry history, response codes, and failure reasons',
          ],
          icon: Webhook,
          screenshot: '/images/screenshots/ledger/ledger-payment-gateway-details.webp',
        },
        {
          title: 'Extensions SDK — Build Custom Modules',
          description: 'Don\'t fork the core — extend it. The Fleetbase Extensions SDK lets your team build custom modules that run inside the platform: custom API endpoints, background workers, database models, and UI panels rendered in the Ember.js console — all within the existing auth context.',
          bullets: [
            'Laravel-based backend extensions with custom routes and models',
            'Ember.js frontend engine for console UI panel development',
            'Extension scaffold generator for rapid new module bootstrapping',
          ],
          icon: Puzzle,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp',
        },
        {
          title: 'Open Source — Full Code Access',
          description: 'Fleetbase is licensed under AGPL-3.0. Every line of backend and frontend code is on GitHub — readable, forkable, and security-assessable. Understand exactly what\'s running in your environment. Contribute upstream. Or use a commercial licence for proprietary modifications.',
          bullets: [
            'Full backend (Laravel/PHP) and frontend (Ember.js) source on GitHub',
            'Active open source community with maintained issue tracker',
            'Commercial licence available for proprietary modifications',
          ],
          icon: GitBranch,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Self-Hosted Deployment',
          description: 'Deploy Fleetbase on your own infrastructure — AWS, GCP, Azure, bare metal, or Kubernetes. Docker Compose for development. Helm charts for production. No external data dependencies. Your data stays in your environment, on your infrastructure, under your control.',
          bullets: [
            'Docker Compose deployment for development and staging',
            'Kubernetes Helm charts for production deployments',
            'Environment variable configuration — no hard-coded credentials',
          ],
          icon: Globe,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp',
        },
        {
          title: 'Developer Console & Observability',
          description: 'Every API request, webhook delivery, and platform event is logged with full request/response detail in the developer console. Debug integrations in real time. Monitor webhook delivery reliability. Trace event flows from trigger to consumer without external tooling.',
          bullets: [
            'API request log with method, status, latency, and full request/response',
            'Webhook delivery log with retry history and failure diagnostics',
            'System event stream for real-time integration debugging',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Shield, label: 'API key scoping & rotation' },
        { icon: FileCheck, label: 'OpenAPI specification' },
        { icon: Zap, label: 'Sub-200ms API response' },
        { icon: Settings, label: 'Extensions SDK' },
        { icon: Code2, label: 'JavaScript & React Native SDK' },
        { icon: Webhook, label: 'Webhook auto-retry' },
        { icon: Globe, label: 'Self-hosted deployment' },
        { icon: GitBranch, label: 'Full open source' },
      ]}
      testimonial={{
        quote: "The API documentation is actually complete — that alone puts Fleetbase ahead of every other logistics platform I've worked with. We integrated our custom OMS in two days and built a custom extension for our specialized cargo requirements in a week.",
        author: 'Alex T.',
        role: 'Senior Software Engineer',
        company: 'Haul Technology',
      }}
      faqs={[
        {
          q: 'Where is the Fleetbase source code?',
          a: 'The full source code is on GitHub at github.com/fleetbase. The backend is Laravel/PHP and the frontend is Ember.js — all licensed under AGPL-3.0 with a commercial licence available for proprietary modifications.',
        },
        {
          q: 'Is there a JavaScript SDK?',
          a: 'Yes. The official Fleetbase JS SDK provides typed, documented access to the full REST API. React Native bindings are also available for mobile app integration.',
        },
        {
          q: 'Can we build custom modules that run inside the Fleetbase console?',
          a: "Yes. The Extensions SDK lets you build custom backend routes and models in Laravel, and custom frontend panels in Ember.js — all running inside the existing authentication and permission system. A scaffold generator bootstraps new extensions in minutes.",
        },
        {
          q: 'How do we deploy Fleetbase in production?',
          a: 'Kubernetes Helm charts are available for production deployment on any cloud provider or on-premise environment. Docker Compose is used for development and staging. Configuration is fully managed via environment variables.',
        },
        {
          q: 'Are there rate limits on the API?',
          a: 'Cloud plans have configurable rate limits per API key. Self-hosted deployments have no platform-enforced rate limits — you control the infrastructure and its capacity.',
        },
      ]}
      ctaHeading="Build your logistics infrastructure on a platform you control"
      ctaBody="Open source, API-first, and built to be extended. Start your free trial or clone the repo — your logistics platform, your rules."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="View on GitHub"
      ctaSecondaryHref="https://github.com/fleetbase/fleetbase"
    />
  );
}
