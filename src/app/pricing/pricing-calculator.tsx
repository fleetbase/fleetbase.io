'use client';

import { Calculator, ChevronDown, Info } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Input } from '@/components/ui/input';
import { track } from '@/lib/analytics/posthog';
import {
  type BillingInterval,
  buildStatement,
  formatCents,
  formatRate,
  METER_API_CALL,
  METER_LEDGER_PAID_INVOICE,
  METER_WEBHOOK_SEND,
  type MeterKey,
  V3_RATES,
} from '@/lib/pricing/v3';
import { cn } from '@/lib/utils';

const MONTHS_PER_YEAR = 12;

/** Keeps a typed number field from becoming NaN or negative. */
function toCount(value: string): number {
  const parsed = Number.parseInt(value.replace(/[^0-9]/g, ''), 10);

  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

function NumberField({
  id,
  label,
  hint,
  value,
  onChange,
  max,
  slider = false,
}: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  onChange: (next: number) => void;
  max?: number;
  slider?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {hint && <span className="ml-1.5 text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      <Input
        id={id}
        type="number"
        inputMode="numeric"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(toCount(e.target.value))}
      />
      {slider && (
        <input
          aria-hidden="true"
          tabIndex={-1}
          type="range"
          min={0}
          max={max}
          value={Math.min(value, max ?? value)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
        />
      )}
    </div>
  );
}

export default function PricingCalculator({
  billing,
  onBillingChange,
}: {
  billing: BillingInterval;
  onBillingChange: (next: BillingInterval) => void;
}) {
  const [drivers, setDrivers] = useState(5);
  const [vehicles, setVehicles] = useState(3);
  const [storefronts, setStorefronts] = useState(0);

  // Priced at nothing, deliberately. It is the fastest way to show a prospect
  // coming from a per-task competitor that volume does not enter the bill.
  const [orders, setOrders] = useState(500);

  const [showUsage, setShowUsage] = useState(false);
  const [invoices, setInvoices] = useState(0);
  const [apiCalls, setApiCalls] = useState(0);
  const [webhookSends, setWebhookSends] = useState(0);

  const annual = billing === 'year';
  const rates = V3_RATES[billing];
  const periodLabel = annual ? 'year' : 'month';

  const statement = useMemo(() => {
    // Meters are period-to-date, so an annual term is quoted on annual volume.
    const factor = annual ? MONTHS_PER_YEAR : 1;

    const meters: Partial<Record<MeterKey, number>> = {
      [METER_LEDGER_PAID_INVOICE]: invoices * factor,
      [METER_API_CALL]: apiCalls * factor,
      [METER_WEBHOOK_SEND]: webhookSends * factor,
    };

    return buildStatement({ drivers, vehicles, storefronts }, meters, rates);
  }, [annual, apiCalls, drivers, invoices, rates, storefronts, vehicles, webhookSends]);

  const recurringLines = statement.lines.filter((line) => !line.metered);
  const usageLines = statement.lines.filter((line) => line.metered);

  const toggleUsage = () => {
    const next = !showUsage;
    setShowUsage(next);
    if (next) track('pricing_calculator_usage_expanded', {} as Record<string, never>);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border bg-card shadow-sm">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 border-b p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Calculator className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Work out your price</h3>
            <p className="text-sm text-muted-foreground">
              Count what you run today. There is nothing else to estimate.
            </p>
          </div>
        </div>

        {/* Bound to the same state as the toggle above, so the two can't disagree. */}
        <div className="inline-flex shrink-0 items-center gap-1 self-start rounded-full border bg-muted/30 p-1 sm:self-auto">
          {(['month', 'year'] as const).map((interval) => (
            <button
              key={interval}
              type="button"
              onClick={() => onBillingChange(interval)}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-medium transition-all',
                billing === interval
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {interval === 'month' ? 'Monthly' : 'Annual'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
        {/* ── Inputs ── */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <NumberField id="calc-drivers" label="Drivers" value={drivers} onChange={setDrivers} max={500} slider />
            <NumberField id="calc-vehicles" label="Vehicles" value={vehicles} onChange={setVehicles} max={500} slider />
          </div>

          <NumberField
            id="calc-storefronts"
            label="Storefronts"
            hint="first one free"
            value={storefronts}
            onChange={setStorefronts}
            max={50}
          />

          <div>
            <NumberField id="calc-orders" label="Orders per month" value={orders} onChange={setOrders} />
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
              <span>$0.00</span>
              <span className="text-muted-foreground font-normal">
                — orders are always free, however many you run
              </span>
            </p>
          </div>

          {/* ── Usage, collapsed. Most prospects have no idea what their API
                volume is, and the headline estimate is complete without it. ── */}
          <div className="rounded-xl border bg-muted/20">
            <button
              type="button"
              onClick={toggleUsage}
              aria-expanded={showUsage}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
            >
              Estimate usage fees
              <ChevronDown className={cn('size-4 transition-transform', showUsage && 'rotate-180')} />
            </button>
            {showUsage && (
              <div className="space-y-4 border-t px-4 py-4">
                <p className="text-xs text-muted-foreground">
                  Optional. Leave these at zero if you don&apos;t know — most operations never reach
                  the free allowances.
                </p>
                <NumberField
                  id="calc-invoices"
                  label="Gateway-paid invoices"
                  hint="per month"
                  value={invoices}
                  onChange={setInvoices}
                />
                <NumberField
                  id="calc-api"
                  label="API calls"
                  hint="per month"
                  value={apiCalls}
                  onChange={setApiCalls}
                />
                <NumberField
                  id="calc-webhooks"
                  label="Webhook sends"
                  hint="per month"
                  value={webhookSends}
                  onChange={setWebhookSends}
                />
              </div>
            )}
          </div>
        </div>

        {/* ── Statement ── */}
        <div className="rounded-xl border bg-muted/20 p-5">
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Your estimate
          </div>

          <dl className="space-y-3">
            {recurringLines.map((line) => (
              <div key={line.key} className="flex items-baseline justify-between gap-3 text-sm">
                <dt className="min-w-0">
                  <span className="font-medium">{line.label}</span>
                  <span className="block text-xs text-muted-foreground">
                    {line.detail}
                    {line.key !== 'base' && ` · ${line.quantity} × ${formatCents(line.rate)}`}
                  </span>
                </dt>
                <dd className="shrink-0 tabular-nums">{formatCents(line.amount)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 flex items-baseline justify-between gap-3 border-t pt-3 text-sm">
            <span className="font-medium">Recurring</span>
            <span className="tabular-nums font-medium">{formatCents(statement.subtotal)}</span>
          </div>

          <dl className="mt-5 space-y-3">
            {usageLines.map((line) => (
              <div key={line.key} className="flex items-baseline justify-between gap-3 text-sm">
                <dt className="min-w-0">
                  <span className={cn(line.amount === 0 && 'text-muted-foreground')}>{line.label}</span>
                  <span className="block text-xs text-muted-foreground">
                    {line.quantity.toLocaleString()} · {formatRate(line.rate, line.per)}
                  </span>
                </dt>
                <dd
                  className={cn(
                    'shrink-0 tabular-nums',
                    line.amount === 0 && 'text-muted-foreground',
                  )}
                >
                  {formatCents(line.amount)}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 flex items-baseline justify-between gap-3 border-t pt-3 text-sm">
            <span className="font-medium">Usage</span>
            <span className="tabular-nums font-medium">{formatCents(statement.usageTotal)}</span>
          </div>

          <div className="mt-4 flex items-baseline justify-between gap-3 border-t-2 pt-4">
            <span className="font-semibold">Estimated total</span>
            <span className="text-right">
              <span className="text-2xl font-bold tabular-nums">
                {formatCents(statement.estimatedTotal)}
              </span>
              <span className="block text-xs text-muted-foreground">per {periodLabel}</span>
            </span>
          </div>

          <p className="mt-4 flex items-start gap-1.5 text-xs text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            <span>
              An estimate. Drivers, vehicles and storefronts are counted from your live records, so
              the recurring lines move when you add or remove one.
              {annual && ' Usage is shown across the full year.'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
