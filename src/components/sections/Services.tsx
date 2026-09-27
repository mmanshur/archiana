const services = [
  ['01', 'Conceptual Design', 'Turning ideas into functional and aesthetic concepts.'],
  [
    '02',
    'Schematic Design & Space Planning',
    'Strategic planning of spaces that balance form, function, and flow.',
  ],
  [
    '03',
    '3D Visualization & Renderings',
    'Bringing your project to life before construction begins.',
  ],
  [
    '04',
    'Construction Drawings & Documentation',
    'Detailed, code-compliant plans that guide every step of the build.',
  ],
  [
    '05',
    'Sustainable Design',
    'Energy-efficient solutions that prioritize long-term value and environmental responsibility.',
  ],
  [
    '06',
    'Project Coordination',
    'Collaborating closely with engineers, consultants, and contractors to ensure seamless execution.',
  ],
]

export function Services() {
  return (
    <section id='services' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell'>
        <div className='mb-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'>
          <p className='eyebrow'>What we do</p>
          <h2 className='section-title max-w-4xl'>
            Our architectural design services, from first thought to final detail.
          </h2>
        </div>

        <div className='grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3'>
          {services.map(([number, title, text]) => (
            <article
              key={number}
              className='border-b border-line p-6 sm:border-r sm:nth-[2n]:border-r-0 lg:border-r lg:p-8 lg:nth-[3n]:border-r-0 lg:nth-last-[-n+3]:border-b-0'
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
