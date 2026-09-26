import { cn } from '@/lib/cn'

type ButtonProps = {
  href: string
  children: React.ReactNode
  dark?: boolean
}

export function Button({ href, children, dark = true }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex min-h-12 items-center justify-between gap-8 border px-5 text-[12px] font-bold tracking-[0.12em] uppercase transition',
        dark
          ? 'border-ink bg-ink text-paper hover:bg-transparent hover:text-ink'
          : 'border-paper text-paper hover:bg-paper hover:text-ink',
      )}
    >
      <span className={cn('transition group-hover:text-ink', dark && 'text-paper')}>
        {children}
      </span>
      <span
        aria-hidden
        className={cn(
          'text-lg leading-none transition-transform group-hover:translate-x-1 group-hover:text-ink',
          dark && 'text-paper',
        )}
      >
        ↗
      </span>
    </a>
  )
}
