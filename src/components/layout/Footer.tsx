export function Footer() {
  return (
    <footer className='border-t border-black/10 py-10'>
      <div className='section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <div>
          <p className='text-sm font-black tracking-[0.2em] uppercase'>Archiana</p>
          <p className='mt-3 max-w-xs text-xs leading-5 text-muted'>
            Architecture, interiors, and creative direction.
          </p>
        </div>
        <div className='text-xs leading-6 text-muted'>
          <p>Jakarta — Indonesia</p>
          <p>hello@archiana.studio</p>
        </div>
        <div className='text-xs leading-6 text-muted lg:justify-self-end lg:text-right'>
          <p>Instagram / LinkedIn</p>
          <p>© {new Date().getFullYear()} Archiana Studio</p>
        </div>
      </div>
    </footer>
  )
}
