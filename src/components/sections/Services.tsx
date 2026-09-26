const services = [
  [
    '01',
    'Architecture',
    'Concept, planning, documentation, and delivery for purposeful buildings.',
  ],
  [
    '02',
    'Interior',
    'Spatial systems, material direction, and details that shape daily experience.',
  ],
  [
    '03',
    'Brand Spaces',
    'Translating brand strategy into places people can see, use, and remember.',
  ],
  [
    '04',
    'Strategy',
    'Early-stage thinking, feasibility, and creative direction for complex briefs.',
  ],
]

export function Services() {
  return (
    <section id='services' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell'>
        <div className='mb-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'>
          <p className='eyebrow'>What we do</p>
          <h2 className='section-title max-w-4xl'>
            One studio, from first thought to final detail.
          </h2>
        </div>
        <div className='grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4'>
          {services.map(([number, title, text]) => (
            <article
              key={number}
              className='border-b border-line p-6 sm:border-r sm:nth-[2n]:border-r-0 lg:border-r lg:border-b-0 lg:p-8 lg:last:border-r-0'
            >
              <p className='text-[10px] font-bold tracking-[0.14em] text-muted uppercase'>
                {number}
              </p>
              <h3 className='mt-20 text-2xl tracking-[-0.03em]'>{title}</h3>
              <p className='mt-5 text-sm leading-6 text-muted'>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
