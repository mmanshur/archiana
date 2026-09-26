import { cn } from '@/lib/cn'

const projects = [
  {
    id: '01',
    year: '2025',
    title: 'Atelier House',
    type: 'Private Residence',
    className: 'aspect-[4/5]',
  },
  { id: '02', year: '2024', title: 'Kirana Office', type: 'Workplace', className: 'aspect-[4/5]' },
  { id: '03', year: '2024', title: 'Ruang 27', type: 'Hospitality', className: 'aspect-[4/5]' },
  { id: '04', year: '2023', title: 'Sora Pavilion', type: 'Cultural', className: 'aspect-[4/5]' },
]

export function FeaturedProjects() {
  return (
    <section id='projects' className='border-b border-line py-24 lg:py-36'>
      <div className='section-shell'>
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

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={cn('group', index % 2 === 1 && 'lg:translate-y-20')}
            >
              <div className={cn('mb-5 overflow-hidden bg-soft', project.className)}>
                <div className='h-full w-full scale-100 bg-[linear-gradient(145deg,#ddd5c8,#aaa18f)] transition-transform duration-700 group-hover:scale-105' />
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
      </div>
    </section>
  )
}
