import { cn } from '@/lib/utils'

/*
  Tesla 风格 Skeleton — placeholder block for loading states.
  Light Ash fill with a gentle pulse. Use to reserve layout before content
  arrives (prevents CLS). Radius defaults to control-scale 4px.
*/
function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-[4px] bg-ash', className)}
      {...props}
    />
  )
}

export { Skeleton }
