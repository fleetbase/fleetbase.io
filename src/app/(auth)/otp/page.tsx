import type { Metadata } from 'next';

import OTPPageContent from './otp-page-content';

export const metadata: Metadata = {
  // Account screens have no search value and would only dilute the site's
  // quality signals. robots.txt already disallows these paths; the meta tag
  // covers the case where Google reaches one from an external link.
  robots: { index: false, follow: false },
  title: 'Verify Your Account',
  description: 'Enter your one-time passcode to verify your Fleetbase account.',
  keywords: 'fleetbase login, otp verification, account access',
  openGraph: {
    title: 'Verify Your Account | Fleetbase',
    description: 'Enter your one-time passcode to verify your Fleetbase account.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Your Account | Fleetbase',
    description: 'Enter your one-time passcode to verify your Fleetbase account.',
  },
};

export default function OTPPage() {
  return <OTPPageContent />;
}
