/**
 * Marketing-site event taxonomy.
 *
 * Conventions (matching console.fleetbase.io):
 * - snake_case event names in {noun}_{verb} form (e.g. cta_clicked, form_submitted)
 * - All property names are snake_case
 * - Every event automatically gets `app: 'marketing'` via posthog.register()
 * - Property values must be JSON-serializable; never include PII like form values
 *
 * Add events here only when an existing event + properties cannot answer the
 * question. Resist event sprawl.
 */

export type CtaId =
  | 'start_free_trial'
  | 'book_demo'
  | 'view_pricing'
  | 'star_github'
  | 'view_github'
  | 'contact_sales'
  | 'contact_support'
  | 'join_discord'
  | 'whatsapp_chat'
  | 'request_quote'
  | 'pricing_tier_select'
  | 'signin'
  | 'signup'
  | 'download_mac'
  | 'download_windows';

export type CtaLocation =
  | 'navbar'
  | 'navbar_mobile'
  | 'hero'
  | 'final_cta'
  | 'footer'
  | 'features'
  | 'problem_solution'
  | 'testimonials'
  | 'deployment_options'
  | 'ledger_showcase'
  | 'fleetops_showcase'
  | 'open_source_advantage'
  | 'platform_modules'
  | 'industry_use_cases'
  | 'integrations_ecosystem'
  | 'pricing_card'
  | 'pricing_page'
  | 'contact_sales_page'
  | 'partners_page'
  | 'solutions_page'
  | 'developers_page'
  | 'platform_page'
  | 'compare_page'
  | 'trial_page'
  | 'download_page'
  | 'blog_post'
  | 'docs';

export type FormId =
  | 'signup'
  | 'signin'
  | 'otp'
  | 'partner_inquiry'
  | 'contact_sales'
  | 'newsletter';

/**
 * Discriminated union of all marketing-site events.
 *
 * Used by the typed track() wrapper to enforce property shape per event name.
 */
export type MarketingEvent =
  // CTAs & outbound links
  | {
      name: 'cta_clicked';
      properties: {
        cta_id: CtaId;
        cta_location: CtaLocation;
        cta_variant?: 'primary' | 'secondary' | 'tertiary';
        destination_url?: string;
        link_text?: string;
      };
    }
  | {
      name: 'outbound_link_clicked';
      properties: {
        href: string;
        host: string;
        link_text?: string;
        pathname: string;
        is_cta?: boolean;
      };
    }

  // Forms
  | {
      name: 'form_started';
      properties: { form_id: FormId; pathname: string };
    }
  | {
      name: 'form_submitted';
      properties: { form_id: FormId; pathname: string };
    }
  | {
      name: 'form_validation_failed';
      properties: {
        form_id: FormId;
        pathname: string;
        field_errors: string[];
      };
    }

  // Pricing
  | {
      name: 'pricing_viewed';
      properties: { billing_cycle: 'monthly' | 'annual' };
    }
  | {
      name: 'pricing_billing_toggled';
      properties: { to_cycle: 'monthly' | 'annual' };
    }
  | {
      name: 'pricing_tier_focused';
      properties: { tier: string };
    }
  | {
      name: 'pricing_tier_cta_clicked';
      properties: {
        tier: string;
        billing_cycle: 'monthly' | 'annual';
        monthly_price: number;
      };
    }
  | {
      name: 'pricing_calculator_changed';
      properties: {
        drivers: number;
        vehicles: number;
        storefronts: number;
        billing_cycle: 'monthly' | 'annual';
        estimated_total_cents: number;
      };
    }
  | {
      name: 'pricing_calculator_usage_expanded';
      properties: Record<string, never>;
    }

  // Docs
  | {
      name: 'docs_search_opened';
      properties: { pathname: string };
    }
  | {
      name: 'docs_search_query';
      properties: { query: string; result_count: number };
    }
  | {
      name: 'docs_search_result_clicked';
      properties: {
        query: string;
        result_path: string;
        result_index: number;
      };
    }
  | {
      name: 'docs_code_copied';
      properties: {
        pathname: string;
        language?: string;
        block_index?: number;
      };
    }
  | {
      name: 'docs_section_viewed';
      properties: { section: string };
    }

  // Blog
  | {
      name: 'blog_post_viewed';
      properties: {
        slug: string;
        tags?: string[];
        published_at?: string;
      };
    }
  | {
      name: 'blog_post_read_depth';
      properties: { slug: string; depth: 50 | 75 | 100 };
    }

  // GitHub
  | {
      name: 'github_star_count_viewed';
      properties: { count: number; pathname: string };
    };

// Note: clicks on social links (Discord, X, Instagram, WhatsApp, etc.) are
// captured automatically by the delegated outbound_link_clicked listener.
// No separate social_link_clicked event needed — group by `host` in PostHog.

export type EventName = MarketingEvent['name'];

export type EventProperties<N extends EventName> = Extract<
  MarketingEvent,
  { name: N }
>['properties'];

// ─── GA4 conversion bridge ───────────────────────────────────────────────────
//
// PostHog is the firehose; GA4 receives only curated conversion events used
// for Google Ads conversion tracking and GSC attribution. Adding a new
// conversion requires editing this map alone — the bridge in posthog.ts
// reads from it on every track() call.

export interface GAConversion {
  /** GA4 event name (snake_case). Use Google's recommended names where one
   *  exists (sign_up, generate_lead, select_item) — Google Ads recognises
   *  those out of the box. */
  eventName: string;
  /** Event params. GA4 caps at 25 params per event, 100 chars per value. */
  params?: Record<string, unknown>;
}

/**
 * Map a typed PostHog event to a GA4 conversion, or null to skip.
 *
 * Conversion choices:
 *  - CTAs that send a visitor to console.fleetbase.io (start_free_trial,
 *    signin, signup) → standalone events for Google Ads conversion config.
 *  - book_demo / contact_sales / partner_inquiry → generate_lead (recommended
 *    event Google Ads can target as a conversion).
 *  - signup form_submitted → sign_up (recommended event).
 *  - pricing_tier_cta_clicked → select_item with monetary value, so GA can
 *    compute conversion value distribution by tier.
 */
export function mapToGAConversion<N extends EventName>(
  name: N,
  properties: EventProperties<N>,
): GAConversion | null {
  if (name === 'cta_clicked') {
    const props = properties as EventProperties<'cta_clicked'>;
    const ctaMap: Partial<Record<CtaId, string>> = {
      start_free_trial: 'start_free_trial',
      book_demo: 'generate_lead',
      contact_sales: 'generate_lead',
      request_quote: 'generate_lead',
      signup: 'sign_up_intent',
      signin: 'login_intent',
    };
    const eventName = ctaMap[props.cta_id];
    if (!eventName) return null;
    return {
      eventName,
      params: {
        cta_id: props.cta_id,
        cta_location: props.cta_location,
        cta_variant: props.cta_variant,
      },
    };
  }

  if (name === 'form_submitted') {
    const props = properties as EventProperties<'form_submitted'>;
    const formMap: Partial<Record<FormId, string>> = {
      signup: 'sign_up',
      contact_sales: 'generate_lead',
      partner_inquiry: 'generate_lead',
      newsletter: 'newsletter_signup',
    };
    const eventName = formMap[props.form_id];
    if (!eventName) return null;
    return { eventName, params: { form_id: props.form_id } };
  }

  if (name === 'pricing_tier_cta_clicked') {
    const props = properties as EventProperties<'pricing_tier_cta_clicked'>;
    return {
      eventName: 'select_item',
      params: {
        item_name: props.tier,
        item_category: props.billing_cycle,
        value: props.monthly_price,
        currency: 'USD',
      },
    };
  }

  return null;
}
