import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section
      id='top'
      className='relative flex min-h-svh items-center overflow-hidden border-b border-line pt-16'
    >
      {/* Background image — full bleed */}
      <Image
        src='/images/archiana-hero.jpg'
        alt='Architectural interior — Archiana hero'
        fill
        priority
        sizes='100vw'
        className='object-cover object-center'
      />

      {/* Gradient overlay: solid left → transparent right */}
      <div className='absolute inset-0 bg-linear-to-r from-[#273348] from-30% via-[#273348]/80 via-55% to-transparent' />

      {/* Content */}
      <div className='section-shell relative z-10 w-full py-20 lg:py-28'>
        <div className='max-w-2xl'>
          <p className='eyebrow mb-8 text-white/60'>Architecture / Interior / Design &amp; Build</p>
          <h1 className='display-title text-white'>Spaces that make ideas tangible.</h1>
          <p className='mt-8 mb-10 max-w-md text-base leading-7 text-white/70'>
            Archiana Studio is a Bandung-based architecture and design studio, delivering projects
            across West Java and diverse regions throughout Indonesia.
          </p>

          <Button href='#projects' dark={false}>
            Explore our work
          </Button>
        </div>
      </div>
    </section>
  )
}
