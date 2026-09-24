'use client'

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Accordion
  - Hairline-divided rows, no card chrome. Trigger is a full-width row with a
    Carbon-dark label and a Plus icon that rotates 45° into a close on open.
  - Panel content is Graphite body copy. Height animates with Base UI's
    --accordion-panel-height on the 0.33s Tesla timing.
*/
const Accordion = AccordionPrimitive.Root

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b border-border', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-foreground transition-tesla outline-none',
          'hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/40',
          'group',
          className,
        )}
        {...props}
      >
        {children}
        <Plus
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-[var(--duration-tesla)] ease-[var(--ease-tesla)] group-data-[panel-open]:rotate-45"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        'h-[var(--accordion-panel-height)] overflow-hidden text-sm leading-relaxed text-body',
        'transition-[height] duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
        'data-[starting-style]:h-0 data-[ending-style]:h-0',
        className,
      )}
      {...props}
    >
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel }
