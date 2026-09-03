import type { Metadata } from 'next';
import { Heart, Shield, FileCheck, MapPin, ClipboardList, Lock, Bell, BarChart3, Clock, Users } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/healthcare' },
  title: 'Healthcare & Pharmacy Logistics Software',
  description: 'HIPAA-conscious logistics for healthcare and pharmacy delivery. Chain-of-custody tracking, temperature monitoring and priority dispatch.',
  keywords: ['healthcare logistics software', 'pharmacy delivery management', 'medical courier software', 'HIPAA logistics', 'chain of custody tracking', 'cold chain delivery'],
  openGraph: {
    title: 'Healthcare & Pharmacy Logistics | Fleetbase',
    description: 'Chain-of-custody you can prove. Compliance you can afford. Patients you can trust.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Healthcare & Pharmacy Logistics | Fleetbase`,
    description: `Chain-of-custody you can prove. Compliance you can afford. Patients you can trust.`,
  },
};

export default function HealthcarePage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Healthcare & Pharmacy', href: '/solutions/healthcare' },
      ]}
      badge="Healthcare & Pharmacy"
      title={<>Chain-of-Custody You Can Prove.<br /><span className="text-gradient">Compliance You Can Afford.</span></>}
      description="Healthcare and pharmacy logistics demand an audit trail for everything, zero tolerance for delivery failure, and data privacy you can defend in front of any regulator. Fleetbase delivers all three — with encrypted chain-of-custody records, priority dispatch for time-sensitive items, and self-hosted deployment that keeps patient data within your own infrastructure."
      stats={[
        { value: '100%', label: 'Chain-of-custody traceability' },
        { value: '99.97%', label: 'On-time delivery rate for urgent items' },
        { value: '0', label: 'Patient data stored on third-party servers (self-hosted)' },
        { value: '4 hr', label: 'Average urgent delivery dispatch time' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
      heroScreenshotAlt="Fleetbase healthcare logistics — chain-of-custody and delivery management"
      painPoints={{
        heading: 'The compliance and operational gaps keeping you up at night',
        items: [
          'No auditable chain-of-custody record for controlled substances and samples',
          'Patient data being processed by third-party cloud logistics software without your knowledge',
          'Critical deliveries — blood, medications, urgent supplies — missing time windows',
          'No temperature monitoring integration for cold-chain pharmaceutical logistics',
          'Manual, paper-based delivery confirmation that doesn\'t hold up to audit scrutiny',
          'Compliance reporting taking days of manual data extraction every quarter',
        ],
      }}
      featuresHeading="Logistics infrastructure built for healthcare compliance"
      featuresSubheading="Every delivery tracked, every handoff documented, every record encrypted and audit-ready."
      features={[
        {
          title: 'End-to-End Chain-of-Custody Tracking',
          description: 'Every delivery — from collection to final recipient — generates an immutable, timestamped, GPS-anchored chain-of-custody record. Signature capture at each handoff. Photo evidence at every stage. Audit-ready exports on demand.',
          bullets: [
            'Immutable delivery records with GPS coordinates at each handoff',
            'Multi-party signature capture for controlled substance transfers',
            'One-click compliance export for regulatory audits',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Priority Dispatch for Urgent Items',
          description: 'When a patient\'s medication or a lab sample can\'t wait, Fleetbase\'s priority dispatch engine assigns the nearest available driver immediately — overriding normal queue order and notifying the relevant clinical team in real-time.',
          bullets: [
            'Configurable urgency tiers with automatic driver escalation',
            'Clinical team notification at dispatch, collection, and delivery',
            'SLA breach alerting before the window closes, not after',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Self-Hosted & Data-Sovereign Deployment',
          description: 'Patient data belongs in your infrastructure, not a third-party cloud. Fleetbase\'s open-source architecture means you can deploy on your own servers, your own cloud account, or your own air-gapped network — with complete control over where data lives.',
          bullets: [
            'Deploy on AWS, Azure, GCP, or on-premise hardware',
            'No patient data ever leaves your environment',
            'RBAC controls limit data access to authorised personnel only',
          ],
          icon: Lock,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Role-Based Access & Compliance Controls',
          description: 'Granular access controls ensure clinical staff, couriers, administrators, and auditors each see only what they\'re authorised to see. Every access event is logged for compliance reporting.',
          bullets: [
            'Per-role data visibility rules across all platform modules',
            'Full user access audit trail exportable per compliance period',
            'Two-factor authentication enforceable system-wide',
          ],
          icon: Shield,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp',
        },
        {
          title: 'Temperature & Condition Monitoring',
          description: 'For cold-chain pharmaceutical deliveries, Fleetbase integrates with IoT temperature sensors to log environmental conditions at each delivery stage. Out-of-range alerts trigger immediate escalation before product is compromised.',
          bullets: [
            'IoT sensor integration via API for temperature and humidity data',
            'Real-time out-of-range alerts to operations and clinical managers',
            'Full temperature log appended to each delivery\'s chain-of-custody record',
          ],
          icon: Heart,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-flespi-telematics-integration.webp',
        },
        {
          title: 'Compliance Reporting & Audit Exports',
          description: 'Generate the compliance reports your regulators require in minutes, not days. All delivery data, access logs, and chain-of-custody records are structured for direct export in the formats required by healthcare regulatory bodies.',
          bullets: [
            'Pre-built report templates for common healthcare regulatory frameworks',
            'Scheduled automated report delivery to compliance officers',
            'Data retention policies configurable per jurisdiction',
          ],
          icon: ClipboardList,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: MapPin, label: 'Live delivery tracking' },
        { icon: Users, label: 'Multi-facility support' },
        { icon: Clock, label: 'Urgent escalation rules' },
        { icon: Lock, label: 'Data encryption at rest' },
        { icon: BarChart3, label: 'Compliance dashboards' },
        { icon: FileCheck, label: 'Digital chain-of-custody' },
        { icon: Shield, label: 'Role-based access control' },
        { icon: Bell, label: 'SLA breach alerting' },
      ]}
      testimonial={{
        quote: 'The chain-of-custody records alone have saved us from three potential regulatory issues. We can prove exactly where every item was at every moment, and we own the data entirely.',
        author: 'Dr. M. Patel',
        role: 'Head of Laboratory Logistics',
        company: 'Regional NHS Trust',
      }}
      faqs={[
        {
          q: 'Is Fleetbase HIPAA compliant?',
          a: 'Fleetbase\'s self-hosted deployment keeps all patient and operational data within your own infrastructure — meaning you remain the data controller. The platform provides the access controls, audit logs, and encryption required to support HIPAA compliance programmes. Always confirm specific compliance obligations with your legal and compliance team.',
        },
        {
          q: 'Can Fleetbase be deployed in our own cloud environment?',
          a: 'Yes. Fleetbase is open source and designed for self-hosting on AWS, Azure, GCP, or on-premise infrastructure. No patient or operational data is sent to Fleetbase servers in a self-hosted deployment.',
        },
        {
          q: 'Does it support controlled substance delivery tracking?',
          a: 'Yes. The chain-of-custody module captures multi-party signatures and GPS-stamped handoff records at every transfer point, providing the documentation required for controlled substance logistics.',
        },
        {
          q: 'How does temperature monitoring integration work?',
          a: 'Fleetbase integrates with IoT temperature monitoring devices via API. Sensor data is appended to each delivery record and out-of-range conditions trigger configurable alerts.',
        },
        {
          q: 'Can different teams have different access levels?',
          a: 'Yes. Role-based access control allows you to define exactly what each role — courier, clinical, administrative, audit — can view and action within the platform.',
        },
      ]}
      ctaHeading="Logistics your compliance team will actually approve"
      ctaBody="Deploy a healthcare logistics platform that keeps your data in your hands, your deliveries on time, and your audit trail airtight."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
