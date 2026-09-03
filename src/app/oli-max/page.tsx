import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
 ArrowRight,
 CheckCircle2,
 Compass,
 CreditCard,
 ExternalLink,
 Factory,
 Flame,
 Globe2,
 MapPin,
 Package,
 Shield,
 Sparkles,
 Store,
 Truck,
 Wheat,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import './oli-max.css';

export const metadata: Metadata = {
 title: 'Oli Max — Bulk Supply Across Mongolia',
 description:
 'Oli Max is an open-source Storefront app deployed at scale in Ulaanbaatar, connecting Mongolian households to bulk goods direct from distributors.',
 keywords: [
 'Oli Max',
 'Techbase LLC',
 'Storefront app Mongolia',
 'Fleetbase Storefront case study',
 'bulk supply Ulaanbaatar',
 'food truck delivery app',
 ],
 openGraph: {
 title: 'Oli Max × Fleetbase',
 description:
 'How Techbase LLC built one of Mongolia\'s leading bulk-supply marketplaces on the open-source Fleetbase Storefront app.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Oli Max × Fleetbase`,
   description: `How Techbase LLC built one of Mongolia\'s leading bulk-supply marketplaces on the open-source Fleetbase Storefront app.`,
 },
 alternates: { canonical: 'https://fleetbase.io/oli-max' },
};

function PhoneFrame({
 src,
 alt,
 className = '',
}: {
 src: string;
 alt: string;
 className?: string;
}) {
 return (
 <div
 className={`relative mx-auto rounded-[1.75rem] border-4 border-[#1a1f2e] bg-[#0a0e18] shadow-[0_30px_80px_-20px_rgba(229,71,31,0.4)] overflow-hidden ${className}`}
 style={{ width: 240, height: 480 }}
 >
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1f2e] rounded-b-2xl z-10" />
 <Image src={src} alt={alt} fill className="object-cover object-top" sizes="240px" />
 </div>
 );
}

const productLines = [
 { icon: Wheat, label: 'Flour & rice' },
 { icon: Flame, label: 'Cooking oil' },
 { icon: Package, label: 'Bulk meat' },
 { icon: Store, label: 'Household staples' },
];

const stats = [
 { value: '2,000+', label: 'Orders / month' },
 { value: '8+', label: 'Distributor partnerships' },
 { value: '20+', label: 'Active food trucks (moving shops)' },
 { value: '100%', label: 'Built on Fleetbase' },
];

const stackParts = [
 {
 icon: Store,
 title: 'Storefront — open-source customer app',
 description:
 'A white-label Storefront fork that ships branded as Oli Max on iOS and Android. Catalog, search, cart, and checkout are all driven by the Storefront API.',
 docs: '/docs/storefront/app/overview',
 },
 {
 icon: Truck,
 title: 'Fleet-Ops — dispatch & delivery',
 description:
 'Every order placed in Oli Max creates a dispatchable job in Fleet-Ops. Drivers run Navigator on the road; dispatchers oversee the live map from the Console.',
 docs: '/docs/fleet-ops',
 },
 {
 icon: CreditCard,
 title: 'QPay — local payment rails',
 description:
 'Native QPay integration via the Fleetbase payment gateway driver — Mongolia\'s most-used mobile-first checkout, no Western card friction.',
 docs: '/docs/ledger/payments/gateways/overview',
 },
 {
 icon: Compass,
 title: 'Food-truck mode — moving shops',
 description:
 'A custom Storefront extension layered on top: vendor inventory tied to live vehicle position, customers see what\'s in range right now.',
 docs: '/docs/storefront',
 },
];

export default function OliMaxPage() {
 return (
 <div className="oli-max-page flex flex-col text-[var(--oli-fg)]">
 {/* ── Hero ────────────────────────────────────────────────────── */}
 <section className="oli-hero relative overflow-hidden bg-[var(--oli-orange)]">
 {/* Subtle dark fade only at the bottom 25% to anchor the hero — top stays
     full solid brand orange. */}
 <div
 className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 -z-10 bg-gradient-to-t from-black/35 to-transparent"
 aria-hidden
 />

 <div className="container relative pt-24 md:pt-28 pb-20 md:pb-28">
 <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
 <div className="flex flex-col gap-7 max-w-2xl">
 <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
 <span className="size-1.5 rounded-full bg-[var(--oli-gold)]" />
 Customer Story · Mongolia · Moving Shop
 </div>
 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[0.95]">
 Oli Max delivers Mongolia&apos;s bulk supply chain — on{' '}
 <span className="text-[var(--oli-gold)]">Fleetbase Storefront.</span>
 </h1>
 <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
 Restaurants, vendors, and households across Ulaanbaatar order rice, flour,
 oil, and bulk meat directly from distributors and factories — at the best
 prices in the country. The whole operation runs on a forked Storefront app,
 dispatched through Fleet-Ops.
 </p>
 <div className="flex flex-wrap gap-4">
 <Button
 size="lg"
 asChild
 className="bg-[var(--oli-gold)] text-[var(--oli-deep)] hover:bg-[var(--oli-gold)]/90 font-semibold shadow-lg"
 >
 <Link href="https://www.oli.mn" target="_blank" rel="noopener noreferrer">
 Visit Oli Max <ExternalLink className="ml-2 size-4" />
 </Link>
 </Button>
 <Button
 size="lg"
 variant="outline"
 asChild
 className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
 >
 <Link href="/platform/storefront">
 Explore Storefront <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 </div>
 </div>

 {/* Phone cluster */}
 <div className="relative h-[520px] hidden lg:block">
 <div className="absolute right-0 top-0 rotate-[6deg]">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-product-screen.webp"
 alt="Oli Max — product detail"
 />
 </div>
 <div className="absolute left-0 top-12 -rotate-[8deg]">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-home-screen.webp"
 alt="Oli Max — branded login & home"
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── About Oli Max / The market ─────────────────────────────── */}
 <section className="bg-[var(--oli-bg)] py-20 md:py-28">
 <div className="container">
 <div className="grid lg:grid-cols-2 gap-16 items-start">
 <div className="flex flex-col gap-6">
 <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--oli-orange)]/30 bg-[var(--oli-orange)]/10 px-3 py-1 text-xs font-medium text-[var(--oli-orange)]">
 <Globe2 className="size-3.5" />
 Built in Ulaanbaatar
 </div>
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
 Direct from the factory floor.
 <span className="text-[var(--oli-orange)]"> No middlemen.</span>
 </h2>
 <p className="text-lg leading-relaxed text-[var(--oli-fg-muted)]">
 Oli Max is operated by <strong className="text-[var(--oli-fg)]">Techbase LLC</strong>,
 a logistics-and-tech company based in Ulaanbaatar, Mongolia. The product
 simplifies a layer of the local economy that historically depended on stacks
 of resellers between producer and customer.
 </p>
 <p className="text-lg leading-relaxed text-[var(--oli-fg-muted)]">
 By holding direct partnerships with distributors and factories, Oli Max
 lets restaurants, market vendors, and households buy bulk staples at
 wholesale-grade pricing — through a single mobile app, with delivery to
 their door.
 </p>

 <div className="grid grid-cols-2 gap-3 pt-2">
 {productLines.map((p) => (
 <div
 key={p.label}
 className="flex items-center gap-3 rounded-xl border border-[var(--oli-border)] bg-[var(--oli-card)] p-4"
 >
 <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--oli-orange)]/15">
 <p.icon className="size-4 text-[var(--oli-orange)]" />
 </div>
 <span className="text-sm font-medium">{p.label}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Right: vendor catalog phone */}
 <div className="grid grid-cols-2 gap-6 justify-items-center">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-vendor-catalog-screen.webp"
 alt="Oli Max — vendor catalog with featured suppliers"
 className="mt-12"
 />
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-vendor-catalog-screen2.webp"
 alt="Oli Max — vendor & product browsing"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ── The product walkthrough ────────────────────────────────── */}
 <section className="oli-band-dark py-20 md:py-28">
 <div className="container">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 rounded-full border border-[var(--oli-gold)]/40 bg-[var(--oli-gold)]/10 px-3 py-1 text-xs font-medium text-[var(--oli-gold)] mb-4">
 <Sparkles className="size-3.5" />
 The Customer Experience
 </div>
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
 An app that knows what you came for.
 </h2>
 <p className="mt-4 text-lg text-[var(--oli-fg-muted)] leading-relaxed">
 From login to reorder, every screen is tuned for the single purpose of buying
 bulk staples — fast.
 </p>
 </div>

 <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
 <div className="flex flex-col items-center gap-4">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-truck-catalog-screen.webp"
 alt="Oli Max — moving-shop truck catalog"
 />
 <div className="text-center max-w-[240px]">
 <p className="font-semibold text-base">Browse by truck or vendor</p>
 <p className="mt-1 text-sm text-[var(--oli-fg-muted)] leading-snug">
 See every active distributor and food truck near you, with live inventory.
 </p>
 </div>
 </div>
 <div className="flex flex-col items-center gap-4">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-checkout-screen.webp"
 alt="Oli Max — checkout"
 />
 <div className="text-center max-w-[240px]">
 <p className="font-semibold text-base">Frictionless checkout</p>
 <p className="mt-1 text-sm text-[var(--oli-fg-muted)] leading-snug">
 Saved addresses, vehicle dispatch options, scheduled or on-demand delivery.
 </p>
 </div>
 </div>
 <div className="flex flex-col items-center gap-4">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-order-history-screen.webp"
 alt="Oli Max — order history"
 />
 <div className="text-center max-w-[240px]">
 <p className="font-semibold text-base">Reorder in two taps</p>
 <p className="mt-1 text-sm text-[var(--oli-fg-muted)] leading-snug">
 Restaurant operators stock the same staples weekly — order history makes
 reordering trivial.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Food Truck Mode (highlight feature) ────────────────────── */}
 <section className="relative overflow-hidden bg-[var(--oli-orange)] py-20 md:py-28">
 <div className="container">
 <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
 <div className="grid grid-cols-2 gap-6 justify-items-center order-2 lg:order-1">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-food-truck-screen.webp"
 alt="Oli Max — food truck live map"
 />
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-food-truck-screen-2.webp"
 alt="Oli Max — food truck inventory in range"
 className="mt-10"
 />
 </div>

 <div className="flex flex-col gap-6 order-1 lg:order-2">
 <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
 <Truck className="size-3.5" />
 Food-Truck Mode · Moving Shops
 </div>
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
 The shop that comes to you.
 </h2>
 <p className="text-lg leading-relaxed text-[var(--oli-fg-muted)]">
 Oli Max pioneered a unique mode in Storefront: each food truck is a
 <em className="not-italic font-semibold text-[var(--oli-fg)]"> moving vendor</em>{' '}
 — its inventory and prices follow the vehicle. Customers see only what&apos;s
 within delivery range right now, not what&apos;s 30 km away.
 </p>
 <ul className="space-y-3">
 {[
 'Inventory tied to live vehicle position via Fleet-Ops',
 'Customers see in-range trucks first, with stock counts',
 'Drivers update inventory from Navigator as they sell',
 'Delivery range adjusts based on the truck\'s current location',
 ].map((pt) => (
 <li key={pt} className="flex items-start gap-3 text-sm">
 <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--oli-gold)]" />
 <span className="text-[var(--oli-fg-muted)]">{pt}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* ── How it's powered ───────────────────────────────────────── */}
 <section className="bg-[var(--oli-bg)] py-20 md:py-28">
 <div className="container">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
 What&apos;s under the hood.
 </h2>
 <p className="mt-4 text-lg text-[var(--oli-fg-muted)] leading-relaxed">
 Oli Max didn&apos;t build a logistics platform from scratch. They forked
 Fleetbase, branded it, integrated local payments, and shipped to the App Store.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-5">
 {stackParts.map((p) => (
 <div
 key={p.title}
 className="rounded-2xl border border-[var(--oli-border)] bg-[var(--oli-card)] p-7 transition-colors hover:border-[var(--oli-orange)]/40"
 >
 <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[var(--oli-orange)]/15">
 <p.icon className="size-5 text-[var(--oli-orange)]" />
 </div>
 <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
 <p className="text-sm leading-relaxed text-[var(--oli-fg-muted)] mb-4">
 {p.description}
 </p>
 <Link
 href={p.docs}
 className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--oli-orange)] hover:underline"
 >
 Read the docs <ArrowRight className="size-3.5" />
 </Link>
 </div>
 ))}
 </div>

 <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-qpay-integration.webp"
 alt="Oli Max — QPay payment integration"
 />
 <div>
 <h3 className="text-2xl font-semibold mb-3">QPay, baked in.</h3>
 <p className="text-[var(--oli-fg-muted)] leading-relaxed">
 Mongolia&apos;s mobile-first payment rail is the default checkout. Implemented
 once as a Fleetbase Ledger payment-gateway driver, it&apos;s reusable by any
 other Storefront deployment in the country — open source for the community.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ── Stats ──────────────────────────────────────────────────── */}
 <section className="oli-band-dark py-16 md:py-20">
 <div className="container">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {stats.map((s) => (
 <div key={s.label} className="text-center">
 <div className="text-3xl md:text-4xl font-bold text-[var(--oli-gold)]">
 {s.value}
 </div>
 <div className="mt-1 text-sm text-[var(--oli-fg-muted)]">{s.label}</div>
 </div>
 ))}
 </div>
 <p className="mt-8 text-center text-xs text-[var(--oli-fg-muted)]">
 Figures provided by Techbase LLC, May 2026.
 </p>
 </div>
 </section>

 {/* ── The partnership ────────────────────────────────────────── */}
 <section className="bg-[var(--oli-bg)] py-20 md:py-28">
 <div className="container">
 <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
 <div className="flex flex-col gap-6">
 <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--oli-gold)]/40 bg-[var(--oli-gold)]/10 px-3 py-1 text-xs font-medium text-[var(--oli-gold)]">
 <MapPin className="size-3.5" />
 Techbase × Fleetbase
 </div>
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
 A partnership, not a vendor relationship.
 </h2>
 <p className="text-lg leading-relaxed text-[var(--oli-fg-muted)]">
 Techbase LLC operates Oli Max as a flagship deployment of the open-source
 Fleetbase Storefront app — and contributes back. Mongolian-market payment
 drivers, the food-truck inventory model, and several Fleet-Ops improvements
 originated in production at Oli Max before landing upstream.
 </p>
 <p className="text-lg leading-relaxed text-[var(--oli-fg-muted)]">
 We work directly with the Techbase engineering team on roadmap items that
 affect the local logistics market — and they ship our changes to thousands
 of operators across Ulaanbaatar.
 </p>
 <div className="grid grid-cols-2 gap-3 pt-2">
 <div className="rounded-xl border border-[var(--oli-border)] bg-[var(--oli-card)] p-4">
 <Factory className="size-5 text-[var(--oli-orange)] mb-2" />
 <p className="text-sm font-semibold">Direct distributor partnerships</p>
 <p className="mt-1 text-xs text-[var(--oli-fg-muted)] leading-snug">
 8+ producers and distributors integrated at the supply layer
 </p>
 </div>
 <div className="rounded-xl border border-[var(--oli-border)] bg-[var(--oli-card)] p-4">
 <Shield className="size-5 text-[var(--oli-orange)] mb-2" />
 <p className="text-sm font-semibold">Open-source upstream</p>
 <p className="mt-1 text-xs text-[var(--oli-fg-muted)] leading-snug">
 Improvements ship to the wider Fleetbase community
 </p>
 </div>
 </div>
 </div>

 <div className="flex flex-col items-center gap-6">
 <PhoneFrame
 src="/images/screenshots/storefront-app/oli-max/oli-max-account-screen.webp"
 alt="Oli Max — account screen"
 />
 <p className="text-sm text-[var(--oli-fg-muted)] text-center max-w-xs">
 Fully white-labelled. App Store-ready. Same Storefront source as every
 other Fleetbase deployment.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ── CTA ────────────────────────────────────────────────────── */}
 <section className="relative overflow-hidden bg-[var(--oli-orange)] py-20 md:py-28">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-balance leading-[1.05]">
 Want to build the next Oli Max for your market?
 </h2>
 <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
 Storefront is open-source under AGPL-3.0. Fork it, brand it, ship it — or
 work with our team to set up, configure, and publish a fully branded
 customer app for your operation.
 </p>
 <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
 <Button
 size="lg"
 asChild
 className="bg-[var(--oli-gold)] text-[var(--oli-deep)] hover:bg-[var(--oli-gold)]/90 font-semibold shadow-lg"
 >
 <Link href="/services/storefront-publishing">
 Storefront Publishing Service <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button
 size="lg"
 variant="outline"
 asChild
 className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
 >
 <Link href="https://cal.com/shivthakker/enquiry">
 Talk to us
 </Link>
 </Button>
 </div>
 <p className="mt-8 text-xs text-white/70">
 Oli Max is operated by Techbase LLC, Ulaanbaatar, Mongolia. Independent
 deployment. Not affiliated with Fleetbase Inc., other than as an
 open-source partner.
 </p>
 </div>
 </div>
 </section>
 </div>
 );
}
