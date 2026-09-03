import { ArrowRight, Calendar, Globe, HeadphonesIcon,Mail, MessageSquare, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/contact/sales' },
 title: 'Contact',
 description:
 'Get in touch with the Fleetbase team. Email us, book a demo on Cal.com, or join our Discord community. We respond within 1 business day.',
 keywords: ['fleetbase contact', 'fleetbase demo', 'fleetbase support', 'logistics software enquiry'],
 openGraph: {
 title: 'Contact | Fleetbase',
 description: 'Get in touch with the Fleetbase team. Email, Discord, or book a demo.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Contact | Fleetbase`,
   description: `Get in touch with the Fleetbase team. Email, Discord, or book a demo.`,
 },
};

const contactReasons = [
 {
 icon: Zap,
 title: 'Enterprise & custom plans',
 description: 'Large-scale deployments, custom SLAs, dedicated support, and volume pricing.',
 },
 {
 icon: Globe,
 title: 'Custom deployment',
 description: 'On-premise, private cloud, or air-gapped deployments with custom configuration.',
 },
 {
 icon: MessageSquare,
 title: 'Professional services',
 description: 'Implementation, integration development, training, and ongoing technical support.',
 },
 {
 icon: ArrowRight,
 title: 'Partnership enquiry',
 description: 'Integration, reseller, implementation, or technology partnership opportunities.',
 },
];

const faqs = [
 {
 q: 'How quickly will I hear back?',
 a: 'Our team responds to all enquiries within 1 business day. For urgent matters, mention it in your message and we will prioritise accordingly.',
 },
 {
 q: 'Can I get a demo before committing?',
 a: 'Yes. Book a personalised demo via Cal.com and our team will tailor the session to your specific operation and use case.',
 },
 {
 q: 'Do you offer a free trial?',
 a: 'Yes. Cloud includes a 7-day free trial of the full platform, with no feature restrictions. Billing begins when the trial ends, and you can start immediately without contacting us first.',
 },
 {
 q: 'Where do I get technical support?',
 a: 'For technical questions, our Discord community is the fastest route — our team is active there daily. You can also email support@fleetbase.io for direct support.',
 },
];

export default function ContactSalesPage() {
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl text-center">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Contact
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 Let&apos;s talk about{' '}
 <span className="text-primary">your operation.</span>
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Whether you&apos;re evaluating Fleetbase, exploring enterprise options, or looking for a
 partner — our team is here to help. We respond within 1 business day.
 </p>
 </div>
 </section>

 {/* Contact Reasons */}
 <section className="py-12 md:py-16">
 <div className="container">
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
 {contactReasons.map((reason) => (
 <div key={reason.title} className="rounded-xl border bg-card p-6 text-center">
 <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <reason.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 font-semibold">{reason.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Channels */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mx-auto max-w-2xl">
 <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">Get in touch</h2>
 <p className="mb-10 text-muted-foreground">
 Choose the channel that works best for you. We&apos;re available via email, Discord, or
 you can book a time directly in our calendar.
 </p>

 <div className="space-y-4">
 {/* General enquiries */}
 <Link
 href="mailto:hello@fleetbase.io"
 className="block group"
 data-cta-id="contact_sales"
 data-cta-location="contact_sales_page"
 data-cta-variant="primary"
 >
 <div className="flex items-start gap-5 rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
 <Mail className="size-5 text-primary" />
 </div>
 <div className="flex-1">
 <div className="font-semibold">General enquiries &amp; sales</div>
 <div className="mt-1 text-sm text-muted-foreground">
 Enterprise plans, partnerships, pricing, and anything else.
 </div>
 <div className="mt-2 text-sm font-medium text-primary group-hover:underline">
 hello@fleetbase.io
 </div>
 </div>
 <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
 </div>
 </Link>

 {/* Support */}
 <Link
 href="mailto:support@fleetbase.io"
 className="block group"
 data-cta-id="contact_support"
 data-cta-location="contact_sales_page"
 data-cta-variant="secondary"
 >
 <div className="flex items-start gap-5 rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
 <HeadphonesIcon className="size-5 text-primary" />
 </div>
 <div className="flex-1">
 <div className="font-semibold">Technical support</div>
 <div className="mt-1 text-sm text-muted-foreground">
 Bug reports, account issues, and platform support.
 </div>
 <div className="mt-2 text-sm font-medium text-primary group-hover:underline">
 support@fleetbase.io
 </div>
 </div>
 <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
 </div>
 </Link>

 {/* Cal.com */}
 <Link
 href="https://cal.com/shivthakker/enquiry"
 target="_blank"
 rel="noopener noreferrer"
 className="block group"
 data-cta-id="book_demo"
 data-cta-location="contact_sales_page"
 data-cta-variant="primary"
 >
 <div className="flex items-start gap-5 rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
 <Calendar className="size-5 text-primary" />
 </div>
 <div className="flex-1">
 <div className="font-semibold">Book a demo</div>
 <div className="mt-1 text-sm text-muted-foreground">
 Schedule a 30-minute personalised demo. We&apos;ll tailor it to your operation
 and use case.
 </div>
 <div className="mt-2 text-sm font-medium text-primary group-hover:underline">
 Book a time on Cal.com →
 </div>
 </div>
 <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
 </div>
 </Link>

 {/* Discord */}
 <Link
 href="https://discord.com/invite/HnTqQ6zAVn"
 target="_blank"
 rel="noopener noreferrer"
 className="block group"
 data-cta-id="join_discord"
 data-cta-location="contact_sales_page"
 data-cta-variant="tertiary"
 >
 <div className="flex items-start gap-5 rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
 {/* Discord icon */}
 <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-primary" aria-hidden="true">
 <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
 </svg>
 </div>
 <div className="flex-1">
 <div className="font-semibold">Community Discord</div>
 <div className="mt-1 text-sm text-muted-foreground">
 For technical questions, community support, and real-time chat. Our team is
 active there daily.
 </div>
 <div className="mt-2 text-sm font-medium text-primary group-hover:underline">
 Join the Discord server →
 </div>
 </div>
 <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
 </div>
 </Link>
 </div>

 {/* FAQ */}
 <div className="mt-14">
 <h3 className="mb-6 text-xl font-semibold">Common questions</h3>
 <div className="space-y-4">
 {faqs.map((faq) => (
 <div key={faq.q} className="rounded-xl border bg-card p-6">
 <div className="mb-2 font-medium">{faq.q}</div>
 <div className="text-sm leading-relaxed text-muted-foreground">{faq.a}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Free trial nudge */}
 <div className="mt-10 rounded-xl border bg-muted/20 p-6">
 <div className="mb-2 font-semibold">Just want to try it?</div>
 <p className="mb-4 text-sm text-muted-foreground">
 Start a free 7-day trial — the full platform, every module included.
 </p>
 <Button variant="outline" asChild>
 <Link
 href="https://console.fleetbase.io"
 target="_blank"
 rel="noopener noreferrer nofollow"
 data-cta-id="start_free_trial"
 data-cta-location="contact_sales_page"
 data-cta-variant="secondary"
 >
 Start free trial <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
