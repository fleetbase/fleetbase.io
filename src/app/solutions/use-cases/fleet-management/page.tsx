import type { Metadata } from 'next';
import { Truck, Wrench, MapPin, BarChart3, Shield, Smartphone, Bell, FileCheck, Clock, Users } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/fleet-management' },
  title: 'Fleet Management Software',
  description: 'Open-source fleet management: vehicle health, driver performance and utilisation in one dashboard, with maintenance scheduling and compliance.',
  keywords: ['fleet management software', 'vehicle tracking system', 'fleet maintenance software', 'driver management platform', 'fleet compliance software', 'vehicle health monitoring'],
  openGraph: {
    title: 'Fleet Management Software | Fleetbase',
    description: 'Your entire fleet — every vehicle, every driver, every job — visible and under control.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Fleet Management Software | Fleetbase`,
    description: `Your entire fleet — every vehicle, every driver, every job — visible and under control.`,
  },
};

export default function FleetManagementPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Fleet Management', href: '/solutions/use-cases/fleet-management' },
      ]}
      badge="Use Case — Fleet Management"
      title={<>Every Vehicle. Every Driver.<br /><span className="text-gradient">Complete Control.</span></>}
      description="Fleet management without visibility is just expensive guesswork. Breakdowns you didn't see coming. Drivers you can't locate. Compliance documents that are somewhere in a filing cabinet. Fleetbase gives you a single operations platform for real-time fleet tracking, preventive maintenance, driver management, and compliance documentation — so nothing slips through the cracks."
      stats={[
        { value: '31%', label: 'Reduction in unplanned vehicle breakdowns' },
        { value: '20%', label: 'Improvement in fleet utilization rates' },
        { value: '45%', label: 'Less time spent on compliance documentation' },
        { value: '8,000+', label: 'Active fleet instances running on Fleetbase' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp"
      heroScreenshotAlt="Fleetbase fleet management dashboard — real-time vehicle tracking, driver status, and maintenance alerts"
      painPoints={{
        heading: 'The hidden costs of poor fleet visibility',
        items: [
          'Vehicles breaking down without warning because preventive maintenance was missed',
          'No real-time visibility into where vehicles are and whether they\'re on schedule',
          'Driver compliance documents — licences, certifications — expiring without anyone noticing',
          'Fleet utilization guesswork with no data on which vehicles are underused or overloaded',
          'Accident and incident reports managed by email and spreadsheet with no central record',
          'Fuel card abuse and unauthorized usage going undetected for months',
        ],
      }}
      featuresHeading="Fleet management built for operators who can't afford surprises"
      featuresSubheading="Real-time visibility, predictive maintenance, and compliance tracking — in one platform."
      features={[
        {
          title: 'Real-Time Vehicle Tracking',
          description: 'See your entire fleet on a live map at any moment. Track vehicle positions, speed, idling time, and route adherence in real-time. Geofence alerts notify you when vehicles enter or leave defined zones — whether that\'s a customer site, depot boundary, or restricted area.',
          bullets: [
            'Live map with real-time position, speed, and status for every vehicle',
            'Geofencing with configurable entry/exit alerts per zone',
            'Trip history and replay for any vehicle and time period',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Preventive Maintenance Scheduling',
          description: 'Stop reacting to breakdowns and start preventing them. Fleetbase tracks mileage, engine hours, and calendar intervals for each vehicle and automatically schedules the maintenance events that keep your fleet roadworthy — with driver and workshop notifications built in.',
          bullets: [
            'Mileage and date-triggered maintenance scheduling per vehicle type',
            'Driver defect reporting via Navigator app with photo evidence',
            'Maintenance history log with cost tracking per vehicle',
          ],
          icon: Wrench,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-schedules.webp',
        },
        {
          title: 'Driver Management & Performance',
          description: 'Manage driver profiles, licences, and certifications in one place. Track driver performance metrics — on-time rate, speeding incidents, idle time, and customer ratings — and identify coaching opportunities before small issues become compliance problems.',
          bullets: [
            'Driver profiles with licence expiry alerts and document storage',
            'Performance scorecards: on-time %, speeding, idle time, POD rate',
            'Shift scheduling and availability management',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
        {
          title: 'Compliance & Documentation Management',
          description: 'Keep your compliance documentation organised and audit-ready. Vehicle inspection records, DVSA compliance forms, driver hour logs, and incident reports are all stored centrally, with automated reminders for upcoming renewals and regulatory submissions.',
          bullets: [
            'Digital vehicle inspection checklists with photo and signature capture',
            'Driver hour logging with automated HOS compliance checking',
            'Scheduled renewal reminders for licences, MOTs, and insurance',
          ],
          icon: FileCheck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-log.webp',
        },
        {
          title: 'Fleet Utilization Analytics',
          description: 'Understand exactly how your fleet assets are being used. Identify underutilized vehicles that could be redeployed or sold, spot overloaded routes that need additional capacity, and make fleet sizing decisions based on real utilization data rather than gut feel.',
          bullets: [
            'Utilization rate per vehicle, fleet, and time period',
            'Idle time analysis and cost quantification per vehicle',
            'Fleet capacity vs. demand modelling for planning decisions',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Driver Mobile App — Navigator',
          description: 'The Navigator app connects drivers to operations. Pre-trip vehicle checks, job assignments, navigation, proof-of-delivery capture, and defect reporting — all in one app on the driver\'s own smartphone. No dedicated hardware, no manual paperwork.',
          bullets: [
            'Pre-trip and post-trip vehicle inspection checklists',
            'Job list with navigation, delivery instructions, and customer contact',
            'Defect and incident reporting with photo evidence from the cab',
          ],
          icon: Smartphone,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
      ]}
      capabilities={[
        { icon: Bell, label: 'Maintenance alerts' },
        { icon: Shield, label: 'Compliance tracking' },
        { icon: Clock, label: 'Driver hour logging' },
        { icon: Truck, label: 'Multi-depot support' },
        { icon: MapPin, label: 'Geofence alerting' },
        { icon: FileCheck, label: 'Inspection records' },
        { icon: BarChart3, label: 'Utilization reports' },
        { icon: Users, label: 'Driver scorecards' },
      ]}
      testimonial={{
        quote: "We went from one unplanned breakdown per fortnight to one every three months. Fleetbase's maintenance scheduling caught what our manual system kept missing — and the compliance documentation alone has saved us hours every week.",
        author: 'David M.',
        role: 'Fleet Manager',
        company: 'Midlands Haulage Group',
      }}
      faqs={[
        {
          q: 'Does Fleetbase integrate with vehicle GPS trackers and telematics devices?',
          a: 'Yes. Fleetbase integrates with GPS tracking hardware via API, allowing vehicle telemetry data to feed into the live map and analytics dashboards.',
        },
        {
          q: 'Can drivers submit vehicle defect reports from the field?',
          a: 'Yes. The Navigator app includes a defect reporting workflow where drivers photograph and describe issues directly from their vehicle before or after a shift.',
        },
        {
          q: 'How does licence and certification expiry tracking work?',
          a: 'Driver documents and vehicle compliance records are stored with expiry dates. Fleetbase sends automated reminders at configurable intervals before expiry — to the driver, the fleet manager, or both.',
        },
        {
          q: 'Can we manage multiple depots and vehicle types in one account?',
          a: 'Yes. Fleetbase supports multi-depot fleet structures with separate vehicle groups, driver pools, and reporting per location — all accessible from one central console.',
        },
        {
          q: 'Is Fleetbase suitable for mixed fleets including vans, trucks, and specialist vehicles?',
          a: 'Yes. Vehicle profiles are fully configurable with custom attributes for vehicle type, capacity, equipment, and compliance requirements — so mixed fleets of any configuration are supported.',
        },
      ]}
      ctaHeading="Get complete visibility and control over your fleet"
      ctaBody="Stop guessing about vehicle health, driver performance, and compliance status. Start your free trial and have your entire fleet visible from one dashboard in under an hour."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
