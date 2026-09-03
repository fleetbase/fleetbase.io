import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, MessageSquare, BookOpen, Users, Code2, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/community' },
 title: 'Community',
 description:
 'Join thousands of logistics operators, developers and contributors on Discord, GitHub and our forums. Get help, share ideas, shape the platform.',
 keywords: ['fleetbase community', 'logistics software community', 'fleetbase discord', 'open source logistics community'],
 openGraph: {
 title: 'Community | Fleetbase',
 description: 'Join thousands of logistics operators and developers in the Fleetbase community.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Community | Fleetbase`,
   description: `Join thousands of logistics operators and developers in the Fleetbase community.`,
 },
};

const channels = [
 {
 icon: MessageSquare,
 title: 'Discord',
 description:
 'The most active Fleetbase community hub. Get help with your deployment, discuss features, share your extensions, and connect with other operators and developers in real-time.',
 cta: 'Join Discord',
 href: 'https://discord.com/invite/HnTqQ6zAVn',
 badge: '5,000+ members',
 },
 {
 icon: Github,
 title: 'GitHub',
 description:
 'Browse the source code, report bugs, submit pull requests, and follow the development roadmap. All Fleetbase development happens in the open on GitHub.',
 cta: 'View on GitHub',
 href: 'https://github.com/fleetbase/fleetbase',
 badge: 'Open source',
 },
 {
 icon: BookOpen,
 title: 'Developer Forums',
 description:
 'Long-form technical discussions, architecture questions, integration guides, and extension development help. Searchable and indexed — your question may already be answered.',
 cta: 'Browse forums',
 href: '/developers',
 badge: 'Technical discussions',
 },
 {
 icon: Rss,
 title: 'Blog & Updates',
 description:
 'Product updates, engineering deep-dives, logistics industry insights, and community spotlights. Stay up to date with what\'s happening in the Fleetbase ecosystem.',
 cta: 'Read the blog',
 href: '/blog',
 badge: 'Latest updates',
 },
];

const contributions = [
 {
 icon: Code2,
 title: 'Contribute code',
 description: 'Fix bugs, build features, and improve the platform. All skill levels welcome — from first-time contributors to experienced engineers.',
 },
 {
 icon: BookOpen,
 title: 'Improve documentation',
 description: 'Help other operators and developers by improving guides, adding examples, and fixing unclear documentation.',
 },
 {
 icon: Users,
 title: 'Help in Discord',
 description: 'Answer questions from other community members, share your deployment experience, and help newcomers get started.',
 },
 {
 icon: Github,
 title: 'Build extensions',
 description: 'Create and publish extensions to the Fleetbase marketplace. Add new integrations, order types, and capabilities that benefit the whole community.',
 },
];

export default function CommunityPage() {
 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding container">
 <div className="mx-auto max-w-3xl text-center">
 <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
 Community
 </div>
 <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
 Built by the community,{' '}
 <span className="text-primary">for the community.</span>
 </h1>
 <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
 Fleetbase is shaped by thousands of logistics operators, developers, and contributors
 worldwide. Join the conversation, get help with your deployment, and help build the future
 of open-source logistics.
 </p>
 <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
 <Button size="lg" asChild>
 <Link href="https://discord.com/invite/HnTqQ6zAVn" target="_blank" rel="noopener noreferrer">
 <MessageSquare className="mr-2 size-4" />
 Join Discord
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
 <Github className="mr-2 size-4" />
 GitHub
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Community Channels */}
 <section className="py-16 md:py-24">
 <div className="container">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Where to find us</h2>
 <p className="mt-3 text-lg text-muted-foreground">
 Multiple channels for different types of conversations.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-2">
 {channels.map((channel) => (
 <div key={channel.title} className="group rounded-xl border bg-card p-8">
 <div className="mb-4 flex items-center justify-between">
 <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
 <channel.icon className="size-5 text-primary" />
 </div>
 <span className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
 {channel.badge}
 </span>
 </div>
 <h3 className="mb-3 text-xl font-semibold">{channel.title}</h3>
 <p className="mb-6 leading-relaxed text-muted-foreground">{channel.description}</p>
 <Button variant="outline" asChild>
 <Link href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
 {channel.cta} <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* How to Contribute */}
 <section className="border-t py-16 md:py-24">
 <div className="container">
 <div className="mb-12">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How to contribute</h2>
 <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
 There are many ways to contribute to Fleetbase — you don&apos;t need to be a developer.
 </p>
 </div>
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
 {contributions.map((item) => (
 <div key={item.title} className="rounded-xl border bg-card p-6">
 <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
 <item.icon className="size-5 text-primary" />
 </div>
 <h3 className="mb-2 font-semibold">{item.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <Button asChild>
 <Link href="https://github.com/fleetbase/fleetbase/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
 Read the contribution guide <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
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
 Join 5,000+ community members
 </h2>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 Get help with your deployment, share your experience, and help shape the future of
 open-source logistics.
 </p>
 <Button size="lg" asChild>
 <Link href="https://discord.com/invite/HnTqQ6zAVn" target="_blank" rel="noopener noreferrer">
 <MessageSquare className="mr-2 size-4" />
 Join Discord now
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
