import type { Metadata } from 'next';
import { Recycle, MapPin, BarChart3, Truck, ClipboardList, Zap, Bell, Clock, Shield, FileCheck } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/waste-management' },
  title: 'Waste & Recycling Fleet Management Software',
  description: 'Open-source fleet management for waste and recycling. Optimise collection routes, cut fuel costs, track containers and report on compliance.',
  keywords: ['waste management software', 'recycling fleet management', 'waste collection routing', 'bin tracking software', 'refuse logistics platform'],
  openGraph: {
    title: 'Waste & Recycling Operations Software | Fleetbase',
    description: 'Collect more, drive less. Route optimization and compliance tools built for waste operators.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Waste & Recycling Operations Software | Fleetbase`,
    description: `Collect more, drive less. Route optimization and compliance tools built for waste operators.`,
  },
};

export default function WasteManagementPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Waste & Recycling', href: '/solutions/waste-management' },
      ]}
      badge="Waste & Recycling"
      title={<>Collect More.<br /><span className="text-gradient">Drive Less. Comply Effortlessly.</span></>}
      description="Waste and recycling operations run on tight margins, strict compliance timelines, and the constant pressure to do more with the same number of vehicles. Fleetbase gives waste operators intelligent route optimization, container tracking, compliance reporting, and real-time fleet visibility — all on open-source infrastructure you own and control."
      stats={[
        { value: '28%', label: 'Average fuel reduction via route optimization' },
        { value: '40%', label: 'Fewer manual compliance reporting hours' },
        { value: '15%', label: 'More collections per vehicle per day' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp"
      heroScreenshotAlt="Fleetbase waste management fleet operations — route optimization and compliance tracking"
      painPoints={{
        heading: 'The operational pressures waste operators face every day',
        items: [
          'Drivers running inefficient routes because no one\'s looked at the data in months',
          'Fuel costs rising while collection volume stays flat',
          'Manual compliance reporting consuming entire days for each regulatory submission',
          'No visibility into which containers are overflowing between scheduled collections',
          'Customer complaints about missed collections with no evidence to investigate',
          'Fleet maintenance backlogs causing breakdowns during critical collection days',
        ],
      }}
      featuresHeading="Smarter waste operations from first collection to compliance report"
      featuresSubheading="Every vehicle, every container, every collection — visible and optimized."
      features={[
        {
          title: 'Intelligent Collection Route Optimization',
          description: 'Stop running yesterday\'s routes in today\'s conditions. Fleetbase dynamically optimizes collection routes based on container fill levels, traffic, vehicle capacity, and collection time windows — reducing fuel consumption and increasing collections per shift.',
          bullets: [
            'Dynamic route recalculation based on real-time data inputs',
            'Vehicle capacity and weight constraint modelling',
            'Multi-vehicle coordination to prevent route overlap and missed zones',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
        },
        {
          title: 'Container & Asset Tracking',
          description: 'Know where every container, skip, and bin is at any point in time. Track collection status, flag overflows before they become complaints, and manage container placement and retrieval from a single operations dashboard.',
          bullets: [
            'Container lifecycle tracking from placement to retrieval',
            'Fill-level sensor integration via API for predictive collection',
            'Customer-facing container status portal for business clients',
          ],
          icon: Recycle,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-geofences.webp',
        },
        {
          title: 'Compliance & Environmental Reporting',
          description: 'Generate the reports your regulators require — waste tonnage by type, collection frequency, disposal facility manifests, and diversion rates — automatically from your operational data. Audit season becomes a non-event.',
          bullets: [
            'Pre-built report templates for common waste regulation frameworks',
            'Automated scheduled reporting to regulators and internal stakeholders',
            'Digital waste transfer notes and disposal manifests',
          ],
          icon: ClipboardList,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Fleet Maintenance & Vehicle Health',
          description: 'Waste vehicles take a beating. Track service history, schedule preventive maintenance, manage tyre and component wear, and log driver fault reports — keeping your fleet roadworthy and your compliance documentation clean.',
          bullets: [
            'Preventive maintenance scheduling based on mileage and date',
            'Driver fault and defect reporting via the Navigator mobile app',
            'Vehicle inspection checklists with photo evidence',
          ],
          icon: Truck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-log.webp',
        },
        {
          title: 'Customer Notification & Collection Alerts',
          description: 'Reduce customer complaints with proactive communication. Notify business and residential customers when their collection is scheduled, when it\'s running behind, and when it\'s completed — automatically.',
          bullets: [
            'Automated collection day reminders for business clients',
            'Real-time delay notifications with rescheduling options',
            'Collection completion confirmation with timestamp and GPS data',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/storefront/storefront-push-notifications.webp',
        },
        {
          title: 'Operations Analytics & KPI Dashboards',
          description: 'Track the KPIs that determine whether your operation is profitable: cost-per-collection, fuel cost per route, vehicle utilization, and diversion rates. Build custom dashboards for operations, finance, and sustainability reporting.',
          bullets: [
            'Cost-per-collection and cost-per-tonne broken down by vehicle and zone',
            'Diversion rate and recycling performance for sustainability reporting',
            'Route efficiency trending to catch degradation early',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Collection scheduling' },
        { icon: Shield, label: 'Regulatory compliance' },
        { icon: Zap, label: 'Auto-dispatch engine' },
        { icon: FileCheck, label: 'Digital manifests' },
        { icon: MapPin, label: 'Multi-depot support' },
        { icon: BarChart3, label: 'Sustainability reports' },
        { icon: Bell, label: 'Customer notifications' },
        { icon: Truck, label: 'Fleet maintenance' },
      ]}
      testimonial={{
        quote: 'We reduced our daily driven distance by 18% in the first month and our compliance reporting now takes hours instead of days. Fleetbase paid for itself inside 60 days.',
        author: 'Mark T.',
        role: 'Operations Manager',
        company: 'GreenRoute Waste Services',
      }}
      faqs={[
        {
          q: 'Can Fleetbase integrate with container fill-level sensor systems?',
          a: 'Yes. The API supports integration with IoT sensor platforms to ingest fill-level data, which can be used to trigger dynamic collection scheduling and route updates.',
        },
        {
          q: 'Does Fleetbase generate waste transfer notes and disposal manifests?',
          a: 'Yes. Digital waste transfer notes and disposal facility manifests can be generated from delivery records and exported in the formats required by local regulatory bodies.',
        },
        {
          q: 'Can we manage both municipal and commercial collection operations in one account?',
          a: 'Yes. Multiple service types, client categories, and collection frequencies can all be managed in one Fleetbase account with separate dashboards and reporting per client type.',
        },
        {
          q: 'How does the compliance reporting work?',
          a: 'All operational data — tonnage, collection times, vehicle logs, disposal records — is captured automatically. Pre-built report templates generate the submissions your regulators need, on a schedule you define.',
        },
        {
          q: 'Can drivers report vehicle defects and maintenance issues from the field?',
          a: 'Yes. The Navigator driver app includes a defect reporting workflow where drivers can log issues with photos and descriptions directly from their vehicle.',
        },
      ]}
      ctaHeading="Optimize your waste operation from the ground up"
      ctaBody="Less fuel, more collections, and compliance reports that don't take all week. See what Fleetbase can do for your waste and recycling operation."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
