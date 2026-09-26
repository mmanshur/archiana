import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id='top' className='border-b border-line pt-16 lg:min-h-[92svh]'>
      <div className='section-shell grid grid-cols-1 items-center gap-14 lg:min-h-[calc(92svh-6rem)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-0'>
        <div className='flex flex-col space-y-2 self-stretch pt-5 pb-8 lg:space-y-5 lg:py-12'>
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

        <div className='relative hidden min-h-80 w-full lg:block lg:min-h-full'>
          <div className='hero-img-fade absolute inset-0 -right-20'>
            <Image
              src='/images/archiana-hero.jpg'
              alt='Architectural interior used as the Archiana hero image'
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 52vw'
              className='object-cover'
            />
          </div>

          <div className='absolute inset-x-0 bottom-0 flex justify-between p-4 text-[10px] font-bold tracking-[0.14em] text-white uppercase mix-blend-difference'>
            <span>Archiana / 001</span>

            <span>Jakarta — Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
