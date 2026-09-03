import type { Metadata } from 'next';
import { MapPin, Zap, Smartphone, BarChart3, FileCheck, Users, Bell, Clock, RefreshCw, Shield } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/last-mile-delivery' },
  title: 'Last-Mile Delivery Software',
  description: 'Open-source last-mile delivery software. Cut failed deliveries, automate dispatch, and give customers smart routing and live tracking pages.',
  keywords: ['last mile delivery software', 'last mile logistics platform', 'delivery management system', 'final mile delivery', 'delivery dispatch software', 'proof of delivery'],
  openGraph: {
    title: 'Last-Mile Delivery Software | Fleetbase',
    description: 'The last mile is where customers judge you. Make every delivery count.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Last-Mile Delivery Software | Fleetbase`,
    description: `The last mile is where customers judge you. Make every delivery count.`,
  },
};

export default function LastMileDeliveryPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery' },
      ]}
      badge="Use Case — Last-Mile Delivery"
      title={<>The Last Mile is<br /><span className="text-gradient">Where You Win or Lose.</span></>}
      description="Last-mile delivery is your most expensive, most visible, and most customer-defining operation. Every failed attempt costs you £8–15 in re-delivery. Every missing ETA costs you a repeat purchase. Fleetbase gives you the automation, visibility, and customer experience tools to turn your last mile from a cost centre into a competitive advantage."
      stats={[
        { value: '94%', label: 'First-attempt delivery rate (up from 78% avg)' },
        { value: '50%', label: 'Reduction in dispatch time with auto-assignment' },
        { value: '3.2×', label: 'Higher repeat purchase rate with live tracking' },
        { value: '25%', label: 'More deliveries per driver per day' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
      heroScreenshotAlt="Fleetbase Fleet-Ops live map showing last-mile delivery drivers on optimized routes"
      painPoints={{
        heading: 'Last-mile problems that cost you money and customers',
        items: [
          'Failed first-attempt deliveries costing £8–15 each in re-delivery and lost SLA credits',
          'Customers with no idea when their delivery will arrive — flooding your support team with "where is my order?" calls',
          'Dispatchers manually assigning orders one by one, creating bottlenecks at peak hours',
          'Drivers taking inefficient routes between stops with no real-time traffic awareness',
          'No proof of delivery for billing disputes and damage claims',
          'Zero post-delivery data to understand where performance breaks down and why',
        ],
      }}
      featuresHeading="Every tool your last-mile operation needs to perform"
      featuresSubheading="From dispatch to doorstep, every step automated, tracked, and visible."
      features={[
        {
          title: 'Smart Dispatch & Auto-Assignment',
          description: 'Incoming orders are automatically matched to the nearest available driver based on proximity, zone, and vehicle capacity. Your dispatchers shift from manual order management to exception handling — your throughput doubles without adding headcount.',
          bullets: [
            'Proximity and capacity-based driver assignment in seconds',
            'Configurable dispatch rules per delivery type and zone',
            'Manual override available for dispatchers at any time',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Optimized Multi-Stop Routes',
          description: 'Every driver run is automatically sequenced for maximum efficiency — accounting for delivery time windows, live traffic, and vehicle capacity. Drivers follow turn-by-turn navigation in the Navigator app and arrive at every stop in the right order.',
          bullets: [
            'Time-window constrained route sequencing with real-time traffic',
            'Vehicle load and capacity constraint modelling',
            'Dynamic re-routing when stops are added or cancelled mid-run',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
        },
        {
          title: 'Live Customer Tracking',
          description: "Every delivery generates a live tracking link sent to the customer automatically. They see the driver's real-time position, an accurate ETA, and a delivery confirmation — no app download required. Failed attempts drop when customers know exactly when to expect their delivery.",
          bullets: [
            'Branded tracking page on your domain — your logo, your colours',
            'Accurate ETA based on live driver position and traffic',
            'Automated SMS and email updates at every delivery milestone',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Driver Mobile App — Navigator',
          description: "Drivers receive their full job list, navigate to each stop, and capture proof of delivery — all in the Navigator app on their own smartphone. No dedicated hardware, no custom devices. Works offline for zones with poor connectivity.",
          bullets: [
            'Job list with sequence, stop details, and customer contact',
            'Turn-by-turn navigation optimized for delivery routing',
            'Offline mode — syncs automatically when connectivity restores',
          ],
          icon: Smartphone,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
        {
          title: 'Digital Proof of Delivery',
          description: 'Signatures, photos, and delivery notes captured at every stop — timestamped, geotagged, and instantly visible in the console. Billing disputes resolved in seconds. Failed delivery claims eliminated. Compliance records generated automatically.',
          bullets: [
            'Signature capture, photo upload, and written notes at each stop',
            'GPS-anchored and timestamped — court-admissible records',
            'Instant POD visibility in console and exportable for audits',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Last-Mile Performance Analytics',
          description: 'Track first-attempt delivery rate, average delivery time, on-time performance, and driver efficiency across every zone and route. Identify exactly where your delivery operation is breaking down and act on data, not guesswork.',
          bullets: [
            'First-attempt delivery rate by driver, zone, and time period',
            'On-time performance vs. committed delivery windows',
            'Cost-per-delivery and route efficiency trending',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Delivery time windows' },
        { icon: Bell, label: 'Customer notifications' },
        { icon: Shield, label: 'Role-based access' },
        { icon: RefreshCw, label: 'Failed delivery rescheduling' },
        { icon: MapPin, label: 'Zone-based routing' },
        { icon: FileCheck, label: 'Digital POD' },
        { icon: Zap, label: 'Auto-dispatch engine' },
        { icon: BarChart3, label: 'Delivery analytics' },
      ]}
      testimonial={{
        quote: "Our first-attempt delivery rate went from 78% to 94% after switching to Fleetbase. The combination of optimized routes and live customer tracking made the difference — fewer missed deliveries, fewer support calls, happier customers.",
        author: 'Rachel T.',
        role: 'VP of Operations',
        company: 'Urban Delivery Co.',
      }}
      faqs={[
        {
          q: 'How does Fleetbase reduce failed first-attempt deliveries?',
          a: "Fleetbase sends customers automated notifications with live tracking links and accurate ETAs at every delivery milestone. Customers can provide delivery instructions or request rescheduling before the driver arrives — cutting failed attempts dramatically.",
        },
        {
          q: 'Can Fleetbase handle same-day and scheduled deliveries in one system?',
          a: 'Yes. Same-day, next-day, and pre-scheduled deliveries each have their own configurable workflows, SLAs, and dispatch rules — all managed from one console.',
        },
        {
          q: 'Does the Navigator app work without mobile data?',
          a: 'Yes. The Navigator app caches job details and maps for offline use. Actions taken offline sync automatically when connectivity is restored.',
        },
        {
          q: 'Can we set delivery time windows per order?',
          a: 'Yes. Time windows are factored into route optimization and the system alerts dispatchers when a window is at risk of being missed — before it happens, not after.',
        },
        {
          q: 'How are failed deliveries handled in the system?',
          a: 'Drivers mark failed deliveries with reason codes and evidence in the Navigator app. Configurable workflows automatically trigger re-delivery scheduling, customer notification, or return-to-depot routing.',
        },
      ]}
      ctaHeading="Make your last mile your competitive advantage"
      ctaBody="Faster dispatch, smarter routes, higher first-attempt rates. Start your free trial and see what Fleetbase does for your last-mile operation in the first 30 days."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
