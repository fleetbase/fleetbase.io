import Link from 'next/link';

import { FAQSchema } from '@/components/seo/json-ld';
import RelatedPages from '@/components/seo/related-pages';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { type Competitor, PRICING_VERIFIED_AT } from '@/lib/competitors';

export type RoundupFaq = { question: string; answer: string };

export type RoundupSection = {
  id: string;
  heading: string;
  body: React.ReactNode;
};

export type RoundupProps = {
  eyebrow: string;
  title: string;
  standfirst: string;
  breadcrumbs: BreadcrumbItem[];
  /** Scope statement. Ambiguous category terms rank for the wrong intent
   *  without one, so every roundup says what it is and is not about. */
  scopeNote: string;
  criteria: { label: string; detail: string }[];
  tools: Competitor[];
  /** Extra prose sections rendered after the per-tool breakdown. */
  sections?: RoundupSection[];
  faqs: RoundupFaq[];
  ctaHeading: string;
  ctaBody: string;
};

function formatUpdated(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}

function slugToAnchor(slug: string) {
  return `tool-${slug}`;
}

export default function RoundupLayout({
  eyebrow,
  title,
  standfirst,
  breadcrumbs,
  scopeNote,
  criteria,
  tools,
  sections = [],
  faqs,
  ctaHeading,
  ctaBody,
}: RoundupProps) {
  const tocItems = [
    { id: 'how-we-compared', label: 'How we compared' },
    { id: 'comparison', label: 'The comparison table' },
    ...tools.map((t) => ({ id: slugToAnchor(t.slug), label: t.name })),
    ...sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: 'faq', label: 'Frequently asked questions' },
  ];

  return (
    <div className="flex flex-col">
      <FAQSchema faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />

      <section className="section-padding border-b">
        <div className="container max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-primary mt-6 text-sm font-medium tracking-wide uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            {standfirst}
          </p>
          <p className="text-muted-foreground mt-6 text-sm">
            Last updated {formatUpdated(PRICING_VERIFIED_AT)}. Every price below
            was read from the vendor’s own pricing page on that date. Where a
            vendor publishes no pricing, we say so rather than guess.
          </p>
        </div>
      </section>

      <section className="section-padding border-b">
        <div className="container max-w-4xl">
          <div className="bg-muted/40 rounded-lg border p-6">
            <h2 className="text-sm font-medium tracking-wide uppercase">
              What this guide covers
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {scopeNote}
            </p>
          </div>

          <nav aria-label="On this page" className="mt-10">
            <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wide uppercase">
              On this page
            </h2>
            <ol className="grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-primary text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section id="how-we-compared" className="section-padding border-b scroll-mt-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">How we compared</h2>
          <dl className="mt-8 space-y-5">
            {criteria.map((c) => (
              <div key={c.label} className="border-b pb-5 last:border-b-0">
                <dt className="font-medium">{c.label}</dt>
                <dd className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {c.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="comparison" className="section-padding border-b scroll-mt-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight">
            The comparison table
          </h2>
          <p className="text-muted-foreground mt-3">
            The column that catches most buyers out is not the price — it is what
            the price is charged <em>per</em>.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-medium">Tool</th>
                  <th className="py-3 pr-4 font-medium">What it is</th>
                  <th className="py-3 pr-4 font-medium">Charged per</th>
                  <th className="py-3 pr-4 font-medium">Published pricing</th>
                  <th className="py-3 font-medium">Self-hostable</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((t) => (
                  <tr key={t.slug} className="border-b align-top">
                    <td className="py-4 pr-4 font-medium">
                      <a href={`#${slugToAnchor(t.slug)}`} className="hover:text-primary">
                        {t.name}
                      </a>
                    </td>
                    <td className="text-muted-foreground py-4 pr-4">{t.category}</td>
                    <td className="text-muted-foreground py-4 pr-4">{t.billingUnit}</td>
                    <td className="text-muted-foreground py-4 pr-4">
                      {t.pricingPublic ? 'Yes' : 'No — quote only'}
                    </td>
                    <td className="text-muted-foreground py-4">
                      {t.slug === 'fleetbase' ? 'Yes (AGPL-3.0)' : 'No'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {tools.map((tool) => (
        <section
          key={tool.slug}
          id={slugToAnchor(tool.slug)}
          className="section-padding border-b scroll-mt-24"
        >
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">{tool.name}</h2>
            <p className="text-muted-foreground mt-2 text-sm">{tool.category}</p>

            <p className="mt-6 leading-relaxed">
              <span className="font-medium">Best for: </span>
              <span className="text-muted-foreground">{tool.bestFor}</span>
            </p>

            <div className="bg-muted/40 mt-6 rounded-lg border p-5">
              <h3 className="text-sm font-medium tracking-wide uppercase">
                Pricing
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {tool.pricing}
              </p>
              <a
                href={tool.source}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary mt-3 inline-block text-xs hover:underline"
              >
                Source
              </a>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 font-medium">Strengths</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {tool.strengths.map((s) => (
                    <li key={s} className="leading-relaxed">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Limits</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {tool.limits.map((l) => (
                    <li key={l} className="leading-relaxed">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="section-padding border-b scroll-mt-24"
        >
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">
              {section.heading}
            </h2>
            <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              {section.body}
            </div>
          </div>
        </section>
      ))}

      <section id="faq" className="section-padding border-b scroll-mt-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b py-5 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.question}
                  <span className="text-muted-foreground shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages heading="Related" />

      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {ctaHeading}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl leading-relaxed">
            {ctaBody}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link
                href="https://console.fleetbase.io/onboard"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Try Fleetbase free
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
