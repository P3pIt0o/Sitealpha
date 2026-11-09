const techs = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Framer',
  'Node.js',
  'Vercel',
  'SEO',
  'UI / UX Design',
]

export function TechMarquee() {
  return (
    <section
      aria-label="Technologies utilisées"
      className="border-y border-border py-8"
    >
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Les outils que j&apos;utilise au quotidien
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {techs.map((tech) => (
            <TechItem key={`a-${tech}`} label={tech} />
          ))}
        </div>
        <div
          aria-hidden
          className="animate-marquee flex shrink-0 items-center gap-12 pr-12"
        >
          {techs.map((tech) => (
            <TechItem key={`b-${tech}`} label={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechItem({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap text-xl font-semibold text-muted-foreground/70 transition-colors hover:text-foreground md:text-2xl">
      {label}
    </span>
  )
}
