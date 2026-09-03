import type { Metadata } from 'next';
import ChangelogPageContent from './changelog-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/changelog' },
  title: 'Changelog',
  description: 'Release notes for the Fleetbase platform — the latest updates, new features, fixes and improvements, version by version.',
  keywords: 'fleetbase changelog, platform updates, new features, release notes',
  openGraph: {
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
  },
};

export default function ChangelogPage() {
  return <ChangelogPageContent />;
}
