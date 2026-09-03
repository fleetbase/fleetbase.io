import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

import { getMDXComponents } from '@/components/mdx-components';
import { buildDocsMetadata } from '@/lib/docs-metadata';
import { extensionDevelopmentSource } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = extensionDevelopmentSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const isOverviewPage = !params.slug || params.slug.length === 0;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}
      article={{ className: 'pt-4 md:pt-6' }}
    >
      {!isOverviewPage && (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return extensionDevelopmentSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = extensionDevelopmentSource.getPage(params.slug);
  if (!page) notFound();

  return buildDocsMetadata({
    data: page.data,
    baseUrl: '/docs/extension-development',
    slug: params.slug,
  });
}
