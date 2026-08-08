import './fleet-ops.css';

import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  FileText,
  GitBranch,
  Github,
  MapPin,
  Minus,
  Package,
  Radio,
  Route,
  Signal,
  Sparkles,
  Truck,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { DarkCodePanel } from './components/dark-code-panel';
import { LayerStack } from './components/layer-stack';
import { SpineProgress } from './components/spine-progress';
import { Spine, SpineBeat } from './components/spine-section';

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '8,000+', label: 'Active instances' },
  { value: '10M+', label: 'Orders dispatched' },
  { value: '50K+', label: 'Vehicles tracked' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const telematicsLogos = [
  { src: '/images/integrations/samsara.svg', alt: 'Samsara' },
  { src: '/images/integrations/geotab.svg', alt: 'Geotab' },
  { src: '/images/integrations/flespi.svg', alt: 'Flespi' },
  { src: '/images/integrations/osrm.svg', alt: 'OSRM' },
  { src: '/images/integrations/valhalla.svg', alt: 'Valhalla' },
];

const useCases = [
  { icon: Truck, title: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery' },
  { icon: Package, title: 'Courier Services', href: '/solutions/courier-services' },
  { icon: Clock, title: 'Food Delivery', href: '/solutions/food-delivery' },
  { icon: Wrench, title: 'Fleet Management', href: '/solutions/use-cases/fleet-management' },
  { icon: Route, title: 'Trucking & Freight', href: '/solutions/trucking' },
  { icon: MapPin, title: 'E-Commerce', href: '/solutions/ecommerce' },
  { icon: FileText, title: 'Healthcare Logistics', href: '/solutions/healthcare' },
  { icon: BarChart3, title: 'Route Optimization', href: '/solutions/use-cases/route-optimization' },
];

const faqs = [
  {
    q: 'How does the Orchestrator Workbench work?',
    a: 'Phase-based optimization pipeline. Each phase targets one optimization — driver-to-order allocation by skills and availability, vehicle-to-order matching by payload, or route optimization. Phases stack and run in sequence. Output is a visual plan a dispatcher reviews and commits, or you can configure phases in Settings to run automatically on every incoming order.',
  },
  {
    q: 'Can I customize order types and workflows?',
    a: 'Yes. Fleet-Ops supports fully configurable order types with custom fields, custom activity flows, and custom statuses. You can build workflows that match your exact operational processes without writing any code.',
  },
  {
    q: 'Does Fleet-Ops include a mobile app for drivers?',
    a: 'Yes. The Navigator app (iOS and Android) is an open-source mobile app built for Fleet-Ops. Drivers receive dispatched orders, navigate to stops, capture proof of delivery, and report vehicle faults from the app.',
  },
  {
    q: 'How does Fleet-Ops pricing work?',
    a: 'One plan: $29 a month, plus $5 a month for each driver and vehicle you operate. Orders and deliveries are free at any volume, and back-office users are unlimited. Every module is included from day one — there are no tiers to choose between.',
    link: { label: 'See pricing', href: '/pricing' },
  },
  {
    q: 'Is Fleet-Ops open source?',
    a: 'Yes. Fully open-source under AGPL-3.0 at github.com/fleetbase/fleetops. Self-host, inspect the code, contribute, or build extensions.',
  },
  {
    q: 'Can I integrate with my existing systems?',
    a: 'Yes. Full REST API, WebSocket events, and webhooks. Integrate with ERPs, WMS, e-commerce, accounting, and anything else via the API or pre-built integrations.',
  },
  {
    q: 'How does real-time tracking work?',
    a: 'Drivers share location via the Navigator app. Dispatchers see live positions on the map; customers get a tracking link with live ETA. Geofences trigger automatic status updates when drivers arrive or depart.',
  },
];

// ── Small components ─────────────────────────────────────────────────────────

/**
 * Big feature card (hero of each spine beat). Brand-blue gradient bg, label
 * + title at top, screenshot inset bottom with a small bezel. Uniform
 * rounded-3xl corners.
 */
function FeatureHeroCard({
  label,
  title,
  image,
  imageAlt,
  className,
}: {
  label: string;
  title: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div
      className={`fo-card relative grid grid-rows-[auto_1fr] gap-y-6 overflow-hidden border border-[var(--fo-border)] bg-gradient-to-br from-white to-[var(--fo-blue-soft)] p-6 lg:p-8 ${className ?? ''}`}
    >
      <div className="relative z-10 w-full space-y-2 sm:max-w-[80%]">
        <p className="text-sm font-semibold tracking-[0.2px] text-[var(--fo-blue)]">{label}</p>
        <p className="text-base font-[550] leading-[22px] tracking-[0.2px] text-[var(--fo-fg-strong)] lg:text-[20px] lg:leading-[27px] lg:tracking-[0.14px]">
          {title}
        </p>
      </div>
      <div className="relative w-full">
        <div className="overflow-hidden rounded-2xl border border-[var(--fo-border)] bg-white shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.10)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-left-top"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Smaller feature card — solid white, icon + label + title + description.
 * No image. Compact height; content drives card size, no empty space.
 */
function FeatureCard({
  icon: Icon,
  label,
  title,
  description,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`fo-card relative flex flex-col gap-4 overflow-hidden border border-[var(--fo-border)] bg-white p-6 lg:p-7 ${className ?? ''}`}
    >
      <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--fo-blue-tint)]">
        <Icon className="size-5 text-[var(--fo-blue)]" />
      </div>
      <div className="space-y-1.5">
        <p className="text-sm font-semibold tracking-[0.2px] text-[var(--fo-blue)]">{label}</p>
        <h3 className="text-[20px] font-[600] leading-[26px] tracking-[-0.1px] text-[var(--fo-fg-strong)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--fo-fg-muted)]">{description}</p>
      </div>
    </div>
  );
}

// ── Comparison section ──────────────────────────────────────────────────────

/**
 * Comparison cell value:
 *   true   → brand-blue check
 *   false  → muted minus
 *   string → titleized qualifier text (e.g. "Partial", "Enterprise")
 */
type CmpVal = boolean | string;

type CmpRow = {
  feature: string;
  /** Optional info shown on hover via tooltip (no parenthetical in the row). */
  info?: string;
  values: readonly [CmpVal, CmpVal, CmpVal, CmpVal, CmpVal, CmpVal];
};

type CmpSection = {
  label: string;
  rows: readonly CmpRow[];
};

const COMPETITOR_NAMES = ['Fleet-Ops', 'Onfleet', 'Bringg', 'Spoke', 'Tookan', 'Detrack'] as const;

const comparisonSections: readonly CmpSection[] = [
  {
    label: 'Core dispatch & tracking',
    rows: [
      { feature: 'Live GPS tracking', values: [true, true, true, true, true, true] },
      { feature: 'Customer tracking links', values: [true, true, true, true, true, true] },
      { feature: 'Driver mobile app', values: [true, true, true, true, true, true] },
      { feature: 'Multi-stop route optimization', values: [true, true, true, true, true, false] },
      { feature: 'Proof of delivery', values: [true, true, true, true, true, true] },
      { feature: 'REST API + Webhooks', values: [true, true, true, true, true, true] },
    ],
  },
  {
    label: 'Advanced operations',
    rows: [
      {
        feature: 'Phase-based orchestration',
        values: [true, false, 'Partial', false, false, false],
      },
      {
        feature: 'WebSocket / live event streams',
        values: [true, false, false, false, false, false],
      },
      {
        feature: 'Native telematics integrations',
        info: 'Samsara · Geotab · Flespi out of the box.',
        values: [true, false, 'Partial', false, false, 'Partial'],
      },
      {
        feature: 'Configurable order types & activity flows',
        values: [true, 'Partial', true, 'Partial', 'Partial', false],
      },
      {
        feature: 'Integrated maintenance module',
        values: [true, false, false, false, false, false],
      },
    ],
  },
  {
    label: 'Platform & ownership',
    rows: [
      {
        feature: 'Open source',
        info: 'Fleet-Ops is licensed under AGPL-3.0.',
        values: [true, false, false, false, false, false],
      },
      {
        feature: 'Self-host option',
        values: [true, false, 'Enterprise on-prem', false, false, false],
      },
      {
        feature: 'White-label option',
        values: [true, 'Enterprise', 'Enterprise', false, 'Add-on', false],
      },
      {
        feature: 'Extensible',
        info: 'First-class extension SDK + marketplace, not just an API surface.',
        values: [true, 'API only', 'Partial', 'API + integrations', 'API only', 'API only'],
      },
    ],
  },
  {
    label: 'Pricing',
    rows: [
      {
        feature: 'Pricing model',
        values: ['$29/mo + $5 per driver or vehicle', 'Per-driver', 'Per-driver', 'Per-driver', 'Per-driver', 'Per-vehicle'],
      },
    ],
  },
] as const;

function CmpCell({ v }: { v: CmpVal }) {
  if (v === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--fo-blue)] text-white">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (v === false) {
    return <Minus className="mx-auto size-4 text-[var(--fo-fg-soft)]" />;
  }
  return (
    <span className="text-[12px] font-[500] text-[var(--fo-fg-muted)]">{v}</span>
  );
}

function FeatureLabel({ feature, info }: { feature: string; info?: string }) {
  if (!info) {
    return <span>{feature}</span>;
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      {feature}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={`More info about ${feature}`}
            className="inline-flex size-4 items-center justify-center rounded-full border border-[var(--fo-border)] text-[10px] font-medium text-[var(--fo-fg-soft)] transition-colors hover:border-[var(--fo-blue)] hover:text-[var(--fo-blue)]"
          >
            i
          </button>
        </TooltipTrigger>
        {/*
         * Don't override bg/text here — TooltipContent renders inside a Radix
         * Portal at document.body, where the .fleet-ops-page CSS variables
         * aren't in scope. Use the component's default bg-primary, which is
         * the global Fleetbase blue + white text.
         */}
        <TooltipContent side="top" className="max-w-[240px]">
          {info}
        </TooltipContent>
      </Tooltip>
    </span>
  );
}

function ComparisonSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
            Compare
          </span>
          <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
            How Fleet-Ops compares.
          </h2>
          <p className="mt-6 text-[18px] font-[460] leading-[25px] tracking-[0.15px] text-[var(--fo-fg-muted)] lg:max-w-2xl lg:text-[22px] lg:leading-[29px] lg:tracking-[0.12px]">
            Most last-mile and dispatch platforms run as proprietary SaaS that bills you per
            task or per delivery. Fleet-Ops takes a different approach — open-source,
            self-hostable, and never priced per order. Here&apos;s how we line up on the
            features that actually matter.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[var(--fo-border)] bg-white">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="border-b border-[var(--fo-border)]">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-white px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-fg-soft)]"
                >
                  Capability
                </th>
                {COMPETITOR_NAMES.map((name, i) => (
                  <th
                    key={name}
                    scope="col"
                    className={cn(
                      'px-4 py-5 text-center text-[13px] tracking-tight',
                      i === 0
                        ? 'font-[680] text-[var(--fo-blue)]'
                        : 'font-[600] text-[var(--fo-fg-muted)]',
                    )}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisonSections.map((section) => (
                <Fragment key={section.label}>
                  <tr className="bg-[var(--fo-bg-2)]">
                    <th
                      scope="colgroup"
                      colSpan={1 + COMPETITOR_NAMES.length}
                      className="sticky left-0 z-10 bg-[var(--fo-bg-2)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.8px] text-[var(--fo-fg-muted)]"
                    >
                      {section.label}
                    </th>
                  </tr>
                  {section.rows.map((row, ri) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        'border-t border-[var(--fo-border)]',
                        ri % 2 === 1 ? 'bg-[var(--fo-bg-2)]/30' : '',
                      )}
                    >
                      <th
                        scope="row"
                        className={cn(
                          'sticky left-0 z-10 px-5 py-4 font-[550] text-[var(--fo-fg-strong)]',
                          ri % 2 === 1 ? 'bg-[var(--fo-bg-2)]' : 'bg-white',
                        )}
                      >
                        <FeatureLabel feature={row.feature} info={row.info} />
                      </th>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-4 py-4 text-center">
                          <CmpCell v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[12px] text-[var(--fo-fg-soft)]">
          Comparison reflects publicly documented features at time of writing. Competitor
          information sourced from each vendor&apos;s public documentation and pricing pages.
          Trademarks belong to their respective owners.
        </p>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function FleetOpsPageContent() {
  return (
    <div className="fleet-ops-page flex flex-col">

      {/* ── Hero (brand blue) ─────────────────────────────────────────────── */}
      <section className="fo-hero relative w-full overflow-hidden">
        <div className="container grid grid-cols-4 items-center gap-x-4 gap-y-12 py-20 sm:grid-cols-12 sm:gap-x-6 lg:gap-y-16 lg:py-28 xl:py-32">
          {/* Left column — copy */}
          <div className="col-span-full row-start-1 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span className="fo-pulse-dot" />
              <span className="uppercase tracking-[0.7px] text-[10px]">
                Fleet-Ops · Flagship Open-Source TMS
              </span>
            </div>
            <h1 className="mt-6 text-center text-[40px] font-[680] leading-[44px] tracking-[-0.6px] text-balance text-white lg:text-left lg:text-[60px] lg:leading-[64px] lg:tracking-[-1px] xl:text-[68px] xl:leading-[70px] xl:tracking-[-1.2px]">
              Fleet management, dispatch, and transport — one operations module.
            </h1>
            <p className="mt-5 text-center text-[18px] font-[460] leading-[26px] tracking-[0.15px] text-white/85 lg:mt-7 lg:text-left lg:text-[21px] lg:leading-[30px] lg:tracking-[0.12px]">
              Route planning. Live tracking. Vehicle allocation. Maintenance scheduling.
              Dynamic workflows. All in one platform you can self-host, extend, and own.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start lg:mt-10">
              <Button
                asChild
                size="lg"
                className="h-[52px] bg-white px-6 text-base font-[600] text-[var(--fo-blue-dark)] hover:bg-white/90"
              >
                <Link href="/pricing">
                  Start free trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[52px] border-white/40 bg-white/5 px-6 text-base font-[600] text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                <a
                  href="https://cal.com/shivthakker/enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
                </a>
              </Button>
            </div>
            <p className="mt-5 text-center text-[13px] font-[460] tracking-[0.25px] text-white/70 lg:text-left">
              7-day free trial · Never a per-delivery fee · Self-host under AGPL-3.0
            </p>
          </div>

          {/* Right column — product screenshot.
              On lg+, the image deliberately exceeds its grid column width so it
              extends past the container's right gutter and gets clipped by the
              section's overflow-hidden at the viewport edge. The result is a
              hero screenshot that visually bleeds off the right side of the
              screen. */}
          <div className="col-span-full sm:col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="relative mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none lg:w-[150%] xl:w-[170%]">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                    alt="Fleet-Ops live operations dashboard showing real-time fleet map with driver positions, active orders, and route overlays"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-left-top"
                    sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 920px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <section className="relative border-b border-[var(--fo-border)] bg-white">
        <div className="container py-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4 md:gap-x-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2.5">
                <span className="text-xl font-[680] tracking-tight text-[var(--fo-fg-strong)] md:text-2xl">
                  {s.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.6px] text-[var(--fo-fg-soft)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is Fleet-Ops? — 5 core modules layered stack ─────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container">
          <div className="mb-14 max-w-3xl">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
              What is Fleet-Ops?
            </span>
            <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
              Five core modules. One open platform.
            </h2>
            <p className="mt-6 text-[18px] font-[460] leading-[25px] tracking-[0.15px] text-[var(--fo-fg-muted)] lg:max-w-2xl lg:text-[22px] lg:leading-[29px] lg:tracking-[0.12px]">
              Fleet-Ops is organized into five purpose-built modules — each covering a distinct
              domain of fleet operations. Use them all from day one, or expand into new modules
              as your operation grows. Click a module to explore.
            </p>
          </div>
          <LayerStack />
        </div>
      </section>

      {/* ── Spine: Configure → Plan & Dispatch → Track → Maintenance → Optimize ── */}
      <section className="relative bg-[var(--fo-bg-2)] py-24 lg:py-32">
        <SpineProgress
          beats={[
            { id: 'beat-configure', label: 'Configure' },
            { id: 'beat-plan-dispatch', label: 'Plan & Dispatch' },
            { id: 'beat-track', label: 'Track' },
            { id: 'beat-maintenance', label: 'Maintenance' },
            { id: 'beat-optimize', label: 'Optimize & Allocate' },
          ]}
        />
        <div className="container">
          <div className="mb-16 max-w-3xl lg:mb-20">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
              How it works
            </span>
            <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
              From the first order in to the last vehicle service log.
            </h2>
          </div>

          <Spine>
            {/* Configure — order config, activity flows, custom fields */}
            <SpineBeat
              id="beat-configure"
              label="01 · Configure"
              title="Build any workflow — without writing code."
              description="Custom order types, drag-and-drop activity flows, business rules, and the exact data fields your operation needs. Adapt the software to your operation, not the other way around."
              cta={{ label: 'More on configuration', href: '/docs/fleet-ops/operations/order-configurations/overview' }}
            >
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                <FeatureHeroCard
                  label="Order configuration"
                  title="Design custom order types with configurable fields, drag-and-drop activity flows, and business rules — in one place."
                  image="/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp"
                  imageAlt="Fleet-Ops order configuration showing the visual activity flow designer with custom statuses and automation triggers"
                  className="col-span-full sm:col-span-12 lg:col-span-8"
                />
                <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-12 sm:grid-cols-2 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
                  <FeatureCard
                    icon={Workflow}
                    label="Activity flows"
                    title="Drag-and-drop designer"
                    description="Sketch the exact lifecycle each order should follow — statuses, automation triggers, and validation rules."
                  />
                  <FeatureCard
                    icon={Sparkles}
                    label="Custom fields"
                    title="Any data type, anywhere"
                    description="Text, select, file, signature, photo, barcode. Attach to orders, vehicles, drivers, or places."
                  />
                </div>
              </div>
            </SpineBeat>

            {/* Plan & Dispatch — operations, scheduling */}
            <SpineBeat
              id="beat-plan-dispatch"
              label="02 · Plan & Dispatch"
              title="A live operations queue every dispatcher can run from."
              description="Kanban, table, or live-map views of every active order. Schedule deliveries ahead of time, plan capacity by zone or driver, and send dispatches to the Navigator app in seconds."
              cta={{ label: 'More on operations', href: '/docs/fleet-ops/operations/overview' }}
            >
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                <FeatureHeroCard
                  label="Live order queue"
                  title="Switch between kanban, table, and live-map. Filter by status, driver, zone, or any custom field — act on what needs attention."
                  image="/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp"
                  imageAlt="Fleet-Ops live order queue showing the kanban view with orders organised by status and driver assignment"
                  className="col-span-full sm:col-span-12 lg:col-span-8"
                />
                <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-12 sm:grid-cols-2 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
                  <FeatureCard
                    icon={Calendar}
                    label="Scheduler"
                    title="Plan ahead, dispatch later"
                    description="Queue orders by date, assign time windows, give dispatchers an ahead-of-time visual plan to work from."
                  />
                  <FeatureCard
                    icon={Route}
                    label="Service rates"
                    title="Pricing that matches your business"
                    description="Distance, weight, zone, vehicle type — any combination. Attached to order types, calculated at dispatch."
                  />
                </div>
              </div>
            </SpineBeat>

            {/* Track — connectivity, live tracking, telematics */}
            <SpineBeat
              id="beat-track"
              label="03 · Track"
              title="Every driver, vehicle, and order — on one live map."
              description="Sub-minute GPS via the Navigator app. Geofence-triggered automatic status updates. Branded customer tracking links with live ETA. Telematics providers connected out of the box."
              cta={{ label: 'More on tracking', href: '/docs/fleet-ops/connectivity/overview' }}
            >
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                <FeatureHeroCard
                  label="Live tracking & geofences"
                  title="Real-time vehicle positions, journey replay, and geofence-triggered automation. No phone calls required."
                  image="/images/screenshots/fleet-ops/fleet-ops-geofences.webp"
                  imageAlt="Fleet-Ops live map showing geofences drawn around pickup and dropoff zones for automatic status updates"
                  className="col-span-full sm:col-span-12 lg:col-span-8"
                />
                <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-12 sm:grid-cols-2 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
                  <FeatureCard
                    icon={Radio}
                    label="Telematics integrations"
                    title="Samsara · Geotab · Flespi"
                    description="Connected providers stream live vehicle data straight into Fleet-Ops. No middleware, no glue code."
                  />
                  <FeatureCard
                    icon={MapPin}
                    label="Customer tracking"
                    title="Branded live-ETA links"
                    description="Customers see real-time driver position and a live ETA. Custom branding, no third-party app."
                  />
                </div>
              </div>
            </SpineBeat>

            {/* Maintenance */}
            <SpineBeat
              id="beat-maintenance"
              label="04 · Maintenance"
              title="Keep every vehicle roadworthy."
              description="Work orders from open to resolved, preventive schedules by mileage or engine hours, parts inventory linked to jobs, and driver fault reporting from the Navigator app — all on the same fleet data as dispatch."
              cta={{ label: 'More on maintenance', href: '/docs/fleet-ops/maintenance/overview' }}
            >
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                <FeatureHeroCard
                  label="Preventive schedules"
                  title="Service intervals by mileage, engine hours, or calendar date. Alerts fire before vehicles go overdue."
                  image="/images/screenshots/fleet-ops/fleet-ops-maintenance-schedules.webp"
                  imageAlt="Fleet-Ops preventive maintenance schedules showing service intervals by mileage, engine hours, and calendar date"
                  className="col-span-full sm:col-span-12 lg:col-span-8"
                />
                <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-12 sm:grid-cols-2 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
                  <FeatureCard
                    icon={Wrench}
                    label="Work orders"
                    title="From open to resolved"
                    description="Track every job. Attach parts, labor, costs. Surface high-cost assets that need attention."
                  />
                  <FeatureCard
                    icon={Package}
                    label="Parts inventory"
                    title="Stock linked to work orders"
                    description="Track stock levels, link parts consumption to specific jobs. Compliance, resale, insurance-ready audit trail."
                  />
                </div>
              </div>
            </SpineBeat>

            {/* Optimization & Allocation — Orchestrator Workbench (flagship at the end) */}
            <SpineBeat
              id="beat-optimize"
              label="05 · Optimize & Allocate"
              title="The Orchestrator Workbench."
              description="Phase-based optimization. Stack driver allocation, vehicle matching, and route optimization into a reviewable pipeline — or run it hands-free on every incoming order. This is what makes Fleet-Ops different from every other TMS."
              cta={{ label: 'More on the orchestrator', href: '/docs/fleet-ops/operations/orchestrator/overview' }}
            >
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6">
                <FeatureHeroCard
                  label="Orchestrator Workbench"
                  title="Stack optimization phases — driver allocation by skills, vehicle matching by payload, and route optimization — into a pipeline that produces a visual plan for review."
                  image="/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp"
                  imageAlt="Fleet-Ops Orchestrator Workbench showing stacked optimization phases and a visual plan ready for dispatcher review"
                  className="col-span-full sm:col-span-12 lg:col-span-8"
                />
                <div className="col-span-full grid grid-cols-1 gap-4 sm:col-span-12 sm:grid-cols-2 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
                  <FeatureCard
                    icon={GitBranch}
                    label="Hands-free mode"
                    title="Automate the entire pipeline"
                    description="Configure phases once in Settings. Every incoming order runs through them automatically — no dispatcher needed."
                  />
                  <FeatureCard
                    icon={BarChart3}
                    label="Analytics that loops back"
                    title="Reports inform the next plan"
                    description="On-time rate, route efficiency, driver scorecards. Surface inefficiencies before they become problems."
                  />
                </div>
              </div>
            </SpineBeat>
          </Spine>
        </div>
      </section>

      {/* ── Telematics integrations strip ───────────────────────────────────── */}
      <section className="relative border-y border-[var(--fo-border)] bg-white py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-fg-soft)]">
              Native integrations · out of the box
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {telematicsLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="relative h-8 w-32 opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Automate: API + Webhooks + Sockets ────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container">
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
              <Zap className="size-4" /> Automate
            </span>
            <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
              Build and automate with Fleet-Ops.
            </h2>
            <p className="mt-6 text-[18px] font-[460] leading-[25px] tracking-[0.15px] text-[var(--fo-fg-muted)] lg:max-w-2xl lg:text-[22px] lg:leading-[29px] lg:tracking-[0.12px]">
              Every order, driver, and event in Fleet-Ops is reachable via REST. Webhooks fire
              on every state change. WebSocket channels stream live updates straight into your
              own product. Wire Fleet-Ops into the stack you already run.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <DarkCodePanel
              label="Fleet-Ops API · Dispatch an order"
              language="javascript"
              code={`import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('YOUR_API_KEY');

// Create and auto-dispatch an order
const order = await fleetbase.orders.create({
  payload: {
    pickup: '123 Warehouse Rd, Sydney',
    dropoff: '456 Customer St, Melbourne',
    scheduled_at: new Date(),
  },
  dispatch: true,
});

console.log(\`Order: \${order.id}\`);
console.log(\`Driver: \${order.driver.name}\`);
console.log(\`ETA: \${order.eta}\`);`}
            />

            {/* Three feature tiles (REST, Webhooks, Sockets) */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard
                icon={Signal}
                label="REST API"
                title="Full CRUD over the platform"
                description="Every resource — orders, drivers, vehicles, places, fleets — addressable via REST. Comprehensive docs and a first-class JavaScript SDK."
              />
              <FeatureCard
                icon={Webhook}
                label="Webhooks"
                title="Events delivered to your endpoints"
                description="Subscribe to order, driver, vehicle, and fleet events. Signed payloads, retries, dead-letter queue, and a live test console."
              />
              <FeatureCard
                icon={Activity}
                label="WebSockets"
                title="Real-time streams into your product"
                description="SocketCluster channels stream live positions and order state changes. Embed real-time tracking into your own UI, no polling required."
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              className="h-[48px] bg-[var(--fo-blue)] px-5 text-base font-[600] text-white hover:bg-[var(--fo-blue-bright)]"
            >
              <Link href="/docs/api">
                API Reference <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[48px] border-[var(--fo-border)] bg-white px-5 text-base font-[600] text-[var(--fo-fg-strong)] hover:bg-[var(--fo-surface-2)]"
            >
              <Link href="/docs/fleet-ops">Read the Fleet-Ops docs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[48px] border-[var(--fo-border)] bg-white px-5 text-base font-[600] text-[var(--fo-fg-strong)] hover:bg-[var(--fo-surface-2)]"
            >
              <a
                href="https://github.com/fleetbase/fleetops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Compare ───────────────────────────────────────────────────────── */}
      <ComparisonSection />


      {/* ── Industries ────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--fo-bg-2)] py-24 lg:py-32">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
              Industries
            </span>
            <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
              Built for every fleet operation.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <Link
                  key={u.title}
                  href={u.href}
                  className="fo-card group flex items-center gap-3 border border-[var(--fo-border)] bg-white p-5 transition-colors hover:border-[var(--fo-blue)]/40 hover:bg-[var(--fo-blue-tint)]/40"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--fo-blue-tint)] transition-colors group-hover:bg-[var(--fo-blue)] group-hover:text-white">
                    <Icon className="size-4 text-[var(--fo-blue)] transition-colors group-hover:text-white" />
                  </div>
                  <span className="text-sm font-[550] text-[var(--fo-fg-strong)]">{u.title}</span>
                  <ChevronRight className="ml-auto size-4 text-[var(--fo-fg-soft)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--fo-blue)]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <span className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
                FAQ
              </span>
              <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="fo-card border border-[var(--fo-border)] bg-white px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-[var(--fo-fg-strong)] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-[var(--fo-fg-muted)]">
                    {faq.a}
                    {'link' in faq && faq.link ? (
                      <>
                        {' '}
                        <Link
                          href={faq.link.href}
                          className="inline-flex items-center gap-1 font-medium text-[var(--fo-blue)] hover:underline"
                        >
                          {faq.link.label}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </>
                    ) : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA (brand-blue) ──────────────────────────────────────── */}
      <section className="fo-cta relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span className="fo-pulse-dot" />
              Start today · 7-day free trial
            </div>
            <h2 className="mt-6 text-[40px] font-[680] leading-[44px] tracking-[-0.6px] text-balance text-white lg:text-[60px] lg:leading-[64px] lg:tracking-[-1px] xl:text-[66px] xl:leading-[68px] xl:tracking-[-1.2px]">
              Stop paying per driver. Start owning your stack.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] font-[460] leading-[25px] tracking-[0.15px] text-white/85 lg:text-[22px] lg:leading-[29px] lg:tracking-[0.12px]">
              Join 8,000+ logistics operations running on Fleetbase. Open source, no per-seat
              fees, free to self-host.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-[52px] bg-white px-6 text-base font-[600] text-[var(--fo-blue-dark)] hover:bg-white/90"
              >
                <Link href="/pricing">
                  Start free trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[52px] border-white/40 bg-white/10 px-6 text-base font-[600] text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <a
                  href="https://cal.com/shivthakker/enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
                </a>
              </Button>
            </div>
            <p className="mt-8 text-xs text-white/70">
              Free 7-day trial · Free to self-host under AGPL-3.0
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
