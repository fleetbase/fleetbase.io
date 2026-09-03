/**
 * JSON-LD structured data components for SEO.
 * These inject machine-readable schema.org markup that Google uses for rich results.
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fleetbase',
    url: 'https://fleetbase.io',
    logo: 'https://fleetbase.io/images/filled-icon.png',
    sameAs: [
      'https://github.com/fleetbase/fleetbase',
      'https://twitter.com/fleetbase_io',
      'https://www.linkedin.com/company/fleetbase',
      'https://discord.com/invite/HnTqQ6zAVn',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hello@fleetbase.io',
        contactType: 'sales',
      },
      {
        '@type': 'ContactPoint',
        email: 'support@fleetbase.io',
        contactType: 'customer support',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SG',
      addressLocality: 'Singapore',
    },
    foundingDate: '2021',
    founders: [
      { '@type': 'Person', name: 'Shiv Thakker' },
      { '@type': 'Person', name: 'Ronald Richardson' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fleetbase',
    alternateName: 'Fleetbase — Open-Source Logistics & Supply Chain Platform',
    url: 'https://fleetbase.io',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Fleetbase',
      url: 'https://fleetbase.io',
      logo: 'https://fleetbase.io/images/filled-icon.png',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Ahrefs reports "Google rich results validation error" on the 25 pages that
// carry this schema. The missing property is aggregateRating (or review) —
// every other required field (name, applicationCategory, operatingSystem and an
// offers block with price and priceCurrency) is present and correct below.
//
// We are deliberately not satisfying it. Google requires aggregateRating to be
// backed by real, user-visible reviews on the page; inventing a rating to clear
// a validation warning would be fabricating data and is a manual-action risk.
// The warning stays until Fleetbase publishes genuine review data, at which
// point add an aggregateRating sourced from it.
export function SoftwareApplicationSchema({
  name = 'Fleetbase',
  url = 'https://fleetbase.io',
  description = 'Open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud, no per-seat pricing.',
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web, Android, iOS',
  // The Cloud platform fee. Drivers, vehicles and extra storefronts are billed
  // on top at $5 each, which is why the Offer carries a description rather than
  // presenting $29 as the whole price.
  price = '29',
}: {
  name?: string;
  url?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  price?: string;
} = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory,
    operatingSystem,
    url,
    description,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      description:
        'Platform fee, every module included. Plus $5 per month for each driver and vehicle, and each storefront beyond the first. Orders are free at any volume.',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
    },
    author: {
      '@type': 'Organization',
      name: 'Fleetbase',
      url: 'https://fleetbase.io',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  price,
  url,
}: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    brand: {
      '@type': 'Brand',
      name: 'Fleetbase',
    },
  };
  if (price) {
    schema.offers = {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authors,
  tags,
}: {
  url: string;
  headline: string;
  description: string;
  image?: string | null;
  datePublished: string;
  dateModified?: string;
  authors: { name: string }[];
  tags?: string[];
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: authors.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Fleetbase',
      url: 'https://fleetbase.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fleetbase.io/images/filled-icon.png',
      },
    },
  };
  if (image) {
    schema.image = image;
  }
  if (tags && tags.length > 0) {
    schema.keywords = tags.join(', ');
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
