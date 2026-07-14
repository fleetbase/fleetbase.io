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
    'Join the Fleetbase Partner Program — resell and implement, white-label the platform, or build integrations. A flat 20% partner margin on the open-source logistics operating system.',
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
    description: 'Resell, white-label, or integrate. Build a business on the open-source logistics platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Program | Fleetbase',
    description: 'Resell, white-label, or integrate. Build a business on the open-source logistics platform.',
  },
  alternates: { canonical: 'https://fleetbase.io/partners' },
};

const STATS = [
  { value: '20%', label: 'Partner margin' },
  { value: '8,000+', label: 'Active instances' },
  { value: '100%', label: 'Your services revenue' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const MAIN_TRACKS = [
  {
    icon: Handshake,
    eyebrow: 'Resell + Implement',
    title: 'Solution Partner',
    description:
      'Sell, deploy, and support Fleetbase under our brand. Buy licenses and cloud at 20% off, resell them to your customers, and keep 100% of your services revenue.',
    features: ['20% license discount', 'Keep 100% of services', 'Directory listing', 'Certification', 'Deal registration'],
    idealFor: 'IT services firms, system integrators, and logistics consultancies.',
    highlight: false,
  },
  {
    icon: Palette,
    eyebrow: 'Rebrand',
    title: 'White-Label / OEM',
    description:
      'Ship Fleetbase as your own product — your brand on the console, driver app, and customer app. A Commercial License keeps your code private and lets you own the customer.',
    features: ['Full rebrand', 'Commercial license', 'Own the customer', 'Roadmap access', 'Priority support'],
    idealFor: 'Software vendors, telematics providers, and teams launching a branded logistics product.',
    highlight: true,
  },
];

const WHY_PARTNER = [
  { title: 'Proven demand', description: '8,000+ active instances across six logistics industries — a platform the market already trusts.' },
  { title: 'No per-seat economics', description: 'Cost scales with usage, not headcount — easy to package and price for your customers.' },
  { title: 'Own the stack', description: 'Open-source core, deployable anywhere — no black box, no lock-in to explain away.' },
];

const SEGMENTS = [
  { icon: Truck, title: 'Courier & Parcel', description: 'Last-mile delivery, route optimization, and proof of delivery.' },
  { icon: ShoppingCart, title: 'E-commerce & Retail', description: 'Online orders that auto-dispatch to drivers, with a branded ordering app.' },
  { icon: UtensilsCrossed, title: 'Food & Grocery', description: 'On-demand and scheduled delivery with a white-label app.' },
  { icon: HeartPulse, title: 'Healthcare & Pharmacy', description: 'Compliant, trackable deliveries with chain of custody.' },
  { icon: Recycle, title: 'Waste & Recycling', description: 'Scheduled routes, asset tracking, and proof at each stop.' },
  { icon: Building2, title: 'Trucking, Freight & Gov', description: 'Long-haul dispatch, rate engines, and ERP integration.' },
];

const TERMS = [
  { model: 'Solution Partner', pay: '20% off Fleetbase licenses & cloud', earn: 'Resale margin + 100% of your services', license: 'Bought from Fleetbase, per deal' },
  { model: 'White-Label / OEM', pay: 'Commercial License + platform', earn: 'Your own pricing — keep the spread', license: 'Fleetbase Commercial License' },
];

const BENEFITS = [
  { icon: Percent, title: 'Partner discount', description: 'A flat 20% margin on all licenses and cloud you resell.' },
  { icon: Star, title: 'Directory listing', description: 'Featured placement in the partner directory.' },
  { icon: Megaphone, title: 'Co-marketing', description: 'Joint case studies, webinars, and events.' },
  { icon: BookOpen, title: 'Technical enablement', description: 'Docs, sandbox environments, and engineering support.' },
  { icon: ShieldCheck, title: 'Deal registration', description: 'Register and protect your deals, plus lead sharing.' },
  { icon: BadgeCheck, title: 'Certification', description: 'Official certification for your technical staff.' },
];

const SUPPORT_MARGINS = [
  { tier: 'Business · 72h SLA', list: '$1,000 / mo', y1: '$100 / mo', renewal: '$50 / mo' },
  { tier: 'Developer · 24h SLA', list: '$3,500 / mo', y1: '$350 / mo', renewal: '$175 / mo' },
  { tier: 'Fractional CTO', list: '$5,000 / mo', y1: '$500 / mo', renewal: '$250 / mo' },
  { tier: 'Enterprise+ · custom', list: 'Contact us', y1: '10%', renewal: '5%' },
];

const IMPLEMENTATION = [
  { title: 'Core deployment', description: 'Full install on our cloud or yours — config, branding, go-live. From $2,500.' },
  { title: 'Navigator publishing', description: "White-label the driver app and publish it to the app stores. Quoted." },
  { title: 'Storefront publishing', description: 'White-label the customer app and publish it to the app stores. Quoted.' },
];

const STEPS = [
  { n: '1', title: 'Apply', description: 'Tell us about your business and which model fits.' },
  { n: '2', title: 'Onboard', description: 'We align on model and margin and set you up in the partner portal.' },
  { n: '3', title: 'Certify & list', description: 'Get certified and listed in the partner directory.' },
  { n: '4', title: 'Sell & grow', description: 'Register deals, resell at 20%, and deliver services.' },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="section-padding pb-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open source · AGPL-3.0 · 8,000+ instances
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            The Fleetbase <span className="text-primary">Partner Program</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Resell it, rebrand it, or build on it. Grow a business on the open-source logistics platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                Apply to partner <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#tracks">See the tracks</Link>
            </Button>
          </div>

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
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> The program
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Two ways to partner</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Pick the model that fits how you sell. Many partners start as a Solution Partner and grow into White-Label.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
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
                  <span className="font-medium text-foreground">Ideal for </span>{t.idealFor}
                </p>
                <Button className="w-full" variant={t.highlight ? 'default' : 'outline'} asChild>
                  <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Apply <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Integration Partner — the third, integrations-only track */}
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
                <p className="mb-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Build an integration into Fleetbase — payments, telematics, ERP, mapping, or e-commerce — and reach operators through the Extensions Marketplace. You build it; we help you list and promote it.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['Marketplace listing', 'Sandbox & support', 'Co-marketing', 'Directory listing'].map((f) => (
                    <span key={f} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">{f}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for </span>
                  SaaS and API providers, telematics and IoT hardware, and payment, mapping, or ERP vendors.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:w-48">
                <Button asChild>
                  <Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/developers">Developer docs</Link>
                </Button>
                <Link href="/platform/extensions" className="text-center text-sm text-primary hover:underline underline-offset-4">
                  Browse marketplace →
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
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Fleetbase runs across every kind of logistics operation — a broad market, from single fleets to marketplaces.
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
          <p className="mx-auto mt-8 max-w-2xl rounded-xl border bg-muted/20 p-5 text-center text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Your ideal customer: </span>
            operators running 10 to 1,000+ vehicles who&apos;ve outgrown spreadsheets, plus marketplaces and 3PLs who want to own their platform instead of renting per-seat SaaS.
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
            Licenses always come from Fleetbase. The core is open-source and free to self-host — but reselling official licenses or shipping a rebranded product runs through us, so every renewal flows back to you.
          </p>
        </div>
      </section>

      {/* ── Partner benefits ── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What you get</h2>
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Resell support, keep your services</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Support is a product you resell at a recurring margin. Implementation stays yours — we refer it to partners, not compete for it.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b bg-muted/40 text-left">
                  <th className="px-4 py-3 font-semibold">Support tier</th>
                  <th className="px-4 py-3 font-semibold text-right">List</th>
                  <th className="px-4 py-3 font-semibold text-right">Year 1 (10%)</th>
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
          <p className="mt-3 text-sm text-muted-foreground">10% in year one, 5% on renewals, while you manage the account.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {IMPLEMENTATION.map((i) => (
              <div key={i.title} className="rounded-xl border bg-card p-6">
                <h3 className="mb-2 font-semibold">{i.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Deliver these yourself and keep 100%, or resell at the 20% partner margin.</p>
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
              <div key={s.n} className="rounded-xl border bg-card p-6">
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
                Ready to partner?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Tell us your business and the model you have in mind. We&apos;ll be in touch within 2 business days.
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
