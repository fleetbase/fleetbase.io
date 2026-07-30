import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FAQSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
 title: { absolute: 'Fleetbase vs Detrack | Open-Source Detrack Alternative' },
 description:
 'Compare Fleetbase vs Detrack. Fleetbase is the open-source Detrack alternative with no per-vehicle pricing, self-hosting, full API access, and a complete delivery platform — dispatch, tracking, e-POD, and more.',
 keywords: [
 'Detrack alternative',
 'Fleetbase vs Detrack',
 'open source Detrack alternative',
 'delivery management software alternative to Detrack',
 'Detrack competitor',
 'Detrack self hosted alternative',
 ],
 openGraph: {
 title: 'Fleetbase vs Detrack | Open-Source Detrack Alternative',
 description:
 'Compare Fleetbase vs Detrack. No per-vehicle pricing, self-hosting, full API access, and a complete delivery platform. The open-source alternative to Detrack.',
 images: [
 {
 url: '/og?title=Fleetbase%20vs%20Detrack&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Detrack%20%E2%80%94%20no%20per-vehicle%20pricing%2C%20self-hosted%20or%20cloud.',
 width: 1200,
 height: 630,
 alt: 'Fleetbase vs Detrack — open-source Detrack alternative',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Fleetbase vs Detrack',
 description: 'The open-source Detrack alternative — no per-vehicle pricing, self-hosted or cloud.',
 images: [
 '/og?title=Fleetbase%20vs%20Detrack&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Detrack%20%E2%80%94%20no%20per-vehicle%20pricing%2C%20self-hosted%20or%20cloud.',
 ],
 },
 alternates: { canonical: 'https://fleetbase.io/compare/vs-detrack' },
};

type FeatureRow = {
 feature: string;
 fleetbase: string | boolean;
 detrack: string | boolean;
 note?: string;
};

const COMPARISON: FeatureRow[] = [
 { feature: 'Open Source', fleetbase: true, detrack: false },
 { feature: 'Self-Hosted Deployment', fleetbase: true, detrack: false },
 { feature: 'Cloud Hosting', fleetbase: true, detrack: true },
 { feature: 'Free Tier / Trial', fleetbase: 'Free trial + open source', detrack: 'Free plan (limited vehicles)' },
 { feature: 'Pricing Model', fleetbase: 'Usage-based (from $25/mo)', detrack: 'Per-vehicle subscription' },
 { feature: 'Per-Vehicle Fees', fleetbase: false, detrack: true, note: 'Detrack pricing scales per vehicle' },
 { feature: 'Real-Time GPS Tracking', fleetbase: true, detrack: true },
 { feature: 'Electronic Proof of Delivery', fleetbase: true, detrack: true },
 { feature: 'Customer Notifications & Tracking Page', fleetbase: true, detrack: true },
 { feature: 'Route Optimization', fleetbase: true, detrack: 'Add-on' },
 { feature: 'Automated Dispatch / Orchestration', fleetbase: true, detrack: 'Limited' },
 { feature: 'Driver Mobile App', fleetbase: 'Free open-source (Navigator)', detrack: 'Proprietary' },
 { feature: 'Full REST API', fleetbase: true, detrack: 'Limited' },
 { feature: 'Webhooks', fleetbase: true, detrack: true },
 { feature: 'Extensions / Marketplace', fleetbase: true, detrack: false },
 { feature: 'Multi-Tenant / Multi-Org', fleetbase: true, detrack: false },
 { feature: 'Warehouse Management (WMS)', fleetbase: 'Pallet WMS included', detrack: false },
 { feature: 'Storefront / Online Ordering', fleetbase: true, detrack: false },
 { feature: 'Accounting / Ledger', fleetbase: true, detrack: false },
 { feature: 'Custom Extensions / SDK', fleetbase: true, detrack: false },
 { feature: 'Data Ownership', fleetbase: 'Full — self-host or export', detrack: 'Vendor-controlled' },
 { feature: 'Community Support', fleetbase: 'Discord + GitHub', detrack: 'Support tickets' },
];

const FAQS = [
 {
 q: 'Is there an open-source alternative to Detrack?',
 a: 'Yes. Fleetbase is a fully open-source alternative to Detrack, licensed under AGPL. You can self-host the entire platform on your own infrastructure or use Fleetbase Cloud — with full source access, a REST API, and no per-vehicle fees.',
 },
 {
 q: 'What is the best Detrack alternative?',
 a: 'Detrack is strong at delivery tracking and electronic proof of delivery. If you also want automated dispatch, route optimization, self-hosting, and an open platform you can own and extend, Fleetbase is the most complete Detrack alternative — it covers the full delivery operation, not just tracking and e-POD.',
 },
 {
 q: 'Is Fleetbase cheaper than Detrack?',
 a: 'Detrack charges per vehicle, so costs grow with your fleet. Fleetbase uses predictable usage-based pricing from $25/month with no per-vehicle fees — and is free to run if you self-host the open-source edition.',
 },
 {
 q: 'Can I self-host a Detrack alternative?',
 a: 'Detrack is cloud-only. Fleetbase can be self-hosted on AWS, GCP, Azure, or bare metal, so your delivery and customer data stay on infrastructure you control — or use the managed cloud and migrate later.',
 },
 {
 q: 'Does Fleetbase do electronic proof of delivery like Detrack?',
 a: 'Yes. Fleetbase captures digital proof of delivery — signatures, photos, and notes, geotagged and timestamped — at every stop, visible instantly in the console and exportable for audits, just like Detrack’s e-POD.',
 },
];

function Cell({ value }: { value: string | boolean }) {
 if (value === true) return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
 if (value === false) return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
 return <span className="text-sm text-center block">{value}</span>;
}

export default function VsDetrackPage() {
 return (
 <div className="min-h-screen">
 <SoftwareApplicationSchema
 name="Detrack"
 url="https://detrack.com"
 description="Delivery tracking and electronic proof-of-delivery software — closed-source, cloud-only, per-vehicle pricing."
 />
 <FAQSchema faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />

 {/* Hero */}
 <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
 <div className="container max-w-5xl text-center space-y-6">
 <Breadcrumbs
 className="justify-center [&_ol]:justify-center"
 items={[
 { label: 'Compare', href: '/compare' },
 { label: 'Fleetbase vs Detrack', href: '/compare/vs-detrack' },
 ]}
 />
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Open-Source Detrack Alternative
 </div>
 <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
 Fleetbase vs Detrack
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Detrack is a capable delivery tracking and proof-of-delivery tool — but it’s closed-source, cloud-only, and priced per vehicle. Fleetbase is the open-source alternative that runs your entire delivery operation, self-hosted or cloud, with no per-vehicle fees.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/onboard">
 Try Fleetbase Free <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/pricing">View Pricing</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Key Differences */}
 <section className="py-16 md:py-20 border-b">
 <div className="container max-w-5xl">
 <h2 className="text-2xl font-bold mb-10 text-center">Why teams choose Fleetbase over Detrack</h2>
 <div className="grid gap-6 md:grid-cols-3">
 {[
 {
 title: 'No per-vehicle pricing',
 description:
 'Detrack bills per vehicle, so your costs climb as your fleet grows. Fleetbase uses predictable usage-based pricing — and is free to run if you self-host.',
 },
 {
 title: 'Open source & self-hostable',
 description:
 'Detrack is closed-source and cloud-only. Fleetbase can run on your own infrastructure with full access to the source and your data — no vendor lock-in.',
 },
 {
 title: 'A full platform, not just tracking',
 description:
 'Detrack focuses on tracking and e-POD. Fleetbase adds automated dispatch, route optimization, WMS (Pallet), storefront, and accounting (Ledger) — all in one.',
 },
 ].map((item) => (
 <div key={item.title} className="rounded-xl border bg-card p-6">
 <CheckCircle2 className="h-6 w-6 text-green-500 mb-3" />
 <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Feature Comparison Table */}
 <section className="py-16 md:py-20">
 <div className="container max-w-5xl">
 <h2 className="text-2xl font-bold mb-8 text-center">Full Feature Comparison</h2>
 <div className="overflow-x-auto rounded-xl border">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b bg-muted/40">
 <th className="text-left px-4 py-3 font-semibold w-1/2">Feature</th>
 <th className="text-center px-4 py-3 font-semibold text-primary w-1/4">Fleetbase</th>
 <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-1/4">Detrack</th>
 </tr>
 </thead>
 <tbody>
 {COMPARISON.map((row, i) => (
 <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
 <td className="px-4 py-3 font-medium">
 {row.feature}
 {row.note && (
 <span className="block text-xs text-muted-foreground mt-0.5">{row.note}</span>
 )}
 </td>
 <td className="px-4 py-3 text-center">
 <Cell value={row.fleetbase} />
 </td>
 <td className="px-4 py-3 text-center">
 <Cell value={row.detrack} />
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* Pricing Comparison */}
 <section className="py-16 md:py-20 border-t bg-muted/20">
 <div className="container max-w-4xl">
 <h2 className="text-2xl font-bold mb-8 text-center">Pricing Comparison</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="rounded-xl border bg-card p-8">
 <div className="text-primary font-semibold text-sm mb-2">Fleetbase</div>
 <div className="text-4xl font-bold mb-1">$25<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 <p className="text-sm text-muted-foreground mb-6">Micro cloud plan — usage-based, no per-vehicle fees. Self-hosted from $2,500 one-time, or free under the open-source license.</p>
 <ul className="space-y-2 text-sm">
 {['Usage-based, not per-vehicle', 'No seat fees', 'Self-hosting available', 'Full API access', 'Open source — free forever if self-hosted'].map(f => (
 <li key={f} className="flex items-center gap-2">
 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
 {f}
 </li>
 ))}
 </ul>
 </div>
 <div className="rounded-xl border bg-card p-8">
 <div className="text-muted-foreground font-semibold text-sm mb-2">Detrack</div>
 <div className="text-4xl font-bold mb-1">Per vehicle<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 <p className="text-sm text-muted-foreground mb-6">Free plan for a limited number of vehicles; paid plans charged per vehicle per month, scaling with fleet size.</p>
 <ul className="space-y-2 text-sm">
 {['Per-vehicle pricing at scale', 'Cloud-only', 'No self-hosting', 'Limited API access', 'Closed source'].map(f => (
 <li key={f} className="flex items-center gap-2">
 <Minus className="h-4 w-4 text-muted-foreground shrink-0" />
 {f}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 md:py-20 border-t">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-bold mb-8 text-center">Detrack alternative — FAQs</h2>
 <div className="divide-y rounded-xl border bg-card px-6">
 {FAQS.map((faq) => (
 <details key={faq.q} className="group py-5">
 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
 {faq.q}
 <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
 </summary>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 md:py-20 border-t">
 <div className="container max-w-3xl text-center space-y-6">
 <h2 className="text-3xl font-bold tracking-tight">Ready to switch from Detrack?</h2>
 <p className="text-lg text-muted-foreground">
 Migrate your delivery operation to Fleetbase in days, not months. Our team provides free migration support for teams coming from Detrack.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/onboard">
 Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
 Talk to Sales
 </Link>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground"> Free migration support · Cancel anytime</p>
 </div>
 </section>
 </div>
 );
}
