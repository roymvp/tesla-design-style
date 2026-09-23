import Link from 'next/link'
import { cn } from '@/lib/utils'

/*
  Tesla 风格 Footer — global site footer
  - Carbon-black canvas (tesla.cn measured rgb(0,0,0)), muted-silver links
    that lift to white on hover with the universal color-only transition.
  - Two zones: a compact link row (the real tesla.cn footer is a single wrapped
    row of short legal/utility links) and a bottom line with copyright + locale.
  - No shadow, no top border beyond an optional hairline — flat by philosophy.
*/

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps extends React.ComponentProps<'footer'> {
  links?: FooterLink[]
  copyright?: string
  locale?: string
}

const DEFAULT_LINKS: FooterLink[] = [
  { label: '车辆使用条款', href: '#' },
  { label: '隐私和法律', href: '#' },
  { label: '联系我们', href: '#' },
  { label: '招贤纳士', href: '#' },
  { label: '订阅新闻', href: '#' },
  { label: '选址与地址', href: '#' },
]

function Footer({
  links = DEFAULT_LINKS,
  copyright = `Tesla 风格 © ${new Date().getFullYear()}`,
  locale = '中国大陆',
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      data-slot="footer"
      className={cn('w-full bg-carbon text-[13px] text-white/60', className)}
      {...props}
    >
      <div
        className="mx-auto flex max-w-(--container-tesla) flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between"
      >
        <p className="order-2 md:order-1">{copyright}</p>
        <nav
          aria-label="页脚导航"
          className="order-1 flex flex-wrap gap-x-6 gap-y-3 md:order-2 md:justify-end"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-tesla hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <span className="text-white/40">{locale}</span>
        </nav>
      </div>
    </footer>
  )
}

export { Footer }
