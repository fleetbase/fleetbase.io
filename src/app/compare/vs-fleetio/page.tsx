import type { Metadata } from 'next';
import Link from 'next/link';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Fleetio Alternatives: 7 Options for Fleet Teams';
const DESCRIPTION =
  'Seven Fleetio alternatives compared on maintenance depth, per-vehicle cost and whether they also handle dispatch — with real published pricing.';
const OG_IMAGE =
  '/og?title=Fleetio%20Alternatives%3A%207%20Options%20Compared&eyebrow=Compare&subtitle=Real%20per-vehicle%20pricing%2C%20and%20who%20also%20does%20dispatch.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'fleetio alternatives',
    'fleetio competitors',
    'fleetio pricing',
    'fleet maintenance software alternatives',
    'open source fleet maintenance software',
  ],
  alternates: { canonical: 'https://fleetbase.io/compare/vs-fleetio' },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/compare/vs-fleetio',
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
  'fleetio',
  'simplyfleet',
  'whiparound',
  'autosist',
  'samsara',
  'motive',
  'fleetbase',
);

export default function VsFleetioPage() {
  return (
    <RoundupLayout
      eyebrow="Compare"
      title="Fleetio alternatives: 7 options for fleet teams (2026)"
      standfirst="Fleetio is very good at what it does, which is keeping vehicles serviced, compliant and on the road. People go looking for alternatives for one of two reasons: the per-vehicle cost has grown past what the maintenance module is worth to them, or they have realised they also need dispatch — and Fleetio does not do dispatch."
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Fleetio alternatives', href: '/compare/vs-fleetio' },
      ]}
      scopeNote="Fleet maintenance and operations software: service scheduling, work orders, inspections, parts and compliance. Several tools here add telematics hardware or delivery dispatch, and the guide is explicit about which does what — because the most common expensive mistake in this category is buying a maintenance tool when the actual problem was dispatch, or vice versa."
      criteria={[
        {
          label: 'Maintenance depth',
          detail:
            'Preventive schedules, work orders, service history, parts inventory. This is Fleetio’s home ground and the bar it sets is high.',
        },
        {
          label: 'Inspections',
          detail:
            'Driver inspection forms, defect reporting, and whether a failed inspection automatically raises a work order.',
        },
        {
          label: 'Dispatch and delivery',
          detail:
            'Whether the tool can assign jobs to drivers and track them to a customer. Most maintenance tools cannot, which is the single biggest reason teams outgrow them.',
        },
        {
          label: 'Telematics',
          detail:
            'Whether the vendor supplies its own hardware, integrates with third-party devices, or ignores telematics entirely.',
        },
        {
          label: 'Cost per vehicle',
          detail:
            'Published rates range from $2 to about $33 per vehicle per month across this list — a sixteen-fold spread for products that sound similar in a feature grid.',
        },
        {
          label: 'Contract terms',
          detail:
            'The number nobody puts in the comparison table. A three-year commitment at $30 a vehicle is a very different purchase from a monthly rolling plan at the same rate.',
        },
        {
          label: 'Data ownership',
          detail:
            'Whether you can export your service history and leave, and whether you can host the system yourself.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'why-people-leave-fleetio',
          heading: 'Why teams look for a Fleetio alternative',
          body: (
            <>
              <p>
                <strong>Cost as the fleet grows.</strong> Fleetio’s published
                rates start at $4 per vehicle per month on Essential, but those
                headline figures assume a small fleet band — the pricing page is
                explicit that rates vary by fleet size, contract term and
                payment term. Teams that started at 20 vehicles and grew to 200
                often find the renewal conversation is not a simple multiple.
              </p>
              <p>
                <strong>It does not do dispatch.</strong> This is the big one,
                and it is not a criticism of Fleetio — it is a deliberate scope
                decision. If your operation has moved from maintaining vehicles
                to actually delivering things with them, no amount of
                configuration turns a maintenance platform into a dispatch
                platform. You will end up buying a second system, at which point
                the question becomes whether one platform could do both.
              </p>
              <p>
                <strong>Cheaper does exist.</strong> Simply Fleet publishes $2
                per vehicle per month and is free below five vehicles. If you
                genuinely only need service records and reminders, you can pay
                considerably less. Note that Simply Fleet’s pricing page states
                rates rise on 15 September 2026, so check the current figure.
              </p>
            </>
          ),
        },
        {
          id: 'fleetio-pricing',
          heading: 'Fleetio pricing, explained plainly',
          body: (
            <>
              <p>
                Fleetio publishes three tiers: Essential at $4 per vehicle per
                month billed annually ($5 monthly), Professional at $7 and
                Premium at $10, the latter two annual only. There is a Tools
                add-on for tracking equipment, which starts at roughly $0.50 per
                item per month.
              </p>
              <p>
                The caveat that matters: those figures are quoted against a
                specific small-fleet band, and Fleetio states that subscriptions
                are priced on plan, fleet size range, contract term and payment
                term. Treat the published numbers as a starting point for a
                quote rather than a rate card, particularly above a few dozen
                vehicles.
              </p>
              <p>
                For comparison, the telematics vendors in this list — Samsara
                and Motive — publish nothing at all, and independent reviewers
                put them at roughly $25–33 per vehicle per month plus hardware.
                Fleetio is genuinely transparent by the standards of this
                category.
              </p>
            </>
          ),
        },
        {
          id: 'maintenance-plus-dispatch',
          heading: 'If you need maintenance and dispatch together',
          body: (
            <>
              <p>
                This is the honest case for Fleetbase in this comparison, and it
                is narrow. If maintenance is all you need, Fleetio is the better
                product and Simply Fleet is the cheaper one — pick one of those.
              </p>
              <p>
                Fleetbase is worth looking at when the same vehicles that need
                servicing also need dispatching: when you are running deliveries
                or field jobs, and maintaining a fleet is one part of a larger
                operation rather than the whole of it. Fleet-Ops covers
                maintenance scheduling and work orders alongside dispatch,
                routing, a driver app and customer tracking, on one bill — $29 a
                month plus $5 per driver or vehicle, with deliveries never
                metered.
              </p>
              <p>
                It is also the only option here you can{' '}
                <Link
                  href="/company/open-source"
                  className="text-primary hover:underline"
                >
                  self-host under an open-source licence
                </Link>
                , which matters if your service history is data you would rather
                not rent back from a vendor.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'How much does Fleetio cost?',
          answer:
            'Fleetio publishes three tiers: Essential at $4 per vehicle per month billed annually ($5 billed monthly), Professional at $7 and Premium at $10, both annual only. A Tools add-on for equipment tracking starts at about $0.50 per item per month. Fleetio states that subscriptions are priced on plan, fleet size range, contract term and payment term, and the published figures assume a small-fleet band — so larger fleets should expect a quote rather than the rate card.',
        },
        {
          question: 'What is the best free alternative to Fleetio?',
          answer:
            'Simply Fleet has a free plan for up to five vehicles with no card required. Beyond five vehicles, the genuinely free route is self-hosting an open-source platform: Fleetbase is AGPL-3.0, so there is no licence cost, only the infrastructure you run it on and the effort of operating it.',
        },
        {
          question: 'Does Fleetio do dispatch or delivery management?',
          answer:
            'No. Fleetio is a fleet maintenance platform — service scheduling, work orders, inspections, parts and compliance. It does not assign delivery jobs to drivers, optimise routes, capture proof of delivery or give customers tracking links. Teams needing both typically run a second system alongside it, or move to a platform that covers both.',
        },
        {
          question: 'Is Samsara a good Fleetio alternative?',
          answer:
            'Only if you need telematics hardware. Samsara is hardware-first — dash cams, gateways, ELD compliance — with maintenance as part of a wider platform. It publishes no pricing, independent reviewers put it around $27–33 per vehicle per month plus $99–148 hardware, and it typically requires a three-year contract. That is a very different commitment from Fleetio’s per-vehicle software subscription.',
        },
        {
          question: 'What is the cheapest fleet maintenance software?',
          answer:
            'Of the tools with published rates, Simply Fleet is cheapest at $2 per vehicle per month on Essential, and free below five vehicles — though its pricing page states rates increase on 15 September 2026. AUTOsist and Fleetio sit above it. Self-hosting Fleetbase has no licence cost at all, trading software spend for infrastructure and operational effort.',
        },
        {
          question: 'Can I export my data if I leave Fleetio?',
          answer:
            'Fleetio provides data export, as do most vendors here. The sharper question is what happens to service history you have accumulated over years, and whether your next platform can ingest it in a usable shape. If long-term ownership of that record matters to you, a self-hostable platform removes the question entirely, because the database is already yours.',
        },
      ]}
      ctaHeading="Maintenance and dispatch on one bill"
      ctaBody="Fleetbase Fleet-Ops covers maintenance scheduling and work orders alongside dispatch, routing and a driver app — $29 a month plus $5 per driver or vehicle, and deliveries are never metered."
    />
  );
}
