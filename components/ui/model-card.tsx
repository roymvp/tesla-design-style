import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/*
  Tesla 风格 Model Card（tesla.cn 首页主力车型卡，实测复刻）
  - full-bleed cinematic photography, radius 0 (measured on tesla.cn model sections)
  - model name + tagline sit at top-center; dual CTA overlaid at bottom-center
  - tone-aware legibility scrim (same rule as Hero): overlaid text must clear AA,
    so dark imagery gets a top+bottom gradient, light imagery a soft wash.
    Never place light text on unknown/bright photography without it.
  - secondary CTA on photography uses the frosted variant, paired equal-width (264px)
  - the section is a tall viewport band, stacked vertically down the page
*/
function ModelCard({
  name,
  tagline,
  image,
  alt,
  primaryLabel = '立即订购',
  secondaryLabel = '了解更多',
  primaryHref = '#',
  secondaryHref = '#',
  tone = 'dark',
  className,
  ...props
}: React.ComponentProps<'section'> & {
  name: string
  tagline?: string
  image: string
  alt: string
  primaryLabel?: string
  secondaryLabel?: string
  primaryHref?: string
  secondaryHref?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <section
      data-slot="model-card"
      className={cn(
        'relative flex min-h-[88svh] w-full flex-col items-center justify-between overflow-hidden py-16',
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
      {/* Legibility scrim: top band protects the name, bottom band the CTAs. */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 z-0 h-2/5',
          tone === 'dark'
            ? 'bg-gradient-to-b from-black/40 via-black/10 to-transparent'
            : 'bg-gradient-to-b from-white/70 via-white/25 to-transparent',
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/5',
          tone === 'dark'
            ? 'bg-gradient-to-t from-black/35 via-black/10 to-transparent'
            : 'bg-gradient-to-t from-white/55 via-white/15 to-transparent',
        )}
      />

      <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
        <h2
          className={cn(
            'text-[32px] font-medium leading-tight md:text-[40px] md:leading-[44px]',
            tone === 'dark' ? 'text-white' : 'text-foreground',
          )}
        >
          {name}
        </h2>
        {tagline ? (
          <p
            className={cn(
              'text-sm leading-5',
              tone === 'dark' ? 'text-white/90' : 'text-body',
            )}
          >
            {tagline}
          </p>
        ) : null}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button
          render={<a href={primaryHref} />}
          nativeButton={false}
          variant="primary"
          size="cta"
          className="w-full sm:w-[200px]"
        >
          {primaryLabel}
        </Button>
        {/* Secondary CTA over photography: solid white + Graphite text, the exact
            tesla.cn treatment (measured rgb(255,255,255), transparent border, no
            backdrop). Solid white clears AA on any imagery. */}
        <Button
          render={<a href={secondaryHref} />}
          nativeButton={false}
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

export { ModelCard }
