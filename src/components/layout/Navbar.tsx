'use client'

import { useState } from 'react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='section-shell flex h-24 items-center justify-between'>
        <a href='#top' className='text-sm font-black uppercase tracking-[0.2em]'>
          Archiana
        </a>
        <nav className='hidden items-center gap-8 lg:flex' aria-label='Primary navigation'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-50'
            >
              {link.label}
            </a>
          ))}
          <a
            href='#contact'
            className='border border-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em]'
          >
            Start a project
          </a>
        </nav>
        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center border border-ink lg:hidden'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className='text-xl'>{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav
          className='mx-6 border border-ink bg-paper p-5 lg:hidden'
          aria-label='Mobile navigation'
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='block border-b border-line py-4 text-sm font-bold uppercase tracking-[0.12em] last:border-b-0'
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
