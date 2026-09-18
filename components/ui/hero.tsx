import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/*
  Tesla 风格 Hero
  - full-viewport (100vh) section dominated by cinematic photography
  - vertical rhythm: model name -> subtitle -> CTA pair
  - promo text uses Electric Blue, linking incentive to action
  - no overlay gradient; text alignment is centered, content sits high
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
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <h1
          className={cn(
            'text-[28px] font-medium leading-tight md:text-[40px] md:leading-[48px]',
            tone === 'dark' ? 'text-white' : 'text-foreground',
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              'text-sm leading-5',
              tone === 'dark' ? 'text-white/85' : 'text-body',
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {promo ? (
          <p className="text-[22px] font-normal text-primary">{promo}</p>
        ) : null}
      </div>

      <div className="relative z-10 mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button variant="primary" size="cta" className="w-full sm:w-auto">
          {primaryLabel}
        </Button>
        <Button
          variant="secondary"
          size="ctaSecondary"
          className="w-full sm:w-auto"
        >
          {secondaryLabel}
        </Button>
      </div>
    </section>
  )
}

export { Hero }
