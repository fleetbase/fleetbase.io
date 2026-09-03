import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import NavigatorPageContent from './navigator-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/navigator' },
  title: 'Navigator — Open-Source Driver App',
  description:
    'The open-source driver app from Fleetbase. Real-time dispatch, turn-by-turn navigation, proof of delivery and offline support, iOS and Android.',
  keywords: [
    'driver app',
    'open source driver app',
    'fleet driver app',
    'proof of delivery app',
    'last mile delivery app',
    'Navigator Fleetbase',
    'white-label driver app',
    'iOS Android driver app',
  ],
  openGraph: {
    title: 'Navigator — Open-Source Driver App | Fleetbase',
    description:
      'Open-source iOS and Android driver app with live dispatch, turn-by-turn navigation, proof of delivery, and offline-first operation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigator — Open-Source Driver App | Fleetbase',
    description:
      'Free, white-label driver app for iOS and Android. Connects natively to Fleet-Ops dispatch.',
  },
};

export default function NavigatorPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Navigator"
        url="https://fleetbase.io/platform/navigator"
        description="Open-source iOS and Android driver app with real-time dispatch, turn-by-turn navigation, proof of delivery, and offline-first operation."
        applicationCategory="MobileApplication"
        operatingSystem="iOS, Android"
      />
      <NavigatorPageContent />
    </>
  );
}
