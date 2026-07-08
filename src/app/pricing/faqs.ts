export const PRICING_FAQS = [
  // Top 3 are framed around real buyer fears: predictability, growth, licensing.
  {
    question: 'Will my bill be predictable?',
    answer:
      "Yes. Your monthly plan price is fixed, and it includes a set allocation of resource units that covers your normal activity. You only pay more if you exceed that allocation — and even then you're in control: buy a one-time top-up pack when you need it, or move up a plan for a lower per-unit rate. There are no per-seat charges and no surprise invoices. Add unlimited users and drivers without changing your price.",
  },
  {
    question: 'What happens if I outgrow my plan?',
    answer:
      'Upgrading is instant and self-serve — move to a higher plan any time from the console and it takes effect immediately, with a lower cost per unit as you scale. Need a little more room this month but not a full upgrade? Buy a top-up pack (from 100 units) mid-cycle and keep going. You never get locked out or throttled mid-operation.',
  },
  {
    question: 'Do I need a Commercial License?',
    answer:
      "Almost certainly not. Standard use of Fleetbase — running your operation on Cloud or self-hosting the open-source platform — needs no commercial license. You'd only need one if you plan to build proprietary, closed-source extensions and keep that custom code private (the core platform is AGPL). If that's you, see the commercial licensing page; if not, you can ignore it entirely.",
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes — every Cloud plan includes a free trial that runs for 7 days or 50 resource units, whichever comes first, so you can evaluate the platform against real operational usage before committing to a paid plan.',
  },
  {
    question: 'What is a Resource Unit?',
    answer:
      'Resource Units are the currency of your Fleetbase Cloud plan. Each resource type consumes a set number of units: Orders = 2 units; Users = 5 units; Webhooks = 5 units; Contacts, Places, Vendors, Vehicles, Drivers, Service Rates, Service Areas, Zones, and API Keys = 1 unit each. Most resources reset each billing cycle. Rolling resources — Users, Vehicles, Drivers, Webhooks, and API Keys — do not reset; their count persists into the next billing cycle. You only pay overage for usage beyond your monthly allocation.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes. You can upgrade or downgrade your Cloud plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.',
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
    question: 'Can I add more Resource Units mid-month?',
    answer:
      'Yes. You can purchase Resource Unit Packs at any time: Small (100 units / $90), Medium (300 units / $240), Large (500 units / $375), or Jumbo (1,000 units / $700). These top up your allocation immediately.',
  },
  {
    question: 'What is Professional Services?',
    answer:
      'Professional Services covers custom development work — building bespoke extensions, integrating with your existing ERP/CRM, custom workflow automation, data migration, and training. Pricing is scoped per project. Contact our sales team for a quote.',
  },
];
