'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/cn'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-[#273348] text-white'>
      <div className='section-shell flex h-16 items-center justify-between'>
        {/* Logo */}
        <a href='#top' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Archiana logo'
            width={205}
            height={77}
            priority
            className='h-9 w-auto'
          />
        </a>

        {/* Desktop nav */}
        <nav className='hidden items-center gap-8 lg:flex' aria-label='Primary navigation'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-[11px] font-bold tracking-[0.14em] uppercase transition-opacity hover:opacity-50'
            >
              {link.label}
            </a>
          ))}
          <a
            href='#contact'
            className='border border-white px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase transition-opacity hover:opacity-60'
          >
            Start a project
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          type='button'
          className='flex h-9 w-9 items-center justify-center border border-white/40 lg:hidden'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown — no responsive hidden, controlled purely by open state */}
      <div
        aria-hidden={!open}
        className={cn(
          'border-t border-white/10 bg-[#1e2a3a] px-6 pb-6 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href} className='border-b border-white/10'>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className='block py-4 text-sm font-bold tracking-[0.12em] uppercase transition-opacity hover:opacity-60'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href='#contact'
          onClick={() => setOpen(false)}
          className='mt-5 flex items-center justify-center border border-white/40 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-opacity hover:opacity-60'
        >
          Start a project
        </a>
      </div>
    </header>
  )
}
