import { cn } from '@/lib/utils'

/*
  Tesla 风格 SpecGrid — the signature "big number + small label" stat row that
  Tesla puts under every hero (续航 / 加速 / 最高时速).
  - Display-scale numeral (large, weight 500, zero tracking), quiet label under.
  - Evenly distributed columns separated by nothing but whitespace — no rules,
    no cards, no accent. The numbers are load-bearing, so they get the emphasis.
  - Centered by default (hero context); pass align="start" for inline use.
*/

export interface Spec {
  value: string
  label: string
  unit?: string
}

export interface SpecGridProps extends React.ComponentProps<'dl'> {
  specs: Spec[]
  align?: 'center' | 'start'
}

function SpecGrid({
  specs,
  align = 'center',
  className,
  ...props
}: SpecGridProps) {
  return (
    <dl
      data-slot="spec-grid"
      className={cn(
        'grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-row md:gap-x-16',
        align === 'center'
          ? 'justify-items-center md:justify-center'
          : 'justify-items-start md:justify-start',
        className,
      )}
      {...props}
    >
      {specs.map((spec) => (
        <div
          key={spec.label}
          className={cn(
            'flex flex-col',
            align === 'center' ? 'items-center text-center' : 'items-start',
          )}
        >
          <dd className="flex items-baseline gap-1 font-display text-4xl font-medium text-foreground tabular-nums md:text-5xl">
            {spec.value}
            {spec.unit ? (
              <span className="text-lg font-normal text-muted-foreground md:text-xl">
                {spec.unit}
              </span>
            ) : null}
          </dd>
          <dt className="mt-2 text-sm text-muted-foreground">{spec.label}</dt>
        </div>
      ))}
    </dl>
  )
}

export { SpecGrid }
