import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { SITE_URL } from '@/content/blog'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Création de site internet à Genève | SiteAlpha – Agence web',
    template: '%s | SiteAlpha',
  },
  description:
    "Agence web à Genève spécialisée dans la création de sites vitrines et e-commerce sur mesure. Référencement Google inclus, design responsive et sites rapides pensés pour convertir.",
  applicationName: 'SiteAlpha',
  keywords: [
    'agence web Genève',
    'création site internet Genève',
    'site vitrine Genève',
    'site e-commerce Genève',
    'référencement Google Genève',
    'création de site web Suisse romande',
  ],
  generator: 'v0.app',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: 'SiteAlpha',
    locale: 'fr_CH',
    url: SITE_URL,
    title: 'Création de site internet à Genève | SiteAlpha – Agence web',
    description:
      "Agence web à Genève spécialisée dans la création de sites vitrines et e-commerce sur mesure. Référencement Google inclus et design responsive.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Création de site internet à Genève | SiteAlpha – Agence web',
    description:
      "Agence web à Genève : création de sites vitrines et e-commerce sur mesure, référencement Google inclus.",
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SiteAlpha',
    description:
      "Agence web à Genève spécialisée dans la création de sites vitrines et e-commerce sur mesure, avec référencement Google inclus, pour les PME de Suisse romande.",
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Genève',
      addressRegion: 'GE',
      addressCountry: 'CH',
    },
    areaServed: [
      { '@type': 'City', name: 'Genève' },
      { '@type': 'AdministrativeArea', name: 'Suisse romande' },
    ],
    serviceType: [
      'Création de site internet',
      'Site vitrine',
      'Site e-commerce',
      'Référencement Google (SEO)',
    ],
    knowsLanguage: ['fr-CH'],
    founder: {
      '@type': 'Person',
      name: 'Clément Roig',
      jobTitle: 'Fondateur de SiteAlpha',
    },
  }

  return (
    <html lang="fr" className={`dark ${jakarta.variable}`}>
      <body className="bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
