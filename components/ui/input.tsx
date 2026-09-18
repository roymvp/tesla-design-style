import { cn } from '@/lib/utils'

/*
  Tesla 风格 Input
  - minimal chrome: transparent-to-white fill, single hairline border
  - Carbon Dark text, Silver Fog placeholder
  - 4px radius, color-only focus transition to Electric Blue ring
*/
function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-10 w-full min-w-0 rounded-[4px] border border-input bg-background px-3 py-2 text-sm text-foreground transition-tesla outline-none',
        'placeholder:text-placeholder',
        'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
