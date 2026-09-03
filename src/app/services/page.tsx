import type { Metadata } from 'next';
import Link from 'next/link';
import {
 ArrowRight, Check, Calendar,
 Wrench, Code2, GraduationCap, Shield, Zap, Server,
 Navigation, ShoppingBag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/services' },
 title: 'Services',
 description: 'Fleetbase professional services: implementation, custom development, training and support. Expert help to deploy, scale and customise.',
 keywords: ['Fleetbase services', 'logistics platform implementation', 'custom development', 'support plans', 'professional services'],
 openGraph: {
 title: 'Services | Fleetbase',
 description: 'Expert implementation, custom development, training, and support for your Fleetbase logistics platform.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Services | Fleetbase`,
   description: `Expert implementation, custom development, training, and support for your Fleetbase logistics platform.`,
 },
};

// ─── Support Tiers ────────────────────────────────────────────────────────────
const SUPPORT_TIERS = [
 {
 name: 'Community',
 price: 'Free',
 sla: 'No SLA',
 colorClass: 'bg-green-500',
 description: 'Access our open-source community, documentation, and public forums.',
 features: [
 'Full documentation & guides',
 'Discord community access',
 'GitHub issue tracking',
 'Public forum support',
 ],
 notIncluded: ['Email support', 'SLA guarantee', 'Priority bug fixes'],
 cta: 'Join Discord',
 ctaHref: 'https://discord.com/invite/HnTqQ6zAVn',
 highlight: false,
 },
 {
 name: 'Auto Upgrades',
 price: '$200/mo',
 sla: 'No SLA',
 colorClass: 'bg-gray-400',
 description: 'Automated security patches and limited email support for self-hosted deployments.',
 features: [
 'All Community features',
 'Automatic security patches',
 'Limited email support',
 ],
 notIncluded: ['SLA guarantee', 'Priority bug fixes', 'Configuration assistance'],
 cta: 'Get Started',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Business',
 price: '$1,000/mo',
 sla: '72-hour SLA',
 colorClass: 'bg-blue-500',
 description: 'Email support with a 72-hour SLA, basic configuration help, and limited priority bug fixes.',
 features: [
 'All Community features',
 'Email support (72h SLA)',
 'Limited priority bug fixes',
 'Basic configuration assistance',
 'Automatic security patches',
 ],
 notIncluded: ['Technical troubleshooting', 'Private Discord channel'],
 cta: 'Get Started',
 ctaHref: '/contact/sales',
 highlight: true,
 },
 {
 name: 'Developer',
 price: '$3,500/mo',
 sla: '24-hour SLA',
 colorClass: 'bg-purple-500',
 description: 'Priority support with a 24-hour SLA, full technical troubleshooting, and a private Discord channel with the CTO.',
 features: [
 'All Business features',
 'Email + Private Discord + Weekly Phone',
 '24-hour SLA',
 'Priority bug fixes',
 'Full configuration assistance',
 'Full technical troubleshooting',
 'Private Discord with CTO',
 ],
 notIncluded: [],
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Fractional CTO',
 price: '$5,000/mo',
 sla: 'Dedicated',
 colorClass: 'bg-orange-500',
 description: 'A dedicated Fleetbase engineer embedded in your team — proactive monitoring, release management, and 2-hour weekly calls with the CTO.',
 features: [
 'Dedicated engineer',
 '2hr weekly calls with CTO',
 'Proactive monitoring',
 'Release management',
 'Strategic quarterly reviews',
 'PR reviews',
 'Custom roadmap collaboration',
 ],
 notIncluded: [],
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Enterprise+',
 price: 'Custom',
 sla: 'Full-time scalable',
 colorClass: 'bg-red-500',
 description: 'A scalable engineering team dedicated to your organisation — daily access, full roadmap collaboration, and enterprise-level oversight.',
 features: [
 'Scalable engineering team',
 'Daily support access',
 'Full roadmap collaboration',
 'Dedicated full-stack team',
 'Enterprise-level oversight',
 'Team expansion available',
 'Custom SLA',
 ],
 notIncluded: [],
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 },
];

// ─── Professional Services ────────────────────────────────────────────────────
// Primary services — lead with our core offerings: deploy, publish driver app,
// publish customer app, build custom code.
const PRIMARY_SERVICES = [
 {
 icon: Server,
 title: 'Self-Hosted Implementation',
 price: '$2,500 one-time',
 href: '/services/installation',
 description: 'We deploy Fleetbase on your own infrastructure — AWS, GCP, Azure, or bare metal. Includes CI/CD setup, configuration, custom branding, and a go-live handover session.',
 deliverables: [
 'Server deployment & configuration',
 'CI/CD pipeline setup',
 'Custom branding & white-labelling',
 'Environment hardening & SSL',
 'Go-live handover session',
 ],
 },
 {
 icon: ShoppingBag,
 title: 'Storefront App Publishing',
 price: '$2,500 one-time',
 href: '/services/storefront-publishing',
 description: 'White-label, build, configure, and submit a fully branded Storefront customer app on the App Store and Google Play — including payment gateway integration.',
 deliverables: [
 'Branded iOS + Android builds',
 'Custom logo, splash, icons & theme',
 'Payment gateway integration (Stripe, QPay, etc.)',
 'Push notification setup (APNs + FCM)',
 'App Store & Play Console submission',
 ],
 },
 {
 icon: Navigation,
 title: 'Navigator App Publishing',
 price: '$2,500 one-time',
 href: '/services/navigator-publishing',
 description: 'White-label, build, configure, and submit a fully branded Navigator driver app on the App Store and Google Play. iOS and Android in one engagement.',
 deliverables: [
 'Branded iOS + Android builds',
 'Custom logo, splash, icons & theme',
 'Push notification setup (APNs + FCM)',
 'App Store & Play Console submission',
 'Build pipeline + handover',
 ],
 },
 {
 icon: Code2,
 title: 'Custom Extension Development',
 price: 'Custom pricing',
 description: 'Our engineers build bespoke extensions, integrations, and workflows tailored to your operations — from custom dispatch logic to ERP/CRM connectors.',
 deliverables: [
 'Custom extension development',
 'ERP / CRM / WMS integrations',
 'Custom workflow automation',
 'Third-party API connectors',
 'Code review & documentation',
 ],
 },
];

// Additional services — specialised engagements scoped per project.
const ADDITIONAL_SERVICES = [
 {
 icon: Wrench,
 title: 'Data Migration',
 price: 'Custom pricing',
 description: 'Migrate from your legacy system to Fleetbase without data loss or operational downtime. We handle mapping, transformation, validation, and cutover.',
 deliverables: [
 'Legacy system data audit',
 'Data mapping & transformation',
 'Validation & reconciliation',
 'Zero-downtime cutover plan',
 'Post-migration support',
 ],
 },
 {
 icon: GraduationCap,
 title: 'Training & Onboarding',
 price: 'Custom pricing',
 description: 'Hands-on training sessions for your operations, dispatch, and IT teams — delivered remotely or on-site. Includes custom training materials.',
 deliverables: [
 'Role-based training sessions',
 'Custom training materials',
 'Admin & power user workshops',
 'Developer API training',
 'Recorded sessions for future staff',
 ],
 },
 {
 icon: Shield,
 title: 'Security & Compliance Review',
 price: 'Custom pricing',
 description: 'A dedicated security review of your Fleetbase deployment — covering access controls, data handling, audit logs, and compliance with industry standards.',
 deliverables: [
 'Security configuration audit',
 'IAM & RBAC review',
 'Data handling assessment',
 'Compliance gap analysis',
 'Remediation recommendations',
 ],
 },
 {
 icon: Zap,
 title: 'Performance Optimisation',
 price: 'Custom pricing',
 description: 'Tune your Fleetbase deployment for high-volume operations — database optimisation, caching strategies, API throughput, and infrastructure scaling.',
 deliverables: [
 'Performance baseline assessment',
 'Database query optimisation',
 'Caching layer configuration',
 'Infrastructure scaling plan',
 'Load testing & validation',
 ],
 },
];

type Service = {
 icon: React.ElementType;
 title: string;
 price: string;
 href?: string;
 description: string;
 deliverables: string[];
};

function ServiceCard({ service, highlight = false }: { service: Service; highlight?: boolean }) {
 return (
 <Card className={cn('flex flex-col', highlight && 'border-primary/30 shadow-sm')}>
 <CardHeader className="pb-3">
 <div className="flex items-center gap-3 mb-2">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
 <service.icon className="w-5 h-5 text-primary" />
 </div>
 <div className="min-w-0">
 <CardTitle className="text-sm leading-tight">{service.title}</CardTitle>
 <div className="text-xs font-semibold text-primary mt-0.5">{service.price}</div>
 </div>
 </div>
 <CardDescription className="text-xs leading-relaxed">{service.description}</CardDescription>
 </CardHeader>
 <CardContent className="flex-1">
 <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">Deliverables</div>
 <ul className="space-y-1.5">
 {service.deliverables.map((d) => (
 <li key={d} className="flex items-start gap-2 text-xs">
 <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
 <span>{d}</span>
 </li>
 ))}
 </ul>
 </CardContent>
 <CardFooter>
 {service.href ? (
 <Button className="w-full" size="sm" asChild>
 <Link href={service.href}>Explore {service.name} <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
 </Button>
 ) : (
 <Button className="w-full" size="sm" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Request a Quote</Link>
 </Button>
 )}
 </CardFooter>
 </Card>
 );
}

export default function ServicesPage() {
 return (
 <div className="flex flex-col">

 {/* Hero */}
 <section className="section-padding text-center">
 <div className="container mx-auto px-4 max-w-4xl">
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
 <span className="text-primary">●</span>
 <span>Services & Support</span>
 </div>
 <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
 Expert help at{' '}
 <span className="text-primary">every stage</span>
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 From initial deployment to enterprise-scale operations, Fleetbase&apos;s services team is here to help you get the most out of your logistics platform — faster.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">
 Talk to Our Team <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://discord.com/invite/HnTqQ6zAVn">Join Discord Community</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Cloud Providers */}
 <section className="py-10 border-y bg-muted/10">
 <div className="container mx-auto px-4 text-center">
 <p className="text-sm text-muted-foreground mb-5 font-medium">First-class deployment support on</p>
 <div className="flex flex-wrap items-center justify-center gap-3">
 {[
 { label: 'Amazon Web Services', abbr: 'AWS', className: 'text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30' },
 { label: 'Google Cloud', abbr: 'GCP', className: 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30' },
 { label: 'Microsoft Azure', abbr: 'Azure', className: 'text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/30' },
 { label: 'DigitalOcean', abbr: 'DO', className: 'text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30' },
 ].map(({ label, abbr, className }) => (
 <div key={label} className={cn('flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium', className)}>
 <span className="font-bold">{abbr}</span>
 <span className="text-muted-foreground hidden sm:inline">·</span>
 <span className="hidden sm:inline">{label}</span>
 </div>
 ))}
 </div>
 <p className="text-xs text-muted-foreground mt-4">
 Also supported: Hetzner, Linode, and any bare-metal or VPS server with Docker.
 </p>
 </div>
 </section>

 {/* Primary Services */}
 <section className="py-16 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Professional Services</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Our four core engagements — deploy Fleetbase, publish your customer app, publish your driver app, and build custom extensions tailored to your operation.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
 {PRIMARY_SERVICES.map((service) => (
 <ServiceCard key={service.title} service={service} highlight />
 ))}
 </div>
 </div>
 </section>

 {/* Additional Services */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-2xl font-bold mb-2">Additional Services</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
 Specialised engagements scoped per project — for teams that need help with specific operations beyond the core offerings above.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
 {ADDITIONAL_SERVICES.map((service) => (
 <ServiceCard key={service.title} service={service} />
 ))}
 </div>
 </div>
 </section>

 {/* Support Tiers */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Ongoing Support Plans</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Choose the level of ongoing support that matches your team&apos;s capacity and ambition. All plans are available for both Cloud and Self-Hosted customers.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
 {SUPPORT_TIERS.map((tier) => (
 <Card
 key={tier.name}
 className={cn('flex flex-col', tier.highlight && 'border-primary shadow-lg shadow-primary/10')}
 >
 <CardHeader className="pb-3">
 <div className="flex items-center gap-2 mb-1">
 <div className={cn('w-3 h-3 rounded-full flex-shrink-0', tier.colorClass)} />
 <CardTitle className="text-base">{tier.name}</CardTitle>
 {tier.highlight && (
 <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">Popular</span>
 )}
 </div>
 <div className="text-2xl font-bold">{tier.price}</div>
 <div className="text-xs text-muted-foreground">SLA: {tier.sla}</div>
 <CardDescription className="text-sm mt-1">{tier.description}</CardDescription>
 </CardHeader>
 <CardContent className="flex-1 space-y-1.5">
 {tier.features.map((f) => (
 <div key={f} className="flex items-start gap-2 text-sm">
 <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
 <span>{f}</span>
 </div>
 ))}
 {tier.notIncluded.map((f) => (
 <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground/50">
 <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center leading-none">—</span>
 <span>{f}</span>
 </div>
 ))}
 </CardContent>
 <CardFooter>
 <Button
 className="w-full"
 variant={tier.highlight ? 'default' : 'outline'}
 asChild
 >
 <Link href={tier.ctaHref}>{tier.cta}</Link>
 </Button>
 </CardFooter>
 </Card>
 ))}
 </div>
 <p className="text-center text-sm text-muted-foreground mt-8">
 Need a full comparison?{' '}
 <Link href="/pricing" className="text-primary underline underline-offset-4">View the full pricing page</Link>
 </p>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
 <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
 <h3 className="text-2xl font-bold mb-2">Not sure where to start?</h3>
 <p className="text-muted-foreground mb-6">
 Book a free 30-minute discovery call with our team. We&apos;ll understand your operations and recommend the right deployment, support tier, and services for your needs.
 </p>
 <div className="flex gap-3 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
 Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/pricing">View Pricing</Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 </div>
 );
}
