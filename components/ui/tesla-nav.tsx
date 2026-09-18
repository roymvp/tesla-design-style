'use client'

import { useEffect, useState } from 'react'
import { Globe, HelpCircle, Menu, User } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/ui/wordmark'

/*
  Tesla 风格 Navigation
  - floats above the hero with no background, border, or shadow
  - wordmark left, centered category links, three icon buttons right
  - transitions from transparent (over dark hero) to frosted white on scroll
  - sticky at the top with no slide-in animation
  Pass `overlay` to start transparent over a dark hero; it switches to the
  frosted-white treatment once the page scrolls. Set `overlay={false}` for
  content pages that always want the solid white bar.
*/
function TeslaNav({
  items,
  wordmark = 'MOTORS',
  overlay = true,
  className,
  ...props
}: React.ComponentProps<'header'> & {
  items: { label: string; href: string }[]
  wordmark?: string
  overlay?: boolean
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlay])

  const onDark = overlay && !scrolled
  const solid = !overlay || scrolled

  return (
    <header
      data-slot="tesla-nav"
      className={cn(
        'sticky top-0 z-50 w-full transition-tesla',
        solid && 'glass-nav',
        className,
      )}
      {...props}
    >
      <nav className="mx-auto flex h-16 max-w-[1383px] items-center justify-between px-6">
        <Wordmark
          text={wordmark}
          className={onDark ? 'text-white' : 'text-foreground'}
        />

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Button
              key={item.label}
              variant="nav"
              size="nav"
              nativeButton={false}
              render={<a href={item.href}>{item.label}</a>}
              className={cn(
                onDark && 'text-white hover:bg-white/15',
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="nav"
            size="icon"
            aria-label="帮助"
            className={cn(
              'hidden sm:inline-flex',
              onDark && 'text-white hover:bg-white/15',
            )}
          >
            <HelpCircle />
          </Button>
          <Button
            variant="nav"
            size="icon"
            aria-label="语言与地区"
            className={cn(
              'hidden sm:inline-flex',
              onDark && 'text-white hover:bg-white/15',
            )}
          >
            <Globe />
          </Button>
          <Button
            variant="nav"
            size="icon"
            aria-label="账户"
            className={cn(onDark && 'text-white hover:bg-white/15')}
          >
            <User />
          </Button>
          <Button
            variant="nav"
            size="icon"
            aria-label="菜单"
            className={cn(
              'md:hidden',
              onDark && 'text-white hover:bg-white/15',
            )}
          >
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export { TeslaNav }
