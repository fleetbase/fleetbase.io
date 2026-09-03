import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, Code2, Users, Shield, GitBranch, BookOpen, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/company/open-source' },
 title: 'Open Source Mission',
 description:
 'Fleetbase is fully open-source under AGPL-3.0. Why we chose it, what it means for your deployment, how to self-host and how to contribute.',
 keywords: ['fleetbase open source', 'open source logistics platform', 'AGPL logistics software', 'self-hosted fleet management'],
 openGraph: {
 title: 'Open Source Mission | Fleetbase',
 description: 'Fully open-source logistics infrastructure under AGPL-3.0. Deploy anywhere, own everything.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Open Source Mission | Fleetbase`,
   description: `Fully open-source logistics infrastructure under AGPL-3.0. Deploy anywhere, own everything.`,
 },
};

const reasons = [
 {
 icon: Shield,
 title: 'No vendor lock-in',
 description:
 'When your logistics platform is open-source, you are never at the mercy of a vendor\'s pricing decisions, acquisition, or shutdown. You own the code and can maintain it independently forever.',
 },
 {
 icon: Code2,
 title: 'Full transparency',
 description:
 'Every line of code that processes your orders, tracks your drivers, and stores your data is publicly auditable. No hidden telemetry, no undisclosed data sharing, no black boxes.',
 },
 {
 icon: GitBranch,
 title: 'Extend without limits',
 description:
 'Because Fleetbase is open-source, you can modify any part of the platform to fit your exact operation — without waiting for a vendor roadmap or paying for custom development.',
 },
 {
 icon: Users,
 title: 'Community-driven quality',
 description:
 'Open-source software is reviewed, tested, and improved by thousands of developers worldwide. The community finds bugs faster, suggests better solutions, and builds extensions that benefit everyone.',
 },
 {
 icon: Database,
 title: 'Data sovereignty',
 description:
 'Self-host Fleetbase on your own servers, in your own cloud account, or in any jurisdiction you choose. Your logistics data never has to leave your control.',
 },
 {
 icon: BookOpen,
 title: 'Sustainable by design',
 description:
 'Open-source projects outlast any single company. Even if Fleetbase as a business changed, the platform would continue to exist, be maintained, and be deployable by the community.',
 },
];

const licenceDetails = [
 {
 title: 'AGPL-3.0 — Open Source',
 description:
 'Fleetbase is released under the GNU Affero General Public License v3.0. You can use, modify, and self-host it freely. The AGPL network copyleft clause means that if you deploy a modified version over a network — including as a SaaS product — you must make those modifications available under AGPL-3.0. Internal use with no external users has no such obligation.',
 suitable: ['Internal deployments for your own operations', 'Non-commercial and academic use', 'Open-source projects and contributions', 'Operators happy to share modifications with the community'],
 },
 {
 title: 'Commercial Licence',
 description:
 'The commercial licence removes all AGPL copyleft obligations. If you want to make proprietary modifications, build a SaaS product on Fleetbase without disclosing your changes, or distribute customised versions to customers, a commercial licence is required. Your IP stays entirely yours.',
 suitable: ['Proprietary modifications kept private', 'SaaS products without open-source disclosure', 'OEM and white-label distribution', 'Managed service providers and enterprise deployments'],
 },
];

export default function OpenSourcePage() {
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Open Source Mission
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 The code is yours.{' '}
 <span className="text-primary">Always.</span>
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Fleetbase is fully open-source. Every line of code that powers your dispatch, tracks your
 drivers, and processes your orders is publicly available on GitHub — auditable, forkable,
 and deployable on your own infrastructure.
 </p>
 <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
 We chose open source not as a marketing strategy, but as a fundamental commitment to the
 operators and developers who depend on this platform. Logistics infrastructure is too
 critical to be locked inside a vendor&apos;s closed system.
 </p>
 <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
 <Github className="mr-2 size-4" />
 View on GitHub
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/developers">
 Developer docs <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="border-y bg-muted/20 py-12">
 <div className="container">
 <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
 {[
 { value: 'AGPL-3.0', label: 'Platform licence' },
 { value: 'Commercial', label: 'Proprietary option available' },
 { value: '100%', label: 'Source code public' },
 { value: 'Self-host', label: 'Deploy anywhere' },
 ].map((stat) => (
 <div key={stat.label} className="text-center">
 <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
 <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Open Source */}
 <section className="py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why open source matters for logistics</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 Logistics is critical infrastructure. The software that runs it should be transparent,
 trustworthy, and owned by the businesses that depend on it.
 </p>
 </div>
 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
 {reasons.map((reason) => (
 <div key={reason.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <reason.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Licensing */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Licensing explained</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 Fleetbase is released under AGPL-3.0. A commercial licence is available for businesses
 that need to keep their modifications proprietary. Here is what each option means.
 </p>
 </div>
 <div className="space-y-6">
 {licenceDetails.map((licence) => (
 <div key={licence.title} className="rounded-xl border bg-card p-8">
 <h3 className="mb-3 text-xl font-semibold">{licence.title}</h3>
 <p className="mb-4 leading-relaxed text-muted-foreground">{licence.description}</p>
 <div>
 <div className="mb-2 text-sm font-medium">Suitable for:</div>
 <div className="flex flex-wrap gap-2">
 {licence.suitable.map((use) => (
 <span key={use} className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
 {use}
 </span>
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <Button asChild>
 <Link href="/licensing">
 Full licensing details <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Contribute */}
 <section className="border-t py-16 md:py-20">
 <div className="container">
 <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
 <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
 <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
 </div>
 <div className="mx-auto max-w-2xl">
 <Github className="mx-auto mb-4 size-10 text-primary" />
 <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
 Contribute to Fleetbase
 </h2>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 Fleetbase is built by a global community of developers, logistics operators, and
 contributors. Whether you want to fix a bug, build an extension, improve documentation,
 or suggest a feature — your contribution is welcome.
 </p>
 <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
 <Github className="mr-2 size-4" />
 View on GitHub
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://discord.com/invite/HnTqQ6zAVn">Join the community</Link>
 </Button>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
