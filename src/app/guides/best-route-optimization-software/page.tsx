import type { Metadata } from 'next';
import Link from 'next/link';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Best Route Optimization Software in 2026';
const DESCRIPTION =
  'Seven route optimization platforms compared on multi-stop routing, time windows, capacity, live re-routing and price — plus when an API beats a SaaS seat.';
const OG_IMAGE =
  '/og?title=Best%20Route%20Optimization%20Software%20in%202026&eyebrow=Guide&subtitle=Seven%20platforms%20compared%20on%20routing%20power%2C%20price%20and%20billing%20model.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'route optimization software',
    'route planning software',
    'delivery route optimization',
    'route optimization software for fleets',
    'multi stop route planner',
  ],
  alternates: {
    canonical: 'https://fleetbase.io/guides/best-route-optimization-software',
  },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/guides/best-route-optimization-software',
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
  'route4me',
  'routific',
  'optimoroute',
  'spoke',
  'onfleet',
  'trackpod',
  'fleetbase',
);

export default function BestRouteOptimizationSoftwarePage() {
  return (
    <RoundupLayout
      eyebrow="Buyer’s guide"
      title="Best route optimization software in 2026: 7 tools compared"
      standfirst="Most teams searching for route optimization actually need one of three different things, and buying the wrong one is expensive. This guide separates route planning from route optimization from dispatch, then compares seven platforms on the constraints that decide whether a route survives contact with a real delivery day."
      breadcrumbs={[
        { label: 'Guides', href: '/guides' },
        {
          label: 'Best route optimization software',
          href: '/guides/best-route-optimization-software',
        },
      ]}
      scopeNote="Route optimization for delivery and service fleets: turning a list of stops into an efficient sequence across multiple vehicles, respecting time windows, vehicle capacity and driver shifts. This guide is not about consumer navigation apps, and it is not about long-haul freight planning. If you have fewer than about a dozen stops a day, a route planner is enough and optimization software is overkill."
      criteria={[
        {
          label: 'Multi-stop optimization',
          detail:
            'Sequencing many stops across several vehicles at once. This is the actual hard problem, and it is what separates optimization from a planner that simply orders a list.',
        },
        {
          label: 'Time windows',
          detail:
            'Honouring the promise you made the customer. A route that is efficient but misses every appointment window is not efficient.',
        },
        {
          label: 'Vehicle capacity',
          detail:
            'Weight, volume and pallet constraints, and whether the optimiser understands that a van fills up and has to return to the depot.',
        },
        {
          label: 'Live re-routing',
          detail:
            'What happens at 11am when a driver calls in sick, a customer reschedules, or traffic collapses. Re-optimising mid-day is much harder than planning at 6am.',
        },
        {
          label: 'Driver app',
          detail:
            'Whether the optimised route reaches the driver in a usable form, with navigation handoff and proof of delivery, or stops at a PDF.',
        },
        {
          label: 'API',
          detail:
            'Whether you can call the optimiser from your own systems. For engineering teams this often matters more than the interface.',
        },
        {
          label: 'Price per vehicle',
          detail:
            'Routing is priced inconsistently across this category — per user, per driver, per order, per stop. Normalise to your own volumes before comparing.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'planning-vs-optimization',
          heading: 'Route planning, route optimization and dispatch',
          body: (
            <>
              <p>
                <strong>Route planning</strong> puts stops in a sensible order
                for one driver. Google Maps does this for up to ten waypoints,
                free. If that is your problem, stop reading and use Google Maps —
                no software in this guide will pay for itself.
              </p>
              <p>
                <strong>Route optimization</strong> solves a genuinely different
                problem: distributing many stops across several vehicles subject
                to constraints that conflict with each other. Time windows pull
                one way, vehicle capacity another, driver shift lengths a third.
                This is a hard computational problem and it is what you are
                paying for.
              </p>
              <p>
                <strong>Dispatch</strong> is what happens after the route exists
                — getting it to a driver, tracking progress, handling the
                exceptions, proving delivery, telling the customer. Several
                tools here do optimization without dispatch, which means you
                will need a second system.
              </p>
              <p>
                The expensive mistake is buying an optimiser when your real
                problem was dispatch, or buying a dispatch tool with weak
                routing when your real problem was a hard constraint puzzle.
              </p>
            </>
          ),
        },
        {
          id: 'api-vs-seat',
          heading: 'When to build on an API instead of buying seats',
          body: (
            <>
              <p>
                Per-seat routing pricing assumes a dispatcher sits in front of a
                map. If your routes are generated by your own system — an
                e-commerce backend, a scheduling engine, an ERP — you are paying
                for an interface nobody opens.
              </p>
              <p>
                At that point an API-first platform is both cheaper and a better
                fit, because the optimiser becomes a service your stack calls
                rather than a destination your staff visit. It also removes the
                integration tax of keeping two systems in sync.
              </p>
              <p>
                This is the case where{' '}
                <Link
                  href="/developers/api"
                  className="text-primary hover:underline"
                >
                  an open platform with a full REST API
                </Link>{' '}
                tends to win outright: you are not buying software for humans,
                you are buying a capability for machines, and you should not be
                billed per human.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Is there free route optimization software?',
          answer:
            'Partly. Routific is free up to 100 orders a month and Google Maps will sequence up to ten waypoints at no cost. Beyond that, free options are limited to open-source projects you host yourself: Fleetbase is AGPL-3.0 and integrates open routing engines such as OSRM and Valhalla, so there is no licence fee, only infrastructure.',
        },
        {
          question: 'What are the limits of using Google Maps for route planning?',
          answer:
            'Google Maps caps you at ten waypoints, optimises for one vehicle only, and has no concept of time windows, vehicle capacity, driver shifts or proof of delivery. It also cannot re-optimise when something changes mid-day. It is genuinely good for a single driver with a short list, and unusable beyond that.',
        },
        {
          question: 'How much does route optimization software cost?',
          answer:
            'Published rates in 2026 range from about $35 per driver per month (OptimoRoute Lite, billed annually) to $199 a month and up (Route4Me). Routific charges $150 a month plus a per-order rate that tapers with volume, and Spoke Dispatch starts at $125 a month for 1,000 stops. Note that Route4Me’s pricing page does not state what its monthly figures are charged per, so confirm before budgeting.',
        },
        {
          question: 'Does AI actually improve route optimization?',
          answer:
            'The core routing problem is a well-studied optimisation problem, and the mathematics behind it predates the current wave of AI. Where machine learning genuinely helps is in the inputs: predicting service time at each stop, learning that a particular customer always takes twenty minutes, and forecasting traffic. Treat "AI routing" claims as a question about which inputs are being predicted, not as a category of its own.',
        },
        {
          question: 'Can I optimise routes through an API instead of a dashboard?',
          answer:
            'Yes, and you should if your routes originate in another system. Route4Me, OptimoRoute and Fleetbase all expose routing APIs. The commercial difference is that per-seat platforms still bill you for dashboard users you do not need, whereas an API-first platform prices on the operation rather than the audience.',
        },
        {
          question: 'What is the difference between route optimization and dispatch software?',
          answer:
            'Optimization decides the order and allocation of stops. Dispatch delivers that plan to drivers, tracks execution, handles exceptions and captures proof of delivery. Some products do one well and the other barely at all, so identify which half is your actual bottleneck before shortlisting.',
        },
      ]}
      ctaHeading="Routing built into dispatch, not bolted on"
      ctaBody="Fleetbase includes multi-stop optimization, live tracking, a driver app and a full REST API in one platform — $29 a month plus $5 per driver or vehicle, with orders free at any volume."
    />
  );
}
