import type { Metadata } from 'next';
import { MapPin, Zap, Smartphone, BarChart3, FileCheck, Users, Bell, Clock, RefreshCw, Shield, Code2 } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';
import { FAQSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';

const CANONICAL = 'https://fleetbase.io/solutions/use-cases/last-mile-delivery';

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: 'Last Mile Delivery Software',
  description:
    'Open-source last mile delivery software for dispatch, route optimization, live customer tracking, and proof of delivery — self-hosted or cloud, with no per-driver fees and no vendor lock-in. Cut failed deliveries and automate your last mile.',
  keywords: [
    'last mile delivery software',
    'open source delivery management software',
    'delivery management software',
    'last mile logistics platform',
    'delivery dispatch software',
    'onfleet alternative',
    'proof of delivery software',
  ],
  openGraph: {
    title: 'Last Mile Delivery Software | Fleetbase',
    description:
      'Open-source last mile delivery software — dispatch, route optimization, live tracking, and proof of delivery. Self-hosted or cloud, no per-driver fees.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Mile Delivery Software | Fleetbase',
    description:
      'Open-source last mile delivery software — dispatch, routing, live tracking, and proof of delivery. No per-driver fees, no lock-in.',
  },
};

// Defined once so the on-page FAQ and the FAQPage structured data stay in sync.
const faqs = [
  {
    q: 'Is Fleetbase really open-source last mile delivery software?',
    a: 'Yes. Fleetbase is fully open source under the AGPL license. You can self-host the entire platform on your own infrastructure, read and modify the source, and build your own extensions — or run it on Fleetbase Cloud if you prefer a managed option. There is no proprietary lock-in.',
  },
  {
    q: 'How does Fleetbase compare to Onfleet and other proprietary last-mile software?',
    a: 'The core last-mile features — auto-dispatch, route optimization, a driver app, live customer tracking, and proof of delivery — are comparable. The difference is ownership and cost: Fleetbase has no per-driver or per-seat fees, can be self-hosted for full data ownership, and is fully extensible via an open REST API, so you are never limited by a vendor roadmap.',
  },
  {
    q: 'Can I self-host Fleetbase, or do I have to use the cloud?',
    a: 'Both options are first-class. Self-host on your own servers for complete control and data residency, or use Fleetbase Cloud to get started in minutes with no infrastructure to manage. You can also start on Cloud and migrate to self-hosted later.',
  },
  {
    q: 'How much does last mile delivery software from Fleetbase cost?',
    a: 'Self-hosting is free under the open-source license. Fleetbase Cloud starts at $25/month with usage-based pricing and no per-driver fees — so your bill does not balloon as you add drivers. There is a 7-day free trial of the full platform.',
  },
  {
    q: 'How does Fleetbase reduce failed first-attempt deliveries?',
    a: 'Fleetbase sends customers automated notifications with live tracking links and accurate ETAs at every delivery milestone. Customers can provide delivery instructions or request rescheduling before the driver arrives — cutting failed attempts dramatically.',
  },
  {
    q: 'Does the Navigator driver app work without mobile data?',
    a: 'Yes. The Navigator app caches job details and maps for offline use. Actions taken offline — including proof of delivery capture — sync automatically when connectivity is restored.',
  },
  {
    q: 'Can Fleetbase handle same-day and scheduled deliveries in one system?',
    a: 'Yes. Same-day, next-day, and pre-scheduled deliveries each have their own configurable workflows, SLAs, and dispatch rules — all managed from one console.',
  },
];

export default function LastMileDeliveryPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase — Last Mile Delivery Software"
        url={CANONICAL}
        description="Open-source last mile delivery software for dispatch, route optimization, live customer tracking, and proof of delivery. Self-hosted or cloud, no per-driver fees."
      />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <SolutionPageLayout
        breadcrumbs={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Last Mile Delivery Software', href: CANONICAL },
        ]}
        badge="Last Mile Delivery Software"
        title={
          <>
            Open-Source <span className="text-gradient">Last Mile Delivery Software</span>
          </>
        }
        description="Fleetbase is open-source last mile delivery software for dispatch, route optimization, live customer tracking, and proof of delivery. Self-host it or run it in our cloud — with no per-driver fees and no vendor lock-in. Turn your last mile from a cost centre into a competitive advantage."
        stats={[
          { value: '94%', label: 'First-attempt delivery rate (up from 78% avg)' },
          { value: '50%', label: 'Reduction in dispatch time with auto-assignment' },
          { value: '3.2×', label: 'Higher repeat purchase rate with live tracking' },
          { value: '$0', label: 'Per-driver fees — scale your fleet, not your bill' },
        ]}
        heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
        heroScreenshotAlt="Fleetbase last mile delivery software live map showing drivers on optimized routes"
        painPoints={{
          heading: 'Last-mile problems that cost you money and customers',
          items: [
            'Failed first-attempt deliveries costing £8–15 each in re-delivery and lost SLA credits',
            'Customers with no idea when their delivery will arrive — flooding your support team with "where is my order?" calls',
            'Dispatchers manually assigning orders one by one, creating bottlenecks at peak hours',
            'Drivers taking inefficient routes between stops with no real-time traffic awareness',
            'Per-driver SaaS fees that balloon as you grow — on a proprietary platform you can never customise or own',
            'No proof of delivery for billing disputes, and zero data on where performance breaks down',
          ],
        }}
        featuresHeading="Everything your last-mile delivery operation needs"
        featuresSubheading="From dispatch to doorstep — every step automated, tracked, and visible. And it's yours to own."
        features={[
          {
            title: 'Open Source — Own Your Delivery Stack',
            description:
              'Unlike Onfleet, Track-POD, and other proprietary last-mile tools, Fleetbase is fully open source. Self-host it on your own infrastructure for complete data ownership, or run it on Fleetbase Cloud — with no per-driver fees, no seat limits, and full access to the source and REST API. Customise any workflow, extend it with your own modules, and never get locked in.',
            bullets: [
              'No per-driver or per-seat pricing — scale your fleet without scaling your bill',
              'Self-host for full data ownership, or use managed Fleetbase Cloud',
              'Full REST API and extension framework — integrate and customise anything',
            ],
            icon: Code2,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
          },
          {
            title: 'Smart Dispatch & Auto-Assignment',
            description:
              'Incoming orders are automatically matched to the nearest available driver based on proximity, zone, and vehicle capacity. Your dispatchers shift from manual order management to exception handling — your throughput doubles without adding headcount.',
            bullets: [
              'Proximity and capacity-based driver assignment in seconds',
              'Configurable dispatch rules per delivery type and zone',
              'Manual override available for dispatchers at any time',
            ],
            icon: Zap,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
          },
          {
            title: 'Optimized Multi-Stop Routes',
            description:
              'Every driver run is automatically sequenced for maximum efficiency — accounting for delivery time windows, live traffic, and vehicle capacity. Drivers follow turn-by-turn navigation in the Navigator app and arrive at every stop in the right order.',
            bullets: [
              'Time-window constrained route sequencing with real-time traffic',
              'Vehicle load and capacity constraint modelling',
              'Dynamic re-routing when stops are added or cancelled mid-run',
            ],
            icon: MapPin,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
          },
          {
            title: 'Live Customer Tracking',
            description:
              "Every delivery generates a live tracking link sent to the customer automatically. They see the driver's real-time position, an accurate ETA, and a delivery confirmation — no app download required. Failed attempts drop when customers know exactly when to expect their delivery.",
            bullets: [
              'Branded tracking page on your domain — your logo, your colours',
              'Accurate ETA based on live driver position and traffic',
              'Automated SMS and email updates at every delivery milestone',
            ],
            icon: Users,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
          },
          {
            title: 'Driver Mobile App — Navigator',
            description:
              'Drivers receive their full job list, navigate to each stop, and capture proof of delivery — all in the Navigator app on their own smartphone. No dedicated hardware, no custom devices. Works offline for zones with poor connectivity.',
            bullets: [
              'Job list with sequence, stop details, and customer contact',
              'Turn-by-turn navigation optimized for delivery routing',
              'Offline mode — syncs automatically when connectivity restores',
            ],
            icon: Smartphone,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
          },
          {
            title: 'Digital Proof of Delivery',
            description:
              'Signatures, photos, and delivery notes captured at every stop — timestamped, geotagged, and instantly visible in the console. Billing disputes resolved in seconds. Failed delivery claims eliminated. Compliance records generated automatically.',
            bullets: [
              'Signature capture, photo upload, and written notes at each stop',
              'GPS-anchored and timestamped — court-admissible records',
              'Instant POD visibility in console and exportable for audits',
            ],
            icon: FileCheck,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
          },
          {
            title: 'Last-Mile Performance Analytics',
            description:
              'Track first-attempt delivery rate, average delivery time, on-time performance, and driver efficiency across every zone and route. Identify exactly where your delivery operation is breaking down and act on data, not guesswork.',
            bullets: [
              'First-attempt delivery rate by driver, zone, and time period',
              'On-time performance vs. committed delivery windows',
              'Cost-per-delivery and route efficiency trending',
            ],
            icon: BarChart3,
            screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
          },
        ]}
        capabilities={[
          { icon: Code2, label: 'Open-source & self-hostable' },
          { icon: Zap, label: 'Auto-dispatch engine' },
          { icon: MapPin, label: 'Zone-based routing' },
          { icon: Clock, label: 'Delivery time windows' },
          { icon: Bell, label: 'Customer notifications' },
          { icon: FileCheck, label: 'Digital POD' },
          { icon: RefreshCw, label: 'Failed delivery rescheduling' },
          { icon: BarChart3, label: 'Delivery analytics' },
          { icon: Shield, label: 'Role-based access' },
          { icon: Smartphone, label: 'Driver mobile app' },
        ]}
        testimonial={{
          quote:
            'Our first-attempt delivery rate went from 78% to 94% after switching to Fleetbase. The combination of optimized routes and live customer tracking made the difference — fewer missed deliveries, fewer support calls, happier customers. And with no per-driver fees, it actually got cheaper as we scaled.',
          author: 'Rachel T.',
          role: 'VP of Operations',
          company: 'Urban Delivery Co.',
        }}
        faqs={faqs}
        ctaHeading="Make your last mile your competitive advantage"
        ctaBody="Open-source last mile delivery software with faster dispatch, smarter routes, and higher first-attempt rates — and no per-driver fees. Start your free trial and see what Fleetbase does for your last-mile operation in the first 30 days."
        ctaPrimary="Start Free Trial"
        ctaPrimaryHref="https://console.fleetbase.io/onboard"
        ctaSecondary="Talk to Sales"
        ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
      />
    </>
  );
}
