import type { Metadata } from 'next';
import SdksPageContent from './sdks-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/developers/sdks' },
  title: 'SDKs & Libraries — JavaScript, PHP & Storefront',
  description:
    'Official Fleetbase client libraries for JavaScript and PHP, plus a dedicated Storefront SDK. Integrate logistics into your app in minutes.',
  keywords: [
    'Fleetbase JavaScript SDK',
    'Fleetbase PHP SDK',
    'Storefront SDK',
    'fleet management SDK',
    'logistics API library',
    'fleetbase-js',
    'fleetbase-php',
    'storefront-js',
    'npm fleetbase',
  ],
  openGraph: {
    title: 'SDKs & Libraries | Fleetbase',
    description: 'Official JavaScript and PHP SDKs for the Fleetbase API. Get integrated in minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDKs & Libraries | Fleetbase',
    description:
      'Official client libraries for the Fleetbase platform — JavaScript, PHP, and Storefront.',
  },
};

export default function SdksPage() {
  return <SdksPageContent />;
}
