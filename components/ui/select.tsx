'use client'

import { Select as SelectPrimitive } from '@base-ui/react/select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Select
  - Trigger shares the Input chrome (h-10, 4px radius, hairline border).
  - Popup is a flat white surface with a single hairline border, no heavy shadow;
    items highlight with Light Ash on hover, selected item shows an Electric-Blue
    check. Stacking uses the --z-dropdown scale.
*/
const Select = SelectPrimitive.Root
const SelectValue = SelectPrimitive.Value

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-10 w-full items-center justify-between gap-2 rounded-[4px] border border-input bg-background px-3 py-2 text-sm text-foreground transition-tesla outline-none',
        'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="text-muted-foreground">
        <ChevronDown className="size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        className="z-(--z-dropdown) outline-none"
        sideOffset={4}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            'max-h-[min(24rem,var(--available-height))] min-w-[var(--anchor-width)] overflow-y-auto rounded-[4px] border border-border bg-popover p-1 text-popover-foreground shadow-[0_2px_16px_rgba(0,0,0,0.08)] outline-none',
            className,
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'flex cursor-default items-center justify-between gap-2 rounded-[2px] px-3 py-2 text-sm text-foreground transition-tesla outline-none',
        'data-[highlighted]:bg-ash',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="size-4 text-primary" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
}
