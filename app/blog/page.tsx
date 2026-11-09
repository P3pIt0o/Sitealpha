import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { Reveal } from '@/components/reveal'
import { ArticleCard } from '@/components/blog/article-card'
import { articles, SITE_URL } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog — Conseils SEO et création de sites web',
  description:
    "Guides pratiques sur le référencement (Google et IA), la création de sites web et la visibilité des PME en Suisse romande. Par Clément Roig, fondateur de Sitealpha.",
  keywords: [
    'blog web Suisse romande',
    'conseils SEO',
    'création site web',
    'référencement IA',
    'Sitealpha',
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: 'website',
    title: 'Blog Sitealpha — SEO et création de sites web',
    description:
      "Guides pratiques sur le référencement, la création de sites et la visibilité des PME en Suisse romande.",
    url: `${SITE_URL}/blog`,
    locale: 'fr_CH',
  },
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Sitealpha',
    description:
      'Conseils sur le référencement et la création de sites web pour les PME de Suisse romande.',
    url: `${SITE_URL}/blog`,
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.description,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
      author: { '@type': 'Person', name: 'Clément Roig' },
    })),
  }

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 md:pt-40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />

        <Reveal as="header" className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Le blog
          </span>
          <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Conseils pour être{' '}
            <span className="text-primary">visible et convaincant</span> en ligne
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Référencement Google et IA, création de sites, visibilité locale :
            des guides clairs pour les PME de Suisse romande. Sans jargon inutile.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <ArticleCard article={featured} featured />
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
