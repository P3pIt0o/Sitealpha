const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Projets', href: '/#projets' },
  { label: "L'agence", href: '/#agence' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            α
          </span>
          Sitealpha
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SiteAlpha · Agence web à Genève
        </p>
      </div>
    </footer>
  )
}
