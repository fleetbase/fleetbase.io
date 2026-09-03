import type { Metadata } from 'next';
import { Headphones, MapPin, Bell, FileCheck, BarChart3, MessageSquare, Clock, Users, Shield, Zap } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/customer-success' },
  title: 'Customer Support Tools for Logistics',
  description: 'Real-time order visibility, live tracking links and instant proof of delivery, so support teams resolve customer queries in seconds.',
  keywords: ['customer support logistics software', 'delivery tracking for support teams', 'order visibility customer service', 'proof of delivery customer support', 'logistics customer portal'],
  openGraph: {
    title: 'Customer Support Tools for Logistics | Fleetbase',
    description: 'Resolve customer delivery queries in seconds. Every answer is already in the platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Customer Support Tools for Logistics | Fleetbase`,
    description: `Resolve customer delivery queries in seconds. Every answer is already in the platform.`,
  },
};

export default function CustomerSuccessPage() {
  return (
    <SolutionPageLayout
      badge="For Customer Success Teams"
      title={<>Every Customer Query<br /><span className="text-gradient">Answered in Seconds.</span></>}
      description="Customer success teams spend enormous amounts of time on one question: 'Where is my delivery?' Not because the information doesn't exist — but because it's buried in systems your support team can't access, or spread across tools that don't surface the right data quickly. Fleetbase gives customer-facing teams real-time order visibility, instant POD retrieval, and the proactive notification tools that stop queries before they're even raised."
      stats={[
        { value: '60%', label: 'Reduction in inbound delivery status calls' },
        { value: '<30s', label: 'Average time to answer a delivery query with Fleetbase' },
        { value: '40%', label: 'Fewer escalations when customers have live tracking access' },
        { value: '4.8/5', label: 'Average customer satisfaction score with live tracking' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
      heroScreenshotAlt="Fleetbase customer success view — order detail, live tracking, and POD retrieval"
      painPoints={{
        heading: 'Why customer success teams struggle with delivery queries',
        items: [
          '"Where is my delivery?" calls that require escalating to operations because support can\'t see the answer',
          'Proof of delivery requests that take hours to retrieve from the driver\'s paperwork',
          'Customers told a delivery was attempted when they have no evidence it was',
          'No way to proactively notify customers about delays before they notice and call you',
          'Billing disputes that take weeks to resolve because the delivery record doesn\'t exist in a useful format',
          'Support teams using screen-sharing to access operations systems they weren\'t meant to use',
        ],
      }}
      featuresHeading="Give your customer team the answers before they're asked"
      featuresSubheading="Real-time visibility, instant POD, and proactive communication — built for customer-facing teams."
      features={[
        {
          title: 'Real-Time Order Visibility',
          description: 'Customer success teams get a dedicated view of order status that\'s always current — no refresh needed, no escalation to operations. Search by order number, customer name, or reference. See the current status, driver assignment, ETA, and every status event in the order\'s history.',
          bullets: [
            'Live order status with driver, ETA, and full event history',
            'Search by order number, customer name, phone, or reference',
            'Role-based access — support sees order data without touching dispatch tools',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp',
        },
        {
          title: 'Live Tracking Links',
          description: 'Every order has a live customer tracking link — shareable in seconds. When a customer calls asking where their delivery is, paste them the link. They see the driver\'s real position, an accurate ETA, and the delivery history. Query resolved. Call ended.',
          bullets: [
            'One-click tracking link retrieval from the order detail view',
            'Branded tracking page — your logo, your domain, your messaging',
            'Works on any device without app download',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Instant Proof of Delivery Retrieval',
          description: 'When a customer disputes a delivery — claims it wasn\'t delivered, was left in the wrong place, or was damaged — support teams retrieve the timestamped, GPS-anchored POD record in seconds. Signature, photo, and delivery notes are all attached to the order.',
          bullets: [
            'Signature, photo, and notes accessible directly from order detail',
            'GPS-anchored delivery confirmation with timestamp',
            'One-click POD export as PDF for dispute resolution and billing',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Proactive Customer Notifications',
          description: 'The best customer query is the one that\'s never raised. Fleetbase automatically notifies customers at every order milestone — dispatched, out for delivery, arriving soon, delivered — via SMS, email, or push. Customers who know what\'s happening don\'t call your support team.',
          bullets: [
            'Automated milestone notifications at dispatch, en route, and delivery',
            'Delay notifications triggered automatically when ETAs shift significantly',
            'Notification templates fully editable per brand and communication channel',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/storefront/storefront-push-notifications.webp',
        },
        {
          title: 'Customer Self-Service Portal',
          description: 'Give your customers a self-service portal to track their orders, download delivery records, and initiate returns — without contacting support. Customers who can help themselves don\'t need to be helped. Your support team\'s time is freed for the queries that actually require a human.',
          bullets: [
            'Customer portal with order history and live tracking access',
            'Document download — delivery confirmations, invoices, and POD records',
            'Return initiation workflow — direct from the portal without a support call',
          ],
          icon: Users,
          screenshot: '/images/screenshots/storefront/storefront-dashboard.webp',
        },
        {
          title: 'Delivery Performance & CSAT Reporting',
          description: 'Track the customer-facing metrics that matter: on-time delivery rate, NPS scores, delivery completion rates, and support query volume by delivery issue type. Identify which delivery failures generate the most customer friction and fix them at the source.',
          bullets: [
            'Customer satisfaction score tracking per delivery and driver',
            'Support query volume analysis by issue type and delivery failure reason',
            'On-time delivery rate trending by zone and customer account',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'SLA status visibility' },
        { icon: Shield, label: 'Support role access control' },
        { icon: MessageSquare, label: 'Customer notification templates' },
        { icon: Headphones, label: 'Query resolution tools' },
        { icon: MapPin, label: 'Live tracking links' },
        { icon: FileCheck, label: 'POD retrieval & export' },
        { icon: Bell, label: 'Proactive delay alerts' },
        { icon: BarChart3, label: 'CSAT & performance reports' },
      ]}
      testimonial={{
        quote: "Our delivery query volume dropped 55% in the first two months after we enabled live tracking notifications. The queries we do still get are resolved in under a minute because the answer is right there in the order record.",
        author: 'Sophie K.',
        role: 'Head of Customer Success',
        company: 'Clearway Deliveries',
      }}
      faqs={[
        {
          q: 'Can customer success teams access order data without being able to change dispatch settings?',
          a: 'Yes. Role-based access control allows support staff to view order status, retrieve POD records, and share tracking links — without access to dispatch, route management, or operational configuration.',
        },
        {
          q: 'How quickly can a support agent retrieve a proof of delivery?',
          a: 'Searching by order number and retrieving the POD record typically takes under 30 seconds. The POD includes signature, photo, GPS location, and timestamp — all accessible from the order detail view.',
        },
        {
          q: 'Can we customize the customer notification messages?',
          a: 'Yes. All notification templates — SMS, email, and push — are fully editable. You control the messaging, tone, and content at each delivery milestone.',
        },
        {
          q: 'Do customers need to download an app to track their delivery?',
          a: 'No. The customer tracking page is a standard web URL — accessible on any device, in any browser, without an app download.',
        },
        {
          q: 'Can customers initiate returns through the self-service portal?',
          a: 'Yes. The customer portal supports return request initiation, which creates a reverse dispatch order in Fleetbase and notifies your operations team — without the customer needing to contact support.',
        },
      ]}
      ctaHeading="Turn delivery queries into resolved tickets in under a minute"
      ctaBody="Give your customer success team the visibility they need to answer every delivery question instantly — and the notification tools to stop the questions before they start."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
