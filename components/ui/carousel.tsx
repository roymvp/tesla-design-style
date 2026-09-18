'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

/*
  Tesla 风格 Carousel
  - auto-advancing slides with circular dot indicators (50% radius)
  - semi-transparent white edge arrows that float over imagery
  - color-only transitions; slides cross-fade rather than translate-scale
*/
function Carousel({
  slides,
  autoAdvanceMs = 6000,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  slides: ReactNode[]
  autoAdvanceMs?: number
}) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = (next: number) => setIndex(((next % count) + count) % count)

  useEffect(() => {
    if (count <= 1 || autoAdvanceMs <= 0) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoAdvanceMs)
    return () => clearInterval(id)
  }, [count, autoAdvanceMs])

  return (
    <div
      data-slot="carousel"
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <div className="relative">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={cn(
              'transition-tesla',
              i === index
                ? 'relative opacity-100'
                : 'pointer-events-none absolute inset-0 opacity-0',
            )}
          >
            {slide}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="上一张"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/70 text-foreground transition-tesla hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-ring outline-none"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="下一张"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/70 text-foreground transition-tesla hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-ring outline-none"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`第 ${i + 1} 张`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={cn(
                  'size-2.5 rounded-full transition-tesla outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70',
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

export { Carousel }
