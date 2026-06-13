import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Bell,
  Boxes,
  Check,
  Code2,
  Compass,
  GitBranch,
  Map,
  MessageSquare,
  PackageCheck,
  Radio,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Truck,
  Webhook,
  Workflow,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

type ProofPoint = {
  label: string;
  value: string;
};

type FeatureBlock = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type ComparisonRow = {
  label: string;
  fleetbase: string;
  onfleet: string;
};

export type OnfleetAlternativePage = {
  slug: string;
  eyebrow: string;
  title: string;
  gradient: string;
  description: string;
  metadata: Metadata;
  heroImage: string;
  heroImageAlt: string;
  proof: ProofPoint[];
  painHeading: string;
  painPoints: string[];
  featureHeading: string;
  featureSubheading: string;
  features: FeatureBlock[];
  comparison: ComparisonRow[];
  ctaHeading: string;
  ctaBody: string;
};

const COMMON_KEYWORDS = [
  'Onfleet alternative',
  'Fleetbase vs Onfleet',
  'open source Onfleet alternative',
  'delivery management software',
  'last mile delivery software',
  'cheaper Onfleet alternative',
];

const ONFLEET_PRICING_NOTE = 'Onfleet public pricing starts at $619/mo for 2,500 delivery or pickup tasks. Fleetbase cloud starts at $25/mo, with self-hosted implementation available from $2,500.';

export const ONFLEET_ALTERNATIVE_PAGES: OnfleetAlternativePage[] = [
  {
    slug: 'onfleet-route-optimization-alternative',
    eyebrow: 'Route Optimization Alternative',
    title: 'Optimize routes without paying Onfleet task-bundle pricing',
    gradient: 'from-emerald-500/15 via-cyan-500/10 to-background',
    description:
      'Onfleet gives teams route optimization. Fleetbase gives you route optimization inside an open logistics platform with dispatch, driver workflows, service areas, rates, and data ownership built in.',
    metadata: {
      title: 'Onfleet Route Optimization Alternative | Fleetbase',
      description:
        'Fleetbase is an open-source Onfleet route optimization alternative with route planning, dispatch, tracking, and lower starting-cost cloud or self-hosted deployment.',
      keywords: [...COMMON_KEYWORDS, 'Onfleet route optimization alternative', 'route optimization software alternative'],
      alternates: { canonical: 'https://fleetbase.io/compare/onfleet-route-optimization-alternative' },
      openGraph: {
        title: 'Onfleet Route Optimization Alternative | Fleetbase',
        description: 'Plan efficient routes, dispatch drivers, and own your logistics data with Fleetbase.',
      },
    },
    heroImage: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
    heroImageAlt: 'Fleetbase route optimization screen with delivery stops and route planning controls',
    proof: [
      { value: '$25/mo', label: 'Fleetbase cloud entry point' },
      { value: '$619/mo', label: 'Onfleet Launch starting price' },
      { value: '0', label: 'Per-task bundles on Fleetbase' },
      { value: 'Self-host', label: 'Own routing data and infrastructure' },
    ],
    painHeading: 'Route optimization should not force the rest of your operation into a closed box.',
    painPoints: [
      'Task bundles make cost forecasting harder as delivery volume changes.',
      'Route planning is separated from warehouse, storefront, service-rate, and accounting workflows.',
      'Cloud-only deployment limits data residency and infrastructure control.',
      'Custom routing logic depends on vendor roadmap and available plan features.',
    ],
    featureHeading: 'Routing that lives inside your logistics operating system',
    featureSubheading: 'Plan routes, dispatch orders, and adjust operational rules from the same platform.',
    features: [
      {
        icon: Route,
        title: 'Route planning plus execution',
        body: 'Build routes, assign drivers, and keep every order tied to the same operational record from intake through completion.',
      },
      {
        icon: Map,
        title: 'Service areas and rate logic',
        body: 'Use zones, boundaries, rates, and order configuration alongside routing so planning reflects how your business actually prices and operates.',
      },
      {
        icon: GitBranch,
        title: 'Extensible routing stack',
        body: 'Fleetbase can run in your cloud or on your infrastructure, letting technical teams connect custom optimization, map, and telematics services.',
      },
    ],
    comparison: [
      { label: 'Starting price', fleetbase: 'Cloud from $25/mo', onfleet: 'Launch from $619/mo' },
      { label: 'Pricing basis', fleetbase: 'Usage-based resource units', onfleet: 'Completed task bundles' },
      { label: 'Deployment', fleetbase: 'Cloud or self-hosted', onfleet: 'Cloud SaaS' },
      { label: 'Platform scope', fleetbase: 'Routing, dispatch, WMS, storefront, ledger', onfleet: 'Last-mile delivery workflows' },
    ],
    ctaHeading: 'Move route optimization into a platform you control',
    ctaBody: 'Replace task-bundle routing costs with Fleetbase routing, dispatch, tracking, and self-hosted optionality.',
  },
  {
    slug: 'onfleet-dispatch-alternative',
    eyebrow: 'Dispatch Alternative',
    title: 'Auto-dispatch without locking your delivery operation into Onfleet',
    gradient: 'from-blue-500/15 via-violet-500/10 to-background',
    description:
      'Onfleet offers auto-dispatch on higher plans. Fleetbase gives teams dispatch automation, manual override, real-time operations, and extensible workflows at a much lower starting cost.',
    metadata: {
      title: 'Onfleet Dispatch Alternative | Fleetbase',
      description:
        'Fleetbase is an open-source Onfleet dispatch alternative for auto-dispatch, driver assignment, live operations, and self-hosted delivery management.',
      keywords: [...COMMON_KEYWORDS, 'Onfleet dispatch alternative', 'auto dispatch software'],
      alternates: { canonical: 'https://fleetbase.io/compare/onfleet-dispatch-alternative' },
      openGraph: {
        title: 'Onfleet Dispatch Alternative | Fleetbase',
        description: 'Automate dispatch, keep manual control, and avoid expensive completed-task pricing.',
      },
    },
    heroImage: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
    heroImageAlt: 'Fleetbase Orchestrator assigning orders and drivers for dispatch',
    proof: [
      { value: 'Auto', label: 'Dispatch workflows' },
      { value: 'Manual', label: 'Dispatcher override' },
      { value: '$25/mo', label: 'Fleetbase cloud entry point' },
      { value: 'Open', label: 'Rules and extensions' },
    ],
    painHeading: 'Dispatch automation is only useful when your team can shape the rules.',
    painPoints: [
      'Auto-dispatch tied to higher plan tiers can raise costs before operations are ready.',
      'Closed assignment logic makes it harder to encode local rules, vehicle constraints, and service exceptions.',
      'Dispatchers still need a live operations view for exceptions, reassignment, and customer pressure.',
      'Growing teams often need connected fleet, driver, order, and maintenance records.',
    ],
    featureHeading: 'Dispatch automation with operator control',
    featureSubheading: 'Automate the routine work while keeping dispatchers in command of exceptions.',
    features: [
      {
        icon: Zap,
        title: 'Rules-based assignment',
        body: 'Use Fleetbase Orchestrator to assign jobs by location, capacity, route phase, and operational constraints.',
      },
      {
        icon: Workflow,
        title: 'Configurable order workflows',
        body: 'Model the dispatch lifecycle around your business with custom statuses, activities, proof requirements, and order configuration.',
      },
      {
        icon: Truck,
        title: 'Fleet-aware operations',
        body: 'Drivers, vehicles, devices, fleets, service areas, and schedules live together, so dispatch is connected to the real resources doing the work.',
      },
    ],
    comparison: [
      { label: 'Auto-dispatch', fleetbase: 'Built into Fleet-Ops workflows', onfleet: 'Scale plan and above' },
      { label: 'Human override', fleetbase: 'Native dispatcher control', onfleet: 'Dispatcher dashboard' },
      { label: 'Workflow customization', fleetbase: 'Open extension model', onfleet: 'Plan and product constraints' },
      { label: 'Starting price', fleetbase: 'Cloud from $25/mo', onfleet: 'Launch from $619/mo' },
    ],
    ctaHeading: 'Build dispatch automation around your operation',
    ctaBody: 'Give dispatchers automation, visibility, and control without waiting for enterprise plan economics.',
  },
  {
    slug: 'onfleet-tracking-notifications-alternative',
    eyebrow: 'Tracking and Notifications Alternative',
    title: 'Branded tracking and customer updates without Onfleet telephony surprises',
    gradient: 'from-sky-500/15 via-teal-500/10 to-background',
    description:
      'Onfleet centers customer visibility around tracking pages, SMS, ETAs, and proof. Fleetbase gives you live tracking, webhooks, notification settings, and customer portals that can live under your brand and infrastructure.',
    metadata: {
      title: 'Onfleet Tracking and Notifications Alternative | Fleetbase',
      description:
        'Fleetbase is an Onfleet tracking alternative with live order tracking, customer notifications, webhooks, branded portals, and cloud or self-hosted deployment.',
      keywords: [...COMMON_KEYWORDS, 'Onfleet tracking alternative', 'delivery tracking software', 'customer notification software'],
      alternates: { canonical: 'https://fleetbase.io/compare/onfleet-tracking-notifications-alternative' },
      openGraph: {
        title: 'Onfleet Tracking and Notifications Alternative | Fleetbase',
        description: 'Live tracking, branded customer updates, and webhook-driven delivery visibility.',
      },
    },
    heroImage: '/images/screenshots/fleet-ops/fleet-ops-order-tracking-page.webp',
    heroImageAlt: 'Fleetbase branded order tracking page with live delivery map',
    proof: [
      { value: 'Live', label: 'Order tracking pages' },
      { value: 'Webhook', label: 'Event-driven updates' },
      { value: 'Brand', label: 'Your customer experience' },
      { value: 'Own', label: 'Customer delivery data' },
    ],
    painHeading: 'Customer visibility should strengthen your brand, not just your vendor stack.',
    painPoints: [
      'SMS and voice usage can introduce extra telephony cost and operational dependency.',
      'Generic tracking experiences make the delivery moment feel less owned by your brand.',
      'Support teams need direct operational context, not just a tracking link.',
      'Developers need event streams and APIs to keep ecommerce, CRM, and customer portals in sync.',
    ],
    featureHeading: 'Every delivery update, under your brand',
    featureSubheading: 'Use live maps, notifications, webhooks, and portals as one connected customer experience.',
    features: [
      {
        icon: Radio,
        title: 'Live tracking from dispatch to completion',
        body: 'Show customers and operators the latest driver and order activity with real-time tracking views.',
      },
      {
        icon: Bell,
        title: 'Configurable notification channels',
        body: 'Control delivery notifications from Fleetbase settings and connect providers that match your region, cost, and compliance needs.',
      },
      {
        icon: MessageSquare,
        title: 'Customer and operator context',
        body: 'Keep communication, order details, tracking, and proof attached to the same delivery record for faster support responses.',
      },
    ],
    comparison: [
      { label: 'Tracking', fleetbase: 'Branded live tracking pages', onfleet: 'Live tracking page' },
      { label: 'Notifications', fleetbase: 'Configurable channels and webhooks', onfleet: 'Status and ETA SMS notifications' },
      { label: 'Telephony cost model', fleetbase: 'Bring or configure providers', onfleet: 'SMS/voice billed separately' },
      { label: 'Data control', fleetbase: 'Cloud or self-hosted ownership', onfleet: 'Vendor-hosted SaaS' },
    ],
    ctaHeading: 'Turn delivery tracking into a brand asset',
    ctaBody: 'Give customers live visibility while keeping notification logic, event data, and customer experience under your control.',
  },
  {
    slug: 'onfleet-driver-app-pod-alternative',
    eyebrow: 'Driver App and POD Alternative',
    title: 'A driver app and proof-of-delivery workflow you can actually own',
    gradient: 'from-rose-500/15 via-orange-500/10 to-background',
    description:
      'Onfleet has a highly rated driver app and proof of delivery. Fleetbase Navigator is open source, white-label friendly, and connected to Fleet-Ops, tracking, chat, issues, fuel reports, and custom order workflows.',
    metadata: {
      title: 'Onfleet Driver App and POD Alternative | Fleetbase Navigator',
      description:
        'Fleetbase Navigator is an open-source Onfleet driver app alternative with proof of delivery, live dispatch, chat, issue reporting, and white-label control.',
      keywords: [...COMMON_KEYWORDS, 'Onfleet driver app alternative', 'proof of delivery app', 'open source driver app'],
      alternates: { canonical: 'https://fleetbase.io/compare/onfleet-driver-app-pod-alternative' },
      openGraph: {
        title: 'Onfleet Driver App and POD Alternative | Fleetbase',
        description: 'Open-source driver workflows, POD capture, live dispatch, and white-label mobile control.',
      },
    },
    heroImage: '/images/screenshots/navigator-app/navigator-app-order-screen.webp',
    heroImageAlt: 'Fleetbase Navigator driver app showing an assigned delivery order',
    proof: [
      { value: 'Open', label: 'Navigator source model' },
      { value: 'POD', label: 'Photos, signatures, QR' },
      { value: 'Chat', label: 'Driver communication' },
      { value: 'White-label', label: 'Publish under your brand' },
    ],
    painHeading: 'The driver app is too important to be a black box.',
    painPoints: [
      'Closed mobile workflows make it harder to customize driver screens and field actions.',
      'Proof requirements vary by industry, customer, region, and order type.',
      'Driver communication, issues, and operational updates should sync directly to dispatch.',
      'White-label mobile control matters when delivery is part of your customer promise.',
    ],
    featureHeading: 'Driver execution built for ownership',
    featureSubheading: 'Fleetbase Navigator gives drivers the workbench they need while giving operators control of the workflow.',
    features: [
      {
        icon: Smartphone,
        title: 'Open-source Navigator app',
        body: 'Use Fleetbase Navigator as your driver app foundation and adapt it for your brand, market, and operational flow.',
      },
      {
        icon: PackageCheck,
        title: 'Configurable proof of delivery',
        body: 'Capture delivery proof such as signatures, photos, codes, comments, and workflow-specific completion requirements.',
      },
      {
        icon: ShieldCheck,
        title: 'Operational accountability',
        body: 'Keep driver activity, issues, chat, fuel reports, and order events connected to dispatch for a complete delivery record.',
      },
    ],
    comparison: [
      { label: 'Driver app', fleetbase: 'Open-source Navigator', onfleet: 'Proprietary driver app' },
      { label: 'Proof of delivery', fleetbase: 'Configurable workflow proof', onfleet: 'Photo and signature POD' },
      { label: 'Brand control', fleetbase: 'White-label publishing available', onfleet: 'Vendor app experience' },
      { label: 'Starting price', fleetbase: 'Cloud from $25/mo', onfleet: 'Launch from $619/mo' },
    ],
    ctaHeading: 'Put your driver workflow in your own hands',
    ctaBody: 'Use Fleetbase Navigator for delivery execution, proof capture, communication, and white-label driver operations.',
  },
  {
    slug: 'onfleet-api-platform-alternative',
    eyebrow: 'API and Platform Alternative',
    title: 'An Onfleet API alternative for teams that need the whole logistics stack',
    gradient: 'from-fuchsia-500/15 via-indigo-500/10 to-background',
    description:
      'Onfleet exposes API and webhook access for last-mile workflows. Fleetbase gives developers APIs, webhooks, real-time sockets, extensions, self-hosting, and bundled modules for orders, drivers, WMS, storefronts, and accounting.',
    metadata: {
      title: 'Onfleet API Alternative | Open-Source Logistics Platform',
      description:
        'Fleetbase is an open-source Onfleet API alternative with REST APIs, webhooks, real-time sockets, extensions, self-hosting, and a complete logistics platform.',
      keywords: [...COMMON_KEYWORDS, 'Onfleet API alternative', 'delivery API', 'logistics API', 'self hosted delivery management'],
      alternates: { canonical: 'https://fleetbase.io/compare/onfleet-api-platform-alternative' },
      openGraph: {
        title: 'Onfleet API Alternative | Fleetbase',
        description: 'REST APIs, webhooks, sockets, extensions, and self-hosted logistics infrastructure.',
      },
    },
    heroImage: '/images/screenshots/developers/developers-webhooks-management.webp',
    heroImageAlt: 'Fleetbase developer console showing webhook management for logistics events',
    proof: [
      { value: 'REST', label: 'Full API surface' },
      { value: 'Events', label: 'Webhooks and sockets' },
      { value: 'Extensions', label: 'Custom platform modules' },
      { value: 'Self-host', label: 'Infrastructure control' },
    ],
    painHeading: 'A delivery API is useful. A logistics platform API is a moat.',
    painPoints: [
      'Last-mile APIs often stop at tasks, drivers, tracking, and webhooks.',
      'Ops teams still need inventory, storefront, customer, accounting, and extension workflows around delivery.',
      'Vendor-hosted APIs limit infrastructure, data residency, and deep product customization.',
      'Engineering teams need local primitives they can extend, test, and ship against.',
    ],
    featureHeading: 'Developer-first logistics infrastructure',
    featureSubheading: 'Build delivery workflows on APIs, events, extensions, and modules designed to work together.',
    features: [
      {
        icon: Code2,
        title: 'APIs for the full order lifecycle',
        body: 'Create orders, dispatch them, track activity, capture proof, and connect downstream systems with documented APIs.',
      },
      {
        icon: Webhook,
        title: 'Webhooks and real-time sockets',
        body: 'Push order, dispatch, tracking, proof, and operational events into your apps without polling.',
      },
      {
        icon: Boxes,
        title: 'Modules beyond delivery tasks',
        body: 'Fleetbase includes Fleet-Ops, Navigator, Pallet, Storefront, Ledger, IAM, and extension points for teams building a complete logistics product.',
      },
    ],
    comparison: [
      { label: 'API scope', fleetbase: 'Orders, dispatch, tracking, modules', onfleet: 'Delivery tasks and last-mile workflows' },
      { label: 'Events', fleetbase: 'Webhooks and real-time sockets', onfleet: 'API and webhook access' },
      { label: 'Customization', fleetbase: 'Source, extensions, self-hosting', onfleet: 'Closed-source SaaS customization' },
      { label: 'Platform breadth', fleetbase: 'Fleet, WMS, storefront, ledger', onfleet: 'Last-mile delivery platform' },
    ],
    ctaHeading: 'Build on logistics infrastructure, not just a task API',
    ctaBody: 'Give your operators and developers one extensible platform for delivery, inventory, storefronts, accounting, and events.',
  },
];

export function getOnfleetAlternativePage(slug: string): OnfleetAlternativePage {
  const page = ONFLEET_ALTERNATIVE_PAGES.find((item) => item.slug === slug);
  if (!page) {
    throw new Error(`Unknown Onfleet alternative page: ${slug}`);
  }
  return page;
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Check className="size-3 text-primary" />
      </span>
      <span className="text-sm leading-relaxed text-muted-foreground">{children}</span>
    </li>
  );
}

export function OnfleetAlternativeLanding({ page }: { page: OnfleetAlternativePage }) {
  return (
    <div className="min-h-screen">
      <SoftwareApplicationSchema
        name="Onfleet"
        url="https://onfleet.com"
        description="Last-mile delivery management software for routing, dispatch, tracking, proof of delivery, customer notifications, APIs, and driver workflows."
      />

      <section className={`section-padding relative overflow-hidden border-b bg-gradient-to-b ${page.gradient}`}>
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <Breadcrumbs
              className="mb-6 justify-center [&_ol]:justify-center"
              items={[
                { label: 'Compare', href: '/compare' },
                { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet' },
                { label: page.eyebrow, href: `/compare/${page.slug}` },
              ]}
            />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="size-3 text-primary" />
              Onfleet alternative landing page
            </div>
            <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground text-balance">
              {page.description}
            </p>
            <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="https://console.fleetbase.io/onboard">
                  Start Free Trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  Talk to Sales
                </Link>
              </Button>
            </div>
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
              {ONFLEET_PRICING_NOTE}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1fr_340px]">
            <Image
              src={page.heroImage}
              alt={page.heroImageAlt}
              width={1100}
              height={700}
              priority
              unoptimized
              className="h-full w-full rounded-2xl border bg-card object-cover shadow-2xl"
            />
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border lg:grid-cols-1">
              {page.proof.map((item) => (
                <div key={item.label} className="bg-card p-6">
                  <div className="text-3xl font-bold tracking-tight">{item.value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b bg-muted/20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-destructive">Why teams look beyond Onfleet</p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">{page.painHeading}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.painPoints.map((point) => (
              <div key={point} className="rounded-xl border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{page.featureHeading}</h2>
            <p className="text-lg text-muted-foreground">{page.featureSubheading}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.features.map((feature) => (
              <div key={feature.title} className="rounded-xl border bg-card p-6">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border bg-background">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y bg-muted/20">
        <div className="container max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Cost and control comparison</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Fleetbase gives you more room to scale</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border bg-card">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b bg-muted/40 text-sm font-semibold">
              <div className="px-4 py-3">Decision point</div>
              <div className="px-4 py-3 text-primary">Fleetbase</div>
              <div className="px-4 py-3 text-muted-foreground">Onfleet</div>
            </div>
            {page.comparison.map((row) => (
              <div key={row.label} className="grid grid-cols-[1.1fr_1fr_1fr] border-b last:border-b-0 text-sm">
                <div className="px-4 py-4 font-medium">{row.label}</div>
                <div className="px-4 py-4 text-muted-foreground">{row.fleetbase}</div>
                <div className="px-4 py-4 text-muted-foreground">{row.onfleet}</div>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <CheckItem>No per-task delivery bundles</CheckItem>
            <CheckItem>Cloud or self-hosted deployment</CheckItem>
            <CheckItem>Open-source platform foundation</CheckItem>
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative">
              <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-xl border bg-background">
                <Compass className="size-6 text-primary" />
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">{page.ctaHeading}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{page.ctaBody}</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://console.fleetbase.io/onboard">
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/compare/vs-onfleet">See Full Onfleet Comparison</Link>
                </Button>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">7-day free trial. Open-source. Self-hosted or cloud.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
