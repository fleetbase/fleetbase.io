import type { Metadata } from 'next';
import { Truck, Wrench, Shield, MapPin, BarChart3, Bell, FileCheck, Clock, Users, Smartphone } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/fleet-managers' },
  title: 'Fleet Management Software for Fleet Managers',
  description: 'Open-source fleet management for fleet managers: vehicle health, compliance, driver performance and real-time locations in one platform.',
  keywords: ['fleet management software', 'fleet manager tools', 'vehicle compliance tracking', 'fleet maintenance platform', 'driver performance management', 'vehicle tracking fleet manager'],
  openGraph: {
    title: 'Fleet Management Software for Fleet Managers | Fleetbase',
    description: 'Every vehicle. Every driver. Every compliance deadline. Visible and under control.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Fleet Management Software for Fleet Managers | Fleetbase`,
    description: `Every vehicle. Every driver. Every compliance deadline. Visible and under control.`,
  },
};

export default function FleetManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Fleet Managers"
      title={<>Every Vehicle Tracked.<br /><span className="text-gradient">Every Compliance Met.</span></>}
      description="Fleet managers carry the weight of vehicle availability, maintenance schedules, driver compliance, and regulatory documentation — all while fielding calls from operations when a vehicle breaks down or a licence expires. Fleetbase gives you a complete fleet management platform: real-time tracking, predictive maintenance, compliance documentation, and driver performance — everything you need to run a safe, legal, and available fleet."
      stats={[
        { value: '31%', label: 'Reduction in unplanned vehicle breakdowns' },
        { value: '100%', label: 'Compliance document visibility at any audit' },
        { value: '45%', label: 'Less admin time on maintenance coordination' },
        { value: '20%', label: 'Improvement in overall fleet availability' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp"
      heroScreenshotAlt="Fleetbase fleet manager dashboard — vehicle tracking, maintenance schedule, and compliance overview"
      painPoints={{
        heading: 'The fleet management problems that wake you up at night',
        items: [
          'Vehicles breaking down mid-shift because a service was missed or delayed',
          'Driver licences and certifications expiring without an advance warning system',
          'Vehicle inspection records scattered across paper forms and email threads',
          'No real-time visibility into where your vehicles are and whether they\'re being driven safely',
          'Compliance audits requiring days of manual document retrieval',
          'Fleet utilization data that\'s either unavailable or weeks out of date when you need it',
        ],
      }}
      featuresHeading="Fleet management built for the job, not just the job title"
      featuresSubheading="Maintenance, compliance, tracking, and driver management — unified and automated."
      features={[
        {
          title: 'Real-Time Vehicle Tracking',
          description: 'Know where every vehicle is at any moment — including speed, idle status, and route adherence. Set geofence alerts for depot boundaries, customer sites, and restricted zones. View trip history and replay any journey for performance review or incident investigation.',
          bullets: [
            'Live map with real-time position and status for every vehicle',
            'Speed, idle time, and harsh braking event monitoring',
            'Trip history replay for any vehicle and date range',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Preventive Maintenance Scheduling',
          description: 'Track mileage, engine hours, and calendar intervals for every vehicle and automatically schedule maintenance before issues become failures. Driver fault reports feed directly into the maintenance queue — so nothing gets missed between formal service intervals.',
          bullets: [
            'Mileage and date-triggered maintenance scheduling per vehicle',
            'Driver defect reporting via Navigator app with photo and description',
            'Service history log with cost tracking and next-due calculations',
          ],
          icon: Wrench,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-schedules.webp',
        },
        {
          title: 'Compliance Documentation Management',
          description: 'Store and manage all vehicle and driver compliance documentation centrally — MOT records, insurance certificates, driver licences, tachograph calibrations, and inspection forms. Automated reminders ensure nothing expires without advance notice.',
          bullets: [
            'Document storage with expiry tracking per vehicle and driver',
            'Configurable renewal reminders at 90, 30, and 7 days before expiry',
            'Audit-ready document export for regulatory inspections',
          ],
          icon: Shield,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-maintenance-log.webp',
        },
        {
          title: 'Driver Performance & Safety Monitoring',
          description: 'Track the driving behaviours that create safety risks and cost your fleet money: speeding, harsh braking, rapid acceleration, and excessive idling. Build driver scorecards, identify coaching opportunities, and demonstrate your safety management process to insurers.',
          bullets: [
            'Driver safety scorecards with configurable incident thresholds',
            'Speeding and harsh event alerts to fleet manager in real-time',
            'Performance trend reports for driver review meetings',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
        {
          title: 'Driver Vehicle Inspection Checklists',
          description: 'Replace paper walk-around checks with digital inspection workflows in the Navigator app. Drivers complete pre-trip and post-trip checks on their phone — with photos of any defects — and reports feed instantly to the fleet management console.',
          bullets: [
            'Configurable inspection checklists per vehicle type',
            'Photo evidence capture for defects and damage',
            'Defect status tracking from report to resolution',
          ],
          icon: Smartphone,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
        },
        {
          title: 'Fleet Utilization & Cost Analytics',
          description: 'Understand how your fleet assets are being used — and what they\'re costing you to run. Track utilization rate, cost-per-kilometre, and fuel efficiency per vehicle. Identify underutilized assets that could be redeployed or disposed of to reduce your operating cost.',
          bullets: [
            'Vehicle utilization rate by depot, vehicle type, and period',
            'Fuel cost and cost-per-kilometre analysis per vehicle',
            'Total cost of ownership modelling for fleet renewal planning',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Bell, label: 'Maintenance alerts' },
        { icon: Clock, label: 'Licence expiry reminders' },
        { icon: FileCheck, label: 'Inspection records' },
        { icon: Truck, label: 'Multi-depot fleet' },
        { icon: Shield, label: 'Compliance tracking' },
        { icon: MapPin, label: 'Geofence alerting' },
        { icon: BarChart3, label: 'Fleet cost reports' },
        { icon: Users, label: 'Driver scorecards' },
      ]}
      testimonial={{
        quote: "Before Fleetbase, I had a spreadsheet for maintenance dates, a folder for compliance docs, and a whiteboard for vehicle availability. Now I have one platform that does all of it. I haven't had an unplanned breakdown in four months.",
        author: 'Neil B.',
        role: 'Fleet Manager',
        company: 'Regional Distribution Ltd',
      }}
      faqs={[
        {
          q: 'Does Fleetbase integrate with existing GPS trackers on our vehicles?',
          a: 'Yes. Fleetbase integrates with GPS tracking hardware via API to ingest vehicle telemetry data — including position, speed, and ignition status — into the live map and analytics.',
        },
        {
          q: 'How does driver defect reporting work?',
          a: 'Drivers complete digital inspection checklists in the Navigator app before and after shifts. Any defect is reported with photos and a description — feeding directly into the maintenance queue in the fleet console.',
        },
        {
          q: 'Can we track tyre condition and component-level maintenance?',
          a: 'Yes. Vehicle maintenance records support component-level tracking — tyres, brakes, filters, and any custom component — each with their own mileage or date-based replacement intervals.',
        },
        {
          q: 'How are compliance document expiry reminders managed?',
          a: 'Every compliance document stored in Fleetbase has an expiry date. Automated reminders are sent to the fleet manager and optionally the driver at configurable intervals before expiry.',
        },
        {
          q: 'Can I manage drivers from different depots in one account?',
          a: 'Yes. Multi-depot fleet structures are fully supported — with separate driver pools, vehicle groups, and compliance reporting per location, and consolidated management at account level.',
        },
      ]}
      ctaHeading="A fleet that\'s always available, always compliant, always tracked"
      ctaBody="Stop managing your fleet from spreadsheets and paper forms. Start your free trial and get every vehicle, driver, and compliance deadline visible from one dashboard."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
