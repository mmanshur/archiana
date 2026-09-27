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
      <span className='transition text-paper group-hover:text-ink'>{children}</span>

      <span
        aria-hidden
        className='text-lg leading-none text-paper transition-transform group-hover:translate-x-1 group-hover:text-ink'
      >
        ↗
      </span>
    </a>
  )
}
