'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Code2,
  Layout,
  LifeBuoy,
  Search,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Service = {
  n: string
  title: string
  icon: LucideIcon
  desc: string
}

const services: Service[] = [
  {
    n: '01',
    title: 'Site vitrine',
    icon: Layout,
    desc: "Des sites élégants et rapides pour présenter votre activité. Design sur mesure, responsive et pensé pour convertir vos visiteurs.",
  },
  {
    n: '02',
    title: 'Site e-commerce',
    icon: ShoppingBag,
    desc: 'Une boutique en ligne claire et performante, du catalogue au paiement, pour vendre vos produits sans friction.',
  },
  {
    n: '03',
    title: 'Application web',
    icon: Code2,
    desc: "Des interfaces sur mesure et des outils métier (réservation, tableau de bord, espace membre) adaptés à vos besoins.",
  },
  {
    n: '04',
    title: 'Performance & SEO',
    icon: Search,
    desc: 'Code optimisé, temps de chargement ultra-rapide et référencement naturel intégré pour maximiser votre visibilité.',
  },
  {
    n: '05',
    title: 'Accompagnement',
    icon: LifeBuoy,
    desc: "De la conception au lancement et au-delà, un suivi personnalisé et réactif pour garantir le succès durable de votre projet digital.",
  },
]

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max)

function ServiceCard({
  service,
  offset,
  reduced,
}: {
  service: Service
  offset: number // progress - index
  reduced: boolean
}) {
  const Icon = service.icon

  let style: React.CSSProperties = {}

  if (!reduced) {
    // Les cartes proches du premier plan (offset le plus élevé) passent devant
    const zIndex = Math.round((offset + 10) * 100)
    if (offset < 0) {
      // Carte à venir : empilée derrière, décalée vers le haut et plus petite
      const d = Math.max(offset, -4)
      style = {
        transform: `translate(-50%, calc(-50% + ${d * 26}px)) scale(${1 + d * 0.05})`,
        opacity: clamp(1 + d * 0.14, 0.45, 1),
        zIndex,
      }
    } else {
      // Carte active / passée : glisse vers le bas en s'effaçant
      style = {
        transform: `translate(-50%, calc(-50% + ${offset * 130}px))`,
        opacity: clamp(1 - offset * 1.15, 0, 1),
        zIndex,
      }
    }
  }

  const isFront = Math.abs(offset) < 0.5

  return (
    <article
      style={style}
      className={
        reduced
          ? 'relative w-full overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-9'
          : 'absolute left-1/2 top-1/2 w-[min(92%,40rem)] overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-2xl shadow-black/40 transition-[transform,opacity] duration-150 ease-out will-change-transform md:p-10'
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary md:size-14">
          <Icon className="size-6 md:size-7" />
        </span>
        <span className="text-xs font-semibold tracking-widest text-muted-foreground/60">
          {service.n}
        </span>
      </div>
      <h3 className="relative mt-8 text-2xl font-bold md:text-3xl">
        {service.title}
      </h3>
      <p className="relative mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
      {!reduced && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset transition-colors duration-300 ${
            isFront ? 'ring-primary/40' : 'ring-transparent'
          }`}
        />
      )}
    </article>
  )
}

export function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduced) return
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect()
        const scrollable = wrapper.offsetHeight - window.innerHeight
        const raw = clamp(-rect.top / scrollable, 0, 1)
        setProgress(raw * (services.length - 1))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced])

  return (
    <section id="services" className="px-5 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">
            Ce que je propose
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Des solutions web adaptées à chaque projet
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Chaque site est conçu à la main, sans template générique, pour
            correspondre exactement à votre univers.
          </p>
        </Reveal>
      </div>

      {reduced ? (
        <div className="mx-auto mt-14 grid max-w-2xl gap-5 pb-24 md:pb-32">
          {services.map((service) => (
            <ServiceCard
              key={service.n}
              service={service}
              offset={0}
              reduced
            />
          ))}
        </div>
      ) : (
        <div
          ref={wrapperRef}
          style={{ height: `${services.length * 90}vh` }}
          className="relative mt-8"
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <div className="relative h-[26rem] w-full max-w-3xl">
              {services.map((service, i) => (
                <ServiceCard
                  key={service.n}
                  service={service}
                  offset={progress - i}
                  reduced={false}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
