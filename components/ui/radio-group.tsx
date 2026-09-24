'use client'

import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'
import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Radio
  - Circular control, hairline border at rest, Electric Blue ring + dot when
    selected. Matches the Checkbox chrome so the two read as one control family.
*/
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  )
}

function Radio({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        'flex size-[18px] shrink-0 items-center justify-center rounded-full border border-input bg-background transition-tesla outline-none',
        'data-[checked]:border-primary',
        'focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="flex items-center justify-center">
        <span className="size-2 rounded-full bg-primary" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, Radio }
