import { cn } from '@/lib/utils'

/*
  Generic spaced-letter wordmark.
  The source brand's own name and logo are intentionally NOT reproduced. This is
  a neutral placeholder wordmark that carries the same visual treatment — widely
  letter-spaced uppercase caps — so the layout reads correctly. Replace `text`
  with the consuming product's own name.
*/
function Wordmark({
  text = 'MOTORS',
  className,
  ...props
}: React.ComponentProps<'span'> & { text?: string }) {
  return (
    <span
      data-slot="wordmark"
      className={cn(
        'select-none text-[15px] font-medium tracking-[0.35em] text-foreground',
        className,
      )}
      {...props}
    >
      {text}
    </span>
  )
}

export { Wordmark }
