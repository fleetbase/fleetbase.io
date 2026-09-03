import type { Metadata } from 'next';

import SignInPageContent from './signin-page-content';

export const metadata: Metadata = {
  // Account screens have no search value and would only dilute the site's
  // quality signals. robots.txt already disallows these paths; the meta tag
  // covers the case where Google reaches one from an external link.
  robots: { index: false, follow: false },
  title: 'Sign In',
  description: 'Sign in to your Fleetbase account to manage your logistics operations.',
  keywords: 'fleetbase sign in, logistics platform login, fleet management login',
  openGraph: {
    title: 'Sign In | Fleetbase',
    description: 'Sign in to your Fleetbase account to manage your logistics operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In | Fleetbase',
    description: 'Sign in to your Fleetbase account to manage your logistics operations.',
  },
};

export default function SignInPage() {
  return <SignInPageContent />;
}
