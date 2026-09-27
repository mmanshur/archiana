import Image from 'next/image'
import { cn } from '@/lib/cn'

const PORTFOLIO_URL =
  'https://heyzine.com/flip-book/b464c5dee2.html?utm_source=ig&utm_medium=social&utm_content=link_in_bio#page/6'

const projects = [
  {
    id: '01',
    year: '2025',
    title: 'Atelier House',
    type: 'Private Residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    id: '02',
    year: '2024',
    title: 'Kirana Office',
    type: 'Workplace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    id: '03',
    year: '2024',
    title: 'Ruang 27',
    type: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80',
  },
  {
    id: '04',
    year: '2023',
    title: 'Sora Pavilion',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
]

export function FeaturedProjects() {
  return (
    <section id='projects' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell'>
        {/* Header */}
        <div className='mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='eyebrow mb-6'>Selected projects</p>
            <h2 className='section-title max-w-4xl'>
              Built with clarity. Remembered for character.
            </h2>
          </div>

          <p className='max-w-xs text-sm leading-6 text-muted'>
            A selection of spaces where material, light, and purpose meet.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {projects.map((project: (typeof projects)[0], index) => (
            <article
              key={project.id}
              className={cn('group cursor-pointer', index % 2 === 1 && 'lg:translate-y-20')}
            >
              <div className='relative mb-5 aspect-4/5 overflow-hidden bg-soft'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              <div className='flex items-start justify-between border-t border-line pt-4'>
                <div>
                  <h3 className='text-base font-medium'>{project.title}</h3>
                  <p className='mt-1 text-xs text-muted'>{project.type}</p>
                </div>

                <div className='text-right text-[10px] font-bold tracking-[0.12em] text-muted uppercase'>
                  <p>{project.id}</p>
                  <p>{project.year}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className='mt-16 flex justify-center pt-12 lg:justify-end'>
          <a
            href={PORTFOLIO_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase transition-opacity hover:opacity-50'
          >
            View all projects
            <span className='inline-flex h-9 w-9 items-center justify-center border border-ink transition-transform group-hover:translate-x-1'>
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
