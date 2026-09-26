import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <div className='min-h-screen w-screen overflow-x-clip antialiased'>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
