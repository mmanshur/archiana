export function About() {
  return (
    <section id='about' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24'>
        <div className='min-h-[480px] bg-soft p-7 lg:min-h-[640px]'>
          <div className='flex h-full flex-col justify-between border border-black/10 p-6'>
            <div className='flex justify-between text-[10px] font-bold tracking-[0.14em] text-muted uppercase'>
              <span>About Archiana</span>
              <span>Est. 2017</span>
            </div>
            <div>
              <p className='max-w-md text-4xl leading-[1.05] tracking-[-0.04em] lg:text-6xl'>
                We design places with a point of view.
              </p>
              <p className='mt-6 max-w-md text-sm leading-6 text-muted'>
                From first sketch to final detail, our work is grounded in context, restraint, and a
                belief that great spaces should feel inevitable.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between py-2 lg:py-10'>
          <div>
            <p className='eyebrow mb-10'>Who we are</p>
            <p className='max-w-2xl text-2xl leading-[1.25] tracking-[-0.03em] lg:text-4xl'>
              Archiana brings architecture, interiors, and brand thinking into one focused practice
              — helping teams turn ambitious ideas into physical experiences.
            </p>
          </div>
          <div className='mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6'>
            <div>
              <p className='text-4xl tracking-[-0.04em]'>08</p>
              <p className='mt-2 text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                Years
              </p>
            </div>
            <div>
              <p className='text-4xl tracking-[-0.04em]'>42</p>
              <p className='mt-2 text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                Projects
              </p>
            </div>
            <div>
              <p className='text-4xl tracking-[-0.04em]'>11</p>
              <p className='mt-2 text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
