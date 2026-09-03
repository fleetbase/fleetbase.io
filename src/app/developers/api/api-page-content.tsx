'use client';

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Layers,
  MapPin,
  Navigation,
  Package,
  Plug,
  ShoppingBag,
  Truck,
  User,
  Users,
  Webhook,
  Wifi,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';

const apiResources = [
  { icon: Package,    name: 'Orders',   desc: 'Create, update, dispatch, and track orders through their full lifecycle.',        endpoints: '12 endpoints' },
  { icon: User,       name: 'Drivers',  desc: 'Manage driver profiles, assignments, location, and status.',                      endpoints: '8 endpoints'  },
  { icon: MapPin,     name: 'Places',   desc: 'Geocode addresses, manage saved locations, and resolve coordinates.',             endpoints: '6 endpoints'  },
  { icon: Users,      name: 'Contacts', desc: 'Create and manage customer and contact records linked to orders.',               endpoints: '5 endpoints'  },
  { icon: Truck,      name: 'Vehicles', desc: 'Register and manage your vehicle fleet with full metadata support.',              endpoints: '6 endpoints'  },
  { icon: Layers,     name: 'Fleets',   desc: 'Organise drivers and vehicles into logical fleet groups.',                       endpoints: '5 endpoints'  },
  { icon: Navigation, name: 'Routes',   desc: 'Optimise multi-stop routes and calculate ETAs programmatically.',                endpoints: '4 endpoints'  },
  { icon: Activity,   name: 'Tracking', desc: 'Access real-time and historical location data for any tracked entity.',          endpoints: '4 endpoints'  },
];

const integrations = [
  { category: 'Mapping & Routing', items: ['Google Maps', 'HERE Maps', 'Mapbox', 'OpenStreetMap'] },
  { category: 'Payments',          items: ['Stripe', 'PayPal', 'Braintree', 'Square'] },
  { category: 'Notifications',     items: ['Twilio SMS', 'SendGrid', 'Firebase FCM', 'WhatsApp'] },
  { category: 'Logistics',         items: ['FedEx', 'UPS', 'DHL', 'EasyPost'] },
  { category: 'ERP & CRM',         items: ['Salesforce', 'HubSpot', 'SAP', 'NetSuite'] },
  { category: 'E-Commerce',        items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'] },
];

const createOrderCode = `// POST /v1/orders
// Authorization: Bearer flb_live_xxxx

{
  "payload": {
    "pickup": "place_abc123",
    "dropoff": "place_xyz789",
    "entities": [{ "name": "Package", "weight": 2.5 }]
  },
  "type": "delivery",
  "scheduled_at": "2026-04-01T09:00:00Z"
}

// Response: 201 Created
{
  "data": {
    "id": "order_xxx",
    "status": "created",
    "tracking_number": "FB-000001"
  }
}`;

const socketCode = `// Subscribe to real-time driver location using socketcluster-client
import { create } from 'socketcluster-client';

const socket = create({
  hostname: 'socket.fleetbase.io',
  port: 443,
  secure: true,
});

(async () => {
  const channel = socket.subscribe('driver.driver_xxx');

  for await (const data of channel) {
    updateMapMarker(data.lat, data.lng);
  }
})();`;

export default function ApiIntegrationsPageContent() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="container relative">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="rounded-full bg-muted px-3 py-1">Developers</span>
              <span className="px-3">API &amp; Integrations</span>
            </div>

            <h1 className="text-4xxl leading-none tracking-tight text-balance">
              Build Anything on Top of{' '}
              <span className="text-gradient">Fleetbase</span>
            </h1>

            <p className="text-foreground/90 leading-snug md:text-lg dark:text-foreground/95 max-w-3xl">
              A complete REST API, real-time SocketCluster channels, and event-driven webhooks
              give you everything you need to integrate Fleetbase with your existing systems or
              build entirely new logistics-powered applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/docs/api">
                <Button size="lg">View API Reference</Button>
              </Link>
              <Link href="https://documenter.getpostman.com/view/6866273/2s9YyvAfZh" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">Postman Collection</Button>
              </Link>
              <Link href="/platform/developer-console">
                <Button size="lg" variant="ghost">
                  Developer Console <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative w-full mt-4 aspect-video overflow-hidden rounded-xl border shadow-2xl">
              <Image
                src="/images/screenshots/developers/developers-api-keys-management.webp"
                alt="Fleetbase Developer Console — API key management and integration tools"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stat strip ──────────────────────────────────────────────── */}
      <section className="border-y bg-muted/10">
        <div
          className="container overflow-hidden rounded-xl bg-border"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}
        >
          {[
            { value: 'REST',  label: 'Full REST API' },
            { value: 'WS',    label: 'SocketCluster channels' },
            { value: '50+',   label: 'API endpoints' },
            { value: '24+',   label: 'Native integrations' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-background py-8 text-center">
              <p className="text-3xl font-bold text-gradient">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REST API ─────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Plug className="mr-2 h-3 w-3 text-primary" />
                REST API
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                A complete REST API for every logistics operation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Fleetbase REST API gives you programmatic access to every resource in the
                platform. Create orders, manage drivers, track shipments, geocode addresses, and
                automate your entire logistics workflow through a clean, consistent JSON API.
              </p>
              <ul className="space-y-3">
                {[
                  'Consistent JSON:API response format across all endpoints',
                  'Bearer token authentication with per-key permissions',
                  'Full CRUD operations on all core resources',
                  'Filtering, sorting, and pagination on list endpoints',
                  'Includes relationships and nested resource expansion',
                  'Comprehensive Postman collection for rapid testing',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/docs/api">
                  <Button variant="outline" size="sm">Core API Docs</Button>
                </Link>
                <Link href="/docs/api/storefront">
                  <Button variant="outline" size="sm">Storefront API Docs</Button>
                </Link>
              </div>
            </div>
            <CodeBlock
              code={createOrderCode}
              language="json"
              label="REST API — Create an Order"
            />
          </div>
        </div>
      </section>

      {/* ── API Resources ────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Core API resources</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every major entity in the Fleetbase platform is accessible via the API with full
              CRUD support and consistent response schemas.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}
          >
            {apiResources.map(({ icon: Icon, name, desc, endpoints }) => (
              <div key={name} className="flex flex-col gap-3 bg-background p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                <span className="mt-auto text-xs font-medium text-primary">{endpoints}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SocketCluster ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg order-2 lg:order-1">
              <Image
                src="/images/screenshots/developers/developers-websockets-listen-custom-channel.webp"
                alt="Fleetbase Developer Console — listening on a custom SocketCluster channel"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Wifi className="mr-2 h-3 w-3 text-primary" />
                SocketCluster Channels
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Real-time data without polling
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fleetbase's WebSocket layer is powered by SocketCluster. Subscribe to channels
                and receive live updates the instant something changes — driver location, order
                status, fleet events, and more. Connect using the official{' '}
                <code className="text-xs font-mono text-primary">socketcluster-client</code>{' '}
                npm package.
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'Order channels',  desc: 'Live order status, driver assignment, and ETA updates' },
                  { label: 'Driver channels', desc: 'Real-time GPS location, speed, and status broadcasts' },
                  { label: 'Fleet channels',  desc: 'Fleet-wide events and aggregate status updates' },
                  { label: 'Custom channels', desc: 'Emit and subscribe to custom events from your extensions' },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-semibold">{label}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <CodeBlock
                code={socketCode}
                language="javascript"
                label="SocketCluster — Live Driver Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Webhooks ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Webhook className="mr-2 h-3 w-3 text-primary" />
                Webhooks
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Event-driven integration with webhooks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Configure webhooks to push real-time notifications to your systems whenever
                something happens in Fleetbase. No polling required — Fleetbase calls you.
                Subscribe to specific events or receive everything, with automatic retries on
                failure.
              </p>

              {/* Event chips */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  'order.created', 'order.dispatched',
                  'order.completed', 'order.cancelled',
                  'driver.assigned', 'driver.location_updated',
                  'payment.received', 'entity.updated',
                ].map((ev) => (
                  <div key={ev} className="rounded-lg border bg-card px-3 py-2 font-mono text-xs text-muted-foreground">
                    {ev}
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {[
                  'Configure multiple webhook endpoints per organisation',
                  'Subscribe to specific events or receive all events',
                  'Automatic retry with exponential backoff on failure',
                  'Full delivery log with request and response inspection',
                  'HMAC signature verification for security',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/developers/developers-webhook-details-attempts.webp"
                alt="Fleetbase Developer Console — webhook delivery attempts with payload and response inspector"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Native integrations ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Native integrations</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Fleetbase connects natively with the tools your business already uses — from
              mapping and payments to ERP and e-commerce platforms.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {integrations.map(({ category, items }) => (
              <div key={category} className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Plus hundreds more available through the{' '}
            <Link href="/platform/extensions" className="text-primary underline underline-offset-4">
              Extensions Marketplace
            </Link>
          </p>
        </div>
      </section>

      {/* ── Storefront API ───────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg order-2 lg:order-1">
              <Image
                src="/images/screenshots/storefront/storefront-products-overview.webp"
                alt="Fleetbase Storefront — product catalogue and store management surface for the Storefront API"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <ShoppingBag className="mr-2 h-3 w-3 text-primary" />
                Storefront API
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                A dedicated API for commerce and delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Storefront extension exposes its own comprehensive API for building
                customer-facing commerce experiences. Manage stores, products, categories, carts,
                orders, and customers — with the same authentication and developer experience as
                the core API.
              </p>
              <ul className="space-y-3">
                {[
                  'Store and network management endpoints',
                  'Product catalogue with variants and modifiers',
                  'Cart, checkout, and order management',
                  'Customer accounts and address book',
                  'Real-time order tracking for customers',
                  'Fully documented in the Storefront API reference',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/docs/api/storefront">
                  <Button variant="outline">
                    View Storefront API Docs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'What authentication method does the Fleetbase API use?',
                  a: 'The Fleetbase API uses Bearer token authentication. Generate an API key from the Developer Console and include it in the Authorization header of every request: Authorization: Bearer YOUR_API_KEY. Keys are scoped to your organisation and can be rotated or revoked at any time.',
                  learnMore: { href: '/docs/platform/developer-console/api-keys', label: 'API key management →' },
                },
                {
                  q: 'Is there a rate limit on API requests?',
                  a: 'Core API endpoints have generous rate limits that scale with your plan. Standard plans support up to 1,000 requests per minute. Enterprise plans can negotiate higher limits. Rate limit headers are included in every response so your application can handle limits gracefully.',
                },
                {
                  q: 'Does Fleetbase support real-time data via WebSockets?',
                  a: 'Yes. Fleetbase provides real-time WebSocket channels powered by SocketCluster. Subscribe to channels for live order updates, driver location tracking, fleet status changes, and any other platform event. Use the official socketcluster-client npm package to connect.',
                  learnMore: { href: '/docs/platform/developer-console/socket-events', label: 'Socket events docs →' },
                },
                {
                  q: 'How do webhooks work in Fleetbase?',
                  a: 'Webhooks allow Fleetbase to push event notifications to your server in real time. Configure a webhook endpoint URL in the Developer Console, select which events to subscribe to, and Fleetbase will POST a JSON payload to your endpoint whenever those events occur. Failed deliveries are automatically retried with exponential backoff.',
                  learnMore: { href: '/docs/platform/developer-console/webhooks', label: 'Webhooks docs →' },
                },
                {
                  q: 'Is there a Storefront-specific API?',
                  a: 'Yes. The Storefront extension exposes its own dedicated API for managing stores, products, categories, orders, and customers. The Storefront API is documented separately and uses the same authentication mechanism as the core Fleetbase API.',
                  learnMore: { href: '/docs/api/storefront', label: 'Storefront API reference →' },
                },
                {
                  q: 'Can I use the API to build a custom mobile app?',
                  a: 'Absolutely. The Fleetbase API is the foundation for our own open-source Navigator and Storefront mobile apps. You can use the same API to build custom driver apps, customer-facing apps, or any other mobile experience on top of Fleetbase.',
                  learnMore: { href: '/docs/storefront/app/overview', label: 'Storefront & Navigator app docs →' },
                },
                {
                  q: 'Where can I find the full API reference?',
                  a: 'The full API reference lives at /docs/api and is also available as a Postman collection linked in the documentation. The reference covers all endpoints, request/response schemas, authentication, and example payloads.',
                  learnMore: { href: '/docs/api', label: 'API reference →' },
                },
              ].map(({ q, a, learnMore }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium">{q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {a}
                    {learnMore && (
                      <div className="mt-3">
                        <Link
                          href={learnMore.href}
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          {learnMore.label}
                        </Link>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-4xl font-bold tracking-tight text-balance">
                Start building with the Fleetbase API
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Get your API key, explore the reference documentation, and start integrating
                Fleetbase into your systems today.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer nofollow">
                  <Button size="lg">Get Your API Key</Button>
                </Link>
                <Link href="/docs/api">
                  <Button size="lg" variant="outline">View API Reference</Button>
                </Link>
                <Link href="https://documenter.getpostman.com/view/6866273/2s9YyvAfZh" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="ghost">
                    Postman Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Free API access on all plans · REST, SocketCluster &amp; Webhooks
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
