import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getGitHubStars } from '@/lib/github-stars';

export default async function Hero() {
  const stars = await getGitHubStars();

  return (
    <header className="section-padding relative overflow-hidden">
      <div className="container relative flex flex-col items-center gap-6 text-center">
        {/* Badge */}
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="bg-muted rounded-full px-3 py-1 font-medium">Open Source</span>
          <Link
            href="https://github.com/fleetbase/fleetbase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 transition-opacity hover:opacity-80"
            data-cta-id="star_github"
            data-cta-location="hero"
            data-cta-variant="tertiary"
          >
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            {stars} on GitHub
          </Link>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
          Your Fleet. Your Data.{' '}
          <span className="text-gradient">Your Platform.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg leading-snug text-foreground/80 md:text-xl">
          Fleet management, e-commerce fulfillment, warehouse operations, and accounting — in one
          open-source platform. Never a per-delivery fee, no vendor lock-in. Self-host or use our cloud.
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link
              href="https://console.fleetbase.io/onboard"
              target="_blank"
              rel="noopener noreferrer"
              data-cta-id="start_free_trial"
              data-cta-location="hero"
              data-cta-variant="primary"
            >
              Start Free Trial
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="/pricing"
              data-cta-id="view_pricing"
              data-cta-location="hero"
              data-cta-variant="secondary"
            >
              View Pricing
            </Link>
          </Button>
        </div>

        {/* Trust signal */}
        <p className="text-sm text-muted-foreground">
          Free 7-day trial · Free to self-host under AGPL
        </p>

        {/* Hero screenshot */}
        <div className="relative mt-4 w-full max-w-6xl">
          <div className="relative aspect-[8/5] overflow-hidden rounded-xl border shadow-2xl ring-1 ring-foreground/5">
            <Image
              src="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
              alt="Fleetbase console showing a multi-waypoint Fleet-Ops order with optimized route, driver assignment, and live status timeline"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-contain object-top"
              priority
            />
          </div>
          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-chart-1/[0.14] blur-[120px]" />
        <div className="absolute top-1/4 -right-24 h-[550px] w-[550px] rounded-full bg-chart-3/[0.10] blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-[450px] w-[450px] rounded-full bg-chart-2/[0.09] blur-3xl" />
      </div>
    </header>
  );
}
