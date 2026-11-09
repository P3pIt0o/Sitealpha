import { Reveal } from '@/components/reveal'

const values = [
  {
    title: 'Sur mesure',
    desc: 'Aucun template générique. Chaque site est conçu et codé à la main selon votre univers.',
  },
  {
    title: 'Rapide & moderne',
    desc: 'Des sites construits avec des technologies actuelles pour un chargement rapide et fluide.',
  },
  {
    title: 'À votre écoute',
    desc: 'Un interlocuteur unique, disponible et transparent, du premier échange à la mise en ligne.',
  },
]

export function About() {
  return (
    <section id="agence" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold text-primary">
              L&apos;agence web
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
              SiteAlpha, votre agence web à Genève
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              SiteAlpha est une agence web basée à Genève, spécialisée dans la
              création de sites vitrines et e-commerce sur mesure pour les PME et
              indépendants de Suisse romande. Passionné par le web, je conçois et
              développe chaque site à la main pour un résultat unique et
              performant.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Mon objectif&nbsp;: des sites soignés, rapides et optimisés pour le
              référencement Google, avec le même niveau d&apos;exigence sur chaque
              projet — du concept d&apos;études à ma première réalisation en
              ligne, Itinea.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
