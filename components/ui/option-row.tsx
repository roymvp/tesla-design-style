'use client'

import { cn } from '@/lib/utils'

/*
  Tesla 风格 OptionRow — configurator trim/option selector (measured on tesla.cn)
  A selectable row used across the model configurators. Measured spec:
  - radius 4px, padding 16px, min-height 52px, label left + value/price right
  - selected: white fill + a dark 1px ring (ring, not layout border, so the
    box does not shift by 1px when selection changes)
  - unselected: light-ash fill (--ash #F4F4F4), no ring
  - hover on unselected lifts the ring to a mid-gray for affordance
  This is the canonical Tesla selection primitive; do not restyle it with
  shadows, colored fills, or radii other than 4px.
*/
function OptionRow({
  selected = false,
  label,
  value,
  className,
  ...props
}: Omit<React.ComponentProps<'button'>, 'value'> & {
  selected?: boolean
  label: React.ReactNode
  value?: React.ReactNode
}) {
  return (
    <button
      type="button"
      data-slot="option-row"
      aria-pressed={selected}
      className={cn(
        'flex w-full items-center justify-between gap-4 rounded-[4px] p-4 text-left transition-tesla',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        selected
          ? 'bg-background ring-1 ring-foreground'
          : 'bg-[var(--surface-ash)] ring-1 ring-transparent hover:ring-muted-foreground',
        className,
      )}
      {...props}
    >
      <span className="text-sm font-medium leading-5 text-foreground">
        {label}
      </span>
      {value ? (
        <span className="text-sm leading-5 text-foreground tabular-nums">
          {value}
        </span>
      ) : null}
    </button>
  )
}

export { OptionRow }
