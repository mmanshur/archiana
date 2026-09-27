import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section id='contact' className='relative overflow-hidden py-20 text-paper lg:py-28'>
      {/* Background image */}
      <Image
        src='https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80'
        alt='Archiana — architectural space'
        fill
        sizes='100vw'
        className='object-cover object-center'
      />

      {/* Solid dark overlay */}
      <div className='absolute inset-0 bg-ink/85' />

      {/* Content */}
      <div className='section-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
        <div>
          <p className='eyebrow mb-8 text-paper/60'>Let's work together</p>
          <h2 className='section-title max-w-4xl'>Have an ambitious space in mind?</h2>
        </div>
        <div className='lg:justify-self-end'>
          <p className='mb-7 max-w-sm text-sm leading-6 text-paper/65'>
            Tell us what you are building, where you are starting, and what you want it to become.
          </p>
          <Button href='mailto:marketing@archiana.web.id' dark={false}>
            marketing@archiana.web.id
          </Button>
        </div>
      </div>
    </section>
  )
}
