import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Badge — small status/label pill
  - Uppercase-free, zero tracking. Variants stay within the 3-color system:
    neutral (Ash), accent (Electric Blue), and a dark solid (Carbon).
  - Pill radius; used for "新款 / 现车 / 库存车" style tags.
*/
const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-tesla',
  {
    variants: {
      variant: {
        neutral: 'bg-ash text-body',
        accent: 'bg-primary/10 text-primary',
        solid: 'bg-carbon text-white',
        outline: 'border border-input text-body',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
