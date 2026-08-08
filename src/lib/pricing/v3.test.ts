/**
 * Ported from `packages/billing/server/tests/Unit/V3StatementTest.php`.
 *
 * These are the numbers the /pricing calculator quotes and a customer later
 * reconciles against their card statement, so they are worth pinning down. The
 * block-rounding rule in particular has to mirror Stripe's transform_quantity
 * exactly — round the wrong way and the site quotes more than we charge.
 *
 * Run with `pnpm test`.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  ANNUAL_DISCOUNT,
  buildStatement,
  licensedAmount,
  METER_API_CALL,
  METER_LEDGER_PAID_INVOICE,
  METER_WEBHOOK_SEND,
  meteredAmount,
  type Statement,
  V3_METER_EVENTS,
  V3_RATES,
} from './v3.ts';

const rates = V3_RATES.month;

function lineFor(statement: Statement, key: string) {
  return statement.lines.find((line) => line.key === key) ?? null;
}

describe('meteredAmount', () => {
  it('charges block meters only for whole blocks', () => {
    // Mirrors transform_quantity {divide_by: 100000, round: down}, which is what
    // makes the first 100,000 events each period genuinely free.
    const cases: Array<[label: string, usage: number, expected: number]> = [
      ['nothing used', 0, 0],
      ['half a block', 50_000, 0],
      ['one short', 99_999, 0],
      ['exactly one block', 100_000, 25],
      ['two and a half', 250_000, 50],
      ['ten blocks', 1_000_000, 250],
    ];

    for (const [label, usage, expected] of cases) {
      assert.equal(meteredAmount(usage, 25, 100_000), expected, label);
    }
  });

  it('charges per-event meters for every event', () => {
    // The Ledger meter has a block size of 1, so nothing is free.
    assert.equal(meteredAmount(6, 10, 1), 60);
    assert.equal(meteredAmount(1, 10, 1), 10);
    assert.equal(meteredAmount(0, 10, 1), 0);
  });

  it('never returns a negative or nonsensical amount', () => {
    assert.equal(meteredAmount(-5, 25, 100_000), 0);
    assert.equal(meteredAmount(100, 0, 10), 0);
    // A block size of zero would be a division by zero rather than free.
    assert.equal(meteredAmount(100, 25, 0), 2500);
    assert.equal(licensedAmount(-3, 500), 0);
  });
});

describe('buildStatement', () => {
  it('reconciles the worked example', () => {
    // 25 drivers, 5 vehicles, 2 storefronts (1 billable), 6 gateway-paid
    // invoices and no API or webhook traffic.
    const statement = buildStatement(
      { drivers: 25, vehicles: 5, storefronts: 2 },
      { [METER_LEDGER_PAID_INVOICE]: 6, [METER_API_CALL]: 0, [METER_WEBHOOK_SEND]: 0 },
      rates,
    );

    // $29 base + 30 × $5 + 1 × $5
    assert.equal(statement.subtotal, 18400);
    assert.equal(statement.usageTotal, 60);
    assert.equal(statement.estimatedTotal, 18460);
  });

  it('keeps recurring and usage totals separate', () => {
    const statement = buildStatement(
      { drivers: 10, vehicles: 0, storefronts: 0 },
      { [METER_API_CALL]: 250_000 },
      rates,
    );

    // Metered lines must not leak into the recurring subtotal — that is the bug
    // that had the header reading $184.60 instead of $184.00.
    assert.equal(statement.subtotal, 2900 + 5000);
    assert.equal(statement.usageTotal, 50);
    assert.equal(statement.estimatedTotal, statement.subtotal + statement.usageTotal);
  });

  it('omits the storefront line when there are none', () => {
    const none = buildStatement({ drivers: 3, vehicles: 2, storefronts: 0 }, {}, rates);

    // A zero row for a feature the customer does not use is noise.
    assert.equal(lineFor(none, 'storefront'), null);

    const some = buildStatement({ drivers: 3, vehicles: 2, storefronts: 3 }, {}, rates);

    assert.notEqual(lineFor(some, 'storefront'), null);
    assert.equal(lineFor(some, 'storefront')?.quantity, 2);
    assert.equal(lineFor(some, 'storefront')?.amount, 1000);
  });

  it('always shows every meter, including unused ones', () => {
    const statement = buildStatement({ drivers: 1, vehicles: 0, storefronts: 0 }, {}, rates);

    // A customer should be able to see the meter exists and is costing nothing,
    // rather than wonder whether it is being counted at all.
    for (const event of V3_METER_EVENTS) {
      assert.notEqual(lineFor(statement, event), null, event);
      assert.equal(lineFor(statement, event)?.quantity, 0, event);
      assert.equal(lineFor(statement, event)?.amount, 0, event);
    }
  });

  it('describes the resource line in terms the customer recognises', () => {
    const statement = buildStatement({ drivers: 1, vehicles: 5, storefronts: 0 }, {}, rates);

    assert.equal(lineFor(statement, 'resource')?.detail, '1 driver · 5 vehicles');
    assert.equal(lineFor(statement, 'resource')?.quantity, 6);
    assert.equal(lineFor(statement, 'resource')?.amount, 3000);
  });
});

// ── Claims the pricing page makes, asserted against the rate table ───────────
// These are not in the PHP suite; they pin the specific promises the marketing
// copy makes, so a rate-table edit that contradicts the page fails here.

describe('published claims', () => {
  it('gives the first storefront away', () => {
    const withNone = buildStatement({ drivers: 5, vehicles: 3, storefronts: 0 }, {}, rates);
    const withOne = buildStatement({ drivers: 5, vehicles: 3, storefronts: 1 }, {}, rates);

    assert.equal(withOne.subtotal, withNone.subtotal);
    assert.equal(lineFor(withOne, 'storefront')?.amount, 0);
  });

  it('takes exactly 20% off the recurring lines on an annual term', () => {
    const monthly = buildStatement({ drivers: 5, vehicles: 3, storefronts: 4 }, {}, V3_RATES.month);
    const annual = buildStatement({ drivers: 5, vehicles: 3, storefronts: 4 }, {}, V3_RATES.year);

    assert.equal(annual.subtotal, Math.round(monthly.subtotal * 12 * (1 - ANNUAL_DISCOUNT)));
  });

  it('charges usage at identical rates on both intervals', () => {
    for (const event of V3_METER_EVENTS) {
      assert.deepEqual(V3_RATES.year.meters[event], V3_RATES.month.meters[event], event);
    }
  });

  it('has no order meter to bill, at any volume', () => {
    // The headline claim — "never pay a per-delivery fee" — rests on there being
    // no order line on the statement at all, not on it being priced at zero.
    const statement = buildStatement({ drivers: 5, vehicles: 3, storefronts: 2 }, {}, rates);

    assert.deepEqual(statement.lines.map((line) => line.key), [
      'base',
      'resource',
      'storefront',
      METER_LEDGER_PAID_INVOICE,
      METER_API_CALL,
      METER_WEBHOOK_SEND,
    ]);
  });
});
