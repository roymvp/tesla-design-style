import { cn } from '@/lib/utils'

/*
  Tesla 风格 EmptyState — centered zero-data / error placeholder.
  - Quiet by default: a muted icon slot, a Carbon-dark title, Graphite body, and
    an optional action (usually a Button). Used for empty lists, no search
    results, and recoverable error screens.
  - tone="error" tints the title toward the destructive red; otherwise neutral.
*/
export interface EmptyStateProps extends React.ComponentProps<'div'> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  tone?: 'neutral' | 'error'
}

function EmptyState({
  icon,
  title,
  description,
  action,
  tone = 'neutral',
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      role={tone === 'error' ? 'alert' : undefined}
      className={cn(
        'flex flex-col items-center justify-center gap-3 px-6 py-16 text-center',
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-1 flex size-12 items-center justify-center text-muted-foreground">
          {icon}
        </div>
      ) : null}
      <h3
        className={cn(
          'font-display text-lg font-medium',
          tone === 'error' ? 'text-destructive' : 'text-foreground',
        )}
      >
        {title}
      </h3>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
}

export { EmptyState }
