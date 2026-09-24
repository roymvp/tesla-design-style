import { cn } from '@/lib/utils'

/*
  Tesla 风格 Category Card
  - full-bleed landscape photography, ~2:1 ratio
  - 8px border-radius (tesla.cn media-card radius), overflow hidden to clip the image
  - white label in the top-left corner, no overlay gradient, no shadow
    (text relies on image darkness for contrast)
*/
function CategoryCard({
  label,
  sublabel,
  image,
  alt,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  label: string
  sublabel?: string
  image: string
  alt: string
}) {
  return (
    <a
      data-slot="category-card"
      className={cn(
        'group relative block aspect-[2/1] overflow-hidden rounded-[8px] transition-tesla outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image || '/placeholder.svg'}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex flex-col gap-0.5 p-6">
        <span className="text-base font-medium leading-tight text-white">
          {label}
        </span>
        {sublabel ? (
          <span className="text-sm leading-tight text-white/80">
            {sublabel}
          </span>
        ) : null}
      </div>
    </a>
  )
}

export { CategoryCard }
