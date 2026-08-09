/**
 * The Cloud v3 pricing model — one plan, priced by what you operate.
 *
 * A direct port of `packages/billing/server/src/Support/V3Statement.php` and the
 * `plans_v3` rate table in `packages/billing/server/config/plans.php`. The
 * calculator on /pricing quotes numbers a prospect will later reconcile against
 * a card statement, so the arithmetic here has to agree with the billing engine
 * to the cent — including the block-rounding rule, which is the part that is
 * easy to get subtly wrong.
 *
 * Amounts are in cents throughout. Format only at the edge, for display.
 */

// ─── Meter keys ───────────────────────────────────────────────────────────────
// Mirrors PricingModel::METER_* so the two sides can be diffed by eye.
export const METER_LEDGER_PAID_INVOICE = 'ledger_paid_invoice';
export const METER_API_CALL = 'api_call';
export const METER_WEBHOOK_SEND = 'webhook_send';

export type MeterKey =
  | typeof METER_LEDGER_PAID_INVOICE
  | typeof METER_API_CALL
  | typeof METER_WEBHOOK_SEND;

/** Statement order — Ledger, then API, then webhooks. Mirrors V3Statement::build. */
export const V3_METER_EVENTS: MeterKey[] = [
  METER_LEDGER_PAID_INVOICE,
  METER_API_CALL,
  METER_WEBHOOK_SEND,
];

export type BillingInterval = 'month' | 'year';

export interface MeterRate {
  /** Cents charged per whole block. */
  rate: number;
  /** Block size. 1 charges every event; 100,000 makes the first 100,000 free. */
  per: number;
}

export interface Rates {
  base: number;
  resource: number;
  storefront: number;
  storefrontsIncluded: number;
  interval: BillingInterval;
  meters: Record<MeterKey, MeterRate>;
}

// ─── Rate table ───────────────────────────────────────────────────────────────
/**
 * From `plans_v3`. Annual is 20% off the recurring lines (ten months' money for
 * twelve months' service); the usage meters are charged at identical rates on
 * both intervals, so they are shared rather than duplicated.
 */
const V3_METERS: Record<MeterKey, MeterRate> = {
  [METER_LEDGER_PAID_INVOICE]: { rate: 10, per: 1 }, // $0.10, every invoice
  [METER_API_CALL]: { rate: 25, per: 100_000 }, // $0.25 per 100k, first block free
  [METER_WEBHOOK_SEND]: { rate: 25, per: 100_000 }, // $0.25 per 100k, first block free
};

export const V3_RATES: Record<BillingInterval, Rates> = {
  month: {
    base: 2900, // $29.00
    resource: 500, // $5.00 per driver or vehicle
    storefront: 500, // $5.00 per storefront beyond the first
    storefrontsIncluded: 1,
    interval: 'month',
    meters: V3_METERS,
  },
  year: {
    base: 27840, // $278.40
    resource: 4800, // $48.00
    storefront: 4800, // $48.00
    storefrontsIncluded: 1,
    interval: 'year',
    meters: V3_METERS,
  },
};

/** The discount applied to the recurring lines on an annual term. */
export const ANNUAL_DISCOUNT = 0.2;

// ─── Arithmetic ───────────────────────────────────────────────────────────────

/**
 * What a metered line costs.
 *
 * Ports `V3Statement::meteredAmount`. The Stripe prices behind these meters are
 * `per_unit` with `transform_quantity: {divide_by: N, round: down}`, so usage is
 * charged in whole blocks and a partial block is free — 99,999 API calls cost
 * nothing, 100,000 cost one block. Rounding up here would quote every prospect
 * more than they will actually be charged.
 */
export function meteredAmount(quantity: number, rateCents: number, per: number): number {
  if (quantity < 1 || rateCents < 1) {
    return 0;
  }

  const blockSize = Math.max(1, per);

  return Math.floor(quantity / blockSize) * rateCents;
}

/**
 * What a licensed line costs — a straight quantity × rate.
 *
 * Ports `V3Statement::licensedAmount`.
 */
export function licensedAmount(quantity: number, rateCents: number): number {
  return Math.max(0, quantity) * Math.max(0, rateCents);
}

/** Storefronts beyond the first, which is included in the platform fee. */
export function billableStorefronts(storefronts: number, included = 1): number {
  return Math.max(0, storefronts - included);
}

// ─── Statement ────────────────────────────────────────────────────────────────

export interface StatementCounts {
  drivers: number;
  vehicles: number;
  storefronts: number;
}

export type MeterCounts = Partial<Record<MeterKey, number>>;

export interface StatementLine {
  key: string;
  label: string;
  detail: string | null;
  quantity: number;
  rate: number;
  per: number | null;
  amount: number;
  metered: boolean;
}

export interface Statement {
  lines: StatementLine[];
  /** Recurring lines only. */
  subtotal: number;
  usageTotal: number;
  estimatedTotal: number;
}

const METER_LABELS: Record<MeterKey, string> = {
  [METER_LEDGER_PAID_INVOICE]: 'Gateway-paid invoices',
  [METER_API_CALL]: 'API calls',
  [METER_WEBHOOK_SEND]: 'Webhook sends',
};

/** "1 driver" / "5 drivers", so the detail line reads naturally. */
function pluralise(count: number, noun: string): string {
  return `${count.toLocaleString()} ${noun}${count === 1 ? '' : 's'}`;
}

/**
 * Assemble the statement — ports `V3Statement::build`.
 *
 * `meters` takes period-to-date counts, so on an annual term the caller passes
 * annual volumes (a monthly figure × 12).
 */
export function buildStatement(
  counts: StatementCounts,
  meters: MeterCounts,
  rates: Rates,
): Statement {
  const lines: StatementLine[] = [];

  // ── Recurring ──────────────────────────────────────────────────────────────
  lines.push({
    key: 'base',
    label: 'Platform fee',
    detail: 'Every module, unlimited users and orders',
    quantity: 1,
    rate: rates.base,
    per: null,
    amount: rates.base,
    metered: false,
  });

  const drivers = Math.max(0, counts.drivers);
  const vehicles = Math.max(0, counts.vehicles);
  const resources = drivers + vehicles;

  lines.push({
    key: 'resource',
    label: 'Drivers and vehicles',
    detail: `${pluralise(drivers, 'driver')} · ${pluralise(vehicles, 'vehicle')}`,
    quantity: resources,
    rate: rates.resource,
    per: null,
    amount: licensedAmount(resources, rates.resource),
    metered: false,
  });

  // Omitted entirely when there are no storefronts. A zero row for a feature
  // they do not use is noise on a statement.
  const storefronts = Math.max(0, counts.storefronts);
  if (storefronts > 0) {
    const included = rates.storefrontsIncluded;
    const billable = billableStorefronts(storefronts, included);

    lines.push({
      key: 'storefront',
      label: 'Storefronts',
      detail: `${pluralise(storefronts, 'storefront')}${included > 0 ? ', first included' : ''}`,
      quantity: billable,
      rate: rates.storefront,
      per: null,
      amount: licensedAmount(billable, rates.storefront),
      metered: false,
    });
  }

  // ── Usage ──────────────────────────────────────────────────────────────────
  for (const event of V3_METER_EVENTS) {
    const quantity = meters[event] ?? 0;
    const { rate, per } = rates.meters[event];

    lines.push({
      key: event,
      label: METER_LABELS[event],
      detail: null,
      quantity,
      rate,
      per,
      amount: meteredAmount(quantity, rate, per),
      metered: true,
    });
  }

  const sum = (metered: boolean) =>
    lines.filter((line) => line.metered === metered).reduce((total, line) => total + line.amount, 0);

  const subtotal = sum(false);
  const usageTotal = sum(true);

  return {
    lines,
    subtotal,
    usageTotal,
    estimatedTotal: subtotal + usageTotal,
  };
}

// ─── Display ──────────────────────────────────────────────────────────────────

/** Cents → "$184.60". Whole dollars keep their `.00` so a column stays aligned. */
export function formatCents(cents: number): string {
  return `$${(cents / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/**
 * The unit rate as it reads on a statement row — "$0.25 per 100,000" for a
 * block meter, "$5.00" for a licensed line.
 */
export function formatRate(rate: number, per: number | null): string {
  if (per !== null && per > 1) {
    return `${formatCents(rate)} per ${per.toLocaleString()}`;
  }

  return formatCents(rate);
}
