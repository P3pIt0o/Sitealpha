'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { type Article, formatDate } from '@/content/blog'

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article
  featured?: boolean
}) {
  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      onMouseMove={handleMove}
      className="spotlight group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-4 flex items-center gap-3 text-xs">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary">
            {article.category}
          </span>
          <span className="text-muted-foreground">
            {article.readingMinutes} min de lecture
          </span>
        </div>

        <h3
          className={
            featured
              ? 'text-pretty text-2xl font-bold leading-tight md:text-3xl'
              : 'text-pretty text-xl font-bold leading-tight'
          }
        >
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Lire
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
