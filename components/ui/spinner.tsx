import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Spinner — inline busy indicator.
  Electric-Blue ring by default; pass className to recolor (e.g. text-white on
  a dark button). Respects reduced-motion via the global override in globals.css.
*/
function Spinner({
  className,
  label = '加载中',
  ...props
}: React.ComponentProps<'span'> & { label?: string }) {
  return (
    <span role="status" aria-label={label} {...props}>
      <Loader2 className={cn('size-5 animate-spin text-primary', className)} />
    </span>
  )
}

export { Spinner }
