import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Globe,
  Key,
  Layers,
  MapPin,
  Package,
  Receipt,
  Truck,
  User,
  UserRound,
  Users,
  Webhook,
} from 'lucide-react';

// ─── Cloud Pricing Tiers (v3) ─────────────────────────────────────────────────
// v3 model: same prices and overage rates as v2; allocations expanded ~1.5–2×.
// Mirrors fleetbase/billing/server/config/plans.php — keep in sync.
export type CloudTier = {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  units: number;
  overage: number;
  description: string;
  fits?: string;
  featured: boolean;
  highlight: boolean;
  badge: string | null;
};

export const CLOUD_TIERS: CloudTier[] = [
  {
    name: 'Micro',
    monthlyPrice: 25,
    annualPrice: 20,
    units: 150,
    overage: 0.75,
    description: 'Individuals and very small teams.',
    fits: 'Solo operator, 1–2 drivers, ~50 orders/mo',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Lite',
    monthlyPrice: 50,
    annualPrice: 40,
    units: 300,
    overage: 0.75,
    description: 'Small teams getting started.',
    fits: '5 drivers, ~200 orders/mo',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Essential',
    monthlyPrice: 100,
    annualPrice: 80,
    units: 450,
    overage: 0.75,
    description: 'Growing operations with more to manage.',
    fits: '10 drivers, ~400 orders/mo',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Starter',
    monthlyPrice: 200,
    annualPrice: 160,
    units: 600,
    overage: 0.75,
    description: 'Established small teams scaling up.',
    fits: '15 drivers, ~600 orders/mo',
    featured: true,
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Starter Plus',
    monthlyPrice: 300,
    annualPrice: 240,
    units: 1000,
    overage: 0.65,
    description: 'Enhanced capacity at a lower unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Scale',
    monthlyPrice: 400,
    annualPrice: 320,
    units: 1500,
    overage: 0.55,
    description: 'High-volume operational teams.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Scale Plus',
    monthlyPrice: 500,
    annualPrice: 400,
    units: 2200,
    overage: 0.45,
    description: 'Serious scale with a lower unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro',
    monthlyPrice: 600,
    annualPrice: 480,
    units: 3000,
    overage: 0.4,
    description: 'Power teams running complex operations.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro Plus',
    monthlyPrice: 700,
    annualPrice: 560,
    units: 4000,
    overage: 0.35,
    description: 'High-throughput pro operations.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Elite',
    monthlyPrice: 800,
    annualPrice: 640,
    units: 5500,
    overage: 0.3,
    description: 'Enterprise-grade volume at high velocity.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Elite Plus',
    monthlyPrice: 900,
    annualPrice: 720,
    units: 7000,
    overage: 0.25,
    description: 'Maximum capacity before Enterprise.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 1000,
    annualPrice: 800,
    units: 9000,
    overage: 0.2,
    description: 'Full enterprise scale with the lowest unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Enterprise Plus',
    monthlyPrice: 1500,
    annualPrice: 1200,
    units: 12000,
    overage: 0.15,
    description: 'Largest cloud plan. Maximum capacity.',
    featured: false,
    highlight: false,
    badge: null,
  },
];

export const FEATURED_TIERS = CLOUD_TIERS.filter((t) => t.featured);

// ─── Resource Units (v3) ──────────────────────────────────────────────────────
// `billable: false` means tracked-for-visibility-only (orders, drivers).
// `rolling: true` means the unit count persists across billing cycles.
export type ResourceUnit = {
  icon: LucideIcon;
  label: string;
  key: string;
  units: number;
  rolling: boolean;
  billable: boolean;
};

export const RESOURCE_UNITS: ResourceUnit[] = [
  { icon: Package,    label: 'Order',         key: 'orders',        units: 0, rolling: false, billable: false },
  { icon: User,       label: 'Driver',        key: 'drivers',       units: 0, rolling: true,  billable: false },
  { icon: Truck,      label: 'Vehicle',       key: 'vehicles',      units: 1, rolling: true,  billable: true },
  { icon: UserRound,  label: 'Contact',       key: 'contacts',      units: 1, rolling: false, billable: true },
  { icon: MapPin,     label: 'Place',         key: 'places',        units: 1, rolling: false, billable: true },
  { icon: Building2,  label: 'Vendor',        key: 'vendors',       units: 1, rolling: false, billable: true },
  { icon: Receipt,    label: 'Service Rate',  key: 'serviceRates',  units: 1, rolling: false, billable: true },
  { icon: Globe,      label: 'Service Area',  key: 'serviceAreas',  units: 1, rolling: false, billable: true },
  { icon: Layers,     label: 'Zone',          key: 'zones',         units: 1, rolling: false, billable: true },
  { icon: Key,        label: 'API Key',       key: 'apiKeys',       units: 1, rolling: true,  billable: true },
  { icon: Users,      label: 'User',          key: 'users',         units: 5, rolling: true,  billable: true },
  { icon: Webhook,    label: 'Webhook',       key: 'webhooks',      units: 5, rolling: true,  billable: true },
];

// ─── Overage Packs ────────────────────────────────────────────────────────────
export const OVERAGE_PACKS = [
  { name: 'Small', price: 90, units: 100 },
  { name: 'Medium', price: 240, units: 300 },
  { name: 'Large', price: 375, units: 500 },
  { name: 'Jumbo', price: 700, units: 1000 },
];

// ─── Competitor Benchmark ─────────────────────────────────────────────────────
// Verified May 2026. Midpoint of the published per-driver range across
// Detrack, OptimoRoute, and Track-POD ($29–$99/driver/mo).
export const COMPETITOR_PER_DRIVER_USD = 35;

// ─── Recommendation helper ────────────────────────────────────────────────────
// Picks the cheapest plan whose included allocation >= units consumed.
// Returns the largest plan + the overage if no plan fits.
export function recommendPlan(units: number, billing: 'monthly' | 'annual') {
  const sorted = [...CLOUD_TIERS].sort((a, b) => a.units - b.units);
  const fit = sorted.find((t) => t.units >= units);
  if (fit) {
    return {
      plan: fit,
      overageUnits: 0,
      overageCost: 0,
      totalCost: billing === 'annual' ? fit.annualPrice : fit.monthlyPrice,
      fits: true,
    };
  }
  const largest = sorted[sorted.length - 1];
  const overageUnits = Math.max(0, units - largest.units);
  const overageCost = overageUnits * largest.overage;
  const baseCost = billing === 'annual' ? largest.annualPrice : largest.monthlyPrice;
  return {
    plan: largest,
    overageUnits,
    overageCost,
    totalCost: baseCost + overageCost,
    fits: false,
  };
}

// ─── Usage-to-units helper ────────────────────────────────────────────────────
export type CalculatorInputs = {
  drivers: number;
  vehicles: number;
  orders: number;
  users: number;
  contacts: number;
  places: number;
  vendors: number;
  serviceRates: number;
  serviceAreas: number;
  zones: number;
  webhooks: number;
  apiKeys: number;
};

export function computeUnits(inputs: CalculatorInputs): {
  total: number;
  breakdown: { key: string; label: string; units: number; quantity: number }[];
} {
  const breakdown: { key: string; label: string; units: number; quantity: number }[] = [];
  let total = 0;

  for (const r of RESOURCE_UNITS) {
    if (!r.billable) continue;
    const quantity = (inputs as unknown as Record<string, number>)[r.key] ?? 0;
    const units = quantity * r.units;
    if (units > 0) {
      breakdown.push({ key: r.key, label: r.label, units, quantity });
      total += units;
    }
  }
  return { total, breakdown };
}
