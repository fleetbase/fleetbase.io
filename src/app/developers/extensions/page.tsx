import type { Metadata } from 'next';
import DeveloperExtensionsPageContent from './extensions-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/developers/extensions' },
  title: 'Build Extensions — Custom Platform Modules',
  description:
    'Build, publish and distribute Fleetbase extensions with Ember.js and Laravel. Scaffold full-stack modules and UI components with the CLI.',
  keywords: [
    'Fleetbase extensions',
    'build Fleetbase extension',
    'logistics platform plugin',
    'Ember.js extension',
    'Laravel extension',
    'fleet management module',
    'Fleetbase CLI',
    'extension registry',
    'open source logistics',
  ],
  openGraph: {
    title: 'Build Extensions | Fleetbase Developer Platform',
    description:
      'Build custom modules for Fleetbase using Ember.js and Laravel. Scaffold, develop, and publish extensions to the marketplace.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Extensions | Fleetbase',
    description:
      'Build and publish custom Fleetbase extensions. Full-stack modules, backend integrations, and UI components.',
  },
};

export default function DeveloperExtensionsPage() {
  return <DeveloperExtensionsPageContent />;
}
