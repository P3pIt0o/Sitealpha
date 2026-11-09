'use client'

import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AnimatedButton } from '@/components/animated-button'
import { CountUp } from '@/components/count-up'

export function Hero() {
  const haloRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const halo = haloRef.current
    if (!halo) return
    const { clientX, clientY } = e
    halo.style.transform = `translate(-50%, -50%) translate(${
      (clientX / window.innerWidth - 0.5) * 60
    }px, ${(clientY / window.innerHeight - 0.5) * 40}px)`
  }

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      className="relative overflow-hidden px-5 pb-20 pt-36 md:pt-44"
    >
      {/* halo d'arrière-plan interactif */}
      <div
        ref={haloRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] transition-transform duration-300 ease-out"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background))]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="hero-enter inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="flex size-4 items-center justify-center rounded-[3px] bg-[#d52b1e] text-[10px] font-bold text-white">
            +
          </span>
          Agence web · Genève &amp; Suisse romande
        </div>

        <h1
          className="hero-enter mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.15s' }}
        >
          Création de sites internet à{' '}
          <span className="text-shimmer bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Genève
          </span>
        </h1>

        <p
          className="hero-enter mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: '0.28s' }}
        >
          SiteAlpha est une agence web à Genève spécialisée dans la création de
          sites vitrines et e-commerce sur mesure. Du design au référencement
          Google, je transforme vos idées en une présence digitale qui convertit.
        </p>

        <div
          className="hero-enter mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: '0.4s' }}
        >
          <AnimatedButton
            href="#projets"
            variant="primary"
            icon={<ArrowDown className="size-4" />}
          >
            Voir mes projets
          </AnimatedButton>
          <AnimatedButton
            href="#contact"
            variant="outline"
            icon={<ArrowUpRight className="size-4" />}
          >
            Démarrer un projet
          </AnimatedButton>
        </div>

        <div
          className="hero-enter mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          style={{ animationDelay: '0.52s' }}
        >
          <Stat
            value={<CountUp end={100} suffix="%" />}
            label="Sur mesure"
          />
          <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
          <Stat value="Next.js" label="Technologie moderne" />
          <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
          <Stat value="SEO" label="Optimisé dès le départ" />
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
}: {
  value: React.ReactNode
  label: string
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base font-bold text-foreground">{value}</span>
      <span className="text-xs">{label}</span>
    </div>
  )
}
