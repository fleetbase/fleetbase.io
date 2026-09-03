/**
 * Per-collection configuration for the API-docs generator.
 *
 * Each entry's key matches the collection-folder name in the postman repo
 * (`vendor/postman/postman/collections/<key>`). When a new collection is
 * added in the postman repo, add an entry here to control its slug, sidebar
 * group, and SDK code samples — without an entry, the generator falls back
 * to defaults (sluggified folder name, no SDK samples) and logs a warning.
 *
 * Auto-discovery handles everything else (resources, endpoints, examples).
 */

/** @typedef {{ pkg: string; client: string; stores: Record<string, string>; orderActions?: Record<string, string> }} JsSdkConfig */
/** @typedef {{ pkg: string; client: string; stores: Record<string, string>; orderActions?: Record<string, string> }} PhpSdkConfig */
/** @typedef {{ js?: JsSdkConfig; php?: PhpSdkConfig }} SdkConfig */
/** @typedef {{ slug: string; sidebarGroup: string; type: 'api' | 'workflow'; sdk?: SdkConfig }} ApiConfig */

/**
 * Resource-folder name → SDK store name. Both JS and PHP SDKs use the same
 * store names on the client, so we share the map between languages and only
 * vary the package/client identifier.
 *
 * Folders not in this map fall back to a sluggified guess (e.g. "Tracking
 * Numbers" → "trackingNumbers") which is correct most of the time but worth
 * verifying against the SDK source when adding a new resource.
 */
const fleetbaseStores = {
  Places: 'places',
  'Service Areas': 'serviceAreas',
  Zones: 'zones',
  Contacts: 'contacts',
  Vendors: 'vendors',
  Vehicles: 'vehicles',
  Drivers: 'drivers',
  Orders: 'orders',
  Fleets: 'fleets',
  Entities: 'entities',
  'Service Rates': 'serviceRates',
  'Service Quotes': 'serviceQuotes',
  'Tracking Statuses': 'trackingStatuses',
};

/**
 * Order-resource custom actions exposed on the SDK Order instance.
 * Endpoint names matching these keys produce SDK code samples like
 * `order.dispatch()` instead of generic `update()` calls.
 */
const orderActions = {
  'Dispatch an Order': 'dispatch',
  'Start an Order': 'start',
  'Cancel an Order': 'cancel',
  'Cancel an Order.': 'cancel',
  'Update Order Activity': 'updateActivity',
  'Get Order Next Activity': 'getNextActivity',
  'Set Order Destination': 'setDestination',
  'Capture Signature for Order': 'captureSignature',
  'Capture QR Code for Order': 'captureQrCode',
  'Schedule an Order': 'update', // schedule is a PATCH /orders/:id with scheduled_at
};

const storefrontStores = {
  Products: 'products',
  Cart: 'cart',
  Customer: 'customers',
  Category: 'categories',
  'Store Locations': 'storeLocations',
  Reviews: 'reviews',
  Checkout: 'checkout',
  'Delivery Service Quote': 'deliveryServiceQuotes',
  Store: 'store',
  // 'Food Trucks' and 'Orders' added in the latest collection update — fall
  // through to sluggified guesses ('foodTrucks', 'orders') until the SDK
  // exposes them as named stores.
};

/**
 * Core API resources exposed by the main Fleetbase SDK clients. JavaScript
 * remains limited to its implemented stores; PHP mappings are enforced by the
 * generated SDK example catalog.
 */
const coreStores = {
  'Chat Channels': 'chatChannels',
  Comments: 'comments',
  Files: 'files',
  Organizations: 'organizations',
};

/** @type {Record<string, ApiConfig>} */
export const apis = {
  'Fleetbase API': {
    slug: 'fleetbase',
    sidebarGroup: 'Fleetbase API',
    type: 'api',
    sdk: {
      js: {
        pkg: '@fleetbase/sdk',
        client: 'fleetbase',
        stores: fleetbaseStores,
        orderActions,
      },
      php: {
        pkg: 'fleetbase/fleetbase-php',
        client: 'fleetbase',
        stores: fleetbaseStores,
        orderActions,
      },
    },
  },

  'Fleetbase Core API': {
    slug: 'core',
    sidebarGroup: 'Core API',
    type: 'api',
    sdk: {
      // JavaScript currently maps organizations through the main SDK. PHP has
      // first-class services for every Core collection listed below.
      js: {
        pkg: '@fleetbase/sdk',
        client: 'fleetbase',
        stores: coreStores,
      },
      php: {
        pkg: 'fleetbase/fleetbase-php',
        client: 'fleetbase',
        stores: coreStores,
      },
    },
  },

  'Fleetbase Ledger API': {
    slug: 'ledger',
    sidebarGroup: 'Ledger API',
    type: 'api',
    // No Ledger SDK yet — generator emits raw HTTP samples for JS and PHP.
  },

  'Fleetbase Storefront API': {
    slug: 'storefront',
    sidebarGroup: 'Storefront API',
    type: 'api',
    sdk: {
      js: {
        pkg: '@fleetbase/storefront-js',
        client: 'storefront',
        stores: storefrontStores,
      },
      // No PHP SDK for Storefront yet — generator will fall back to raw HTTP for PHP.
    },
  },

  'Fleetbase Integrated Vendor Flow': {
    slug: 'workflows/integrated-vendor',
    sidebarGroup: 'Workflows',
    type: 'workflow',
  },
};

/** Default config when an unknown collection folder is discovered. */
export function defaultConfig(folderName) {
  return {
    slug: folderName
      .toLowerCase()
      .replace(/^fleetbase\s+/i, '')
      .replace(/\s+api$/i, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, ''),
    sidebarGroup: 'APIs',
    type: 'api',
  };
}
