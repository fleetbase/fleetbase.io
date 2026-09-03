import type { Metadata } from 'next';
import { ClipboardList, Zap, FileCheck, BarChart3, Settings, Bell, MapPin, Users, Clock, RefreshCw } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/order-management' },
  title: 'Order Management Software',
  description: 'Configure, track and fulfil any order type with custom workflows, statuses and fields. Open-source order management that adapts to you.',
  keywords: ['order management software', 'logistics order management', 'custom order workflows', 'order fulfillment platform', 'order tracking system', 'delivery order management'],
  openGraph: {
    title: 'Order Management Software | Fleetbase',
    description: 'Every order type. Every workflow. One platform that bends to your operation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Order Management Software | Fleetbase`,
    description: `Every order type. Every workflow. One platform that bends to your operation.`,
  },
};

export default function OrderManagementPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Order Management', href: '/solutions/use-cases/order-management' },
      ]}
      badge="Use Case — Order Management"
      title={<>One Platform for<br /><span className="text-gradient">Every Order Type You Run.</span></>}
      description="Most order management software was built for one workflow and bolted onto everything else. Your operation is more complex than that — different order types, different SLAs, different proof requirements, different customer expectations. Fleetbase gives you a fully configurable order management platform that works the way you work, with custom fields, statuses, workflows, and automation built for real logistics operations."
      stats={[
        { value: '60%', label: 'Reduction in manual order entry errors' },
        { value: '10M+', label: 'Orders processed on Fleetbase worldwide' },
        { value: '40%', label: 'Faster order-to-dispatch time with automation' },
        { value: '100%', label: 'Configurable to your exact order workflow' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp"
      heroScreenshotAlt="Fleetbase order management — order pipeline view with custom statuses and bulk assignment"
      painPoints={{
        heading: 'The order management problems slowing your operation down',
        items: [
          'Orders arriving from multiple channels — phone, email, API — being manually re-entered into your system',
          'Rigid order status workflows that don\'t match how your operation actually moves',
          'No visibility into which orders are at risk of missing their SLA until it\'s too late',
          'Custom order fields hacked together with spreadsheets alongside your main system',
          'No audit trail of order changes — who changed what, when, and why',
          'Customers and internal teams asking for order status updates because no one has a live view',
        ],
      }}
      featuresHeading="Order management that adapts to your operation"
      featuresSubheading="Flexible enough for any order type. Powerful enough for any volume."
      features={[
        {
          title: 'Flexible Order Configuration',
          description: 'Define exactly what an order means in your operation. Custom fields, custom statuses, custom proof requirements, and custom SLA windows — all configurable without code. Run pickup-and-delivery, multi-stop, return orders, and batch orders from the same platform.',
          bullets: [
            'Unlimited custom fields per order type — text, number, date, dropdown',
            'Custom order status workflows matching your exact operation flow',
            'Multiple order types with separate configurations, SLAs, and dispatch rules',
          ],
          icon: Settings,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Automated Order Intake & Routing',
          description: 'Orders arrive from your OMS, storefront, or API and flow directly into the right dispatch queue — assigned, routed, and ready for driver pickup without manual handling. Configurable routing rules send orders to the right depot, vehicle type, or driver group automatically.',
          bullets: [
            'REST API for direct order ingestion from any source system',
            'Rule-based auto-routing by zone, order type, and service level',
            'Webhook events on every status change to keep upstream systems in sync',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-import.webp',
        },
        {
          title: 'Real-Time Order Tracking & Visibility',
          description: 'Every order has a live status visible to your team and — with configurable permissions — to your customers. Track where every order is in its lifecycle, flag at-risk orders before SLA breach, and give customers the visibility they expect without a support call.',
          bullets: [
            'Live order pipeline view with status, driver, ETA, and risk flags',
            'Customer-facing tracking links with branded tracking pages',
            'SLA breach alerting to operations team before the window closes',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Proof of Delivery & Completion',
          description: 'Capture the evidence your operation and your customers need at every completion point. Signatures, photos, QR code scans, and delivery notes — all linked to the order record, timestamped, geotagged, and instantly available for export.',
          bullets: [
            'Configurable POD requirements per order type — signature, photo, scan',
            'GPS-anchored completion records for billing and dispute resolution',
            'Bulk POD export for invoicing and compliance reporting',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp',
        },
        {
          title: 'SLA Management & Breach Prevention',
          description: 'Define SLA windows per order type, service level, and customer account. Fleetbase monitors every active order against its committed window and escalates — automatically — to the right person when an order is at risk, so problems are solved before they become complaints.',
          bullets: [
            'SLA windows per order type with configurable warning and breach thresholds',
            'Automated escalation rules to operations leads and account managers',
            'SLA performance reporting per customer, period, and order type',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Order Analytics & Performance Reporting',
          description: 'Understand your order operation at the level that matters for your business. Volume by period, SLA performance by customer, on-time rates by order type, and fulfillment cost per order — all from a single analytics dashboard.',
          bullets: [
            'Order volume and fulfillment rate by period and channel',
            'On-time delivery rate by customer, zone, and order type',
            'Cost-per-order analysis broken down by route and vehicle type',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'SLA tracking' },
        { icon: Users, label: 'Customer portals' },
        { icon: RefreshCw, label: 'Return order workflows' },
        { icon: ClipboardList, label: 'Batch order management' },
        { icon: Bell, label: 'Breach alerting' },
        { icon: FileCheck, label: 'Digital POD' },
        { icon: Zap, label: 'Auto-routing engine' },
        { icon: BarChart3, label: 'Fulfillment analytics' },
      ]}
      testimonial={{
        quote: "We process 2,000 orders per day across four different order types. Before Fleetbase, we had a different system for each. Now everything runs in one platform with the custom fields and statuses we actually need. Order entry errors dropped 60% in the first month.",
        author: 'Priya S.',
        role: 'Head of Operations',
        company: 'Metro Distribution Services',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle multiple order types with different workflows?',
          a: 'Yes. Each order type can have its own custom fields, status workflow, SLA window, proof requirements, and dispatch rules — all configured without code.',
        },
        {
          q: 'How do orders get into Fleetbase from our existing systems?',
          a: 'Via the REST API for automated ingestion, CSV import for bulk uploads, or manual entry in the console. The API supports full order lifecycle management including updates, cancellations, and status changes.',
        },
        {
          q: 'Can customers track their orders themselves without calling us?',
          a: 'Yes. Every order can generate a branded tracking link for the customer. Automated notifications are sent at configurable milestones — reducing inbound status enquiries significantly.',
        },
        {
          q: 'Is there an audit trail of order changes?',
          a: "Yes. Every order modification — status change, field edit, assignment, POD capture — is logged with the user identity, timestamp, and previous value. The full history is accessible from the order detail view.",
        },
        {
          q: 'Can we set different SLAs for different customer accounts?',
          a: 'Yes. SLA windows are configurable per order type and can be overridden per customer account — allowing you to manage contracted service levels for individual clients.',
        },
      ]}
      ctaHeading="One platform for every order type you run"
      ctaBody="Stop managing orders across disconnected tools. Build the exact workflow your operation needs and process every order faster, more accurately, and with full visibility from intake to delivery."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
