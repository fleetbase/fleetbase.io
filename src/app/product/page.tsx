import type { Metadata } from 'next';
import ProductDashboard from '@/components/sections/product-dashboard';
import ProductFeatures from '@/components/sections/product-features';
import ProductHero from '@/components/sections/product-hero';
import ProductLogs from '@/components/sections/product-logs';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/product' },
  title: 'Product Overview — The Logistics Platform',
  description: 'Discover what Fleetbase can do — real-time fleet tracking, order management, storefront, financial management, and a full developer API.',
  keywords: 'fleetbase product, logistics platform features, fleet management software, open source logistics',
  openGraph: {
    title: 'Product Overview | Fleetbase Logistics Platform',
    description: 'Discover what Fleetbase can do — real-time fleet tracking, order management, storefront, financial management, and a full developer API.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Overview | Fleetbase Logistics Platform',
    description: 'Discover what Fleetbase can do — real-time fleet tracking, order management, storefront, financial management, and a full developer API.',
  },
};
export default function ProductPage() {
 return (
 <>
 <ProductHero />
 <ProductDashboard />
 <ProductFeatures />
 <div className="relative">
 <div className="to-accent/50 bg-chart-1 absolute top-0 left-0 -z-3 hidden size-40 -translate-x-1/4 -translate-y-1/2 rounded-full will-change-transform lg:block" />
 <ProductLogs />
 </div>
 </>
 );
}
