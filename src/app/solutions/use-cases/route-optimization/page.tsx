import type { Metadata } from 'next';
import { Navigation, Truck, BarChart3, Zap, MapPin, Clock, RefreshCw, Bell, Shield, FileCheck } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/use-cases/route-optimization' },
  title: 'Route Optimization Software',
  description: 'Open-source route optimization software. Intelligent multi-stop routing that factors in live traffic, time windows and vehicle capacity.',
  keywords: ['route optimization software', 'delivery route planner', 'multi-stop route optimization', 'fleet route planning', 'dynamic route optimization', 'last mile routing'],
  openGraph: {
    title: 'Route Optimization Software | Fleetbase',
    description: 'Stop planning routes by hand. Let Fleetbase optimize every run for time, fuel, and capacity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Route Optimization Software | Fleetbase`,
    description: `Stop planning routes by hand. Let Fleetbase optimize every run for time, fuel, and capacity.`,
  },
};

export default function RouteOptimizationPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Route Optimization', href: '/solutions/use-cases/route-optimization' },
      ]}
      badge="Use Case — Route Optimization"
      title={<>Stop Planning Routes<br /><span className="text-gradient">by Hand. Start Winning.</span></>}
      description="Manual route planning is costing you more than you realize. Your drivers are taking inefficient paths, missing delivery windows, and burning fuel on routes that haven't been reviewed in months. Fleetbase's route optimization engine sequences every run for maximum efficiency — automatically, in seconds, factoring in real-time traffic, delivery windows, vehicle capacity, and driver availability."
      stats={[
        { value: '28%', label: 'Average fuel reduction with optimized routing' },
        { value: '35%', label: 'Fewer late deliveries vs. manual planning' },
        { value: '15%', label: 'More stops completed per vehicle per day' },
        { value: '2 min', label: 'Average time to optimize a 50-stop route' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp"
      heroScreenshotAlt="Fleetbase route optimization — multi-stop route sequencing on live map with efficiency metrics"
      painPoints={{
        heading: 'What inefficient routing is actually costing you',
        items: [
          'Drivers covering the same roads twice because no one reviewed the stop sequence',
          'Fuel bills climbing with no data to explain why or identify which routes are responsible',
          'Delivery time windows missed because routes weren\'t planned around them',
          'Dispatchers spending 90 minutes every morning manually sequencing runs',
          'Vehicles returning to depot half-empty while other vehicles are overloaded',
          'No visibility into whether optimization is working — or degrading over time',
        ],
      }}
      featuresHeading="Route optimization that works the way your operation does"
      featuresSubheading="Multi-constraint, real-time, and built for the complexity of real-world logistics."
      features={[
        {
          title: 'Multi-Constraint Route Optimization',
          description: 'Fleetbase sequences routes by solving for the full picture simultaneously — delivery time windows, vehicle weight and volume capacity, driver work-hour limits, depot start and end constraints, and customer priority levels. Not one factor at a time. All at once.',
          bullets: [
            'Time-window constrained routing with hard and soft window support',
            'Vehicle payload, volume, and refrigeration zone constraints',
            'Driver shift-length and break-time compliance built in',
          ],
          icon: Navigation,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-optimization.webp',
        },
        {
          title: 'Real-Time Dynamic Re-Routing',
          description: 'Routes don\'t survive first contact with the day. When a delivery is added, cancelled, or delayed — or when traffic blocks a critical road — Fleetbase recalculates the affected run automatically and pushes the updated route to the driver\'s Navigator app instantly.',
          bullets: [
            'Automatic re-optimization when orders are added or cancelled mid-run',
            'Live traffic integration with proactive route adjustment',
            'Driver app receives updated routes without interrupting navigation',
          ],
          icon: RefreshCw,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-order-route-editor.webp',
        },
        {
          title: 'Multi-Vehicle Fleet Coordination',
          description: 'Optimizing one route in isolation creates bottlenecks across your fleet. Fleetbase coordinates the entire fleet simultaneously — balancing workload across vehicles, eliminating zone overlap, and ensuring no driver finishes two hours early while another runs overtime.',
          bullets: [
            'Fleet-wide load balancing across all available vehicles',
            'Zone and territory-aware routing to eliminate inefficient overlaps',
            'Overtime risk flagging before routes are dispatched',
          ],
          icon: Truck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Delivery Time Window Management',
          description: 'Customer-promised delivery windows are constraints, not suggestions. Fleetbase builds routes that respect every committed window — and alerts dispatchers before a route is finalized if any window can\'t be met, so you can fix it before a customer is disappointed.',
          bullets: [
            'Hard and soft time window enforcement per order',
            'Pre-dispatch alerts when windows can\'t be met with current vehicle allocation',
            'Customer notification triggers when route plans confirm delivery ETAs',
          ],
          icon: Clock,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-scheduler.webp',
        },
        {
          title: 'Route Performance Analytics',
          description: 'Track planned vs. actual route execution to understand where optimization is working and where drivers are deviating. Identify recurring inefficiencies, flag problematic zones, and use real data to continuously improve your planning parameters.',
          bullets: [
            'Planned vs. actual route comparison per driver and zone',
            'Fuel consumption per route with variance from optimized plan',
            'Stop sequence adherence rate and deviation flagging',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Bulk Import & Planning Tools',
          description: 'Feed Fleetbase orders from your OMS via API, CSV import, or manual entry. The optimization engine handles fleet routing for any volume — from 10 stops to 10,000 — and presents a complete optimized plan for dispatcher review before dispatch.',
          bullets: [
            'REST API, CSV, and manual order ingestion for route planning',
            'Bulk plan review with one-click optimization trigger',
            'What-if scenario modelling for fleet sizing and zone planning',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-import.webp',
        },
      ]}
      capabilities={[
        { icon: MapPin, label: 'Multi-depot routing' },
        { icon: Bell, label: 'ETA breach alerting' },
        { icon: Shield, label: 'Compliance-aware scheduling' },
        { icon: FileCheck, label: 'Route plan exports' },
        { icon: Clock, label: 'Time window enforcement' },
        { icon: RefreshCw, label: 'Dynamic re-routing' },
        { icon: Truck, label: 'Fleet load balancing' },
        { icon: BarChart3, label: 'Fuel cost analytics' },
      ]}
      testimonial={{
        quote: "We reduced our daily driven distance by 22% in the first two weeks. What used to take our dispatcher 90 minutes every morning now takes 3 minutes. Fleetbase paid back its cost in fuel savings alone within the first month.",
        author: 'James K.',
        role: 'Fleet Operations Manager',
        company: 'DirectRoute Logistics',
      }}
      faqs={[
        {
          q: 'How fast does Fleetbase optimize a route?',
          a: 'Typical 20–50 stop routes optimize in under 30 seconds. Larger fleet plans of 200–500 stops across multiple vehicles typically complete in 2–4 minutes.',
        },
        {
          q: 'Can optimization account for vehicle-specific constraints like refrigerated zones?',
          a: 'Yes. Vehicle attributes including payload capacity, volume, temperature zones, and equipment type can all be defined and used as hard constraints in the optimization engine.',
        },
        {
          q: 'What happens when a new order is added after routes are dispatched?',
          a: "Fleetbase re-evaluates the affected route in real-time and updates the driver's Navigator app with the revised stop sequence — including re-optimized ETAs for all remaining stops.",
        },
        {
          q: 'Does Fleetbase integrate with our existing OMS for order import?',
          a: 'Yes. The REST API allows orders to flow directly from your OMS into Fleetbase for planning and dispatch. Webhooks return delivery events back to your system in real-time.',
        },
        {
          q: 'Can we see the difference between our current routes and the optimized routes before committing?',
          a: "Yes. The route planning interface shows the optimized plan with total distance, estimated duration, and fuel cost before you confirm. Dispatchers review and approve before routes are pushed to drivers.",
        },
      ]}
      ctaHeading="Cut fuel costs. Deliver more. Start today."
      ctaBody="Every day you plan routes manually is a day you're leaving fuel savings and delivery capacity on the table. Start your free trial and run your first optimized route in under 10 minutes."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
