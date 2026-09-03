import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getAllBlogPosts } from '@/lib/ghost';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/blog' },
  title: 'Blog',
  description:
    'Product updates, engineering deep-dives, logistics industry insight and open-source news from the team building Fleetbase.',
  keywords: [
    'fleetbase blog',
    'logistics technology blog',
    'fleet management insights',
    'open source logistics news',
  ],
  openGraph: {
    title: 'Blog | Fleetbase',
    description:
      'Product updates, engineering deep-dives, and logistics industry insights from Fleetbase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | Fleetbase`,
    description: `Product updates, engineering deep-dives, and logistics industry insights from Fleetbase.`,
  },
};

export const revalidate = 300;

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export default async function BlogPage() {
  // Fetch every post (not just the latest 7) so the index links to the full
  // archive. Without this, older posts have no internal inlinks and become
  // orphan pages — discoverable only via the sitemap.
  const posts = await getAllBlogPosts();
  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];
  const remainingPosts = posts.filter((post) => post.id !== featuredPost?.id);
  // Keep the existing card grid focused on the 6 most recent for visual
  // balance; every older post is linked from the "More articles" archive below.
  const latestPosts = remainingPosts.slice(0, 6);
  const archivePosts = remainingPosts.slice(6);

  return (
    <div className="flex flex-col">
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Blog
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Insights from the <span className="text-primary">Fleetbase team.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Product updates, engineering deep-dives, logistics industry analysis, and
            open-source news. Written by the people building and using Fleetbase every
            day.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border bg-card">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 md:p-12">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {featuredPost.isFeatured ? 'Featured' : 'Latest'} article
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {formatPublishedDate(featuredPost.publishedAt)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.readingTime}
                      </span>
                    </div>
                    <h2 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-balance transition-colors group-hover:text-primary md:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    {featuredPost.tags.length > 0 && (
                      <div className="mb-8 flex flex-wrap gap-2">
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag.slug}
                            className="rounded-full border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read article <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>

                {featuredPost.featureImage && (
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group block border-t outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 lg:border-t-0 lg:border-l"
                  >
                    <Image
                      src={featuredPost.featureImage}
                      alt={featuredPost.featureImageAlt || featuredPost.title}
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-full min-h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Latest articles</h2>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-md"
                >
                  {post.featureImage && (
                    <div className="aspect-[16/9] overflow-hidden border-b bg-muted/30">
                      <Image
                        src={post.featureImage}
                        alt={post.featureImageAlt || post.title}
                        width={1200}
                        height={675}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {post.tags[0] && (
                        <span className="rounded-full border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                          {post.tags[0].name}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mb-3 flex-1 text-lg font-semibold leading-snug group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {formatPublishedDate(post.publishedAt)}
                      </span>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border bg-card p-8 text-center">
              <h3 className="text-xl font-semibold tracking-tight">No blog posts yet</h3>
              <p className="mt-3 text-muted-foreground">
                Connect your Ghost instance and publish your first article to populate the
                Fleetbase blog.
              </p>
            </div>
          )}
        </div>
      </section>

      {archivePosts.length > 0 && (
        <section className="border-t py-12 md:py-16">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">More articles</h2>
              <p className="mt-2 text-muted-foreground">
                Browse the full Fleetbase archive.
              </p>
            </div>

            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {archivePosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-b py-4 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="font-medium leading-snug transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatPublishedDate(post.publishedAt)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
                Explore the platform behind the articles
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Dive into the product, docs, and open-source modules that power the
                workflows we share on the Fleetbase blog.
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
