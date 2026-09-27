import Image from 'next/image'

export function About() {
  return (
    <section id='about' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24'>
        {/* Image card with overlay */}
        <div className='relative min-h-[480px] overflow-hidden lg:min-h-[640px]'>
          <Image
            src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80'
            alt='Archiana studio — architectural interior'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
          />

          {/* Dark overlay for contrast */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10' />

          {/* Text on top of image */}
          <div className='absolute inset-0 flex flex-col justify-between p-8'>
            <div className='flex justify-between text-[10px] font-bold tracking-[0.14em] text-white/60 uppercase'>
              <span>About Archiana</span>
              <span>Bandung, Indonesia</span>
            </div>
            <div>
              <p className='max-w-md text-4xl leading-[1.05] tracking-[-0.04em] text-white lg:text-5xl'>
                We transform ideas into inspiring spaces.
              </p>
              <p className='mt-5 max-w-md text-sm leading-6 text-white/70'>
                Whether you&apos;re envisioning a custom home, a commercial development, or a
                renovation, our approach combines creativity with technical precision to bring your
                vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className='flex flex-col justify-between py-2 lg:py-10'>
          <div>
            <p className='eyebrow mb-10'>Who we are</p>
            <p className='max-w-2xl text-2xl leading-tight tracking-[-0.03em] lg:text-4xl'>
              Archiana Studio is a Bandung-based architecture and design studio — our work extends
              beyond the city and West Java, delivering projects across diverse regions throughout
              Indonesia.
            </p>
          </div>
          <div className='mt-16 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6'>
            <div>
              <p className='text-4xl tracking-[-0.04em]'>05</p>
              <p className='mt-2 text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                Project types
              </p>
            </div>
            <div>
              <p className='text-4xl tracking-[-0.04em]'>06</p>
              <p className='mt-2 text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                Core services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
