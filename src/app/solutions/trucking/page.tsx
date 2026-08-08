import type { Metadata } from 'next';
import { Truck, MapPin, Wrench, BarChart3, FileCheck, Smartphone, Clock, Shield, Zap, DollarSign } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/trucking' },
  title: 'Fleet Management Software for Trucking & Haulage | Fleetbase',
  description: 'Replace your legacy TMS with open-source fleet management built for trucking and haulage. Real-time tracking, route optimization, digital POD, and compliance tools — on infrastructure you own.',
  keywords: ['trucking software', 'haulage management', 'fleet management TMS', 'freight tracking', 'route optimization trucking', 'open source TMS'],
  openGraph: {
    title: 'Trucking & Haulage Fleet Management | Fleetbase',
    description: 'Modern open-source fleet management for trucking operators. Cut costs, eliminate paperwork, and deliver on time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Trucking & Haulage Fleet Management | Fleetbase`,
    description: `Modern open-source fleet management for trucking operators. Cut costs, eliminate paperwork, and deliver on time.`,
  },
};

export default function TruckingPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Trucking & Haulage', href: '/solutions/trucking' },
      ]}
      badge="Trucking & Haulage"
      title={<>Run a Tighter Fleet.<br /><span className="text-gradient">Cut Costs. Deliver On Time.</span></>}
      description="Fleetbase gives trucking and haulage operators a complete operations platform — real-time fleet visibility, intelligent route optimization, digital proof of delivery, and driver management — on open-source infrastructure you own and control. No per-seat fees. No vendor lock-in."
      stats={[
        { value: '30%', label: 'Average fuel cost reduction' },
        { value: '2×', label: 'Faster dispatch times' },
        { value: '40%', label: 'Fewer customer status calls' },
        { value: '10M+', label: 'Orders processed on platform' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
      heroScreenshotAlt="Fleetbase Fleet-Ops live map — trucking fleet overview"
      painPoints={{
        heading: 'Sound familiar? You\'re not alone.',
        items: [
          'Dispatchers calling drivers every hour just for location updates',
          'Fuel costs spiralling with no visibility into idle time or inefficient routes',
          'Paper POD forms causing billing disputes that drag on for weeks',
          'No single view of all vehicles, loads, drivers, and delivery status',
          'Legacy TMS software too rigid and too expensive to adapt to your workflows',
          'Compliance paperwork eating hours every week that should go to operations',
        ],
      }}
      featuresHeading="The modern TMS your team actually wants to use"
      featuresSubheading="Built for trucking and haulage operators who are done fighting their software."
      features={[
        {
          title: 'Live Fleet Tracking on a Single Map',
          description: 'Every truck, trailer, and driver visible in real-time on an interactive map. Live ETAs, geofence arrival/departure alerts, and automatic status updates mean your dispatcher is always in control — without picking up the phone.',
          bullets: [
            'GPS position updates every 30 seconds via the Navigator driver app',
            'Geofence alerts for depot arrivals, customer sites, and restricted zones',
            'Full trip history and dwell-time reporting per vehicle',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Intelligent Route Optimization',
          description: 'Stop guessing the best route. Fleetbase calculates optimal multi-stop routes accounting for traffic, delivery time windows, vehicle capacity, and driver hours — then re-optimizes dynamically when conditions change mid-route.',
          bullets: [
            'Multi-stop optimization with time-window constraints',
            'Live re-routing when traffic or priority changes occur',
            'Cost-per-mile modelling per vehicle type',
          ],
          icon: Truck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
        },
        {
          title: 'Digital Proof of Delivery',
          description: 'Drivers capture signatures, photos, barcodes, and notes directly in the Navigator mobile app. PODs are timestamped, geotagged, and instantly visible in the console — ending billing disputes before they start.',
          bullets: [
            'Signature, photo, and barcode capture on iOS and Android',
            'Automatic PDF generation for every completed delivery',
            'Customer portal access to view their own delivery records',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Vehicle Maintenance & Fleet Health',
          description: 'Track service history, schedule preventive maintenance, log fault reports, and manage work orders from one dashboard. Keep your fleet roadworthy and your insurance and compliance records clean.',
          bullets: [
            'Preventive maintenance schedules based on mileage or date',
            'Driver fault reporting directly from the mobile app',
            'Export-ready maintenance logs for compliance audits',
          ],
          icon: Wrench,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-schedules.webp',
        },
        {
          title: 'Fleet Analytics & Cost Reporting',
          description: 'Track the KPIs that actually move your P&L: cost-per-mile, on-time delivery rate, fuel consumption, driver utilization, and vehicle ROI. Build custom dashboards and schedule reports for ops and finance teams.',
          bullets: [
            'Cost-per-mile and cost-per-delivery broken down by vehicle and driver',
            'On-time rate trends and SLA breach alerts',
            'Fuel consumption vs. route efficiency correlation reports',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Driver App — Navigator',
          description: 'Drivers get a purpose-built iOS and Android app with turn-by-turn navigation, job notifications, chat with dispatch, and proof-of-delivery capture. No expensive MDM or hardware required — just their smartphone.',
          bullets: [
            'Works offline — syncs when connectivity is restored',
            'In-app chat between drivers and dispatchers',
            'Multi-language support for diverse driver workforces',
          ],
          icon: Smartphone,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Time-window scheduling' },
        { icon: Shield, label: 'Compliance logs' },
        { icon: DollarSign, label: 'Service rate management' },
        { icon: Zap, label: 'Webhook integrations' },
        { icon: MapPin, label: 'Multi-depot support' },
        { icon: BarChart3, label: 'Custom dashboards' },
        { icon: FileCheck, label: 'Document management' },
        { icon: Truck, label: 'Trailer tracking' },
      ]}
      testimonial={{
        quote: 'We cut our dispatch time in half and fuel costs dropped 22% in the first three months. The live map alone saved us from hiring another operations coordinator.',
        author: 'James O.',
        role: 'Head of Operations',
        company: 'Regional Haulage Co.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase work for long-haul as well as local delivery?',
          a: 'Yes. Route optimization and live tracking work across any distance. Long-haul operators benefit from geofence-based milestone alerts, while local fleets use the multi-stop optimization engine.',
        },
        {
          q: 'Can I integrate with my existing ERP or accounting system?',
          a: 'Fleetbase exposes a full REST API and webhooks for all events. Pre-built connectors exist for common accounting and ERP platforms, and the API makes custom integrations straightforward.',
        },
        {
          q: 'How does driver tracking work without dedicated GPS hardware?',
          a: 'Drivers share their location via the Navigator mobile app (iOS and Android) — no additional hardware needed. Fleetbase also integrates with dedicated telematics hardware and OBD devices if you prefer.',
        },
        {
          q: 'Is Fleetbase open source?',
          a: 'Yes — fully open source under AGPL-3.0. Self-host on your own infrastructure, inspect the code, and extend it for your exact workflows. A commercial licence is available if you need to keep modifications proprietary.',
        },
        {
          q: 'How is pricing structured?',
          a: 'One plan: $29 a month plus $5 for each driver and vehicle you run. Orders and deliveries are free at any volume, so growing your load count never grows your software bill.',
        },
      ]}
      ctaHeading="Ready to run a leaner, smarter fleet?"
      ctaBody="Hundreds of trucking and haulage operators have replaced their legacy TMS with Fleetbase. Start your free trial and see the difference in week one."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
