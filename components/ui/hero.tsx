import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/*
  Tesla 风格 Hero
  - full-viewport (100vh) section dominated by cinematic photography
  - vertical rhythm: model name -> subtitle -> CTA pair
  - promo text uses Electric Blue (light tone), linking incentive to action
  - legibility scrim is mandatory: overlaid text must clear AA contrast, so a
    tone-aware top gradient guarantees readability over bright/busy imagery.
    Never place light text directly on unknown/bright photography without it.
  - text alignment is centered, content sits high
*/
function Hero({
  title,
  subtitle,
  promo,
  image,
  alt,
  primaryLabel = '立即订购',
  secondaryLabel = '查看现车',
  align = 'top',
  tone = 'light',
  className,
  ...props
}: React.ComponentProps<'section'> & {
  title: string
  subtitle?: string
  promo?: string
  image: string
  alt: string
  primaryLabel?: string
  secondaryLabel?: string
  align?: 'top' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <section
      data-slot="hero"
      className={cn(
        'relative flex min-h-[100svh] w-full flex-col items-center px-6',
        align === 'top' ? 'justify-start pt-28' : 'justify-center',
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image || '/placeholder.svg'}
        alt={alt}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* Legibility scrim: dark heroes get a top-down gradient so the white
          wordmark, nav links, and title stay readable over bright skies;
          light heroes get a soft white wash for dark Carbon text. */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 z-0 h-2/5',
          tone === 'dark'
            ? 'bg-gradient-to-b from-black/45 via-black/15 to-transparent'
            : 'bg-gradient-to-b from-white/70 via-white/25 to-transparent',
        )}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <h1
          className={cn(
            'text-[28px] font-medium leading-tight md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[56px]',
            tone === 'dark' ? 'text-white' : 'text-foreground',
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              'text-sm leading-5',
              tone === 'dark' ? 'text-white/90' : 'text-body',
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {promo ? (
          <p
            className={cn(
              'text-[22px] font-normal',
              tone === 'dark' ? 'text-white' : 'text-primary',
            )}
          >
            {promo}
          </p>
        ) : null}
      </div>

      <div className="relative z-10 mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button
          variant="primary"
          size="cta"
          className="w-full sm:w-[200px]"
        >
          {primaryLabel}
        </Button>
        {/* Secondary CTA over photography: solid white, Graphite text, transparent
            border — the exact tesla.cn "了解更多" treatment (measured rgb(255,255,255),
            no backdrop). Solid white already clears AA on any imagery. */}
        <Button
          variant="secondary"
          size="ctaSecondary"
          className="w-full border-transparent bg-white text-secondary-foreground hover:bg-white/90 sm:w-[200px]"
        >
          {secondaryLabel}
        </Button>
      </div>
    </section>
  )
}

export { Hero }
