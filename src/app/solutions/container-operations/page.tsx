import type { Metadata } from 'next';
import { Ship, MapPin, ClipboardList, BarChart3, Zap, Shield, FileCheck, Clock, Users, Globe } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/container-operations' },
  title: 'Container & Port Logistics Software',
  description: 'Full container visibility from port to door. Track multi-modal journeys, manage documentation and coordinate yard operations.',
  keywords: ['container logistics software', 'port logistics management', 'container tracking', 'intermodal logistics', 'yard management software', 'freight forwarding'],
  openGraph: {
    title: 'Container Operations Logistics | Fleetbase',
    description: 'Full container visibility from port to door — tracking, documentation, and yard operations in one platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Container Operations Logistics | Fleetbase`,
    description: `Full container visibility from port to door — tracking, documentation, and yard operations in one platform.`,
  },
};

export default function ContainerOperationsPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Container Operations', href: '/solutions/container-operations' },
      ]}
      badge="Container Operations"
      title={<>Full Visibility.<br /><span className="text-gradient">Port to Door. No Gaps.</span></>}
      description="Container logistics is too complex for a patchwork of spreadsheets and phone calls. Fleetbase gives container operators, freight forwarders, and terminal managers a unified platform for container tracking, documentation management, yard operations, and real-time stakeholder visibility — from the moment a container is loaded to final delivery."
      stats={[
        { value: '100%', label: 'Container lifecycle traceability' },
        { value: '35%', label: 'Reduction in manual documentation time' },
        { value: '2×', label: 'Faster gate-out processing with digital workflows' },
        { value: '40%', label: 'Fewer stakeholder status enquiries' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
      heroScreenshotAlt="Fleetbase container operations — port logistics and container tracking dashboard"
      painPoints={{
        heading: 'The visibility gaps costing you time and money',
        items: [
          'No real-time visibility between port discharge and final delivery destination',
          'Documentation errors causing customs holds and demurrage charges',
          'Stakeholders — shippers, consignees, customs brokers — calling for status updates hourly',
          'Yard management running on whiteboards and manual logs with no audit trail',
          'Multi-modal handoffs creating accountability gaps between carriers',
          'Legacy port systems that don\'t expose APIs for integration with modern tools',
        ],
      }}
      featuresHeading="Container logistics built for the real world"
      featuresSubheading="Every container, every handoff, every document — tracked and visible to the right people."
      features={[
        {
          title: 'End-to-End Container Tracking',
          description: 'Track containers from port of discharge through inland transport, deconsolidation, and final delivery. Every status update, location change, and handoff is logged with timestamps and GPS data — giving you and your clients a complete, unbroken chain of custody.',
          bullets: [
            'Multi-modal status tracking across sea, rail, and road legs',
            'Automated status updates via API integration with port systems',
            'Stakeholder-specific visibility portals — shippers, consignees, customs',
          ],
          icon: Ship,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Yard & Terminal Management',
          description: 'Know exactly where every container is in your yard at any moment. Manage gate-in and gate-out workflows, track container positions on a yard map, and coordinate stacking and retrieval without paper tickets or radio calls.',
          bullets: [
            'Digital gate-in/gate-out workflows with driver and container verification',
            'Yard slot assignment and container position mapping',
            'Dwell time tracking and demurrage risk alerting',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-geofences.webp',
        },
        {
          title: 'Documentation & Customs Management',
          description: 'Digitize your documentation workflow — bills of lading, delivery orders, customs declarations, and inspection certificates — and eliminate the manual errors that cause costly customs delays and demurrage charges.',
          bullets: [
            'Digital document management with version control and access logging',
            'Customs clearance status tracking integrated with delivery dispatch',
            'Automated document completion alerts to prevent holds',
          ],
          icon: ClipboardList,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Multi-Party Stakeholder Portal',
          description: 'Give shippers, consignees, freight brokers, and customs agents their own visibility into the containers they care about — without giving them access to operations data they shouldn\'t see.',
          bullets: [
            'Role-based stakeholder access with container-level visibility filters',
            'Automated milestone notifications to relevant parties at each stage',
            'Self-service document download for shippers and consignees',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Last-Mile Delivery Dispatch',
          description: 'Once containers clear customs and deconsolidation, Fleetbase\'s dispatch engine assigns outbound deliveries to your own truck fleet or third-party carriers — with full tracking from depot to consignee.',
          bullets: [
            'Automatic order creation from deconsolidation records',
            'Own-fleet and 3PL carrier assignment with live tracking',
            'Proof of delivery capture for every final-mile drop',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Operations Analytics & Demurrage Control',
          description: 'Track container dwell times, identify which carriers are causing delays, and catch demurrage risk before charges accumulate. Make data-driven decisions on carrier performance and yard capacity.',
          bullets: [
            'Average dwell time per container, carrier, and depot',
            'Demurrage risk dashboard with configurable alert thresholds',
            'Carrier performance benchmarking and SLA tracking',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Globe, label: 'Multi-region operations' },
        { icon: Shield, label: 'Role-based access' },
        { icon: Clock, label: 'Dwell time alerts' },
        { icon: FileCheck, label: 'Digital bill of lading' },
        { icon: Zap, label: 'Port system API integration' },
        { icon: BarChart3, label: 'Demurrage reporting' },
        { icon: MapPin, label: 'Yard slot mapping' },
        { icon: Users, label: 'Stakeholder portals' },
      ]}
      testimonial={{
        quote: 'We went from three spreadsheets and constant phone calls to a single platform. Our documentation errors dropped to near zero and our clients stopped calling us for status updates.',
        author: 'Ahmad R.',
        role: 'Terminal Operations Manager',
        company: 'Pacific Freight Services',
      }}
      faqs={[
        {
          q: 'Can Fleetbase integrate with existing port management or terminal operating systems?',
          a: 'Yes. The REST API supports bidirectional integration with port management systems, allowing status updates, gate events, and container data to flow between systems automatically.',
        },
        {
          q: 'Does Fleetbase support multi-modal container journeys?',
          a: 'Yes. Container records can track status across sea, rail, and road legs with separate carrier assignments and documentation for each mode.',
        },
        {
          q: 'Can we give our clients their own visibility into their containers?',
          a: 'Yes. Stakeholder portals allow shippers, consignees, and freight brokers to track only their containers, download their documents, and receive automated milestone notifications.',
        },
        {
          q: 'How does demurrage risk tracking work?',
          a: 'Fleetbase tracks container dwell time against configurable free-day thresholds and triggers alerts to operations teams when a container is approaching demurrage territory.',
        },
        {
          q: 'Is the platform suitable for freight forwarders as well as terminal operators?',
          a: 'Yes. Freight forwarders use Fleetbase to manage multi-client shipment visibility and documentation. Terminal operators use the yard management and gate workflow features. Both can run from the same account.',
        },
      ]}
      ctaHeading="Close the visibility gap in your container operations"
      ctaBody="From port to door, every container tracked. Every document managed. Every stakeholder informed. Start your free trial and see what full container visibility looks like."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
