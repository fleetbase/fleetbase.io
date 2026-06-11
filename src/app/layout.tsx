import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Azeret_Mono, Inter } from 'next/font/google';
import { headers } from 'next/headers';

import { AhrefsAnalytics } from '@/components/analytics/AhrefsAnalytics';
import { ConsentBanner } from '@/components/analytics/ConsentBanner';
import { GoogleAnalyticsProvider } from '@/components/analytics/GoogleAnalyticsProvider';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { DocsEmbedThemeSync } from '@/components/docs-embed-theme-sync';
import Footer from '@/components/layout/footer';
import { MobileNavProvider } from '@/components/layout/mobile-nav-context';
import Navbar from '@/components/layout/navbar';
import WhatsAppFloat from '@/components/layout/whatsapp-float';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
import {
  isOptInRequired,
  readConsentContextFromHeaders,
} from '@/lib/analytics/consent';
import { cn } from '@/lib/utils';

const inter = Inter({
 variable: '--font-inter',
 subsets: ['latin'],
});

const azeretMono = Azeret_Mono({
 variable: '--font-azeret-mono',
 subsets: ['latin'],
});

export const metadata: Metadata = {
 metadataBase: new URL('https://fleetbase.io'),
 title: {
 default: 'Fleetbase | Open-Source Fleet Management & TMS Software',
 template: '%s | Fleetbase',
 },
 description:
 'Fleetbase is open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud — free to start, no per-seat pricing.',
 keywords: [
 'open source fleet management software',
 'TMS software',
 'open source logistics platform',
 'self hosted fleet management',
 'Onfleet alternative',
 'fleet management API',
 ],
 authors: [{ name: 'Fleetbase' }],
 creator: 'Fleetbase',
 publisher: 'Fleetbase',
 robots: {
 index: true,
 follow: true,
 googleBot: {
 index: true,
 follow: true,
 'max-image-preview': 'large',
 'max-snippet': -1,
 'max-video-preview': -1,
 },
 },
 icons: {
 icon: [
 { url: '/favicon/favicon.ico', sizes: '48x48' },
 { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
 { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
 { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
 { url: '/favicon/favicon.ico' },
 ],
 apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
 shortcut: [{ url: '/favicon/favicon.ico' }],
 },
 openGraph: {
 title: 'Fleetbase | Open-Source Fleet Management & TMS Software',
 description:
 'Open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud — free to start, no per-seat pricing.',
 siteName: 'Fleetbase',
 images: [
 {
 url: '/images/og-image.jpeg',
 width: 1200,
 height: 630,
 alt: 'Fleetbase - Open-Source Fleet Management & TMS Software',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Fleetbase | Open-Source Fleet Management & TMS Software',
 description:
 'Open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud — free to start, no per-seat pricing.',
 images: ['/images/og-image.jpeg'],
 creator: '@fleetbase_io',
 },
};

export default async function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const consentCtx = readConsentContextFromHeaders(await headers());
 const optInRequired = isOptInRequired(consentCtx);

 return (
 <html lang="en" suppressHydrationWarning>
 <body
 className={cn(
 'relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]',
 inter.variable,
 azeretMono.variable,
 )}
 >
 <ThemeProvider
 attribute="class"
 defaultTheme="dark"
 disableTransitionOnChange
 >
 <DocsEmbedThemeSync />
 <RootProvider
 search={{
 options: {
 type: 'static',
 },
 }}
 >
 <MobileNavProvider>
 <PostHogProvider optInRequired={optInRequired}>
 {/* Background Blur */}
 <div className="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]" />
 {/* Light-mode noise — SVG fractal-noise tinted brand-blue/steel.
     The webp asset (used in dark mode) is heavily dark-weighted, which
     unavoidably darkens light surfaces under any blend mode. This SVG
     version emits brand-tinted RGB at noise-modulated alpha, so it adds
     visible grain WITHOUT pulling the surface darker. */}
 <div
 className="pointer-events-none absolute inset-0 z-[-1] size-full opacity-50 dark:hidden"
 style={{
 backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.26 0 0 0 0 0.45 0 0 0 0 0.80 0.55 0 0 0 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
 }}
 />
 {/* Dark-mode noise — original dark-grain webp, unchanged behaviour */}
 <div
 className="pointer-events-none absolute inset-0 z-[-1] hidden size-full opacity-70 mix-blend-overlay dark:block dark:md:opacity-100"
 style={{
 background: `url(/images/noise.webp) lightgray 0% 0% / 83.69069695472717px 83.69069695472717px repeat`,
 }}
 />
 <StyleGlideProvider />

 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 <WhatsAppFloat />
 <ConsentBanner optInRequired={optInRequired} />
 </PostHogProvider>
 </MobileNavProvider>
 </RootProvider>
 </ThemeProvider>
 <Analytics />
 <GoogleAnalyticsProvider optInRequired={optInRequired} />
 <AhrefsAnalytics />
 </body>
 </html>
 );
}
