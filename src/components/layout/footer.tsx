'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';

const SOCIAL_LINKS = [
 {
 name: 'GitHub',
 href: 'https://github.com/fleetbase/fleetbase',
 icon: <FaGithub className="size-4" />,
 },
 {
 name: 'X (Twitter)',
 href: 'https://twitter.com/fleetbase_io',
 icon: <FaXTwitter className="size-4" />,
 },
 {
 name: 'WhatsApp',
 href: 'https://wa.me/6588345437?text=Hi%20Fleetbase%20team!%20I%27d%20like%20to%20learn%20more%20about%20your%20logistics%20platform.',
 icon: <FaWhatsapp className="size-4" />,
 },
 {
 name: 'Instagram',
 href: 'https://instagram.com/fleetbase.io',
 icon: <FaInstagram className="size-4" />,
 },
];

const FOOTER_LINKS = [
 {
 title: 'Platform',
 links: [
 { label: 'Platform Overview', href: '/platform' },
 { label: 'Fleet-Ops', href: '/platform/fleetops' },
 { label: 'Navigator App', href: '/platform/navigator' },
 { label: 'Storefront', href: '/platform/storefront' },
 { label: 'Pallet', href: '/platform/pallet' },
 { label: 'Ledger', href: '/platform/ledger' },
 { label: 'Mobile Apps', href: '/platform/mobile' },
 { label: 'Extensions Marketplace', href: '/platform/extensions' },
 { label: 'Logistics AI', href: '/platform/ai' },
 { label: 'Security & Compliance', href: '/platform/security' },
 ],
 },
 {
 title: 'Solutions',
 links: [
 { label: 'All Solutions', href: '/solutions' },
 { label: 'Trucking & Haulage', href: '/solutions/trucking' },
 { label: 'Food & Grocery Delivery', href: '/solutions/food-delivery' },
 { label: 'Courier & Parcel Services', href: '/solutions/courier-services' },
 { label: 'E-commerce & Retail', href: '/solutions/ecommerce' },
 { label: 'Healthcare & Pharmacy', href: '/solutions/healthcare' },
 { label: 'Waste & Recycling', href: '/solutions/waste-management' },
 { label: 'Container Operations', href: '/solutions/container-operations' },
 { label: 'Military & Government', href: '/solutions/government' },
 ],
 },
 {
 // Role and use-case pages previously had exactly one inbound internal link
 // each — they existed only in the nav dropdown and on the /solutions hub, so
 // none of the homepage's authority reached the pages built for buyer intent.
 title: 'By Role & Use Case',
 links: [
 { label: 'Fleet Managers', href: '/solutions/roles/fleet-managers' },
 { label: 'Operations Managers', href: '/solutions/roles/operations-managers' },
 { label: 'Warehouse Managers', href: '/solutions/roles/warehouse-managers' },
 { label: 'Executives', href: '/solutions/roles/executives' },
 { label: 'Developers', href: '/solutions/roles/developers' },
 { label: 'Customer Success', href: '/solutions/roles/customer-success' },
 { label: 'Last-Mile Delivery', href: '/solutions/use-cases/last-mile-delivery' },
 { label: 'Route Optimization', href: '/solutions/use-cases/route-optimization' },
 { label: 'Fleet Management', href: '/solutions/use-cases/fleet-management' },
 { label: 'Order Management', href: '/solutions/use-cases/order-management' },
 { label: 'Analytics & Reporting', href: '/solutions/use-cases/analytics' },
 { label: 'API & Integrations', href: '/solutions/use-cases/integrations' },
 ],
 },
 {
 title: 'Compare',
 links: [
 { label: 'All Comparisons', href: '/compare' },
 { label: 'Fleetbase vs Onfleet', href: '/compare/vs-onfleet' },
 { label: 'Fleetbase vs Tookan', href: '/compare/vs-tookan' },
 { label: 'Fleetbase vs Route4Me', href: '/compare/vs-route4me' },
 { subheading: 'Powered by Fleetbase' },
 { label: 'OLI Max', href: '/oli-max' },
 { label: 'True Vegan', href: '/true-vegan' },
 ],
 },
 {
 title: 'Developers',
 links: [
 { label: 'Developer Hub', href: '/developers' },
 { label: 'API Documentation', href: '/docs/api' },
 { label: 'API & Integrations', href: '/developers/api' },
 { label: 'SDKs & Libraries', href: '/developers/sdks' },
 { label: 'Developer Console', href: '/platform/developer-console' },
 { label: 'Webhooks & Events', href: '/developers/webhooks' },
 { label: 'Build an Extension', href: '/developers/extensions' },
 { label: 'GitHub Repository', href: 'https://github.com/fleetbase/fleetbase', external: true },
 ],
 },
 {
 title: 'Resources',
 links: [
 { label: 'Documentation', href: '/docs' },
      { label: 'Blog', href: '/blog' },
 { label: 'Changelog', href: '/changelog' },
 { label: 'Community (Discord)', href: '/community' },
 { subheading: 'Services' },
 { label: 'All Services', href: '/services' },
 { label: 'Installation Service', href: '/services/installation' },
 { label: 'Navigator Publishing', href: '/services/navigator-publishing' },
 { label: 'Storefront Publishing', href: '/services/storefront-publishing' },
 ],
 },
 {
 title: 'Company',
 links: [
 { label: 'Company Overview', href: '/company' },
 { label: 'About Us', href: '/company/about' },
 { label: 'Open Source Mission', href: '/company/open-source' },
 { label: 'Partners', href: '/partners' },
 { label: 'Investors', href: '/company/investors' },
 { label: 'Licensing Options', href: '/licensing' },
 { label: 'Commercial License', href: '/licensing/commercial' },
 { label: 'Contact Sales', href: '/contact/sales' },
 { label: 'Pricing', href: '/pricing' },
 { label: 'Terms of Service', href: '/terms' },
 { label: 'Privacy Policy', href: '/privacy' },
 ],
 },
];

const Footer = () => {
 const pathname = usePathname();
 const hideFooter = ['/signin', '/signup', '/otp', '/docs'].some(
 (route) => pathname.includes(route),
 );

 if (hideFooter) return null;

 return (
 <footer className="section-padding relative overflow-hidden border-t bg-card">
 <div className="container text-center">
      <Logo
 className="mt-20 justify-center gap-3 text-3xl lg:mt-30"
 iconClassName="w-10"
 />

 <h2 className="my-8 text-2xl lg:my-6 lg:text-5xl">
 Your operations. Your rules.{' '}
 <span className="text-gradient">Your success.</span>
 </h2>

 <div className="mx-auto flex max-w-sm justify-center gap-4.5">
 <Button className="flex-1" asChild>
 <Link
 href="https://console.fleetbase.io/onboard"
 target="_blank"
 rel="noopener noreferrer nofollow"
 data-cta-id="start_free_trial"
 data-cta-location="footer"
 data-cta-variant="primary"
 >
 Try Fleetbase Cloud
 </Link>
 </Button>
 <Button
 variant="secondary"
 className="border-input bg-accent flex-1 border"
 asChild
 >
 <Link
 href="/pricing"
 data-cta-id="view_pricing"
 data-cta-location="footer"
 data-cta-variant="secondary"
 >
 View Pricing
 </Link>
 </Button>
 </div>

 <p className="mt-3 text-sm">Open source · Modular platform · Self-hosted or cloud</p>
 </div>

 {/* Footer Navigation Links */}
 <div className="container mt-20 lg:mt-30">
 <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 text-left">
 {FOOTER_LINKS.map((section, index) => (
 <div key={index}>
 <h3 className="font-semibold text-sm mb-4 text-foreground">
 {section.title}
 </h3>
 <ul className="space-y-2">
 {section.links.map((link, linkIndex) => (
 'subheading' in link ? (
 <li key={linkIndex} className="pt-4 first:pt-0">
 <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
 {link.subheading}
 </h4>
 </li>
 ) : (
 <li key={linkIndex}>
 <Link
 href={link.href}
 className="text-xs text-muted-foreground hover:text-foreground transition-colors"
 {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
 >
 {link.label}
 </Link>
 </li>
 )
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>

 {/* Footer Bottom */}
 <div className="container mt-16 flex flex-col-reverse justify-between gap-8 text-xs lg:flex-row border-t pt-8">
 <div className="flex items-center justify-between gap-2">
 <p className="">
 © {new Date().getFullYear()} Fleetbase — Open-source logistics for everyone.
 </p>{' '}
 <div className="flex items-center gap-7 lg:hidden">
 {SOCIAL_LINKS.map((link, index) => (
 <Link
 key={index}
 href={link.href}
 className="transition-opacity hover:opacity-80"
 target="_blank"
 rel="noopener noreferrer"
 aria-label={link.name}
 >
 {link.icon}
 </Link>
 ))}
 </div>
 </div>

 <div className="hidden items-center gap-7 lg:flex">
 {SOCIAL_LINKS.map((link, index) => (
 <Link
 key={index}
 href={link.href}
 className="transition-opacity hover:opacity-80"
 target="_blank"
 rel="noopener noreferrer"
 aria-label={link.name}
 >
 {link.icon}
 </Link>
 ))}
 </div>
 </div>

 <GradientSVG className="absolute right-0 bottom-0 -z-10 hidden origin-bottom-right scale-50 rotate-30 dark:block md:scale-100 md:rotate-0" />
 </footer>
 );
};

export default Footer;

const GradientSVG = (props: React.SVGProps<SVGSVGElement>) => {
 return (
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={1728}
 height={846}
 fill="none"
 {...props}
 >
 <path
 fill="#D9D9D9"
 d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
 />
 <path
 fill="url(#a)"
 d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
 />
 <path
 stroke="url(#b)"
 strokeWidth={0.382}
 d="M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
 />
 <path
 fill="url(#c)"
 d="m1170.06 635.181 383.29 10.476c89.05 23.364-95.87-.687-14.62 49.327 129.26 79.561 496.5 237.203 415.69 243.884-131.61 10.88-539.49-145.574-692.48-205.16-122.39-47.67-112.25-85.547-91.88-98.527Z"
 />
 <path
 fill="url(#d)"
 d="M-589.438 206.029 1045.4 512.02l232.91 49.794-97.31 27.814-306.061 28.434c-52.525-1.145-204.218-25.902-390.785-115.779C320.26 423.329-330.864 259.672-589.438 206.029l-82.447-15.432c18.417 2.695 46.676 8.01 82.447 15.432Z"
 />
 <g filter="url(#e)">
 <path
 fill="url(#f)"
 d="m1178.94 817.498 871.42 102.661-430.03-28.582-441.39-74.079Z"
 />
 </g>
 <defs>
 <linearGradient
 id="a"
 x1={1421.68}
 x2={1373.8}
 y1={757.825}
 y2={919.52}
 gradientUnits="userSpaceOnUse"
 >
 <stop offset={0} stopColor="#9D83E7" />
 <stop offset={0.582} stopColor="#E74548" />
 </linearGradient>
 <linearGradient
 id="b"
 x1={1421.68}
 x2={1373.81}
 y1={757.825}
 y2={919.427}
 gradientUnits="userSpaceOnUse"
 >
 <stop stopColor="#10CBF4" />
 <stop offset={1} stopColor="#10CBF4" stopOpacity={0} />
 </linearGradient>
 <linearGradient
 id="c"
 x1={1151.22}
 x2={1703.59}
 y1={674.289}
 y2={839.434}
 gradientUnits="userSpaceOnUse"
 >
 <stop stopColor="#9259ED" />
 <stop offset={0.514} stopColor="#CF54EE" />
 <stop offset={1} stopColor="#FB8684" />
 </linearGradient>
 <linearGradient
 id="d"
 x1={564.644}
 x2={509.973}
 y1={350.376}
 y2={534.962}
 gradientUnits="userSpaceOnUse"
 >
 <stop stopColor="#B956EE" />
 <stop offset={1} stopColor="#9672FF" />
 </linearGradient>
 <linearGradient
 id="f"
 x1={1801.48}
 x2={1525.2}
 y1={895.985}
 y2={590.241}
 gradientUnits="userSpaceOnUse"
 >
 <stop stopColor="#00C7F9" />
 <stop offset={1} stopColor="#FF474A" />
 </linearGradient>
 <filter
 id="e"
 width={907.452}
 height={138.693}
 x={1160.92}
 y={799.482}
 colorInterpolationFilters="sRGB"
 filterUnits="userSpaceOnUse"
 >
 <feFlood floodOpacity={0} result="BackgroundImageFix" />
 <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
 <feGaussianBlur
 result="effect1_foregroundBlur_401_39876"
 stdDeviation={9.008}
 />
 </filter>
 </defs>
 </svg>
 );
};
