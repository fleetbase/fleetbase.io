import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// The homepage holds almost all of the site's authority — 620 referring pages
// against 21 for the next best — but linked to the compare pages only through
// the nav dropdown, and to the role and use-case pages not at all. These are
// body-copy links so that authority actually flows to the pages built for
// buyer intent.

const COMPARISONS = [
  {
    label: 'Fleetbase vs Onfleet',
    href: '/compare/vs-onfleet',
    blurb: 'No per-task pricing, and you can host it yourself.',
  },
  {
    label: 'Fleetbase vs Tookan',
    href: '/compare/vs-tookan',
    blurb: 'No agent-based pricing, and the source is yours.',
  },
  {
    label: 'Fleetbase vs Route4Me',
    href: '/compare/vs-route4me',
    blurb: 'Routing plus dispatch, WMS and storefront in one platform.',
  },
];

const BY_ROLE = [
  { label: 'Fleet managers', href: '/solutions/roles/fleet-managers' },
  { label: 'Operations managers', href: '/solutions/roles/operations-managers' },
  { label: 'Warehouse managers', href: '/solutions/roles/warehouse-managers' },
  { label: 'Executives', href: '/solutions/roles/executives' },
  { label: 'Developers', href: '/solutions/roles/developers' },
  { label: 'Customer success', href: '/solutions/roles/customer-success' },
];

const BY_USE_CASE = [
  { label: 'Last-mile delivery', href: '/solutions/use-cases/last-mile-delivery' },
  { label: 'Route optimization', href: '/solutions/use-cases/route-optimization' },
  { label: 'Fleet management', href: '/solutions/use-cases/fleet-management' },
  { label: 'Order management', href: '/solutions/use-cases/order-management' },
  { label: 'Analytics & reporting', href: '/solutions/use-cases/analytics' },
  { label: 'API & integrations', href: '/solutions/use-cases/integrations' },
];

function LinkList({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
        {heading}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-primary text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SwitchingCallout() {
  return (
    <section className="section-padding border-t">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Already paying for a delivery or fleet tool?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            See how Fleetbase compares on price, ownership and what you actually
            get — then find the pages written for your team.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {COMPARISONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-card hover:border-primary/40 flex flex-col rounded-lg border p-6 transition-colors"
            >
              <span className="flex items-center gap-2 font-medium">
                {item.label}
                <ArrowRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.blurb}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <LinkList heading="By role" links={BY_ROLE} />
          <LinkList heading="By use case" links={BY_USE_CASE} />
          <div>
            <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
              Still deciding?
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every comparison is written honestly — including where the other
              tool is the better fit.
            </p>
            <Link
              href="/compare"
              className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              See all comparisons
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
