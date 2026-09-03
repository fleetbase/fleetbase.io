'use client';

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  CheckCircle2,
  Code,
  GitBranch,
  Globe,
  LayoutDashboard,
  Lock,
  MapPin,
  Package,
  Puzzle,
  Shield,
  ShoppingBag,
  Smartphone,
  Truck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import DeploymentOptions from '@/components/sections/deployment-options';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import OpenSourceAdvantage from '@/components/sections/open-source-advantage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

function buildStats(stars: string) {
  return [
    { value: '8,000+', label: 'Active instances' },
    { value: '10M+', label: 'Orders processed' },
    { value: '50K+', label: 'Fleet vehicles tracked' },
    { value: stars, label: 'GitHub stars' },
  ];
}

const modules = [
  {
    icon: Truck,
    name: 'Fleet-Ops',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
    description:
      'Fleet management and TMS. Intelligent dispatch, real-time tracking, configurable workflows, and the Orchestrator Workbench for phase-based optimization.',
    href: '/platform/fleetops',
    badge: null,
  },
  {
    icon: ShoppingBag,
    name: 'Storefront',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    dot: 'bg-violet-500',
    description:
      'Headless e-commerce for on-demand businesses. Zero commission fees, multi-vendor marketplace, white-label mobile app, and native Fleet-Ops delivery integration.',
    href: '/platform/storefront',
    badge: null,
  },
  {
    icon: Box,
    name: 'Pallet',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    dot: 'bg-amber-500',
    description:
      'Warehouse management and inventory. Stock levels, transfers, pick lists, fulfillment workflows, and cycle count audits for distribution and 3PL operations.',
    href: '/platform/pallet',
    badge: 'Beta',
  },
  {
    icon: BookOpen,
    name: 'Ledger',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-500',
    description:
      'Logistics finance and accounting. Double-entry bookkeeping, auto-generated journal entries, invoicing, digital wallets, and real-time financial reports.',
    href: '/platform/ledger',
    badge: null,
  },
  {
    icon: Smartphone,
    name: 'Navigator',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    dot: 'bg-green-500',
    description:
      'The open-source driver app. Turn-by-turn navigation, proof of delivery, fault reporting, and live order communication — AGPL-3.0 licensed, fully white-label.',
    href: '/platform/navigator',
    badge: null,
  },
  {
    icon: Shield,
    name: 'IAM',
    color: 'text-slate-500',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    dot: 'bg-slate-500',
    description:
      'Identity and access management. Role-based access control, multi-tenant organizations, 2FA, and granular permissions across all platform modules.',
    href: '/platform/security',
    badge: null,
  },
  {
    icon: Code,
    name: 'Developer',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    dot: 'bg-indigo-500',
    description:
      'API keys, webhooks, socket events, request logs, and sandbox/live environments. Full programmatic access to every platform capability.',
    href: '/docs',
    badge: null,
  },
  {
    icon: Puzzle,
    name: 'Extensions',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    dot: 'bg-pink-500',
    description:
      'Official and community-built extensions via the Fleetbase Marketplace. One-click install from the console or CLI — telematics, payments, analytics, and more.',
    href: '/platform/extensions',
    badge: null,
  },
];

const integrationFlow = [
  {
    icon: ShoppingBag,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    module: 'Storefront',
    title: 'Customer places order',
    description: 'Order paid via branded web or mobile app. Storefront captures payment and creates a delivery order automatically.',
  },
  {
    icon: GitBranch,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    module: 'Fleet-Ops',
    title: 'Orchestrator assigns & dispatches',
    description: 'Fleet-Ops receives the order, runs optimization phases, assigns the best driver, and sends navigation to the Navigator app.',
  },
  {
    icon: Smartphone,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    module: 'Navigator',
    title: 'Driver completes delivery',
    description: 'Driver navigates turn-by-turn, captures proof of delivery, and marks the order complete. Customer tracking link updates in real time.',
  },
  {
    icon: BookOpen,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    module: 'Ledger',
    title: 'Revenue recorded automatically',
    description: 'Ledger posts the journal entry, credits the driver earnings wallet, and updates the income statement — without any manual step.',
  },
];

const platformPrinciples = [
  {
    icon: Puzzle,
    title: 'Modular by design',
    description:
      'Deploy only the modules your operation needs. Add more as you grow. No bloated monolith forcing you to buy capabilities you won\'t use.',
  },
  {
    icon: Globe,
    title: 'Open source at the core',
    description:
      'Every module is open-source under AGPL-3.0. Inspect the code, self-host anywhere, fork and extend — or use our managed cloud.',
  },
  {
    icon: Lock,
    title: 'You own your stack',
    description:
      'No per-seat fees, no vendor lock-in, no data held hostage. Your infrastructure, your data, your rules.',
  },
  {
    icon: Zap,
    title: 'Modules connect natively',
    description:
      'Fleet-Ops, Storefront, Ledger, and Pallet share the same data layer. No integrations to build or maintain between them.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlatformPageContent({ stars }: { stars: string }) {
  const stats = buildStats(stars);
  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-chart-1/[0.10] blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-chart-3/[0.07] blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-chart-2/[0.06] blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Platform Overview
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              One Platform for Every{' '}
              <span className="text-gradient">Logistics Operation</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
              Fleetbase is a modular, open-source logistics OS. Deploy the modules you need — fleet
              management, commerce, warehousing, finance, driver apps — and expand as your
              operation grows. No vendor lock-in. Self-host or cloud.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="https://console.fleetbase.io/onboard" target="_blank" rel="noopener noreferrer nofollow">
                  Try Fleetbase Cloud <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  Schedule a Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 bg-card px-6 py-8 text-center"
              >
                <span className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero screenshot */}
          <div className="overflow-hidden rounded-xl border shadow-2xl">
            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">Fleetbase — Fleet-Ops Live Operations</span>
            </div>
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                alt="Fleetbase platform showing the Fleet-Ops live operations dashboard with real-time fleet map, active orders, and driver positions"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Principles ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center gap-5 lg:col-span-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                How It Works
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Built to Work the Way Your Operation Does
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Most logistics platforms force you to use everything or nothing. Fleetbase is
                modular — each piece works independently, and every piece works better together.
              </p>
            </div>
            <div className="divide-y lg:col-span-3">
              {platformPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-accent-foreground">{principle.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Modules ───────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              The Full Platform
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Every Module You Need,{' '}
              <span className="text-gradient">Nothing You Don't</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Start with one module. Activate others as your operation grows. Every module is
              open-source, independently deployable, and natively connected to the rest.
            </p>
          </div>

          <div
            className="grid grid-cols-1 overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: '1px' }}
          >
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.name}
                  href={mod.href}
                  className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center justify-between">
                    <div className={cn('flex size-10 items-center justify-center rounded-lg', mod.bg)}>
                      <Icon className={cn('size-5', mod.color)} />
                    </div>
                    {mod.badge && (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-accent-foreground">{mod.name}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{mod.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-accent-foreground">
                    Explore {mod.name} <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How Modules Connect ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Native Integration
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Modules That Talk to Each Other{' '}
              <span className="text-gradient">Out of the Box</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              When you run multiple Fleetbase modules, they share the same data layer. A Storefront
              order becomes a Fleet-Ops dispatch becomes a Ledger journal entry — automatically,
              without a single webhook or middleware to maintain.
            </p>
          </div>

          {/* Flow steps */}
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}
          >
            {integrationFlow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.module} className="relative flex flex-col gap-3 bg-card p-6">
                  {i < integrationFlow.length - 1 && (
                    <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:flex">
                      <ArrowRight className="size-4 text-muted-foreground/40" />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <div className={cn('flex size-8 items-center justify-center rounded-md', step.bg)}>
                      <Icon className={cn('size-4', step.color)} />
                    </div>
                    <span className={cn('text-xs font-semibold', step.color)}>{step.module}</span>
                  </div>
                  <h4 className="font-semibold text-accent-foreground">{step.title}</h4>
                  <p className="text-xs leading-snug text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Supporting check-points */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              'No webhooks to maintain between modules',
              'Shared contact, place, and vehicle data across all modules',
              'One IAM layer controls permissions everywhere',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-snug text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Sections ───────────────────────────────────────────────── */}
      <IntegrationsEcosystem />
      <OpenSourceAdvantage />
      <DeploymentOptions />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-chart-1/[0.12] blur-3xl" />
              <div className="absolute -bottom-1/2 right-1/4 h-72 w-72 rounded-full bg-chart-3/[0.08] blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                Get Started
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Your Logistics Stack,{' '}
                <span className="text-gradient">Owned by You.</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
                Start with a 7-day free trial on Fleetbase Cloud, or self-host the full platform
                under AGPL for free. No per-seat fees, no lock-in.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://console.fleetbase.io/onboard" target="_blank" rel="noopener noreferrer nofollow">
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                    Schedule a Demo
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
                    Self-Host for Free
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Free 7-day trial · Free to self-host under AGPL
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
