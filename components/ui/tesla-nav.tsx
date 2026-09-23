'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { HelpCircle, Menu, User } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/ui/wordmark'

/*
  Tesla 风格 Navigation (measured against tesla.cn)
  - 56px tall bar that floats above the hero with no background, border, shadow
  - wordmark pinned left, icon buttons pinned right (both in normal flow)
  - primary category links are ABSOLUTELY CENTERED to the viewport
    (left-1/2 -translate-x-1/2), independent of the wordmark/icon widths — this
    is the tesla.cn signature and cannot be reproduced with justify-between,
    which only centers the middle group when both sides are equal width.
  - right side holds exactly two icons on desktop: help + account. tesla.cn has
    no persistent language/region globe in the bar; do not add one.
  - transitions from transparent (over dark hero) to frosted white on scroll
  - sticky at the top with no slide-in animation
  - a nav item may open a full-width mega dropdown panel: a vehicle grid on the
    left (~70%) + a text-link sidebar on the right (~30%), on a seamless white
    surface with no shadow or border (matches tesla.cn). The panel opens on
    hover and on keyboard focus, and closes on mouse leave or Escape.
  Pass `overlay` to start transparent over a dark hero; it switches to the
  frosted-white treatment once the page scrolls. Set `overlay={false}` for
  content pages that always want the solid white bar.
*/

type PanelVehicle = {
  name: string
  image: string
  links: { label: string; href: string }[]
}

type NavItem = {
  label: string
  href: string
  panel?: {
    vehicles: PanelVehicle[]
    links?: { label: string; href: string }[]
  }
}

function TeslaNav({
  items,
  wordmark = 'MOTORS',
  overlay = true,
  className,
  ...props
}: React.ComponentProps<'header'> & {
  items: NavItem[]
  wordmark?: string
  overlay?: boolean
}) {
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlay])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const panelOpen = openIndex !== null
  // A dark-hero overlay nav must switch to the solid treatment while a white
  // panel is open, otherwise white-on-white links would be invisible.
  const onDark = overlay && !scrolled && !panelOpen
  const solid = !overlay || scrolled || panelOpen

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenIndex(items[i]?.panel ? i : null)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120)
  }

  const activePanel = openIndex !== null ? items[openIndex]?.panel : undefined

  return (
    <header
      data-slot="tesla-nav"
      onMouseLeave={scheduleClose}
      className={cn(
        'sticky top-0 z-50 w-full transition-tesla',
        solid && 'glass-nav',
        className,
      )}
      {...props}
    >
      <nav className="relative mx-auto flex h-14 max-w-[1383px] items-center justify-between px-6">
        <Wordmark
          text={wordmark}
          className={onDark ? 'text-white' : 'text-foreground'}
        />

        {/* Primary links: absolutely centered to the bar (tesla.cn signature) */}
        <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 items-center gap-1 md:flex">
          {items.map((item, i) => (
            <Button
              key={item.label}
              variant="nav"
              size="nav"
              nativeButton={false}
              aria-haspopup={item.panel ? 'true' : undefined}
              aria-expanded={item.panel ? openIndex === i : undefined}
              onMouseEnter={() => open(i)}
              onFocus={() => open(i)}
              render={<a href={item.href}>{item.label}</a>}
              className={cn(onDark && 'text-white hover:bg-white/15')}
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
            aria-label="账户"
            className={cn(onDark && 'text-white hover:bg-white/15')}
          >
            <User />
          </Button>
          <Button
            variant="nav"
            size="icon"
            aria-label="菜单"
            className={cn('md:hidden', onDark && 'text-white hover:bg-white/15')}
          >
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Mega dropdown panel — seamless white, no shadow/border (source §4) */}
      {activePanel ? (
        <div
          className="hidden bg-background md:block"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current)
          }}
        >
          <div className="mx-auto grid max-w-[1383px] grid-cols-[70%_30%] gap-6 px-6 pb-10 pt-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-r border-hairline pr-6 sm:grid-cols-3 lg:grid-cols-4">
              {activePanel.vehicles.map((v) => (
                <div key={v.name} className="flex flex-col items-center">
                  <div className="relative h-24 w-full">
                    <Image
                      src={v.image || '/placeholder.svg'}
                      alt={v.name}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2 text-[17px] font-medium leading-5 text-foreground">
                    {v.name}
                  </p>
                  <div className="mt-2 flex items-center gap-4">
                    {v.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="text-sm text-muted-foreground underline-offset-4 transition-tesla hover:text-foreground hover:underline"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {activePanel.links && activePanel.links.length > 0 ? (
              <ul className="flex flex-col justify-end gap-4 pb-2">
                {activePanel.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-foreground underline-offset-4 transition-tesla hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export { TeslaNav }
export type { NavItem }
