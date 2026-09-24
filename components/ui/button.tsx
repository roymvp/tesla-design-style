import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  Tesla 风格 Button
  - 4px border-radius (barely-rounded, precision over playfulness)
  - color-only transitions at 0.33s (no scale/translate)
  - a reserved 3px transparent border animates in on focus/active
  - only weights 400/500 — no bold
*/
const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center rounded-[4px] border-[3px] border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-tesla outline-none select-none focus-visible:border-ring/40 focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
  {
    variants: {
      variant: {
        // Primary CTA — Electric Blue, the only chromatic control
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // Secondary CTA — solid white surface, Graphite text, NO visible border
        // (tesla.cn secondary is solid white with a transparent 3px border; it
        // pairs with the blue primary on photography, never an outlined button)
        secondary:
          'bg-background text-secondary-foreground hover:bg-muted',
        // Nav button — transparent, Carbon Dark text, subtle wash on hover
        nav: 'bg-transparent text-foreground hover:bg-foreground/[0.06]',
        // Text link — Pewter, underline on hover, no background
        link: 'border-transparent font-normal text-muted-foreground underline-offset-4 hover:text-foreground hover:underline',
      },
      size: {
        // CTA default — 40px tall, 160px min-width floor. Real tesla.cn hero CTAs
        // measure minW:auto with width driven by their container (160–200px);
        // 160 is the smallest observed and acts as our floor. Widen via w-full /
        // an explicit width at the call site (hero stacks full-width on mobile,
        // ~200px paired on desktop).
        cta: 'h-10 min-w-[160px] gap-2 px-6',
        // Secondary CTA — pairs equal-width with the primary at the call site
        ctaSecondary: 'h-10 min-w-[160px] gap-2 px-6',
        // Nav item — 32px tall, 4px 16px padding
        nav: 'h-8 gap-1.5 px-4',
        // Compact inline control
        sm: 'h-8 gap-1.5 px-4',
        // Inline text link — no fixed height
        link: 'h-auto p-0',
        // Square icon button (carousel arrows)
        icon: 'size-10 border-0',
        // Nav icon button — 32×32 with a 20px glyph (tesla.cn measured: help/account)
        navIcon: 'size-8 border-0 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'cta',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'cta',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
