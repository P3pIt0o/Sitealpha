'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  tagline: string
  real?: boolean
  href?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'DetailFlow',
    category: 'Plateforme web · SaaS',
    description:
      "Application web complète dédiée au detailing automobile intégrant réservation en ligne, gestion des prestations, calendrier intelligent, espace administrateur et expérience utilisateur optimisée pour le mobile.",
    image: '/projects/detailflow.png',
    tags: ['React', 'Dashboard', 'Booking'],
    tagline: 'Projet réel · En ligne',
    real: true,
    href: 'https://www.detailflow.fr',
    featured: true,
  },
  {
    title: 'Itinea',
    category: 'Site vitrine & réservation',
    description:
      "Plateforme de création d'itinéraires de voyage en famille sur mesure. Un projet réel, en ligne, pensé pour aider les familles à préparer leurs vacances sereinement.",
    image: '/projects/itinea.png',
    tags: ['Next.js', 'Design', 'SEO'],
    tagline: 'Projet réel · En ligne',
    real: true,
    href: 'https://www.itinea.ch',
  },
  {
    title: 'Maison Verde',
    category: 'Restaurant · Site vitrine',
    description:
      "Site vitrine pour un restaurant fictif : menu, galerie et module de réservation. Réalisé dans le cadre de mes études pour travailler l'ambiance et la mise en page.",
    image: '/projects/restaurant.png',
    tags: ['Design', 'Responsive'],
    tagline: "Projet d'études",
  },
  {
    title: 'Lumière Studio',
    category: 'Portfolio photographe',
    description:
      "Portfolio minimaliste pour mettre en valeur une galerie photo. Projet personnel centré sur la typographie et les animations discrètes.",
    image: '/projects/portfolio.png',
    tags: ['UI / UX', 'Animations'],
    tagline: 'Projet personnel',
  },
  {
    title: 'Kicksphere',
    category: 'Concept e-commerce',
    description:
      "Concept de boutique de sneakers : fiches produits, panier et parcours d'achat. Réalisé pour explorer les mécaniques d'un site e-commerce.",
    image: '/projects/ecommerce.png',
    tags: ['E-commerce', 'React'],
    tagline: "Projet d'études",
  },
  {
    title: 'FinFlow',
    category: 'Concept application web',
    description:
      "Maquette de tableau de bord analytique : graphiques, indicateurs et interface sombre. Projet d'études pour m'exercer aux interfaces de données.",
    image: '/projects/dashboard.png',
    tags: ['Dashboard', 'Data viz'],
    tagline: "Projet d'études",
  },
]

export function Projects() {
  return (
    <section id="projets" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">
            Mes réalisations
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Des projets nés pendant mon parcours
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Un aperçu de ce que je construis. DetailFlow et Itinea sont des
            projets réels en ligne&nbsp;; les autres sont des projets
            d&apos;études et personnels réalisés pour progresser.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const Wrapper = project.href ? 'a' : 'div'

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Reveal
      as="article"
      delay={(index % 2) * 90}
      className={cn(project.featured && 'md:col-span-2')}
    >
      <Wrapper
        onMouseMove={handleMove}
        {...(project.href
          ? {
              href: project.href,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        className={cn(
          'spotlight group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10',
          project.href && 'cursor-pointer',
        )}
      >
        <div
          className={cn(
            'relative z-10 grid',
            project.featured ? 'md:grid-cols-2' : 'grid-cols-1',
          )}
        >
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image || '/placeholder.svg'}
              alt={`Aperçu du projet ${project.title}`}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:min-h-[260px]"
            />
            <span
              className={cn(
                'absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur',
                project.real
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/70 text-muted-foreground',
              )}
            >
              {project.real ? (
                <span className="size-1.5 rounded-full bg-primary-foreground" />
              ) : null}
              {project.tagline}
            </span>
          </div>

          <div className="flex flex-col p-6 md:p-8">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
            <h3 className="mt-2 flex items-center gap-2 text-2xl font-bold">
              {project.title}
              {project.href ? (
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              ) : null}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </Reveal>
  )
}
