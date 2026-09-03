import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import SecurityCompliancePageContent from './security-page-content';
import RelatedPages from '@/components/seo/related-pages';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/platform/security' },
  title: 'Security & Compliance — RBAC & Audit Logs',
  description:
    'End-to-end encryption, granular RBAC, MFA, audit logs and GDPR compliance, with full self-hosting for complete data sovereignty.',
  keywords: [
    'Fleetbase security',
    'logistics platform security',
    'IAM access control',
    'role-based access control logistics',
    'RBAC fleet management',
    'GDPR logistics software',
    'SOC 2 logistics platform',
    'self-hosted logistics security',
    'API key management',
    'audit logs fleet management',
    'data encryption logistics',
    'open-source security logistics',
  ],
  openGraph: {
    title: 'Security & Compliance | Fleetbase',
    description:
      'End-to-end encryption, granular RBAC, MFA, audit logs, and full self-hosting for complete data sovereignty.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Compliance | Fleetbase',
    description:
      'Enterprise-grade security built into every layer — encryption, RBAC, audit logs, and self-hosting for total control.',
  },
};

export default function SecurityCompliancePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="Fleetbase Security & Compliance"
        url="https://fleetbase.io/platform/security"
        description="Enterprise-grade security for logistics operations — end-to-end encryption, granular RBAC, MFA, comprehensive audit logs, GDPR compliance, and self-hosting for full data sovereignty."
        applicationCategory="SecurityApplication"
      />
      <SecurityCompliancePageContent />
      <RelatedPages heading="Explore related" />
    </>
  );
}
