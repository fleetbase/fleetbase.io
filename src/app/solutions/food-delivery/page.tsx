import type { Metadata } from 'next';
import { Utensils, MapPin, Zap, Star, Smartphone, BarChart3, Clock, Bell, Users, ShoppingCart } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/food-delivery' },
  title: 'Food & Grocery Delivery Management Software',
  description: 'On-demand food and grocery delivery with real-time dispatch, live customer tracking and automated notifications. Built for speed and scale.',
  keywords: ['food delivery software', 'grocery delivery platform', 'on-demand delivery management', 'restaurant delivery dispatch', 'last mile food delivery'],
  openGraph: {
    title: 'Food & Grocery Delivery Software | Fleetbase',
    description: 'Deliver faster, reduce failed orders, and keep customers coming back with Fleetbase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Food & Grocery Delivery Software | Fleetbase`,
    description: `Deliver faster, reduce failed orders, and keep customers coming back with Fleetbase.`,
  },
};

export default function FoodDeliveryPage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Food & Grocery Delivery', href: '/solutions/food-delivery' },
      ]}
      badge="Food & Grocery Delivery"
      title={<>Deliver Faster.<br /><span className="text-gradient">Keep Customers Coming Back.</span></>}
      description="Every minute a hot order sits unassigned kills your rating. Fleetbase powers on-demand food and grocery delivery with intelligent auto-dispatch, real-time driver tracking, live customer notifications, and the analytics to keep every order — and every margin — on track."
      stats={[
        { value: '8 min', label: 'Average dispatch time reduction' },
        { value: '35%', label: 'Fewer failed first-attempt deliveries' },
        { value: '4.8★', label: 'Avg. customer satisfaction uplift' },
        { value: '40%', label: 'Drop in inbound support calls' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
      heroScreenshotAlt="Fleetbase live dispatch board for food delivery operations"
      painPoints={{
        heading: 'The problems quietly killing your margins',
        items: [
          'Drivers going dark mid-shift with no visibility into their location',
          'Customers flooding support with "where is my order?" calls',
          'Manual dispatch creating dangerous bottlenecks during peak dinner hours',
          'Failed deliveries costing $17+ each in re-attempts, refunds, and reputation',
          'Missed time windows leading to negative reviews that compound over time',
          'Expanding to new zones requires rebuilding your tech stack from scratch',
        ],
      }}
      featuresHeading="Built for delivery speed. Designed for repeat customers."
      featuresSubheading="From dispatch to doorstep, every part of your operation in one platform."
      features={[
        {
          title: 'Real-Time Order & Driver Tracking',
          description: 'Every active order and driver is live on a map. Dispatchers see driver positions, order statuses, and ETAs simultaneously. The moment an order is dispatched, customers receive a live tracking link — no app download needed.',
          bullets: [
            'Live driver positions updating every 30 seconds',
            'Automated ETA recalculation as traffic conditions change',
            'Colour-coded order status for instant dispatcher awareness',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp',
        },
        {
          title: 'Automated Smart Dispatch',
          description: 'Stop manually matching orders to drivers. Fleetbase automatically assigns incoming orders to the nearest available driver based on live location, delivery zone, and current workload. Process hundreds of orders per hour without adding headcount.',
          bullets: [
            'Proximity-based auto-assignment with configurable rules',
            'Zone-based driver pools to prevent cross-territory conflicts',
            'Surge mode — dynamic re-assignment when demand spikes',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Customer Notification Engine',
          description: 'Proactive updates at every milestone — confirmed, preparing, picked up, en route, delivered. Customers who can track their order are 4× less likely to call support and 2× more likely to reorder.',
          bullets: [
            'SMS, push, and email notifications per order lifecycle stage',
            'Branded tracking page with live driver position',
            'Configurable messaging templates in any language',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/storefront/storefront-push-notifications.webp',
        },
        {
          title: 'Driver Performance & Ratings',
          description: 'Know exactly which drivers are delivering excellence and which are dragging your rating down. Track on-time rate, average delivery time, and customer scores per driver — and act on the data before it becomes a review problem.',
          bullets: [
            'Per-driver on-time rate, rating score, and delivery history',
            'Automated alerts when a driver\'s metrics fall below threshold',
            'Leaderboards to motivate top performers',
          ],
          icon: Star,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
        },
        {
          title: 'Zone & Profitability Analytics',
          description: 'Understand which delivery zones are most profitable, which time slots drive the most volume, and where your SLAs are breaking. Stop expanding blindly — grow the markets that actually make money.',
          bullets: [
            'Zone-level revenue, cost, and margin breakdowns',
            'Peak hour analysis to right-size your driver supply',
            'SLA breach heatmaps to identify operational weak spots',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Storefront — Native Order Management',
          description: 'Fleetbase Storefront connects your product catalogue, checkout, and delivery dispatch in one system. Orders flow directly from customer purchase to driver assignment — with zero manual data entry and a branded customer experience.',
          bullets: [
            'Headless storefront API for custom apps and websites',
            'Direct integration with Fleetbase dispatch — no middleware',
            'Customer accounts, order history, and reorder functionality',
          ],
          icon: ShoppingCart,
          screenshot: '/images/screenshots/storefront/storefront-dashboard.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Time-window scheduling' },
        { icon: Users, label: 'Driver pools by zone' },
        { icon: Utensils, label: 'Food truck support' },
        { icon: Smartphone, label: 'Driver mobile app' },
        { icon: MapPin, label: 'Multi-city operations' },
        { icon: Bell, label: 'Webhook events' },
        { icon: BarChart3, label: 'Custom dashboards' },
        { icon: Star, label: 'Customer ratings' },
      ]}
      testimonial={{
        quote: 'We went from 45-minute average dispatch times to under 8 minutes after switching to Fleetbase. Customer satisfaction jumped from 3.9 to 4.8 stars within two months.',
        author: 'Priya M.',
        role: 'COO',
        company: 'QuickBite Delivery',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle high order volumes during peak hours?',
          a: 'Yes. The automated dispatch engine processes incoming orders in real-time and the platform scales horizontally. Operators handling thousands of concurrent orders during dinner peaks rely on Fleetbase without degradation.',
        },
        {
          q: 'Can customers track their orders live?',
          a: 'Every order generates a shareable live tracking link showing the customer the driver\'s real-time position and ETA. No app download required on the customer side.',
        },
        {
          q: 'Does it integrate with our restaurant POS or ordering platform?',
          a: 'Fleetbase has a REST API and webhooks that connect to any POS or ordering platform. The native Storefront module provides a complete ordering layer if you want everything in one system.',
        },
        {
          q: 'How does Fleetbase handle failed deliveries?',
          a: 'Drivers mark orders as failed with a reason code and photo evidence in the Navigator app. The system triggers configurable follow-up workflows — re-dispatch, customer notification, or manager alert.',
        },
        {
          q: 'Can I run multiple brands or virtual restaurants from one account?',
          a: 'Yes. Fleetbase supports multi-store and multi-brand configurations under a single account, each with their own menus, zones, and driver pools.',
        },
      ]}
      ctaHeading="Ready to dominate your delivery market?"
      ctaBody="Join food and grocery delivery operators running faster, more profitable operations on Fleetbase. Your first 7 days are on us."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
