import type { Metadata } from 'next';
import Link from 'next/link';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Best Last Mile Delivery Software in 2026';
const DESCRIPTION =
  'Eight last-mile delivery platforms compared on dispatch, driver app, proof of delivery, API and what each one actually charges you per.';
const OG_IMAGE =
  '/og?title=Best%20Last%20Mile%20Delivery%20Software%20in%202026&eyebrow=Guide&subtitle=Eight%20platforms%20compared%20on%20price%2C%20scope%20and%20what%20you%20are%20charged%20per.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'last mile delivery software',
    'best last mile delivery software',
    'last mile delivery management software',
    'last mile delivery platform',
    'delivery management software comparison',
  ],
  alternates: {
    canonical: 'https://fleetbase.io/guides/best-last-mile-delivery-software',
  },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/guides/best-last-mile-delivery-software',
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
  'bringg',
  'tookan',
  'route4me',
  'trackpod',
  'shipday',
  'detrack',
  'fleetbase',
);

export default function BestLastMileDeliverySoftwarePage() {
  return (
    <RoundupLayout
      eyebrow="Buyer’s guide"
      title="Best last mile delivery software in 2026: 8 tools compared"
      standfirst="Last-mile software is bought on features and regretted on billing units. One platform charges per completed task, the next per driver, the next per order — and the same operation can cost three times as much on one model as another. This guide compares eight platforms on what they do, and on what the meter actually runs on."
      breadcrumbs={[
        { label: 'Guides', href: '/guides' },
        {
          label: 'Best last mile delivery software',
          href: '/guides/best-last-mile-delivery-software',
        },
      ]}
      scopeNote="Last-mile delivery software: assigning work to drivers, getting them to the door efficiently, proving the delivery happened, and telling the customer where their order is. This is not a transportation management system, which plans freight between depots and carriers, and it is not telematics, which is about the vehicle rather than the delivery. If your problem is maintenance schedules or ELD compliance, you want a different category."
      criteria={[
        {
          label: 'Dispatch',
          detail:
            'Can you assign, reassign and batch work without fighting the interface? Does it handle both scheduled routes and on-demand jobs, or only one?',
        },
        {
          label: 'Driver app',
          detail:
            'Whether there is a real native app, whether it works offline when a driver loses signal in a stairwell, and whether you can put your own brand on it.',
        },
        {
          label: 'Proof of delivery',
          detail:
            'Signatures, photos, barcode scans and notes — and whether you can design the POD form to match what your customers actually require.',
        },
        {
          label: 'Customer tracking',
          detail:
            'Live tracking links and notifications. This is the feature that most reduces "where is my order" calls, and support load is a real cost.',
        },
        {
          label: 'API and integrations',
          detail:
            'A documented REST API and webhooks, so the platform fits your stack instead of becoming another place to re-key orders.',
        },
        {
          label: 'Pricing model',
          detail:
            'The most consequential column. Per-task pricing punishes volume; per-driver pricing punishes headcount; flat pricing punishes nobody but is rare. Match the model to the shape of your growth.',
        },
        {
          label: 'Self-hosting',
          detail:
            'Whether you can run it on your own infrastructure and read the source. This matters for data residency, for regulated sectors, and for anyone who does not want a vendor to own their operational history.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'choosing-by-fleet-size',
          heading: 'Choosing by fleet size',
          body: (
            <>
              <p>
                <strong>Under 10 drivers.</strong> Your enemy is the monthly
                floor. Onfleet’s entry plan is $619 a month before you complete
                a single extra task, which is more than the whole delivery
                operation is worth at this size. Shipday’s free tier and
                Detrack’s $29 per driver are the realistic starting points, and
                Fleetbase Cloud at $29 plus $5 a driver puts a ten-driver
                operation at $79 a month with every module switched on.
              </p>
              <p>
                <strong>10 to 100 drivers.</strong> This is where the billing
                unit starts to bite, and where the answer depends entirely on
                your ratio of drivers to deliveries. A fleet of 20 drivers doing
                20,000 deliveries a month is punished badly by per-task pricing
                and barely at all by per-driver pricing. Invert those numbers —
                80 drivers doing 4,000 deliveries — and the opposite is true.
                Work out your own ratio before you look at a single price page.
              </p>
              <p>
                <strong>100+ drivers.</strong> Per-seat and per-vehicle models
                get expensive fast, and this is the point at which self-hosting
                stops being ideological and starts being arithmetic. It is also
                where enterprise vendors like Bringg become plausible, provided
                you have the procurement patience for a sales-led cycle with no
                published price.
              </p>
            </>
          ),
        },
        {
          id: 'billing-models',
          heading: 'The four billing models, and who each one punishes',
          body: (
            <>
              <p>
                <strong>Per completed task.</strong> Onfleet and Tookan. Costs
                track delivery volume directly, so a good month costs more than
                a bad one. Predictable if your volume is flat; painful if you
                are growing or seasonal.
              </p>
              <p>
                <strong>Per driver or vehicle.</strong> Detrack, Track-POD,
                OptimoRoute. Volume is free, headcount is not. Excellent for
                high-density routes; poor for large contractor pools where most
                drivers work occasionally.
              </p>
              <p>
                <strong>Per order with a base fee.</strong> Routific, Shipday,
                Spoke. A low floor with a meter attached. Watch the overage
                rate, not the headline — Shipday includes only 300 orders on
                almost every plan.
              </p>
              <p>
                <strong>Quote only.</strong> Bringg. No published rates, no
                trial, no self-service. Sometimes the right answer at genuine
                enterprise scale, but you cannot budget without a sales cycle.
              </p>
            </>
          ),
        },
        {
          id: 'open-source-option',
          heading: 'When open source is the right call',
          body: (
            <>
              <p>
                Self-hosting is not free — you own the servers, the upgrades and
                the on-call. It is worth it in three situations. When data
                residency is a hard requirement, because a regulator or a
                government customer says the data cannot leave your
                infrastructure. When you need to modify the platform rather than
                configure it, because your operation does something the vendor’s
                model does not anticipate. And when per-delivery fees have grown
                into a number that would pay for an engineer.
              </p>
              <p>
                If none of those apply, managed hosting is almost always the
                better trade. Being able to self-host later is still worth
                something, though: it is the difference between choosing to stay
                with a vendor and having to.{' '}
                <Link href="/pricing" className="text-primary hover:underline">
                  Fleetbase’s pricing
                </Link>{' '}
                is the same either way.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'How much does last mile delivery software cost?',
          answer:
            'Entry pricing ranges from free to $619 a month. Shipday has a free tier and Detrack starts at $29 per driver per month, while Onfleet’s cheapest plan is $619 a month for 2,500 tasks and Bringg does not publish rates at all. The bigger factor is the billing unit: a business doing 5,000 deliveries a month with 12 drivers will pay very different amounts under per-task, per-driver and per-order pricing.',
        },
        {
          question: 'Is there free last mile delivery software?',
          answer:
            'Yes, in two forms. Shipday and Tookan both offer free tiers capped by volume — 300 orders and 100 tasks per month respectively. Separately, Fleetbase is open source under AGPL-3.0, so you can self-host the full platform at no licence cost, paying only for the infrastructure you run it on.',
        },
        {
          question: 'What is the difference between last mile software and a TMS?',
          answer:
            'A transportation management system plans freight movement between depots, carriers and modes, usually over long distances. Last-mile delivery software handles the final leg to the customer’s door: dispatching drivers, optimising local routes, capturing proof of delivery and keeping the recipient informed. Large operations often run both.',
        },
        {
          question: 'Can I use open-source last mile delivery software?',
          answer:
            'Yes. Fleetbase is released under AGPL-3.0 and can be self-hosted with the full source available, which matters for data residency requirements and for teams that need to modify rather than configure. The trade-off is that you own the infrastructure, upgrades and on-call. A commercial licence is available if you need to keep modifications proprietary.',
        },
        {
          question: 'Which last mile delivery software integrates with Shopify and WooCommerce?',
          answer:
            'Most platforms in this guide offer either a native integration or a REST API you can build against. Shipday and Tookan have direct Shopify integrations aimed at smaller merchants. Fleetbase provides a full REST API, webhooks and a Storefront module, so e-commerce orders can flow into dispatch without a middleware layer.',
        },
        {
          question: 'Does per-task pricing or per-driver pricing work out cheaper?',
          answer:
            'It depends entirely on your ratio of deliveries to drivers. Divide your monthly delivery count by your driver count. A high number — many deliveries per driver, typical of dense urban routes — favours per-driver pricing. A low number, typical of large contractor pools working occasionally, favours per-task pricing. Run your own figures through both models before shortlisting.',
        },
      ]}
      ctaHeading="Delivery volume shouldn’t change your bill"
      ctaBody="Fleetbase is $29 a month plus $5 per driver or vehicle, with every module included and orders free at any volume. Self-host it under AGPL-3.0 if you would rather own the whole stack."
    />
  );
}
