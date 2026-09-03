import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Heart, Code2, Users, BookOpen, Handshake, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/company' },
 title: 'Company',
 description:
 'The open-source logistics platform built to democratise logistics technology. Our mission, team, open-source commitment and how to get involved.',
 openGraph: {
 title: 'Company | Fleetbase',
 description: 'Open-source logistics infrastructure built to democratize logistics technology.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Company | Fleetbase`,
   description: `Open-source logistics infrastructure built to democratize logistics technology.`,
 },
};

const companyLinks = [
 {
 href: '/company/about',
 icon: Heart,
 title: 'About Us',
 description:
 'Our story, mission, and the principles that guide how we build Fleetbase. We believe logistics technology should be open, accessible, and owned by the people who use it.',
 cta: 'Our story',
 },
 {
 href: '/company/open-source',
 icon: Code2,
 title: 'Open Source Mission',
 description:
 'Fleetbase is fully open-source under AGPL-3.0. Understand why we chose open source, what it means for your deployment, and how you can contribute to the project.',
 cta: 'Our open-source commitment',
 },
 {
 href: '/partners',
 icon: Handshake,
 title: 'Partners',
 description:
 'Our global network of integration partners, solution providers, and implementation specialists who help businesses deploy and extend Fleetbase.',
 cta: 'Explore the partner network',
 },
 {
 href: '/customers',
 icon: Globe,
 title: 'Customer Stories',
 description:
 'See how logistics businesses around the world — from regional couriers to global freight networks — use Fleetbase to run their operations.',
 cta: 'Read customer stories',
 },
 {
 href: '/community',
 icon: Users,
 title: 'Community',
 description:
 'Join thousands of logistics operators, developers, and contributors in the Fleetbase community on Discord, GitHub, and our developer forums.',
 cta: 'Join the community',
 },
 {
 href: '/licensing',
 icon: BookOpen,
 title: 'Licensing',
 description:
 'Understand the difference between AGPL open-source and commercial licensing, and choose the right option for your deployment and business model.',
 cta: 'Understand licensing',
 },
 {
 href: '/company/investors',
 icon: LineChart,
 title: 'Investors',
 description:
 'Bootstrapped, profitable, and built for the long term. For investors and strategic partners who want to understand the opportunity, our model, and what we look for in long-term partners.',
 cta: 'Open a conversation',
 },
];

const stats = [
 { value: '500+', label: 'Companies using Fleetbase' },
 { value: '10M+', label: 'Orders processed' },
 { value: '40+', label: 'Countries' },
 { value: '100%', label: 'Open source' },
];

export default function CompanyPage() {
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl text-center">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 About Fleetbase
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 Logistics technology should be{' '}
 <span className="text-primary">open and accessible</span> to everyone.
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Fleetbase is the open-source logistics and fleet management platform built to give every
 business — regardless of size or budget — the same operational capabilities as the world&apos;s
 largest logistics companies.
 </p>
 <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="/company/about">
 Our story <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Talk to us</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="border-y bg-muted/20 py-12">
 <div className="container">
 <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
 {stats.map((stat) => (
 <div key={stat.label} className="text-center">
 <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
 <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Company Links Grid */}
 <section className="py-16 md:py-24">
 <div className="container">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
 Everything about Fleetbase
 </h2>
 <p className="mt-3 text-lg text-muted-foreground">
 Learn about who we are, what we stand for, and how to get involved.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
 {companyLinks.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
 >
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <item.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
 <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
 {item.description}
 </p>
 <div className="mt-4 flex items-center text-sm font-medium text-primary">
 {item.cta}
 <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Mission Statement */}
 <section className="border-t py-16 md:py-20">
 <div className="container">
 <div className="mx-auto max-w-3xl text-center">
 <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
 Our mission
 </h2>
 <blockquote className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
 &ldquo;To democratize logistics technology by building open-source infrastructure that
 gives every business the tools to operate with the efficiency and intelligence of the
 world&apos;s best logistics companies — without vendor lock-in, without prohibitive
 costs, and without compromise.&rdquo;
 </blockquote>
 <div className="mt-8">
 <Button asChild>
 <Link href="/company/about">
 Read our full story <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
