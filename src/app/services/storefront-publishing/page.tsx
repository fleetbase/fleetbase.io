import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertCircle,
  Apple,
  ArrowRight,
  Bell,
  Brush,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Code2,
  CreditCard,
  ExternalLink,
  GitBranch,
  Headphones,
  Layers,
  Palette,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Upload,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Form + T&C links (provided by ops). Update these here if they change.
const TALLY_FORM = 'https://tally.so/r/mBjAPR';
const TERMS_DOC =
  'https://docs.google.com/document/d/17NPti5SXTAMpFHqy7DlF6z73rp5iqYBkSebGk7nzfn8/edit?usp=sharing';

export const metadata: Metadata = {
  title: 'Storefront App Publishing Service',
  description:
    'Ship your own branded Storefront customer app on the App Store and Google Play. Scaffolding, branding, payments, store setup and submission.',
  keywords: [
    'storefront app publishing',
    'white label customer app',
    'fleetbase storefront branding',
    'custom delivery mobile app',
    'app store submission service',
  ],
  alternates: { canonical: 'https://fleetbase.io/services/storefront-publishing' },
  openGraph: {
    title: 'Storefront App Publishing Service | Fleetbase',
    description:
      'Your own branded Storefront customer app on the App Store and Google Play — built, configured, and submitted by our team.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Storefront App Publishing Service | Fleetbase`,
    description: `Your own branded Storefront customer app on the App Store and Google Play — built, configured, and submitted by our team.`,
  },
};

const DELIVERABLES = [
  {
    icon: Code2,
    title: 'Branded App Scaffold',
    description:
      'A custom fork of the open-source Storefront app, configured with your bundle identifier, app name, and connection to your Fleetbase Storefront backend.',
  },
  {
    icon: Palette,
    title: 'Visual Branding',
    description:
      'Logo, app icon, splash screen, theme colours, and typography applied across iOS and Android — your brand from launch screen to checkout confirmation.',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description:
      'Connect Stripe, QPay, or any Fleetbase-supported payment gateway for in-app checkout. We configure the gateway, test transactions end-to-end, and document the setup.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description:
      'Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM) configured and tested for order updates, delivery alerts, and promotional pushes.',
  },
  {
    icon: Apple,
    title: 'App Store Connect Setup',
    description:
      'iOS provisioning profiles, distribution certificates, and App Store Connect listing configured. We handle TestFlight setup and submission for App Store review.',
  },
  {
    icon: Smartphone,
    title: 'Google Play Console Setup',
    description:
      'Android signing keys, internal testing tracks, and the Google Play Console listing configured. Submission for production release on Google Play.',
  },
  {
    icon: GitBranch,
    title: 'Build Pipeline',
    description:
      'A repeatable CI/CD build pipeline so future updates can be released without re-doing the publishing work. Documented in your handover.',
  },
  {
    icon: Upload,
    title: 'Store Submission & Review Liaison',
    description:
      'We submit to both stores and respond to any review-board feedback (metadata, permission descriptions, screenshots) until the app goes live.',
  },
];

const PROCESS_STEPS = [
  {
    day: 'Day 1',
    title: 'Kickoff & Asset Collection',
    description:
      'We confirm scope, collect your branding assets (logo, colours, app name, store metadata), payment-gateway credentials, and your Apple Developer + Google Play Console access.',
  },
  {
    day: 'Days 2–4',
    title: 'Branding & Configuration',
    description:
      'Custom Storefront build prepared with your branding applied. Payment gateway connected and tested. APNs and FCM configured. Connection to your Fleetbase backend verified end-to-end.',
  },
  {
    day: 'Days 5–7',
    title: 'Build & TestFlight / Internal Testing',
    description:
      'Production builds compiled. iOS uploaded to TestFlight, Android to Internal Testing track. Walkthrough session with your team for sign-off — including a real test order through checkout.',
  },
  {
    day: 'Days 8–14',
    title: 'Store Submission',
    description:
      'Apps submitted to App Store and Google Play. We handle review-board questions and resubmit if metadata or screenshots need adjustments.',
  },
  {
    day: 'After Launch',
    title: 'Handover',
    description:
      'Documented handover covering the build pipeline, store credentials, push notification keys, payment gateway configuration, and how to ship future updates yourselves.',
  },
];

const CLIENT_REQUIREMENTS = [
  'Apple Developer Program membership ($99/year, paid by you)',
  'Google Play Console developer account ($25 one-time, paid by you)',
  'Logo and visual identity assets (vector preferred)',
  'App name, store description, screenshots — or copy guidance from us',
  'Payment gateway account (Stripe, QPay, or other) with API credentials',
  'Active Fleetbase Storefront deployment for the app to connect to',
  'A point of contact available during the App Store review window',
];

const FAQS = [
  {
    q: 'Do you cover both iOS and Android in one engagement?',
    a: 'Yes. The service publishes to the Apple App Store and Google Play in a single engagement. Pricing covers both platforms — there is no separate iOS / Android fee.',
  },
  {
    q: 'Which payment gateways do you integrate?',
    a: 'Any gateway that has a Fleetbase Ledger payment driver — including Stripe, QPay, PayPal, and bespoke regional gateways. If you need a gateway that isn\'t yet supported, the Custom Extension Development service can build a driver for it; that work is scoped separately.',
  },
  {
    q: 'Who owns the Apple Developer and Google Play accounts?',
    a: 'You do. The accounts must be registered in your business name, and we work under your accounts using temporary access during the engagement. The published apps remain fully owned and controlled by you.',
  },
  {
    q: 'How long until the app is live in the stores?',
    a: 'Build, configuration, and store submission usually complete inside two weeks. App Store review is outside our control — Apple typically reviews in 24–48 hours, Google in 1–7 days. We handle any review feedback until the app goes live.',
  },
  {
    q: 'Can the customer app be multi-vendor or food-truck enabled?',
    a: 'Yes. The standard Storefront app supports vendors, networks, multi-store catalogs, and the moving-shop / food-truck mode out of the box. We configure these features based on your operational model. See the /oli-max page for an example of food-truck mode in production.',
  },
  {
    q: 'Will future Storefront updates require us to re-engage your team?',
    a: 'No. The build pipeline we set up is yours, and the handover covers how to ship updates. Many teams handle their own updates after launch. If you prefer ongoing release management, our Update & Release Plan covers it for $200/month.',
  },
  {
    q: 'Can we customise the app beyond branding and payment gateway?',
    a: 'This service covers branding, payment integration, and publishing of the standard Storefront feature set. Custom features — new screens, additional flows, modified checkout — are scoped separately under our Custom Extension Development service.',
  },
  {
    q: 'What licence applies to the published Storefront app?',
    a: 'Storefront is open-source under AGPL-3.0. Your branded fork is covered by AGPL by default. If you need to keep proprietary modifications private, a commercial licence is required — see the Commercial License page for details.',
  },
  {
    q: 'What is the refund policy?',
    a: 'The fee is non-refundable once kickoff begins, since most of the cost is engineering time. We do a thorough scope confirmation on the kickoff call before any work starts so there are no surprises.',
  },
];

export default function StorefrontPublishingPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <ShoppingBag className="size-3 text-primary" />
            <span>Storefront App Publishing Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Your own customer app,{' '}
            <span className="text-primary">on the App Store and Google Play.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We white-label, build, configure, and submit a fully branded Storefront app for your
            business. iOS and Android, payment integration, store submission — all included.
            Customers see your name and your brand from open to checkout.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">$2,500</div>
              <div className="text-sm text-muted-foreground">one-time fee</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">~2 weeks</div>
              <div className="text-sm text-muted-foreground">to store submission</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">iOS + Android</div>
              <div className="text-sm text-muted-foreground">in one engagement</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href={TALLY_FORM} target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-4 h-4" />
                Book a Call First
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            See a live deployment:{' '}
            <Link href="/oli-max" className="text-primary underline underline-offset-4">
              Oli Max
            </Link>{' '}
            — the Storefront app powering bulk supply across Mongolia.
          </p>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Everything included in one engagement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From branding to payment integration to store submission. One fixed fee. The
              engagement ends when your app is live on both stores and your team has the keys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {DELIVERABLES.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How the engagement works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From kickoff to live in both stores. Each step has a documented hand-off so you
              know what&apos;s happening and what&apos;s next.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-px" />
            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.day}
                  className={cn(
                    'relative flex items-start gap-5 md:gap-0',
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  )}
                >
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background md:hidden">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-3.5 z-10 w-11 h-11 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div
                    className={cn(
                      'flex-1 min-w-0 md:flex-none md:w-[calc(50%-2.75rem)]',
                      i % 2 === 0 ? 'md:pr-10' : 'md:pl-10',
                    )}
                  >
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <span className="inline-flex w-fit text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-full mb-2">
                          {step.day}
                        </span>
                        <CardTitle className="text-base">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2.75rem)] md:flex-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Simple, transparent pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              One upfront fee covers branding, builds, payment setup, store submission. Optional
              maintenance keeps your future releases moving.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="flex flex-col border-primary shadow-lg shadow-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Publishing Service</CardTitle>
                  <span className="text-xs bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-semibold">
                    One-time
                  </span>
                </div>
                <div className="text-4xl font-bold">$2,500</div>
                <CardDescription className="text-sm mt-1">
                  Payable upfront before kickoff
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Branded Storefront iOS + Android builds',
                  'Custom logo, colours, splash, and icons',
                  'Payment gateway integration (Stripe, QPay, etc.)',
                  'Push notification setup (APNs + FCM)',
                  'App Store Connect & Play Console configuration',
                  'TestFlight & Internal Testing track setup',
                  'Production submission to both stores',
                  'Review-board liaison until live',
                  'Repeatable build pipeline + handover',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <Link href={TALLY_FORM} target="_blank" rel="noopener noreferrer">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Update & Release Plan</CardTitle>
                  <span className="text-xs border bg-muted/40 text-muted-foreground px-2.5 py-1 rounded-full font-semibold">
                    Optional
                  </span>
                </div>
                <div className="text-4xl font-bold">
                  $200<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="text-sm mt-1">
                  Add at any time — cancel with 7 days&apos; notice
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Quarterly Storefront version upgrades',
                  'Store re-submission for upgrades',
                  'Push notification key rotation',
                  'Provisioning profile renewal',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
                <div className="pt-2 space-y-2">
                  {[
                    'Custom feature development',
                    'New screen / workflow builds',
                    'Additional payment gateways',
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground/60">
                      <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center leading-none">—</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" variant="outline" asChild>
                  <Link href={TALLY_FORM} target="_blank" rel="noopener noreferrer">
                    Add During Signup
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Client Requirements ───────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex gap-4 items-start rounded-2xl border bg-card p-8">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">What you need to provide</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                A few items must be in place on your side before we can publish. If any are
                missing, let us know on the kickoff call and we&apos;ll advise.
              </p>
              <ul className="space-y-2.5">
                {CLIENT_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why managed publishing ───────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Why a managed publishing service</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Building, branding, and shipping a customer app to both stores — with payment
              integration that actually clears — is a multi-week project the first time around.
              We do this every week.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: 'Skip the learning curve',
                description:
                  'Provisioning profiles, signing keys, push certificates, and review-board nuances take time to learn. We bring that knowledge to the table.',
              },
              {
                icon: ShieldCheck,
                title: 'Hardened submission',
                description:
                  'Most first-time submissions are rejected for permission descriptions, screenshots, or metadata. Our submissions land cleanly because we know what reviewers look for.',
              },
              {
                icon: Headphones,
                title: 'Real handover',
                description:
                  'You receive working build credentials, signing keys, payment gateway docs, and a documented release process. Your team understands what was deployed and how to ship updates.',
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-6">
                <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Terms notice ─────────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-xs text-center text-muted-foreground">
            By submitting the registration form you agree to the{' '}
            <Link
              href={TERMS_DOC}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Storefront App Publishing Terms &amp; Conditions
              <ExternalLink className="size-3" />
            </Link>
            . The service is provided by Fleetbase Pte. Ltd., Singapore.
          </p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Ready to ship your customer app?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Submit the registration form and our team will be in touch within one business day to
              confirm scope and schedule your kickoff.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href={TALLY_FORM} target="_blank" rel="noopener noreferrer">
                  Submit Registration Form <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book a Discovery Call
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Questions? Email us at{' '}
              <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">
                hello@fleetbase.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
