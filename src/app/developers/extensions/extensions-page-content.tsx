'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  LayoutDashboard,
  Palette,
  Plug,
  Server,
  Code2,
  Package,
  GitBranch,
  BookOpen,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CodeBlock } from '@/components/ui/code-block';

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXTENSION_TYPES = [
  {
    icon: LayoutDashboard,
    title: 'Full-Stack Extensions',
    desc: 'A complete Ember Engine frontend paired with a Laravel API backend. Adds new screens, navigation items, and data models to the console.',
    examples: ['Fleet-Ops', 'Storefront', 'Ledger', 'Pallet WMS'],
  },
  {
    icon: Server,
    title: 'Backend-Only Extensions',
    desc: 'A Laravel package that adds API endpoints, data models, background jobs, or integrations — without a custom UI.',
    examples: ['Payment gateway adapters', 'ERP sync jobs', 'Custom notification channels'],
  },
  {
    icon: Palette,
    title: 'UI Component Extensions',
    desc: 'Ember addons that contribute reusable UI components, widgets, or dashboard panels to existing extensions.',
    examples: ['Custom map overlays', 'Analytics widgets', 'Branded themes'],
  },
  {
    icon: Plug,
    title: 'Integration Extensions',
    desc: 'Extensions that bridge Fleetbase with third-party platforms — shipping carriers, ERPs, payment processors, and more.',
    examples: ['FedEx / DHL carrier', 'Shopify order sync', 'Stripe billing'],
  },
];

const BUILD_STEPS = [
  {
    step: '01',
    title: 'Install the CLI',
    code: 'npm install -g @fleetbase/cli',
    desc: 'The CLI scaffolds new extensions, manages dependencies, and handles publishing to the registry.',
  },
  {
    step: '02',
    title: 'Scaffold an Extension',
    code: 'flb new my-extension',
    desc: 'Generates the full structure: an Ember Engine for the frontend and a Laravel package for the backend, pre-wired together.',
  },
  {
    step: '03',
    title: 'Develop Locally',
    code: 'flb serve',
    desc: 'Start the development server. Your extension hot-reloads inside a local Fleetbase instance as you build.',
  },
  {
    step: '04',
    title: 'Publish to the Registry',
    code: 'flb publish',
    desc: 'Package and submit your extension to the Fleetbase Extension Registry. Once approved, it appears in the marketplace.',
  },
];

const CORE_FRAMEWORKS = [
  {
    name: 'fleetbase/ember-core',
    type: 'Frontend' as const,
    desc: "Provides foundational services, adapters, and utilities for initializing and managing your extension's Ember Engine. Handles authentication, routing integration, and cross-extension communication.",
    link: 'https://github.com/fleetbase/ember-core',
  },
  {
    name: 'fleetbase/ember-ui',
    type: 'Frontend' as const,
    desc: 'A suite of standardized UI components and styles that match the Fleetbase console aesthetic. Tables, modals, forms, maps, and more — all pre-built and ready to use.',
    link: 'https://github.com/fleetbase/ember-ui',
  },
  {
    name: 'fleetbase/core-api',
    type: 'Backend' as const,
    desc: 'The Laravel package that forms the backbone of every extension backend. Provides the composable REST API framework, shared models, authentication middleware, notifications, and the event system.',
    link: 'https://github.com/fleetbase/core-api',
  },
  {
    name: 'fleetbase/fleetbase-php',
    type: 'Backend' as const,
    desc: 'PHP SDK for interacting with the Fleetbase API from server-side applications and extension backends.',
    link: 'https://github.com/fleetbase/fleetbase-php',
  },
];

const REGISTRY_FEATURES = [
  'Dual Composer + npm package support',
  'extension.json validation on every submission',
  'Versioned releases with semantic versioning',
  'In-console marketplace for one-click installation',
  'Private registry support for self-hosted deployments',
  'Open source — self-host your own registry',
];

const ARCHITECTURE_FEATURES = [
  'Adds new navigation items and screens to the console',
  'Defines its own data models, API endpoints, and business logic',
  'Shares authentication, permissions, and core models with the platform',
  'Can communicate with and extend other installed extensions',
  'Packaged and distributed via the Fleetbase Extension Registry',
];

const FAQS = [
  {
    q: 'What is a Fleetbase extension?',
    a: 'A Fleetbase extension is a modular package that adds new features, integrations, or complete modules to the Fleetbase platform. Each extension is a combination of an Ember Engine (frontend) and a Laravel package (API backend). Extensions are installed via the Fleetbase CLI and appear as first-class modules inside the console — indistinguishable from core platform features.',
  },
  {
    q: 'Do I need to know Ember.js to build an extension?',
    a: 'The Fleetbase frontend is built with Ember.js and Ember Engines. You will need familiarity with Ember to build a full-stack extension with a custom UI. However, if you only need to add backend logic, API endpoints, or data models, you can build a backend-only Laravel package extension without any Ember knowledge.',
  },
  {
    q: 'How do I publish an extension to the marketplace?',
    a: 'Use the Fleetbase CLI: run `flb publish` from your extension directory. The CLI packages your extension and submits it to the Fleetbase Extension Registry at registry.fleetbase.io. Once reviewed, your extension appears in the in-console marketplace and can be installed by any Fleetbase user.',
  },
  {
    q: 'Can I build a private extension for my own deployment?',
    a: 'Yes. You can build and install extensions locally without publishing them to the public registry. Self-hosted Fleetbase deployments can point to a private registry or install extensions directly from a local path or private npm/Composer repository.',
  },
  {
    q: 'What is the extension.json file?',
    a: 'Every Fleetbase extension must include an extension.json manifest file at its root. This file declares the extension name, version, description, author, required Fleetbase version, and any dependencies. The registry validates this file before accepting a submission.',
  },
  {
    q: 'How does the extension backend integrate with Fleetbase core?',
    a: 'The Laravel package backend uses the Fleetbase Core API as its foundation. This gives your extension access to the composable REST API framework, shared data models (orders, drivers, places, contacts), authentication, middleware, notifications, and the event system — all without reimplementing them.',
  },
  {
    q: 'Can extensions communicate with each other?',
    a: 'Yes. The Ember Core framework (@fleetbase/ember-core) provides integration capabilities that allow extensions to register services, share state, and expose APIs to other extensions. On the backend, Laravel service providers allow extensions to bind shared services into the container.',
  },
  {
    q: 'Is there a commercial licence requirement for publishing extensions?',
    a: 'Extensions you build for your own use are covered by the AGPL-3.0 licence that governs Fleetbase. If you want to sell or distribute extensions commercially — or keep your extension source code proprietary — you will need a Fleetbase Commercial Licence. Contact hello@fleetbase.io to discuss extension licensing.',
  },
];

// ─── Code Samples ─────────────────────────────────────────────────────────────

const manifestCode = `{
  "name": "my-logistics-module",
  "version": "1.0.0",
  "description": "Custom logistics module for Fleetbase",
  "author": "Your Company",
  "fleetbase": {
    "requires": ">=1.0.0",
    "engine": "my-logistics-module",
    "backend": "your-company/my-logistics-module"
  },
  "dependencies": {
    "@fleetbase/ember-core": "^1.0.0",
    "@fleetbase/ember-ui": "^1.0.0"
  }
}`;

const cliCode = `# Install the Fleetbase CLI
npm install -g @fleetbase/cli

# Scaffold a new extension
flb new my-extension

# Develop with hot reload
flb serve

# Publish to the registry
flb publish

# Install any extension from the registry
flb install my-extension`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function DeveloperExtensionsPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <Code2 className="w-3 h-3 text-primary" />
            <span>Developer Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Extend Fleetbase with{' '}
            <span className="text-primary">Custom Modules</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Fleetbase is built as an extensible operating system for logistics. Every core feature —
            Fleet-Ops, Storefront, Ledger — is itself an extension. Build your own modules, publish
            them to the marketplace, or keep them private for your own deployment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/docs/extension-development">
                Read the Extension Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com/fleetbase/fleetbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-4 h-4" />
                View on GitHub
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/platform/extensions">Browse Marketplace</Link>
            </Button>
          </div>
          <div className="rounded-xl border overflow-hidden shadow-2xl relative aspect-video">
            <Image
              src="/images/screenshots/extensions/extensions-browse.webp"
              alt="Fleetbase Extensions Marketplace in the console"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y bg-muted/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">Ember.js</div>
              <div className="text-sm text-muted-foreground">Frontend Framework</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Laravel</div>
              <div className="text-sm text-muted-foreground">Backend Framework</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">1 CLI</div>
              <div className="text-sm text-muted-foreground">Scaffold, Dev &amp; Publish</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AGPL-3.0</div>
              <div className="text-sm text-muted-foreground">Open Source Licence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
                <span className="text-primary">●</span>
                <span>Architecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every Feature is an Extension
              </h2>
              <p className="text-muted-foreground mb-4">
                Fleetbase is not a monolith — it is an operating system for logistics built from
                composable extensions. Fleet-Ops, Storefront, Ledger, and Pallet are all extensions
                that ship with Fleetbase. Your custom extension is a first-class citizen with exactly
                the same capabilities.
              </p>
              <p className="text-muted-foreground mb-8">
                Each extension is a combination of an <strong>Ember Engine</strong> (the frontend
                module) and a <strong>Laravel package</strong> (the API backend). The two halves are
                developed independently and communicate through the Fleetbase Core API.
              </p>
              <div className="space-y-3">
                {ARCHITECTURE_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock code={manifestCode} language="json" label="extension.json" />
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Types of Extensions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extensions range from full-stack modules with custom UIs to lightweight backend
              integrations.
            </p>
          </div>
          <div
            className="bg-border rounded-xl overflow-hidden max-w-4xl mx-auto"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}
          >
            {EXTENSION_TYPES.map((type) => (
              <div key={type.title} className="bg-card p-6">
                <type.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-base font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{type.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {type.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Steps */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">From Zero to Published in Four Steps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Fleetbase CLI handles scaffolding, local development, and publishing so you can
              focus on building.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {BUILD_STEPS.map((step) => (
              <Card key={step.step} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="text-3xl font-bold text-primary/25 mb-2">{step.step}</div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <div className="bg-muted/50 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground">
                    {step.code}
                  </div>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/docs/extension-development/getting-started">
                <BookOpen className="mr-2 w-4 h-4" />
                Full Getting Started Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Frameworks */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Core Development Frameworks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fleetbase provides dedicated libraries for both the frontend and backend halves of your
              extension.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {CORE_FRAMEWORKS.map((fw) => (
              <Card key={fw.name} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        fw.type === 'Frontend'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-orange-500/10 text-orange-500'
                      }`}
                    >
                      {fw.type}
                    </span>
                    <code className="text-sm font-mono text-muted-foreground">{fw.name}</code>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground">{fw.desc}</p>
                  <Link
                    href={fw.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Registry */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
                <span className="text-primary">●</span>
                <span>Registry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Fleetbase Extension Registry
              </h2>
              <p className="text-muted-foreground mb-6">
                The Fleetbase Extension Registry at{' '}
                <strong>registry.fleetbase.io</strong> is the official package repository for
                Fleetbase extensions. It supports both Composer (PHP) and npm (JavaScript) packages,
                with built-in validation to ensure every extension meets platform standards.
              </p>
              <div className="space-y-2.5 mb-8">
                {REGISTRY_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com/fleetbase/registry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 w-3.5 h-3.5" />
                    Registry Source
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/platform/extensions">
                    <Package className="mr-1.5 w-3.5 h-3.5" />
                    Browse Marketplace
                  </Link>
                </Button>
              </div>
            </div>
            <CodeBlock code={cliCode} language="bash" label="Fleetbase CLI" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <div className="relative rounded-2xl border bg-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to Build?</h2>
              <p className="text-muted-foreground mb-8">
                Start with the official extension development guide, scaffold your first extension
                with the CLI, and join the Fleetbase developer community on Discord.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/docs/extension-development">
                    Start Building <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://discord.com/invite/HnTqQ6zAVn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Discord
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link
                    href="https://github.com/fleetbase/fleetbase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 w-4 h-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
