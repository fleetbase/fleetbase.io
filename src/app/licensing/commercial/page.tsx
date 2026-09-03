import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Check,
  Clock,
  Code2,
  FileCheck,
  Headphones,
  Layers,
  Lock,
  Network,
  Package,
  Phone,
  RefreshCw,
  Scale,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Commercial License',
  description:
    'The Fleetbase Commercial License removes AGPL-3.0 copyleft so you can ship proprietary modifications, SaaS products and white-label deployments.',
  keywords: [
    'fleetbase commercial license',
    'AGPL commercial alternative',
    'logistics platform commercial license',
    'fleetbase OEM license',
    'fleetbase white label license',
    'open core commercial logistics',
  ],
  alternates: { canonical: 'https://fleetbase.io/licensing/commercial' },
  openGraph: {
    title: 'Commercial License | Fleetbase',
    description:
      'Build proprietary modifications, ship SaaS, white-label Fleetbase. The Commercial License removes AGPL obligations entirely.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Commercial License | Fleetbase`,
    description: `Build proprietary modifications, ship SaaS, white-label Fleetbase. The Commercial License removes AGPL obligations entirely.`,
  },
};

const includes = [
  {
    icon: Lock,
    title: 'Proprietary modifications',
    description:
      'Build customisations, integrations, and bespoke features without any obligation to release the source. Your IP stays your IP.',
  },
  {
    icon: Network,
    title: 'SaaS distribution rights',
    description:
      'Deploy modified versions of Fleetbase as a service to your customers — without triggering AGPL\'s network copyleft clause.',
  },
  {
    icon: Layers,
    title: 'White-label & OEM rights',
    description:
      'Rebrand and resell Fleetbase as your own product. Ship to enterprise customers under your name, your contracts, your terms.',
  },
  {
    icon: Headphones,
    title: 'Business Support included',
    description:
      'Annual licences include direct access to our engineering team for production support, with documented response SLAs.',
  },
  {
    icon: RefreshCw,
    title: 'All upgrades during term',
    description:
      'Annual and monthly licences cover every release during your active term — security patches, new features, and major versions.',
  },
  {
    icon: ShieldCheck,
    title: 'IP indemnification',
    description:
      'We stand behind the platform. Commercial licensees receive contractual indemnification against IP claims arising from the core platform.',
  },
];

const useCases = [
  {
    icon: Server,
    title: 'SaaS providers',
    description:
      'Building a logistics SaaS product on top of Fleetbase. You deploy a modified version to multiple customers and need to keep your modifications confidential.',
  },
  {
    icon: Package,
    title: 'OEM & white-label',
    description:
      'Embedding Fleetbase under your own brand for distribution to your customers. You need full sub-licensing and rebranding rights.',
  },
  {
    icon: Building2,
    title: 'Enterprises with proprietary IP',
    description:
      'Internal-use deployments with proprietary integrations or workflows that include trade-secret business logic you can\'t open-source.',
  },
  {
    icon: Briefcase,
    title: 'Managed service providers',
    description:
      'Running Fleetbase on behalf of multiple client tenants with custom modifications, integrations, or vertical extensions per client.',
  },
];

const tiers = [
  {
    name: 'Annual License',
    price: '$25,000',
    cadence: 'per year',
    flexibility: 'Annual renewal',
    support: 'Includes Business Support + all upgrades',
    coverage: 'All versions during active term',
    note: 'Best value for continuous updates and ongoing support.',
    highlight: true,
    badge: 'Best Value',
  },
  {
    name: 'Monthly License',
    price: '$2,500',
    cadence: 'per month',
    flexibility: 'Flexible month-to-month',
    support: 'Same as Annual',
    coverage: 'All versions during active term',
    note: 'Ideal for pilots, evaluations, or short-term deployments.',
    highlight: false,
  },
  {
    name: 'Major Version Perpetual',
    price: '$25,000',
    cadence: 'one-time',
    flexibility: 'Perpetual',
    support: 'No ongoing support',
    coverage: 'Single major version (e.g. 1.x.x)',
    note: 'Lock in a single major version. No upgrades, no support.',
    highlight: false,
  },
  {
    name: 'Minor Version Perpetual',
    price: '$15,000',
    cadence: 'one-time',
    flexibility: 'Perpetual',
    support: 'No ongoing support',
    coverage: 'Single minor version (e.g. 1.1.x)',
    note: 'Lowest-cost option for a single minor-version deployment.',
    highlight: false,
  },
];

const process = [
  {
    icon: Phone,
    title: 'Discovery call',
    description:
      'We map your deployment, distribution model, and modifications to understand exactly what license terms fit your situation.',
  },
  {
    icon: FileCheck,
    title: 'Tailored quote',
    description:
      'You receive a written proposal — license tier, term, support level, and any custom clauses negotiated for your contract.',
  },
  {
    icon: Wallet,
    title: 'License signing',
    description:
      'We countersign the agreement, issue the license certificate, and onboard your team to the support channels included.',
  },
  {
    icon: Sparkles,
    title: 'Build & ship',
    description:
      'You build your proprietary product on Fleetbase with full confidence. Ongoing support and upgrades flow through your active term.',
  },
];

const faqs = [
  {
    q: 'How fast can we close a commercial license deal?',
    a: 'Most licenses close within 5–10 business days from initial call to signed agreement. Larger or more complex enterprise deals with custom terms typically take 2–4 weeks. Pilot Monthly Licenses can be issued within 48 hours when you need to move quickly.',
  },
  {
    q: 'Do I need a separate license per deployment, customer, or tenant?',
    a: 'No. The Fleetbase Commercial License is per-licensee, not per-deployment. You can deploy unlimited instances, serve unlimited tenants, and ship to unlimited customers under a single license. The license fee is fixed regardless of how many environments you run.',
  },
  {
    q: 'What does "all upgrades during the term" cover on an annual license?',
    a: 'Every release we publish during your active term — security patches, bug fixes, minor versions, and major versions. There are no separate upgrade fees. When your annual term ends, you can renew to continue receiving updates, or stay on your current version under the perpetual rights granted by your active license.',
  },
  {
    q: 'Can we negotiate custom terms — SLA levels, indemnity caps, audit rights?',
    a: 'Yes. Annual License agreements are designed to accommodate enterprise-specific terms. Common negotiated additions include custom SLAs, expanded indemnification, audit clauses, data-residency commitments, and source-code escrow. Discuss your requirements on the discovery call.',
  },
  {
    q: 'What happens if we let an Annual License expire?',
    a: 'You retain perpetual rights to use the version you deployed during your active term — but stop receiving upgrades and Business Support. You can renew at any time to resume both. Most customers renew annually because the support and upgrade value far exceeds the renewal cost.',
  },
  {
    q: 'Is the Commercial License compatible with Fleetbase Cloud?',
    a: 'Yes. You can use a Commercial License on either Fleetbase Cloud or self-hosted deployments. On Cloud, the license waives AGPL on any extensions or modifications you deploy alongside the managed core. Self-hosted gives you maximum flexibility for proprietary infrastructure-level changes.',
  },
  {
    q: 'Can extensions I publish to the Marketplace remain proprietary under a Commercial License?',
    a: 'Yes. Extensions you publish for sale on the Fleetbase Marketplace can be closed-source under a Commercial License. Free extensions you contribute to the community can stay open-source. The license gives you the choice — it doesn\'t mandate one path.',
  },
  {
    q: 'What if my use case doesn\'t neatly fit one of the listed tiers?',
    a: 'Talk to us. The four tiers cover the majority of cases, but we also issue custom enterprise agreements for unusual scope — multi-year terms, regional rights, multi-product portfolios, or specific deployment topologies. Custom agreements are quoted on the discovery call.',
  },
];

export default function CommercialLicensePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
        </div>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Award className="size-3.5" />
              Commercial License
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Build proprietary on Fleetbase.{' '}
              <span className="text-gradient">No AGPL strings attached.</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              The Fleetbase Commercial License removes AGPL-3.0 copyleft obligations entirely —
              so you can ship customised versions, build SaaS products, white-label deployments,
              and protect your custom code under your own terms.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="https://cal.com/shivthakker/enquiry">
                  Book a discovery call <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Most licenses close in 5–10 business days. Pilot Monthly Licenses can be issued
              within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why & When ──────────────────────────────────────────────── */}
      <section className="border-y bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                Why your business probably needs one
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Fleetbase Core is AGPL-3.0. That&apos;s ideal for internal use and community
                contribution — but the network copyleft clause means any modifications you
                deploy as a service must also be released under AGPL. For commercial use, that&apos;s
                often a non-starter.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border bg-card p-6">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Code2 className="size-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold">Under AGPL-3.0</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Modifications deployed over a network must be released as AGPL. No proprietary
                  customisations. No private SaaS modifications.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Scale className="size-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold">In legal review</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Enterprise procurement and legal teams flag AGPL on every commercial contract.
                  A commercial license neutralises the conversation entirely.
                </p>
              </div>
              <div className="rounded-xl border-2 border-primary bg-primary/5 p-6">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <ShieldCheck className="size-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-primary">With a Commercial License</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Build, modify, and distribute proprietary versions of Fleetbase under your own
                  terms. AGPL obligations don&apos;t apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              What the Commercial License includes
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every commercial license — Annual, Monthly, or Perpetual — includes the rights
              below. Annual licenses additionally include Business Support and rolling upgrades.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ───────────────────────────────────────────────── */}
      <section className="border-t py-16 md:py-24 bg-muted/10">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Who buys a Commercial License
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Four scenarios cover the majority of commercial license customers. If your situation
              looks similar, it&apos;s probably the right path.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-xl border bg-card p-7">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border bg-background">
                  <u.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{u.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section id="pricing" className="border-t py-16 md:py-24 scroll-mt-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Pricing options
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Per-licensee pricing, not per-deployment. Choose the term and support model that
              fits your operation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col overflow-hidden rounded-xl border bg-card ${tier.highlight ? 'border-primary shadow-lg shadow-primary/10' : ''}`}
              >
                {tier.badge && (
                  <div className="bg-primary py-1.5 text-center text-xs font-semibold text-primary-foreground">
                    {tier.badge}
                  </div>
                )}
                <div className="flex-1 p-6">
                  <h3 className="mb-3 text-base font-semibold">{tier.name}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold tracking-tight">{tier.price}</div>
                    <div className="text-xs text-muted-foreground">{tier.cadence}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                      <span>{tier.flexibility}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Headphones className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                      <span>{tier.support}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                      <span>{tier.coverage}</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs italic leading-relaxed text-muted-foreground">{tier.note}</p>
                </div>
                <div className="p-6 pt-0">
                  <Button asChild variant={tier.highlight ? 'default' : 'outline'} className="w-full">
                    <Link href="https://cal.com/shivthakker/enquiry">Book a call</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need a custom enterprise agreement — multi-year, regional, or multi-product?{' '}
            <Link href="https://cal.com/shivthakker/enquiry" className="text-primary underline underline-offset-4">
              We negotiate bespoke terms
            </Link>
            . Or browse the full{' '}
            <Link href="/pricing" className="text-primary underline underline-offset-4">
              Fleetbase pricing page
            </Link>{' '}
            for Cloud and Self-Hosted plans.
          </p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section className="border-t bg-muted/10 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Four steps from first call to signed license. We move fast — no procurement runaround.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border bg-card p-6">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <step.icon className="size-4 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
              Common questions
            </h2>
            <p className="mb-10 text-muted-foreground">
              Specific to commercial licensing. For general AGPL questions, see the{' '}
              <Link href="/licensing" className="text-primary underline underline-offset-4">
                Licensing overview
              </Link>
              .
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-6">
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Ready to ship proprietary on Fleetbase?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                One discovery call. Tailored quote within 48 hours. Most licenses close in under
                two weeks.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://cal.com/shivthakker/enquiry">
                    Book a discovery call <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:sales@fleetbase.io?subject=Commercial%20License%20Enquiry">
                    sales@fleetbase.io
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Operated by Fleetbase Pte. Ltd., Singapore. Commercial licenses are non-exclusive,
                worldwide, and transferable subject to standard assignment terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
