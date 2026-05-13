'use client';

import { ArrowRight, Calculator, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { track } from '@/lib/analytics/posthog';
import { cn } from '@/lib/utils';

import {
  CalculatorInputs,
  COMPETITOR_PER_DRIVER_USD,
  computeUnits,
  recommendPlan,
} from './pricing-data';

const DEFAULT_INPUTS: CalculatorInputs = {
  drivers: 5,
  vehicles: 5,
  orders: 200,
  users: 2,
  contacts: 100,
  places: 100,
  vendors: 0,
  serviceRates: 3,
  serviceAreas: 1,
  zones: 0,
  webhooks: 0,
  apiKeys: 1,
};

type Field = {
  key: keyof CalculatorInputs;
  label: string;
  min: number;
  max: number;
  step: number;
  helper?: string;
  free?: boolean;
};

const PRIMARY_FIELDS: Field[] = [
  { key: 'drivers', label: 'Drivers', min: 0, max: 200, step: 1, free: true, helper: 'Free — never billed.' },
  { key: 'orders', label: 'Orders per month', min: 0, max: 10000, step: 25, free: true, helper: 'Free — never billed.' },
  { key: 'vehicles', label: 'Vehicles', min: 0, max: 200, step: 1 },
  { key: 'users', label: 'Dispatchers / Users', min: 1, max: 100, step: 1, helper: '5 units each' },
];

const ADVANCED_FIELDS: Field[] = [
  { key: 'contacts', label: 'Customer contacts (new this month)', min: 0, max: 5000, step: 10 },
  { key: 'places', label: 'Delivery addresses (new this month)', min: 0, max: 5000, step: 10 },
  { key: 'vendors', label: 'Vendors', min: 0, max: 200, step: 1 },
  { key: 'serviceRates', label: 'Service rate configurations', min: 0, max: 50, step: 1 },
  { key: 'serviceAreas', label: 'Service areas', min: 0, max: 50, step: 1 },
  { key: 'zones', label: 'Zones', min: 0, max: 100, step: 1 },
  { key: 'webhooks', label: 'Webhook endpoints', min: 0, max: 50, step: 1, helper: '5 units each' },
  { key: 'apiKeys', label: 'API keys', min: 0, max: 50, step: 1 },
];

type Props = {
  billing: 'monthly' | 'annual';
};

export default function PricingCalculator({ billing }: Props) {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const lastTrackedUnits = useRef<number | null>(null);

  const { total, breakdown } = useMemo(() => computeUnits(inputs), [inputs]);
  const recommendation = useMemo(() => recommendPlan(total, billing), [total, billing]);

  // Competitor comparison anchored on driver count.
  const competitorMonthly = inputs.drivers * COMPETITOR_PER_DRIVER_USD;
  const fleetbaseMonthly =
    billing === 'annual' ? recommendation.totalCost * 12 / 12 : recommendation.totalCost;
  const monthlySavings = Math.max(0, competitorMonthly - fleetbaseMonthly);
  const yearlySavings = monthlySavings * 12;

  // Debounced analytics emission on settle.
  useEffect(() => {
    const t = setTimeout(() => {
      if (lastTrackedUnits.current === total) return;
      lastTrackedUnits.current = total;
      track('pricing_calculator_changed', {
        units: total,
        derived_price: recommendation.totalCost,
      });
    }, 500);
    return () => clearTimeout(t);
  }, [total, recommendation.totalCost]);

  const setField = (key: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="calculator" className="section-padding bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-3">
            <Calculator className="w-3 h-3 text-primary" />
            <span>Pricing Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
            Tell us about your operation. We&apos;ll find your plan.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Drivers and orders are <span className="font-semibold text-foreground">always free</span>.
            Adjust the numbers below to see your real bill — and what you&apos;d pay on a typical
            per-driver competitor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Inputs */}
          <Card className="lg:sticky lg:top-24 self-start py-0 gap-0">
            <CardContent className="p-5 space-y-3.5">
              {PRIMARY_FIELDS.map((field) => (
                <CalculatorRow
                  key={field.key}
                  field={field}
                  value={inputs[field.key]}
                  onChange={(v) => setField(field.key, v)}
                />
              ))}

              <button
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="w-full flex items-center justify-between py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border-t pt-3"
              >
                <span>Advanced (contacts, places, webhooks, …)</span>
                {advancedOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {advancedOpen && (
                <div className="space-y-3.5 pt-1">
                  {ADVANCED_FIELDS.map((field) => (
                    <CalculatorRow
                      key={field.key}
                      field={field}
                      value={inputs[field.key]}
                      onChange={(v) => setField(field.key, v)}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output */}
          <div className="space-y-4">
            {/* Usage */}
            <Card className="py-0 gap-0">
              <CardContent className="p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="text-sm text-muted-foreground">Your monthly usage</div>
                  <div className="text-3xl font-bold leading-none">
                    {total.toLocaleString()}{' '}
                    <span className="text-base font-normal text-muted-foreground">units</span>
                  </div>
                </div>
                {breakdown.length > 0 ? (
                  <div className="space-y-1">
                    {breakdown.map((b) => (
                      <div key={b.key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {b.label} <span className="text-xs">×{b.quantity}</span>
                        </span>
                        <span className="font-medium">{b.units.toLocaleString()} units</span>
                      </div>
                    ))}
                    <div className="border-t pt-1 mt-1 flex justify-between text-sm">
                      <span className="text-muted-foreground">Orders ×{inputs.orders.toLocaleString()}</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Drivers ×{inputs.drivers}</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">FREE</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">No billable usage yet — start with at least 1 user or vehicle.</div>
                )}
              </CardContent>
            </Card>

            {/* Recommended plan */}
            <Card className="border-primary shadow-lg shadow-primary/10 overflow-hidden py-0 gap-0">
              <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                Your recommended plan
              </div>
              <CardContent className="p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="text-xl font-bold">{recommendation.plan.name}</div>
                  <div className="text-3xl font-bold leading-none">
                    ${recommendation.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                  </div>
                </div>
                {billing === 'annual' && recommendation.fits && (
                  <div className="text-xs text-green-600 dark:text-green-400 mb-2">
                    Billed annually (${(recommendation.totalCost * 12).toLocaleString()}/yr)
                  </div>
                )}
                <div className="text-sm text-muted-foreground mb-4">
                  {recommendation.fits ? (
                    <>
                      Includes {recommendation.plan.units.toLocaleString()} units —{' '}
                      <span className="font-medium text-foreground">
                        {(recommendation.plan.units - total).toLocaleString()} units headroom
                      </span>.
                    </>
                  ) : (
                    <>
                      Largest plan ({recommendation.plan.units.toLocaleString()} units) plus{' '}
                      {recommendation.overageUnits.toLocaleString()} overage units at ${recommendation.plan.overage}/unit.{' '}
                      <span className="text-primary">Talk to us about a custom Enterprise plan →</span>
                    </>
                  )}
                </div>
                <Button className="w-full" asChild>
                  <Link
                    href={recommendation.fits ? 'https://console.fleetbase.io/onboard' : 'https://cal.com/shivthakker/enquiry'}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id={recommendation.fits ? 'start_free_trial' : 'contact_sales'}
                    data-cta-location="pricing_calculator"
                    data-cta-variant="primary"
                  >
                    {recommendation.fits ? (
                      <>Start free trial on {recommendation.plan.name} <ArrowRight className="ml-2 w-4 h-4" /></>
                    ) : (
                      <>Talk to sales <ArrowRight className="ml-2 w-4 h-4" /></>
                    )}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Competitor comparison */}
            {inputs.drivers > 0 && monthlySavings > 0 && (
              <Card className="border-green-500/60 bg-green-50 dark:bg-green-950/30 py-0 gap-0 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <div className="text-sm font-semibold text-green-900 dark:text-green-100">
                      Compared to a typical per-driver TMS
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="rounded-lg border bg-background p-3">
                      <div className="text-xs text-muted-foreground mb-1">Per-driver TMS</div>
                      <div className="text-lg font-bold line-through decoration-red-500/60 decoration-2">
                        ${competitorMonthly.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground no-underline">/mo</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {inputs.drivers} × ${COMPETITOR_PER_DRIVER_USD}/driver
                      </div>
                    </div>
                    <div className="rounded-lg border-2 border-primary bg-primary/10 p-3">
                      <div className="text-xs text-muted-foreground mb-1">Fleetbase</div>
                      <div className="text-lg font-bold text-primary">
                        ${fleetbaseMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        <span className="text-xs font-normal text-muted-foreground">/mo</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {recommendation.plan.name}, all-in
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-600 dark:bg-green-500 text-white p-3 text-center">
                    <div className="text-2xl font-bold leading-tight">
                      Save ${monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                    </div>
                    <div className="text-xs opacity-90 mt-0.5">
                      That&apos;s ${yearlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} a year
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Benchmark of ${COMPETITOR_PER_DRIVER_USD}/driver/mo is the midpoint of published rates
                    from Detrack, OptimoRoute, and Track-POD ($29–$99). Competitors typically charge
                    separately for orders, integrations, and users.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorRow({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: number;
  onChange: (n: number) => void;
}) {
  // Skip the inline helper for "free" fields — the FREE badge says it all.
  const showHelper = field.helper && !field.free;
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-1">
        <label
          htmlFor={`calc-${field.key}`}
          className="text-sm font-medium flex items-center gap-1.5 flex-1 min-w-0"
        >
          <span className="truncate">{field.label}</span>
          {field.free && (
            <span className="text-[10px] font-bold tracking-wide bg-green-500/15 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full leading-none">
              FREE
            </span>
          )}
          {showHelper && (
            <span className="text-xs text-muted-foreground font-normal">· {field.helper}</span>
          )}
        </label>
        <input
          id={`calc-${field.key}-num`}
          type="number"
          inputMode="numeric"
          min={field.min}
          max={field.max}
          step={field.step}
          value={value}
          onChange={(e) => {
            const n = Number(e.target.value);
            if (Number.isFinite(n)) onChange(Math.max(field.min, Math.min(field.max, Math.round(n))));
          }}
          className="w-16 text-right text-sm border rounded px-2 py-0.5 bg-background"
        />
      </div>
      <input
        id={`calc-${field.key}`}
        type="range"
        min={field.min}
        max={field.max}
        step={field.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          'w-full accent-primary cursor-pointer h-1.5',
          field.free && 'opacity-90'
        )}
      />
    </div>
  );
}
