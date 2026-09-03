import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe, Heart, Zap, Shield, Code2, MapPin, Linkedin, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
 title: 'About — Open-Source Logistics from Singapore',
 description:
 'Fleetbase is an open-source logistics platform founded in Singapore in 2018 by Shiv Thakker and Ronald Richardson. Our story, mission and team.',
 keywords: ['about fleetbase', 'fleetbase team', 'open source logistics company', 'fleetbase singapore', 'logistics startup singapore', 'shiv thakker', 'ronald richardson'],
 alternates: { canonical: 'https://fleetbase.io/company/about' },
 openGraph: {
 title: 'About Us | Fleetbase',
 description: 'The open-source logistics platform on a mission to democratize logistics technology.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `About Us | Fleetbase`,
   description: `The open-source logistics platform on a mission to democratize logistics technology.`,
 },
};

const values = [
 {
 icon: Code2,
 title: 'Open by default',
 description:
 "Every line of Fleetbase is open source. We believe software that runs critical business operations should be inspectable, modifiable, and owned by the people who use it — not locked inside a vendor's black box.",
 },
 {
 icon: Globe,
 title: 'Built for everyone',
 description:
 'The best logistics technology should not be reserved for companies with eight-figure IT budgets. Fleetbase is designed to give a 10-vehicle courier operation the same capabilities as a 10,000-vehicle enterprise fleet.',
 },
 {
 icon: Heart,
 title: 'Community first',
 description:
 'Fleetbase is shaped by the people who use it. Our roadmap is driven by community feedback, our extensions marketplace is built by contributors, and our Discord is where real product decisions get made.',
 },
 {
 icon: Shield,
 title: 'Data sovereignty',
 description:
 'Your logistics data is yours. Fleetbase can be self-hosted on your own infrastructure, giving you complete control over where your data lives and who can access it.',
 },
 {
 icon: Zap,
 title: 'Pragmatic over perfect',
 description:
 'We ship fast, iterate based on real operator feedback, and prioritize features that solve real problems over features that look good in demos. Logistics is a practical business — our software should be too.',
 },
 {
 icon: Puzzle,
 title: 'Extensible by design',
 description:
 'No two logistics operations are the same. Fleetbase is built as a platform — with a full API, Extensions SDK, and modular architecture — so it can be shaped to fit any operation, not the other way around.',
 },
];

const milestones = [
 {
 year: '2018',
 title: 'Founded',
 description:
 'Fleetbase was founded in Singapore with a single conviction: logistics technology should be open, accessible, and operator-first — not locked inside expensive, static enterprise systems with high monthly subscriptions.',
 },
 {
 year: '2022',
 title: 'Open-sourced',
 description:
 'After years of building and validating the platform with real operators, Fleetbase was open-sourced under AGPL-3.0. The community immediately embraced it — hundreds of operators deployed within the first month and the Discord reached 1,000 members.',
 },
 {
 year: '2023',
 title: 'Extensions marketplace',
 description:
 'The Fleetbase Extensions marketplace launched, enabling the community to build and publish custom integrations, order types, and UI extensions for the platform.',
 },
 {
 year: '2024',
 title: 'Global scale',
 description:
 'Fleetbase reached 500+ companies across 40+ countries, processing over 10 million orders. Pallet WMS and Storefront joined the platform as first-party extensions.',
 },
 {
 year: '2025',
 title: 'Enterprise & beyond',
 description:
 'Enterprise support plans, professional services, and a global partner network launched to serve large-scale deployments while keeping the core platform free and open-source.',
 },
];

export default function AboutPage() {
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 About Fleetbase
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 We built the logistics platform{' '}
 <span className="text-primary">we wished existed.</span>
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Fleetbase was born out of frustration. The logistics software market was dominated by
 expensive, closed-source platforms that locked operators into long contracts, charged per
 driver, and made customization impossible without paying for professional services.
 Developers who wanted to build on top of logistics infrastructure had nowhere to start —
 and operators who needed flexibility were forced into static systems with high monthly
 subscriptions and no way to adapt.
 </p>
 <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
 We believed there was a better way — a fully open-source logistics platform built for
 both <strong>developers</strong> and <strong>operators</strong> alike. One that
 developers could extend without months of custom development time, and that operators
 could deploy, own, and adapt without vendor lock-in, per-seat pricing, or black boxes.
 </p>
 <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
 That platform is Fleetbase. Founded in 2018 in Singapore, open-sourced in 2022.
 </p>
 </div>
 </section>

 {/* Mission */}
 <section className="bg-brand-blue-600 py-16 md:py-20">
 <div className="container">
 <div className="mx-auto max-w-3xl text-center">
 <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">Our mission</h2>
 <blockquote className="text-xl leading-relaxed text-white md:text-2xl">
 &ldquo;To democratize logistics technology by building open-source infrastructure that
 gives every business the tools to operate with the efficiency and intelligence of the
 world&apos;s best logistics companies — without vendor lock-in, without prohibitive
 costs, and without compromise.&rdquo;
 </blockquote>
 </div>
 </div>
 </section>

 {/* How we operate */}
 <section className="py-16 md:py-20">
 <div className="container">
 <div className="mx-auto max-w-3xl">
 <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">How we operate</h2>
 <p className="text-lg leading-relaxed text-muted-foreground">
 Fleetbase is led by two founders who built the platform from the ground up and stay
 hands-on with every part of the business — engineering, product, customer relationships,
 and partnerships. We&apos;ve grown a powerful company largely on our own, and we&apos;re
 intimately involved in the operators and businesses running on Fleetbase day to day.
 </p>
 <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
 We&apos;ve taken a bootstrapped path — that means we move on our own conviction and
 timeline — but it doesn&apos;t mean we work alone. We have full-time engineering, customer
 support, and DevOps teams behind us, delivering the SLAs, custom development, and
 operational depth our enterprise customers rely on. The founders set the direction and
 stay close to every decision; the team makes it happen at scale.
 </p>
 <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
 What this means in practice:
 </p>
 <ul className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">
 <li className="flex gap-3">
 <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
 <span>
 <strong className="font-semibold text-foreground">Direct access to the founders.</strong>{' '}
 Above the standard support tiers, the founders are personally reachable. Bug reports,
 feature requests, and partnership conversations land with the people who actually
 built the platform.
 </span>
 </li>
 <li className="flex gap-3">
 <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
 <span>
 <strong className="font-semibold text-foreground">A real team behind every release.</strong>{' '}
 Engineering, customer support, and DevOps work full-time on Fleetbase. Enterprise
 customers get dedicated support, custom development, and the same operational depth
 they&apos;d expect from any commercial platform.
 </span>
 </li>
 <li className="flex gap-3">
 <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
 <span>
 <strong className="font-semibold text-foreground">A roadmap that reflects what operators need.</strong>{' '}
 We say &ldquo;no&rdquo; to features that don&apos;t fit, and &ldquo;yes&rdquo; to small,
 unglamorous fixes that make a real difference for the businesses already on the platform.
 </span>
 </li>
 <li className="flex gap-3">
 <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
 <span>
 <strong className="font-semibold text-foreground">A platform that stays open and self-hostable.</strong>{' '}
 The core remains AGPL-3.0 — the foundation operators trust us on.
 </span>
 </li>
 </ul>
 <div className="mt-8 rounded-xl border bg-muted/20 p-6">
 <p className="text-base leading-relaxed text-muted-foreground">
 If you&apos;re interested in investing in our team, our mission, or Fleetbase as a
 platform, we&apos;re open to investment opportunities and strategic partnerships.{' '}
 <Link href="/company/investors" className="text-primary underline underline-offset-4">
 Read our investor page
 </Link>{' '}
 or{' '}
 <Link href="/partners" className="text-primary underline underline-offset-4">
 explore the partner program
 </Link>{' '}
 to start the conversation.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Values */}
 <section className="py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we believe</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 These are the principles that guide every product decision, every line of code, and
 every interaction with our community.
 </p>
 </div>
 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
 {values.map((value) => (
 <div key={value.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <value.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Timeline */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our journey</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 From a founding conviction in 2018 to a global logistics platform used in 40+ countries.
 </p>
 </div>
 <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-border">
 {milestones.map((milestone) => (
 <div key={milestone.year} className="relative">
 <div className="absolute -left-8 flex size-6 items-center justify-center rounded-full border bg-background">
 <div className="size-2 rounded-full bg-primary" />
 </div>
 <div className="rounded-xl border bg-card p-6">
 <div className="mb-1 text-sm font-semibold text-primary">{milestone.year}</div>
 <h3 className="mb-2 text-lg font-semibold">{milestone.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Founders */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The founders</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 Fleetbase was built by two founders who bring together enterprise finance, technology,
 and operational expertise — from the trading floors of JP Morgan to the logistics
 operations of the US Marines. Their combined background gives Fleetbase a rare
 perspective: the rigour of enterprise systems, the discipline of military operations,
 and the pragmatism of operators who have run logistics at scale.
 </p>
 </div>
 <div className="grid gap-8 md:grid-cols-2">
 {/* Shiv Thakker */}
 <div className="rounded-xl border bg-card p-8">
 <div className="flex items-start gap-5 mb-5">
 <div className="size-20 rounded-full bg-muted flex-shrink-0 overflow-hidden border-2 border-primary/20">
 <Image
 src="/images/team/shiv-thakker.jpg"
 alt="Shiv Thakker — Co-founder & CEO of Fleetbase"
 width={80}
 height={80}
 className="w-full h-full object-cover"
 />
 </div>
 <div>
 <h3 className="text-xl font-bold">Shiv Thakker</h3>
 <p className="text-primary font-medium text-sm">Co-founder &amp; CEO</p>
 <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
 <MapPin className="size-3" />
 Singapore
 </div>
 <Link
 href="https://www.linkedin.com/in/shivthakker"
 target="_blank"
 rel="noopener noreferrer"
 className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
 >
 <Linkedin className="size-3.5" />
 LinkedIn
 </Link>
 </div>
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground mb-4">
 Shiv is an enterprise technologist and serial entrepreneur with a background spanning
 investment banking, precious metals logistics, and technology. He began his career at
 JP Morgan at 17, working across the UK and Singapore, where he developed deep
 expertise at the intersection of financial systems and physical supply chains. He has
 10+ years of experience building and running logistics platforms across Southeast Asia.
 </p>
 <p className="text-sm leading-relaxed text-muted-foreground">
 His experience navigating the gap between enterprise-grade logistics software and the
 operational reality of emerging markets became the founding insight behind Fleetbase —
 that operators and developers alike deserved infrastructure that was open, adaptable,
 and free from the constraints of static, high-subscription legacy systems.
 </p>
 </div>
 {/* Ronald Richardson */}
 <div className="rounded-xl border bg-card p-8">
 <div className="flex items-start gap-5 mb-5">
 <div className="size-20 rounded-full bg-muted flex-shrink-0 overflow-hidden border-2 border-primary/20">
 <Image
 src="/images/team/ronald-richardson.jpg"
 alt="Ronald Richardson — Co-founder & CTO of Fleetbase"
 width={80}
 height={80}
 className="w-full h-full object-cover"
 />
 </div>
 <div>
 <h3 className="text-xl font-bold">Ronald Richardson</h3>
 <p className="text-primary font-medium text-sm">Co-founder &amp; CTO</p>
 <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
 <MapPin className="size-3" />
 Singapore
 </div>
 <Link
 href="https://www.linkedin.com/in/ronald-a-richardson"
 target="_blank"
 rel="noopener noreferrer"
 className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
 >
 <Linkedin className="size-3.5" />
 LinkedIn
 </Link>
 </div>
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground mb-4">
 Ron is a former US Marine with 5 years of military logistics experience, where he
 developed a first-hand understanding of what it means to run operations under
 pressure, at scale, and without margin for error. After leaving the Marines, he
 spent over 6 years building supply chain and logistics software for ports, brokers,
 and operators handling millions of dollars in oil, chemicals, and container freight.
 </p>
 <p className="text-sm leading-relaxed text-muted-foreground">
 His background in military-grade operations and port logistics shaped Fleetbase&apos;s
 architecture: built for reliability, designed for scale, and engineered to handle the
 complexity of real-world logistics from day one. As CTO, Ron leads the technical
 vision that makes Fleetbase a platform developers can build on without months of
 custom development time.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Singapore HQ */}
 <section className="border-t py-12 md:py-16 bg-muted/20">
 <div className="container">
 <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
 <div className="flex-shrink-0 rounded-xl border bg-card p-6 flex flex-col items-center gap-3 min-w-[180px]">
 <div className="text-4xl">🇸🇬</div>
 <div className="text-center">
 <div className="font-semibold">Headquartered in</div>
 <div className="text-primary font-bold text-lg">Singapore</div>
 </div>
 </div>
 <div>
 <h2 className="text-2xl font-bold mb-3">Built in Singapore, deployed worldwide</h2>
 <p className="text-muted-foreground leading-relaxed">
 Fleetbase is headquartered in Singapore — one of the world&apos;s leading logistics and trade hubs. Our location gives us direct access to the complex, high-volume logistics markets of Southeast Asia, while our open-source model means our platform is deployed by operators in 40+ countries across every continent.
 </p>
 <p className="mt-3 text-muted-foreground leading-relaxed">
 Singapore&apos;s position as a global port and supply chain hub isn&apos;t just our address — it&apos;s our proving ground. Every feature we build is tested against the demands of one of the world&apos;s most sophisticated logistics ecosystems.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 md:py-20">
 <div className="container">
 <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
 <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
 <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
 </div>
 <div className="mx-auto max-w-2xl">
 <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
 Join the movement
 </h2>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 Whether you&apos;re a logistics operator looking for a better platform, a developer
 who wants to contribute, or a business exploring partnership — we&apos;d love to hear
 from you.
 </p>
 <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io" rel="nofollow">
 Start free trial <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Talk to us</Link>
 </Button>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
