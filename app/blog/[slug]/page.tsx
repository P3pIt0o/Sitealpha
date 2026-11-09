import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { ArticleBody } from '@/components/blog/article-body'
import { ArticleCard } from '@/components/blog/article-card'
import {
  articles,
  getArticle,
  formatDate,
  AUTHOR,
  SITE_URL,
} from '@/content/blog'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  const url = `${SITE_URL}/blog/${article.slug}`
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: AUTHOR.name }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: article.seoTitle,
      description: article.description,
      url,
      locale: 'fr_CH',
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [AUTHOR.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const url = `${SITE_URL}/blog/${article.slug}`
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    articleSection: article.category,
    inLanguage: 'fr-CH',
    datePublished: article.date,
    dateModified: article.updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      description: AUTHOR.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sitealpha',
      url: SITE_URL,
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  }

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="px-5 pt-32 pb-20 md:pt-40">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Tous les articles
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary">
              {article.category}
            </span>
            <span className="text-muted-foreground">
              {article.readingMinutes} min de lecture
            </span>
          </div>

          <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-3 border-y border-border py-4">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              CR
            </span>
            <div>
              <p className="font-semibold">{AUTHOR.name}</p>
              <p className="text-sm text-muted-foreground">
                {AUTHOR.role} · {formatDate(article.date)}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <ArticleBody blocks={article.content} />
          </div>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight">
              Questions fréquentes
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {article.faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <aside className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-pretty text-2xl font-bold">
              Un projet de site ou de référencement ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Parlons-en. Je vous réponds personnellement et sans engagement.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Me contacter
              <ArrowUpRight className="size-4" />
            </Link>
          </aside>
        </article>

        <section className="mx-auto mt-20 max-w-6xl" aria-labelledby="related">
          <h2 id="related" className="text-2xl font-bold tracking-tight">
            À lire ensuite
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
