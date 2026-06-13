import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ONFLEET_ALTERNATIVE_PAGES } from './onfleet-alternative-pages';

export const metadata: Metadata = {
 title: 'Fleetbase Comparisons | Open-Source Alternative to Onfleet, Tookan, Route4Me',
 description:
 'See how Fleetbase compares to Onfleet, Tookan, Route4Me, and Bringg. Open-source fleet management and TMS software with no per-task or per-agent pricing.',
 keywords: [
 'Onfleet alternative',
 'Tookan alternative',
 'Route4Me alternative',
 'Bringg alternative',
 'open source fleet management alternative',
 'delivery management software comparison',
 ],
 alternates: { canonical: 'https://fleetbase.io/compare' },
};

const COMPARISONS = [
 {
 competitor: 'Onfleet',
 slug: 'vs-onfleet',
 tagline: 'No per-task pricing. Self-hosted. Full platform.',
 description:
 'Onfleet charges per task and locks you into the cloud. Fleetbase is open-source, self-hostable, and includes WMS, storefront, and accounting — not just dispatch.',
 badge: 'Most Popular',
 },
 {
 competitor: 'Tookan',
 slug: 'vs-tookan',
 tagline: 'No per-agent fees. Open source. Complete logistics OS.',
 description:
 "Tookan's per-agent pricing compounds as your team grows. Fleetbase uses resource units — one predictable pool for orders, drivers, vehicles, and API calls.",
 badge: null,
 },
 {
 competitor: 'Route4Me',
 slug: 'vs-route4me',
 tagline: 'Route optimization plus a full fleet management platform.',
 description:
 'Route4Me plans routes. Fleetbase does that and more — dispatch, driver management, real-time tracking, POD, WMS, storefront, and accounting in one open-source platform.',
 badge: null,
 },
 {
 competitor: 'Bringg',
 slug: 'vs-bringg',
 tagline: 'Enterprise delivery management without enterprise pricing.',
 description:
 "Bringg targets large enterprises with custom pricing. Fleetbase gives you enterprise-grade fleet management and TMS from $50/month — or free if you self-host.",
 badge: null,
 },
];

export default function ComparePage() {
 return (
 <div className="min-h-screen">
 {/* Hero */}
 <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
 <div className="container max-w-4xl text-center space-y-6">
 <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
 How Fleetbase Compares
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 See how Fleetbase stacks up against the most popular fleet management and delivery management platforms. Open-source, no per-task or per-agent pricing, self-hostable.
 </p>
 </div>
 </section>

 {/* Comparison Cards */}
 <section className="py-16 md:py-20">
 <div className="container max-w-4xl">
 <div className="grid gap-6 md:grid-cols-2">
 {COMPARISONS.map((item) => (
 <Link
 key={item.slug}
 href={`/compare/${item.slug}`}
 className="group rounded-xl border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all"
 >
 <div className="flex items-start justify-between mb-3">
 <div>
 {item.badge && (
 <span className="inline-block rounded-full bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 mb-2">
 {item.badge}
 </span>
 )}
 <h2 className="text-xl font-bold">Fleetbase vs {item.competitor}</h2>
 </div>
 <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
 </div>
 <p className="text-sm font-medium text-primary mb-2">{item.tagline}</p>
 <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Onfleet Alternative Landing Pages */}
 <section className="py-16 md:py-20 border-t bg-muted/20">
 <div className="container max-w-5xl">
 <div className="mb-10 max-w-2xl">
 <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Onfleet alternatives</p>
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
 Win the specific comparison your buyer is already making
 </h2>
 <p className="mt-4 text-muted-foreground">
 Focused pages for teams searching for a lower-cost, more controllable alternative to individual Onfleet capabilities.
 </p>
 </div>
 <div className="grid gap-4 md:grid-cols-2">
 {ONFLEET_ALTERNATIVE_PAGES.map((item) => (
 <Link
 key={item.slug}
 href={`/compare/${item.slug}`}
 className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
 >
 <div className="mb-2 flex items-start justify-between gap-4">
 <div>
 <p className="text-xs font-medium text-primary">{item.eyebrow}</p>
 <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.title}</h3>
 </div>
 <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Bottom CTA */}
 <section className="py-16 border-t bg-muted/20">
 <div className="container max-w-3xl text-center space-y-6">
 <h2 className="text-2xl font-bold">Ready to see Fleetbase in action?</h2>
 <p className="text-muted-foreground">
 Start a free trial or book a live demo with our team. .
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io">
 Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
 Book a Demo
 </Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 );
}
