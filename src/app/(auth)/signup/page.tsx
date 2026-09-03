import type { Metadata } from 'next';

import SignUpPageContent from './signup-page-content';

export const metadata: Metadata = {
  // Account screens have no search value and would only dilute the site's
  // quality signals. robots.txt already disallows these paths; the meta tag
  // covers the case where Google reaches one from an external link.
  robots: { index: false, follow: false },
  title: 'Create Your Account',
  description: 'Create a free Fleetbase account and start building your logistics operations today.',
  keywords: 'fleetbase signup, create account, free logistics platform',
  openGraph: {
    title: 'Create Your Account | Fleetbase',
    description: 'Create a free Fleetbase account and start building your logistics operations today.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Account | Fleetbase',
    description: 'Create a free Fleetbase account and start building your logistics operations today.',
  },
};

export default function SignUpPage() {
  return <SignUpPageContent />;
}
