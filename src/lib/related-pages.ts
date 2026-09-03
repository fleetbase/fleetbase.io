// Cross-links between the pages built for buyer intent.
//
// The homepage has 620 referring pages; the next best has 21. Meanwhile the
// /solutions role and use-case pages had a single inbound internal link each,
// so none of that authority reached them. These pairings connect each platform
// module to the roles and industries that actually buy it, and back again, so
// the cluster shares the authority instead of stranding it on the homepage.
//
// Keep both directions in sync when editing: if A lists B, B should list A.

export type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export const RELATED_PAGES: Record<string, RelatedLink[]> = {
  // ── Platform modules → the roles, industries and comparisons that match ──
  '/platform/fleetops': [
    { label: 'For Fleet Managers', href: '/solutions/roles/fleet-managers', description: 'Vehicle health, compliance and driver performance in one place.' },
    { label: 'Trucking & Haulage', href: '/solutions/trucking', description: 'Replace a legacy TMS with open-source fleet management.' },
    { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery', description: 'Automate dispatch and cut failed deliveries.' },
    { label: 'Route Optimization', href: '/solutions/use-cases/route-optimization', description: 'Multi-stop routing with live traffic and time windows.' },
    { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet', description: 'The open-source alternative, without per-task pricing.' },
  ],
  '/platform/navigator': [
    { label: 'For Fleet Managers', href: '/solutions/roles/fleet-managers', description: 'Give drivers an app you control end to end.' },
    { label: 'Courier & Parcel', href: '/solutions/courier-services', description: 'Proof of delivery and live tracking for courier work.' },
    { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery', description: 'Turn-by-turn navigation and digital POD.' },
    { label: 'Fleetbase vs Tookan', href: '/compare/vs-tookan', description: 'No agent-based pricing, and the source is yours.' },
  ],
  '/platform/pallet': [
    { label: 'For Warehouse Managers', href: '/solutions/roles/warehouse-managers', description: 'Inventory, pick-and-pack and outbound dispatch.' },
    { label: 'E-commerce & Retail', href: '/solutions/ecommerce', description: 'Connect stock to same-day and next-day delivery.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'Configurable workflows for any order type.' },
    { label: 'Container Operations', href: '/solutions/container-operations', description: 'Yard and multi-modal container visibility.' },
  ],
  '/platform/storefront': [
    { label: 'E-commerce & Retail', href: '/solutions/ecommerce', description: 'Headless commerce wired straight into delivery.' },
    { label: 'Food & Grocery Delivery', href: '/solutions/food-delivery', description: 'On-demand ordering with live customer tracking.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'One order pipeline from checkout to doorstep.' },
  ],
  '/platform/ledger': [
    { label: 'For Executives', href: '/solutions/roles/executives', description: 'Cost efficiency and margin visibility across the fleet.' },
    { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics', description: 'Turn operational data into decisions.' },
    { label: 'Pricing', href: '/pricing', description: 'One plan, every module, no per-delivery fee.' },
  ],
  '/platform/ai': [
    { label: 'For Executives', href: '/solutions/roles/executives', description: 'Ask operational questions in plain language.' },
    { label: 'Route Optimization', href: '/solutions/use-cases/route-optimization', description: 'AI routing across live constraints.' },
    { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics', description: 'Insights over your own order history.' },
  ],
  '/platform/developer-console': [
    { label: 'For Developers', href: '/solutions/roles/developers', description: 'API keys, webhooks and monitoring in one console.' },
    { label: 'API & Integrations', href: '/solutions/use-cases/integrations', description: 'Connect Fleetbase to the rest of your stack.' },
    { label: 'Developer Hub', href: '/developers', description: 'REST API, SDKs and the extension framework.' },
  ],
  '/platform/extensions': [
    { label: 'For Developers', href: '/solutions/roles/developers', description: 'Build and publish your own modules.' },
    { label: 'API & Integrations', href: '/solutions/use-cases/integrations', description: 'Pre-built integrations and a full REST API.' },
    { label: 'Build an Extension', href: '/developers/extensions', description: 'Scaffold a full-stack module with the CLI.' },
  ],
  '/platform/security': [
    { label: 'Military & Government', href: '/solutions/government', description: 'Self-hosted, air-gap capable, sovereign by design.' },
    { label: 'Healthcare & Pharmacy', href: '/solutions/healthcare', description: 'Chain-of-custody and encrypted audit trails.' },
    { label: 'For Executives', href: '/solutions/roles/executives', description: 'Compliance posture without vendor lock-in.' },
  ],
  '/platform/mobile': [
    { label: 'Navigator Driver App', href: '/platform/navigator', description: 'The open-source app your drivers carry.' },
    { label: 'Courier & Parcel', href: '/solutions/courier-services', description: 'Branded apps for courier operations.' },
    { label: 'Food & Grocery Delivery', href: '/solutions/food-delivery', description: 'Customer ordering and driver dispatch.' },
  ],

  // ── Roles → the modules and comparisons that serve them ──
  '/solutions/roles/fleet-managers': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Dispatch, tracking and maintenance in one module.' },
    { label: 'Navigator Driver App', href: '/platform/navigator', description: 'Real-time dispatch and proof of delivery.' },
    { label: 'Trucking & Haulage', href: '/solutions/trucking', description: 'Built for haulage and long-distance fleets.' },
    { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet', description: 'How we compare on price and ownership.' },
  ],
  '/solutions/roles/operations-managers': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'One dashboard for dispatch and exceptions.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'Custom workflows, statuses and fields.' },
    { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics', description: 'SLA and performance reporting.' },
  ],
  '/solutions/roles/warehouse-managers': [
    { label: 'Pallet WMS', href: '/platform/pallet', description: 'Inventory, cycle counts and fulfilment.' },
    { label: 'E-commerce & Retail', href: '/solutions/ecommerce', description: 'Stock connected to delivery promises.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'Outbound orders end to end.' },
  ],
  '/solutions/roles/executives': [
    { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics', description: 'Cost, SLA and growth metrics.' },
    { label: 'Ledger', href: '/platform/ledger', description: 'Financial management inside the platform.' },
    { label: 'Pricing', href: '/pricing', description: 'Predictable cost with no per-delivery fee.' },
  ],
  '/solutions/roles/developers': [
    { label: 'Developer Hub', href: '/developers', description: 'REST API, SDKs, webhooks and extensions.' },
    { label: 'Developer Console', href: '/platform/developer-console', description: 'Keys, webhooks and request monitoring.' },
    { label: 'API & Integrations', href: '/solutions/use-cases/integrations', description: 'Fit Fleetbase to your existing stack.' },
  ],
  '/solutions/roles/customer-success': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Live order status for every enquiry.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'Track and resolve orders in one place.' },
    { label: 'Storefront', href: '/platform/storefront', description: 'Branded tracking your customers trust.' },
  ],

  // ── Use cases → modules and comparisons ──
  '/solutions/use-cases/last-mile-delivery': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Automated dispatch and live tracking.' },
    { label: 'Navigator Driver App', href: '/platform/navigator', description: 'Navigation and proof of delivery.' },
    { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet', description: 'The open-source last-mile alternative.' },
  ],
  '/solutions/use-cases/route-optimization': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Routing built into dispatch, not bolted on.' },
    { label: 'Fleetbase vs Route4Me', href: '/compare/vs-route4me', description: 'Routing plus a full platform, no per-route fee.' },
    { label: 'Logistics AI', href: '/platform/ai', description: 'AI routing across live constraints.' },
  ],
  '/solutions/use-cases/fleet-management': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Tracking, maintenance and compliance.' },
    { label: 'For Fleet Managers', href: '/solutions/roles/fleet-managers', description: 'Built around the fleet manager’s day.' },
    { label: 'Trucking & Haulage', href: '/solutions/trucking', description: 'Haulage-specific workflows and compliance.' },
  ],
  '/solutions/use-cases/order-management': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Configurable order types and activity flows.' },
    { label: 'Storefront', href: '/platform/storefront', description: 'Orders from checkout through delivery.' },
    { label: 'Pallet WMS', href: '/platform/pallet', description: 'Pick, pack and fulfil against stock.' },
  ],
  '/solutions/use-cases/analytics': [
    { label: 'Ledger', href: '/platform/ledger', description: 'Financial reporting alongside operations.' },
    { label: 'For Executives', href: '/solutions/roles/executives', description: 'The numbers leadership asks for.' },
    { label: 'Logistics AI', href: '/platform/ai', description: 'Ask questions of your own data.' },
  ],
  '/solutions/use-cases/integrations': [
    { label: 'Developer Hub', href: '/developers', description: 'REST API, SDKs and webhooks.' },
    { label: 'Extensions Marketplace', href: '/platform/extensions', description: 'Install or publish integrations.' },
    { label: 'For Developers', href: '/solutions/roles/developers', description: 'An API-first platform you can own.' },
  ],

  // ── Industries → modules ──
  '/solutions/trucking': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Dispatch, tracking and maintenance.' },
    { label: 'For Fleet Managers', href: '/solutions/roles/fleet-managers', description: 'Compliance and driver performance.' },
    { label: 'Fleet Management', href: '/solutions/use-cases/fleet-management', description: 'The full fleet management picture.' },
  ],
  '/solutions/food-delivery': [
    { label: 'Storefront', href: '/platform/storefront', description: 'Branded ordering for on-demand food.' },
    { label: 'Navigator Driver App', href: '/platform/navigator', description: 'Dispatch and live customer tracking.' },
    { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery', description: 'Speed and reliability at the door.' },
  ],
  '/solutions/courier-services': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Automated dispatch at courier volume.' },
    { label: 'Navigator Driver App', href: '/platform/navigator', description: 'Scan, deliver and capture POD.' },
    { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery', description: 'First-attempt delivery rates.' },
  ],
  '/solutions/ecommerce': [
    { label: 'Storefront', href: '/platform/storefront', description: 'Headless commerce with zero commission.' },
    { label: 'Pallet WMS', href: '/platform/pallet', description: 'Stock, picking and fulfilment.' },
    { label: 'Order Management', href: '/solutions/use-cases/order-management', description: 'Checkout to doorstep in one pipeline.' },
  ],
  '/solutions/healthcare': [
    { label: 'Security & Compliance', href: '/platform/security', description: 'Encryption, RBAC and audit trails.' },
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Priority dispatch and chain of custody.' },
    { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery', description: 'Time-critical delivery workflows.' },
  ],
  '/solutions/waste-management': [
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Collection rounds and vehicle maintenance.' },
    { label: 'Route Optimization', href: '/solutions/use-cases/route-optimization', description: 'Optimise collection routes and fuel.' },
    { label: 'For Fleet Managers', href: '/solutions/roles/fleet-managers', description: 'Compliance reporting for the fleet.' },
  ],
  '/solutions/container-operations': [
    { label: 'Pallet WMS', href: '/platform/pallet', description: 'Yard, warehouse and container stock.' },
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Drayage and multi-modal movements.' },
    { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics', description: 'Dwell time and throughput reporting.' },
  ],
  '/solutions/government': [
    { label: 'Security & Compliance', href: '/platform/security', description: 'Air-gap capable and self-hosted.' },
    { label: 'Fleet-Ops', href: '/platform/fleetops', description: 'Fleet operations you fully control.' },
    { label: 'Open Source Mission', href: '/company/open-source', description: 'Why the source being open matters here.' },
  ],
};

export function relatedPagesFor(pathname: string): RelatedLink[] {
  // Tolerate a trailing slash so the lookup matches however the route resolved.
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return RELATED_PAGES[key] ?? [];
}
