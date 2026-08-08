'use client';

import { Check, Cloud, Server, Wrench, X } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const deploymentOptions = [
 {
 icon: Cloud,
 name: 'Fleetbase Cloud',
 type: 'cloud' as const,
 description: 'Fully managed platform with automatic updates and enterprise-grade reliability',
 price: '$29/mo + $5 per driver or vehicle',
 cta: {
 text: 'Try Fleetbase Cloud',
 href: 'https://console.fleetbase.io/onboard',
 variant: 'default' as const,
 },
 features: {
 included: [
 'Automatic scaling & load balancing',
 'Managed database & backups',
 '99.9% uptime SLA',
 'Global CDN & edge locations',
 'Automatic security updates',
 'Email & chat support',
 'SSL certificates included',
 'Monitoring & analytics dashboard',
 ],
 excluded: [
 'Custom infrastructure control',
 'On-premise deployment',
 'Source code modifications',
 ],
 },
 pros: [
 'Zero infrastructure management',
 'Fastest time to production',
 'Predictable monthly costs',
 'Enterprise-grade security',
 ],
 highlight: true,
 },
 {
 icon: Server,
 name: 'Self-Hosted',
 type: 'self-hosted' as const,
 description: 'Deploy on your own infrastructure with complete control and customization',
 price: '$2,500 one-time implementation',
 cta: {
 text: 'Get Started',
 href: 'https://tally.so/r/mVbv2M',
 variant: 'outline' as const,
 },
 features: {
 included: [
 'Full source code access',
 'Deploy anywhere (AWS, Azure, GCP, on-prem)',
 'Complete data sovereignty',
 'Custom licensing options',
 'No vendor lock-in',
 'Unlimited customization',
 'Community support',
 'Open-source transparency',
 ],
 excluded: [
 'Managed infrastructure',
 'Automatic updates',
 'Dedicated support team',
 ],
 },
 pros: [
 'Maximum control & flexibility',
 'No recurring platform fees',
 'Complete data ownership',
 'Customize everything',
 ],
 highlight: false,
 },
 {
 icon: Wrench,
 name: 'Professional Services',
 type: 'enterprise' as const,
 description: 'Expert implementation, custom development, and dedicated support for enterprises',
 price: 'Custom pricing',
 cta: {
 text: 'Book a Call',
 href: 'https://cal.com/shivthakker/enquiry',
 variant: 'outline' as const,
 },
 features: {
 included: [
 'Custom feature development',
 'White-label solutions',
 'Dedicated support team',
 'Training & onboarding',
 'Architecture consulting',
 'Priority bug fixes',
 'SLA guarantees',
 'Migration assistance',
 ],
 excluded: [
 'Self-service deployment',
 'Standard pricing tiers',
 ],
 },
 pros: [
 'Tailored to your needs',
 'Expert guidance & support',
 'Faster enterprise adoption',
 'Reduced implementation risk',
 ],
 highlight: false,
 },
];

export default function DeploymentOptions() {
 return (
 <section className="section-padding relative container space-y-15 md:space-y-20">
 <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
 <h2 className="text-5xl leading-none tracking-tight text-balance md:text-6xl">
 Deploy <span className="text-gradient">Your Way</span>
 </h2>
 <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
 Choose the deployment option that fits your needs—from fully managed cloud to self-hosted infrastructure, with professional services available for every stage.
 </p>
 </div>

 {/* Desktop Layout */}
 <div className="hidden lg:block">
 <div className="grid grid-cols-3 gap-6">
 {deploymentOptions.map((option) => (
 <DeploymentCard key={option.name} option={option} />
 ))}
 </div>
 </div>

 {/* Mobile Layout */}
 <div className="lg:hidden space-y-6">
 {deploymentOptions.map((option) => (
 <DeploymentCard key={option.name} option={option} />
 ))}
 </div>

 {/* Bottom CTA */}
 <div className="mt-12 lg:mt-16 text-center">
 <p className="text-muted-foreground mb-4">
 Need help choosing the right deployment option?
 </p>
 <Button variant="outline" asChild>
 <Link
 href="https://cal.com/shivthakker/enquiry"
 target="_blank"
 rel="noopener noreferrer"
 data-cta-id="book_demo"
 data-cta-location="deployment_options"
 data-cta-variant="secondary"
 >
 Schedule a Consultation
 </Link>
 </Button>
 </div>
 </section>
 );
}

const DeploymentCard = ({
 option,
}: {
 option: typeof deploymentOptions[0];
}) => {
 const IconComponent = option.icon;
 const isCloud = option.type === 'cloud';

 return (
 <div className="relative h-full">
 {isCloud && (
 <span className="absolute -right-1 -top-1 z-30 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
 Recommended
 </span>
 )}
 <Card
 className={cn(
 'relative h-full overflow-hidden shadow-none dark:bg-[#07070e]',
 isCloud &&
 'before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] before:mask-b-from-40% before:mask-b-to-80%',
 isCloud &&
 'after:bg-card after:absolute after:inset-[1px] after:rounded-[calc(var(--radius)-1px)] dark:after:bg-[#07070e]',
 )}
 >
 <div className="relative z-10 flex h-full flex-col">
 <CardHeader className="gap-4">
 <div className="flex items-start gap-3">
 <div className="flex items-center gap-3">
 <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
 <IconComponent className="size-6 text-primary" />
 </div>
 <CardTitle className="text-2xl tracking-tight md:text-3xl">
 {option.name}
 </CardTitle>
 </div>
 </div>
 <CardDescription className="text-base leading-snug">
 {option.description}
 </CardDescription>
 <div className="font-medium tracking-tight">
 <span className="text-2xl">{option.price}</span>
 </div>
 </CardHeader>

 <CardContent className="flex-1 space-y-6">
 {/* Features Included */}
 <div>
 <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
 What&apos;s Included
 </h4>
 <ul className="space-y-2">
 {option.features.included.map((feature) => (
 <li key={feature} className="flex items-start gap-2">
 <div className="flex size-5 items-center justify-center rounded-full bg-secondary shrink-0 mt-0.5">
 <Check className="size-3" />
 </div>
 <span className="text-sm leading-snug">{feature}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Features Excluded */}
 {option.features.excluded.length > 0 && (
 <div>
 <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
 Not Included
 </h4>
 <ul className="space-y-2">
 {option.features.excluded.map((feature) => (
 <li key={feature} className="flex items-start gap-2">
 <div className="flex size-5 items-center justify-center rounded-full bg-muted shrink-0 mt-0.5">
 <X className="size-3" />
 </div>
 <span className="text-sm leading-snug text-muted-foreground">
 {feature}
 </span>
 </li>
 ))}
 </ul>
 </div>
 )}

 {/* Pros */}
 <div>
 <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
 Highlights
 </h4>
 <ul className="space-y-1.5">
 {option.pros.map((pro) => (
 <li key={pro} className="flex items-center gap-2">
 <span className="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">+</span>
 <span className="text-sm leading-snug">{pro}</span>
 </li>
 ))}
 </ul>
 </div>
 </CardContent>

 <CardFooter className="pt-6">
 <Button
 variant={option.cta.variant}
 className="h-12 w-full"
 asChild
 >
 <Link
 href={option.cta.href}
 {...(option.cta.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
 >
 {option.cta.text}
 </Link>
 </Button>
 </CardFooter>
 </div>
 </Card>
 </div>
 );
};
