import type { Metadata } from 'next';

import RoundupLayout from '@/components/roundup/roundup-layout';
import { competitors } from '@/lib/competitors';

const TITLE = 'Samsara Alternatives: 6 Options Compared';
const DESCRIPTION =
  'Six Samsara alternatives compared on hardware lock-in, contract length and cost — including options that let you own the software and choose your own devices.';
const OG_IMAGE =
  '/og?title=Samsara%20Alternatives%3A%206%20Options%20Compared&eyebrow=Compare&subtitle=Hardware%20lock-in%2C%20contract%20length%20and%20what%20it%20really%20costs.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'samsara alternatives',
    'samsara competitors',
    'samsara pricing',
    'fleet telematics alternatives',
    'open source fleet management',
  ],
  alternates: { canonical: 'https://fleetbase.io/compare/vs-samsara' },
  openGraph: {
    type: 'article',
    url: 'https://fleetbase.io/compare/vs-samsara',
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
  'samsara',
  'motive',
  'fleetio',
  'simplyfleet',
  'whiparound',
  'fleetbase',
);

export default function VsSamsaraPage() {
  return (
    <RoundupLayout
      eyebrow="Compare"
      title="Samsara alternatives: 6 options for fleet operators (2026)"
      standfirst="Samsara is telematics hardware first — cameras, gateways and sensors, with software wrapped around them. That is worth saying plainly, because it means most alternatives are not substitutes for the whole thing. This guide is honest about which parts each option replaces, and which it does not."
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Samsara alternatives', href: '/compare/vs-samsara' },
      ]}
      scopeNote="Fleet operations software and telematics for operators who want to reduce hardware lock-in, shorten contracts, or cut cost. Fleetbase is a partial substitute only: it is the software layer, and it integrates telematics devices rather than manufacturing them. If you need certified ELD hardware and dash cams from one vendor, that is a genuine reason to stay with Samsara or Motive."
      criteria={[
        {
          label: 'Hardware model',
          detail:
            'Whether the vendor makes the devices, resells them, or integrates whatever you already have. This determines how hard it is to leave later.',
        },
        {
          label: 'Contract length',
          detail:
            'The most underrated line in any telematics deal. Independent reviewers report a three-year minimum on Samsara against one year on Motive — that difference outweighs a few dollars a vehicle.',
        },
        {
          label: 'ELD and compliance',
          detail:
            'Whether the product is a certified electronic logging device. If you run regulated commercial vehicles this is not optional, and it rules several options out.',
        },
        {
          label: 'Safety and cameras',
          detail:
            'Dash cams, driver coaching and event detection. This is where Samsara is strongest and where software-only alternatives simply do not compete.',
        },
        {
          label: 'Maintenance',
          detail:
            'Preventive schedules, work orders and inspections — often the part operators actually use daily.',
        },
        {
          label: 'Dispatch and delivery',
          detail:
            'Whether the platform can assign and track delivery work, which the pure telematics vendors largely do not.',
        },
        {
          label: 'Cost transparency',
          detail:
            'Samsara and Motive publish nothing. Fleetio, Simply Fleet and Fleetbase publish rates you can budget against today.',
        },
      ]}
      tools={TOOLS}
      sections={[
        {
          id: 'partial-substitute',
          heading: 'Be clear about what you are replacing',
          body: (
            <>
              <p>
                Samsara bundles three things that are usually sold separately:
                telematics hardware, compliance and safety tooling, and fleet
                operations software. An honest comparison has to say which of
                those an alternative actually replaces.
              </p>
              <p>
                <strong>Replacing the hardware</strong> means Motive, Geotab or
                another device vendor. If certified ELD and dash cams are the
                requirement, you need a hardware company, and no software
                platform substitutes for one.
              </p>
              <p>
                <strong>Replacing the software layer</strong> is a different
                proposition. Fleetio, Simply Fleet and Fleetbase are software
                you can run against telematics devices you choose separately —
                which is how you avoid a single vendor owning both your data and
                the boxes that generate it.
              </p>
              <p>
                Fleetbase belongs in the second group. It integrates Samsara,
                Geotab and Flespi rather than replacing the devices. Position it
                accordingly: this is for operators who want to own the software
                and choose their own hardware, not for anyone who needs a
                certified ELD out of the box.
              </p>
            </>
          ),
        },
        {
          id: 'contracts-and-lock-in',
          heading: 'Contract length is the real cost',
          body: (
            <>
              <p>
                Independent reviewers put Samsara at roughly $27–33 per vehicle
                per month with hardware around $99–148 per vehicle, on a minimum
                three-year contract. Motive is estimated from about $25 per
                vehicle per month on one-year terms. Neither publishes rates, so
                both figures are third-party estimates rather than vendor
                numbers.
              </p>
              <p>
                Run the arithmetic on a 50-vehicle fleet over three years and
                the difference in term matters more than the difference in rate.
                At $30 a vehicle, three years is $54,000 of committed spend
                before hardware — and the commitment is the part you cannot undo
                if the product turns out not to fit.
              </p>
              <p>
                This is the single most common reason operators go looking for
                alternatives: not that Samsara is bad, but that a three-year
                commitment made at 20 vehicles is uncomfortable at 80, and
                impossible to unwind when the hardware is also theirs.
              </p>
            </>
          ),
        },
        {
          id: 'own-the-software',
          heading: 'Owning the software layer',
          body: (
            <>
              <p>
                If the goal is to stop one vendor owning both the devices and
                the operational record, the pattern is to buy hardware as a
                commodity and run open software over it. Telematics devices are
                increasingly interchangeable; the accumulated history of your
                fleet is not.
              </p>
              <p>
                Fleetbase is AGPL-3.0 and integrates Samsara, Geotab and Flespi
                feeds, so you can keep devices you have already paid for while
                moving the software layer somewhere you control. It adds
                dispatch, routing, a driver app and customer tracking, which the
                telematics platforms treat as secondary.
              </p>
              <p>
                What it does not do is supply hardware or act as a certified
                ELD. If those are hard requirements, stay with a hardware
                vendor — that is the correct answer, and no amount of open
                source changes it.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'How much does Samsara cost per vehicle?',
          answer:
            'Samsara does not publish pricing. Independent reviewers report roughly $27–33 per vehicle per month for common feature sets, hardware costs around $99–148 per vehicle, and a minimum three-year contract. Those are third-party figures rather than Samsara’s own, and actual quotes vary with fleet size, contract length and the features selected.',
        },
        {
          question: 'What is the main difference between Samsara and Motive?',
          answer:
            'Both are hardware-first telematics platforms with ELD compliance and safety cameras. The most consequential difference reported by independent reviewers is contract length: Samsara typically requires three years where Motive offers one-year terms. On a multi-year commitment that flexibility usually matters more than the per-vehicle rate.',
        },
        {
          question: 'Is there an open-source alternative to Samsara?',
          answer:
            'Fleetbase is open source under AGPL-3.0 and covers the software layer — fleet operations, maintenance, dispatch, routing and a driver app — while integrating telematics hardware from Samsara, Geotab and Flespi rather than supplying its own. It is a substitute for the software, not for the devices, and it is not a certified ELD.',
        },
        {
          question: 'Can I keep my Samsara hardware and change software?',
          answer:
            'Often yes. Samsara devices expose data through an API, and platforms including Fleetbase integrate that feed, so you can move the software layer while the hardware stays in the vehicles. Check your contract terms first — hardware is usually tied to the subscription agreement, and leaving mid-term may not be possible without penalty.',
        },
        {
          question: 'Do I need telematics hardware at all?',
          answer:
            'It depends on what you are regulated to do. Certified ELD compliance and dash-cam-based safety programmes require hardware. If your actual requirement is knowing where vehicles are, dispatching work and keeping maintenance current, driver mobile apps and software-only tracking often cover it at a fraction of the cost and with no contract on the devices.',
        },
        {
          question: 'What is the cheapest Samsara alternative?',
          answer:
            'Of the options with published rates, Simply Fleet is cheapest at $2 per vehicle per month (free below five vehicles), followed by Fleetio at $4. Fleetbase Cloud is $29 a month plus $5 per driver or vehicle with every module included. None of these supply telematics hardware, so compare them on the software layer rather than as full replacements.',
        },
      ]}
      ctaHeading="Own the software, choose your own hardware"
      ctaBody="Fleetbase is open source under AGPL-3.0 and integrates Samsara, Geotab and Flespi — so your operational history stays yours, whatever devices you run."
    />
  );
}
