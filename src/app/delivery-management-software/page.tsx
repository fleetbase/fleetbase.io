import type { Metadata } from 'next';
import { Code2, Boxes, MapPin, Users, FileCheck, BarChart3, Layers, Zap, Bell, Clock, Shield, RefreshCw, Smartphone, Globe } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';
import { FAQSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';

const CANONICAL = 'https://fleetbase.io/delivery-management-software';

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: 'Delivery Management Software',
  description:
    'Fleetbase is open-source delivery management software that runs your entire delivery operation — order intake, dispatch, route optimization, live tracking, proof of delivery, and analytics — in one platform. Self-hosted or cloud, with no per-driver fees and no vendor lock-in.',
  keywords: [
    'delivery management software',
    'delivery management system',
    'delivery management',
    'open source delivery management software',
    'delivery software',
    'delivery dispatch software',
    'proof of delivery software',
  ],
  openGraph: {
    title: 'Delivery Management Software | Fleetbase',
    description:
      'Open-source delivery management software — dispatch, route optimization, live tracking, proof of delivery, and analytics in one platform. Self-hosted or cloud, no per-driver fees.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delivery Management Software | Fleetbase',
    description:
      'Open-source delivery management software — dispatch, routing, tracking, POD, and analytics in one platform. No per-driver fees, no lock-in.',
  },
};

// Defined once so the on-page FAQ and the FAQPage structured data stay in sync.
const faqs = [
  {
    q: 'What is delivery management software?',
    a: 'Delivery management software is the system that runs a delivery operation end to end — taking in orders, assigning and dispatching them to drivers, optimizing routes, tracking deliveries in real time, capturing proof of delivery, and reporting on performance. Fleetbase brings all of those functions into one open-source platform instead of stitching together separate tools.',
  },
  {
    q: 'What is the difference between a delivery management system and delivery management software?',
    a: 'The terms are used interchangeably — a "delivery management system" and "delivery management software" both refer to the platform that coordinates orders, drivers, routes, tracking, and proof of delivery. Fleetbase is both: a complete, configurable delivery management system you can run as a hosted service or self-host on your own infrastructure.',
  },
  {
    q: 'Is Fleetbase open-source delivery management software?',
    a: 'Yes. Fleetbase is fully open source under the AGPL license. You can self-host the entire platform, read and modify the source, and build your own extensions — or use Fleetbase Cloud for a managed option. There is no proprietary lock-in and no per-driver pricing.',
  },
  {
    q: 'Can I self-host Fleetbase, or is it cloud-only?',
    a: 'Both are first-class options. Self-host on your own servers for complete control and data residency, or use Fleetbase Cloud to get started in minutes with nothing to manage. You can also start on Cloud and move to self-hosted later.',
  },
  {
    q: 'How much does Fleetbase delivery management software cost?',
    a: 'Self-hosting is free under the open-source license. Fleetbase Cloud starts at $25/month with usage-based pricing and no per-driver or per-seat fees, so your costs do not balloon as you add drivers. A 7-day free trial of the full platform is available.',
  },
  {
    q: 'What types of deliveries does Fleetbase support?',
    a: 'Fleetbase handles last-mile delivery, courier and parcel services, food and grocery delivery, and B2B/wholesale distribution from the same platform — with configurable order types, workflows, and SLAs for each.',
  },
  {
    q: 'Does it include route optimization and proof of delivery?',
    a: 'Yes. Multi-stop route optimization (with time windows, live traffic, and capacity constraints) and digital proof of delivery (signatures, photos, geotagged and timestamped) are built in — not paid add-ons.',
  },
];

export default function DeliveryManagementSoftwarePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase — Delivery Management Software"
        url={CANONICAL}
        description="Open-source delivery management software for order intake, dispatch, route optimization, live tracking, proof of delivery, and analytics. Self-hosted or cloud, no per-driver fees."
      />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <SolutionPageLayout
        breadcrumbs={[{ label: 'Delivery Management Software', href: CANONICAL }]}
        badge="Delivery Management Software"
        title={
          <>
            Open-Source <span className="text-gradient">Delivery Management Software</span>
          </>
        }
        description="Fleetbase is open-source delivery management software that runs your entire delivery operation — order intake, dispatch, route optimization, live customer tracking, proof of delivery, and analytics — in one platform. Self-host it or run it in our cloud, with no per-driver fees and no vendor lock-in."
        heroCta={{
          primary: 'Start Free Trial',
          primaryHref: 'https://console.fleetbase.io/onboard',
          secondary: 'See it for last-mile delivery',
          secondaryHref: '/solutions/use-cases/last-mile-delivery',
        }}
        stats={[
          { value: 'AGPL', label: 'Fully open source — self-host or cloud' },
          { value: '$0', label: 'Per-driver & per-seat fees' },
          { value: '5-in-1', label: 'Dispatch, routing, tracking, POD & analytics' },
          { value: 'REST API', label: 'Full API + extension framework' },
        ]}
        heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
        heroScreenshotAlt="Fleetbase delivery management software console showing orders, drivers, and live delivery map"
        painPoints={{
          heading: 'What delivery management software should fix — and most don’t',
          items: [
            'Orders, drivers, and routes scattered across spreadsheets, WhatsApp, and disconnected apps',
            'Manual dispatch that can’t keep up at peak — and inefficient routes that burn fuel and hours',
            'Customers left guessing, with no live tracking or ETAs, flooding support with "where is my order?"',
            'No proof of delivery, so billing disputes and lost-package claims pile up',
            'Per-driver SaaS pricing that punishes you for growing — on a platform you can never customise or own',
            'Closed systems you can’t extend, integrate cleanly, or migrate off of',
          ],
        }}
        featuresHeading="One platform to run your entire delivery operation"
        featuresSubheading="From order to doorstep — dispatch, routing, tracking, and proof of delivery, all in one open-source system."
        features={[
          {
            title: 'Open Source — Own Your Delivery Operation',
            description:
              'Unlike proprietary tools such as Onfleet, Track-POD, or Shipday, Fleetbase is fully open source. Self-host it on your own infrastructure for complete data ownership, or run it on Fleetbase Cloud — with no per-driver fees, no seat limits, and full access to the source and REST API. Customise any workflow, build your own extensions, and never get locked in.',
            bullets: [
              'No per-driver or per-seat pricing — scale your operation without scaling your bill',
              'Self-host for full data ownership, or use managed Fleetbase Cloud',
              'Full REST API and extension framework — integrate and customise anything',
            ],
            icon: Code2,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
          },
          {
            title: 'Order & Dispatch Management',
            description:
              'Capture orders from any channel and dispatch them automatically. Fleetbase matches each order to the right driver by proximity, zone, and vehicle capacity, so your team manages exceptions instead of assigning jobs by hand.',
            bullets: [
              'Automatic, rules-based driver assignment in seconds',
              'Configurable order types, workflows, and SLAs per delivery type',
              'Manual override and live re-assignment whenever you need it',
            ],
            icon: Boxes,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
          },
          {
            title: 'Route Optimization',
            description:
              'Every driver run is sequenced for maximum efficiency — accounting for delivery time windows, live traffic, and vehicle capacity. Drivers follow turn-by-turn navigation and reach every stop in the right order.',
            bullets: [
              'Multi-stop sequencing with time windows and live traffic',
              'Vehicle load and capacity constraint modelling',
              'Dynamic re-routing when stops change mid-run',
            ],
            icon: MapPin,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
          },
          {
            title: 'Live Tracking & Customer Notifications',
            description:
              'Every delivery generates a live tracking link with the driver’s real-time position and an accurate ETA — sent to customers automatically, no app download required. Fewer "where is my order?" calls, fewer failed attempts.',
            bullets: [
              'Branded tracking page on your domain — your logo, your colours',
              'Accurate ETA from live driver position and traffic',
              'Automated SMS and email updates at every milestone',
            ],
            icon: Users,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
          },
          {
            title: 'Digital Proof of Delivery',
            description:
              'Signatures, photos, and notes captured at every stop — timestamped, geotagged, and instantly visible in the console. Billing disputes resolved in seconds; failed-delivery claims eliminated; compliance records generated automatically.',
            bullets: [
              'Signature capture, photo upload, and notes at each stop',
              'GPS-anchored and timestamped records',
              'Instant POD visibility in console, exportable for audits',
            ],
            icon: FileCheck,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
          },
          {
            title: 'Delivery Analytics & Reporting',
            description:
              'Track first-attempt rate, average delivery time, on-time performance, and cost-per-delivery across every zone and driver. See exactly where your operation breaks down and act on data, not guesswork.',
            bullets: [
              'First-attempt and on-time performance by driver, zone, and period',
              'Cost-per-delivery and route efficiency trending',
              'Custom reports and exportable dashboards',
            ],
            icon: BarChart3,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
          },
          {
            title: 'Built for Every Delivery Type',
            description:
              'Run last-mile delivery, courier and parcel services, food and grocery delivery, and B2B distribution from one system — each with its own order types, workflows, and SLAs. One platform instead of a different tool per line of business.',
            bullets: [
              'Last-mile, courier, food/grocery, and B2B in one console',
              'Configurable per-vertical workflows and SLAs',
              'Add modules and extensions as your operation grows',
            ],
            icon: Layers,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp',
          },
        ]}
        capabilities={[
          { icon: Code2, label: 'Open-source & self-hostable' },
          { icon: Zap, label: 'Auto-dispatch engine' },
          { icon: MapPin, label: 'Route optimization' },
          { icon: Users, label: 'Live customer tracking' },
          { icon: FileCheck, label: 'Digital proof of delivery' },
          { icon: BarChart3, label: 'Delivery analytics' },
          { icon: Smartphone, label: 'Driver mobile app' },
          { icon: Globe, label: 'Full REST API' },
          { icon: Clock, label: 'Delivery time windows' },
          { icon: Bell, label: 'Customer notifications' },
          { icon: RefreshCw, label: 'Failed delivery handling' },
          { icon: Shield, label: 'Role-based access' },
        ]}
        faqs={faqs}
        ctaHeading="Run your whole delivery operation on one open platform"
        ctaBody="Open-source delivery management software with dispatch, routing, tracking, proof of delivery, and analytics built in — and no per-driver fees. Start your free trial and see it on your own delivery operation."
        ctaPrimary="Start Free Trial"
        ctaPrimaryHref="https://console.fleetbase.io/onboard"
        ctaSecondary="Talk to Sales"
        ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
      />
    </>
  );
}
