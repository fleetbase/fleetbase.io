import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
 title: 'Fleetbase vs Tookan | Open-Source Tookan Alternative',
 description:
 'Compare Fleetbase vs Tookan. Fleetbase is the open-source Tookan alternative with no agent-based pricing, self-hosting, full API access, and a complete logistics platform. See the full comparison.',
 keywords: [
 'Tookan alternative',
 'Fleetbase vs Tookan',
 'open source Tookan alternative',
 'delivery management software alternative to Tookan',
 'Tookan competitor',
 'cheaper than Tookan',
 'Tookan self hosted alternative',
 ],
 openGraph: {
 title: 'Fleetbase vs Tookan | Open-Source Tookan Alternative',
 description:
 'Compare Fleetbase vs Tookan. No agent-based pricing, self-hosting, full API access. The open-source alternative to Tookan.',
 images: [
 {
 url: '/og?title=Fleetbase%20vs%20Tookan&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Tookan%20%E2%80%94%20no%20agent-based%20pricing%2C%20self-hosted%20or%20cloud.',
 width: 1200,
 height: 630,
 alt: 'Fleetbase vs Tookan — open-source Tookan alternative',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Fleetbase vs Tookan',
 description: 'The open-source Tookan alternative — no agent-based pricing, self-hosted or cloud.',
 images: [
 '/og?title=Fleetbase%20vs%20Tookan&eyebrow=Compare&subtitle=The%20open-source%20alternative%20to%20Tookan%20%E2%80%94%20no%20agent-based%20pricing%2C%20self-hosted%20or%20cloud.',
 ],
 },
 alternates: { canonical: 'https://fleetbase.io/compare/vs-tookan' },
};

type FeatureRow = {
 feature: string;
 fleetbase: string | boolean;
 tookan: string | boolean;
 note?: string;
};

const COMPARISON: FeatureRow[] = [
 { feature: 'Open Source', fleetbase: true, tookan: false },
 { feature: 'Self-Hosted Deployment', fleetbase: true, tookan: false },
 { feature: 'Cloud Hosting', fleetbase: true, tookan: true },
 { feature: 'Free Tier', fleetbase: 'Free trial + open source', tookan: 'Free plan (200 tasks/mo)' },
 { feature: 'Pricing Model', fleetbase: '$29/mo + $5 per driver or vehicle', tookan: 'Per-agent + per-task fees' },
 { feature: 'Per-Agent Fees', fleetbase: false, tookan: true, note: 'Tookan charges per agent/driver' },
 { feature: 'Real-Time GPS Tracking', fleetbase: true, tookan: true },
 { feature: 'Route Optimization', fleetbase: true, tookan: true },
 { feature: 'Automated Dispatch', fleetbase: true, tookan: true },
 { feature: 'Driver Mobile App', fleetbase: 'Free open-source (Navigator)', tookan: 'Proprietary' },
 { feature: 'Proof of Delivery (POD)', fleetbase: true, tookan: true },
 { feature: 'Customer Notifications', fleetbase: true, tookan: true },
 { feature: 'White-Label Branding', fleetbase: true, tookan: 'Paid add-on' },
 { feature: 'Full REST API', fleetbase: true, tookan: 'Limited' },
 { feature: 'Webhooks', fleetbase: true, tookan: true },
 { feature: 'Extensions / Marketplace', fleetbase: true, tookan: 'Limited integrations' },
 { feature: 'Multi-Tenant / Multi-Org', fleetbase: true, tookan: 'Enterprise only' },
 { feature: 'Warehouse Management (WMS)', fleetbase: 'Pallet WMS included', tookan: false },
 { feature: 'Storefront / Online Ordering', fleetbase: true, tookan: false },
 { feature: 'Accounting / Ledger', fleetbase: true, tookan: false },
 { feature: 'Custom Extensions / SDK', fleetbase: true, tookan: false },
 { feature: 'Data Ownership', fleetbase: 'Full — self-host or export', tookan: 'Vendor-controlled' },
 { feature: 'Community Support', fleetbase: 'Discord + GitHub', tookan: 'Email only' },
 { feature: 'Enterprise SLA Support', fleetbase: true, tookan: true },
];

function Cell({ value }: { value: string | boolean }) {
 if (value === true) return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
 if (value === false) return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
 return <span className="text-sm text-center block">{value}</span>;
}

export default function VsTookanPage() {
 return (
 <div className="min-h-screen">
 <SoftwareApplicationSchema
 name="Tookan"
 url="https://tookanapp.com"
 description="Delivery management and dispatch software with per-agent and per-task pricing — closed-source SaaS."
 />

 {/* Hero */}
 <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
 <div className="container max-w-5xl text-center space-y-6">
 <Breadcrumbs
 className="justify-center [&_ol]:justify-center"
 items={[
 { label: 'Compare', href: '/compare' },
 { label: 'Fleetbase vs Tookan', href: '/compare/vs-tookan' },
 ]}
 />
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Comparison
 </div>
 <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
 Fleetbase vs Tookan
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Tookan charges per agent and per task — costs that compound fast as your team grows. Fleetbase is the open-source alternative with predictable usage-based pricing, self-hosting, and a full logistics platform built in.
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
 <h2 className="text-2xl font-bold mb-10 text-center">Why teams switch from Tookan to Fleetbase</h2>
 <div className="grid gap-6 md:grid-cols-3">
 {[
 {
 title: 'No per-agent pricing',
 description:
 "Tookan charges per agent — the more drivers you add, the more you pay. Fleetbase is $29 a month plus $5 per driver or vehicle, with unlimited orders and unlimited back-office users.",
 },
 {
 title: 'Open source & self-hostable',
 description:
 "Tookan is closed-source and cloud-only. Fleetbase is fully open source under AGPL. Deploy on your own servers, keep your data, and never worry about vendor lock-in.",
 },
 {
 title: 'A complete logistics OS',
 description:
 'Tookan handles dispatch. Fleetbase includes dispatch, WMS (Pallet), storefront, accounting (Ledger), driver app (Navigator), and an extensions marketplace — one platform for everything.',
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
 <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-1/4">Tookan</th>
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
 <td className="px-4 py-3 text-center"><Cell value={row.fleetbase} /></td>
 <td className="px-4 py-3 text-center"><Cell value={row.tookan} /></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 md:py-20 border-t">
 <div className="container max-w-3xl text-center space-y-6">
 <h2 className="text-3xl font-bold tracking-tight">Ready to switch from Tookan?</h2>
 <p className="text-lg text-muted-foreground">
 Migrate your operations to Fleetbase in days. Our team provides free migration support for teams coming from Tookan.
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
