import type { Metadata } from 'next';
import { LayoutDashboard, Zap, BarChart3, Bell, Settings, Users, MapPin, FileCheck, Clock, Shield } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/operations-managers' },
  title: 'Logistics Software for Operations Managers',
  description: 'One dashboard to oversee dispatch, monitor SLAs, manage exceptions and report on performance, without switching between systems.',
  keywords: ['logistics software for operations managers', 'operations management platform', 'logistics operations dashboard', 'dispatch management software', 'SLA monitoring software'],
  openGraph: {
    title: 'Logistics Software for Operations Managers | Fleetbase',
    description: 'Everything you need to run your operation in one place — live, accurate, and actionable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics Software for Operations Managers | Fleetbase`,
    description: `Everything you need to run your operation in one place — live, accurate, and actionable.`,
  },
};

export default function OperationsManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Operations Managers"
      title={<>Run Your Operation<br /><span className="text-gradient">From One Dashboard.</span></>}
      description="Operations managers are stretched across dispatch decisions, SLA monitoring, driver coordination, and performance reporting — often across multiple tools that don't talk to each other. Fleetbase gives you a single operations control centre: live dispatch visibility, automated SLA alerting, exception management, and performance reporting — without the context-switching that burns your day."
      stats={[
        { value: '50%', label: 'Reduction in time spent on manual dispatch' },
        { value: '3×', label: 'Faster exception resolution with live visibility' },
        { value: '40%', label: 'Less time on status update requests from stakeholders' },
        { value: '98%', label: 'On-time SLA rate for operations running Fleetbase' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
      heroScreenshotAlt="Fleetbase operations management dashboard — live dispatch, SLA tracking, and driver overview"
      painPoints={{
        heading: 'The operational fire-fighting that fills your day',
        items: [
          'Dispatchers manually assigning orders while you field escalations from every direction',
          'SLA breaches you find out about from the client before your own system alerts you',
          'No live view of where every driver and order is — you\'re working from delayed snapshots',
          'Performance reports assembled manually from multiple systems every reporting period',
          'Exception management done by phone and email with no audit trail',
          'Team coordination across depots or shifts with no shared operational view',
        ],
      }}
      featuresHeading="The operational control centre you've always needed"
      featuresSubheading="From live dispatch to end-of-day reporting — everything in one place."
      features={[
        {
          title: 'Live Dispatch & Fleet Visibility',
          description: 'See your entire operation in real time — every active driver, every order in progress, every vehicle on the map. Identify bottlenecks, manage driver capacity, and make dispatch decisions from a single view without calling a single driver.',
          bullets: [
            'Real-time driver positions and order status on live map',
            'Active order pipeline with status, driver assignment, and ETA',
            'Driver availability and capacity view for same-day demand management',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp',
        },
        {
          title: 'Automated SLA Monitoring & Alerting',
          description: 'Fleetbase watches every active order against its committed delivery window. When an order is at risk of breaching its SLA — not when it already has — the right person gets an alert with enough time to act. You manage by exception, not by constant monitoring.',
          bullets: [
            'Configurable SLA warning thresholds per order type and customer',
            'Automated escalation to the right team member based on breach severity',
            'SLA breach log for post-incident review and client reporting',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Smart Dispatch Automation',
          description: 'Reduce the manual load on your dispatch team without losing operational control. Fleetbase\'s auto-assignment engine handles routine order-to-driver matching based on proximity, zone, and capacity — freeing dispatchers to focus on exceptions and priority jobs.',
          bullets: [
            'Configurable auto-assignment rules per depot, order type, and service level',
            'Manual override available at any point for dispatcher control',
            'Dispatch queue prioritization by SLA risk and order urgency',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Exception Management & Resolution',
          description: 'When something goes wrong — failed delivery, driver delay, vehicle breakdown — Fleetbase surfaces the exception immediately with the context needed to act. Log resolutions, reassign orders, and track exception patterns to prevent recurrence.',
          bullets: [
            'Exception dashboard with active issues, impact, and resolution status',
            'One-click order reassignment to available drivers',
            'Exception history and root cause tracking for operational improvement',
          ],
          icon: Settings,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-import.webp',
        },
        {
          title: 'Team & Depot Management',
          description: 'Manage drivers, dispatchers, and depot staff with role-based access that gives each team member exactly the view and permissions they need. Multi-depot operations get separate views per location with consolidated reporting at management level.',
          bullets: [
            'Role-based console access for drivers, dispatchers, and managers',
            'Multi-depot support with per-depot operational views',
            'Shift scheduling and driver availability management',
          ],
          icon: Users,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-routing-settings.webp',
        },
        {
          title: 'Operational Performance Reporting',
          description: 'End-of-day, weekly, and monthly performance reports generated automatically from your operational data — on-time rate, completion rate, cost-per-delivery, driver performance, and SLA adherence — presented in formats ready for leadership review or client delivery.',
          bullets: [
            'Automated daily and weekly operational performance summaries',
            'Client-ready SLA compliance reports on demand',
            'Driver and depot performance benchmarking for team reviews',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'SLA breach prevention' },
        { icon: Shield, label: 'Role-based access' },
        { icon: FileCheck, label: 'Digital POD records' },
        { icon: LayoutDashboard, label: 'Custom dashboards' },
        { icon: MapPin, label: 'Multi-depot operations' },
        { icon: Bell, label: 'Escalation workflows' },
        { icon: Zap, label: 'Auto-dispatch engine' },
        { icon: BarChart3, label: 'KPI reporting' },
      ]}
      testimonial={{
        quote: "I used to spend my mornings chasing status updates from drivers and dispatchers. Now I open Fleetbase and I can see everything in one place. My team spends time solving problems rather than finding them.",
        author: 'Claire M.',
        role: 'Head of Operations',
        company: 'Citywide Logistics',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle multi-depot operations from one console?',
          a: 'Yes. Multiple depots are managed from a single account with per-depot views for operations teams and consolidated reporting at management level.',
        },
        {
          q: 'How does SLA alerting work in practice?',
          a: 'You define SLA windows per order type and configurable warning thresholds. When an active order hits the warning threshold, Fleetbase alerts the designated escalation contact via console notification and optionally email or SMS — before the breach occurs.',
        },
        {
          q: 'Can we automate dispatch without losing dispatcher control?',
          a: 'Yes. Auto-assignment rules handle routine assignment automatically while dispatchers focus on exceptions. Any auto-assigned order can be manually reassigned at any point.',
        },
        {
          q: 'How are operational reports generated?',
          a: 'Reports are generated automatically from your operational data on a schedule you configure — daily summaries, weekly KPI reviews, monthly SLA reports — and can be emailed to your team or stakeholders automatically.',
        },
        {
          q: 'Can I give clients visibility into their orders without exposing internal operations data?',
          a: 'Yes. Client-facing tracking portals show order status, live tracking, and delivery confirmation for orders relevant to that client — without any access to internal operations data.',
        },
      ]}
      ctaHeading="Run your operation with confidence, not guesswork"
      ctaBody="Live visibility, automated alerting, and the reporting your leadership needs — all from one operations platform. Start your free trial today."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
