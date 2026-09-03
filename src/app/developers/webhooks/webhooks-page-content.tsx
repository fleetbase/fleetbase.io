'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const events = [
  {
    group: 'Orders',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    items: [
      { name: 'order.created', desc: 'A new order has been placed in the system.' },
      { name: 'order.dispatched', desc: 'An order has been assigned to a driver and dispatched.' },
      { name: 'order.started', desc: 'The driver has started the order journey.' },
      { name: 'order.completed', desc: 'The order has been successfully delivered.' },
      { name: 'order.cancelled', desc: 'An order has been cancelled.' },
      { name: 'order.updated', desc: 'Any field on an order has changed.' },
    ],
  },
  {
    group: 'Drivers',
    color: 'bg-green-500/10 text-green-600 dark:text-green-400',
    dot: 'bg-green-500',
    items: [
      { name: 'driver.assigned', desc: 'A driver has been assigned to an order or fleet.' },
      { name: 'driver.location_changed', desc: 'The driver\'s GPS coordinates have updated.' },
      { name: 'driver.online', desc: 'A driver has gone online and is available.' },
      { name: 'driver.offline', desc: 'A driver has gone offline.' },
      { name: 'driver.updated', desc: 'A driver\'s profile or status has changed.' },
    ],
  },
  {
    group: 'Tracking',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    items: [
      { name: 'tracking_status.created', desc: 'A new tracking status update has been recorded.' },
      { name: 'tracking_number.created', desc: 'A tracking number has been generated for a shipment.' },
      { name: 'proof_of_delivery.created', desc: 'A proof of delivery (signature/photo) has been captured.' },
    ],
  },
  {
    group: 'Fleet & Vehicles',
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    dot: 'bg-orange-500',
    items: [
      { name: 'vehicle.updated', desc: 'A vehicle\'s details or status have changed.' },
      { name: 'vehicle.assigned', desc: 'A vehicle has been assigned to a driver or fleet.' },
      { name: 'issue.created', desc: 'A new issue or incident has been reported.' },
      { name: 'issue.updated', desc: 'An existing issue has been updated.' },
      { name: 'issue.resolved', desc: 'An issue has been marked as resolved.' },
    ],
  },
];

const useCases = [
  {
    icon: '📱',
    title: 'Customer Order Notifications',
    desc: 'Trigger SMS, push, or email notifications the moment an order is dispatched, out for delivery, or completed — without polling.',
    events: ['order.dispatched', 'tracking_status.created', 'order.completed'],
  },
  {
    icon: '🗺️',
    title: 'Live Tracking Map',
    desc: 'Stream driver GPS coordinates to your own customer-facing tracking page or embedded map widget in real time.',
    events: ['driver.location_changed', 'order.started'],
  },
  {
    icon: '🏢',
    title: 'ERP & WMS Sync',
    desc: 'Keep your ERP, WMS, or inventory system in sync with Fleetbase order status changes automatically.',
    events: ['order.created', 'order.updated', 'order.completed', 'order.cancelled'],
  },
  {
    icon: '📄',
    title: 'Proof of Delivery Archiving',
    desc: 'Automatically archive signatures and delivery photos into your document management system or S3 bucket.',
    events: ['proof_of_delivery.created'],
  },
  {
    icon: '💰',
    title: 'Billing & Invoicing Triggers',
    desc: 'Fire your billing system to generate and send an invoice the moment a delivery is confirmed complete.',
    events: ['order.completed', 'proof_of_delivery.created'],
  },
  {
    icon: '🔧',
    title: 'Fleet Maintenance Alerts',
    desc: 'Route vehicle issues and driver incidents to your maintenance team or ticketing system instantly.',
    events: ['issue.created', 'vehicle.updated'],
  },
];

const faqs: { q: string; a: string; learnMore?: { href: string; label: string } }[] = [
  {
    q: 'How do I set up a webhook endpoint?',
    a: 'Navigate to Developers → Webhooks in the Fleetbase console. Click "Add Webhook", enter your HTTPS endpoint URL, select the events you want to subscribe to, and save. Fleetbase will immediately begin delivering events to your endpoint.',
    learnMore: { href: '/docs/platform/recipes/connect-your-first-webhook', label: 'Recipe: Connect your first webhook →' },
  },
  {
    q: 'Does Fleetbase retry failed webhook deliveries?',
    a: 'Yes. If your endpoint returns a non-2xx status code or times out, Fleetbase retries with exponential back-off: 5 minutes, 30 minutes, 2 hours, and 8 hours. After four failed attempts the event is marked as failed and logged in the console for inspection.',
  },
  {
    q: 'How do I verify that a webhook came from Fleetbase?',
    a: 'Every webhook request includes an X-Fleetbase-Signature header containing an HMAC-SHA256 signature of the raw request body, signed with your webhook secret. Verify this signature on your server before processing the payload to prevent spoofed requests.',
    learnMore: { href: '/docs/platform/developer-console/webhooks', label: 'Webhook signing details →' },
  },
  {
    q: 'What format does the webhook payload use?',
    a: 'All webhook payloads are JSON objects with a consistent envelope: an event field (e.g. "order.dispatched"), a created_at timestamp, an api_version field, and a data object containing the full updated resource.',
  },
  {
    q: 'Can I subscribe to all events at once?',
    a: 'Yes. When creating a webhook you can select "All events" to receive every event type, or you can cherry-pick specific events. You can also create multiple webhooks pointing to different endpoints with different event subscriptions.',
    learnMore: { href: '/docs/platform/developer-console/system-events', label: 'Available event types →' },
  },
  {
    q: 'How do I test my webhook endpoint locally?',
    a: 'Use a tunnelling tool like ngrok (ngrok http 3000) to expose your local server with a public HTTPS URL. Paste that URL into the Fleetbase webhook configuration. You can also use the "Send Test Event" button in the console to fire a sample payload at any time.',
  },
  {
    q: 'Is there a log of all webhook deliveries?',
    a: 'Yes. The Developers → Webhooks panel in the console shows a full delivery log for every webhook, including the event type, timestamp, HTTP status returned by your endpoint, full request/response bodies, and retry history.',
    learnMore: { href: '/docs/platform/developer-console/request-logs', label: 'Request & delivery logs →' },
  },
];

export default function WebhooksPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Developers</span>
              <span className="px-3">Webhooks</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Real-Time Event Notifications for Your{' '}
              <span className="text-gradient">Logistics Stack</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Webhooks let Fleetbase push event data directly to your server the moment something happens — an order is dispatched, a driver updates their location, or a delivery is completed. No polling, no delays, no missed updates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/docs/platform/developer-console/webhooks">
                <Button size="lg">Read the Docs</Button>
              </Link>
              <Link href="https://console.fleetbase.io/onboard" rel="nofollow">
                <Button size="lg" variant="outline">Set Up a Webhook</Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="ghost">API Reference</Button>
              </Link>
            </div>
            <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
              <Image
                src="/images/screenshots/developers/developers-webhooks-management.webp"
                alt="Fleetbase Developer Console — Webhooks management screen with subscriptions, target URLs, and event filters"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-bold mb-1">20+</div><div className="text-sm text-muted-foreground">Event Types</div></div>
            <div><div className="text-3xl font-bold mb-1">HTTPS</div><div className="text-sm text-muted-foreground">Secure Delivery</div></div>
            <div><div className="text-3xl font-bold mb-1">4×</div><div className="text-sm text-muted-foreground">Auto Retry</div></div>
            <div><div className="text-3xl font-bold mb-1">HMAC</div><div className="text-sm text-muted-foreground">Signature Verification</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Event-Driven Integration in Three Steps</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fleetbase webhooks follow a simple publish-subscribe model. You tell Fleetbase where to send events, and it handles the rest — delivery, retries, and logging included.
              </p>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Register your endpoint', desc: 'Add your HTTPS URL in Developers → Webhooks and choose which events to subscribe to.' },
                  { step: '02', title: 'Fleetbase fires the event', desc: 'When a matching event occurs, Fleetbase immediately POSTs a signed JSON payload to your endpoint.' },
                  { step: '03', title: 'Your server processes it', desc: 'Verify the signature, acknowledge with a 200 OK, and process the payload asynchronously in your own system.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Payload example */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted-foreground">Webhook Payload — order.dispatched</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto space-y-1">
                <div className="text-muted-foreground">POST https://your-server.com/webhooks/fleetbase</div>
                <div className="text-muted-foreground">X-Fleetbase-Signature: sha256=abc123...</div>
                <div className="mt-3 text-foreground">{`{`}</div>
                <div className="ml-4 text-green-400">{`"event": "order.dispatched",`}</div>
                <div className="ml-4 text-green-400">{`"api_version": "1.0",`}</div>
                <div className="ml-4 text-green-400">{`"created_at": "2026-04-15T09:41:00Z",`}</div>
                <div className="ml-4 text-foreground">{`"data": {`}</div>
                <div className="ml-8 text-blue-400">{`"id": "order_xxxxxxxx",`}</div>
                <div className="ml-8 text-blue-400">{`"public_id": "ORDER-12345",`}</div>
                <div className="ml-8 text-blue-400">{`"status": "dispatched",`}</div>
                <div className="ml-8 text-foreground">{`"driver_assigned": {`}</div>
                <div className="ml-12 text-blue-400">{`"name": "James Okafor",`}</div>
                <div className="ml-12 text-blue-400">{`"id": "driver_xxxxxxxx"`}</div>
                <div className="ml-8 text-foreground">{`},`}</div>
                <div className="ml-8 text-foreground">{`"payload": {`}</div>
                <div className="ml-12 text-blue-400">{`"pickup": "12 Marina Bay, Singapore",`}</div>
                <div className="ml-12 text-blue-400">{`"dropoff": "88 Orchard Road, Singapore"`}</div>
                <div className="ml-8 text-foreground">{`}`}</div>
                <div className="ml-4 text-foreground">{`}`}</div>
                <div className="text-foreground">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Available Webhook Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to individual events or all events at once. Every event follows the same <code className="text-sm bg-muted px-1 py-0.5 rounded">resource.action</code> naming convention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((group) => (
              <div key={group.group} className="bg-card border rounded-lg p-6">
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${group.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`}></span>
                  {group.group}
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex gap-3">
                      <code className="text-xs bg-muted px-2 py-1 rounded font-mono flex-shrink-0 h-fit mt-0.5">{item.name}</code>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Teams Build with Webhooks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Webhooks are the glue between Fleetbase and the rest of your logistics technology stack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="text-3xl mb-4">{uc.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{uc.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {uc.events.map((ev) => (
                    <code key={ev} className="text-xs bg-muted px-2 py-0.5 rounded font-mono">{ev}</code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Verify Every Delivery with HMAC Signatures</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every webhook request Fleetbase sends includes an <code className="text-sm bg-muted px-1 py-0.5 rounded">X-Fleetbase-Signature</code> header — an HMAC-SHA256 signature of the raw request body, signed with your webhook secret. Always verify this before processing the payload.
              </p>
              <div className="space-y-4">
                {[
                  'HMAC-SHA256 signature on every request',
                  'HTTPS-only delivery — no plain HTTP endpoints',
                  'Per-webhook secrets, rotatable at any time',
                  'Timing-safe comparison to prevent timing attacks',
                  'Full delivery log for audit and debugging',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted-foreground">Signature Verification — Node.js</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto space-y-1">
                <div className="text-muted-foreground">const crypto = require(&apos;crypto&apos;);</div>
                <div className="mt-3 text-foreground">app.post(&apos;/webhooks/fleetbase&apos;, (req, res) =&gt; {'{'}</div>
                <div className="ml-4 text-foreground">const sig = req.headers[&apos;x-fleetbase-signature&apos;];</div>
                <div className="ml-4 text-foreground">const expected = crypto</div>
                <div className="ml-6 text-green-400">.createHmac(&apos;sha256&apos;, process.env.WEBHOOK_SECRET)</div>
                <div className="ml-6 text-green-400">.update(req.rawBody)</div>
                <div className="ml-6 text-green-400">.digest(&apos;hex&apos;);</div>
                <div className="mt-2 ml-4 text-foreground">if (!crypto.timingSafeEqual(</div>
                <div className="ml-6 text-foreground">Buffer.from(sig),</div>
                <div className="ml-6 text-foreground">Buffer.from(expected)</div>
                <div className="ml-4 text-foreground">)) {'{'}</div>
                <div className="ml-6 text-red-400">return res.status(401).send(&apos;Invalid signature&apos;);</div>
                <div className="ml-4 text-foreground">{'}'}</div>
                <div className="mt-2 ml-4 text-muted-foreground">// Process payload safely</div>
                <div className="ml-4 text-foreground">const {'{ event, data }'} = req.body;</div>
                <div className="ml-4 text-foreground">res.sendStatus(200);</div>
                <div className="text-foreground">{'}'});</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retry policy */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliable Delivery with Automatic Retries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If your endpoint is temporarily unavailable, Fleetbase automatically retries delivery with exponential back-off. Every attempt is logged so you can inspect and replay failed events.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { attempt: '1st retry', delay: '5 minutes' },
              { attempt: '2nd retry', delay: '30 minutes' },
              { attempt: '3rd retry', delay: '2 hours' },
              { attempt: '4th retry', delay: '8 hours' },
            ].map((r, i) => (
              <div key={i} className="bg-card border rounded-lg p-5 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{r.delay}</div>
                <div className="text-xs text-muted-foreground">{r.attempt}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            After four failed attempts the event is marked as failed and preserved in the delivery log for manual inspection.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-medium hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 text-muted-foreground flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t bg-muted/10 pt-4">
                    {faq.a}
                    {faq.learnMore && (
                      <div className="mt-3">
                        <Link
                          href={faq.learnMore.href}
                          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                        >
                          {faq.learnMore.label}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Receiving Webhook Events Today</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Set up your first webhook endpoint in under two minutes from the Fleetbase Developer Console.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://console.fleetbase.io/onboard" rel="nofollow">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/docs/platform/developer-console/webhooks">
              <Button size="lg" variant="outline">Read the Docs</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
