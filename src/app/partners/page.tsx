import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Handshake, Palette, Puzzle, Check, Percent, Star, Megaphone,
  BookOpen, ShieldCheck, BadgeCheck, Truck, ShoppingCart, UtensilsCrossed,
  HeartPulse, Recycle, Building2, Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const APPLY_URL = 'https://cal.com/shivthakker/enquiry';

export const metadata: Metadata = {
  title: 'Partner Program | Fleetbase',
  description:
    'Join the Fleetbase Partner Program — resell and implement as a Solution Partner, rebrand the platform as a White-Label / OEM Partner, or build integrations as an Integration Partner. A flat 20% partner margin on the open-source logistics operating system.',
  keywords: [
    'Fleetbase partners',
    'fleetbase partner program',
    'logistics reseller program',
    'white label logistics platform',
    'OEM logistics software',
    'fleetbase integration partner',
    'open source logistics partners',
  ],
  openGraph: {
    title: 'Partner Program | Fleetbase',
    description:
      'Two ways to partner — Solution Partner (resell + implement) and White-Label / OEM (rebrand) — plus Integration Partners who build into Fleetbase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Program | Fleetbase',
    description:
      'Resell, white-label, or integrate. Build a profitable practice on the open-source logistics operating system.',
  },
  alternates: { canonical: 'https://fleetbase.io/partners' },
};

const STATS = [
  { value: '20%', label: 'Partner margin' },
  { value: '8,000+', label: 'Active instances' },
  { value: '100%', label: 'Of your services revenue' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const MAIN_TRACKS = [
  {
    icon: Handshake,
    eyebrow: 'Resell + Implement',
    title: 'Solution Partner',
    description:
      "Sell, deploy, and support Fleetbase under the Fleetbase brand. Buy licenses and cloud at a 20% partner discount and resell them to your customers alongside your own implementation, customisation, and support — keeping 100% of your services revenue. Fleetbase stays the platform; you're the trusted expert who makes it work.",
    features: ['20% license discount', 'Keep 100% of services', 'Directory listing', 'Certification', 'Deal registration'],
    idealFor: 'IT services firms, system integrators, logistics consultancies, and digital transformation agencies.',
    highlight: false,
  },
  {
    icon: Palette,
    eyebrow: 'Rebrand',
    title: 'White-Label / OEM Partner',
    description:
      'Ship Fleetbase as your own product — your brand on the web console, the Navigator driver app, and the Storefront customer app. This requires a Fleetbase Commercial License (FCL), which waives the AGPL obligations and keeps your custom code private. You own the brand and the customer relationship; we power the platform underneath.',
    features: ['Full rebrand', 'Commercial license (FCL)', 'Own the customer', 'Roadmap access', 'Priority support'],
    idealFor: 'Software vendors, telematics providers, and companies launching a branded logistics product without building one from scratch.',
    highlight: true,
  },
];

const WHY_PARTNER = [
  {
    title: 'Proven demand',
    description: "8,000+ active instances across six logistics industries — you're selling a platform the market already trusts.",
  },
  {
    title: 'No per-seat economics',
    description: 'Cost scales with usage, not headcount — easy to package and price for your customers.',
  },
  {
    title: 'Own the stack',
    description: 'Open-source core, auditable and deployable anywhere — no black box, no lock-in to explain away.',
  },
];

const SEGMENTS = [
  { icon: Truck, title: 'Courier & Parcel', description: 'Last-mile delivery, multi-stop route optimization and proof of delivery — the highest-volume Fleetbase use case.' },
  { icon: ShoppingCart, title: 'E-commerce & Retail', description: 'Storefront plus fulfillment: online orders auto-dispatch to drivers, with a branded customer ordering app.' },
  { icon: UtensilsCrossed, title: 'Food & Grocery', description: 'On-demand and scheduled delivery, live order tracking, and a white-label app for restaurants and grocers.' },
  { icon: HeartPulse, title: 'Healthcare & Pharmacy', description: 'Compliant, trackable deliveries — chain of custody, temperature-sensitive routing and audit trails.' },
  { icon: Recycle, title: 'Waste & Recycling', description: 'Scheduled collection routes, bin and asset tracking, and service verification with proof at each stop.' },
  { icon: Building2, title: 'Trucking, Freight & Government', description: 'Long-haul dispatch, contracts and rate engines, asset and maintenance management, and ERP integration.' },
];

const TERMS = [
  {
    model: 'Solution Partner',
    pay: '20% off list on Fleetbase licenses & cloud',
    earn: 'Your resale margin plus 100% of your implementation & support revenue',
    license: 'Purchased from Fleetbase, per deal',
  },
  {
    model: 'White-Label / OEM',
    pay: 'Commercial License (FCL) + platform',
    earn: 'Your own pricing to end customers — you keep the spread',
    license: 'Fleetbase Commercial License',
  },
];

const BENEFITS = [
  { icon: Percent, title: 'Partner discount', description: 'A flat 20% margin on all Fleetbase licenses and cloud subscriptions you resell.' },
  { icon: Star, title: 'Directory listing', description: 'Featured placement in the Fleetbase partner directory, visible to every prospect.' },
  { icon: Megaphone, title: 'Co-marketing', description: 'Joint case studies, blog posts, webinars and event appearances to grow your reach.' },
  { icon: BookOpen, title: 'Technical enablement', description: 'Documentation, sandbox environments and direct engineering support.' },
  { icon: ShieldCheck, title: 'Deal registration', description: 'Register and protect your deals, plus lead sharing through the partner portal.' },
  { icon: BadgeCheck, title: 'Certification', description: 'Official Fleetbase certification for your implementation and technical staff.' },
];

const SUPPORT_MARGINS = [
  { tier: 'Business · 72h SLA', list: '$1,000 / mo', y1: '$100 / mo', renewal: '$50 / mo' },
  { tier: 'Developer · 24h SLA', list: '$3,500 / mo', y1: '$350 / mo', renewal: '$175 / mo' },
  { tier: 'Fractional CTO · full-time', list: '$5,000 / mo', y1: '$500 / mo', renewal: '$250 / mo' },
  { tier: 'Enterprise+ · custom', list: 'Contact us', y1: '10%', renewal: '5%' },
];

const IMPLEMENTATION = [
  { title: 'Core deployment', description: "Full install on our cloud or your customer's infrastructure — CI/CD, environment config, branding and go-live handover. From $2,500 one-time." },
  { title: 'Navigator publishing', description: "White-label the driver app and publish it to the App Store & Google Play under your customer's brand. Quoted." },
  { title: 'Storefront publishing', description: 'White-label the customer ordering app and publish it to the app stores as their own branded storefront. Quoted.' },
];

const STEPS = [
  { n: '1', title: 'Apply', description: 'Tell us about your business and which model fits — resell, white-label, integrate, or a mix.' },
  { n: '2', title: 'Qualify & onboard', description: 'We align on model, margin and enablement, and set you up in the partner portal.' },
  { n: '3', title: 'Certify & list', description: "Your team gets certified on the platform and you're listed in the partner directory." },
  { n: '4', title: 'Sell & grow', description: 'Register deals, resell licenses at 20%, and deliver services — with our engineering team behind you.' },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="section-padding pb-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open source · AGPL-3.0 · 8,000+ active instances
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            The Fleetbase <span className="text-primary">Partner Program</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Two ways to partner, one platform you can sell, deploy, and brand as your own — plus a track for building integrations into Fleetbase. Everything you need to build a profitable practice on the open-source logistics operating system.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                Apply to partner <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#tracks">See partner tracks</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 bg-card px-4 py-6 text-center">
                <span className="text-3xl font-bold tracking-tight">{s.value}</span>
                <span className="text-xs leading-snug text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two main tracks ── */}
      <section id="tracks" className="section-padding scroll-mt-24">
        <div className="container">
          <div className="mb-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> The program
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Two ways to partner</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Pick the model that fits how you go to market. Both run on the same platform — and partners often start as Solution Partners and grow into White-Label as their book of business scales.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {MAIN_TRACKS.map((t) => (
              <div
                key={t.title}
                className={`flex flex-col rounded-2xl border bg-card p-8 ${t.highlight ? 'border-primary shadow-lg shadow-primary/10' : ''}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <t.icon className="size-5 text-primary" />
                  </div>
                  <span className="rounded-full border bg-muted/40 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.eyebrow}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight">{t.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{t.description}</p>
                <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto mb-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for: </span>{t.idealFor}
                </p>
                <Button className="w-full" variant={t.highlight ? 'default' : 'outline'} asChild>
                  <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Become a {t.title.replace(' / OEM', '')} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Integration Partner — the third, purely-integrations track */}
          <div className="mt-6 rounded-2xl border border-dashed bg-muted/20 p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <Puzzle className="size-5 text-primary" />
                  </div>
                  <span className="rounded-full border bg-background px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Integrate
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight">Integration Partner</h3>
                <p className="mb-4 max-w-3xl leading-relaxed text-muted-foreground">
                  Purely integrations into Fleetbase. Connect your product to the platform — payments, telematics and GPS, ERP / CRM / WMS, mapping and routing, messaging, or e-commerce — and reach Fleetbase operators through the Extensions Marketplace. There are no licenses to resell: you build the integration, and we help you list, document, and co-market it.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['List in the Extensions Marketplace', 'Technical enablement & sandbox', 'Co-marketing', 'Directory listing'].map((f) => (
                    <span key={f} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">{f}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for: </span>
                  SaaS & API providers, telematics and IoT hardware, payment gateways, mapping providers, and ERP / CRM vendors.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:w-52">
                <Button asChild>
                  <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Become an Integration Partner
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/developers">Developer docs</Link>
                </Button>
                <Link href="/platform/extensions" className="text-center text-sm text-primary hover:underline underline-offset-4">
                  Browse the marketplace →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why partner ── */}
      <section className="section-padding bg-muted/20 border-y">
        <div className="container max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {WHY_PARTNER.map((w) => (
              <div key={w.title}>
                <h3 className="mb-2 font-semibold">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who you sell to ── */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> Who you sell to
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A market you can build on</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Fleetbase runs across every kind of logistics operation, so your addressable market is broad — from single-fleet operators to multi-vendor marketplaces.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="rounded-xl border bg-card p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border bg-muted/20 p-5 text-center text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Your ideal customer: </span>
            operators running anywhere from 10 to 1,000+ vehicles who have outgrown spreadsheets or stitched-together tools, plus multi-vendor marketplaces and 3PLs — any team that wants to own its logistics platform rather than rent per-seat SaaS.
          </p>
        </div>
      </section>

      {/* ── Commercial terms ── */}
      <section className="section-padding bg-muted/20 border-y">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> Commercial terms
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How the economics work</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Simple and transparent. Solution Partners earn a flat 20% on everything they resell and keep all their services revenue. White-Label Partners license the platform and price to their own customers.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b bg-muted/40 text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">What you pay</th>
                  <th className="px-4 py-3 font-semibold">What you earn</th>
                  <th className="px-4 py-3 font-semibold">License source</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {TERMS.map((r) => (
                  <tr key={r.model}>
                    <td className="px-4 py-4 font-medium">{r.model}</td>
                    <td className="px-4 py-4 text-muted-foreground">{r.pay}</td>
                    <td className="px-4 py-4 text-muted-foreground">{r.earn}</td>
                    <td className="px-4 py-4 text-muted-foreground">{r.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The license always comes from Fleetbase. Fleetbase Core is open-source under AGPL-3.0 and free to self-host — but reselling official licenses and cloud, or shipping a rebranded product, runs through us. That&apos;s what keeps every renewal and upgrade flowing back to you as the partner, deal after deal.
          </p>
        </div>
      </section>

      {/* ── Partner benefits ── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to build a practice</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-xl border bg-card p-6">
                <b.icon className="mb-3 size-5 text-primary" />
                <h3 className="mb-2 font-semibold">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support & services ── */}
      <section className="section-padding bg-muted/20 border-y">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> Support & services
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Resell support & keep your services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Support is a product you resell at a recurring margin. Implementation and custom work stay yours — we route that to partners rather than compete for it.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b bg-muted/40 text-left">
                  <th className="px-4 py-3 font-semibold">Fleetbase support tier</th>
                  <th className="px-4 py-3 font-semibold text-right">List price</th>
                  <th className="px-4 py-3 font-semibold text-right">Year one (10%)</th>
                  <th className="px-4 py-3 font-semibold text-right">Renewals (5%)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {SUPPORT_MARGINS.map((r) => (
                  <tr key={r.tier}>
                    <td className="px-4 py-3 font-medium">{r.tier}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{r.list}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{r.y1}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{r.renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Full 10% in year one, 5% on renewals — for as long as you remain the partner of record and process the customer&apos;s renewal.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {IMPLEMENTATION.map((i) => (
              <div key={i.title} className="rounded-xl border bg-card p-6">
                <h3 className="mb-2 font-semibold">{i.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Deliver these yourself and keep 100%, or resell Fleetbase delivery at the standard 20% partner margin when you&apos;d rather we handle it — useful for app-store publishing and complex deployments.
          </p>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="section-padding">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> How we work
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From first call to first deal</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-xl border bg-card p-6">
                <div className="mb-4 flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {s.n}
                </div>
                <h3 className="mb-2 font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="mb-4 flex justify-center">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                  <Rocket className="size-5 text-primary" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Ready to partner with Fleetbase?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Tell us about your business and the model you have in mind — resell, white-label, or integrate. Our partnerships team will be in touch within 2 business days.
              </p>
              <Button size="lg" asChild>
                <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  Apply to partner <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
