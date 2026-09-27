import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section id='contact' className='bg-ink py-20 text-paper lg:py-28'>
      <div className='section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
        <div>
          <p className='eyebrow mb-8 text-paper/60'>Let’s work together</p>
          <h2 className='section-title max-w-4xl'>Have an ambitious space in mind?</h2>
        </div>
        <div className='lg:justify-self-end'>
          <p className='mb-7 max-w-sm text-sm leading-6 text-paper/65'>
            Tell us what you are building, where you are starting, and what you want it to become.
          </p>

          <Button href='mailto:hello@archiana.web.id' dark={false}>
            hello@archiana.web.id
          </Button>
        </div>
      </div>
    </section>
  )
}
