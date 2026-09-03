'use client';
import { useSidebar } from 'fumadocs-ui/contexts/sidebar';
import {
 BarChart3,
 BookOpen,
 Box,
 Boxes,
 Brain,
 Briefcase,
 Building2,
 ClipboardList,
 Code,
 FileCheck,
 FileCode,
 FileText,
 Github,
 Handshake,
 Heart,
 Landmark,
 Library,
 Mail,
 MapPin,
 MessageSquare,
 Navigation,
 Package,
 Puzzle,
 Recycle,
 Shield,
 Ship,
 ShoppingCart,
 Smartphone,
 Store,
 Terminal,
 Truck,
 UserCog,
 Users,
 Utensils,
 Webhook,
 Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import Logo from '@/components/layout/logo';
import { useMobileNav } from '@/components/layout/mobile-nav-context';
import { ThemeToggle } from '@/components/theme-toggle';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { relForHref } from '@/lib/external-link';
import { cn } from '@/lib/utils';

// Type definitions
interface NavSubItem {
 label: string;
 href: string;
 description: string;
 icon: React.ElementType;
 external?: boolean;
}

interface NavSubGroup {
 groupLabel: string;
 items: NavSubItem[];
}

interface NavLink {
 label: string;
 href: string;
 subitems?: NavSubItem[];
 subgroups?: NavSubGroup[];
 megaMenu?: boolean;
 groupedMegaMenu?: boolean;
}

export const NAV_LINKS: NavLink[] = [
 {
 label: 'Platform',
 href: '/platform',
 subitems: [
 {
 label: 'Platform Overview',
 href: '/platform',
 description: 'Discover the modular logistics OS that powers operations at any scale.',
 icon: Box,
 },
 {
 label: 'Fleet-Ops',
 href: '/platform/fleetops',
 description: 'Manage fleets, orders, and routes with real-time optimization and tracking.',
 icon: Truck,
 },
 {
 label: 'Navigator App',
 href: '/platform/navigator',
 description: 'Empower drivers with turn-by-turn navigation and real-time job updates.',
 icon: Navigation,
 },
 {
 label: 'Storefront',
 href: '/platform/storefront',
 description: 'Launch headless e-commerce with seamless delivery and inventory sync.',
 icon: Store,
 },
 {
 label: 'Pallet',
 href: '/platform/pallet',
 description: 'Control warehouse operations with smart inventory and fulfillment tools.',
 icon: Package,
 },
 {
 label: 'Ledger',
 href: '/platform/ledger',
 description: 'Automate logistics accounting with a double-entry financial ledger built for operations.',
 icon: Landmark,
 },
 {
 label: 'Extensions Marketplace',
 href: '/platform/extensions',
 description: 'Browse and install extensions to customize your logistics workflows.',
 icon: Boxes,
 },
 {
 label: 'Developer Console',
 href: '/platform/developer-console',
 description: 'Manage API keys, monitor webhooks, and debug integrations in real-time.',
 icon: Code,
 },
 {
 label: 'Mobile Apps',
 href: '/platform/mobile',
 description: 'Native iOS and Android apps for drivers and customers on the go.',
 icon: Smartphone,
 },
 {
 label: 'Logistics AI',
 href: '/platform/ai',
 description: 'AI-powered route optimisation, autonomous dispatch, and predictive analytics — on infrastructure you own.',
 icon: Brain,
 },
 {
 label: 'Security & Compliance',
 href: '/platform/security',
 description: 'Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance.',
 icon: Shield,
 },
 ],
 megaMenu: true,
 },
 {
 label: 'Solutions',
 href: '/solutions',
 groupedMegaMenu: true,
 subgroups: [
 {
 groupLabel: 'By Industry',
 items: [
 {
 label: 'Trucking & Haulage',
 href: '/solutions/trucking',
 description: 'Optimize long-haul routes, manage assets, and track freight in real-time.',
 icon: Truck,
 },
 {
 label: 'Food & Grocery Delivery',
 href: '/solutions/food-delivery',
 description: 'Power on-demand delivery with live tracking and temperature monitoring.',
 icon: Utensils,
 },
 {
 label: 'Courier & Parcel Services',
 href: '/solutions/courier-services',
 description: 'Automate dispatch, proof of delivery, and last-mile optimization.',
 icon: Package,
 },
 {
 label: 'E-commerce & Retail',
 href: '/solutions/ecommerce',
 description: 'Sync inventory, fulfill orders, and delight customers with fast shipping.',
 icon: ShoppingCart,
 },
 {
 label: 'Healthcare & Pharmacy',
 href: '/solutions/healthcare',
 description: 'Deliver medical supplies securely with HIPAA-compliant logistics.',
 icon: Heart,
 },
 {
 label: 'Waste & Recycling',
 href: '/solutions/waste-management',
 description: 'Optimize collection routes and manage recycling operations efficiently.',
 icon: Recycle,
 },
 {
 label: 'Container Operations',
 href: '/solutions/container-operations',
 description: 'Track containers from port to destination with real-time visibility.',
 icon: Ship,
 },
 {
 label: 'Military & Government',
 href: '/solutions/government',
 description: 'Secure logistics for defense operations and battle management systems.',
 icon: Shield,
 },
 ],
 },
 {
 groupLabel: 'By Use Case',
 items: [
 {
 label: 'Last-Mile Delivery',
 href: '/solutions/use-cases/last-mile-delivery',
 description: 'Streamline final-leg delivery with smart dispatch and real-time tracking.',
 icon: MapPin,
 },
 {
 label: 'Route Optimization',
 href: '/solutions/use-cases/route-optimization',
 description: 'Cut fuel costs and improve on-time rates with AI-powered routing.',
 icon: Navigation,
 },
 {
 label: 'Fleet Management',
 href: '/solutions/use-cases/fleet-management',
 description: 'Monitor vehicle health, utilization, and compliance from one dashboard.',
 icon: Truck,
 },
 {
 label: 'Order Management',
 href: '/solutions/use-cases/order-management',
 description: 'Configure, track, and fulfill any order type with custom workflows.',
 icon: ClipboardList,
 },
 {
 label: 'Analytics & Reporting',
 href: '/solutions/use-cases/analytics',
 description: 'Turn operational data into actionable insights with live dashboards.',
 icon: BarChart3,
 },
 {
 label: 'API & Integrations',
 href: '/solutions/use-cases/integrations',
 description: 'Connect your ERP, WMS, and third-party tools via REST APIs and webhooks.',
 icon: Zap,
 },
 ],
 },
 {
 groupLabel: 'By Role',
 items: [
 {
 label: 'Operations Managers',
 href: '/solutions/roles/operations-managers',
 description: 'Get full visibility and control over daily logistics operations.',
 icon: UserCog,
 },
 {
 label: 'Fleet Managers',
 href: '/solutions/roles/fleet-managers',
 description: 'Manage drivers, vehicles, and routes from a single command center.',
 icon: Truck,
 },
 {
 label: 'IT & Developers',
 href: '/solutions/roles/developers',
 description: 'Build, extend, and integrate Fleetbase into your existing tech stack.',
 icon: Code,
 },
 {
 label: 'Business Owners & CEOs',
 href: '/solutions/roles/executives',
 description: 'Scale logistics operations and reduce costs with a platform that grows with you.',
 icon: Briefcase,
 },
 {
 label: 'Warehouse Managers',
 href: '/solutions/roles/warehouse-managers',
 description: 'Coordinate inventory, fulfillment, and inbound/outbound flows seamlessly.',
 icon: Package,
 },
 {
 label: 'Customer Success Teams',
 href: '/solutions/roles/customer-success',
 description: 'Deliver proactive updates and reduce WISMO calls with live tracking.',
 icon: Users,
 },
 ],
 },
 ],
 },
 {
 label: 'Developers',
 href: '/developers',
 subitems: [
 {
 label: 'Documentation',
 href: '/docs',
 description: 'Guides, tutorials, and references for building with Fleetbase.',
 icon: BookOpen,
 },
 {
 label: 'API Reference',
 href: '/docs/api',
 description: 'Comprehensive REST API reference with code examples and guides.',
 icon: FileCode,
 },
 {
 label: 'API & Integrations',
 href: '/developers/api',
 description: 'Connect Fleetbase to any system with our powerful REST API and SDKs.',
 icon: Webhook,
 },
 {
 label: 'SDKs & Libraries',
 href: '/developers/sdks',
 description: 'Official SDKs for JavaScript, PHP, Java, Python, and more languages.',
 icon: Library,
 },
 {
 label: 'Webhooks & Events',
 href: '/developers/webhooks',
 description: 'Subscribe to order, dispatch, and fleet events with secure webhook delivery.',
 icon: Webhook,
 },
 {
 label: 'Build an Extension',
 href: '/developers/extensions',
 description: 'Create custom extensions and publish them to the marketplace.',
 icon: Puzzle,
 },
 {
 label: 'GitHub Repository',
 href: 'https://github.com/fleetbase/fleetbase',
 description: 'Contribute to the open-source project and join our community.',
 icon: Github,
 external: true,
 },
 ],
 },
 { 
 label: 'Pricing', 
 href: '/pricing' 
 },
 {
 label: 'Resources',
 href: '/resources',
 subitems: [
      {
        label: 'Blog',
 href: '/blog',
 description: 'Industry insights, best practices, and product updates from our team.',
 icon: FileText,
 },
 {
 label: 'Community (Discord)',
 href: '/community',
 description: 'Join our Discord server and connect with other Fleetbase users.',
 icon: MessageSquare,
 },
 {
 label: 'Services',
 href: '/services',
 description: 'Professional implementation, development, and enterprise support options.',
 icon: Handshake,
 },
 {
 label: 'Changelog',
 href: '/changelog',
 description: 'Stay updated with the latest features, fixes, and improvements.',
 icon: FileText,
 },
 {
 label: 'Compare Alternatives',
 href: '/compare',
 description: 'See how Fleetbase compares to Onfleet, Tookan, Route4Me, and other platforms.',
 icon: BarChart3,
 },
 {
 label: 'Commercial License',
 href: '/licensing/commercial',
 description: 'Build proprietary on Fleetbase — pricing, terms, and FAQ.',
 icon: Shield,
 },
 ],
 },
 {
 label: 'Company',
 href: '/company',
 subitems: [
 {
 label: 'About Us',
 href: '/company/about',
 description: 'Learn about our mission to democratize logistics through open source.',
 icon: Building2,
 },
 {
 label: 'Open Source Mission',
 href: '/company/open-source',
 description: 'Our commitment to building transparent, community-driven software.',
 icon: Github,
 },
 {
 label: 'Partners',
 href: '/partners',
 description: 'Explore our network of integration partners and solution providers.',
 icon: Handshake,
 },
 {
 label: 'Licensing Options',
 href: '/licensing',
 description: 'Understand AGPL open source and commercial licensing for your needs.',
 icon: FileCheck,
 },
 {
 label: 'Contact Sales',
 href: 'https://cal.com/shivthakker/enquiry',
 description: 'Get in touch with our enterprise team for custom solutions.',
 icon: Mail,
 },
 {
 label: 'Services',
 href: '/services',
 description: 'Implementation, custom development, training, and support services.',
 icon: Briefcase,
 },
 {
 label: 'Terms of Service',
 href: '/terms',
 description: 'Our SaaS and Cloud terms of service.',
 icon: FileCheck,
 },
 {
 label: 'Privacy Policy',
 href: '/privacy',
 description: 'How we collect, use, and protect your data.',
 icon: FileCheck,
 },
 ],
 },
];

const ACTION_BUTTONS: Array<{
 label: string;
 href: string;
 variant: 'default' | 'ghost' | 'outline';
 ctaId: string;
 external?: boolean;
 icon?: React.ElementType;
}> = [
 {
 label: 'Start Free Trial',
 href: 'https://console.fleetbase.io/onboard',
 variant: 'default',
 ctaId: 'start_free_trial',
 },
];

const Navbar = () => {
 const { isOpen: isMenuOpen, setOpen: setIsMenuOpen, toggle: toggleMenu } = useMobileNav();
 const { open: isDocsSidebarOpen, setOpen: setDocsSidebarOpen } = useSidebar();
 const [isScrolled, setIsScrolled] = useState(false);
 const [ghStars, setGhStars] = useState<string>('Star');
 // Portal target — only available after mount on the client. The drawer is
 // rendered into document.body to escape any ancestor that creates a
 // containing block for fixed-positioned descendants (e.g. the header's
 // own backdrop-blur when scrolled), which otherwise traps the drawer
 // inside the header's tiny vertical box and leaves the user with a
 // locked, invisible menu.
 const [mounted, setMounted] = useState(false);
 useEffect(() => setMounted(true), []);
 const pathname = usePathname();

 useEffect(() => {
 fetch('https://api.github.com/repos/fleetbase/fleetbase')
 .then((r) => r.json())
 .then((d) => {
 const count: number = d.stargazers_count;
 if (count >= 1000) setGhStars(`${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`);
 else setGhStars(`${count}`);
 })
 .catch(() => {});
 }, []);
 // Brand-story pages with full-bleed coloured heroes (oli-max, true-vegan)
 // pair this scroll threshold with a CSS pseudo-element strip on the page
 // wrapper that sits above the layered theme overlays in the navbar zone.
 //
 // Below the threshold: navbar is transparent and the strip shows clean brand
 // colour through it. Slightly above: the strip has scrolled out of viewport
 // and the navbar's standard opaque-glass blur kicks in.
 //
 // The threshold is set to one navbar height (~80px) so the glass appears
 // right as the user scrolls past the strip — no gap of unstyled navbar.
 const isBrandStoryPage =
 pathname === '/true-vegan' ||
 pathname === '/oli-max' ||
 pathname === '/platform/fleetops';
 const scrollThreshold = isBrandStoryPage ? 80 : 16;
 useEffect(() => {
 const onScroll = () => setIsScrolled(window.scrollY > scrollThreshold);
 onScroll();
 window.addEventListener('scroll', onScroll, { passive: true });
 return () => window.removeEventListener('scroll', onScroll);
 }, [scrollThreshold]);

 const hideNavbar = ['/signin', '/signup', '/otp'].some((route) =>
 pathname.includes(route),
 );

 const isDocsPage = pathname.startsWith('/docs');
 const anyDrawerOpen = isMenuOpen || (isDocsPage && isDocsSidebarOpen);

 useEffect(() => {
 // `overflow: clip` (not `hidden`) so the sticky header keeps working.
 // `hidden` on <html> establishes a new scroll container, which strips
 // `position: sticky` of its scrolling ancestor — the header then falls
 // back to its document position and ends up scrolled out of the viewport
 // when a user opens the drawer after scrolling down. `clip` locks the
 // axis without establishing a scroll container, so sticky is preserved.
 if (anyDrawerOpen) {
 document.documentElement.style.overflow = 'clip';
 document.body.style.overflow = 'clip';
 } else {
 document.documentElement.style.overflow = '';
 document.body.style.overflow = '';
 }

 return () => {
 document.documentElement.style.overflow = '';
 document.body.style.overflow = '';
 };
 }, [anyDrawerOpen]);

 // ESC closes one layer at a time: site nav drawer first (it overlays the
 // fumadocs sidebar on docs pages), then fumadocs handles its own ESC.
 useEffect(() => {
 if (!isMenuOpen) return;
 const onKey = (e: KeyboardEvent) => {
 if (e.key === 'Escape') {
 e.stopPropagation();
 setIsMenuOpen(false);
 }
 };
 window.addEventListener('keydown', onKey, true);
 return () => window.removeEventListener('keydown', onKey, true);
 }, [isMenuOpen, setIsMenuOpen]);

 // The hamburger icon reflects whichever layer is active.
 // Click behaviour peels layers off in stacking order:
 // (1) site drawer is the topmost — close it first (regardless of docs sidebar);
 // (2) on /docs with no overlay, toggle the fumadocs sidebar;
 // (3) on non-docs, toggle the site drawer.
 const triggerOpen = anyDrawerOpen;
 const onTriggerClick = () => {
 if (isMenuOpen) setIsMenuOpen(false);
 else if (isDocsPage) setDocsSidebarOpen(!isDocsSidebarOpen);
 else toggleMenu();
 };

 if (hideNavbar) return null;

 // Built outside the JSX so we can render the same drawer through a portal
 // — keeping it as a child of <header> would re-introduce the containing
 // block bug (see `mounted` declaration above for context).
 const mobileMenuDrawer = (
 <div
 className={cn(
 'bg-background/95 text-accent-foreground fixed inset-0 top-[var(--header-height)] z-[60] flex flex-col justify-between tracking-normal backdrop-blur-md transition-all duration-500 ease-out lg:hidden',
 isMenuOpen
 ? 'translate-x-0 opacity-100'
 : 'pointer-events-none translate-x-full opacity-0',
 )}
 >
 <div className="container overflow-y-auto">
 <NavigationMenu
 orientation="vertical"
 className="inline-block w-full max-w-none py-10"
 >
 <NavigationMenuList className="w-full flex-col items-start gap-6">
 {NAV_LINKS.map((item) => (
 <NavigationMenuItem key={item.label} className="w-full">
 {item.subgroups ? (
 /* ── Mobile: grouped Solutions accordion ── */
 <Accordion type="single" collapsible className="w-full">
 <AccordionItem value={item.label}>
 <AccordionTrigger className="flex w-full items-center justify-between p-2 text-base font-normal">
 {item.label}
 </AccordionTrigger>
 <AccordionContent className="pt-2 pb-0">
 <div className="space-y-4">
 {item.subgroups.map((group) => (
 <div key={group.groupLabel}>
 <div className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
 {group.groupLabel}
 </div>
 <div className="space-y-1">
 {group.items.map((subitem) => (
 <NavigationMenuLink
 key={subitem.label}
 href={subitem.href}
 onClick={() => setIsMenuOpen(false)}
 className={cn(
 'text-muted-foreground hover:bg-accent/50 flex flex-row gap-2 p-3 font-medium transition-colors',
 pathname === subitem.href && 'bg-accent font-semibold',
 )}
 {...(subitem.external && { target: '_blank', rel: 'noopener noreferrer' })}
 >
 <subitem.icon className="size-5" />
 <span>{subitem.label}</span>
 </NavigationMenuLink>
 ))}
 </div>
 </div>
 ))}
 </div>
 </AccordionContent>
 </AccordionItem>
 </Accordion>
 ) : item.subitems ? (
 /* ── Mobile: standard accordion ── */
 <Accordion type="single" collapsible className="">
 <AccordionItem value={item.label}>
 <AccordionTrigger className="flex w-full items-center justify-between p-2 text-base font-normal">
 {item.label}
 </AccordionTrigger>
 <AccordionContent className="pt-2 pb-0">
 <div className="space-y-2">
 {item.subitems.map((subitem) => (
 <NavigationMenuLink
 key={subitem.label}
 href={subitem.href}
 onClick={() => setIsMenuOpen(false)}
 className={cn(
 'text-muted-foreground hover:bg-accent/50 flex flex-row gap-2 p-3 font-medium transition-colors',
 pathname === subitem.href && 'bg-accent font-semibold',
 )}
 {...(subitem.external && { target: "_blank", rel: "noopener noreferrer" })}
 >
 <subitem.icon className="size-5.5" />
 <span className="">{subitem.label}</span>
 </NavigationMenuLink>
 ))}
 </div>
 </AccordionContent>
 </AccordionItem>
 </Accordion>
 ) : (
 /* ── Mobile: plain link ── */
 <NavigationMenuLink
 href={item.href}
 className={cn(
 'hover:text-foreground text-base transition-colors',
 pathname === item.href && 'font-semibold',
 )}
 onClick={() => setIsMenuOpen(false)}
 >
 {item.label}
 </NavigationMenuLink>
 )}
 </NavigationMenuItem>
 ))}
 </NavigationMenuList>
 </NavigationMenu>
 </div>

 <div className="flex gap-4.5 border-t px-6 py-4">
 {ACTION_BUTTONS.map((button) => (
 <Button
 key={button.label}
 variant={button.variant === 'ghost' ? 'muted' : button.variant}
 asChild
 className="h-12 flex-1 rounded-sm transition-all hover:scale-105"
 >
 <Link
 href={button.href}
 onClick={() => setIsMenuOpen(false)}
 data-cta-id={button.ctaId}
 data-cta-location="navbar_mobile"
 data-cta-variant="primary"
 {...(button.external && { target: "_blank" })}
 rel={relForHref(
 button.href,
 button.external ? 'noopener noreferrer' : undefined,
 )}
 >
 {button.icon && <button.icon className="size-4 mr-2" />}
 {button.label}
 </Link>
 </Button>
 ))}
 </div>
 </div>
 );

 return (
 <>
 <header className={cn(
 'sticky top-0 z-[60] border-b transition-colors duration-300',
 isDocsPage
 ? 'border-border bg-fd-card'
 : isScrolled
 ? 'border-border/50 bg-background/60 backdrop-blur-xl'
 : 'border-transparent bg-transparent',
 )}>
 <div className="relative z-[60] container flex h-[var(--header-height)] items-center justify-between gap-4">
 
 <Logo />

 <NavigationMenu viewport={false} className={cn('hidden lg:flex flex-1 justify-center')}>
 <NavigationMenuList className="gap-2 xl:gap-4">
 {NAV_LINKS.map((item) => (
 <NavigationMenuItem key={item.label}>
 {item.subgroups ? (
 /* ── Grouped mega-menu (Solutions) ── */
 <>
 <NavigationMenuTrigger
 className={cn(
 'cursor-pointer bg-transparent [&_svg]:ms-2 [&_svg]:size-4',
 pathname.startsWith(item.href) && 'bg-accent font-semibold',
 )}
 >
 {item.label}
 </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="w-[780px] p-4">
 <div className="grid grid-cols-3 gap-x-6">
 {item.subgroups.map((group) => (
 <div key={group.groupLabel}>
 {/* Group heading */}
 <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
 {group.groupLabel}
 </div>
 <ul className="space-y-0.5">
 {group.items.map((subitem) => (
 <li key={subitem.label}>
 <NavigationMenuLink
 href={subitem.href}
 className="flex flex-row items-start gap-2.5 rounded-md p-2 transition-colors hover:bg-accent"
 {...(subitem.external && { target: '_blank', rel: 'noopener noreferrer' })}
 >
 <subitem.icon className="mt-0.5 size-4 flex-shrink-0 text-foreground" />
 <div className="flex flex-col gap-0.5">
 <span className="text-sm font-medium leading-tight">
 {subitem.label}
 </span>
 <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
 {subitem.description}
 </span>
 </div>
 </NavigationMenuLink>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 {/* Footer link */}
 <div className="mt-4 border-t pt-3">
 <NavigationMenuLink
 href="/solutions"
 className="flex items-center gap-1.5 px-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
 >
 View all solutions →
 </NavigationMenuLink>
 </div>
 </div>
 </NavigationMenuContent>
 </>
 ) : item.subitems ? (
 /* ── Standard mega-menu / dropdown ── */
 <>
 <NavigationMenuTrigger
 className={cn(
 'cursor-pointer bg-transparent [&_svg]:ms-2 [&_svg]:size-4',
 pathname.startsWith(item.href) && 'bg-accent font-semibold',
 )}
 >
 {item.label}
 </NavigationMenuTrigger>
 <NavigationMenuContent className="">
 <ul className={cn(
 "gap-2",
 item.megaMenu ? "grid grid-cols-2 w-[600px]" : "grid w-[320px]"
 )}>
 {item.subitems.map((subitem) => (
 <li key={subitem.label}>
 <NavigationMenuLink
 href={subitem.href}
 className="flex-row items-start gap-3 p-3"
 {...(subitem.external && { target: "_blank", rel: "noopener noreferrer" })}
 >
 <subitem.icon className="text-foreground size-5 mt-0.5 flex-shrink-0" />
 <div className="flex flex-col gap-1 min-h-[44px]">
 <div className="text-sm font-medium tracking-normal leading-tight">
 {subitem.label}
 </div>
 <div className="text-muted-foreground text-xs leading-snug line-clamp-2">
 {subitem.description}
 </div>
 </div>
 </NavigationMenuLink>
 </li>
 ))}
 </ul>
 </NavigationMenuContent>
 </>
 ) : (
 /* ── Plain link ── */
 <NavigationMenuLink
 href={item.href}
 className={cn(
 navigationMenuTriggerStyle(),
 'bg-transparent',
 pathname === item.href && 'bg-accent font-semibold',
 )}
 >
 {item.label}
 </NavigationMenuLink>
 )}
 </NavigationMenuItem>
 ))}
 </NavigationMenuList>
 </NavigationMenu>

 <div className="hidden flex-shrink-0 items-center justify-end gap-3 lg:flex">
 <ThemeToggle />
 <Button size="sm" variant="ghost" asChild>
 <Link
 href="https://github.com/fleetbase/fleetbase"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-1.5"
 data-cta-id="star_github"
 data-cta-location="navbar"
 data-cta-variant="tertiary"
 >
 <Github className="size-4" />
 <span>Star us</span>
 <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium tabular-nums">{ghStars}</span>
 </Link>
 </Button>
 {ACTION_BUTTONS.map((button) => (
 <Button
 key={button.label}
 size="sm"
 variant={button.variant}
 asChild
 >
 <Link
 href={button.href}
 data-cta-id={button.ctaId}
 data-cta-location="navbar"
 data-cta-variant="primary"
 {...(button.external && { target: "_blank" })}
 rel={relForHref(
 button.href,
 button.external ? 'noopener noreferrer' : undefined,
 )}
 >
 {button.icon && <button.icon className="size-4 mr-2" />}
 {button.label}
 </Link>
 </Button>
 ))}
 </div>

 <div className="flex items-center gap-2 lg:hidden lg:gap-4">
 <ThemeToggle />
 <button
 type="button"
 aria-label={triggerOpen ? 'Close menu' : 'Open main menu'}
 aria-expanded={triggerOpen}
 className="text-muted-foreground relative flex size-8 rounded-sm border lg:hidden"
 onClick={onTriggerClick}
 >
 <span className="sr-only">Open main menu</span>
 <div
 className={cn(
 'absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2',
 )}
 >
 <span
 aria-hidden="true"
 className={cn(
 'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
 triggerOpen ? 'rotate-45' : '-translate-y-1.5',
 )}
 ></span>
 <span
 aria-hidden="true"
 className={cn(
 'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
 triggerOpen ? 'opacity-0' : '',
 )}
 ></span>
 <span
 aria-hidden="true"
 className={cn(
 'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
 triggerOpen ? '-rotate-45' : 'translate-y-1.5',
 )}
 ></span>
 </div>
 </button>
 </div>

 </div>
 </header>
 {mounted && createPortal(mobileMenuDrawer, document.body)}
 </>
 );
};

export default Navbar;
