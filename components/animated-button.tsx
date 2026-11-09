'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: string
  href?: string
  onClick?: () => void
  icon?: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
  target?: string
  rel?: string
  'aria-label'?: string
}

/**
 * Bouton pilule avec effet de "swap" de texte au survol,
 * inspiré de l'ambiance de Bleeze.
 */
export function AnimatedButton({
  children,
  href,
  onClick,
  icon,
  variant = 'primary',
  className,
  target,
  rel,
  'aria-label': ariaLabel,
}: AnimatedButtonProps) {
  const base = cn(
    'group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300',
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'border border-border bg-transparent text-foreground hover:border-foreground/40',
    className,
  )

  const content = (
    <>
      <span className="relative block overflow-hidden">
        {/* texte visible */}
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        {/* texte dupliqué qui monte au survol */}
        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
      {icon ? (
        <span
          className={cn(
            'flex size-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-12',
            variant === 'primary'
              ? 'bg-primary-foreground/15'
              : 'bg-foreground/10',
          )}
        >
          {icon}
        </span>
      ) : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={base}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={base}>
      {content}
    </button>
  )
}
