import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PRICING_VERIFIED_AT } from '@/lib/competitors';

const DESCRIPTION =
  'Honest buyer’s guides to delivery, routing and fleet software — every price read from the vendor’s own page, and dated.';
const OG_IMAGE =
  '/og?title=Logistics%20Software%20Buyer%E2%80%99s%20Guides&eyebrow=Guides&subtitle=Honest%20comparisons%20with%20real%2C%20dated%20pricing.';

export const metadata: Metadata = {
  title: 'Logistics Software Buyer’s Guides',
  description: DESCRIPTION,
  keywords: [
    'delivery software comparison',
    'logistics software buyers guide',
    'best delivery management software',
    'route optimization software comparison',
  ],
  alternates: { canonical: 'https://fleetbase.io/guides' },
  openGraph: {
    type: 'website',
    url: 'https://fleetbase.io/guides',
    title: 'Logistics Software Buyer’s Guides | Fleetbase',
    description: DESCRIPTION,
    siteName: 'Fleetbase',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Fleetbase buyer’s guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Software Buyer’s Guides | Fleetbase',
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const GUIDES = [
  {
    title: 'Best last mile delivery software in 2026',
    href: '/guides/best-last-mile-delivery-software',
    blurb:
      'Eight platforms compared on dispatch, driver app, proof of delivery and — the column that catches people out — what each one charges you per.',
    count: '8 tools',
  },
  {
    title: 'Best dispatch software in 2026',
    href: '/guides/best-dispatch-software',
    blurb:
      'Seven delivery and fleet dispatch platforms compared — plus which of the four things called “dispatch software” you are actually shopping for.',
    count: '7 tools',
  },
  {
    title: 'Best route optimization software in 2026',
    href: '/guides/best-route-optimization-software',
    blurb:
      'Seven platforms compared on multi-stop routing, time windows, capacity and live re-routing, plus when an API beats buying seats.',
    count: '7 tools',
  },
];

export default function GuidesPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding border-b">
        <div className="container max-w-4xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Logistics software buyer’s guides
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Comparisons written the way we would want to read them: every tool
            described fairly, every price taken from the vendor’s own pricing
            page and dated, and the cases where a competitor is the better
            choice said out loud.
          </p>
          <p className="text-muted-foreground mt-4 text-sm">
            Fleetbase appears in these guides as one option among several. We
            think that is the only way a comparison is worth reading.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid gap-5">
            {GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-card hover:border-primary/40 rounded-lg border p-6 transition-colors"
              >
                <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  {guide.count}
                </span>
                <h2 className="mt-2 flex items-center gap-2 text-xl font-semibold">
                  {guide.title}
                  <ArrowRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {guide.blurb}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-muted-foreground mt-10 text-sm">
            Pricing across these guides was last verified on{' '}
            {new Intl.DateTimeFormat('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            }).format(new Date(`${PRICING_VERIFIED_AT}T00:00:00Z`))}
            . Vendors change their pricing without notice — if you spot something
            out of date,{' '}
            <Link href="/contact/sales" className="text-primary hover:underline">
              tell us
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
