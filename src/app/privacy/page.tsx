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

const LAST_UPDATED = 'September 2026';
const EFFECTIVE_DATE = '1 September 2026';

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
 This Privacy Policy describes how <strong>Fleetbase Pte. Ltd.</strong> (&ldquo;Fleetbase&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares information about you when you use our website at <strong>fleetbase.io</strong> our cloud platform at <strong>console.fleetbase.io</strong>, and our mobile applications, including the <strong>Fleetbase Navigator</strong> driver app for iOS and Android (collectively, the &ldquo;Service&rdquo;). We are committed to protecting your privacy and handling your data with transparency. If you are a driver using Navigator, section 2 explains our collection and use of location data in full.
 </p>
 </div>

 {/* Table of Contents */}
 <div className="bg-muted/30 border rounded-xl p-6 mb-12">
 <h2 className="font-semibold mb-4">Table of Contents</h2>
 <ol className="space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
 {[
 'Information We Collect',
 'Location Data and Mobile Applications',
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

 <h3 className="font-semibold mb-2">Location Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 Our mobile applications access and collect precise location (GPS) and approximate location from a driver&rsquo;s device, including while the app is running in the background during an active trip. Our website and web console do not collect precise location. Section 2 sets out exactly what location data we access, when we access it, how we use it, who it is shared with, and how you can control or revoke it.
 </p>

 <h3 className="font-semibold mb-2">Device Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 When you use our mobile applications, we collect device identifiers, operating system and app version, device model, network connection type, battery level, and push notification tokens. We use this to deliver notifications, diagnose crashes, and support devices in the field.
 </p>

 <h3 className="font-semibold mb-2">Communications Data</h3>
 <p className="text-muted-foreground leading-relaxed text-sm">
 If you contact us via email, chat, or our support system, we retain records of those communications to help resolve your enquiries and improve our support.
 </p>
 </section>

 <section id="privacy-2">
 <h2 className="text-2xl font-bold mb-4">2. Location Data and Mobile Applications</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Our mobile applications — including <strong>Fleetbase Navigator</strong>, our driver application for iOS and Android — access and collect location data. This section explains what we collect, when we collect it, why we collect it, and how you can control it.
 </p>

 <h3 className="font-semibold mb-2">What location data we access and collect</h3>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside mb-4">
 <li><strong>Precise location (GPS)</strong> — latitude, longitude, accuracy, heading, speed, and timestamp, read from your device&rsquo;s location services.</li>
 <li><strong>Approximate location</strong> — derived from network, Wi-Fi, or cell signals where precise location is unavailable or has not been granted.</li>
 <li><strong>Background location</strong> — location collected while the app is not on screen or the device is locked, as described below.</li>
 </ul>

 <h3 className="font-semibold mb-2">When we collect it</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 We collect location only while a driver is signed in to the app and on duty — that is, while they have an active assigned order, trip, or task. Collection starts when the driver goes on duty or begins a trip, and stops when the trip is completed or they go off duty. We do not collect location when the app is signed out, or when the driver is off duty with no active assignment.
 </p>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 <strong>Background collection.</strong> During an active trip, the app continues to collect location in the background so that live tracking, navigation, ETAs, and route history remain accurate when the device is locked or the app is not in the foreground. On Android this runs as a foreground service with a persistent notification while location is being collected; on iOS the system location indicator is shown. Background collection ends when the trip ends.
 </p>

 <h3 className="font-semibold mb-2">How we use it</h3>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside mb-4">
 <li>Show the driver&rsquo;s live position to their dispatcher and fleet operator in the operational console.</li>
 <li>Provide navigation and routing to pickup and drop-off locations.</li>
 <li>Calculate ETAs, distance travelled, route history, and trip actualisation.</li>
 <li>Timestamp and verify operational events — arrival, pickup, boarding, drop-off, proof of delivery, and zone or geofence entry and exit.</li>
 <li>Support safety, incident investigation, and dispute resolution.</li>
 <li>Produce operational and performance reporting for the fleet operator.</li>
 </ul>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 We do <strong>not</strong> use location data for advertising, and we do not sell it.
 </p>

 <h3 className="font-semibold mb-2">Who it is shared with</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 Location collected through our mobile applications is Customer Data. It is made available to the fleet operator that issued the driver&rsquo;s account — normally the driver&rsquo;s employer or contracting organisation — and to that operator&rsquo;s authorised users and integrations. We also share it with the infrastructure, mapping, and routing providers that we use to deliver these features, and with authorities where we are legally required to do so, as set out in section 5. Where an operator self-hosts Fleetbase, location data remains in that operator&rsquo;s own infrastructure.
 </p>

 <h3 className="font-semibold mb-2">Retention</h3>
 <p className="text-muted-foreground leading-relaxed text-sm mb-4">
 Location points and trip history are retained for as long as the fleet operator&rsquo;s account is active, subject to any retention period that operator configures, and are then deleted in accordance with section 6.
 </p>

 <h3 className="font-semibold mb-2">Your choices and how to revoke access</h3>
 <p className="text-muted-foreground leading-relaxed text-sm">
 Location permission is requested at runtime, and you can grant, limit, or revoke it at any time in your device settings — on Android under Settings → Apps → Fleetbase Navigator → Permissions → Location, and on iOS under Settings → Privacy &amp; Security → Location Services. Revoking location access will prevent the app from performing live tracking, navigation, and trip actualisation, and your fleet operator may require it as a condition of using the app for work. Because the fleet operator controls this data, drivers should direct access, correction, and deletion requests to their operator in the first instance; see section 9 for your rights and our contact details.
 </p>
 </section>

 <section id="privacy-3">
 <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li>Provide, operate, and maintain the Service.</li>
 <li>Track trips in real time, navigate drivers, calculate ETAs, and record route history using location data collected by our mobile applications (see section 2).</li>
 <li>Process transactions and send billing-related communications.</li>
 <li>Respond to your enquiries and provide customer support.</li>
 <li>Send product updates, security notices, and administrative messages.</li>
 <li>Monitor and analyse usage patterns to improve the Service.</li>
 <li>Detect, prevent, and address fraud, abuse, and security incidents.</li>
 <li>Comply with legal obligations and enforce our Terms of Service.</li>
 <li>Send marketing communications where you have given consent (you may opt out at any time).</li>
 </ul>
 </section>

 <section id="privacy-4">
 <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
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

 <section id="privacy-5">
 <h2 className="text-2xl font-bold mb-4">5. How We Share Your Information</h2>
 <p className="text-muted-foreground leading-relaxed mb-3">
 We do not sell your personal data, and we do not share it for advertising purposes. We may share your information with:
 </p>
 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
 <li><strong>Service providers</strong> — trusted third parties who assist us in operating the Service (e.g. cloud infrastructure providers, payment processors, email service providers). These parties are contractually bound to protect your data.</li>
 <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.</li>
 <li><strong>Legal requirements</strong> — when required by law, court order, or government authority, or to protect the rights, property, or safety of Fleetbase, our customers, or the public.</li>
 <li><strong>Your fleet operator</strong> — if you use our mobile applications as a driver, the operational data you generate, including location and trip history, is made available to the organisation that issued your account and its authorised users and integrations (see section 2).</li>
 </ul>
 </section>

 <section id="privacy-6">
 <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
 <p className="text-muted-foreground leading-relaxed">
 We retain your account data for as long as your account is active or as needed to provide the Service. After account termination, we retain Customer Data for up to 30 days to allow you to export it, after which it is securely deleted. We may retain certain data for longer periods where required by law or for legitimate business purposes (e.g. billing records for 7 years as required by Singapore accounting regulations). Location and trip history collected through our mobile applications is retained on the same basis, subject to any shorter retention period configured by the fleet operator.
 </p>
 </section>

 <section id="privacy-7">
 <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
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

 <section id="privacy-8">
 <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
 <p className="text-muted-foreground leading-relaxed">
 Fleetbase is headquartered in Singapore. Your data may be processed in Singapore and in other countries where our service providers operate. When transferring data from the EEA or UK, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission to ensure your data receives an adequate level of protection.
 </p>
 </section>

 <section id="privacy-9">
 <h2 className="text-2xl font-bold mb-4">9. Your Rights and Choices</h2>
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

 <section id="privacy-10">
 <h2 className="text-2xl font-bold mb-4">10. Cookies and Tracking Technologies</h2>
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

 <section id="privacy-11">
 <h2 className="text-2xl font-bold mb-4">11. Children&apos;s Privacy</h2>
 <p className="text-muted-foreground leading-relaxed">
 The Service is not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at <a href="mailto:hello@fleetbase.io" className="text-primary underline underline-offset-4">hello@fleetbase.io</a> and we will take steps to delete it.
 </p>
 </section>

 <section id="privacy-12">
 <h2 className="text-2xl font-bold mb-4">12. Third-Party Services</h2>
 <p className="text-muted-foreground leading-relaxed">
 The Service may contain links to or integrations with third-party websites and services. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you use in connection with Fleetbase.
 </p>
 </section>

 <section id="privacy-13">
 <h2 className="text-2xl font-bold mb-4">13. Changes to This Policy</h2>
 <p className="text-muted-foreground leading-relaxed">
 We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our website at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy.
 </p>
 </section>

 <section id="privacy-14">
 <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
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
