'use client';

import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { useSidebar } from 'fumadocs-ui/contexts/sidebar';
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  FileCode,
  HeartHandshake,
  Layout,
  Menu,
  Puzzle,
  ShoppingBag,
  Sparkles,
  Terminal,
  Truck,
} from 'lucide-react';

import { useMobileNav } from '@/components/layout/mobile-nav-context';

const sections = [
  {
    title: 'Platform',
    description: 'Getting started & core platform',
    url: '/docs',
    icon: <BookOpen className="size-4" />,
  },
  {
    title: 'Fleet-Ops',
    description: 'Fleet & transport management',
    url: '/docs/fleet-ops',
    icon: <Truck className="size-4" />,
  },
  {
    title: 'Fleetbase AI',
    description: 'Operations copilot & AI capabilities',
    url: '/docs/ai',
    icon: <Sparkles className="size-4" />,
  },
  {
    title: 'Storefront',
    description: 'E-commerce & marketplace',
    url: '/docs/storefront',
    icon: <ShoppingBag className="size-4" />,
  },
  // Pallet docs are hidden from the dropdown until the extension is released.
  // The /docs/pallet routes still resolve so direct links work, but the entry
  // is omitted from the section picker so users don't browse to unfinished docs.
  {
    title: 'Ledger',
    description: 'Finance & billing',
    url: '/docs/ledger',
    icon: <BookMarked className="size-4" />,
  },
  {
    title: 'Fleetbase CLI',
    description: 'Command-line tools',
    url: '/docs/cli',
    icon: <Terminal className="size-4" />,
  },
  {
    title: 'Fleetbase UI',
    description: 'UI components for the console',
    url: '/docs/ui',
    icon: <Layout className="size-4" />,
  },
  {
    title: 'Extension Development',
    description: 'Build & extend Fleetbase',
    url: '/docs/extension-development',
    icon: <Puzzle className="size-4" />,
  },
  {
    title: 'API Reference',
    description: 'REST API documentation',
    url: '/docs/api',
    icon: <FileCode className="size-4" />,
  },
  {
    title: 'Contributing',
    description: 'Translations, code, docs & extensions',
    url: '/docs/contributing',
    icon: <HeartHandshake className="size-4" />,
  },
];

// Stacked-trigger button that overlays the site nav drawer on top of an open
// fumadocs sidebar. Mobile-only — desktop has the full site nav in the header.
function MainMenuButton() {
  const { setOpen: setNavOpen } = useMobileNav();
  const { setOpen: setDocsSidebarOpen } = useSidebar();

  return (
    <button
      type="button"
      onClick={() => {
        // Open the site nav drawer on top; leave the docs sidebar mounted
        // underneath so closing the site drawer returns the user to it.
        setNavOpen(true);
        // Belt-and-suspenders: ensure the docs sidebar stays in its open
        // state if anything tries to close it on click.
        setDocsSidebarOpen(true);
      }}
      className="flex w-full items-center justify-between gap-2 rounded-md border bg-fd-card px-3 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground md:hidden"
    >
      <span className="flex items-center gap-2">
        <Menu className="size-4" />
        Main menu
      </span>
      <ArrowRight className="size-4" />
    </button>
  );
}

export function DocsToggle() {
  return (
    <div className="flex flex-col gap-2">
      <MainMenuButton />
      <RootToggle options={sections} />
    </div>
  );
}
