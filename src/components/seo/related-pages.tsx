'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { relatedPagesFor } from '@/lib/related-pages';

/**
 * Renders the cross-links defined for the current route.
 *
 * It looks itself up by pathname rather than taking props, so a page opts in by
 * dropping `<RelatedPages />` into its markup and the pairings stay in one file
 * instead of being threaded through thirty page components. Renders nothing for
 * a route with no entry, so it is safe to place in a shared layout.
 */
export default function RelatedPages({
  heading = 'Related',
  className,
}: {
  heading?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const links = relatedPagesFor(pathname);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className={className ?? 'section-padding border-t'}>
      <div className="container">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          {heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-card hover:border-primary/40 flex flex-col rounded-lg border p-5 transition-colors"
            >
              <span className="flex items-center gap-2 font-medium">
                {link.label}
                <ArrowRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {link.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
