/**
 * Verified competitor pricing, used by the comparison and roundup pages.
 *
 * Every figure here was read off the vendor's own pricing page on the date in
 * `PRICING_VERIFIED_AT`. Third-party summaries were checked against the source
 * and repeatedly disagreed with it — Onfleet's Launch plan was quoted at $599
 * when the page said $619, Tookan's Startup at $99 when the page said $129 — so
 * nothing in this file should be updated from a review site, a competitor's
 * blog, or an AI summary. Open the vendor's pricing page.
 *
 * `pricingPublic: false` is a fact about the vendor, not a gap in our research:
 * Bringg, Samsara and Motive publish no rates at all. Where a range is given
 * for those, it is attributed and labelled as an estimate, never presented as
 * the vendor's price.
 *
 * Refresh quarterly alongside the "last updated" date on the pages themselves.
 */

export const PRICING_VERIFIED_AT = '2026-09-03';

export type Competitor = {
  slug: string;
  name: string;
  /** One line on what the product actually is. */
  category: string;
  /** Whether the vendor publishes rates on its own site. */
  pricingPublic: boolean;
  /** What the meter runs on — the thing most buyers get wrong. */
  billingUnit: string;
  /** Short, quotable price summary. Estimates are labelled inline. */
  pricing: string;
  /** Where the figures came from. */
  source: string;
  strengths: string[];
  limits: string[];
  bestFor: string;
};

export const COMPETITORS: Record<string, Competitor> = {
  onfleet: {
    slug: 'onfleet',
    name: 'Onfleet',
    category: 'Last-mile delivery management',
    pricingPublic: true,
    billingUnit: 'Completed tasks per month, unlimited users',
    pricing:
      'Launch $619/mo (2,500 tasks), Scale $1,349/mo (5,000 tasks), Enterprise from $3,099/mo (10,000+ tasks). Courier Suite add-on from $299/mo.',
    source: 'https://onfleet.com/pricing',
    strengths: [
      'The most polished dispatcher and driver experience in the category',
      'Strong customer-facing tracking and notifications out of the box',
      'Mature API and well-documented webhooks',
    ],
    limits: [
      'Entry price is high for small fleets — $619/mo before a single extra task',
      'Task-metered, so cost scales with delivery volume rather than team size',
      'Cloud only; no self-hosting and no access to the source',
    ],
    bestFor:
      'Funded delivery operations that want the category-leading product and can absorb a four-figure monthly floor.',
  },

  tookan: {
    slug: 'tookan',
    name: 'Tookan',
    category: 'Delivery and field workforce management',
    pricingPublic: true,
    billingUnit: 'Completed tasks per month, unlimited agents',
    pricing:
      'Free tier (100 tasks, 2 agents), Startup $129/mo (1,000 tasks, $0.15 overage), Growth $299/mo (3,000 tasks, $0.12), Standard $499/mo (6,000 tasks, $0.09), Enterprise custom (50,000+ tasks, $0.04).',
    source: 'https://jungleworks.com/tookan/pricing/',
    strengths: [
      'Unlimited agents on every paid plan — adding drivers costs nothing',
      'Cheapest entry point of the established platforms',
      'Part of the wider Jungleworks suite if you also need ordering or chat',
    ],
    limits: [
      'Route optimization, branded driver apps and booking forms are paid add-ons',
      'Task overages add up quickly above plan limits',
      'Cloud only; no self-hosting',
    ],
    bestFor:
      'Gig and contractor fleets with an elastic driver count and predictable task volume.',
  },

  route4me: {
    slug: 'route4me',
    name: 'Route4Me',
    category: 'Route optimization',
    pricingPublic: true,
    billingUnit:
      'Not stated on the pricing page — the page shows monthly rates without saying what they are per',
    pricing:
      'Route Optimization $199/mo, Business Optimization $299/mo, Enterprise Optimization $349/mo. The pricing page does not disclose whether these are per user, per vehicle or per account.',
    source: 'https://www.route4me.com/pricing',
    strengths: [
      'Deep, mature routing engine with a large add-on marketplace',
      'Strong territory and multi-day planning features',
      'Extensive integrations and a documented API',
    ],
    limits: [
      'The billing unit is genuinely unclear from the pricing page — budget carefully',
      'Many routing features are marketplace add-ons priced separately',
      'Routing first; dispatch, POD and commerce need other tools',
    ],
    bestFor:
      'Operations whose core problem is routing complexity rather than end-to-end delivery management.',
  },

  bringg: {
    slug: 'bringg',
    name: 'Bringg',
    category: 'Enterprise delivery orchestration',
    pricingPublic: false,
    billingUnit: 'Custom — quoted per deployment',
    pricing:
      'No published pricing, no free trial, no self-service signup. Third-party buyer data puts typical annual contracts around $20,000, with a floor near $10,000 and enterprise deals far higher. Treat those as third-party estimates, not Bringg figures.',
    source: 'https://www.capterra.com/p/145854/Bringg/',
    strengths: [
      'Built for multi-carrier, multi-region enterprise delivery networks',
      'Strong carrier orchestration and fulfilment routing',
      'Deep retail and 3PL integrations',
    ],
    limits: [
      'Opaque on price — you cannot budget without entering a sales cycle',
      'Sales-led and enterprise-shaped; long procurement even for mid-market',
      'Substantial implementation effort before value',
    ],
    bestFor:
      'Large retailers and 3PLs orchestrating many carriers across regions, with budget and time for enterprise procurement.',
  },

  trackpod: {
    slug: 'trackpod',
    name: 'Track-POD',
    category: 'Proof of delivery and routing',
    pricingPublic: true,
    billingUnit: 'Per driver or per vehicle — you choose the model',
    pricing:
      'Per driver: Standard $49/mo, Advanced $69/mo, Advanced Plus $89/mo (billed annually, 3-driver minimum). Per vehicle with task caps: from $29/mo annually. Enterprise custom, 20-driver minimum.',
    source: 'https://www.track-pod.com/pricing-delivery-app/',
    strengths: [
      'Genuinely strong electronic proof of delivery and ePOD templates',
      'Lets you pick per-driver or per-order billing to fit your shape',
      'Clear published pricing with no mandatory add-ons',
    ],
    limits: [
      'Three-driver minimum puts a floor under the smallest operations',
      'Less suited to on-demand or gig dispatch patterns',
      'Cloud only',
    ],
    bestFor:
      'Scheduled delivery fleets where proof of delivery and paperwork are the core requirement.',
  },

  shipday: {
    slug: 'shipday',
    name: 'Shipday',
    category: 'Local delivery dispatch',
    pricingPublic: true,
    billingUnit: 'Flat monthly fee plus per-order overage, 300 orders included',
    pricing:
      'Basic free (300 orders), Professional Lite $19/mo ($0.04/order over), Professional $39/mo ($0.10), Branded Premium $79/mo ($0.20), Branded Elite $99/mo ($0.20), Business AI $349/mo (1,000 orders, $0.25).',
    source: 'https://www.shipday.com/pricing',
    strengths: [
      'Lowest real entry cost in the category, with a usable free tier',
      'Unlimited drivers from the Professional plan up',
      'Fast to set up for restaurants and local couriers',
    ],
    limits: [
      'Only 300 orders included on nearly every plan — overages dominate the bill at volume',
      'Lighter on fleet management, maintenance and compliance',
      'Cloud only',
    ],
    bestFor:
      'Restaurants and small local couriers under a few hundred orders a month.',
  },

  detrack: {
    slug: 'detrack',
    name: 'Detrack',
    category: 'Delivery tracking and electronic POD',
    pricingPublic: true,
    billingUnit: 'Per driver app, unlimited web users, no per-job fees',
    pricing:
      'Pro $29 per driver/mo, Advanced $39 per driver/mo, Enterprise custom. Annual billing saves 10%. Unlimited jobs with no per-job fees.',
    source: 'https://www.detrack.com/pricing/',
    strengths: [
      'No per-job fees at all — volume does not change the bill',
      'Dispatchers and admins are free; you pay only for drivers',
      'Simple, honest pricing page',
    ],
    limits: [
      'Narrower scope: tracking and POD rather than a full platform',
      'Route optimization is less sophisticated than the routing specialists',
      'Cloud only',
    ],
    bestFor:
      'Fleets with steady driver counts and high job volume, where per-task pricing would punish growth.',
  },

  routific: {
    slug: 'routific',
    name: 'Routific',
    category: 'Route optimization',
    pricingPublic: true,
    billingUnit: 'Per order, since moving off vehicle licensing in mid-2024',
    pricing:
      'Free up to 100 orders/mo. $150/mo flat for 101–1,000 orders, then $150 plus a per-order rate that tapers from $0.15 down to $0.03 as volume rises. Custom above 50,000.',
    source: 'https://routific.com/pricing',
    strengths: [
      'Excellent routing quality for its price point',
      'Order-based pricing suits fluctuating fleet sizes',
      'Clean, genuinely easy-to-learn interface',
    ],
    limits: [
      'Routing and dispatch only — no WMS, commerce or accounting',
      'Costs scale directly with delivery volume',
      'Cloud only',
    ],
    bestFor:
      'Delivery businesses whose fleet size changes week to week and who mainly need good routes.',
  },

  optimoroute: {
    slug: 'optimoroute',
    name: 'OptimoRoute',
    category: 'Route planning and scheduling',
    pricingPublic: true,
    billingUnit: 'Per driver per month',
    pricing:
      'Lite $35.10 per driver/mo and Pro $44.10 per driver/mo, both billed annually. Monthly billing available at roughly 10% more. Custom tier for high volume and multi-day routing.',
    source: 'https://optimoroute.com/pricing/',
    strengths: [
      'Strong multi-day and workforce scheduling, not just single-day routes',
      'Good analytics and realtime order tracking on Pro',
      '30-day trial with no card required',
    ],
    limits: [
      'Per-driver pricing gets expensive as the fleet grows',
      'Pickup/delivery pairing and commercial routing sit behind the custom tier',
      'Cloud only',
    ],
    bestFor:
      'Field service and delivery teams planning work across several days at once.',
  },

  spoke: {
    slug: 'spoke',
    name: 'Spoke Dispatch (formerly Circuit for Teams)',
    category: 'Delivery routing and dispatch',
    pricingPublic: true,
    billingUnit: 'Monthly fee with a stop allowance, then per additional stop',
    pricing:
      'Starter $125/mo (1,000 stops, $0.04 per extra), Premium $200/mo (2,000 stops, $0.06), Expert $1,000/mo (12,000 stops, $0.07).',
    source: 'https://spoke.com/dispatch/pricing',
    strengths: [
      'Very quick to learn; drivers are productive on day one',
      'Good proof of delivery and recipient notifications',
      'Predictable cost while you stay inside the stop allowance',
    ],
    limits: [
      'Rebranded from Circuit for Teams — older reviews and links refer to the previous name',
      'Stop overages make high-volume months hard to predict',
      'Cloud only',
    ],
    bestFor:
      'Small and mid-size delivery teams that value simplicity over configurability.',
  },

  fleetio: {
    slug: 'fleetio',
    name: 'Fleetio',
    category: 'Fleet maintenance management',
    pricingPublic: true,
    billingUnit: 'Per vehicle per month',
    pricing:
      'Essential $4 per vehicle/mo billed annually ($5 monthly), Professional $7, Premium $10 — the latter two annual only. Rates vary by fleet-size band. Tools add-on from about $0.50 per item/mo.',
    source: 'https://www.fleetio.com/pricing',
    strengths: [
      'Best-in-class preventive maintenance, work orders and service history',
      'Genuinely transparent per-vehicle pricing',
      'Strong parts, inventory and inspection workflows',
    ],
    limits: [
      'Maintenance first — no dispatch, routing or customer-facing delivery tracking',
      'Headline rate assumes a small fleet band; larger fleets are quoted differently',
      'Cloud only',
    ],
    bestFor:
      'Fleets whose main job is keeping vehicles serviced, compliant and on the road.',
  },

  samsara: {
    slug: 'samsara',
    name: 'Samsara',
    category: 'Telematics and fleet operations, hardware first',
    pricingPublic: false,
    billingUnit: 'Per vehicle per month, plus hardware, on a multi-year term',
    pricing:
      'No published rates. Independent reviewers report roughly $27–33 per vehicle per month for common feature sets, hardware around $99–148 per vehicle, and a three-year minimum contract. Those are third-party figures, not Samsara’s.',
    source: 'https://tech.co/fleet-management/samsara-fleet-management-review',
    strengths: [
      'Excellent hardware: dash cams, gateways and sensors that genuinely work',
      'Strong safety, driver coaching and ELD compliance',
      'Mature ecosystem and integrations',
    ],
    limits: [
      'Three-year contracts are a serious commitment for a mid-size operator',
      'No public pricing, so budgeting requires a sales cycle',
      'You buy the hardware and the software together; swapping either is hard',
    ],
    bestFor:
      'Regulated fleets that need certified hardware, ELD compliance and safety cameras as one package.',
  },

  motive: {
    slug: 'motive',
    name: 'Motive',
    category: 'Telematics, ELD and fleet safety',
    pricingPublic: false,
    billingUnit: 'Per vehicle per month, plus hardware',
    pricing:
      'No published rates. Independent reviewers estimate from about $25 per vehicle per month, on one-year contracts rather than three. Third-party estimate, not a Motive figure.',
    source: 'https://tech.co/fleet-management/samsara-vs-motive',
    strengths: [
      'Shorter contract terms than the main telematics alternative',
      'Strong ELD compliance and driver safety scoring',
      'Good fuel and spend management tooling',
    ],
    limits: [
      'Pricing still requires a sales conversation',
      'Hardware-led, so the software is tied to the devices',
      'Less suited to delivery dispatch and customer tracking',
    ],
    bestFor:
      'Trucking fleets that want telematics and compliance without a three-year lock-in.',
  },

  simplyfleet: {
    slug: 'simplyfleet',
    name: 'Simply Fleet',
    category: 'Fleet maintenance and inspections',
    pricingPublic: true,
    billingUnit: 'Per vehicle per month, free up to 5 vehicles',
    pricing:
      'Essential $2 per vehicle/mo, Advanced $4 per vehicle/mo. Annual billing $20 and $40 per vehicle/year, about 17% cheaper. Free plan up to 5 vehicles. Note: the vendor’s pricing page states rates increase on 15 September 2026.',
    source: 'https://www.simplyfleet.app/pricing',
    strengths: [
      'The cheapest published per-vehicle rate in this comparison',
      'Genuinely free below 5 vehicles, with no card required',
      'Straightforward maintenance, fuel and inspection tracking',
    ],
    limits: [
      'Maintenance-focused — no dispatch, routing or delivery tracking',
      'A published price rise lands on 15 September 2026; check current rates',
      'Cloud only',
    ],
    bestFor:
      'Small and mid-size fleets that want maintenance tracking at the lowest published cost.',
  },

  whiparound: {
    slug: 'whiparound',
    name: 'Whip Around',
    category: 'Inspections and maintenance',
    pricingPublic: true,
    billingUnit: 'Per asset per month',
    pricing:
      'Reported at roughly $9–10 per asset per month on the Pro tier. Confirm current bands with the vendor.',
    source: 'https://www.capterra.com/p/206316/Simply-Fleet/',
    strengths: [
      'Very strong driver inspection (DVIR) workflows',
      'Quick to roll out across a driver population',
      'Good maintenance triggering off inspection defects',
    ],
    limits: [
      'Inspection-led; lighter as a general fleet platform',
      'No dispatch or delivery management',
      'Cloud only',
    ],
    bestFor:
      'Fleets where daily inspections and defect tracking are the priority.',
  },

  autosist: {
    slug: 'autosist',
    name: 'AUTOsist',
    category: 'Fleet maintenance records',
    pricingPublic: true,
    billingUnit: 'Per vehicle per month with a monthly floor',
    pricing:
      'Per vehicle per month billed annually, with a reported minimum around $59/mo covering 5 vehicles. Confirm current bands with the vendor.',
    source: 'https://autosist.com/pricing/',
    strengths: [
      'Simple, approachable maintenance and document tracking',
      'Low cost for very small fleets',
      'Straightforward mobile app',
    ],
    limits: [
      'Narrow scope — records and reminders rather than operations',
      'No routing, dispatch or customer tracking',
      'Monthly floor makes it less economical below 5 vehicles',
    ],
    bestFor:
      'Small fleets that need service history and reminders without a platform.',
  },

  fleetbase: {
    slug: 'fleetbase',
    name: 'Fleetbase',
    category: 'Open-source logistics platform',
    pricingPublic: true,
    billingUnit:
      'Flat platform fee plus per driver or vehicle. Orders are never metered.',
    pricing:
      'Cloud $29/mo plus $5 per driver or vehicle, every module included, orders free at any volume. Self-hosting is free under AGPL-3.0; managed implementation from $2,500 one-time.',
    source: 'https://fleetbase.io/pricing',
    strengths: [
      'Orders are not metered, so delivery volume never changes the bill',
      'Self-hostable under AGPL-3.0 with the full source available',
      'Dispatch, driver app, WMS, storefront and accounting in one platform',
    ],
    limits: [
      'Younger product than the incumbents, with a smaller partner ecosystem',
      'Self-hosting means you own the infrastructure and upgrades',
      'No first-party telematics hardware — it integrates rather than supplies',
    ],
    bestFor:
      'Operators who want to own their logistics stack, avoid per-delivery fees, or extend the platform themselves.',
  },
};

export function competitor(slug: string): Competitor {
  const found = COMPETITORS[slug];
  if (!found) {
    throw new Error(`Unknown competitor: ${slug}`);
  }
  return found;
}

export function competitors(...slugs: string[]): Competitor[] {
  return slugs.map(competitor);
}
