import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-chart-1/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Get Started Today
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Stop Paying Per Driver.{' '}
              <span className="text-gradient">Start Owning Your Stack.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Join 8,000+ logistics operations running on Fleetbase. Open source, no per-seat fees, free to self-host. Start with a 7-day free trial.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="gap-2" asChild>
                <Link
                  href="https://console.fleetbase.io/onboard"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  data-cta-id="start_free_trial"
                  data-cta-location="final_cta"
                  data-cta-variant="primary"
                >
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="/pricing"
                  data-cta-id="view_pricing"
                  data-cta-location="final_cta"
                  data-cta-variant="secondary"
                >
                  View Pricing
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="https://cal.com/shivthakker/enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="book_demo"
                  data-cta-location="final_cta"
                  data-cta-variant="secondary"
                >
                  <Calendar className="h-4 w-4" /> Book a Demo
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Full platform access · Cancel anytime · Self-host under AGPL-3.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
