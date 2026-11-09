import { Lightbulb } from 'lucide-react'
import type { Block } from '@/content/blog'

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-4 text-pretty text-2xl font-bold tracking-tight md:text-3xl"
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={i}
                className="mt-2 text-pretty text-xl font-semibold tracking-tight"
              >
                {block.text}
              </h3>
            )
          case 'p':
            return (
              <p
                key={i}
                className="text-pretty text-[1.05rem] leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {j + 1}
                    </span>
                    <span className="text-pretty pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-primary pl-5 text-pretty text-lg font-medium italic leading-relaxed"
              >
                {block.text}
              </blockquote>
            )
          case 'callout':
            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5"
              >
                <Lightbulb className="size-5 shrink-0 text-primary" />
                <p className="text-pretty leading-relaxed text-foreground/90">
                  {block.text}
                </p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
