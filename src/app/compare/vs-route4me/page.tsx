import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
 title: 'Fleetbase vs Route4Me | Open-Source Route4Me Alternative',
 description:
 'The open-source Route4Me alternative: dispatch, fleet management, a driver app and route optimization, with no per-route fees.',
 keywords: [
 'Route4Me alternative',
 'Fleetbase vs Route4Me',
 'open source route optimization software',
 'route planning software alternative',
 'Route4Me competitor',
 'cheaper than Route4Me',
 'fleet management with route optimization',
 ],
 openGraph: {
 title: 'Fleetbase vs Route4Me | Open-Source Route4Me Alternative',
 description:
 'Compare Fleetbase vs Route4Me. Full dispatch, fleet management, driver app, and route optimization — no per-route fees.',
 images: [
 {
 url: '/og?title=Fleetbase%20vs%20Route4Me&eyebrow=Compare&subtitle=Open-source%20alternative%20with%20dispatch%2C%20fleet%20management%2C%20driver%20app%2C%20and%20route%20optimization%20built%20in.',
 width: 1200,
 height: 630,
 alt: 'Fleetbase vs Route4Me — open-source Route4Me alternative',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Fleetbase vs Route4Me',
 description: 'Open-source alternative with dispatch, fleet management, driver app, and route optimization built in.',
 images: [
 '/og?title=Fleetbase%20vs%20Route4Me&eyebrow=Compare&subtitle=Open-source%20alternative%20with%20dispatch%2C%20fleet%20management%2C%20driver%20app%2C%20and%20route%20optimization%20built%20in.',
 ],
 },
 alternates: { canonical: 'https://fleetbase.io/compare/vs-route4me' },
};

type FeatureRow = {
 feature: string;
 fleetbase: string | boolean;
 route4me: string | boolean;
 note?: string;
};

const COMPARISON: FeatureRow[] = [
 { feature: 'Open Source', fleetbase: true, route4me: false },
 { feature: 'Self-Hosted Deployment', fleetbase: true, route4me: false },
 { feature: 'Cloud Hosting', fleetbase: true, route4me: true },
 { feature: 'Free Tier', fleetbase: 'Free trial + open source', route4me: '7-day trial only' },
 { feature: 'Pricing Model', fleetbase: '$29/mo + $5 per driver or vehicle', route4me: 'Per-route + per-driver fees' },
 { feature: 'Route Optimization', fleetbase: true, route4me: true },
 { feature: 'Real-Time GPS Tracking', fleetbase: true, route4me: true },
 { feature: 'Automated Dispatch', fleetbase: true, route4me: 'Limited' },
 { feature: 'Driver Mobile App', fleetbase: 'Free open-source (Navigator)', route4me: 'Proprietary (extra cost)' },
 { feature: 'Proof of Delivery (POD)', fleetbase: true, route4me: true },
 { feature: 'Customer Notifications', fleetbase: true, route4me: 'Paid add-on' },
 { feature: 'Fleet Management', fleetbase: 'Full Fleet-Ops module', route4me: 'Basic' },
 { feature: 'Driver Management', fleetbase: true, route4me: 'Limited' },
 { feature: 'Vehicle Management', fleetbase: true, route4me: 'Limited' },
 { feature: 'Full REST API', fleetbase: true, route4me: 'Limited' },
 { feature: 'Webhooks', fleetbase: true, route4me: 'Limited' },
 { feature: 'White-Label Branding', fleetbase: true, route4me: false },
 { feature: 'Warehouse Management (WMS)', fleetbase: 'Pallet WMS included', route4me: false },
 { feature: 'Storefront / Online Ordering', fleetbase: true, route4me: false },
 { feature: 'Accounting / Ledger', fleetbase: true, route4me: false },
 { feature: 'Multi-Tenant / Multi-Org', fleetbase: true, route4me: 'Enterprise only' },
 { feature: 'Custom Extensions / SDK', fleetbase: true, route4me: false },
 { feature: 'Data Ownership', fleetbase: 'Full — self-host or export', route4me: 'Vendor-controlled' },
 { feature: 'Community Support', fleetbase: 'Discord + GitHub', route4me: 'Email only' },
];

function Cell({ value }: { value: string | boolean }) {
 if (value === true) return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
 if (value === false) return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
 return <span className="text-sm text-center block">{value}</span>;
}

export default function VsRoute4MePage() {
 return (
 <div className="min-h-screen">
 <SoftwareApplicationSchema
 name="Route4Me"
 url="https://route4me.com"
 description="Route planning and optimization software focused on last-mile delivery routing — closed-source SaaS."
 />

 {/* Hero */}
 <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
 <div className="container max-w-5xl text-center space-y-6">
 <Breadcrumbs
 className="justify-center [&_ol]:justify-center"
 items={[
 { label: 'Compare', href: '/compare' },
 { label: 'Fleetbase vs Route4Me', href: '/compare/vs-route4me' },
 ]}
 />
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Comparison
 </div>
 <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
 Fleetbase vs Route4Me
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Route4Me is a route planning tool. Fleetbase is a complete open-source fleet management and TMS platform — with route optimization built in, plus dispatch, driver management, WMS, storefront, and accounting.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/onboard" rel="nofollow">
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
 <h2 className="text-2xl font-bold mb-10 text-center">Why teams choose Fleetbase over Route4Me</h2>
 <div className="grid gap-6 md:grid-cols-3">
 {[
 {
 title: 'More than route planning',
 description:
 'Route4Me optimizes routes. Fleetbase does that and much more — full dispatch, real-time tracking, driver management, POD capture, WMS, and storefront all in one platform.',
 },
 {
 title: 'Open source & self-hostable',
 description:
 'Route4Me is closed-source and cloud-only. Fleetbase is fully open source under AGPL. Deploy on your own infrastructure and keep full control of your data.',
 },
 {
 title: 'No per-route fees',
 description:
 "Route4Me charges per route and per driver. Fleetbase never charges per route or per order — $29 a month plus $5 per driver or vehicle, however much you run.",
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
 <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-1/4">Route4Me</th>
 </tr>
 </thead>
 <tbody>
 {COMPARISON.map((row, i) => (
 <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
 <td className="px-4 py-3 font-medium">
 {row.feature}
 {row.note && <span className="block text-xs text-muted-foreground mt-0.5">{row.note}</span>}
 </td>
 <td className="px-4 py-3 text-center"><Cell value={row.fleetbase} /></td>
 <td className="px-4 py-3 text-center"><Cell value={row.route4me} /></td>
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
 <h2 className="text-3xl font-bold tracking-tight">Ready to switch from Route4Me?</h2>
 <p className="text-lg text-muted-foreground">
 Get route optimization plus a complete fleet management platform. Our team provides free onboarding for teams migrating from Route4Me.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/onboard" rel="nofollow">
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
