'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArrowRight,
  Navigation,
  Package,
  Camera,
  Zap,
  WifiOff,
  MessageSquare,
  BarChart3,
  Bell,
  Store,
  LayoutGrid,
  ShoppingCart,
  MapPin,
  ClipboardList,
  User,
  Star,
  BellRing,
  Smartphone,
  Code2,
  Plug,
  CheckCircle2,
  ShoppingBag,
} from 'lucide-react';
import { FaGithub, FaApple, FaGooglePlay } from 'react-icons/fa';

const navigatorFeatures = [
  { icon: Navigation, title: 'Turn-by-Turn Navigation', desc: 'Integrated maps with optimised routing guide drivers to every stop efficiently.' },
  { icon: Package, title: 'Order Management', desc: 'View assigned orders, stop sequences, and delivery details in a driver-friendly interface.' },
  { icon: Camera, title: 'Proof of Delivery', desc: 'Capture photo, signature, barcode, and QR code proof of delivery at every stop.' },
  { icon: Zap, title: 'Real-Time Sync', desc: 'Live order updates, dispatch notifications, and status changes sync instantly via SocketCluster.' },
  { icon: WifiOff, title: 'Offline Support', desc: 'Continue working in areas with poor connectivity. Data syncs automatically when back online.' },
  { icon: MessageSquare, title: 'In-App Messaging', desc: 'Communicate with dispatch and customers directly from the app without switching tools.' },
  { icon: BarChart3, title: 'Activity Tracking', desc: 'Automatic tracking of driver hours, distance, stops completed, and performance metrics.' },
  { icon: Bell, title: 'Push Notifications', desc: 'Instant alerts for new assignments, order changes, and customer messages.' },
];

const storefrontFeatures = [
  { icon: Store, title: 'Multi-Store Browsing', desc: 'Customers discover and browse multiple stores within a delivery network from one app.' },
  { icon: LayoutGrid, title: 'Product Catalog', desc: 'Rich product listings with images, descriptions, variants, modifiers, and pricing.' },
  { icon: ShoppingCart, title: 'Cart & Checkout', desc: 'Smooth cart management and checkout flow with multiple payment method support.' },
  { icon: MapPin, title: 'Live Order Tracking', desc: 'Real-time map tracking showing driver location and ETA from dispatch to delivery.' },
  { icon: ClipboardList, title: 'Order History', desc: 'Full order history with reorder functionality and detailed receipts.' },
  { icon: User, title: 'Customer Accounts', desc: 'Saved addresses, payment methods, and preferences for a seamless repeat experience.' },
  { icon: Star, title: 'Ratings & Reviews', desc: 'Customers can rate deliveries and leave feedback to help improve service quality.' },
  { icon: BellRing, title: 'Status Notifications', desc: 'Push notifications at every order milestone keep customers informed and reduce support queries.' },
];

const techStack = [
  { icon: Smartphone, name: 'React Native', desc: 'Cross-platform native apps from a single codebase' },
  { icon: Zap, name: 'Expo', desc: 'Managed workflow for fast development and deployment' },
  { icon: Code2, name: 'TypeScript', desc: 'Type-safe code for reliability and maintainability' },
  { icon: Plug, name: 'Fleetbase API', desc: 'REST API and SocketCluster channels for all data' },
];

const faqs = [
  {
    q: 'Are the Fleetbase mobile apps free to use?',
    a: 'Yes. Both Navigator and Storefront mobile apps are fully open-source and free to use. You can download them from the App Store and Google Play, or build and deploy your own branded version from the source code on GitHub.',
  },
  {
    q: 'Can I white-label the Navigator or Storefront app?',
    a: 'Absolutely. Both apps are open-source under AGPL-3.0. You can fork the repositories, replace the branding, customise the UI, add features, and publish your own branded app to the App Store and Google Play. If you need to keep your modifications proprietary, a commercial licence is available.',
  },
  {
    q: 'What technology are the apps built with?',
    a: 'Both apps are built with React Native and Expo, enabling a single codebase to run natively on both iOS and Android. They use the Fleetbase REST API and SocketCluster channels for real-time data, and support offline-first operation for areas with poor connectivity.',
  },
  {
    q: 'Can I build my own custom app on top of Fleetbase?',
    a: 'Yes. The Fleetbase API is fully documented and open. You can build any mobile or web application on top of Fleetbase using any technology stack. The Navigator and Storefront apps serve as reference implementations showing exactly how to integrate with the platform.',
  },
  {
    q: 'Does Navigator support offline operation?',
    a: 'Yes. Navigator is designed for drivers who may operate in areas with limited connectivity. The app caches active orders and routes locally and syncs updates when connectivity is restored. Critical actions like completing stops and capturing proof of delivery work offline.',
  },
  {
    q: 'What is the difference between Navigator and the Storefront app?',
    a: 'Navigator is a driver-facing app for completing deliveries — it shows assigned orders, turn-by-turn navigation, stop management, and proof of delivery capture. The Storefront app is a customer-facing app for browsing stores, placing orders, and tracking deliveries in real time.',
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative mx-auto rounded-[1.75rem] border-4 border-foreground/20 bg-background shadow-2xl overflow-hidden"
      style={{ width: 220, height: 440 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/20 rounded-b-2xl z-10" />
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes="220px" />
    </div>
  );
}

export default function MobileAppsPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Mobile Apps</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Open-Source Mobile Apps,{' '}
              <span className="text-gradient">Ready to Deploy</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Fleetbase ships with two production-ready open-source mobile apps — Navigator for drivers and Storefront for customers. Use them as-is, white-label them as your own, or use them as the foundation for a fully custom app built on the Fleetbase API.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer">
                <Button size="lg"><FaGithub className="mr-2 h-4 w-4" />Navigator on GitHub</Button>
              </Link>
              <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline"><FaGithub className="mr-2 h-4 w-4" />Storefront on GitHub</Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="ghost">Build Your Own App</Button>
              </Link>
            </div>
            <div className="flex gap-12 justify-center mt-12">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-home-screen.webp"
                alt="Navigator app — driver dashboard home"
              />
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-home-screen.webp"
                alt="Storefront app — customer home (True Vegan deployment)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Apps Overview */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Apps. One Platform.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dedicated mobile experiences for both sides of every delivery — the driver completing it and the customer receiving it.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Navigation className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Navigator</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-3">The driver app. Built for the field.</p>
                <p className="text-sm text-muted-foreground mb-6">Navigator gives drivers everything they need to complete deliveries efficiently — assigned orders, optimised routing, proof of delivery capture, real-time dispatch communication, and offline support for areas with poor connectivity.</p>
                <div className="flex gap-3 flex-wrap mb-4">
                  <Link href="/services/navigator-publishing">
                    <Button size="sm">
                      Publish Branded Navigator <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline"><FaGithub className="mr-1.5 h-3.5 w-3.5" />Source</Button>
                  </Link>
                  <Link href="/docs/fleet-ops/navigator-app/quickstart">
                    <Button size="sm" variant="outline">Docs</Button>
                  </Link>
                  <Button size="sm" variant="outline"><FaApple className="mr-1.5 h-3.5 w-3.5" />App Store</Button>
                  <Button size="sm" variant="outline"><FaGooglePlay className="mr-1.5 h-3.5 w-3.5" />Google Play</Button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Storefront</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-3">The customer app. Built for conversion.</p>
                <p className="text-sm text-muted-foreground mb-6">The Storefront customer app lets shoppers browse stores, place orders, track deliveries in real time, and manage their account — all under your brand. It connects directly to your Fleetbase Storefront instance with zero additional backend work.</p>
                <div className="flex gap-3 flex-wrap mb-4">
                  <Link href="/services/storefront-publishing">
                    <Button size="sm">
                      Publish Branded Storefront <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline"><FaGithub className="mr-1.5 h-3.5 w-3.5" />Source</Button>
                  </Link>
                  <Link href="/docs/storefront/app/overview">
                    <Button size="sm" variant="outline">Docs</Button>
                  </Link>
                  <Button size="sm" variant="outline"><FaApple className="mr-1.5 h-3.5 w-3.5" />App Store</Button>
                  <Button size="sm" variant="outline"><FaGooglePlay className="mr-1.5 h-3.5 w-3.5" />Google Play</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigator Deep Dive */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Navigator App</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Give Your Drivers the Tools They Need to Succeed</h2>
              <p className="text-lg text-muted-foreground">Navigator is a purpose-built driver app that integrates directly with Fleet-Ops. From the moment a driver is dispatched to the moment a delivery is confirmed, Navigator handles the entire workflow — on iOS, Android, and even in areas with no signal.</p>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-orders-screen.webp"
                alt="Navigator app — driver orders queue"
              />
            </div>
          </div>
          <div className="bg-border rounded-xl overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {navigatorFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-card p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h4 className="font-semibold text-sm mb-2">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Storefront App Deep Dive */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center order-last md:order-first">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-products-screen.webp"
                alt="Storefront app — product catalog (True Vegan deployment)"
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Storefront App</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Customer App That Drives Repeat Business</h2>
              <p className="text-lg text-muted-foreground">The Storefront customer app delivers a polished, branded shopping and delivery experience that keeps customers coming back. Real-time order tracking, seamless checkout, and push notifications at every step create the kind of experience customers expect from leading delivery platforms — but under your brand, not theirs.</p>
            </div>
          </div>
          <div className="bg-border rounded-xl overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {storefrontFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-card p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h4 className="font-semibold text-sm mb-2">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Customers */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
              <span className="text-primary">●</span>
              <span className="ml-2">Real Customers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Branded apps live in the App Store today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Two production deployments of the open-source Storefront app — one a Mongolian
              bulk-supply marketplace, the other a vegan restaurant in Florida. Same codebase,
              different brands, different markets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Oli Max */}
            <Link
              href="/oli-max"
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-orange-500 to-red-700">
                <Image
                  src="/images/screenshots/storefront-app/oli-max/oli-max-home-screen.webp"
                  alt="Oli Max — branded Storefront app for Mongolian bulk supply"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top p-8 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                  <MapPin className="size-3.5" />
                  <span>Ulaanbaatar, Mongolia</span>
                  <span className="text-border">·</span>
                  <span>Bulk Supply Marketplace</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Oli Max</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Restaurants, vendors, and households across Ulaanbaatar order rice, flour,
                  oil, and bulk meat directly from distributors — through a branded Storefront
                  app with food-truck mode and QPay checkout.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                  Read the case study <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            {/* True Vegan */}
            <Link
              href="/true-vegan"
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <Image
                  src="/images/screenshots/storefront-app/true-vegan/true-vegan-home-screen.webp"
                  alt="True Vegan — branded Storefront app for plant-based restaurant"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top p-8 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                  <MapPin className="size-3.5" />
                  <span>Delray Beach, FL</span>
                  <span className="text-border">·</span>
                  <span>Restaurant</span>
                </div>
                <h3 className="text-xl font-bold mb-2">True Vegan</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Chef Rahein&apos;s plant-based restaurant runs pickup, delivery, and in-store
                  ordering through a branded Storefront app with Stripe checkout and Fleet-Ops
                  delivery dispatch.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                  Read the case study <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services/storefront-publishing"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Want a branded Storefront app like these?{' '}
              <span className="text-primary underline underline-offset-4">
                Storefront Publishing Service →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Build Your Own */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Custom App Development</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Own App on the Fleetbase API</h2>
              <p className="text-lg text-muted-foreground mb-8">Navigator and Storefront are just the beginning. The Fleetbase API is fully open and documented, enabling you to build any mobile experience you can imagine — custom driver apps, field service apps, customer portals, or entirely new logistics products. The existing apps are your reference implementation.</p>
              <div className="space-y-3 mb-8">
                {[
                  'Full REST API with 50+ endpoints across all resources',
                  'Real-time SocketCluster channels for live data',
                  'Webhook events for every platform action',
                  'React Native reference apps to accelerate development',
                  'Comprehensive API documentation and Postman collection',
                  'Active developer community and open-source codebase',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="/developers/api"><Button>View API Reference</Button></Link>
                <Link href="/platform/developer-console"><Button variant="outline">Developer Console</Button></Link>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src="/images/screenshots/storefront-app/oli-max/oli-max-food-truck-screen.webp"
                alt="Storefront app — custom food-truck mode (Oli Max deployment in Mongolia)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Modern, Open Technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Both apps share the same technology stack, making it easy for any React Native developer to customise, extend, or build from scratch.</p>
          </div>
          <div className="bg-border rounded-xl overflow-hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="bg-card p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about Fleetbase mobile apps.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="font-semibold text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-2xl border bg-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Drivers and Customers on Mobile Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Deploy Navigator and Storefront as-is, white-label them as your own, or build a completely custom app on the Fleetbase API.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg"><FaGithub className="mr-2 h-4 w-4" />Get Navigator</Button>
                </Link>
                <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline"><FaGithub className="mr-2 h-4 w-4" />Get Storefront App</Button>
                </Link>
                <Link href="/developers/api">
                  <Button size="lg" variant="ghost">Build Custom App</Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">100% open-source · AGPL-3.0 · iOS & Android · Free to use and white-label</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
