import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id='top' className='min-h-[92svh] border-b border-line pt-24'>
      <div className='section-shell grid min-h-[calc(92svh-6rem)] grid-cols-1 items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-18'>
        <div className='flex flex-col justify-between self-stretch py-2 lg:py-12'>
          <div>
            <p className='eyebrow mb-8'>Architecture / Strategy / Place</p>
            <h1 className='display-title max-w-5xl'>Spaces that make ideas tangible.</h1>
          </div>
          <div className='max-w-md'>
            <p className='mb-8 text-base leading-7 text-muted'>
              Archiana is an architecture and creative studio crafting distinctive spaces,
              identities, and experiences for ambitious brands.
            </p>
            <Button href='#projects'>Explore our work</Button>
          </div>
        </div>

        <div className='relative min-h-110 overflow-hidden bg-soft lg:min-h-172.5'>
          <Image
            src='/images/archiana-hero.jpg'
            alt='Architectural interior used as the Archiana hero image'
            fill
            priority
            sizes='(max-width: 1024px) 100vw, 52vw'
            className='object-cover'
          />
          <div className='absolute inset-x-0 bottom-0 flex justify-between p-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white mix-blend-difference'>
            <span>Archiana / 001</span>
            <span>Jakarta — Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
