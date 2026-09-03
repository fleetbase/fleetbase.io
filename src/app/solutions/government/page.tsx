import type { Metadata } from 'next';
import { Shield, Lock, MapPin, ClipboardList, Server, BarChart3, FileCheck, Users, Globe, Bell } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/government' },
  title: 'Military & Government Logistics Software',
  description: 'Open-source logistics for military and government operations. Self-hosted, air-gap capable, role-based access and data sovereignty by design.',
  keywords: ['government logistics software', 'military fleet management', 'secure logistics platform', 'defense logistics software', 'air-gap logistics', 'government transport management'],
  openGraph: {
    title: 'Military & Government Logistics | Fleetbase',
    description: 'Logistics software built to your security standards. Self-hosted, auditable, and data-sovereign by design.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Military & Government Logistics | Fleetbase`,
    description: `Logistics software built to your security standards. Self-hosted, auditable, and data-sovereign by design.`,
  },
};

export default function GovernmentPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Military & Government', href: '/solutions/government' },
      ]}
      badge="Military & Government"
      title={<>Logistics Software Built to<br /><span className="text-gradient">Your Security Standards.</span></>}
      description="Government and military logistics operations demand data sovereignty, comprehensive audit trails, role-based access at every level, and the option to operate completely offline. Fleetbase is open-source, self-hosted, and designed from the ground up to meet the security and compliance requirements that commercial SaaS logistics software was never built to satisfy."
      stats={[
        { value: '100%', label: 'Data sovereignty — your infrastructure, your data' },
        { value: 'Air-gap', label: 'Capable offline operation' },
        { value: 'RBAC', label: 'Granular role-based access control' },
        { value: 'Full', label: 'Audit trail on every action and access event' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp"
      heroScreenshotAlt="Fleetbase government and military logistics operations dashboard"
      painPoints={{
        heading: 'Why commercial SaaS logistics software fails government requirements',
        items: [
          'Data processed on third-party commercial cloud infrastructure — a non-starter for sensitive operations',
          'No auditability of who accessed what data and when',
          'Commercial software cannot be inspected, modified, or security-assessed',
          'No offline operation capability for field deployments in low or no-connectivity environments',
          'Vendor lock-in creates dependency on a commercial entity for critical operational infrastructure',
          'Insufficient role-based access granularity for multi-clearance environments',
        ],
      }}
      featuresHeading="Security and compliance built into every layer"
      featuresSubheading="Open-source by design. Auditable by default. Deployable anywhere."
      features={[
        {
          title: 'Fully Self-Hosted & Data-Sovereign',
          description: 'Fleetbase runs entirely within your own infrastructure — government data centre, classified network, private cloud, or on-premise hardware. No data ever transits to commercial servers. No vendor has access to your operational data.',
          bullets: [
            'Deploy on any Linux infrastructure, Kubernetes cluster, or bare metal',
            'Complete data sovereignty — no external dependencies at runtime',
            'Operates on classified networks with no external connectivity required',
          ],
          icon: Server,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Air-Gap & Offline Operation',
          description: 'Field operations don\'t always have reliable connectivity. The Navigator driver app caches operational data locally and syncs when connectivity is restored. The platform itself can operate in completely disconnected environments.',
          bullets: [
            'Navigator app offline mode — orders and routes cached locally',
            'Automatic sync on connectivity restoration with conflict resolution',
            'Full platform operation on isolated networks with no internet dependency',
          ],
          icon: Globe,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-routing-settings.webp',
        },
        {
          title: 'Role-Based Access Control & Clearance Management',
          description: 'Implement access controls that match your operational security structure. Define roles, permissions, and data visibility rules at a granular level — ensuring personnel only access the information authorised for their clearance level and role.',
          bullets: [
            'Unlimited custom role definitions with per-resource permissions',
            'Data visibility rules that prevent cross-clearance information leakage',
            'System-wide two-factor authentication enforcement',
          ],
          icon: Shield,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp',
        },
        {
          title: 'Comprehensive Audit Trails',
          description: 'Every access event, data modification, delivery action, and administrative change is logged immutably with user identity, timestamp, IP address, and action detail. Security review, compliance audit, and incident investigation have the complete record they need.',
          bullets: [
            'Immutable audit log for all user actions and access events',
            'Exportable audit records for security review and compliance reporting',
            'Tamper-evident logging with configurable retention periods',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Open Source — Inspectable & Modifiable',
          description: 'Unlike commercial black-box software, Fleetbase\'s complete source code is available for security assessment, modification, and approval. Your security team can inspect every line, apply custom hardening, and maintain full control over the software running in your environment.',
          bullets: [
            'Complete source code available for security assessment',
            'Modify and extend for specific operational requirements',
            'No vendor dependency — your team owns the deployment',
          ],
          icon: Lock,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Fleet & Asset Logistics Management',
          description: 'All the operational logistics capability your teams need: fleet tracking, route optimization, driver management, dispatch coordination, and chain-of-custody documentation — with the security controls government operations demand.',
          bullets: [
            'Real-time fleet and asset position tracking on secured maps',
            'Chain-of-custody tracking for sensitive cargo and equipment',
            'Operational reporting and mission logistics documentation',
          ],
          icon: ClipboardList,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
      ]}
      capabilities={[
        { icon: Lock, label: 'Data encryption at rest' },
        { icon: Users, label: 'Multi-clearance RBAC' },
        { icon: Bell, label: 'Incident alerting' },
        { icon: BarChart3, label: 'Operations reporting' },
        { icon: MapPin, label: 'Secure fleet tracking' },
        { icon: FileCheck, label: 'Chain-of-custody' },
        { icon: Shield, label: 'Two-factor auth' },
        { icon: Server, label: 'On-premise deployment' },
      ]}
      testimonial={{
        quote: 'The open-source architecture meant our security team could inspect and approve the entire codebase before deployment. That\'s something no commercial SaaS vendor could offer us.',
        author: 'Senior Logistics Officer',
        role: 'Government Fleet Operations',
        company: 'Classified Agency',
      }}
      faqs={[
        {
          q: 'Can Fleetbase operate in a completely disconnected, air-gapped environment?',
          a: 'Yes. The platform can be deployed with no external internet connectivity. The Navigator driver app operates offline and syncs locally when within network range.',
        },
        {
          q: 'Is the full source code available for security assessment?',
          a: 'Yes. Fleetbase is fully open source under AGPL-3.0. The complete source code is available on GitHub for inspection, security assessment, and modification. A commercial licence is available for modifications that need to remain proprietary.',
        },
        {
          q: 'What data encryption does Fleetbase provide?',
          a: 'Fleetbase supports encryption at rest and in transit. The deployment configuration allows you to specify your own encryption keys and integrate with your existing key management infrastructure.',
        },
        {
          q: 'Can we modify Fleetbase to meet specific classified operational requirements?',
          a: 'Yes. The extension system allows custom modules to be built and deployed. The core platform can be modified to meet specific operational requirements under the terms of the commercial licence.',
        },
        {
          q: 'Does Fleetbase support multi-site or geographically distributed operations?',
          a: 'Yes. Multi-depot, multi-region, and distributed fleet configurations are all supported. Access controls can be scoped to specific operational theatres or locations.',
        },
      ]}
      ctaHeading="Logistics infrastructure you can trust with classified operations"
      ctaBody="If your operations require data sovereignty, open-source auditability, and the option to deploy anywhere — Fleetbase was built for exactly that. Let\'s talk."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Contact Us"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
