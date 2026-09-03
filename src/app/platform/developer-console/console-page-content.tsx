'use client';

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Filter,
  Key,
  Radio,
  Search,
  Shield,
  Terminal,
  Webhook,
  Wifi,
  XCircle,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';

const restCode = `# Authenticate with your API key from the Developer Console
curl -X POST https://api.fleetbase.io/v1/orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payload": {
      "pickup": "place_xxx",
      "dropoff": "place_yyy"
    },
    "type": "delivery"
  }'`;

const wsCode = `// Subscribe to live order events using the SocketCluster client
import { create } from 'socketcluster-client';

const socket = create({
  hostname: 'socket.fleetbase.io',
  port: 443,
  secure: true,
});

(async () => {
  const channel = socket.subscribe('order.order_xxx');

  for await (const data of channel) {
    console.log('Order event received:', data);
  }
})();

// Or listen for specific named events on the socket
socket.on('order.dispatched', (data) => {
  console.log('Order dispatched:', data);
});`;

export default function DeveloperConsolePageContent() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="container relative">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="rounded-full bg-muted px-3 py-1">Developers</span>
              <span className="px-3">Console</span>
            </div>

            <h1 className="text-4xxl leading-none tracking-tight text-balance">
              Full Developer Control,{' '}
              <span className="text-gradient">Built Into the Platform</span>
            </h1>

            <p className="text-foreground/90 leading-snug md:text-lg dark:text-foreground/95 max-w-3xl">
              The Fleetbase Developer Console gives you everything you need to integrate, debug,
              and monitor your logistics platform. Manage API keys, configure webhooks, inspect
              request logs, and watch real-time socket channels — all from one place.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer nofollow">
                <Button size="lg">Open Developer Console</Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="outline">View API Reference</Button>
              </Link>
              <Link href="https://github.com/fleetbase/dev-engine" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">
                  <FaGithub className="mr-2 h-4 w-4" />
                  View Source
                </Button>
              </Link>
            </div>

            <div className="relative w-full mt-4 aspect-video overflow-hidden rounded-xl border shadow-2xl">
              <Image
                src="/images/screenshots/developers/developers-request-logs.webp"
                alt="Fleetbase Developer Console — API request log with method, status, and latency"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities mosaic ──────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Everything a developer needs</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Six core tools that make integrating with Fleetbase fast, reliable, and fully
              transparent.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}
          >
            {[
              { icon: Key,      title: 'API Key Management',   desc: 'Generate, name, and manage multiple API keys per organisation. Set expiry dates, rotate keys, and revoke access instantly.', href: '/docs/platform/developer-console/api-keys' },
              { icon: Webhook,  title: 'Webhook Configuration', desc: 'Subscribe to platform events and deliver real-time HTTP notifications to any endpoint. Configure retries and view delivery history.', href: '/docs/platform/developer-console/webhooks' },
              { icon: Activity, title: 'Request Logs',          desc: 'Full audit trail of every API request — method, endpoint, payload, response, latency, status code, and authenticating key.', href: '/docs/platform/developer-console/request-logs' },
              { icon: Wifi,     title: 'Socket Channels',       desc: 'Monitor active SocketCluster channels, connected clients, and real-time message streams for live data integrations.', href: '/docs/platform/developer-console/socket-events' },
              { icon: Radio,    title: 'Event Stream',          desc: 'Browse all platform events in chronological order. Filter by type, entity, or time range to debug integration issues.', href: '/docs/platform/developer-console/system-events' },
              { icon: Shield,   title: 'Sandbox Mode',          desc: 'Test your integration against a fully isolated sandbox without affecting production data or triggering live webhooks.', href: '/docs/platform/developer-console' },
            ].map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read the docs <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── API Keys ─────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Key className="mr-2 h-3 w-3 text-primary" />
                API Key Management
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Secure API keys with full lifecycle control
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Generate multiple API keys for different environments and services. Every key is
                scoped to your organisation, can be named for easy identification, and can be
                revoked instantly if compromised. Set expiry dates to enforce rotation policies
                across your team.
              </p>
              <ul className="space-y-3">
                {[
                  'Generate unlimited API keys per organisation',
                  'Set custom expiry dates for automatic rotation',
                  'Name and label keys by environment or service',
                  'Revoke keys instantly with a single click',
                  'View last-used timestamp for each key',
                  'Bearer token authentication on all endpoints',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href="/docs/platform/developer-console/api-keys"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  API key documentation <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/developers/developers-api-keys-management.webp"
                alt="Fleetbase Developer Console — API key management"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Webhooks ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg order-2 lg:order-1">
              <Image
                src="/images/screenshots/developers/developers-webhooks-management.webp"
                alt="Fleetbase Developer Console — webhook subscriptions and target URLs"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Webhook className="mr-2 h-3 w-3 text-primary" />
                Webhooks
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Real-time event delivery to any endpoint
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Configure webhooks to push event notifications to your systems the moment
                something happens in Fleetbase. Subscribe to specific event types or receive all
                events. Every delivery is logged with the full request and response so you can
                debug failures instantly.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Order Events',   examples: 'created, dispatched, completed, cancelled' },
                  { label: 'Driver Events',  examples: 'assigned, location updated, status changed' },
                  { label: 'Payment Events', examples: 'invoice created, payment received, payout sent' },
                  { label: 'Entity Events',  examples: 'contact, place, vehicle, fleet updates' },
                ].map(({ label, examples }) => (
                  <div key={label} className="rounded-lg border bg-card p-4">
                    <p className="font-semibold text-sm">{label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{examples}</p>
                  </div>
                ))}
              </div>
              <div>
                <Link
                  href="/docs/platform/developer-console/webhooks"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Webhook setup &amp; signing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Request Logs ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Activity className="mr-2 h-3 w-3 text-primary" />
                Request Logs &amp; Monitoring
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Complete visibility into every API request
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The request log gives you a full audit trail of every API call made to your
                Fleetbase instance — request method, endpoint, payload, response body, HTTP
                status, latency, and which API key was used, all in real time.
              </p>
              <ul className="space-y-5">
                {[
                  { icon: Search,   title: 'Full request & response',  desc: 'Inspect the complete payload and response body for every API call, including headers and query parameters.' },
                  { icon: Clock,    title: 'Latency tracking',         desc: 'Monitor response times across all endpoints to spot performance bottlenecks before they affect users.' },
                  { icon: XCircle,  title: 'Error highlighting',       desc: '4xx and 5xx responses are flagged for quick identification. Drill into any failure to see the exact error returned.' },
                  { icon: Filter,   title: 'Filter & search',          desc: 'Filter by endpoint, HTTP method, status code, API key, or time range to find the request you need immediately.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/developers/developers-request-log-details.webp"
                alt="Fleetbase Developer Console — request log entry details with payload and response"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Socket Channels ──────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg order-2 lg:order-1">
              <Image
                src="/images/screenshots/developers/developers-websockets.webp"
                alt="Fleetbase Developer Console — active WebSocket channels and connected clients"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Wifi className="mr-2 h-3 w-3 text-primary" />
                Real-Time Socket Channels
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Monitor live WebSocket connections in real time
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fleetbase uses SocketCluster to deliver real-time updates to connected clients.
                The Developer Console gives you full visibility into active channels, connected
                clients, and message throughput so you can monitor and debug live data streams.
                Use the official <code className="text-xs font-mono text-primary">socketcluster-client</code> package to connect.
              </p>
              <ul className="space-y-3">
                {[
                  'View all active socket channels by name and type',
                  'Monitor connected client count per channel',
                  'Inspect recent messages and event payloads',
                  'Use the official socketcluster-client npm package to connect',
                  'Used for live order tracking, driver location, and notifications',
                  'Scales automatically with connection volume',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Start ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
              <Terminal className="mr-2 h-3 w-3 text-primary" />
              Quick Start
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Start integrating in minutes
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Generate an API key from the Developer Console and make your first request in
              seconds. Subscribe to live events using the official SocketCluster client.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <CodeBlock
              code={restCode}
              language="bash"
              label="REST API — Create an Order"
            />
            <CodeBlock
              code={wsCode}
              language="javascript"
              label="SocketCluster — Subscribe to Live Order Updates"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/developers/api">
              <Button variant="outline">
                Full API Reference <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/developers/sdks">
              <Button variant="ghost">
                SDK Downloads <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'What is the Fleetbase Developer Console?',
                  a: 'The Developer Console is a dedicated extension within the Fleetbase platform that gives developers full control over API keys, webhooks, event logs, socket channels, and real-time activity monitoring. It is the central hub for integrating external systems with Fleetbase.',
                },
                {
                  q: 'How do API keys work in Fleetbase?',
                  a: 'Each organisation can generate multiple API keys with configurable expiry dates. Keys are scoped to your organisation and can be rotated or revoked at any time from the console. All API requests are authenticated using Bearer token authorisation.',
                },
                {
                  q: 'What events can I subscribe to via webhooks?',
                  a: 'Fleetbase emits webhook events for all major platform actions including order lifecycle events (created, dispatched, completed, cancelled), driver status changes, entity updates, payment events, and custom extension events. You can subscribe to specific events or receive all events.',
                },
                {
                  q: 'Can I test webhooks without a public endpoint?',
                  a: 'Yes. The Developer Console includes a webhook test tool that lets you send test payloads to any endpoint. You can also use tools like ngrok to tunnel to a local development server and receive live webhook events during development.',
                },
                {
                  q: 'What are Socket Channels?',
                  a: 'Socket Channels are real-time WebSocket channels powered by SocketCluster. They allow your application to receive live updates from Fleetbase without polling. Connect using the official socketcluster-client npm package. The console shows all active channels, connected clients, and recent messages.',
                },
                {
                  q: 'How long are API logs retained?',
                  a: 'API request logs are retained for 30 days on standard plans. Enterprise plans can configure extended retention. Logs include the full request and response payload, latency, status code, and the API key used to authenticate the request.',
                },
                {
                  q: 'Can I have multiple API keys for different environments?',
                  a: 'Yes. Best practice is to create separate API keys for development, staging, and production environments. Each key can be named and labelled for easy identification. You can also set expiry dates on keys to enforce rotation policies.',
                },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium">{q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {a}
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
                Ready to start building?
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Open the Developer Console, generate your first API key, and start integrating
                Fleetbase into your systems today.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer nofollow">
                  <Button size="lg">Open Developer Console</Button>
                </Link>
                <Link href="/developers/api">
                  <Button size="lg" variant="outline">
                    Explore the API <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Free on all plans · Full API access · No rate limits on core endpoints
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
