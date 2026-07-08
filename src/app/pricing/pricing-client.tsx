'use client';

import {
  ArrowRight, Building2, Calculator, Check, ChevronDown, ChevronUp, Cloud,
  Globe, Key, Layers, MapPin, Package, Receipt, Server, Sparkles, Truck,
  User, UserRound, Users, Webhook, X, Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { track } from '@/lib/analytics/posthog';
import { cn } from '@/lib/utils';

import { PRICING_FAQS } from './faqs';

// ─── Cloud Pricing Tiers ──────────────────────────────────────────────────────
const CLOUD_TIERS = [
  { name: 'Micro', monthlyPrice: 25, annualPrice: 20, units: 100, overage: 0.75, description: 'Individuals and very small teams.', badge: null },
  { name: 'Lite', monthlyPrice: 50, annualPrice: 40, units: 180, overage: 0.75, description: 'Small teams getting started.', badge: null },
  { name: 'Essential', monthlyPrice: 100, annualPrice: 80, units: 240, overage: 0.75, description: 'Growing operations with more to manage.', badge: null },
  { name: 'Starter', monthlyPrice: 200, annualPrice: 160, units: 300, overage: 0.75, description: 'Established small teams scaling up.', badge: 'Most Popular' },
  { name: 'Starter Plus', monthlyPrice: 300, annualPrice: 240, units: 500, overage: 0.65, description: 'Enhanced capacity at a lower unit cost.', badge: null },
  { name: 'Scale', monthlyPrice: 400, annualPrice: 320, units: 800, overage: 0.55, description: 'High-volume operational teams.', badge: null },
  { name: 'Scale Plus', monthlyPrice: 500, annualPrice: 400, units: 1200, overage: 0.45, description: 'Serious scale with a lower unit cost.', badge: null },
  { name: 'Pro', monthlyPrice: 600, annualPrice: 480, units: 1700, overage: 0.40, description: 'Power teams running complex operations.', badge: null },
  { name: 'Pro Plus', monthlyPrice: 700, annualPrice: 560, units: 2300, overage: 0.35, description: 'High-throughput pro operations.', badge: null },
  { name: 'Elite', monthlyPrice: 800, annualPrice: 640, units: 3000, overage: 0.30, description: 'Enterprise-grade volume at high velocity.', badge: null },
  { name: 'Elite Plus', monthlyPrice: 900, annualPrice: 720, units: 3800, overage: 0.25, description: 'Maximum capacity before Enterprise.', badge: null },
  { name: 'Enterprise', monthlyPrice: 1000, annualPrice: 800, units: 5000, overage: 0.20, description: 'Full enterprise scale with the lowest unit cost.', badge: null },
  { name: 'Enterprise Plus', monthlyPrice: 1500, annualPrice: 1200, units: 7500, overage: 0.15, description: 'Largest cloud plan. Maximum capacity.', badge: null },
];

// PRICING-2: three visible tiers by default — one entry, one "Most Popular", one scaling.
const VISIBLE_TIER_NAMES = ['Micro', 'Starter', 'Scale'];
const VISIBLE_TIERS = VISIBLE_TIER_NAMES.map((n) => CLOUD_TIERS.find((t) => t.name === n)!);

// PRICING-3: Orders consume 2 units each, so plain-English capacity = units / 2.
const UNITS_PER_ORDER = 2;
const ordersFor = (units: number) => Math.floor(units / UNITS_PER_ORDER);

// ─── Resource Unit Costs ──────────────────────────────────────────────────────
const RESOURCE_UNITS = [
  { icon: Package, label: 'Order', units: 2, rolling: false },
  { icon: UserRound, label: 'Contact', units: 1, rolling: false },
  { icon: MapPin, label: 'Place', units: 1, rolling: false },
  { icon: Building2, label: 'Vendor', units: 1, rolling: false },
  { icon: Truck, label: 'Vehicle', units: 1, rolling: true },
  { icon: User, label: 'Driver', units: 1, rolling: true },
  { icon: Receipt, label: 'Service Rate', units: 1, rolling: false },
  { icon: Globe, label: 'Service Area', units: 1, rolling: false },
  { icon: Layers, label: 'Zone', units: 1, rolling: false },
  { icon: Users, label: 'User', units: 5, rolling: true },
  { icon: Webhook, label: 'Webhook', units: 5, rolling: true },
  { icon: Key, label: 'API Key', units: 1, rolling: true },
];

const OVERAGE_PACKS = [
  { name: 'Small', price: 90, units: 100 },
  { name: 'Medium', price: 240, units: 300 },
  { name: 'Large', price: 375, units: 500 },
  { name: 'Jumbo', price: 700, units: 1000 },
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
    cta: 'See Cloud plans',
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
    body: 'Enterprise volume, custom SLAs, professional services, or bespoke development for your operation.',
    href: '#enterprise',
    cta: 'Talk to Sales',
  },
];

const ONBOARD_URL = 'https://console.fleetbase.io/onboard';
const SALES_URL = 'https://cal.com/shivthakker/enquiry';

export default function PricingClient() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [showUnits, setShowUnits] = useState(false);
  const [orders, setOrders] = useState(150);

  const tierPrice = (tier: (typeof CLOUD_TIERS)[0]) =>
    billing === 'annual' ? tier.annualPrice : tier.monthlyPrice;

  // PRICING-4: smallest plan whose monthly allocation covers the entered order volume.
  const recommended = CLOUD_TIERS.find((t) => t.units >= orders * UNITS_PER_ORDER) ?? null;

  useEffect(() => {
    track('pricing_viewed', { billing_cycle: billing });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setBillingCycle = (cycle: 'monthly' | 'annual') => {
    if (cycle === billing) return;
    setBilling(cycle);
    track('pricing_billing_toggled', { to_cycle: cycle });
  };

  const onTierCtaClick = (tier: (typeof CLOUD_TIERS)[0]) => {
    track('pricing_tier_cta_clicked', {
      tier: tier.name,
      billing_cycle: billing,
      monthly_price: tierPrice(tier),
    });
  };

  return (
    <div className="flex flex-col">
      {/* ── Hero (PRICING-5 single primary CTA, PRICING-6 reframed trial) ── */}
      <section className="section-padding pb-10 text-center">
        <div className="container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <span className="text-primary">●</span>
            <span>Transparent, Usage-Based Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Pay for what you use.{' '}
            <span className="text-primary">Nothing more.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fleetbase Cloud starts at $25/month — no per-seat charges, no hidden fees. Self-host the open-source platform, or run it fully managed.
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
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            {/* PRICING-6: reassurance first, the limit as small supporting text. */}
            <p className="text-sm font-medium">Try the full platform, free.</p>
            <p className="text-xs text-muted-foreground">
              Trial runs 7 days or 50 resource units, whichever comes first.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING-8: Trust / proof bar under the hero ── */}
      <section className="border-y bg-muted/20">
        <div className="container max-w-4xl mx-auto py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {PROOF_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING-1: "Which one are you?" chooser ── */}
      <section className="section-padding pb-0">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Which one are you?</h2>
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
                <h3 className="font-semibold text-lg mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {c.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cloud plans ── */}
      <section id="cloud" className="section-padding scroll-mt-24">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Fleetbase Cloud</h2>
            <p className="text-muted-foreground">
              Fully managed. Automatic updates. Unlimited users and drivers.
            </p>
          </div>

          {/* PRICING-9: entire-platform-included as a prominent benefit */}
          <div className="mx-auto mb-8 flex max-w-2xl items-center justify-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-center text-sm font-medium">
            <Sparkles className="size-4 shrink-0 text-primary" />
            Every plan includes the entire platform — Fleet-Ops, Storefront, Ledger, Navigator, and every module.
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 rounded-full border p-1 bg-muted/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'monthly' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'annual' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* PRICING-2: three visible tiers, Most Popular dominant */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
            {VISIBLE_TIERS.map((tier) => {
              const popular = tier.badge === 'Most Popular';
              return (
                <Card
                  key={tier.name}
                  className={cn(
                    'flex flex-col overflow-hidden',
                    popular
                      ? 'border-primary shadow-xl shadow-primary/10 pt-0 md:scale-105 md:-my-2 relative z-10'
                      : 'md:mt-0',
                  )}
                >
                  {popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      ${tierPrice(tier)}
                      <span className="text-base font-normal text-muted-foreground">/mo</span>
                    </div>
                    {billing === 'annual' && (
                      <div className="text-xs text-green-600 dark:text-green-400">
                        Billed annually (${tierPrice(tier) * 12}/yr)
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 space-y-2 text-sm">
                    {/* PRICING-3: plain-English capacity */}
                    <div className="rounded-lg bg-muted/40 px-3 py-2">
                      <span className="font-semibold">{tier.units.toLocaleString()} units/mo</span>
                      <span className="text-muted-foreground"> ≈ {ordersFor(tier.units).toLocaleString()} orders/month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>Entire platform, all modules included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>Unlimited users &amp; drivers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>Top-ups from $90 · ${tier.overage}/unit overage</span>
                    </div>
                    <div className="text-xs text-muted-foreground italic pt-1">{tier.description}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={popular ? 'default' : 'outline'} asChild>
                      <Link
                        href={ONBOARD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onTierCtaClick(tier)}
                        data-cta-id="pricing_tier_select"
                        data-cta-location="pricing_card"
                        data-cta-variant={popular ? 'primary' : 'secondary'}
                      >
                        Start Free Trial
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Show all plans toggle */}
          <div className="text-center mt-8 mb-2">
            <button
              onClick={() => setShowAllPlans(!showAllPlans)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {showAllPlans ? (
                <>Hide full plan list <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show all 13 plans <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {showAllPlans && (
            <div className="rounded-xl border bg-card overflow-hidden max-w-4xl mx-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left px-4 py-3 font-medium">Plan</th>
                    <th className="text-right px-4 py-3 font-medium">
                      {billing === 'annual' ? 'Price (billed annually)' : 'Monthly Price'}
                    </th>
                    <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">≈ Orders/mo</th>
                    <th className="text-right px-4 py-3 font-medium hidden md:table-cell">Overage</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {CLOUD_TIERS.map((tier, i) => (
                    <tr
                      key={tier.name}
                      className={cn(
                        'border-b last:border-0',
                        tier.badge && 'bg-primary/5',
                        !tier.badge && i % 2 !== 0 && 'bg-muted/10',
                      )}
                    >
                      <td className="px-4 py-3 font-medium">
                        {tier.name}
                        {tier.badge && (
                          <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                            {tier.badge}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-semibold">${tierPrice(tier)}/mo</span>
                        {billing === 'annual' && (
                          <div className="text-xs text-muted-foreground">${tierPrice(tier) * 12}/yr</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">
                        {ordersFor(tier.units).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">
                        ${tier.overage}/unit
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={ONBOARD_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline underline-offset-4 whitespace-nowrap"
                          onClick={() => onTierCtaClick(tier)}
                          data-cta-id="pricing_tier_select"
                          data-cta-location="pricing_table"
                          data-cta-variant="tertiary"
                        >
                          Start trial
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ── PRICING-4: interactive plan recommender ── */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border bg-card p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Calculator className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Find your plan</h3>
                <p className="text-sm text-muted-foreground">Tell us your volume — we&apos;ll recommend a plan.</p>
              </div>
            </div>

            <label htmlFor="orders" className="block text-sm font-medium mb-2">
              How many orders per month? <span className="text-primary font-semibold">{orders.toLocaleString()}</span>
            </label>
            <input
              id="orders"
              type="range"
              min={10}
              max={4000}
              step={10}
              value={orders}
              onChange={(e) => setOrders(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>10</span>
              <span>4,000+</span>
            </div>

            <div className="mt-6 rounded-xl border bg-muted/30 p-5 text-center">
              {recommended ? (
                <>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Recommended plan</div>
                  <div className="text-2xl font-bold">
                    {recommended.name} — ${tierPrice(recommended)}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Covers ~{ordersFor(recommended.units).toLocaleString()} orders/month on {recommended.units.toLocaleString()} units.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href={ONBOARD_URL} target="_blank" rel="noopener noreferrer" data-cta-id="start_free_trial" data-cta-location="pricing_recommender" data-cta-variant="primary">
                      Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Enterprise volume</div>
                  <div className="text-2xl font-bold">Let&apos;s build a custom plan</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Beyond 3,750 orders/month — talk to us for enterprise pricing.
                  </p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href={SALES_URL} target="_blank" rel="noopener noreferrer">Talk to Sales</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* ── PRICING-3: "How units work" collapsed by default ── */}
          <div className="mx-auto mt-6 max-w-2xl">
            <button
              onClick={() => setShowUnits(!showUnits)}
              className="flex w-full items-center justify-between rounded-xl border bg-card px-5 py-4 text-left text-sm font-medium hover:bg-muted/30 transition-colors"
            >
              How resource units work
              {showUnits ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
            {showUnits && (
              <div className="mt-4 rounded-xl border bg-card p-6">
                <p className="text-sm text-muted-foreground mb-5">
                  Your plan includes a monthly unit allocation. Each resource consumes a set number of units per item created. Most reset each cycle; rolling resources (marked) carry their count forward.
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {RESOURCE_UNITS.map((r) => (
                    <div key={r.label} className="bg-muted/30 border rounded-xl p-3 text-center">
                      <r.icon className="w-4 h-4 mx-auto mb-1.5 text-primary" />
                      <div className="text-xl font-bold">{r.units}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{r.label}</div>
                      {r.rolling && (
                        <div className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5 font-medium">rolling</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mb-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
                    Resets each billing cycle
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    Rolling — count carries over
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-1">Top-up packs</h4>
                <p className="text-sm text-muted-foreground mb-3">Need more mid-month? Buy a top-up any time — no plan change required.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {OVERAGE_PACKS.map((pack) => (
                    <div key={pack.name} className="border rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground font-medium mb-1">{pack.name}</div>
                      <div className="text-lg font-bold">${pack.price}</div>
                      <div className="text-xs text-muted-foreground">{pack.units.toLocaleString()} units</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Deployment options (self-hosted) ── */}
      <section id="self-hosted" className="section-padding bg-muted/20 border-y scroll-mt-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Prefer to run it yourself?</h2>
            <p className="text-muted-foreground">
              Self-host the open-source platform, or have us build something custom.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Self-Hosted Implementation</CardTitle>
                    <p className="text-sm text-muted-foreground">Deploy on your own infrastructure</p>
                  </div>
                </div>
                <div className="text-3xl font-bold mt-2">
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
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/services/installation">
                    View Installation Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-dashed">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional Services</CardTitle>
                    <p className="text-sm text-muted-foreground">Custom development &amp; integrations</p>
                  </div>
                </div>
                <div className="text-3xl font-bold mt-2">
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
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={SALES_URL}>Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Support tiers (enterprise / scale) ── */}
      <section id="enterprise" className="section-padding scroll-mt-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Support &amp; enterprise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add the level of ongoing support that matches your team. Available for both Cloud and Self-Hosted.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUPPORT_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn('flex flex-col', tier.highlight && 'border-primary shadow-lg shadow-primary/10')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={cn('w-3 h-3 rounded-full', tier.colorClass)} />
                    <CardTitle className="text-base">{tier.name}</CardTitle>
                  </div>
                  <div className="text-2xl font-bold">{tier.price}</div>
                  <div className="text-xs text-muted-foreground">SLA: {tier.sla}</div>
                </CardHeader>
                <CardContent className="flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <div key={f.label} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
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

          {/* PRICING-7: commercial license moved off the main flow to a single callout */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-xl border bg-muted/20 p-6 text-center sm:flex-row sm:text-left">
            <Key className="size-6 shrink-0 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold">Building proprietary extensions?</h3>
              <p className="text-sm text-muted-foreground">
                A commercial license waives AGPL obligations for closed-source custom code. Most teams don&apos;t need one.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/licensing/commercial">See commercial licensing <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-muted/20 border-t">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {PRICING_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Bottom CTA (single primary) ── */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <div className="relative rounded-2xl border bg-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-2">
                Try the full platform, free.
              </p>
              <p className="text-xs text-muted-foreground mb-8">
                Trial runs 7 days or 50 resource units, whichever comes first.
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
                    Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Link
                  href={SALES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
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
