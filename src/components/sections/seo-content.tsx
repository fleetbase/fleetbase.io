/**
 * SEO Content Block
 * Provides rich, keyword-dense prose for search engine indexing.
 * Visually minimal but semantically rich.
 */
export default function SeoContent() {
  return (
    <section className="border-t border-border/40 bg-muted/20 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Column 1 */}
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Open-Source Fleet Management Software
              </h2>
              <p>
                Fleetbase is a fully open-source fleet management and transportation management system (TMS) built for logistics operators, courier services, food delivery companies, e-commerce fulfillment teams, and enterprise supply chains. Unlike proprietary fleet management platforms that charge per seat or lock you into annual contracts, Fleetbase gives you complete ownership of your data and infrastructure — deploy on your own servers or use Fleetbase Cloud.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Real-Time Dispatch & Order Management
              </h2>
              <p>
                The Fleet-Ops module provides real-time order dispatch, live GPS tracking, route optimization, proof of delivery (POD), driver management, and a fully configurable order activity flow. Whether you are running last-mile delivery, long-haul trucking, healthcare logistics, or waste management, Fleet-Ops adapts to your operational model without custom development.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Self-Hosted or Cloud Deployment
              </h2>
              <p>
                Fleetbase supports Docker, Kubernetes, and bare-metal deployment for organizations that require full data sovereignty. The self-hosted option is ideal for government agencies, healthcare providers, and enterprises operating in regulated environments. Cloud deployment on Fleetbase Cloud gives you a fully managed, auto-scaling infrastructure with zero DevOps overhead.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Open-Source Alternative to Onfleet, Tookan & Route4Me
              </h2>
              <p>
                Fleetbase is the leading open-source alternative to Onfleet, Tookan, Route4Me, and other proprietary delivery management platforms. Unlike these SaaS tools, Fleetbase never charges per task or per delivery, sets no limit on the orders you run, and uses no black-box algorithms. You get the full source code under AGPL-3.0, a commercial licence for proprietary deployments, and a growing ecosystem of community extensions.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Developer-First Logistics Platform
              </h2>
              <p>
                Fleetbase exposes a comprehensive REST API, webhooks for real-time event streaming, and an extension framework built on Ember.js and Laravel. Developers can build custom modules, integrate with ERP systems, payment gateways, telematics providers, and communication platforms. The Fleetbase Extensions Registry hosts community-built integrations for Stripe, Twilio, QuickBooks, SAP, and more.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Built for Scale — From Startups to Enterprise
              </h2>
              <p>
                Fleetbase powers logistics operations across courier services, food delivery, e-commerce, healthcare, government, and container logistics. The platform supports multi-tenant organizations, role-based access control (RBAC), white-label deployments, and custom branding. Founded in 2018 and open-sourced in 2022, Fleetbase is trusted by over 8,000 organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
