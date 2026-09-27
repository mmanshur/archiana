import Image from 'next/image'

export function Footer() {
  return (
    <footer className='border-t border-black/10 py-10'>
      <div className='section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <div>
          <a href='#top' className='flex items-center'>
            <Image
              src='/images/logo.png'
              alt='Archiana logo'
              width={205}
              height={77}
              priority
              className='h-9 w-auto brightness-10'
            />
          </a>

          <p className='mt-3 max-w-xs text-xs leading-5 text-muted'>
            Architecture, interiors, and design &amp; build for ambitious spaces.
          </p>
        </div>

        <div className='text-xs leading-6 text-muted'>
          <p>Bandung — Indonesia</p>
          <p>marketing@archiana.web.id</p>
        </div>

        <div className='text-xs leading-6 text-muted lg:justify-self-end lg:text-right'>
          <p>Instagram / TikTok — @archiana.architects</p>

          <p>© {new Date().getFullYear()} Archiana Studio</p>
        </div>
      </div>
    </footer>
  )
}
