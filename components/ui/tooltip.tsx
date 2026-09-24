'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Tooltip
  - Carbon-dark popup, white text, 4px radius, tiny footprint. Fades in on the
    0.33s timing. Wrap an app (or a section) in TooltipProvider once.
*/
const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

function TooltipContent({
  className,
  children,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Popup> & {
  sideOffset?: number
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        className="z-(--z-dropdown)"
        sideOffset={sideOffset}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            'rounded-[4px] bg-carbon px-2.5 py-1.5 text-xs text-white shadow-[0_2px_12px_rgba(0,0,0,0.18)] outline-none',
            'transition-opacity duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
            'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
            className,
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
