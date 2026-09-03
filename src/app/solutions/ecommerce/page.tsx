import type { Metadata } from 'next';
import { ShoppingCart, Package, Zap, BarChart3, RefreshCw, Bell, MapPin, Code, Clock, Store } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/ecommerce' },
  title: 'E-commerce & Retail Delivery Management Software',
  description: 'Open-source delivery management for e-commerce and retail. Same-day and next-day delivery, a headless API, live tracking and returns logistics.',
  keywords: ['ecommerce delivery software', 'retail logistics platform', 'same-day delivery', 'last mile ecommerce', 'headless delivery API', 'returns management'],
  openGraph: {
    title: 'E-commerce & Retail Delivery Software | Fleetbase',
    description: 'Give your customers the delivery experience they expect — and keep the margins that make it worth it.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `E-commerce & Retail Delivery Software | Fleetbase`,
    description: `Give your customers the delivery experience they expect — and keep the margins that make it worth it.`,
  },
};

export default function EcommercePage() {
  return (
    <SolutionPageLayout
      breadcrumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'E-commerce & Retail', href: '/solutions/ecommerce' },
      ]}
      badge="E-commerce & Retail"
      title={<>Own Your Last Mile.<br /><span className="text-gradient">Stop Paying Carrier Fees.</span></>}
      description="Carrier dependency is costing your e-commerce business more than you think — in fees, in brand experience, and in customer loyalty. Fleetbase gives you a complete owned-delivery platform: headless API, real-time customer tracking, same-day dispatch, and returns management — built to plug into your existing stack."
      stats={[
        { value: '2-day', label: 'To same-day delivery capability' },
        { value: '45%', label: 'Reduction in carrier costs for own-fleet operators' },
        { value: '3.2×', label: 'Higher repeat purchase rate with live tracking' },
        { value: '98%', label: 'API uptime SLA' },
      ]}
      heroScreenshot="/images/screenshots/storefront/storefront-dashboard.webp"
      heroScreenshotAlt="Fleetbase e-commerce delivery operations dashboard"
      painPoints={{
        heading: 'The delivery gap that\'s costing you customers',
        items: [
          'Carrier fees eating into margins with no control over service quality',
          'Customers getting generic tracking pages that erode your brand identity',
          'No visibility into where orders are once they leave your warehouse',
          'Returns processes that are slow, manual, and costly to manage',
          'Same-day delivery promises that are impossible to keep with 3PL carriers',
          'Disconnected systems requiring manual data entry between order and dispatch',
        ],
      }}
      featuresHeading="Your delivery operation. Your brand. Your data."
      featuresSubheading="The delivery infrastructure layer that plugs directly into your e-commerce stack."
      features={[
        {
          title: 'Headless Delivery API',
          description: 'Fleetbase\'s REST API integrates directly into your Shopify, WooCommerce, Magento, or custom storefront. Orders flow from checkout to dispatch automatically — no manual data entry, no middleware hacks.',
          bullets: [
            'REST API with full order lifecycle management',
            'Native Shopify, WooCommerce, and Magento connectors',
            'Webhooks for every delivery event to update your OMS in real-time',
          ],
          icon: Code,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'Branded Customer Tracking',
          description: 'Replace the generic carrier tracking page with your own branded experience. Customers see your logo, your colours, and your messaging — while tracking their order\'s real-time position on a live map.',
          bullets: [
            'Fully brandable tracking page — your domain, your design',
            'Live driver position and accurate ETA',
            'Delivery confirmation with photo proof of delivery',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Same-Day Dispatch Engine',
          description: 'Offer same-day delivery as a competitive differentiator, not a logistics headache. Fleetbase\'s automated dispatch assigns orders to the nearest available driver the moment they\'re ready to ship — with zero manual coordination.',
          bullets: [
            'Automatic order-to-driver assignment based on proximity and capacity',
            'Configurable cutoff times per delivery zone',
            'Real-time capacity management to avoid over-promising',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Delivery Notifications That Convert',
          description: 'Proactive delivery communication isn\'t just good service — it drives repeat purchases. Customers who track a delivery are 3.2× more likely to reorder. Every Fleetbase notification is an opportunity to bring them back.',
          bullets: [
            'Automated SMS, email, and push at every order milestone',
            'Promotional message injection at delivery confirmation',
            'NPS and review request triggers post-delivery',
          ],
          icon: Bell,
          screenshot: '/images/screenshots/storefront/storefront-push-notifications.webp',
        },
        {
          title: 'Returns & Reverse Logistics',
          description: 'Returns are the silent margin killer. Fleetbase automates reverse dispatch — scheduling pick-ups, tracking inbound returns, and updating your WMS when goods are received — so your team spends zero time on manual returns coordination.',
          bullets: [
            'Customer-initiated return request portal',
            'Automated pick-up scheduling and driver assignment',
            'Real-time inbound tracking updated to your WMS via webhook',
          ],
          icon: RefreshCw,
          screenshot: '/images/screenshots/storefront/storefront-orders-overview.webp',
        },
        {
          title: 'Fulfilment & Inventory Sync',
          description: 'Connect Fleetbase to your warehouse or Pallet inventory module for end-to-end fulfilment visibility. Know when stock is picked, packed, and dispatched — and catch fulfilment bottlenecks before they become delays.',
          bullets: [
            'Pick-and-pack workflow integration with Pallet WMS',
            'Inventory reservation at order placement',
            'Fulfilment SLA tracking and breach alerting',
          ],
          icon: Package,
          screenshot: '/images/screenshots/storefront/storefront-products-overview.webp',
        },
      ]}
      capabilities={[
        { icon: Clock, label: 'Delivery time slots' },
        { icon: Store, label: 'Multi-store support' },
        { icon: ShoppingCart, label: 'Storefront module' },
        { icon: BarChart3, label: 'Revenue analytics' },
        { icon: RefreshCw, label: 'Returns management' },
        { icon: MapPin, label: 'Zone-based pricing' },
        { icon: Bell, label: 'Post-delivery NPS' },
        { icon: Code, label: 'Full REST API' },
      ]}
      testimonial={{
        quote: 'We built our own same-day delivery proposition on Fleetbase in three weeks. We\'ve since removed two third-party carriers from our stack and cut delivery costs by 40%.',
        author: 'Sarah L.',
        role: 'Head of Logistics',
        company: 'UrbanStore',
      }}
      faqs={[
        {
          q: 'Does Fleetbase work with Shopify, WooCommerce, and other platforms?',
          a: 'Yes. The REST API integrates with any e-commerce platform. Native connectors are available for Shopify and WooCommerce, and webhook events keep your OMS updated in real-time.',
        },
        {
          q: 'Can I offer both carrier and own-fleet delivery from one system?',
          a: 'Yes. Fleetbase manages own-fleet dispatch natively and can receive webhook events from carrier tracking systems, giving you a single operations view regardless of delivery method.',
        },
        {
          q: 'How do I give customers a branded tracking experience?',
          a: 'The customer tracking portal is fully customizable with your brand assets and can be served from your own domain. Notification templates are also fully editable.',
        },
        {
          q: 'Can Fleetbase handle peak sale periods like Black Friday?',
          a: 'Yes. Fleetbase scales horizontally. Cloud plans handle spikes automatically. Self-hosted deployments can be right-sized for peak capacity.',
        },
        {
          q: 'Does it support international or cross-border deliveries?',
          a: 'Fleetbase supports multi-currency, multi-language, and multi-region configurations. International carrier integration is available via the API.',
        },
      ]}
      ctaHeading="Take ownership of your delivery experience"
      ctaBody="Stop letting carriers define your brand's most important touchpoint. Build your own delivery operation on Fleetbase and keep the margin, the data, and the customer relationship."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
