import type { Metadata } from 'next';
import { Package, MapPin, FileCheck, BarChart3, Smartphone, Zap, Bell, Clock, Users, RefreshCw } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/courier-services' },
  title: 'Courier & Parcel Delivery Management Software',
  description: 'Open-source courier management software. Maximise first-attempt delivery, automate dispatch and give customers real-time parcel tracking.',
  keywords: ['courier management software', 'parcel delivery platform', 'last mile courier', 'proof of delivery software', 'delivery management system'],
  openGraph: {
    title: 'Courier & Parcel Services Software | Fleetbase',
    description: 'Maximize first-attempt delivery rates and scale your courier business with Fleetbase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Courier & Parcel Services Software | Fleetbase`,
    description: `Maximize first-attempt delivery rates and scale your courier business with Fleetbase.`,
  },
};

export default function CourierServicesPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Courier & Parcel Services', href: '/solutions/courier-services' },
      ]}
      badge="Courier & Parcel Services"
      title={<>More First-Attempt Deliveries.<br /><span className="text-gradient">Less Cost Per Parcel.</span></>}
      description="Every failed delivery attempt costs you $17 or more. Fleetbase helps courier and parcel operators maximize first-attempt success rates with intelligent route density optimization, proactive customer notifications, and real-time tracking — on open-source infrastructure that scales with your volume."
      stats={[
        { value: '94%', label: 'First-attempt delivery rate' },
        { value: '25%', label: 'Reduction in cost-per-parcel' },
        { value: '60%', label: 'Fewer WISMO support tickets' },
        { value: '3×', label: 'More parcels per driver per day' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
      heroScreenshotAlt="Fleetbase courier operations — parcel tracking and route management"
      painPoints={{
        heading: 'Every courier operator knows these problems',
        items: [
          'Failed delivery attempts draining margins — at $17+ per re-attempt, it adds up fast',
          'Customers calling support because they have no idea where their parcel is',
          'Drivers taking inefficient routes, burning fuel, and missing time windows',
          'Paper or photo PODs getting disputed because evidence quality is poor',
          'No visibility into driver productivity, stop counts, or daily exception rates',
          'Scaling volume requires adding operational headcount at the same rate',
        ],
      }}
      featuresHeading="Courier operations at peak efficiency"
      featuresSubheading="The tools that move more parcels with the same number of drivers."
      features={[
        {
          title: 'Route Density Optimization',
          description: 'Fleetbase clusters deliveries by proximity and calculates the highest-density routes to maximize parcel count per driver per shift. Cover more ground, use less fuel, and hit more time windows — without adding drivers.',
          bullets: [
            'Automatic clustering of parcels by delivery zone and postcode',
            'Time-window constraints and priority parcel sequencing',
            'Dynamic re-sequencing when new parcels are added mid-route',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
        },
        {
          title: 'Proactive Delivery Notifications',
          description: 'The single biggest driver of first-attempt success is a customer who knows their parcel is coming. Fleetbase sends automated SMS, push, and email alerts including a precise arrival window — so customers are home when you knock.',
          bullets: [
            'Automated "Your parcel is 30 minutes away" SMS alerts',
            'Live tracking link with real-time driver position and ETA',
            'Delivery confirmation with photo proof sent to recipient',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/storefront/storefront-push-notifications.webp',
        },
        {
          title: 'Digital Proof of Delivery',
          description: 'Eliminate POD disputes permanently. Drivers capture signatures, photos, barcodes, and GPS-stamped delivery evidence in the Navigator app. Every delivery is legally defensible and accessible in the console within seconds of completion.',
          bullets: [
            'Signature, photo, and QR/barcode scan capture',
            'GPS coordinates and timestamp on every POD record',
            'Automated PDF generation emailed to sender and recipient',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Sender & Recipient Tracking Portal',
          description: 'Give your business clients a branded tracking portal for their end customers. Every parcel gets a unique tracking reference. Senders monitor their batch. Recipients follow their parcel in real-time.',
          bullets: [
            'White-label tracking portal with your branding',
            'Batch tracking for business sender accounts',
            'Recipient-managed delivery notification preferences',
          ],
          icon: Package,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Driver Productivity Analytics',
          description: 'Know which drivers are hitting target parcel counts, which are running behind, and what\'s causing exceptions. Identify systemic route problems before they compound across your fleet.',
          bullets: [
            'Parcels-per-hour and stops-per-day by driver',
            'Exception rate tracking — missed, damaged, refused',
            'Planned vs. actual route efficiency comparison',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Returns & Failed Delivery Workflows',
          description: 'Automate what happens when a delivery fails. Configure re-attempt rules, safe-place delivery, neighbour delivery, and collection point redirection — all without manual dispatcher intervention.',
          bullets: [
            'Configurable re-attempt rules per client or parcel type',
            'Safe-place and alternate-address delivery capture',
            'Reverse dispatch for returns logistics',
          ],
          icon: RefreshCw,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-import.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Time-slot delivery' },
        { icon: Users, label: 'Multi-client accounts' },
        { icon: Zap, label: 'Auto-dispatch engine' },
        { icon: Smartphone, label: 'Driver mobile app' },
        { icon: MapPin, label: 'Multi-depot support' },
        { icon: Package, label: 'Batch parcel import' },
        { icon: BarChart3, label: 'SLA dashboards' },
        { icon: FileCheck, label: 'Compliance reports' },
      ]}
      testimonial={{
        quote: 'Our first-attempt delivery rate jumped from 78% to 94% in 60 days. The proactive customer notifications alone paid for the platform many times over.',
        author: 'Daniel K.',
        role: 'Operations Director',
        company: 'SwiftParcel UK',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle high parcel volumes — tens of thousands per day?',
          a: 'Yes. Fleetbase scales horizontally and is built for high-volume operations. The API-first architecture allows real-time batch parcel import and automated dispatch at any volume.',
        },
        {
          q: 'Can business clients track their own shipment batches?',
          a: 'Yes. Business clients can access a branded tracking portal to monitor all their parcels, export delivery reports, and manage their account independently.',
        },
        {
          q: 'Does Fleetbase support multiple depot locations?',
          a: 'Yes. Multiple depots each with their own driver pools, delivery zones, and operational rules. Cross-depot transfers and zone overlap rules are fully configurable.',
        },
        {
          q: 'How do parcels get imported from our ordering system?',
          a: 'Via REST API for real-time creation from any ordering or WMS system. Bulk CSV import is also supported for batch loading at the start of each shift.',
        },
        {
          q: 'Can we white-label the tracking experience for our clients?',
          a: 'Yes. The customer tracking portal and notification templates are fully brandable with your logo, colours, and domain — your brand, not ours.',
        },
      ]}
      ctaHeading="Ready to deliver more for less?"
      ctaBody="Join courier and parcel operators who are moving more volume, with fewer failed attempts, on Fleetbase. Start your free trial today."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
