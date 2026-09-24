'use client'

import { Switch as SwitchPrimitive } from '@base-ui/react/switch'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Switch
  - Pill track, hairline-quiet Ash when off, Electric Blue when on.
  - White thumb slides with the universal 0.33s ease.
*/
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent bg-input p-0.5 transition-tesla outline-none',
        'data-[checked]:bg-primary',
        'focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'size-5 rounded-full bg-background shadow-sm transition-transform duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
          'data-[checked]:translate-x-5',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
