import { CheckCircle2, X } from 'lucide-react';
import type { Metadata } from 'next';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Onfleet Alternatives: 7 Platforms Compared';
const DESCRIPTION =
  'Seven Onfleet alternatives compared on price, pricing model and scope — including what Onfleet actually costs and when it is still the right choice.';
const OG_IMAGE =
  '/og?title=Onfleet%20Alternatives%3A%207%20Platforms%20Compared&eyebrow=Compare&subtitle=What%20Onfleet%20costs%2C%20and%20seven%20alternatives%20with%20published%20prices.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'onfleet alternatives',
    'onfleet competitors',
    'onfleet pricing',
    'Fleetbase vs Onfleet',
    'open source Onfleet alternative',
    'cheaper than Onfleet',
    'Onfleet self hosted alternative',
  ],
  alternates: { canonical: 'https://fleetbase.io/compare/vs-onfleet' },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/compare/vs-onfleet',
    title: `${TITLE} | Fleetbase`,
    description: DESCRIPTION,
    siteName: 'Fleetbase',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Fleetbase`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const TOOLS = competitors(
  'onfleet',
  'tookan',
  'shipday',
  'detrack',
  'trackpod',
  'routific',
  'fleetbase',
);

type FeatureRow = {
  feature: string;
  fleetbase: string | boolean;
  onfleet: string | boolean;
};

// Retained from the original head-to-head page. This section is a large part of
// why the page ranked, so the roundup wraps it rather than replacing it — the
// growth plan is explicit that the existing comparison stays as one part of the
// page rather than the whole of it.
const COMPARISON: FeatureRow[] = [
  { feature: 'Open source', fleetbase: true, onfleet: false },
  { feature: 'Self-hosted deployment', fleetbase: true, onfleet: false },
  { feature: 'Cloud hosting', fleetbase: true, onfleet: true },
  {
    feature: 'Pricing model',
    fleetbase: '$29/mo + $5 per driver or vehicle',
    onfleet: 'Per completed task, from $619/mo',
  },
  { feature: 'Per-task fees', fleetbase: false, onfleet: true },
  { feature: 'Real-time GPS tracking', fleetbase: true, onfleet: true },
  { feature: 'Route optimization', fleetbase: true, onfleet: true },
  { feature: 'Automated dispatch', fleetbase: true, onfleet: true },
  {
    feature: 'Driver mobile app',
    fleetbase: 'Open source (Navigator)',
    onfleet: 'Proprietary',
  },
  { feature: 'Proof of delivery', fleetbase: true, onfleet: true },
  { feature: 'Customer notifications', fleetbase: true, onfleet: true },
  { feature: 'White-label branding', fleetbase: true, onfleet: 'Higher tiers' },
  { feature: 'Full REST API', fleetbase: true, onfleet: true },
  { feature: 'Webhooks', fleetbase: true, onfleet: true },
  { feature: 'Extensions marketplace', fleetbase: true, onfleet: false },
  { feature: 'Warehouse management', fleetbase: 'Pallet WMS included', onfleet: false },
  { feature: 'Storefront / online ordering', fleetbase: true, onfleet: false },
  { feature: 'Accounting / ledger', fleetbase: true, onfleet: false },
  {
    feature: 'Data ownership',
    fleetbase: 'Full — self-host or export',
    onfleet: 'Vendor-controlled',
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <CheckCircle2 className="mx-auto size-5 text-green-500" aria-label="Yes" />;
  if (value === false)
    return <X className="text-muted-foreground/50 mx-auto size-5" aria-label="No" />;
  return <span className="text-muted-foreground text-sm">{value}</span>;
}

export default function VsOnfleetPage() {
  return (
    <RoundupLayout
      eyebrow="Compare"
      title="Onfleet alternatives: 7 delivery platforms compared (2026)"
      standfirst="Onfleet is a genuinely good product, and for a well-funded delivery operation it is often the right one. People look for alternatives because of the shape of the bill: $619 a month before a single extra task, metered on completed deliveries, so every good month costs more. This guide covers what Onfleet actually costs and seven platforms worth comparing it against."
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Onfleet alternatives', href: '/compare/vs-onfleet' },
      ]}
      scopeNote="Last-mile delivery dispatch platforms: assigning work to drivers, optimising local routes, capturing proof of delivery and keeping customers informed. Onfleet's own strengths — dispatcher experience and customer tracking — are treated seriously here rather than dismissed, and the guide says plainly where it remains the better choice."
      criteria={[
        {
          label: 'Entry cost',
          detail:
            'What you pay in month one at a realistic volume. Onfleet’s floor is the single most common reason teams start looking elsewhere.',
        },
        {
          label: 'Pricing model',
          detail:
            'Per task, per driver, per order or flat. This determines whether growth increases your bill proportionally or not at all.',
        },
        {
          label: 'Dispatcher experience',
          detail:
            'The interface an operator lives in all day. Onfleet sets the benchmark here and most alternatives are honestly behind it.',
        },
        {
          label: 'Driver app',
          detail:
            'Native app quality, offline behaviour and whether you can brand it as your own.',
        },
        {
          label: 'Customer tracking',
          detail:
            'Live tracking links and notifications — the feature that most reduces "where is my order" calls.',
        },
        {
          label: 'Platform scope',
          detail:
            'Whether the tool stops at dispatch or also covers warehouse, commerce and accounting. Fewer systems means fewer integrations to maintain.',
        },
        {
          label: 'Self-hosting',
          detail:
            'Whether you can run it on your own infrastructure and read the source, which matters for data residency and long-term control.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'onfleet-pricing',
          heading: 'Onfleet pricing in 2026',
          body: (
            <>
              <p>
                Onfleet publishes three tiers, priced on completed pickup or
                delivery tasks with unlimited users on every plan:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>
                  <strong>Launch</strong> — $619 a month, 2,500 tasks included
                </li>
                <li>
                  <strong>Scale</strong> — $1,349 a month, 5,000 tasks included
                </li>
                <li>
                  <strong>Enterprise</strong> — from $3,099 a month, 10,000+
                  tasks
                </li>
                <li>
                  <strong>Courier Suite add-on</strong> — from $299 a month
                </li>
              </ul>
              <p>
                Per-task overage rates are not published on the pricing page;
                Onfleet directs customers to its billing documentation for
                those. Tasks are counted only when they reach “Completed”
                status, so cancelled jobs do not bill.
              </p>
              <p>
                Two things are worth knowing before you budget. First, unlimited
                users is genuinely generous — many competitors charge per seat,
                and if you have a large dispatch team that alone can close the
                gap. Second, because the meter runs on completed tasks, your
                cost rises in exactly the months your business is doing well. At
                the full 2,500 tasks, Launch works out around $0.25 a delivery;
                at 500 deliveries on the same plan it is $1.24 each.
              </p>
              <p>
                Note also that third-party sites frequently quote Onfleet at
                $599, $1,299 and $2,999. Those figures are out of date — the
                numbers above were read from Onfleet’s own pricing page on the
                date shown at the top of this guide.
              </p>
            </>
          ),
        },
        {
          id: 'when-onfleet-wins',
          heading: 'When Onfleet is still the right choice',
          body: (
            <>
              <p>
                If the dispatcher experience is your priority, Onfleet is the
                best product in this comparison and it is not particularly
                close. The interface is mature, the customer tracking pages are
                excellent, and the whole thing has been refined over many years
                of real use.
              </p>
              <p>
                It also makes straightforward financial sense in one specific
                shape: a large dispatch team relative to delivery volume.
                Unlimited users on a $619 plan beats per-seat pricing once you
                have a dozen people in the system, and the per-task meter stops
                mattering when your task count is modest.
              </p>
              <p>
                Where it stops making sense is the opposite shape — high volume
                with a small team. That is when a per-driver or unmetered model
                will cost a fraction as much for the same work.
              </p>
            </>
          ),
        },
        {
          id: 'fleetbase-vs-onfleet',
          heading: 'Fleetbase vs Onfleet, feature by feature',
          body: (
            <>
              <p>
                Full disclosure: we build Fleetbase. Here is the direct
                comparison, including the places Onfleet is ahead.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="py-3 pr-4 font-medium">Feature</th>
                      <th className="py-3 pr-4 text-center font-medium">
                        Fleetbase
                      </th>
                      <th className="py-3 text-center font-medium">Onfleet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row) => (
                      <tr key={row.feature} className="border-b">
                        <td className="py-3 pr-4">{row.feature}</td>
                        <td className="py-3 pr-4 text-center">
                          <Cell value={row.fleetbase} />
                        </td>
                        <td className="py-3 text-center">
                          <Cell value={row.onfleet} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6">
                The honest summary: Onfleet has the better dispatcher interface
                and a longer track record. Fleetbase covers more ground —
                warehouse, storefront and accounting alongside dispatch — does
                not meter deliveries, and can be self-hosted. Which matters more
                depends on whether your constraint is polish, or cost and
                control.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'How much does Onfleet cost in 2026?',
          answer:
            'Onfleet publishes three plans priced on completed tasks with unlimited users: Launch at $619 a month for 2,500 tasks, Scale at $1,349 a month for 5,000 tasks, and Enterprise from $3,099 a month for 10,000 or more. A Courier Suite add-on starts at $299 a month. Per-task overage rates are not shown on the pricing page. Many third-party sites still quote older figures of $599, $1,299 and $2,999.',
        },
        {
          question: 'What is the cheapest Onfleet alternative?',
          answer:
            'Shipday has a free tier covering 300 orders a month and paid plans from $19. Detrack is $29 per driver per month with no per-job fees. Fleetbase Cloud is $29 a month plus $5 per driver or vehicle with orders unmetered — about $79 a month for a ten-driver operation with every module included. Self-hosting Fleetbase removes the licence cost entirely.',
        },
        {
          question: 'Is there an open-source alternative to Onfleet?',
          answer:
            'Yes. Fleetbase is released under AGPL-3.0 and covers dispatch, route optimization, a driver app, proof of delivery and customer tracking, plus warehouse management, storefront and accounting. It can be self-hosted with full source access, which matters for data residency requirements and for teams that want to modify rather than configure.',
        },
        {
          question: 'Why do people switch away from Onfleet?',
          answer:
            'Almost always the pricing shape rather than the product. The entry plan is $619 a month before any extra tasks, and because billing is metered on completed deliveries, cost rises in proportion to success. Operations with high delivery volume relative to team size feel this most; teams with many dispatchers and modest volume often find Onfleet good value, because users are unlimited.',
        },
        {
          question: 'Does Onfleet offer a free plan?',
          answer:
            'No. Onfleet offers a trial but no free tier. Among the alternatives here, Shipday and Tookan both have free plans capped by volume, and Fleetbase can be self-hosted under AGPL-3.0 at no licence cost.',
        },
        {
          question: 'Can I self-host Onfleet?',
          answer:
            'No. Onfleet is a cloud-only, closed-source platform, so your delivery data lives on their infrastructure. If self-hosting is a requirement — for data residency, regulatory reasons, or long-term control — you need an open-source platform such as Fleetbase.',
        },
        {
          question: 'Which Onfleet alternative is best for high delivery volume?',
          answer:
            'Look for a model that is not metered on deliveries. Detrack charges per driver with no per-job fees, so volume does not change the bill. Fleetbase charges per driver or vehicle with orders free at any volume. Both avoid the situation where a record month produces a record invoice.',
        },
      ]}
      ctaHeading="Same job, without the per-task meter"
      ctaBody="Fleetbase is $29 a month plus $5 per driver or vehicle, with dispatch, routing, a driver app, WMS, storefront and accounting included — and deliveries never counted."
    />
  );
}
