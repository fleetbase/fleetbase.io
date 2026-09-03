import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Check, Calendar, Server, GitBranch,
  MessageSquare, HardDrive, Globe, Settings, Palette,
  Clock, ShieldCheck, Headphones, RefreshCw, AlertCircle,
  ChevronRight, ExternalLink,
} from 'lucide-react';

// Canonical T&C — Google Doc maintained by ops. Update here if the URL changes.
const TERMS_DOC =
  'https://docs.google.com/document/d/1g0q54mbU-aCwhH0DSNBjDGlq70Rdd0d7on-E-B4FYRo/edit?usp=sharing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Managed Installation Service',
  description: 'Get Fleetbase deployed on your own infrastructure in 7 days. Server deployment, CI/CD, custom branding, DNS and handover. $2,500 one-time.',
  keywords: [
    'fleetbase installation service',
    'fleetbase deployment',
    'managed logistics platform setup',
    'self-hosted fleetbase',
    'fleetbase implementation',
  ],
  alternates: { canonical: 'https://fleetbase.io/services/installation' },
  openGraph: {
    title: 'Managed Installation Service | Fleetbase',
    description: 'Fleetbase deployed on your infrastructure in 7 days. Everything included — $2,500 one-time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Managed Installation Service | Fleetbase`,
    description: `Fleetbase deployed on your infrastructure in 7 days. Everything included — $2,500 one-time.`,
  },
};

// ─── Deliverables ─────────────────────────────────────────────────────────────
const DELIVERABLES = [
  {
    icon: Server,
    title: 'Platform Deployment',
    description: 'Full deployment of Fleetbase Console & Core on your server or cloud account — AWS, Azure, GCP, DigitalOcean, or bare metal.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Setup',
    description: 'Automated deployment pipelines so your installation stays up to date and new releases can be applied without downtime.',
  },
  {
    icon: MessageSquare,
    title: 'SMS Configuration',
    description: 'Integration with your SMS provider (Twilio or equivalent) for order notifications, driver alerts, and OTP delivery.',
  },
  {
    icon: HardDrive,
    title: 'File Storage Configuration',
    description: 'Connection to your S3-compatible storage (AWS S3, Cloudflare R2, DigitalOcean Spaces, or MinIO) for uploads, proof of delivery, and documents.',
  },
  {
    icon: Globe,
    title: 'Custom Domain & DNS',
    description: 'Your Fleetbase console and API served on your own domain — fully configured with SSL certificates included.',
  },
  {
    icon: Settings,
    title: 'Custom Order Configuration',
    description: 'Order workflows tailored to your operational structure — custom fields, order types, and status flows configured for your business.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Your logo and visual identity applied throughout the console — so your team sees your brand, not ours.',
  },
];

// ─── Process Steps ─────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    day: 'Day 1',
    title: 'Kickoff & Access',
    description: 'We confirm requirements, collect server credentials and third-party service details, and assign a dedicated implementation engineer to your project.',
  },
  {
    day: 'Days 2–3',
    title: 'Infrastructure & Deployment',
    description: 'Platform deployed on your server with database, Redis, storage, and SSL configured. CI/CD pipelines established and verified.',
  },
  {
    day: 'Days 4–5',
    title: 'Configuration & Branding',
    description: 'SMS, file storage, custom domain, order workflows, and branding applied and tested end-to-end.',
  },
  {
    day: 'Days 6–7',
    title: 'QA, Testing & Handover',
    description: 'Full system QA, walkthrough session with your team, and documented handover. You receive a working, production-ready Fleetbase installation.',
  },
];

// ─── Requirements ─────────────────────────────────────────────────────────────
const CLIENT_REQUIREMENTS = [
  'A server or cloud account to deploy on (AWS, Azure, GCP, DigitalOcean, or VPS)',
  'Domain name and DNS management access',
  'SMS provider account (e.g. Twilio) — or we can advise on setup',
  'S3-compatible storage bucket — or we can advise on setup',
  'A designated point of contact available for the 7-day implementation window',
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What cloud providers do you support?',
    a: 'We deploy on AWS, Azure, GCP, DigitalOcean, Hetzner, and bare-metal Linux servers. If you have an existing server environment, we can work within it.',
  },
  {
    q: 'Do I need to procure the server before engaging you?',
    a: 'Yes — you provide the infrastructure, and we deploy Fleetbase on it. If you need guidance on what to provision, we can advise during the kickoff call before work begins.',
  },
  {
    q: 'What happens after the 7 days?',
    a: 'You receive a fully working Fleetbase installation that you own and control. We conduct a handover session with your team. Ongoing support and automatic upgrades are available via the optional Maintenance Plan at $200/month.',
  },
  {
    q: 'What is the Maintenance Plan and is it required?',
    a: 'The Maintenance Plan is optional. It provides priority email support and automatic Fleetbase version upgrades as new releases are published. Without it, you are responsible for keeping your installation updated.',
  },
  {
    q: 'Does this include custom feature development?',
    a: 'No — this service covers deployment, configuration, and branding of the standard Fleetbase platform. Custom extension development, ERP integrations, or bespoke features are scoped separately under our Custom Extension Development service.',
  },
  {
    q: 'What licence applies to my installation?',
    a: 'Fleetbase is open-source under AGPL-3.0. Your deployment is covered by this licence. If you need to keep proprietary modifications private or build a commercial product on top of Fleetbase, a commercial licence is required — ask us for details.',
  },
  {
    q: 'What is your refund policy?',
    a: 'The one-time service fee is non-refundable once implementation begins. We work closely with you during the kickoff to confirm scope and requirements before any work starts.',
  },
];

export default function InstallationServicePage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding text-center relative overflow-hidden">
        {/* Decorative background orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <span className="text-primary">●</span>
            <span>Managed Installation Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Fleetbase on your infrastructure,{' '}
            <span className="text-primary">deployed in 7 days.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our engineering team handles the full deployment — server setup, CI/CD pipelines, SMS, storage, custom domain, branding, and handover. You get a production-ready installation on infrastructure you own and control.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">$2,500</div>
              <div className="text-sm text-muted-foreground">one-time fee</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">7 days</div>
              <div className="text-sm text-muted-foreground">deployment timeline</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">your infrastructure</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="https://tally.so/r/mVbv2M" target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Everything included in one engagement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One fixed fee covers the complete deployment. No per-hour billing, no scope surprises. The engagement ends when Fleetbase is live on your infrastructure and your team is ready to use it.
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
              From kickoff to handover in 7 days. Every step is managed by our implementation team with a dedicated point of contact on your side.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line — left-side on mobile, centered on desktop */}
            <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.day}
                  className={cn(
                    'relative flex items-start gap-5 md:gap-0',
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Mobile node (in flow) */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background md:hidden">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>

                  {/* Desktop node (absolute, centered on line) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-3.5 z-10 w-11 h-11 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>

                  {/* Card */}
                  <div className={cn(
                    'flex-1 min-w-0',
                    'md:flex-none md:w-[calc(50%-2.75rem)]',
                    i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                  )}>
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

                  {/* Desktop spacer for the opposite side */}
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
              One upfront fee to get you live. An optional monthly plan to keep you current.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* One-time */}
            <Card className="flex flex-col border-primary shadow-lg shadow-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Implementation</CardTitle>
                  <span className="text-xs bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-semibold">One-time</span>
                </div>
                <div className="text-4xl font-bold">$2,500</div>
                <CardDescription className="text-sm mt-1">Payable upfront before deployment begins</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Full Fleetbase deployment on your infrastructure',
                  'CI/CD pipeline setup',
                  'SMS provider integration',
                  'S3-compatible file storage configuration',
                  'Custom domain & SSL',
                  'Custom order workflow configuration',
                  'Custom branding (logo & identity)',
                  'QA testing & team handover session',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <Link href="https://tally.so/r/mVbv2M" target="_blank" rel="noopener noreferrer">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Maintenance */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Maintenance & Support</CardTitle>
                  <span className="text-xs border bg-muted/40 text-muted-foreground px-2.5 py-1 rounded-full font-semibold">Optional</span>
                </div>
                <div className="text-4xl font-bold">$200<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <CardDescription className="text-sm mt-1">Add at any time — cancel with 7 days' notice</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Automatic Fleetbase version upgrades',
                  'Priority email support',
                  'Security patch delivery',
                  'Upgrade compatibility verification',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
                <div className="pt-2 space-y-2">
                  {[
                    'Custom feature development',
                    'New integration builds',
                    'Infrastructure management',
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
                  <Link href="https://tally.so/r/mVbv2M" target="_blank" rel="noopener noreferrer">
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
                To keep the 7-day timeline, the following should be in place before implementation begins. If anything isn't ready, let us know during the kickoff call — we can advise.
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

      {/* ── Why this makes sense ─────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">The case for a managed deployment</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Self-hosting gives you full ownership. Our installation service gets you there without the trial and error.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: 'Up in 7 days',
                description: 'A DIY deployment can take weeks of engineering time. Our team ships faster because they have done this hundreds of times.',
              },
              {
                icon: ShieldCheck,
                title: 'Production-hardened',
                description: 'SSL, firewall rules, storage permissions, CORS, and WebSocket security are all configured correctly from day one — not discovered after launch.',
              },
              {
                icon: Headphones,
                title: 'Expert handover',
                description: 'Your team receives a walkthrough of the configuration, not just a live system. You understand what was deployed and how to manage it going forward.',
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
              Fleetbase Console &amp; Core Implementation Terms &amp; Conditions
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
            <RefreshCw className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Ready to get Fleetbase live?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Submit the registration form and our team will be in touch within one business day to confirm scope and schedule your kickoff.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="https://tally.so/r/mVbv2M" target="_blank" rel="noopener noreferrer">
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
              <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
