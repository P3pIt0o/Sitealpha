import { ScrollProgress } from '@/components/scroll-progress'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TechMarquee } from '@/components/tech-marquee'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
