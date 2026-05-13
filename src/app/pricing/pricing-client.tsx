'use client';

import { ArrowRight, Check, ChevronDown, ChevronUp, Server, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { track } from '@/lib/analytics/posthog';
import { cn } from '@/lib/utils';

import PricingCalculator from './pricing-calculator';
import {
  CLOUD_TIERS,
  FEATURED_TIERS,
  OVERAGE_PACKS,
  RESOURCE_UNITS,
  type CloudTier,
} from './pricing-data';

// ─── Support Tiers ────────────────────────────────────────────────────────────
const SUPPORT_TIERS = [
  {
    name: 'Community',
    price: 'Free',
    sla: 'None',
    colorClass: 'bg-green-500',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Discord / GitHub Support', included: true },
      { label: 'Email Support', included: false },
      { label: 'SLA Guarantee', included: false },
      { label: 'Priority Bug Fixes', included: false },
      { label: 'Configuration Assistance', included: false },
      { label: 'Technical Troubleshooting', included: false },
      { label: 'Private Discord Channel', included: false },
    ],
    cta: 'Join Discord',
    ctaHref: 'https://discord.com/invite/HnTqQ6zAVn',
    highlight: false,
  },
  {
    name: 'Auto Upgrades',
    price: '$200/mo',
    sla: 'None',
    colorClass: 'bg-gray-400',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Discord / GitHub Support', included: true },
      { label: 'Automatic Security Patches', included: true },
      { label: 'Limited Email Support', included: true },
      { label: 'SLA Guarantee', included: false },
      { label: 'Priority Bug Fixes', included: false },
      { label: 'Configuration Assistance', included: false },
      { label: 'Technical Troubleshooting', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact/sales',
    highlight: false,
  },
  {
    name: 'Business',
    price: '$1,000/mo',
    sla: '72h SLA',
    colorClass: 'bg-blue-500',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Discord / GitHub Support', included: true },
      { label: 'Automatic Security Patches', included: true },
      { label: 'Email Support (72h SLA)', included: true },
      { label: 'Limited Priority Bug Fixes', included: true },
      { label: 'Basic Configuration Assistance', included: true },
      { label: 'Technical Troubleshooting', included: false },
      { label: 'Private Discord Channel', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact/sales',
    highlight: true,
  },
  {
    name: 'Developer',
    price: '$3,500/mo',
    sla: '24h SLA',
    colorClass: 'bg-purple-500',
    features: [
      { label: 'Docs & Guides', included: true },
      { label: 'Email + Private Discord + Weekly Phone', included: true },
      { label: 'Automatic Security Patches', included: true },
      { label: 'Email Support (24h SLA)', included: true },
      { label: 'Priority Bug Fixes', included: true },
      { label: 'Full Configuration Assistance', included: true },
      { label: 'Full Technical Troubleshooting', included: true },
      { label: 'Private Discord with CTO', included: true },
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact/sales',
    highlight: false,
  },
  {
    name: 'Fractional CTO',
    price: '$5,000/mo',
    sla: 'Full-time',
    colorClass: 'bg-orange-500',
    features: [
      { label: 'Dedicated Engineer', included: true },
      { label: '2hr Weekly Calls with CTO', included: true },
      { label: 'Proactive Monitoring', included: true },
      { label: 'Release Management', included: true },
      { label: 'Strategic Reviews', included: true },
      { label: 'PR Reviews', included: true },
      { label: 'Custom Roadmap Collaboration', included: true },
      { label: 'Full Technical Troubleshooting', included: true },
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact/sales',
    highlight: false,
  },
  {
    name: 'Enterprise+',
    price: 'Contact Us',
    sla: 'Full-time scalable',
    colorClass: 'bg-red-500',
    features: [
      { label: 'Scalable Engineering Team', included: true },
      { label: 'Daily Support Access', included: true },
      { label: 'Full Roadmap Collaboration', included: true },
      { label: 'Dedicated Full-Stack Team', included: true },
      { label: 'Enterprise-Level Oversight', included: true },
      { label: 'Team Expansion Available', included: true },
      { label: 'Strategic Quarterly Reviews', included: true },
      { label: 'Custom SLA', included: true },
    ],
    cta: 'Contact Sales',
    ctaHref: 'https://cal.com/shivthakker/enquiry',
    highlight: false,
  },
];

// ─── Commercial License Options ───────────────────────────────────────────────
const LICENSE_OPTIONS = [
  {
    name: 'Annual License',
    price: '$25,000/year',
    flexibility: 'Annual renewal',
    support: 'Includes all upgrades + Business Support',
    coverage: 'All versions during active term',
    note: 'Best value for continuous updates and support.',
    highlight: true,
  },
  {
    name: 'Monthly License',
    price: '$2,500/month',
    flexibility: 'Flexible month-to-month',
    support: 'Same as Annual',
    coverage: 'All versions during active term',
    note: 'Ideal for pilot or short-term use.',
    highlight: false,
  },
  {
    name: 'Major Version License',
    price: '$25,000 one-time',
    flexibility: 'Perpetual',
    support: 'None',
    coverage: 'Single major version (e.g. 1.x.x)',
    note: 'No ongoing support or updates.',
    highlight: false,
  },
  {
    name: 'Minor Version License',
    price: '$15,000 one-time',
    flexibility: 'Perpetual',
    support: 'None',
    coverage: 'Single minor version (e.g. 1.1.x)',
    note: 'No ongoing support or updates.',
    highlight: false,
  },
];

// ─── FAQs (v3 pricing) ────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'How does Fleetbase compare to Onfleet, Detrack, or Routific?',
    a: 'Most per-driver TMS platforms charge $29–$99 per driver per month — so a 10-driver fleet typically pays $290–$990/month just for driver seats, before any orders, integrations, or user logins. Fleetbase doesn’t charge per driver. A 10-driver fleet processing 400 orders/month fits on the Essential plan at $100/month, with the full platform included (Fleet-Ops, Storefront, Pallet, Ledger, Marketplace). Use the calculator above to compare with your numbers.',
  },
  {
    q: 'What is a Resource Unit?',
    a: 'Resource Units are how we measure the structural size of your operation — things like vehicles, customer contacts, delivery addresses, service rates, zones, and users. Each plan includes a monthly allocation. Drivers and orders are tracked for visibility but are NEVER billable — so growing your team or running more deliveries does not increase your bill. Most resources reset each billing cycle. Rolling resources (Users, Vehicles, Webhooks, API Keys) carry their count into the next cycle.',
  },
  {
    q: 'Are orders and drivers really free?',
    a: 'Yes — neither contributes any units toward your monthly allocation, regardless of how many you have or process. You can add as many drivers as you need and run as many orders as you want without your bill changing. We make money on the resource units that represent the structural size of your business (vehicles, contacts, places, users) and on bundled platform value, not on activity or workforce headcount.',
  },
  {
    q: 'How much does each resource cost in units?',
    a: 'Vehicles, contacts, places, vendors, service rates, service areas, zones, and API keys are 1 unit each. Users are 5 units each (rolling — they persist across cycles). Webhook endpoints are 5 units each (rolling). Orders and drivers are 0 — they are tracked but never billable.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. You can upgrade or downgrade your Cloud plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    q: 'What is the difference between Cloud and Self-Hosted?',
    a: 'Fleetbase Cloud is fully managed by us — we handle infrastructure, security patches, and uptime. Self-Hosted means you deploy Fleetbase on your own servers or cloud account. The one-time $2,500 implementation fee covers deployment, CI/CD setup, configuration, and branding.',
  },
  {
    q: 'Do I need a Commercial License?',
    a: 'Only if you plan to build proprietary (closed-source) extensions or integrations on top of Fleetbase. The core platform is AGPL-licensed, which requires open-sourcing modifications. A Commercial License waives this obligation and keeps your custom code private. See /licensing/commercial for full details, pricing tiers, and the FAQ.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — every Cloud plan includes a 7-day free trial capped at 100 resource units. Billing begins when either limit is reached first, so you can evaluate the platform against real operational usage.',
  },
  {
    q: 'What does the Self-Hosted implementation fee include?',
    a: 'The $2,500 one-time fee covers: server deployment on your infrastructure, CI/CD pipeline setup, environment configuration, custom branding, and a go-live handover session. Ongoing support is available separately via our support tiers.',
  },
  {
    q: 'Can I add more Resource Units mid-month?',
    a: 'Yes. You can purchase Resource Unit Packs at any time: Small (100 units / $90), Medium (300 units / $240), Large (500 units / $375), or Jumbo (1,000 units / $700). These top up your allocation immediately.',
  },
];

export default function PricingClient() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [showAllPlans, setShowAllPlans] = useState(false);

  const tierPrice = (tier: CloudTier) =>
    billing === 'annual' ? tier.annualPrice : tier.monthlyPrice;

  useEffect(() => {
    track('pricing_viewed', { billing_cycle: billing });
    // Initial pricing view only — toggle changes are tracked separately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setBillingCycle = (cycle: 'monthly' | 'annual') => {
    if (cycle === billing) return;
    setBilling(cycle);
    track('pricing_billing_toggled', { to_cycle: cycle });
  };

  const onTierCtaClick = (tier: CloudTier) => {
    track('pricing_tier_cta_clicked', {
      tier: tier.name,
      billing_cycle: billing,
      monthly_price: tierPrice(tier),
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <span className="text-primary">●</span>
            <span>Drivers and orders are free — always</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            One price for your whole fleet.{' '}
            <span className="text-primary">Not per driver.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Most TMS platforms charge $29–$99 per driver per month. Fleetbase charges $0.
            Add as many drivers and process as many orders as you need — your bill won&apos;t
            change. You pay for the structure of your business, not its activity or workforce.
          </p>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl mx-auto">
            Cloud starts at $25/month. Self-hosted from $2,500 one-time.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 rounded-full border p-1 bg-muted/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'annual'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://console.fleetbase.io/onboard"
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="start_free_trial"
                data-cta-location="pricing_page"
                data-cta-variant="primary"
              >
                Start 7-Day Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="#calculator"
                data-cta-id="jump_to_calculator"
                data-cta-location="pricing_page"
                data-cta-variant="secondary"
              >
                See your price
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            7 days or 100 resource units — whichever comes first.
          </p>
        </div>
      </section>

      {/* Featured Plans + All Plans */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Fleetbase Cloud</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fully managed. Automatic updates. Unlimited drivers and orders on every plan.
              All platform modules included.
            </p>
          </div>

          {/* Featured Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4">
            {FEATURED_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'flex flex-col overflow-hidden',
                  tier.highlight && 'border-primary shadow-lg shadow-primary/10 pt-0'
                )}
              >
                {tier.badge && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                    {tier.badge}
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tier.name}</CardTitle>
                  <div className="text-2xl font-bold">
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
                  <div>
                    <span className="text-muted-foreground">Units/mo:</span>{' '}
                    {tier.units.toLocaleString()}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Overage:</span> ${tier.overage}/unit
                  </div>
                  {tier.fits && (
                    <div className="text-xs text-primary/80 italic pt-1">Fits: {tier.fits}</div>
                  )}
                  <div className="text-xs text-muted-foreground italic">{tier.description}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link
                      href="https://console.fleetbase.io/onboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onTierCtaClick(tier)}
                      data-cta-id="pricing_tier_select"
                      data-cta-location="pricing_card"
                      data-cta-variant="primary"
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Compare All Plans Toggle */}
          <div className="text-center mb-4">
            <button
              onClick={() => setShowAllPlans(!showAllPlans)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {showAllPlans ? (
                <>
                  Hide full plan list <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Compare all {CLOUD_TIERS.length} plans <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Full Plans Table */}
          {showAllPlans && (
            <div className="rounded-xl border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left px-4 py-3 font-medium">Plan</th>
                    <th className="text-right px-4 py-3 font-medium">
                      {billing === 'annual' ? 'Price (billed annually)' : 'Monthly Price'}
                    </th>
                    <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">Units/mo</th>
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
                        tier.highlight && 'bg-primary/5',
                        !tier.highlight && i % 2 !== 0 && 'bg-muted/10'
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
                          <div className="text-xs text-muted-foreground">
                            ${tierPrice(tier) * 12}/yr
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">
                        {tier.units.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">
                        ${tier.overage}/unit
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href="https://console.fleetbase.io/onboard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline underline-offset-4 whitespace-nowrap"
                          onClick={() => onTierCtaClick(tier)}
                          data-cta-id="pricing_tier_select"
                          data-cta-location="pricing_card"
                          data-cta-variant="tertiary"
                        >
                          Get started
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Calculator */}
      <PricingCalculator billing={billing} />

      {/* Resource Units Explainer */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">One plan covers everything you do</h2>
            <p className="text-muted-foreground">
              Per-driver pricing punishes growth. Instead, each plan gives you a monthly
              <strong className="text-foreground"> activity allowance</strong> measured in resource units.
              Drivers and orders are <strong className="text-foreground">free</strong>. Everything else
              draws from your monthly budget — so you can grow your team and run more deliveries without
              your bill changing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
            {RESOURCE_UNITS.map((r) => (
              <div
                key={r.label}
                className={cn(
                  'bg-card border rounded-xl p-4 text-center',
                  !r.billable && 'border-green-500/40 bg-green-500/5'
                )}
              >
                <r.icon
                  className={cn(
                    'w-5 h-5 mx-auto mb-2',
                    r.billable ? 'text-primary' : 'text-green-600 dark:text-green-400'
                  )}
                />
                {r.billable ? (
                  <div className="text-2xl font-bold">{r.units}</div>
                ) : (
                  <div className="text-base font-bold text-green-600 dark:text-green-400">FREE</div>
                )}
                <div className="text-xs text-muted-foreground mt-0.5">{r.label}</div>
                {r.rolling && r.billable && (
                  <div className="text-xs text-amber-600 dark:text-amber-400 mt-1 font-medium">
                    rolling
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground mb-8">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Free — never billable
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
              Resets each billing cycle
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              Rolling — count carries over to next cycle
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="mb-4">
              <h3 className="font-semibold">Resource Unit Top-Up Packs</h3>
              <p className="text-sm text-muted-foreground">
                Need more mid-month? Purchase a top-up at any time — no plan change required.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {OVERAGE_PACKS.map((pack) => (
                <div key={pack.name} className="border rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">{pack.name}</div>
                  <div className="text-xl font-bold">${pack.price}</div>
                  <div className="text-xs text-muted-foreground">
                    {pack.units.toLocaleString()} units
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Hosted + Professional Services */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Other Deployment Options</h2>
            <p className="text-muted-foreground">
              Full control over your infrastructure, or custom-built solutions for your unique
              requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Self-Hosted */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Self-Hosted Implementation</CardTitle>
                    <CardDescription>Deploy on your own infrastructure</CardDescription>
                  </div>
                </div>
                <div className="text-3xl font-bold mt-2">
                  $2,500{' '}
                  <span className="text-base font-normal text-muted-foreground">one-time</span>
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
                  'Add support tier separately',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/services/installation">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Services */}
            <Card className="flex flex-col border-dashed">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional Services</CardTitle>
                    <CardDescription>Custom development &amp; integrations</CardDescription>
                  </div>
                </div>
                <div className="text-3xl font-bold mt-2">
                  Custom{' '}
                  <span className="text-base font-normal text-muted-foreground">pricing</span>
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
                  'Dedicated project manager',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="https://cal.com/shivthakker/enquiry">
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Support Levels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the level of ongoing support that matches your team&apos;s capacity and ambition.
              Available for both Cloud and Self-Hosted customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORT_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'flex flex-col',
                  tier.highlight && 'border-primary shadow-lg shadow-primary/10'
                )}
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
                  <Button
                    className="w-full"
                    variant={tier.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial License Options */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Commercial License Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building proprietary extensions or integrations? A Commercial License waives AGPL
              obligations and keeps your custom code private. Fleetbase Core remains open-source —
              only your extensions are covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {LICENSE_OPTIONS.map((lic) => (
              <Card
                key={lic.name}
                className={cn(
                  'flex flex-col overflow-hidden',
                  lic.highlight && 'border-primary shadow-lg shadow-primary/10 pt-0'
                )}
              >
                {lic.highlight && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                    Best Value
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{lic.name}</CardTitle>
                  <div className="text-2xl font-bold">{lic.price}</div>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Flexibility:</span> {lic.flexibility}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Support:</span> {lic.support}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span> {lic.coverage}
                  </div>
                  <div className="text-xs text-muted-foreground italic pt-1">{lic.note}</div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={lic.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="https://cal.com/shivthakker/enquiry">Get License</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            <Link href="/licensing/commercial" className="text-primary underline underline-offset-4">
              See full commercial licensing details &amp; FAQ →
            </Link>
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Not sure which license you need?{' '}
            <Link href="/licensing" className="text-primary underline underline-offset-4">
              Read our licensing guide
            </Link>{' '}
            or{' '}
            <Link
              href="https://cal.com/shivthakker/enquiry"
              className="text-primary underline underline-offset-4"
            >
              talk to our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-muted/20">
        <div className="container max-w-3xl mx-auto">
          <div className="relative rounded-2xl border bg-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-8">
                Try Fleetbase free for 7 days or 100 resource units, whichever comes first. Or speak
                to our team to find the right plan for your operation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link
                    href="https://console.fleetbase.io/onboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id="start_free_trial"
                    data-cta-location="pricing_page"
                    data-cta-variant="primary"
                  >
                    Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://cal.com/shivthakker/enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id="contact_sales"
                    data-cta-location="pricing_page"
                    data-cta-variant="secondary"
                  >
                    Talk to Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
