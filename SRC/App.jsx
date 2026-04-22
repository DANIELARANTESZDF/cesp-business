import { Footer } from './components/Footer'
import { FinalCtaSection } from './components/FinalCtaSection'
import { HeroSection } from './components/HeroSection'
import { LocalAuthoritySection } from './components/LocalAuthoritySection'
import { ProblemSolutionSection } from './components/ProblemSolutionSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteHeader } from './components/SiteHeader'
import { TestimonialsSection } from './components/TestimonialsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(6,182,212,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.7),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <SiteHeader />

      <main id="top" className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:gap-10 lg:px-8 lg:pt-12">
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <TestimonialsSection />
        <LocalAuthoritySection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  )
}

export default App