import type { Metadata } from 'next';
import Link from 'next/link';
import {
 Brain, Zap, Route, MessageSquare, BarChart3,
 Clock, Shield, ArrowRight, Sparkles, Bot,
 Eye, Layers, GitBranch, Cpu, Star, Check, X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import RelatedPages from '@/components/seo/related-pages';

const AI_REPO = 'https://github.com/fleetbase/ai';

export const metadata: Metadata = {
 title: 'Open-Source Logistics AI for Fleet & Delivery',
 description:
 'Open-source AI for logistics: natural-language ordering, order insights and AI route optimization, powered by OpenAI or Claude.',
 keywords: [
 'logistics AI',
 'AI fleet management',
 'open source logistics AI',
 'AI dispatch software',
 'AI route optimization',
 'logistics automation AI',
 'AI delivery management',
 'generative AI logistics',
 'AI TMS software',
 'AI supply chain platform',
 'open source AI logistics platform',
 'AI last mile delivery',
 'logistics AI assistant',
 'fleet AI software',
 ],
 alternates: { canonical: 'https://fleetbase.io/platform/ai' },
 openGraph: {
 title: 'Open Source Logistics AI | Fleetbase',
 description:
 'The open-source AI for logistics — live now. Natural-language order creation, order insights, route AI, and operational queries, on infrastructure you own.',
 images: [{ url: '/images/og-ai.png', width: 1200, height: 630 }],
 },
 twitter: {
   card: 'summary_large_image',
   title: `Open Source Logistics AI | Fleetbase`,
   description: `The open-source AI for logistics — live now. Natural-language order creation, order insights, and route AI, on infrastructure you own.`,
 },
};

// ─── AI Capabilities (live — shipped in Fleetbase v0.7.49 / v0.7.51) ───────────
const AI_CAPABILITIES = [
 {
 icon: Bot,
 title: 'Global AI Prompt',
 description:
 'A global AI prompt in your console header — or a keyboard shortcut away. Ask about your operation, get answers, and take action in plain English, with persistent chat history you can revisit.',
 keywords: ['logistics AI assistant', 'conversational AI fleet', 'natural language logistics'],
 },
 {
 icon: MessageSquare,
 title: 'Natural-Language Order Creation',
 description:
 'Describe an order in plain English and Fleetbase AI drafts it — then shows a preview to confirm before anything is created. No forms, no clicks through five screens.',
 keywords: ['AI order creation', 'natural language dispatch', 'AI automation logistics'],
 },
 {
 icon: Eye,
 title: 'Order Insights & Context',
 description:
 'Ask about any order and get instant context — status, route, assignments, and what needs attention — pulled live from your operation and rendered right in the chat.',
 keywords: ['AI order insights', 'logistics analytics AI', 'AI monitoring logistics'],
 },
 {
 icon: BarChart3,
 title: 'Operational Queries & Reports',
 description:
 'Query your live data conversationally — resource search, operational questions, and reports — without building a dashboard first. Just ask.',
 keywords: ['logistics analytics AI', 'AI insights fleet management'],
 },
 {
 icon: Route,
 title: 'AI Route Optimization',
 description:
 'AI-assisted routing and dispatch that accounts for your constraints, surfaced directly inside Fleet-Ops rather than in a separate tool.',
 keywords: ['AI route optimization', 'dynamic routing AI', 'last-mile AI'],
 },
 {
 icon: Cpu,
 title: 'Bring Your Own Model',
 description:
 'Model-agnostic by design. Connect OpenAI, Claude (Anthropic), or a local provider for development and testing — and swap providers whenever you like.',
 keywords: ['model agnostic AI', 'self-hosted AI logistics', 'OpenAI Claude logistics'],
 },
 {
 icon: Shield,
 title: 'Preview & Full Audit Trail',
 description:
 'Every AI action previews before it applies, and every task, step, and session is recorded — so AI activity is auditable and reversible, never a black box.',
 keywords: ['auditable AI', 'AI compliance logistics', 'explainable AI logistics'],
 },
 {
 icon: Layers,
 title: 'Extensible Capability Framework',
 description:
 'Any Fleetbase extension can register AI-readable context plus preview-only and confirmed-apply actions — so AI reaches across the entire platform, not just one module.',
 keywords: ['AI extensions', 'open source AI framework', 'AI automation platform'],
 },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
 {
 step: '01',
 icon: Eye,
 title: 'AI Sees Your Operation',
 description:
 'Modules register AI-readable context — orders, drivers, vehicles, routes, and help docs — so Fleetbase AI works from your live operational data, not generic guesses.',
 },
 {
 step: '02',
 icon: Brain,
 title: 'You Ask in Plain English',
 description:
 'Open the AI prompt from the console header and ask a question or describe an action. Multi-turn chat sessions keep the context so follow-ups just work.',
 },
 {
 step: '03',
 icon: Zap,
 title: 'AI Acts in the Platform',
 description:
 'Fleetbase AI doesn\'t just reply — it can draft orders, run queries, and trigger actions directly inside Fleetbase. Every action previews first and applies only on your confirm.',
 },
 {
 step: '04',
 icon: Layers,
 title: 'You Stay in Control',
 description:
 'Every AI task, step, and session is recorded for audit. Admins gate providers and configuration, and disabled AI is fully blocked server-side. Open source means you can read every line.',
 },
];

// ─── Why Open Source AI ───────────────────────────────────────────────────────
const OPEN_SOURCE_ADVANTAGES = [
 {
 icon: GitBranch,
 title: 'No AI Black Box',
 description:
 'With closed-source logistics AI, you have no idea why a route was chosen or an action was taken. Fleetbase AI is open — read the module, see the capabilities, and audit every task it runs.',
 },
 {
 icon: Cpu,
 title: 'Run Your Own Models',
 description:
 'Connect your own LLM provider — Fleetbase AI is model-agnostic. Use OpenAI, Anthropic (Claude), or a local provider, and switch without re-platforming.',
 },
 {
 icon: Shield,
 title: 'Data Stays on Your Infrastructure',
 description:
 'Self-host Fleetbase and keep your logistics data on your own servers. Point the AI at the provider you trust instead of shipping sensitive shipment, customer, or driver data to a vendor\'s black box.',
 },
 {
 icon: Sparkles,
 title: 'Community-Driven Intelligence',
 description:
 'AI capabilities built in the open with the Fleetbase community — operators, developers, and researchers. New capabilities plug into the same framework and ship fast.',
 },
];

// ─── Use Cases ────────────────────────────────────────────────────────────────
const USE_CASES = [
 {
 role: 'Operations Manager',
 pain: 'Jumping between screens to answer "where\'s order #4021?" or "who\'s free right now?"',
 solution: 'Ask Fleetbase AI in plain English and get the answer — with full order context — in seconds.',
 },
 {
 role: 'Dispatcher',
 pain: 'Filling in long order forms for every incoming job, all day.',
 solution: 'Describe the order in plain English — AI drafts it and you confirm a preview before it is created.',
 },
 {
 role: 'Ops Lead / Analyst',
 pain: 'Digging through dashboards to understand how today is actually going.',
 solution: 'Ask "show me late orders today" or "which zones are behind" and get answers straight from live data.',
 },
 {
 role: 'Engineering / IT',
 pain: 'Wary of sending sensitive logistics data to a black-box AI vendor.',
 solution: 'Run OpenAI, Claude, or a local model; every action previews first and is fully audited; self-host the whole thing.',
 },
];

export default function LogisticsAIPage() {
 return (
 <div className="flex flex-col">
 {/* JSON-LD Schema */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'SoftwareApplication',
 name: 'Fleetbase Logistics AI',
 applicationCategory: 'BusinessApplication',
 operatingSystem: 'Web, Cloud, Self-Hosted',
 description:
 'Open-source AI for logistics operations. Natural-language order creation, order insights, route optimization, and operational queries — powered by OpenAI or Claude.',
 url: 'https://fleetbase.io/platform/ai',
 offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
 creator: {
 '@type': 'Organization',
 name: 'Fleetbase',
 url: 'https://fleetbase.io',
 },
 }),
 }}
 />

 {/* ── Hero ── */}
 <section className="section-padding relative overflow-hidden">
 {/* Background gradient */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
 <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

 <div className="container max-w-5xl mx-auto relative text-center">
 <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm mb-6">
 <span className="relative flex h-2 w-2">
 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
 <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
 </span>
 <span className="text-primary font-medium">The first open-source logistics AI — now live</span>
 </div>

 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-tight">
 The Open-Source{' '}
 <span className="text-primary">AI</span>{' '}
 for Logistics
 </h1>

 <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto text-balance">
 Fleetbase AI is the <strong className="text-foreground">first open-source AI for logistics</strong> — and it doesn&apos;t just surface insights, it <strong>acts</strong>. Ask your operation anything, create orders in plain English, and let AI take action inside your workflow.
 </p>

 <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
 No black-box AI. Bring your own model — OpenAI, Claude, or local. Every action previews before it applies and is fully audited. Open source and model-agnostic, so you stay in control of your intelligence.
 </p>

 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register" rel="nofollow">
 Try Fleetbase Free <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href={AI_REPO} target="_blank" rel="noopener noreferrer">
 View the AI module <Star className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 </div>

 <p className="text-xs text-muted-foreground mt-4">
 Live on Fleetbase Cloud and self-hosted — enable Fleetbase AI in your console. Shipped in v0.7.49.
 </p>
 </div>
 </section>

 {/* ── Demo ── */}
 <section className="pb-4 md:pb-8 -mt-6">
 <div className="container max-w-4xl mx-auto">
 <div className="rounded-2xl border bg-card overflow-hidden shadow-2xl shadow-primary/10">
 {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
 <video
 className="w-full h-auto block"
 src="/ai-demo.mp4"
 poster="/ai-demo-poster.jpg"
 autoPlay
 muted
 loop
 playsInline
 preload="metadata"
 aria-label="Fleetbase AI creating an order from a plain-English prompt inside the console"
 />
 </div>
 <p className="text-center text-sm text-muted-foreground mt-3">
 Fleetbase AI in the console — ask, preview, and create, in plain English. No other logistics platform ships open-source AI built in like this.
 </p>
 </div>
 </section>

 {/* ── The Problem with Logistics AI Today ── */}
 <section className="section-padding bg-muted/20">
 <div className="container max-w-5xl mx-auto">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> The Problem
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
 Logistics AI is broken — and you&apos;re paying for it
 </h2>
 <div className="space-y-4 text-muted-foreground">
 <p>
 Most &quot;AI-powered&quot; logistics platforms are black boxes. You get a recommendation with no explanation. Your data is sent to a third-party AI provider. You can&apos;t customise the models. And when the AI gets it wrong, you have no way to understand why.
 </p>
 <p>
 Closed-source AI also means vendor lock-in. The moment you rely on their AI, you&apos;re dependent on their pricing, their uptime, and their roadmap.
 </p>
 <p>
 Fleetbase AI is a different kind of logistics AI — open, auditable, and embedded directly into the operations platform. AI that acts inside your workflow, not in a separate dashboard you have to translate back into decisions.
 </p>
 </div>
 </div>
 <div className="space-y-4">
 {[
 { label: 'Black-box AI decisions', bad: true },
 { label: 'Data sent to third-party AI providers', bad: true },
 { label: 'AI insights in a separate dashboard', bad: true },
 { label: 'Vendor lock-in on AI models', bad: true },
 { label: 'No ability to customise or audit models', bad: true },
 { label: 'Per-seat pricing that penalises growth', bad: true },
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border bg-card">
 <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
 <X className="w-3 h-3 text-red-500" />
 </div>
 <span className="text-sm text-muted-foreground">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── How It Works ── */}
 <section className="section-padding">
 <div className="container max-w-5xl mx-auto">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> How it works
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 AI that acts inside your operations
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Fleetbase AI is not a reporting layer. It is embedded into the platform — seeing your live data, taking your instructions, and acting directly within your dispatch, fleet, and order workflows.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {HOW_IT_WORKS.map((step) => (
 <div key={step.step} className="relative">
 <div className="text-6xl font-black text-primary/5 absolute -top-4 -left-2 select-none">{step.step}</div>
 <div className="relative p-6 rounded-xl border bg-card h-full">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
 <step.icon className="w-5 h-5 text-primary" />
 </div>
 <h3 className="font-semibold mb-2">{step.title}</h3>
 <p className="text-sm text-muted-foreground">{step.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── AI Capabilities Grid ── */}
 <section className="section-padding bg-muted/20">
 <div className="container max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Capabilities
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 What Fleetbase AI does today
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Live capabilities, built into the platform and shipping in the open — from the in-console AI prompt to the framework that lets every extension plug in.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
 {AI_CAPABILITIES.map((cap) => (
 <Card key={cap.title} className="relative group hover:border-primary/50 transition-colors">
 <CardHeader className="pb-3">
 <div className="flex items-start justify-between mb-3">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
 <cap.icon className="w-5 h-5 text-primary" />
 </div>
 <span className="inline-flex items-center gap-1 text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-medium">
 <Check className="w-3 h-3" /> Live
 </span>
 </div>
 <CardTitle className="text-base leading-snug">{cap.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription className="text-sm leading-relaxed">
 {cap.description}
 </CardDescription>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* ── Use Cases by Role ── */}
 <section className="section-padding">
 <div className="container max-w-5xl mx-auto">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Use Cases
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 AI that solves real logistics problems
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Every capability maps to a specific pain point your team faces today.
 </p>
 </div>

 <div className="space-y-4">
 {USE_CASES.map((uc) => (
 <div key={uc.role} className="grid md:grid-cols-3 gap-4 p-6 rounded-xl border bg-card items-start">
 <div>
 <div className="text-xs font-medium text-primary uppercase tracking-widest mb-1">Role</div>
 <div className="font-semibold">{uc.role}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-red-500 uppercase tracking-widest mb-1">Today&apos;s Problem</div>
 <div className="text-sm text-muted-foreground">{uc.pain}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-green-500 uppercase tracking-widest mb-1">With Fleetbase AI</div>
 <div className="text-sm text-muted-foreground">{uc.solution}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Why Open Source AI ── */}
 <section className="section-padding bg-muted/20">
 <div className="container max-w-5xl mx-auto">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Why Open Source
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 Open source AI is a competitive advantage
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Closed-source logistics AI is a liability. Open-source AI is an asset you can build on, audit, and own.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6">
 {OPEN_SOURCE_ADVANTAGES.map((adv) => (
 <div key={adv.title} className="flex gap-4 p-6 rounded-xl border bg-card">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
 <adv.icon className="w-5 h-5 text-primary" />
 </div>
 <div>
 <h3 className="font-semibold mb-2">{adv.title}</h3>
 <p className="text-sm text-muted-foreground">{adv.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Comparison vs Closed AI ── */}
 <section className="section-padding">
 <div className="container max-w-4xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-4">
 Fleetbase AI vs. Closed-Source Logistics AI
 </h2>
 </div>
 <div className="overflow-x-auto rounded-xl border">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b bg-muted/30">
 <th className="text-left p-4 font-semibold">Feature</th>
 <th className="text-center p-4 font-semibold text-primary">Fleetbase AI</th>
 <th className="text-center p-4 font-semibold text-muted-foreground">Closed-Source AI</th>
 </tr>
 </thead>
 <tbody className="divide-y">
 {[
 ['Auditable AI decisions', true, false],
 ['Data stays on your infrastructure', true, false],
 ['Bring your own AI model', true, false],
 ['Preview before AI acts', true, false],
 ['Embedded in operations workflow', true, false],
 ['Open source codebase', true, false],
 ['No vendor lock-in', true, false],
 ['Community-driven development', true, false],
 ['Usage-based pricing', true, false],
 ['Works with self-hosted deployment', true, false],
 ].map(([feature, fb, closed]) => (
 <tr key={String(feature)} className="hover:bg-muted/10 transition-colors">
 <td className="p-4 text-muted-foreground">{String(feature)}</td>
 <td className="p-4 text-center">
 {fb ? (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500"><Check className="w-3.5 h-3.5" /></span>
 ) : (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500"><X className="w-3.5 h-3.5" /></span>
 )}
 </td>
 <td className="p-4 text-center">
 {closed ? (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500"><Check className="w-3.5 h-3.5" /></span>
 ) : (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500"><X className="w-3.5 h-3.5" /></span>
 )}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* ── CTA ── */}
 <section className="section-padding relative overflow-hidden bg-muted/20 border-t">
 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
 <div className="container max-w-3xl mx-auto text-center relative">
 <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm mb-6">
 <Sparkles className="w-3.5 h-3.5 text-primary" />
 <span className="text-primary font-medium">Available now</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
 Run AI on your logistics operation today
 </h2>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Start a free trial and turn on Fleetbase AI in the console, or dig into the open-source module on GitHub. Have a specific use case? Talk to our team.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register" rel="nofollow">
 Start Free — Try Fleetbase Now <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
 Book an AI Strategy Call
 </Link>
 </Button>
 </div>
 <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground flex-wrap">
 <Link href={AI_REPO} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <Star className="w-4 h-4" /> Star the AI repo
 </Link>
 <Link href="https://discord.com/invite/HnTqQ6zAVn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <MessageSquare className="w-4 h-4" /> Join Discord
 </Link>
 <Link href="/changelog" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <Clock className="w-4 h-4" /> View Changelog
 </Link>
 </div>
 </div>
 </section>
 <RelatedPages heading="Explore related" />
 </div>
 );
}
