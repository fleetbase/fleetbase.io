import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Privacy Policy | Fleetbase',
 description: 'Fleetbase Privacy Policy — how we collect, use, and protect your data when using Fleetbase Cloud and SaaS services.',
 alternates: { canonical: 'https://fleetbase.io/privacy' },
 openGraph: {
 title: 'Privacy Policy | Fleetbase',
 description: 'How Fleetbase collects, uses, and protects your data.',
 },
 twitter: {
   card: 'summary_large_image',
   title: `Privacy Policy | Fleetbase`,
   description: `How Fleetbase collects, uses, and protects your data.`,
 },
};

const LAST_UPDATED = 'April 2025';
const EFFECTIVE_DATE = '1 April 2025';

export default function PrivacyPolicyPage() {
 return (
 <div className="section-padding">
 <div className="container mx-auto px-4 max-w-4xl">
 {/* Header */}
 <div className="mb-12">
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
 <span className="text-primary">●</span>
 <span>Legal</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
 <p className="text-muted-foreground">
 Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Effective date: {EFFECTIVE_DATE}
 </p>
 <p className="text-muted-foreground mt-2 text-sm">
 This Privacy Policy describes how <strong>Fleetbase Pte. Ltd.</strong> (&ldquo;Fleetbase&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares information about you when you use our website at <strong>fleetbase.io</strong> and our cloud platform at <strong>console.fleetbase.io</strong> (collectively, the &ldquo;Service&rdquo;). We are committed to protecting your privacy and handling your data with transparency.
 </p>
 </div>

 {/* Table of Contents */}
 <div className="bg-muted/30 border rounded-xl p-6 mb-12">
 <h2 className="font-semibold mb-4">Table of Contents</h2>
 <ol className="space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
 {[
 'Information We Collect',
 'How We Use Your Information',
 'Legal Basis for Processing (GDPR)',
 'How We Share Your Information',
 'Data Retention',
 'Data Security',
 'International Data Transfers',
 'Your Rights and Choices',
 'Cookies and Tracking Technologies',
 'Children\'s Privacy',
 'Third-Party Services',
 'Changes to This Policy',
 'Contact Us',
 ].map((item, i) => (
 <li key={item}>
 <a href={`#privacy-${i + 1}`} className="hover:text-primary transition-colors">
 {item}
 </a>
 </li>
 ))}
 </ol>
 </div>

 {/* Sections */}
 <div className="space-y-10">

 <section id="privacy-1">
 <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">We collect the following categories of information:</p>

 <h3 className="font-semibold mb-2">Account and Registration Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 When you create an account, we collect your name, email address, company name, phone number, and billing information. This information is necessary to provide the Service and process payments.
 </p>

 <h3 className="font-semibold mb-2">Usage and Platform Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 We collect data about how you use the Service, including log data (IP addresses, browser type, pages visited, timestamps), feature usage, API calls, webhook sends, and billable resource counts. This helps us improve the Service, bill accurately, and detect issues.
 </p>

 <h3 className="font-semibold mb-2">Customer Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 We process data that you submit to the Service in the course of your operations — including order details, driver information, vehicle data, customer contacts, and delivery records. This data belongs to you and is processed on your behalf.
 </p>

 <h3 className="font-semibold mb-2">Communications Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm">
 If you contact us via email, chat, or our support system, we retain records of those communications to help resolve your enquiries and improve our support.
 </p>
 </section>

 <section id="privacy-2">
 <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li>Provide, operate, and maintain the Service.</li>
 <li>Process transactions and send billing-related communications.</li>
 <li>Respond to your enquiries and provide customer support.</li>
 <li>Send product updates, security notices, and administrative messages.</li>
 <li>Monitor and analyse usage patterns to improve the Service.</li>
 <li>Detect, prevent, and address fraud, abuse, and security incidents.</li>
 <li>Comply with legal obligations and enforce our Terms of Service.</li>
 <li>Send marketing communications where you have given consent (you may opt out at any time).</li>
 </ul>
 </section>

 <section id="privacy-3">
 <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing (GDPR)</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">
 If you are located in the European Economic Area (EEA) or the United Kingdom, our legal bases for processing your personal data are:
 </p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li><strong>Contract performance</strong> — processing necessary to provide the Service under our agreement with you.</li>
 <li><strong>Legitimate interests</strong> — improving the Service, preventing fraud, and communicating about relevant updates.</li>
 <li><strong>Legal obligation</strong> — complying with applicable laws and regulations.</li>
 <li><strong>Consent</strong> — for marketing communications and optional cookies.</li>
 </ul>
 </section>

 <section id="privacy-4">
 <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">
 We do not sell your personal data. We may share your information with:
 </p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li><strong>Service providers</strong> — trusted third parties who assist us in operating the Service (e.g. cloud infrastructure providers, payment processors, email service providers). These parties are contractually bound to protect your data.</li>
 <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.</li>
 <li><strong>Legal requirements</strong> — when required by law, court order, or government authority, or to protect the rights, property, or safety of Fleetbase, our customers, or the public.</li>
 </ul>
 </section>

 <section id="privacy-5">
 <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
 <p className="text-muted-foreground leading-relaxed">
 We retain your account data for as long as your account is active or as needed to provide the Service. After account termination, we retain Customer Data for up to 30 days to allow you to export it, after which it is securely deleted. We may retain certain data for longer periods where required by law or for legitimate business purposes (e.g. billing records for 7 years as required by Singapore accounting regulations).
 </p>
 </section>

 <section id="privacy-6">
 <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
 <p className="text-muted-foreground leading-relaxed">
 We implement industry-standard security measures to protect your data, including:
 </p>
 <ul className="mt-3 space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li>Encryption of data at rest (AES-256) and in transit (TLS 1.2+).</li>
 <li>Role-based access controls limiting data access to authorised personnel.</li>
 <li>Regular security audits and vulnerability assessments.</li>
 <li>Multi-factor authentication for internal systems.</li>
 <li>Incident response procedures for security breaches.</li>
 </ul>
 <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
 While we take reasonable steps to protect your data, no security system is impenetrable. In the event of a data breach affecting your personal data, we will notify you as required by applicable law.
 </p>
 </section>

 <section id="privacy-7">
 <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
 <p className="text-muted-foreground leading-relaxed">
 Fleetbase is headquartered in Singapore. Your data may be processed in Singapore and in other countries where our service providers operate. When transferring data from the EEA or UK, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission to ensure your data receives an adequate level of protection.
 </p>
 </section>

 <section id="privacy-8">
 <h2 className="text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">
 Depending on your location, you may have the following rights regarding your personal data:
 </p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
 <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data.</li>
 <li><strong>Erasure</strong> — request deletion of your personal data (subject to legal retention obligations).</li>
 <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
 <li><strong>Restriction</strong> — request that we restrict processing of your data in certain circumstances.</li>
 <li><strong>Objection</strong> — object to processing based on legitimate interests or for direct marketing.</li>
 <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time.</li>
 </ul>
 <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
 To exercise any of these rights, please contact us at <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a>. We will respond within 30 days. If you are in the EEA, you also have the right to lodge a complaint with your local data protection authority.
 </p>
 </section>

 <section id="privacy-9">
 <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking Technologies</h2>
 <p className="text-muted-foreground leading-relaxed">
 We use cookies and similar tracking technologies on our website to improve your experience, analyse traffic, and personalise content. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website. We do not use cookies to track you across third-party websites for advertising purposes.
 </p>
 <p className="text-muted-foreground leading-relaxed mt-4">
 We use <strong>PostHog</strong> for first-party product analytics: pageviews, button clicks, and aggregate usage patterns help us understand which parts of the site are useful and which are not. PostHog cookies (prefixed <code className="px-1 py-0.5 bg-muted rounded">ph_</code>) are stored on the <code className="px-1 py-0.5 bg-muted rounded">.fleetbase.io</code> domain. We never capture form field values, and session replays mask all input fields by default. Visitors in the EU, EEA, UK, and Switzerland are asked to opt in before any data is captured. You can withdraw consent at any time by clearing the <code className="px-1 py-0.5 bg-muted rounded">fb_consent</code> cookie or contacting us at <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a>. We honor the <a href="https://globalprivacycontrol.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Global Privacy Control</a> (Sec-GPC) signal globally.
 </p>
 <p className="text-muted-foreground leading-relaxed mt-4">
 We also use <strong>Google Analytics 4</strong> on the marketing website for SEO attribution (Google Search Console) and Google Ads conversion tracking. GA4 cookies (<code className="px-1 py-0.5 bg-muted rounded">_ga</code>, <code className="px-1 py-0.5 bg-muted rounded">_ga_*</code>) are stored on the <code className="px-1 py-0.5 bg-muted rounded">fleetbase.io</code> domain. The GA4 loader script and data-collection requests are proxied through our own origin (<code className="px-1 py-0.5 bg-muted rounded">/gtm/*</code> and <code className="px-1 py-0.5 bg-muted rounded">/g/collect</code>) so no third-party hostnames are contacted by your browser. Google Analytics is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Google&rsquo;s privacy policy</a>. Visitors in opt-in jurisdictions are placed under Google&rsquo;s Consent Mode v2 default-denied state until they accept; even after acceptance, IP addresses are anonymised and we only forward conversion events (such as trial signups and demo requests), not the full event firehose. GA4 is not loaded on <code className="px-1 py-0.5 bg-muted rounded">console.fleetbase.io</code>.
 </p>
 <p className="text-muted-foreground leading-relaxed mt-4">
 We use <strong>Ahrefs Web Analytics</strong> to cross-reference site traffic with our Ahrefs SEO data (organic landing pages, referring domains, content performance). Ahrefs Web Analytics is <strong>cookieless</strong> and does not use fingerprinting or any cross-site identifiers — it does not set any cookies on your browser and does not require consent under GDPR. The script is served from <code className="px-1 py-0.5 bg-muted rounded">analytics.ahrefs.com</code>; only anonymous, aggregated pageview data is collected. Ahrefs&rsquo; processing is governed by the <a href="https://ahrefs.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Ahrefs privacy policy</a>.
 </p>
 </section>

 <section id="privacy-10">
 <h2 className="text-2xl font-bold mb-4">10. Children&apos;s Privacy</h2>
 <p className="text-muted-foreground leading-relaxed">
 The Service is not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a> and we will take steps to delete it.
 </p>
 </section>

 <section id="privacy-11">
 <h2 className="text-2xl font-bold mb-4">11. Third-Party Services</h2>
 <p className="text-muted-foreground leading-relaxed">
 The Service may contain links to or integrations with third-party websites and services. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you use in connection with Fleetbase.
 </p>
 </section>

 <section id="privacy-12">
 <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
 <p className="text-muted-foreground leading-relaxed">
 We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our website at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy.
 </p>
 </section>

 <section id="privacy-13">
 <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
 <p className="text-muted-foreground leading-relaxed">
 If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
 </p>
 <div className="mt-4 bg-muted/30 border rounded-lg p-4 text-sm space-y-1.5">
 <div><strong>Fleetbase Pte. Ltd.</strong></div>
 <div>Email: <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a></div>
 <div>Support: <a href="mailto:support@fleetbase.io" className="text-primary underline underline-offset-4">support@fleetbase.io</a></div>
 <div>Phone: +65 9780 3731</div>
 <div>Website: <Link href="/" className="text-primary underline underline-offset-4">fleetbase.io</Link></div>
 </div>
 </section>

 </div>

 {/* Footer nav */}
 <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
 <div className="text-sm text-muted-foreground">
 See also:{' '}
 <Link href="/terms" className="text-primary underline underline-offset-4 mr-3">Terms of Service</Link>
 <Link href="/licensing" className="text-primary underline underline-offset-4">Licensing</Link>
 </div>
 <div className="text-xs text-muted-foreground">
 &copy; {new Date().getFullYear()} Fleetbase Pte. Ltd. All rights reserved.
 </div>
 </div>
 </div>
 </div>
 );
}
