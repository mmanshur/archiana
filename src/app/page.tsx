import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
