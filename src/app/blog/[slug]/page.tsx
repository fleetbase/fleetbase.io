import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlogPostTracker } from '@/components/analytics/BlogPostTracker';
import { BlogPostingSchema } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { formatBlogHtml } from '@/lib/blog-html';
import { titleWithinLimit, truncateAtWord } from '@/lib/seo-text';
import {
  type BlogPost,
  getAllBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from '@/lib/ghost';

const BASE_URL = 'https://fleetbase.io';

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

// Pick related posts to link from each article. Prefer posts that share a tag
// with the current one (same topic cluster), then fall back to the most recent
// posts so every article links out to others — this keeps posts from becoming
// orphan pages and strengthens internal linking. `allPosts` is already sorted
// newest-first by the Ghost API.
function getRelatedPosts(allPosts: BlogPost[], current: BlogPost, count = 3) {
  const others = allPosts.filter((post) => post.id !== current.id);
  const currentTagSlugs = new Set(current.tags.map((tag) => tag.slug));
  const sameTag = others.filter((post) =>
    post.tags.some((tag) => currentTagSlugs.has(tag.slug)),
  );
  const sameTagIds = new Set(sameTag.map((post) => post.id));
  const rest = others.filter((post) => !sameTagIds.has(post.id));

  return [...sameTag, ...rest].slice(0, count);
}

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog',
    };
  }

  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;

  // Prefer the post's feature image; otherwise fall back to a branded
  // dynamic OG image built from the post title + excerpt so every post
  // gets a unique social card instead of the site-wide default.
  const fallbackOg = `${BASE_URL}/og?title=${encodeURIComponent(post.title)}&eyebrow=Blog${
    post.excerpt ? `&subtitle=${encodeURIComponent(post.excerpt)}` : ''
  }`;
  const image = [
    {
      url: post.featureImage || fallbackOg,
      alt: post.featureImageAlt || post.title,
    },
  ];

  // Ghost gives us the full excerpt (~500 characters on most posts). Google
  // truncates well before that, and Ahrefs flags every one of them, so the meta
  // description is cut to a word boundary while the page itself still renders
  // the full excerpt.
  const metaDescription = truncateAtWord(post.excerpt);

  return {
    title: titleWithinLimit(post.title),
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: metaDescription,
      publishedTime: post.publishedAt,
      images: image,
      authors: post.authors.map((author) => author.name),
      tags: post.tags.map((tag) => tag.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: metaDescription,
      images: image.map((item) => item.url),
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const contentHtml = await formatBlogHtml(post.html);
  const relatedPosts = getRelatedPosts(await getAllBlogPosts(), post);

  return (
    <div className="flex flex-col">
      <BlogPostingSchema
        url={canonicalUrl}
        headline={post.title}
        description={post.excerpt}
        image={post.featureImage}
        datePublished={post.publishedAt}
        authors={post.authors.map((author) => ({ name: author.name }))}
        tags={post.tags.map((tag) => tag.name)}
      />
      <BlogPostTracker
        slug={post.slug}
        tags={post.tags.map((t) => t.name)}
        publishedAt={post.publishedAt}
      />
      <section className="section-padding container">
        <div className="mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-8 px-0 hover:bg-transparent">
            <Link href="/blog">
              <ArrowLeft className="mr-2 size-4" />
              Back to blog
            </Link>
          </Button>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
              {post.isFeatured ? 'Featured article' : 'Blog article'}
            </span>
            <span>{formatPublishedDate(post.publishedAt)}</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {post.excerpt}
            </p>
          )}

          {(post.authors.length > 0 || post.tags.length > 0) && (
            <div className="mt-8 flex flex-col gap-4 border-y py-5 md:flex-row md:items-center md:justify-between">
              {post.authors.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Written by</span>
                  <span>{post.authors.map((author) => author.name).join(', ')}</span>
                </div>
              )}

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {post.featureImage && (
            <div className="mt-10 overflow-hidden rounded-3xl border bg-card">
              <Image
                src={post.featureImage}
                alt={post.featureImageAlt || post.title}
                width={1600}
                height={900}
                sizes="(min-width: 1200px) 1000px, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <article
            className="blog-content mx-auto mt-12 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight">
                Related articles
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    {related.featureImage && (
                      <div className="aspect-[16/9] overflow-hidden border-b bg-muted/30">
                        <Image
                          src={related.featureImage}
                          alt={related.featureImageAlt || related.title}
                          width={1200}
                          height={675}
                          sizes="(min-width: 768px) 30vw, 100vw"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        {related.tags[0] && (
                          <span className="rounded-full border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                            {related.tags[0].name}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {related.readingTime}
                        </span>
                      </div>
                      <h3 className="mb-3 flex-1 text-base font-semibold leading-snug group-hover:text-primary">
                        {related.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {formatPublishedDate(related.publishedAt)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Ready to put these ideas into practice?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Explore the platform, docs, and open-source modules behind the workflows we
                write about on the Fleetbase blog.
              </p>
              <Button asChild>
                <Link href="/product">
                  Explore Fleetbase <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
