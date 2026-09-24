'use client'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Dialog
  - Centered white panel, 8px radius (media-card scale — the dialog is a content
    surface, not a control), generous padding, a single soft shadow.
  - Backdrop uses the shared --scrim gray wash and the --z-scrim / --z-modal
    stacking scale so it always sits above nav and dropdowns.
  - Enter/exit fade + subtle lift honoring the 0.33s Tesla timing.
*/
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

function DialogContent({
  className,
  children,
  showClose = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup> & {
  showClose?: boolean
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        className={cn(
          'fixed inset-0 z-(--z-scrim) bg-scrim',
          'transition-opacity duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 z-(--z-modal) w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2',
          'rounded-[8px] bg-popover p-6 text-popover-foreground shadow-[0_8px_40px_rgba(0,0,0,0.16)] outline-none',
          'transition-all duration-[var(--duration-tesla)] ease-[var(--ease-tesla)]',
          'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
          'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
          className,
        )}
        {...props}
      >
        {children}
        {showClose ? (
          <DialogPrimitive.Close
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-tesla outline-none hover:bg-ash hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40"
            aria-label="关闭"
          >
            <X className="size-4" />
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-1.5 pr-8', className)}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('font-display text-xl font-medium text-foreground', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-sm leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
}
