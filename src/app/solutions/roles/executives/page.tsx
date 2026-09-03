import type { Metadata } from 'next';
import { TrendingUp, DollarSign, BarChart3, Shield, Zap, Globe, Users, Bell, FileCheck, Settings } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/solutions/roles/executives' },
  title: 'Logistics Platform for Executives',
  description: 'Real-time visibility into logistics performance, cost efficiency and growth. Open-source infrastructure that scales without vendor lock-in.',
  keywords: ['logistics software for executives', 'logistics ROI platform', 'logistics cost reduction', 'supply chain executive dashboard', 'logistics business intelligence', 'fleet cost management'],
  openGraph: {
    title: 'Logistics Platform for Executives | Fleetbase',
    description: 'The logistics infrastructure that delivers ROI, not just functionality.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics Platform for Executives | Fleetbase`,
    description: `The logistics infrastructure that delivers ROI, not just functionality.`,
  },
};

export default function ExecutivesPage() {
  return (
    <SolutionPageLayout
      badge="For Executives & Business Leaders"
      title={<>Logistics Infrastructure That<br /><span className="text-gradient">Delivers ROI, Not Invoices.</span></>}
      description="Most logistics software is sold on features and delivers on functionality — but the business outcomes are an afterthought. Fleetbase is built differently: open-source infrastructure with no per-seat pricing, no vendor lock-in, and no data held hostage by a third party. For business leaders, that means lower cost of ownership, complete data sovereignty, and a platform that scales with your operation rather than taxing it."
      stats={[
        { value: '40%', label: 'Average operational cost reduction in year one' },
        { value: '0', label: 'Per-order and per-seat fees — at any volume' },
        { value: '8,000+', label: 'Active logistics operations worldwide' },
        { value: '10M+', label: 'Orders processed on Fleetbase globally' },
      ]}
      heroScreenshot="/images/screenshots/fleet-ops/fleet-ops-report-builder.webp"
      heroScreenshotAlt="Fleetbase executive dashboard — operational performance, cost analytics, and growth metrics"
      painPoints={{
        heading: 'What your current logistics platform is costing you beyond the subscription',
        items: [
          'Per-seat pricing that penalises growth — your costs scale with your headcount, not your value delivered',
          'Data locked in a vendor\'s cloud with no practical export path if you want to leave',
          'No visibility into what the platform is actually costing your operation to run vs. what it\'s delivering',
          'Vendor feature roadmap decides your capabilities — you wait quarters for functionality your operation needs now',
          'Security and compliance reviews blocked by a closed-source platform you can\'t inspect',
          'Commercial SaaS data sovereignty incompatible with regulated industry or government contract requirements',
        ],
      }}
      featuresHeading="Logistics infrastructure built for business outcomes"
      featuresSubheading="Lower cost, higher control, and the data sovereignty your business requires."
      features={[
        {
          title: 'Total Cost of Ownership Advantage',
          description: 'Fleetbase\'s pricing model is designed for scale — one cloud plan priced on the drivers and vehicles you actually operate, or self-hosted with no recurring subscription at all. Order volume never enters the calculation, so the busiest months cost you nothing extra in software. That\'s a structural cost advantage that compounds over time.',
          bullets: [
            'One cloud plan — no per-seat or per-order fees, and no tiers to outgrow',
            'Self-hosted option eliminates vendor subscription entirely',
            'Open-source licence means your development investment stays with you',
          ],
          icon: DollarSign,
          screenshot: '/images/screenshots/ledger/ledger-balance-sheet.webp',
        },
        {
          title: 'Executive Performance Dashboard',
          description: 'The operational and financial metrics that matter at leadership level — delivery performance, cost-per-order, fleet utilization, SLA adherence, and revenue by service line — presented in a single dashboard that gives you the picture you need without a briefing call.',
          bullets: [
            'High-level KPI dashboard configurable for board and leadership reporting',
            'Cost-per-delivery and operational margin analysis by service line',
            'Period-over-period performance comparison for growth tracking',
          ],
          icon: BarChart3,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-report-builder.webp',
        },
        {
          title: 'Data Sovereignty & Compliance Readiness',
          description: 'Your operational data is one of your most valuable business assets. Fleetbase\'s self-hosted deployment option means your data lives in your own infrastructure — not a vendor\'s cloud. Critical for regulated industries, government contracts, and organisations where data residency is a requirement.',
          bullets: [
            'Self-hosted deployment keeps all data within your own infrastructure',
            'No third-party vendor access to your operational or customer data',
            'Audit-ready data export for compliance, legal holds, and regulatory review',
          ],
          icon: Shield,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-settings.webp',
        },
        {
          title: 'Operational Scalability Without Re-Platforming',
          description: 'As your operation grows — more vehicles, more depots, more order types, more geographies — Fleetbase scales with you. No re-platforming when you cross a threshold. No commercial renegotiation when you add a depot. The same platform handles 10 vehicles and 10,000.',
          bullets: [
            'Horizontal scaling on cloud or self-hosted Kubernetes infrastructure',
            'Multi-depot and multi-region support built in from day one',
            'Extension system allows operational capability to grow without core platform changes',
          ],
          icon: Globe,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp',
        },
        {
          title: 'Vendor Independence & Strategic Control',
          description: 'Open-source licensing means Fleetbase can\'t hold your operation hostage. Your team can read, modify, and own the platform. You can contribute to the community, fork the codebase, or switch to a commercial licence — on your terms, not a vendor\'s renewal deadline.',
          bullets: [
            'Full source code access — read, inspect, and modify without restriction',
            'No vendor lock-in — data is exportable and infrastructure is portable',
            'Commercial licence available for proprietary modifications to the codebase',
          ],
          icon: Settings,
          screenshot: '/images/screenshots/fleet-ops/fleet-ops-extensions-menu.webp',
        },
        {
          title: 'ROI Reporting & Business Intelligence',
          description: 'Measure what the platform is delivering. Track operational cost reduction vs. baseline, SLA improvement, delivery volume growth, and revenue per vehicle over time. Present the business case for logistics investment with data that goes beyond operational metrics to financial outcomes.',
          bullets: [
            'Cost reduction tracking vs. pre-Fleetbase operational baseline',
            'Revenue per vehicle and fleet ROI calculation tools',
            'Exportable financial and operational reports for board presentations',
          ],
          icon: TrendingUp,
          screenshot: '/images/screenshots/ledger/ledger-dashboard.webp',
        },
      ]}
      capabilities={[
        { icon: Zap, label: 'Rapid deployment' },
        { icon: Users, label: 'Unlimited users' },
        { icon: Bell, label: 'Executive alerts' },
        { icon: FileCheck, label: 'Board-ready reports' },
        { icon: Globe, label: 'Multi-region support' },
        { icon: Shield, label: 'Data sovereignty' },
        { icon: BarChart3, label: 'ROI analytics' },
        { icon: DollarSign, label: 'No per-seat pricing' },
      ]}
      testimonial={{
        quote: "We evaluated five logistics platforms and Fleetbase was the only one that didn't charge us per driver. As we scaled from 40 to 120 drivers, our platform cost barely moved. The open-source model also means we're not held hostage at renewal time.",
        author: 'Diane O.',
        role: 'COO',
        company: 'Pulse Logistics Group',
      }}
      faqs={[
        {
          q: 'What does Fleetbase actually cost to run?',
          a: 'Cloud plans are flat-fee by operational scale — not per seat or per driver. Self-hosted deployments have no recurring platform fee. Either way, as you scale, your per-unit platform cost decreases.',
        },
        {
          q: 'What happens if we want to switch platforms or migrate our data?',
          a: 'All operational data is exportable via the API and in standard formats. Self-hosted deployments give you direct database access. There is no vendor-imposed data lock-in.',
        },
        {
          q: 'Can Fleetbase be deployed in our own cloud environment for data sovereignty?',
          a: 'Yes. Fleetbase is open source and designed for self-hosting on AWS, Azure, GCP, or on-premise infrastructure. No operational or customer data is sent to Fleetbase servers in a self-hosted deployment.',
        },
        {
          q: 'How does open source licensing work for commercial use?',
          a: 'Fleetbase is licensed under AGPL-3.0 for open-source use. A commercial licence is available for organisations that need to run proprietary modifications without open-source disclosure obligations.',
        },
        {
          q: 'What security certifications does Fleetbase have?',
          a: "As open-source software, Fleetbase's complete codebase is available for your security team to inspect and assess. For organisations requiring formal certifications on hosted infrastructure, cloud plans can be deployed in certified cloud environments.",
        },
      ]}
      ctaHeading="Lower cost. More control. Real business outcomes."
      ctaBody="The logistics platform that delivers ROI instead of just invoices. Start your free trial or talk to our team about an enterprise deployment that fits your requirements."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
