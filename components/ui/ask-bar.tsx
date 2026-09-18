import { MessageCircle, Send } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/*
  Tesla 风格 Persistent Ask Bar
  - anchored to the viewport bottom, white background with a single hairline
  - chat icon + label + placeholder input + send icon + secondary CTA
  - flat: no shadow, separation from content is the hairline top border only
*/
function AskBar({
  label = '在线咨询',
  placeholder = '什么是哨兵模式？',
  ctaLabel = '预约试驾',
  sticky = true,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  label?: string
  placeholder?: string
  ctaLabel?: string
  sticky?: boolean
}) {
  return (
    <div
      data-slot="ask-bar"
      className={cn(
        'z-40 w-full border-t border-border bg-background',
        sticky && 'sticky bottom-0',
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[1383px] items-center gap-3 px-6 py-3">
        <MessageCircle className="size-5 shrink-0 text-muted-foreground" />
        <span className="hidden shrink-0 text-sm font-medium text-foreground sm:inline">
          {label}
        </span>
        <label className="flex min-w-0 flex-1 items-center gap-2">
          <span className="sr-only">{label}</span>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full min-w-0 bg-transparent text-sm text-foreground transition-tesla outline-none placeholder:text-placeholder"
          />
          <button
            type="button"
            aria-label="发送"
            className="shrink-0 text-muted-foreground transition-tesla hover:text-foreground"
          >
            <Send className="size-5" />
          </button>
        </label>
        <Button variant="secondary" size="sm" className="hidden shrink-0 md:inline-flex">
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}

export { AskBar }
