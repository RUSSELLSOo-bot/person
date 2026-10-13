import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Publications } from './Publications'
import { Research } from './Research'
import { Resume } from './Resume'

export function PortfolioHome() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 md:py-12">
      <Header />
      <div className="mt-10 space-y-[var(--space-section)]">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Publications />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
