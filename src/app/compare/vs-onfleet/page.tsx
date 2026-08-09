import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
 title: 'Fleetbase vs Onfleet | Open-Source Onfleet Alternative',
 description:
 'Compare Fleetbase vs Onfleet. Fleetbase is the open-source Onfleet alternative with no per-task pricing, self-hosting, full API access, and a free tier. See the full feature comparison.',
 keywords: [
 'Onfleet alternative',
 'Fleetbase vs Onfleet',
 'open source Onfleet alternative',
 'delivery management software alternative to Onfleet',
 'Onfleet competitor',
 'cheaper than Onfleet',
 'Onfleet self hosted alternative',
 ],
 openGraph: {
 title: 'Fleetbase vs Onfleet | Open-Source Onfleet Alternative',
 description:
 'Compare Fleetbase vs Onfleet. No per-task pricing, self-hosting, full API access, and a free tier. The open-source alternative to Onfleet.',
 images: [
 {
 url: '/og?title=Fleetbase%20vs%20Onfleet&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Onfleet%20%E2%80%94%20no%20per-task%20pricing%2C%20self-hosted%20or%20cloud.',
 width: 1200,
 height: 630,
 alt: 'Fleetbase vs Onfleet — open-source Onfleet alternative',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Fleetbase vs Onfleet',
 description: 'The open-source Onfleet alternative — no per-task pricing, self-hosted or cloud.',
 images: [
 '/og?title=Fleetbase%20vs%20Onfleet&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Onfleet%20%E2%80%94%20no%20per-task%20pricing%2C%20self-hosted%20or%20cloud.',
 ],
 },
 alternates: { canonical: 'https://fleetbase.io/compare/vs-onfleet' },
};

type FeatureRow = {
 feature: string;
 fleetbase: string | boolean;
 onfleet: string | boolean;
 note?: string;
};

const COMPARISON: FeatureRow[] = [
 { feature: 'Open Source', fleetbase: true, onfleet: false },
 { feature: 'Self-Hosted Deployment', fleetbase: true, onfleet: false },
 { feature: 'Cloud Hosting', fleetbase: true, onfleet: true },
 { feature: 'Free Tier / Trial', fleetbase: 'Free trial + open source', onfleet: '14-day trial only' },
 { feature: 'Pricing Model', fleetbase: 'Usage-based (from $50/mo)', onfleet: 'Per-task pricing (expensive at scale)' },
 { feature: 'Per-Task Fees', fleetbase: false, onfleet: true, note: 'Onfleet charges per task at higher tiers' },
 { feature: 'Real-Time GPS Tracking', fleetbase: true, onfleet: true },
 { feature: 'Route Optimization', fleetbase: true, onfleet: true },
 { feature: 'Automated Dispatch', fleetbase: true, onfleet: true },
 { feature: 'Driver Mobile App', fleetbase: 'Free open-source (Navigator)', onfleet: 'Proprietary' },
 { feature: 'Proof of Delivery (POD)', fleetbase: true, onfleet: true },
 { feature: 'Customer Notifications', fleetbase: true, onfleet: true },
 { feature: 'White-Label Branding', fleetbase: true, onfleet: 'Enterprise only' },
 { feature: 'Full REST API', fleetbase: true, onfleet: 'Limited' },
 { feature: 'Webhooks', fleetbase: true, onfleet: true },
 { feature: 'Extensions / Marketplace', fleetbase: true, onfleet: false },
 { feature: 'Multi-Tenant / Multi-Org', fleetbase: true, onfleet: 'Enterprise only' },
 { feature: 'Warehouse Management (WMS)', fleetbase: 'Pallet WMS included', onfleet: false },
 { feature: 'Storefront / Online Ordering', fleetbase: true, onfleet: false },
 { feature: 'Accounting / Ledger', fleetbase: true, onfleet: false },
 { feature: 'Custom Extensions / SDK', fleetbase: true, onfleet: false },
 { feature: 'Data Ownership', fleetbase: 'Full — self-host or export', onfleet: 'Vendor-controlled' },
 { feature: 'Community Support', fleetbase: 'Discord + GitHub', onfleet: 'Forum only' },
 { feature: 'Enterprise SLA Support', fleetbase: true, onfleet: true },
];

function Cell({ value }: { value: string | boolean }) {
 if (value === true) return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
 if (value === false) return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
 return <span className="text-sm text-center block">{value}</span>;
}

export default function VsOnfleetPage() {
 return (
 <div className="min-h-screen">
 <SoftwareApplicationSchema
 name="Onfleet"
 url="https://onfleet.com"
 description="Last-mile delivery management software for dispatch, routing, and proof of delivery — closed-source, per-task pricing."
 />

 {/* Hero */}
 <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
 <div className="container max-w-5xl text-center space-y-6">
 <Breadcrumbs
 className="justify-center [&_ol]:justify-center"
 items={[
 { label: 'Compare', href: '/compare' },
 { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet' },
 ]}
 />
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Comparison
 </div>
 <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
 Fleetbase vs Onfleet
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Onfleet is a solid delivery management tool — but it charges per task, locks you into their cloud, and gives you no access to the source code. Fleetbase is the open-source alternative that scales without punishing you for growth.
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
 <h2 className="text-2xl font-bold mb-10 text-center">Why teams switch from Onfleet to Fleetbase</h2>
 <div className="grid gap-6 md:grid-cols-3">
 {[
 {
 title: 'No per-task pricing',
 description:
 "Onfleet's per-task model means your costs spike every time you grow. Fleetbase never charges per order or per delivery, at any volume — you pay $29 a month plus $5 per driver or vehicle, and that's it.",
 },
 {
 title: 'Self-host or cloud',
 description:
 "Onfleet is cloud-only. Fleetbase can be deployed on your own infrastructure — AWS, GCP, Azure, or bare metal. Your data stays where you want it.",
 },
 {
 title: 'Full platform, not just dispatch',
 description:
 'Onfleet is a dispatch tool. Fleetbase includes dispatch, routing, live tracking, the driver app (Navigator), accounting (Ledger), a storefront e-commerce suite, and an extensions marketplace — all in one.',
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
 <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-1/4">Onfleet</th>
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
 <Cell value={row.onfleet} />
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
 <div className="text-4xl font-bold mb-1">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 <p className="text-sm text-muted-foreground mb-6">Plus $5 a month per driver or vehicle. Orders are free at any volume. Self-hosted from $2,500 one-time.</p>
 <ul className="space-y-2 text-sm">
 {['Never a per-delivery fee, at any volume', 'No seat fees — unlimited users', 'Self-hosting available', 'Full API access', 'Open source — free forever if self-hosted'].map(f => (
 <li key={f} className="flex items-center gap-2">
 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
 {f}
 </li>
 ))}
 </ul>
 </div>
 <div className="rounded-xl border bg-card p-8">
 <div className="text-muted-foreground font-semibold text-sm mb-2">Onfleet</div>
 <div className="text-4xl font-bold mb-1">$550<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 <p className="text-sm text-muted-foreground mb-6">Launch plan — 2,000 tasks/month. Additional tasks charged per-task. Scales expensively.</p>
 <ul className="space-y-2 text-sm">
 {['Per-task pricing at scale', 'Cloud-only', 'No self-hosting', 'Limited API access', 'Closed source'].map(f => (
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

 {/* CTA */}
 <section className="py-16 md:py-20 border-t">
 <div className="container max-w-3xl text-center space-y-6">
 <h2 className="text-3xl font-bold tracking-tight">Ready to switch from Onfleet?</h2>
 <p className="text-lg text-muted-foreground">
 Migrate your operations to Fleetbase in days, not months. Our team provides free migration support for teams coming from Onfleet.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/onboard">
 Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href={`https://cal.com/shivthakker/enquiry`} target="_blank" rel="noopener noreferrer">
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
