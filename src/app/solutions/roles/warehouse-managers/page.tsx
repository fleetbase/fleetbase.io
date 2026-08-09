import type { Metadata } from 'next';
import { Package, BarChart3, Zap, ClipboardList, Truck, Smartphone, MapPin, Bell, FileCheck, Settings } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/warehouse-managers' },
  title: 'Warehouse Management Software | Fleetbase',
  description: 'Connect your warehouse to your delivery operation with Fleetbase Pallet WMS. Manage inventory, pick-and-pack workflows, and outbound dispatch from one integrated platform.',
  keywords: ['warehouse management software', 'WMS for logistics', 'inventory management platform', 'pick and pack software', 'warehouse to delivery integration', 'pallet WMS'],
  openGraph: {
    title: 'Warehouse Management Software | Fleetbase',
    description: 'From pick to doorstep — warehouse and delivery, unified in one platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Warehouse Management Software | Fleetbase`,
    description: `From pick to doorstep — warehouse and delivery, unified in one platform.`,
  },
};

export default function WarehouseManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Warehouse Managers"
      title={<>From Pick to Doorstep.<br /><span className="text-gradient">No Handoff Gaps.</span></>}
      description="The biggest inefficiencies in fulfilment don't happen inside the warehouse or inside the delivery operation — they happen at the handoff between them. Orders that are picked but not dispatched. Inventory that's reserved but not tracked. Deliveries that leave without correct manifests. Fleetbase's Pallet WMS connects directly to Fleet-Ops, eliminating the gap between warehouse operations and outbound delivery — so fulfilment runs as one connected process."
      stats={[
        { value: '35%', label: 'Reduction in pick-to-dispatch time' },
        { value: '99.2%', label: 'Inventory accuracy with real-time tracking' },
        { value: '50%', label: 'Fewer fulfillment errors vs. disconnected systems' },
        { value: '2×', label: 'Faster order dispatch after Pallet WMS integration' },
      ]}
      heroScreenshot="/images/screenshots/storefront/storefront-dashboard.webp"
      heroScreenshotAlt="Fleetbase Pallet warehouse management — inventory overview, pick list, and outbound dispatch queue"
      painPoints={{
        heading: 'The fulfilment gaps that cause delays and errors',
        items: [
          'Orders picked and packed but stuck in a staging area because dispatch wasn\'t notified',
          'Inventory counts that don\'t match what\'s actually on the shelves — discovered at the worst time',
          'No visibility into whether an order is in the pick queue, staged for collection, or already dispatched',
          'Drivers arriving to collect before the order is ready — or ready orders waiting hours for driver assignment',
          'Manifests and shipping labels generated separately from the picking process, creating mismatches',
          'Returns received at the warehouse with no connection back to the original delivery record',
        ],
      }}
      featuresHeading="Warehouse and delivery operations, finally connected"
      featuresSubheading="One platform from receiving to final-mile delivery — no gaps, no manual handoffs."
      features={[
        {
          title: 'Inventory & Stock Management',
          description: 'Track inventory in real time across locations, zones, and product variants. Every inbound receipt, outbound pick, and stock adjustment is logged automatically — maintaining an accurate count that your operations and commercial teams can trust.',
          bullets: [
            'Real-time inventory levels by location, zone, and SKU',
            'Inbound receiving workflows with discrepancy flagging',
            'Low-stock alerts and reorder point automation',
          ],
          icon: Package,
          screenshot: '/images/screenshots/storefront/storefront-products-overview.webp',
        },
        {
          title: 'Pick-and-Pack Workflow Management',
          description: 'Generate pick lists optimized for your warehouse layout. Pickers follow digital pick lists on mobile devices, confirming each item scanned. Packing instructions and shipping label generation happen at the pack station — ready for dispatch without a separate step.',
          bullets: [
            'Zone-optimized pick list generation per order batch',
            'Mobile pick confirmation with barcode/QR scan support',
            'Pack station workflow with label generation at point of packing',
          ],
          icon: ClipboardList,
          screenshot: '/images/screenshots/storefront/storefront-orders-overview.webp',
        },
        {
          title: 'Seamless Dispatch Integration with Fleet-Ops',
          description: 'When an order is packed and ready, Fleetbase automatically creates the dispatch order in Fleet-Ops — triggering driver assignment and route optimization without any manual intervention. The gap between warehouse and delivery is closed by design.',
          bullets: [
            'Automatic dispatch order creation on pack confirmation',
            'Driver assignment and route optimization triggered at pack-out',
            'Real-time dispatch status visible to warehouse team',
          ],
          icon: Zap,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
        },
        {
          title: 'Outbound Staging & Manifest Management',
          description: 'Manage the staging area where packed orders wait for driver pickup. Track which orders are staged, which driver is collecting, and when the vehicle departed. Generate consolidated manifests per driver run — with total order count, weight, and customer reference.',
          bullets: [
            'Staging bay assignment per driver and vehicle run',
            'Consolidated manifest generation with order details and weights',
            'Driver sign-off on collection with order count confirmation',
          ],
          icon: Truck,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orders-import.webp',
        },
        {
          title: 'Returns & Reverse Logistics',
          description: 'When a delivery is returned — refused at door, failed delivery, or customer return — Fleetbase links the inbound return to the original order record. Warehouse receives the return with the right context, updates inventory correctly, and closes the loop on the delivery cycle.',
          bullets: [
            'Return order creation linked to original delivery record',
            'Inbound receiving workflow for returned items with condition logging',
            'Inventory update on return receipt with restock or quarantine routing',
          ],
          icon: MapPin,
          screenshot: '/images/screenshots/storefront/storefront-orders-overview.webp',
        },
        {
          title: 'Warehouse Performance Analytics',
          description: 'Track the KPIs that determine whether your warehouse is running efficiently: pick accuracy, orders per hour per picker, staging dwell time, dispatch delay rate, and return processing time. Identify bottlenecks and measure the impact of process improvements.',
          bullets: [
            'Pick accuracy rate and error tracking by picker and product zone',
            'Orders per hour and fulfilment SLA adherence by shift',
            'Staging dwell time and dispatch delay analysis',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
      ]}
      capabilities={[
        { icon: Bell, label: 'Low-stock alerts' },
        { icon: Smartphone, label: 'Mobile pick workflows' },
        { icon: Settings, label: 'Multi-location support' },
        { icon: FileCheck, label: 'Digital manifests' },
        { icon: Package, label: 'Inventory reservations' },
        { icon: Zap, label: 'Auto-dispatch on pack-out' },
        { icon: BarChart3, label: 'Fulfilment analytics' },
        { icon: ClipboardList, label: 'Batch pick lists' },
      ]}
      testimonial={{
        quote: "The moment we connected Pallet to Fleet-Ops, we stopped losing time at the handoff. Orders are staged and assigned to drivers before they even arrive. We've reduced pick-to-door time by over a third and our dispatch errors have nearly disappeared.",
        author: 'Sam W.',
        role: 'Warehouse Operations Manager',
        company: 'Swift Fulfilment Co.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase\'s WMS work with barcode scanners?',
          a: 'Yes. The Pallet WMS supports barcode and QR code scanning for pick confirmation, inbound receiving, and inventory audits — using mobile devices or dedicated scanning hardware.',
        },
        {
          q: 'How does warehouse-to-dispatch integration work in practice?',
          a: 'When a pack station confirms an order is complete, Fleetbase automatically creates the dispatch order in Fleet-Ops, triggers driver assignment, and adds the order to the appropriate route — no manual intervention required.',
        },
        {
          q: 'Can we manage multiple warehouse locations from one account?',
          a: 'Yes. Pallet supports multi-location inventory management with separate stock levels, pick zones, and dispatch queues per location — all accessible from a single account.',
        },
        {
          q: 'How are inventory counts maintained accurately?',
          a: 'Every inbound receipt, pick, pack, and return is logged in real-time, keeping inventory counts current. Cycle count workflows and discrepancy flagging help maintain accuracy between full stock audits.',
        },
        {
          q: 'Can the WMS integrate with our existing ERP or accounting system?',
          a: 'Yes. The REST API allows inventory movements, order records, and fulfilment data to be pushed to external ERP, accounting, or procurement systems in real-time via webhooks.',
        },
      ]}
      ctaHeading="Close the gap between your warehouse and your delivery operation"
      ctaBody="From pick list to proof of delivery — one connected platform with no manual handoffs. Start your free trial and see how Pallet WMS + Fleet-Ops transforms your fulfilment cycle."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
