'use client'

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Checkbox
  - 18px square, 4px radius, single hairline border in the unchecked rest state.
  - Checked fills Electric Blue with a white check — the sole chromatic accent.
  - Color-only 0.33s transition, Electric Blue focus ring.
*/
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border border-input bg-background text-primary-foreground transition-tesla outline-none',
        'data-[checked]:border-primary data-[checked]:bg-primary',
        'focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Check className="size-3" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
