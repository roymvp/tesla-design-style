import { cn } from '@/lib/utils'

/*
  Tesla 风格 Vehicle Card (navigation panel)
  - transparent surface, no border, no shadow
  - transparent-PNG vehicle render on white
  - model name centered below, two Pewter text links beneath
  - the card itself has no hover animation; interaction is via the links
*/
function VehicleCard({
  name,
  image,
  alt,
  links = [],
  className,
  ...props
}: React.ComponentProps<'div'> & {
  name: string
  image: string
  alt: string
  links?: { label: string; href: string }[]
}) {
  return (
    <div
      data-slot="vehicle-card"
      className={cn('flex flex-col items-center gap-3 text-center', className)}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image || '/placeholder.svg'}
        alt={alt}
        className="h-48 w-full object-contain md:h-56"
      />
      <p className="text-[17px] font-medium leading-5 text-foreground">
        {name}
      </p>
      {links.length > 0 ? (
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-muted-foreground underline-offset-4 transition-tesla hover:text-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export { VehicleCard }
