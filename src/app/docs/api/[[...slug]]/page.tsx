import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

import { LanguageTabsProvider } from '@/components/api-reference';
import { getMDXComponents } from '@/components/mdx-components';
import { buildDocsMetadata } from '@/lib/docs-metadata';
import { apiSource } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = apiSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // API pages own their headers — the index uses h2 sections for Introduction,
  // Authentication, etc., and resource pages use <ResourceHeader>. Don't
  // render DocsTitle/DocsDescription so we don't get duplicates.
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ enabled: false }}
      article={{ className: 'pt-4 md:pt-6' }}
    >
      <DocsBody>
        <LanguageTabsProvider>
          <MDX components={getMDXComponents()} />
        </LanguageTabsProvider>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return apiSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = apiSource.getPage(params.slug);
  if (!page) notFound();

  return buildDocsMetadata({
    data: page.data,
    baseUrl: '/docs/api',
    slug: params.slug,
  });
}
