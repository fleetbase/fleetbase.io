/*
 * Every claim here is checked against the billing engine
 * (`packages/billing/server/src/Support/V3Statement.php` and the `plans_v3`
 * rate table). In particular: nothing promises a flat bill. Gateway-paid
 * invoices bill per invoice, so a busier month genuinely can cost more, and the
 * honest version of that is "you never pay a per-delivery fee".
 */
export const PRICING_FAQS = [
  // Top 3 are the questions a fleet owner asks before anything else.
  {
    question: 'Do I pay per order?',
    answer:
      'No — and there is no volume at which you start to. Orders and deliveries are not metered, not capped, and do not appear on your bill at all. Run fifty a month or fifty thousand: the order count is not part of the calculation. This is the main difference between Fleetbase and dispatch tools that charge per task or per delivery, where growth in volume is growth in your software bill.',
  },
  {
    question: 'What counts as a driver or vehicle?',
    answer:
      'Each driver record and each vehicle record on your account, counted from your live records — $5 a month each, or $48 a year each on an annual term. A driver and a vehicle cost the same. Users, contacts, places, vendors, service rates, service areas and zones are not counted and are unlimited, so back-office staff, dispatchers and administrators never add to your bill.',
  },
  {
    question: 'What happens if I remove a vehicle?',
    answer:
      'You stop paying for it. Quantities are synced from your live records rather than from a plan you picked when you signed up, so taking a vehicle off the road or offboarding a driver reduces the recurring lines on your next statement. There is no tier to downgrade and nothing to renegotiate — seasonal operations can scale down as easily as they scale up.',
  },
  {
    question: 'What is a gateway-paid invoice?',
    answer:
      'An invoice settled through a payment gateway you have connected to Fleetbase — a customer paying you by card, for example. Those are charged at $0.10 each, with no free allowance. Invoices you mark as paid yourself, such as cash on delivery or a bank transfer you reconcile manually, cost nothing. If you do not collect payment through Fleetbase, this line is always $0.00.',
  },
  {
    question: 'Will I be charged for API usage?',
    answer:
      'Only at volume. API calls and webhook sends are charged at $0.25 per 100,000, and the first 100,000 of each every billing period are free. Blocks are counted whole and rounded down, so 99,999 API calls in a period cost nothing and 100,000 cost $0.25. Most operations never reach the first block. API credentials and webhook endpoints themselves are unlimited and free.',
  },
  {
    question: 'Is my bill the same every month?',
    answer:
      'The recurring part is: $29 plus $5 for each driver and vehicle, and $5 for each storefront beyond the first. That only changes when you add or remove one. On top of that, three things are genuinely usage-based — gateway-paid invoices, API calls and webhook sends — so a much busier month can cost slightly more. What never varies is the order volume: that is free at any scale.',
  },
  {
    question: 'What happens when my trial ends?',
    answer:
      'The 7-day trial gives you the full platform with no feature restrictions. When it ends you move onto the standard plan — $29 a month plus your drivers, vehicles and storefronts — and you can see exactly what that will be from the calculator on this page before you start. Nothing is switched off mid-operation without notice, and you can cancel from the console at any time.',
  },
  {
    question: 'Do I have to pick a plan or a tier?',
    answer:
      'There is only one plan. Every module ships to every customer on day one — dispatch, routing, live tracking, the driver app, accounting and the e-commerce suite — with no add-ons, no feature gates and no upsells. The only thing that varies between two Fleetbase customers is how many drivers, vehicles and storefronts they operate.',
  },
  {
    question: 'What is the difference between monthly and annual?',
    answer:
      'Annual takes 20% off the recurring lines — $278.40 a year for the platform fee instead of $348, and $48 a year per driver, vehicle or extra storefront instead of $60. That works out to roughly ten months’ money for twelve months of service. The three usage meters are charged at exactly the same rates either way.',
  },
  {
    question: 'Do I need a Commercial License?',
    answer:
      "Almost certainly not. Standard use of Fleetbase — running your operation on Cloud or self-hosting the open-source platform — needs no commercial license. You'd only need one if you plan to build proprietary, closed-source extensions and keep that custom code private (the core platform is AGPL). If that's you, see the commercial licensing page; if not, you can ignore it entirely.",
  },
  {
    question: 'What is the difference between Cloud and Self-Hosted?',
    answer:
      'Fleetbase Cloud is fully managed by us — we handle infrastructure, security patches, and uptime. Self-Hosted means you deploy Fleetbase on your own servers or cloud account. The one-time $2,500 implementation fee covers deployment, CI/CD setup, configuration, and branding.',
  },
  {
    question: 'What does the Self-Hosted implementation fee include?',
    answer:
      'The $2,500 one-time fee covers: server deployment on your infrastructure, CI/CD pipeline setup, environment configuration, custom branding, and a go-live handover session. Ongoing support is available separately via our support tiers.',
  },
  {
    question: 'What is Professional Services?',
    answer:
      'Professional Services covers custom development work — building bespoke extensions, integrating with your existing ERP/CRM, custom workflow automation, data migration, and training. Pricing is scoped per project. Contact our sales team for a quote.',
  },
];
