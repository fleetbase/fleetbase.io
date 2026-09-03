'use client';
import { CheckCircle2,XCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const problems = [
 'Manual dispatch and spreadsheet-based planning',
 'No real-time visibility into fleet or order status',
 'Per-seat pricing that punishes growth',
 'Vendor lock-in with no API access or data ownership',
];

const solutions = [
 'Automated dispatch with intelligent route optimization',
 'Live GPS tracking, ETAs, and driver status in real time',
 'Usage-based pricing — scale without cost penalties',
 'Open-source with full REST API and self-hosting option',
];

export default function ProblemSolution() {
 return (
 <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
 <div className="container">
 <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
 {/* Left: Problem */}
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
 The Problem
 </div>
 <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
 Managing logistics is getting harder.{' '}
 <span className="text-muted-foreground font-normal">
 Your software shouldn&apos;t make it worse.
 </span>
 </h2>
 <p className="text-muted-foreground mb-8 leading-relaxed">
 Most logistics platforms were built a decade ago on rigid, monolithic architecture. They&apos;re expensive, inflexible, and designed to keep you dependent — not to help you grow.
 </p>
 <ul className="space-y-3">
 {problems.map((problem) => (
 <li key={problem} className="flex items-start gap-3">
 <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
 <span className="text-muted-foreground text-sm">{problem}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Right: Solution */}
 <div className="bg-card border rounded-xl p-8">
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-primary mb-6">
 The Fleetbase Way
 </div>
 <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
 Built for the way modern logistics actually works.
 </h2>
 <p className="text-muted-foreground mb-8 leading-relaxed">
 Fleetbase is modular, open-source, and designed to flex around your operations — not the other way around. Every feature is built to give you control, visibility, and the ability to scale without limits.
 </p>
 <ul className="space-y-3 mb-8">
 {solutions.map((solution) => (
 <li key={solution} className="flex items-start gap-3">
 <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
 <span className="text-sm font-medium">{solution}</span>
 </li>
 ))}
 </ul>
 <Button asChild>
 <Link
 href="https://console.fleetbase.io/onboard"
 target="_blank"
 rel="noopener noreferrer nofollow"
 data-cta-id="start_free_trial"
 data-cta-location="problem_solution"
 data-cta-variant="primary"
 >
 Start Free Trial
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>
 );
}
