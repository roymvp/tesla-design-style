'use client'

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Tabs
  - Underline-style tabs: a hairline baseline with an Electric-Blue indicator
    that slides under the active tab. No pills, no filled backgrounds — quiet by
    default, chromatic only on the active marker.
*/
const Tabs = TabsPrimitive.Root

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'relative flex items-center gap-8 border-b border-border',
        className,
      )}
      {...props}
    >
      {props.children}
      <TabsPrimitive.Indicator
        className={cn(
          'absolute bottom-0 left-0 h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] bg-primary',
          'transition-all duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
        )}
      />
    </TabsPrimitive.List>
  )
}

function TabsTab({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        '-mb-px cursor-default py-3 text-sm text-muted-foreground transition-tesla outline-none',
        'data-[selected]:text-foreground',
        'hover:text-foreground focus-visible:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function TabsPanel({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn('pt-6 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTab, TabsPanel }
