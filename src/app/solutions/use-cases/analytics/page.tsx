import type { Metadata } from 'next';
import { BarChart3, TrendingUp, MapPin, FileText, Zap, Settings, Bell, Clock, Users, Shield } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/analytics' },
  title: 'Logistics Analytics & Reporting',
  description: 'Turn logistics data into decisions. Live dashboards, KPI tracking, cost analysis and exportable reports on fleet, SLA and driver performance.',
  keywords: ['logistics analytics software', 'fleet performance dashboard', 'delivery KPI tracking', 'logistics reporting platform', 'supply chain analytics', 'fleet cost analysis'],
  openGraph: {
    title: 'Logistics Analytics & Reporting | Fleetbase',
    description: 'Stop managing your logistics operation by feel. Start managing it by data.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics Analytics & Reporting | Fleetbase`,
    description: `Stop managing your logistics operation by feel. Start managing it by data.`,
  },
};

export default function AnalyticsPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics' },
      ]}
      badge="Use Case — Analytics & Reporting"
      title={<>Stop Managing Your Operation<br /><span className="text-gradient">by Feel. Manage it by Data.</span></>}
      description="Most logistics operations are flying blind. You know something is wrong when costs spike or customers complain — but by then, the damage is done. Fleetbase's analytics layer captures every operational data point — deliveries, routes, driver behaviour, fuel, costs, SLAs — and surfaces the insights that let you fix problems before they become expensive, and prove performance to your clients and leadership."
      stats={[
        { value: '35%', label: 'Faster identification of operational cost drivers' },
        { value: '50%', label: 'Reduction in time spent compiling reports manually' },
        { value: '18%', label: 'Improvement in on-time delivery after KPI visibility' },
        { value: '10M+', label: 'Orders tracked and analysed on Fleetbase' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-report-builder.webp"
      heroScreenshotAlt="Fleetbase logistics analytics dashboard — fleet KPIs, delivery performance, and cost breakdown"
      painPoints={{
        heading: 'Managing logistics without data costs you in every direction',
        items: [
          'Cost overruns that you can\'t explain because the data lives in three different systems',
          'Client SLA disputes with no reliable data to defend your performance record',
          'Compliance reporting that takes days of manual data extraction every quarter',
          'No early warning when performance is degrading — you find out from a complaint',
          'Fleet utilization decisions made on gut feel with no utilization data to back them up',
          'Driver performance issues identified months late — after patterns become problems',
        ],
      }}
      featuresHeading="Analytics built for logistics operators, not data scientists"
      featuresSubheading="Every operational metric, visible in real time, without building a data pipeline."
      features={[
        {
          title: 'Live Operations Dashboard',
          description: 'The moment you open Fleetbase, you see the current state of your operation — active deliveries, at-risk orders, driver status, and today\'s performance against targets. No lag, no refresh. The data is live because your operation doesn\'t pause for reports.',
          bullets: [
            'Real-time active delivery status, driver positions, and order pipeline',
            'Today\'s on-time rate, completion rate, and SLA breach count at a glance',
            'Configurable dashboard widgets for the KPIs your role cares about',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Delivery Performance KPIs',
          description: 'Track the metrics that determine whether your delivery operation is meeting commitments: first-attempt delivery rate, on-time percentage, average delivery duration, and SLA adherence — broken down by zone, customer, driver, and time period.',
          bullets: [
            'On-time delivery rate vs. committed windows by zone and customer',
            'First-attempt delivery rate with failed delivery reason breakdown',
            'Average delivery duration trending and period-over-period comparison',
          ],
          icon: TrendingUp,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Fleet & Driver Performance Analytics',
          description: 'Understand exactly what\'s happening at the vehicle and driver level. Identify your top performers, catch underperformance early, and make data-driven decisions on driver training, route assignments, and fleet expansion.',
          bullets: [
            'Driver scorecards: on-time %, POD rate, stops per shift, idle time',
            'Vehicle utilization rate and cost-per-kilometre by vehicle',
            'Speeding, harsh braking, and behaviour incident trending per driver',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
        {
          title: 'Cost Analysis & Profitability Reporting',
          description: 'Know exactly what every delivery, route, and customer account costs your operation. Track fuel cost per route, cost-per-delivery by zone, and overall margin by service type — so pricing decisions are based on real numbers, not estimates.',
          bullets: [
            'Cost-per-delivery broken down by route, zone, and vehicle type',
            'Fuel cost variance tracking against optimized plan benchmarks',
            'Customer account profitability reporting for commercial reviews',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/ledger/ledger-balance-sheet.webp',
        },
        {
          title: 'SLA & Compliance Reporting',
          description: 'Generate the reports your clients and regulators need — automatically, from your operational data. SLA performance summaries, delivery audit records, compliance certificates, and custom-format reports on a schedule you define.',
          bullets: [
            'Client SLA report generation — scheduled or on-demand',
            'Compliance report templates for regulatory submissions',
            'Exportable delivery records in CSV, PDF, and API formats',
          ],
          icon: FileText,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Custom Dashboards & Report Builder',
          description: 'Build the dashboards and reports your operation actually needs — not what came preconfigured. Drag-and-drop report builder lets operations managers, finance, and account teams each build views tailored to their role without needing a developer.',
          bullets: [
            'Drag-and-drop dashboard builder with configurable widget types',
            'Saved report templates for recurring performance reviews',
            'Scheduled report delivery via email to stakeholders',
          ],
          icon: Settings,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: MapPin, label: 'Zone performance maps' },
        { icon: Bell, label: 'Performance alerts' },
        { icon: Shield, label: 'Audit-ready exports' },
        { icon: Clock, label: 'Historical trend analysis' },
        { icon: TrendingUp, label: 'Period-over-period comparison' },
        { icon: FileText, label: 'Scheduled report delivery' },
        { icon: BarChart3, label: 'Cost-per-delivery analysis' },
        { icon: Users, label: 'Driver scorecards' },
      ]}
      testimonial={{
        quote: "We used to spend two days every month pulling together the client SLA report. Now it's generated automatically and in their inbox on the first of the month. And because we can see performance in real time, we fix issues before they show up in the report.",
        author: 'Marcus H.',
        role: 'Commercial Director',
        company: 'Apex Freight Solutions',
      }}
      faqs={[
        {
          q: 'How current is the data in the analytics dashboards?',
          a: 'The live operations dashboard is updated in real-time as events occur. Historical analytics and KPI charts typically refresh on 5-minute intervals, with end-of-day summaries available by 00:30.',
        },
        {
          q: 'Can I build custom reports for different teams?',
          a: 'Yes. The report builder allows you to create team-specific dashboards and reports. Saved reports can be scheduled for automatic delivery via email to operations, finance, or account management teams.',
        },
        {
          q: 'Can we export data for use in external BI tools like Power BI or Tableau?',
          a: 'Yes. All operational data is accessible via the REST API and can be exported in CSV and JSON formats for ingestion into any external analytics or BI platform.',
        },
        {
          q: 'Does Fleetbase track fuel costs and vehicle running costs?',
          a: 'Yes. Fuel consumption data from telematics integration, combined with route distance and vehicle type data, enables cost-per-kilometre and cost-per-delivery calculations at vehicle and fleet level.',
        },
        {
          q: 'How far back does historical data go?',
          a: 'Data retention is configurable and unlimited on self-hosted deployments. Cloud plans retain full operational history with no artificial cutoff.',
        },
      ]}
      ctaHeading="Make every operational decision a data-backed one"
      ctaBody="The insights you need to cut costs, meet SLAs, and grow your operation with confidence. Start your free trial and have your first performance dashboard live in minutes."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
