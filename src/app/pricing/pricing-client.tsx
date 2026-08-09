'use client';

import {
  ArrowRight, Building2, Check, Cloud, Key, Server, Sparkles, X, Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { track } from '@/lib/analytics/posthog';
import { type BillingInterval, formatCents, V3_RATES } from '@/lib/pricing/v3';
import { cn } from '@/lib/utils';

import { PRICING_FAQS } from './faqs';
import PricingCalculator from './pricing-calculator';

// ─── The plan ─────────────────────────────────────────────────────────────────
/*
 * The same four strings the product shows at checkout (`plans_v3`
 * → `highlight_features`). Site and product must not disagree, so edit them in
 * both places or in neither.
 */
const PLAN_FEATURES = [
  'Unlimited orders — never pay a per-delivery fee, however many you run',
  'Only $5 a month per driver or vehicle — remove one and stop paying for it',
  'Everything included: dispatch, routing, live tracking, driver app, accounting, e-commerce suite and an AI co-pilot',
  'No tiers, no add-ons, no upsells — every feature from day one',
];

/** Unlimited and free, at any volume. Deliberately excludes the three meters. */
const UNLIMITED = [
  'Orders', 'Deliveries', 'Users', 'Webhook endpoints', 'API credentials',
  'Contacts', 'Places', 'Vendors', 'Service rates', 'Service areas and zones',
];

/*
 * The three genuinely usage-based lines. This table is the reason the model is
 * credible, so it is shown on the page rather than tucked behind a disclosure.
 */
const USAGE_METERS = [
  {
    meter: 'Gateway-paid invoices',
    rate: '$0.10 each',
    allowance: 'None — every invoice counts',
    detail: 'Invoices settled through a connected payment gateway. Invoices you mark paid yourself are free.',
  },
  {
    meter: 'API calls',
    rate: '$0.25 per 100,000',
    allowance: 'First 100,000 free each period',
    detail: 'Counted in whole blocks and rounded down — 99,999 calls in a period cost nothing.',
  },
  {
    meter: 'Webhook sends',
    rate: '$0.25 per 100,000',
    allowance: 'First 100,000 free each period',
    detail: 'Counted in whole blocks and rounded down, the same way as API calls.',
  },
];

// ─── Support Tiers ────────────────────────────────────────────────────────────
const SUPPORT_TIERS = [
  {
    name: 'Community', price: 'Free', sla: 'None', colorClass: 'bg-green-500',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Discord / GitHub Support', included: true },
      { label: 'Email Support', included: false },
      { label: 'SLA Guarantee', included: false },
      { label: 'Priority Bug Fixes', included: false },
      { label: 'Configuration Assistance', included: false },
    ],
    cta: 'Join Discord', ctaHref: 'https://discord.com/invite/HnTqQ6zAVn',
  },
  {
    name: 'Business', price: '$1,000/mo', sla: '72h SLA', colorClass: 'bg-blue-500',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Discord / GitHub Support', included: true },
      { label: 'Automatic Security Patches', included: true },
      { label: 'Email Support (72h SLA)', included: true },
      { label: 'Priority Bug Fixes', included: true },
      { label: 'Configuration Assistance', included: true },
    ],
    cta: 'Talk to Sales', ctaHref: '/contact/sales', highlight: true,
  },
  {
    name: 'Developer', price: '$3,500/mo', sla: '24h SLA', colorClass: 'bg-purple-500',
    features: [
      { label: 'Everything in Business', included: true },
      { label: 'Email + Private Discord + Weekly Phone', included: true },
      { label: 'Email Support (24h SLA)', included: true },
      { label: 'Full Configuration Assistance', included: true },
      { label: 'Full Technical Troubleshooting', included: true },
      { label: 'Private Discord with CTO', included: true },
    ],
    cta: 'Talk to Sales', ctaHref: '/contact/sales',
  },
  {
    name: 'Fractional CTO', price: '$5,000/mo', sla: 'Dedicated', colorClass: 'bg-orange-500',
    features: [
      { label: 'Dedicated Engineer', included: true },
      { label: '2hr Weekly Calls with CTO', included: true },
      { label: 'Proactive Monitoring', included: true },
      { label: 'Release Management', included: true },
      { label: 'Strategic Reviews & PR Reviews', included: true },
      { label: 'Custom Roadmap Collaboration', included: true },
    ],
    cta: 'Talk to Sales', ctaHref: 'https://cal.com/shivthakker/enquiry',
  },
];

// PRICING-8: proof metrics (from platform page — confirm figures with founders before publishing).
const PROOF_STATS = [
  { value: '10M+', label: 'Orders processed' },
  { value: '8,000+', label: 'Active deployments' },
  { value: '50K+', label: 'Fleet vehicles tracked' },
];

// PRICING-1: "Which one are you?" routing chooser.
const CHOOSER = [
  {
    icon: Cloud,
    title: 'I want it managed for me',
    body: 'Fully hosted Fleetbase Cloud. Automatic updates, no infrastructure to run. Start in minutes.',
    href: '#cloud',
    cta: 'See Cloud pricing',
  },
  {
    icon: Server,
    title: "I'll run it myself",
    body: 'Self-host the open-source platform on your own infrastructure. One-time $2,500 setup, full data ownership.',
    href: '#self-hosted',
    cta: 'See self-hosting',
  },
  {
    icon: Building2,
    title: 'I need customisation or scale',
    body: 'Custom SLAs, professional services, or bespoke development for your operation.',
    href: '#enterprise',
    cta: 'Talk to Sales',
  },
];

const ONBOARD_URL = 'https://console.fleetbase.io/onboard';
const SALES_URL = 'https://cal.com/shivthakker/enquiry';

export default function PricingClient() {
  const [billing, setBilling] = useState<BillingInterval>('month');

  const annual = billing === 'year';
  const rates = V3_RATES[billing];
  const period = annual ? 'year' : 'month';

  // The analytics schema speaks in 'monthly'/'annual'; the rate table keys on
  // Stripe's 'month'/'year'. Translate at the boundary rather than either side.
  const asCycle = (interval: BillingInterval) => (interval === 'year' ? 'annual' : 'monthly');

  useEffect(() => {
    track('pricing_viewed', { billing_cycle: asCycle(billing) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setBillingCycle = (cycle: BillingInterval) => {
    if (cycle === billing) return;
    setBilling(cycle);
    track('pricing_billing_toggled', { to_cycle: asCycle(cycle) });
  };

  const BillingToggle = () => (
    <div className="inline-flex items-center gap-1 rounded-full border bg-muted/30 p-1">
      <button
        onClick={() => setBillingCycle('month')}
        className={cn(
          'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
          !annual ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingCycle('year')}
        className={cn(
          'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
          annual ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Annual
        <span className="ml-2 rounded-full bg-green-500/20 px-1.5 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
          Save 20%
        </span>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col">
      {/* ── Hero: the price, plainly ── */}
      <section className="section-padding pb-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="text-primary">●</span>
            <span>One plan. Every module. No per-delivery fee.</span>
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl">
            $29 a month, plus{' '}
            <span className="text-primary">$5 per driver or vehicle.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            That&apos;s the whole price list. Orders are free at any volume — you never pay a
            per-delivery fee, however many you run.
          </p>

          <div className="flex flex-col items-center gap-2">
            <Button size="lg" asChild>
              <Link
                href={ONBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="start_free_trial"
                data-cta-location="pricing_hero"
                data-cta-variant="primary"
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm font-medium">Try the full platform, free for 7 days.</p>
            <p className="text-xs text-muted-foreground">
              Every module included from day one. Cancel any time.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING-8: Trust / proof bar under the hero ── */}
      <section className="border-y bg-muted/20">
        <div className="container mx-auto max-w-4xl py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {PROOF_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tracking-tight md:text-3xl">{s.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING-1: "Which one are you?" chooser ── */}
      <section className="section-padding pb-0">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold">Which one are you?</h2>
            <p className="text-muted-foreground">Pick the path that fits — we&apos;ll take you straight to it.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {CHOOSER.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10">
                  <c.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold">{c.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {c.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── The plan ── */}
      <section id="cloud" className="section-padding scroll-mt-24">
        <div className="container">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold">Fleetbase Cloud</h2>
            <p className="text-muted-foreground">
              Fully managed. Automatic updates. One plan, whatever size you are.
            </p>
          </div>

          <div className="mx-auto mb-8 flex max-w-2xl items-center justify-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-center text-sm font-medium">
            <Sparkles className="size-4 shrink-0 text-primary" />
            Every customer gets the entire platform — Fleet-Ops, Storefront, Ledger and Navigator.
          </div>

          <div className="mb-10 flex justify-center">
            <BillingToggle />
          </div>

          {/* ── The single plan card ── */}
          <Card className="mx-auto max-w-3xl border-primary shadow-xl shadow-primary/10">
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                Fleetbase Cloud — billed {annual ? 'annually' : 'monthly'}
              </CardTitle>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-5xl font-bold tracking-tight">{formatCents(rates.base)}</span>
                <span className="text-lg text-muted-foreground">per {period}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                plus{' '}
                <span className="font-semibold text-foreground">
                  {formatCents(rates.resource)} per {period}
                </span>{' '}
                for each driver and vehicle, and for each storefront beyond the first.
                {annual && (
                  <span className="ml-1 font-medium text-green-600 dark:text-green-400">
                    20% off — about ten months&apos; money for twelve.
                  </span>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              {PLAN_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </div>
              ))}

              <div className="rounded-xl border bg-muted/20 p-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Unlimited, at no cost
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {UNLIMITED.map((item) => (
                    <span key={item} className="rounded-full border bg-background px-2.5 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex-col items-stretch gap-2">
              <Button size="lg" asChild>
                <Link
                  href={ONBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="start_free_trial"
                  data-cta-location="pricing_plan_card"
                  data-cta-variant="primary"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                7 days free. No feature restrictions.
              </p>
            </CardFooter>
          </Card>

          {/* ── Calculator ── */}
          <div className="mt-14">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-bold">What would it cost you?</h3>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Line by line, the same way it appears on your statement.
              </p>
            </div>
            <PricingCalculator billing={billing} onBillingChange={setBillingCycle} />
          </div>

          {/* ── Usage rates: shown, not buried ── */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="mb-5 text-center">
              <h3 className="mb-2 text-2xl font-bold">The three things we meter</h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Everything else is included. These are charged only on what you actually use, at the
                same rates whether you pay monthly or annually.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border bg-card">
              <table className="w-full min-w-[34rem] text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="px-4 py-3 text-left font-medium">Meter</th>
                    <th className="px-4 py-3 text-left font-medium">Rate</th>
                    <th className="px-4 py-3 text-left font-medium">Free allowance</th>
                  </tr>
                </thead>
                <tbody>
                  {USAGE_METERS.map((m) => (
                    <tr key={m.meter} className="border-b last:border-0 align-top">
                      <td className="px-4 py-3">
                        <div className="font-medium">{m.meter}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{m.detail}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium tabular-nums">{m.rate}</td>
                      <td className="px-4 py-3 text-muted-foreground">{m.allowance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Orders and deliveries are not on this list, and never will be.
            </p>
          </div>
        </div>
      </section>

      {/* ── Deployment options (self-hosted) ── */}
      <section id="self-hosted" className="section-padding scroll-mt-24 border-y bg-muted/20">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Prefer to run it yourself?</h2>
            <p className="text-muted-foreground">
              Self-host the open-source platform, or have us build something custom.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Self-Hosted Implementation</CardTitle>
                    <p className="text-sm text-muted-foreground">Deploy on your own infrastructure</p>
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">
                  $2,500 <span className="text-base font-normal text-muted-foreground">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                {[
                  'Full deployment on your servers or cloud',
                  'CI/CD pipeline setup',
                  'Environment configuration & branding',
                  'Go-live handover session',
                  'Complete data sovereignty',
                  'Open-source — audit every line of code',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/services/installation">
                    View Installation Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-dashed">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional Services</CardTitle>
                    <p className="text-sm text-muted-foreground">Custom development &amp; integrations</p>
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">
                  Custom <span className="text-base font-normal text-muted-foreground">pricing</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                {[
                  'Custom extension development',
                  'ERP / CRM / WMS integrations',
                  'Workflow automation & custom logic',
                  'Data migration from legacy systems',
                  'White-label & custom branding',
                  'Team training & onboarding',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={SALES_URL}>Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Support tiers ── */}
      <section id="enterprise" className="section-padding scroll-mt-24">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Support &amp; enterprise</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Add the level of ongoing support that matches your team. Available for both Cloud and Self-Hosted.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn('flex flex-col', tier.highlight && 'border-primary shadow-lg shadow-primary/10')}
              >
                <CardHeader className="pb-3">
                  <div className="mb-1 flex items-center gap-2">
                    <div className={cn('h-3 w-3 rounded-full', tier.colorClass)} />
                    <CardTitle className="text-base">{tier.name}</CardTitle>
                  </div>
                  <div className="text-2xl font-bold">{tier.price}</div>
                  <div className="text-xs text-muted-foreground">SLA: {tier.sla}</div>
                </CardHeader>
                <CardContent className="flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <div key={f.label} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/40" />
                      )}
                      <span className={f.included ? '' : 'text-muted-foreground/50'}>{f.label}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* PRICING-7: commercial license as a single callout off the main flow */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-xl border bg-muted/20 p-6 text-center sm:flex-row sm:text-left">
            <Key className="size-6 shrink-0 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold">Building proprietary extensions?</h3>
              <p className="text-sm text-muted-foreground">
                A commercial license waives AGPL obligations for closed-source custom code. Most teams don&apos;t need one.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/licensing/commercial">See commercial licensing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding border-t bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {PRICING_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-4">
                <AccordionTrigger className="py-4 text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-12 text-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold">Ready to get started?</h2>
              <p className="mb-2 text-muted-foreground">
                $29 a month, plus $5 per driver or vehicle. Orders are free.
              </p>
              <p className="mb-8 text-xs text-muted-foreground">
                Try the full platform free for 7 days. Cancel any time.
              </p>
              <div className="flex flex-col items-center gap-3">
                <Button size="lg" asChild>
                  <Link
                    href={ONBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id="start_free_trial"
                    data-cta-location="pricing_footer"
                    data-cta-variant="primary"
                  >
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href={SALES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  data-cta-id="contact_sales"
                  data-cta-location="pricing_footer"
                  data-cta-variant="tertiary"
                >
                  Or talk to sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
