import type { Metadata } from 'next';
import Link from 'next/link';
import {
 ArrowRight,
 Building2,
 Code2,
 Compass,
 Globe,
 LineChart,
 Lock,
 Mail,
 Network,
 ShieldCheck,
 Sprout,
 Target,
 Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getGitHubStars } from '@/lib/github-stars';

export const metadata: Metadata = {
 title: 'Investors',
 description:
 'A bootstrapped, profitable open-source logistics platform powering 8,000+ active instances and 10M+ orders. The opportunity and our model.',
 keywords: [
 'fleetbase investors',
 'open source logistics investment',
 'logistics infrastructure investment',
 'bootstrapped logistics company',
 'fleetbase strategic partner',
 ],
 openGraph: {
 title: 'Investors | Fleetbase',
 description:
 'Bootstrapped open-source logistics platform with 8,000+ active instances. Learn about the opportunity and what we look for in long-term partners.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Investors | Fleetbase`,
   description: `Bootstrapped open-source logistics platform with 8,000+ active instances. Learn about the opportunity and what we look for in long-term partners.`,
 },
 alternates: { canonical: 'https://fleetbase.io/company/investors' },
};

function buildNumbers(stars: string) {
 return [
 { value: '8,000+', label: 'Active instances', sub: 'Datadog-verified deployments' },
 { value: '10M+', label: 'Orders processed', sub: 'Across the platform globally' },
 { value: stars, label: 'GitHub stars', sub: 'Open-source community' },
 { value: '40+', label: 'Countries', sub: 'Production deployments' },
 ];
}

const principles = [
 {
 icon: Sprout,
 title: 'Bootstrapped to date',
 description:
 'Fleetbase has been built and grown without venture capital. That gave us the time to validate the product with real operators, the freedom to make long-horizon decisions, and the discipline of needing to be profitable.',
 },
 {
 icon: Lock,
 title: 'Open core, by conviction',
 description:
 'The core platform is and will remain open-source under AGPL-3.0. Closing the core is not a lever we will pull — it is the foundation operators trust us on, and the reason developers choose to build with us.',
 },
 {
 icon: Compass,
 title: 'Operator-first product',
 description:
 'Every product decision starts with a real operator running real freight, deliveries, or service routes. We optimise for the people doing the work, not for procurement officers buying the software.',
 },
];

const opportunity = [
 {
 icon: Globe,
 title: 'A market that runs on legacy software',
 description:
 'Logistics, fleet, and last-mile operators globally still depend on closed, expensive, hard-to-customise systems. The migration from legacy TMS to modern, API-first, open infrastructure is in its early innings.',
 },
 {
 icon: Code2,
 title: 'Open source as the distribution model',
 description:
 'The same pattern that played out in databases, observability, and developer tools is now playing out in logistics. Operators want to own their infrastructure; developers want to build on platforms they can inspect.',
 },
 {
 icon: Network,
 title: 'A platform, not a product',
 description:
 'Fleet-Ops, Storefront, Pallet, Ledger, IAM, the Marketplace — Fleetbase is a horizontal platform with multiple verticals layered on top, each with its own monetisation surface.',
 },
];

const businessModel = [
 {
 title: 'Open-source community edition',
 description:
 'Free, AGPL-3.0, self-hosted. Includes every core capability operators need to run an end-to-end logistics business.',
 },
 {
 title: 'Fleetbase Cloud',
 description:
 'Fully managed deployment with automatic upgrades, backups, monitoring, and 24/7 platform operations. Per-instance pricing, no per-seat fees.',
 },
 {
 title: 'Enterprise & support',
 description:
 'SLAs, dedicated infrastructure, custom extensions, on-prem deployment assistance, and direct engineering support for production-critical operators.',
 },
 {
 title: 'Extensions Marketplace',
 description:
 'Revenue share on paid first-party and third-party extensions. A growing developer ecosystem with built-in monetisation rails.',
 },
];

const fitWeAreLookingFor = [
 {
 icon: Target,
 title: 'Strategic alignment',
 description:
 'Investors and partners who understand open-source, infrastructure, and long product cycles — and who are not pushing for a forced exit on a 5-year clock.',
 },
 {
 icon: Building2,
 title: 'Industry depth',
 description:
 'Operating partners and capital with real exposure to logistics, fleet, supply chain, or commerce — strong networks into operators we can partner with.',
 },
 {
 icon: Users,
 title: 'Distribution leverage',
 description:
 'Channels into specific verticals or geographies where Fleetbase fits — last-mile, freight, ports, healthcare logistics, government, or emerging markets.',
 },
];

const wonts = [
 'Close-source the core platform',
 'Move to per-seat or per-driver pricing on the community edition',
 'Sacrifice the developer experience for short-term enterprise revenue',
 'Optimise the roadmap for an exit window',
];

export default async function InvestorsPage() {
 const stars = await getGitHubStars();
 const numbers = buildNumbers(stars);
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 For Investors &amp; Strategic Partners
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 We&apos;re building the open-source{' '}
 <span className="text-primary">logistics infrastructure</span> for the next decade.
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Fleetbase is a bootstrapped, profitable open-source platform powering 8,000+ active
 deployments and 10M+ orders across 40+ countries. We&apos;re not actively raising —
 but we&apos;re open to conversations with the right long-term partners.
 </p>
 <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">
 Open a conversation <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/company/about">Read our story</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Numbers */}
 <section className="border-y bg-muted/20 py-12">
 <div className="container">
 <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
 {numbers.map((stat) => (
 <div key={stat.label} className="text-center">
 <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
 <div className="mt-1 text-sm font-medium">{stat.label}</div>
 <div className="text-xs text-muted-foreground">{stat.sub}</div>
 </div>
 ))}
 </div>
 <p className="mt-6 text-center text-xs text-muted-foreground">
 Active-instance counts are independently measured via Datadog telemetry across self-hosted and cloud deployments.
 </p>
 </div>
 </section>

 {/* Principles */}
 <section className="py-16 md:py-24">
 <div className="container">
 <div className="mb-12 max-w-2xl">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How we operate</h2>
 <p className="mt-3 text-lg text-muted-foreground">
 The principles behind how Fleetbase is built and run today — and how we&apos;d expect any
 capital or partnership conversation to align.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-3">
 {principles.map((p) => (
 <div key={p.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <p.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Opportunity */}
 <section className="border-t py-16 md:py-24 bg-muted/10">
 <div className="container">
 <div className="mb-12 max-w-2xl">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
 The opportunity
 </h2>
 <p className="mt-3 text-lg text-muted-foreground">
 Logistics is one of the largest sectors in the world economy. The infrastructure powering
 it is overwhelmingly closed, expensive, and shaped for the buyers — not the operators.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-3">
 {opportunity.map((item) => (
 <div key={item.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <item.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Business model */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mb-12 max-w-2xl">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
 How Fleetbase makes money
 </h2>
 <p className="mt-3 text-lg text-muted-foreground">
 Open core with multiple commercial surfaces — each with its own growth curve and margin
 profile.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-2">
 {businessModel.map((item, i) => (
 <div key={item.title} className="rounded-xl border bg-card p-6">
 <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
 <span className="text-primary">{String(i + 1).padStart(2, '0')}</span>
 <LineChart className="size-3" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
 </div>
 ))}
 </div>
 <p className="mt-8 text-sm text-muted-foreground">
 Detailed unit economics and revenue-mix breakdowns are available under NDA on request.
 </p>
 </div>
 </section>

 {/* Fit */}
 <section className="border-t py-16 md:py-24 bg-muted/10">
 <div className="container">
 <div className="mb-12 max-w-2xl">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we look for</h2>
 <p className="mt-3 text-lg text-muted-foreground">
 We&apos;re selective. The right capital or partnership accelerates Fleetbase without
 changing what makes it valuable in the first place.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-3">
 {fitWeAreLookingFor.map((item) => (
 <div key={item.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <item.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Won'ts */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mx-auto max-w-3xl">
 <div className="mb-8">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
 What we won&apos;t do
 </h2>
 <p className="mt-3 text-lg text-muted-foreground">
 If a conversation starts here, we&apos;re probably not the right fit.
 </p>
 </div>
 <ul className="space-y-3">
 {wonts.map((w) => (
 <li key={w} className="flex items-start gap-3 rounded-xl border bg-card p-4">
 <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
 <span className="text-sm leading-relaxed">{w}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="border-t py-16 md:py-24 bg-muted/20">
 <div className="container">
 <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-10 text-center md:p-14">
 <Mail className="mx-auto mb-4 size-8 text-primary" />
 <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
 Open a conversation
 </h2>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 We respond directly — there is no pitch process and no funnel. Tell us a little about
 your firm, your thesis, and what you&apos;d want to explore together.
 </p>
 <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">
 Book an intro call <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <a href="mailto:hello@fleetbase.io?subject=Investors%20%E2%80%94%20Intro">
 hello@fleetbase.io
 </a>
 </Button>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
