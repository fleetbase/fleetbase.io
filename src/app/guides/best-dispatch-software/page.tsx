import type { Metadata } from 'next';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Best Dispatch Software in 2026';
const DESCRIPTION =
  'Seven delivery and fleet dispatch platforms compared on assignment, driver apps, live tracking and pricing model — scoped to delivery, not field service.';
const OG_IMAGE =
  '/og?title=Best%20Dispatch%20Software%20in%202026&eyebrow=Guide&subtitle=Seven%20delivery%20and%20fleet%20dispatch%20platforms%20compared.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'dispatch software',
    'best dispatch software',
    'delivery dispatch software',
    'fleet dispatch software',
    'dispatch management system',
  ],
  alternates: {
    canonical: 'https://fleetbase.io/guides/best-dispatch-software',
  },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/guides/best-dispatch-software',
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
  'bringg',
  'fleetbase',
);

export default function BestDispatchSoftwarePage() {
  return (
    <RoundupLayout
      eyebrow="Buyer’s guide"
      title="Best dispatch software in 2026: 7 tools compared"
      standfirst="“Dispatch software” means at least four different products depending on who is searching — towing, field service, trucking and delivery all use the word. This guide is about delivery and fleet dispatch: assigning jobs to drivers, tracking them in real time, and proving the work was done. If you are dispatching engineers to repair boilers, this is the wrong guide, and we would rather tell you now."
      breadcrumbs={[
        { label: 'Guides', href: '/guides' },
        { label: 'Best dispatch software', href: '/guides/best-dispatch-software' },
      ]}
      scopeNote="Delivery and fleet dispatch: getting jobs to drivers, tracking execution and capturing proof of delivery. This guide does not cover field service management (engineers, work orders, parts on the van), towing dispatch, or trucking load boards and freight brokerage. Those are genuinely different products, and a delivery dispatch platform will disappoint you if that is what you need."
      criteria={[
        {
          label: 'Assignment',
          detail:
            'Manual, rules-based and automatic assignment. Whether the system can batch a day’s work sensibly, and whether a dispatcher can override it quickly when reality intervenes.',
        },
        {
          label: 'Real-time visibility',
          detail:
            'Live driver positions, job status and exception alerts. The measure is whether a dispatcher can answer "where is this order" without phoning anyone.',
        },
        {
          label: 'Driver app',
          detail:
            'A real app with offline handling, navigation handoff and proof of delivery capture. Drivers are the users who will actually decide whether this works.',
        },
        {
          label: 'Customer communication',
          detail:
            'Tracking links, ETA notifications and delivery windows. This is the single most effective way to cut inbound support calls.',
        },
        {
          label: 'Exception handling',
          detail:
            'Failed deliveries, reattempts, returns and reassignment. Every platform demos the happy path; the difference shows on the bad day.',
        },
        {
          label: 'Pricing model',
          detail:
            'Per task, per driver, per order or flat. Dispatch volume is precisely the thing that grows, so a per-task meter is a tax on success.',
        },
        {
          label: 'Extensibility',
          detail:
            'API, webhooks and whether you can modify behaviour. Dispatch rules are where operations differ most from each other, and configuration limits bite quickly.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'which-dispatch',
          heading: 'Four things called “dispatch software”',
          body: (
            <>
              <p>
                <strong>Delivery dispatch</strong> — assigning parcels, meals or
                goods to drivers on routes. That is what this guide covers.
              </p>
              <p>
                <strong>Field service dispatch</strong> — sending technicians to
                jobs with skills matching, parts inventory and time-and-materials
                billing. Different product category; look at field service
                management software instead.
              </p>
              <p>
                <strong>Towing and roadside dispatch</strong> — nearest-unit
                assignment against inbound emergency calls, with impound and
                billing workflows. Specialist vertical software.
              </p>
              <p>
                <strong>Trucking dispatch</strong> — load boards, freight
                matching, carrier settlements and broker workflows. This is a
                TMS, not a delivery dispatch platform.
              </p>
              <p>
                The categories overlap enough that vendors in each will happily
                sell to you, and different enough that buying across them is a
                costly mistake.
              </p>
            </>
          ),
        },
        {
          id: 'pricing-and-growth',
          heading: 'Why the pricing model matters more than the price',
          body: (
            <>
              <p>
                Dispatch volume is the number that grows when the business is
                working. A pricing model metered on completed tasks means every
                good month costs more, and a genuinely successful year can
                multiply the bill several times over while margins stay flat.
              </p>
              <p>
                Work out the cost at three times your current volume before
                signing anything. Onfleet at 2,500 tasks is $619 a month; at
                10,000 tasks you are into the Enterprise tier from $3,099.
                Detrack at twenty drivers is around $580 a month whether those
                drivers complete 2,000 jobs or 20,000. Fleetbase at twenty
                drivers is $129 a month, and orders are never counted.
              </p>
              <p>
                None of those models is wrong. They are bets on different growth
                shapes, and the question is which one matches yours.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is dispatch software?',
          answer:
            'In a delivery context, dispatch software assigns jobs to drivers, tracks them in real time, handles exceptions such as failed deliveries, and captures proof that the work was completed. It usually includes a dispatcher dashboard, a driver mobile app, and customer-facing tracking. Note that the same term is used for field service, towing and trucking software, which are different products.',
        },
        {
          question: 'How much does dispatch software cost?',
          answer:
            'Published rates in 2026 range from free to over $3,000 a month. Shipday has a free tier; Detrack is $29 per driver per month; Tookan runs $129 to $499 a month by task volume; Onfleet starts at $619 a month for 2,500 tasks and reaches $3,099 for its Enterprise tier. Fleetbase is $29 a month plus $5 per driver or vehicle with orders unmetered. Bringg does not publish rates at all.',
        },
        {
          question: 'What is the difference between dispatch and route optimization?',
          answer:
            'Route optimization decides the most efficient sequence and allocation of stops across vehicles. Dispatch delivers that plan to drivers and manages what happens next — tracking progress, reassigning work, handling failures and capturing proof of delivery. Some platforms do one well and the other poorly, so identify which is your actual bottleneck first.',
        },
        {
          question: 'Is there free dispatch software?',
          answer:
            'Shipday offers a free plan covering 300 orders a month and Tookan has a free tier for 100 tasks with two agents. For unmetered use, the open-source route is self-hosting: Fleetbase is AGPL-3.0, so there is no licence cost, only the infrastructure and the operational effort of running it yourself.',
        },
        {
          question: 'Can dispatch software handle both scheduled routes and on-demand jobs?',
          answer:
            'Some can, and many cannot do both well. Scheduled route platforms optimise a fixed list overnight; on-demand platforms assign jobs as they arrive, often to the nearest available driver. If your operation mixes both — a planned morning round plus ad-hoc afternoon jobs — test that specific scenario during the trial rather than trusting the feature list.',
        },
        {
          question: 'What should I check before committing to a dispatch platform?',
          answer:
            'Three things people skip. Model your cost at three times current volume, because dispatch volume is exactly what grows. Test the exception path — a failed delivery, a reattempt, a mid-day reassignment — not just the happy path. And have a driver use the app for a day, because driver adoption is what actually determines whether the rollout succeeds.',
        },
      ]}
      ctaHeading="Dispatch that doesn’t bill you for growing"
      ctaBody="Fleetbase includes dispatch, routing, a driver app, proof of delivery and customer tracking for $29 a month plus $5 per driver or vehicle. Orders are free at any volume."
    />
  );
}
