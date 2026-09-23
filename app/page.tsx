{/* v0 Design System Showcase Page */}
import { TeslaNav } from '@/components/ui/tesla-nav'
import { AskBar } from '@/components/ui/ask-bar'
import { ShowcaseHero } from '@/components/showcase/showcase-hero'
import { ShowcaseModel } from '@/components/showcase/showcase-model'
import { ShowcaseLineup } from '@/components/showcase/showcase-lineup'
import { ShowcaseTokens } from '@/components/showcase/showcase-tokens'
import { ShowcaseComponents } from '@/components/showcase/showcase-components'

const navItems = [
  {
    label: 'Model 系列',
    href: '#lineup',
    panel: {
      vehicles: [
        {
          name: '零式轿跑',
          image: '/images/car-sedan.png',
          links: [
            { label: '订购', href: '#lineup' },
            { label: '了解', href: '#lineup' },
          ],
        },
        {
          name: '疾风 SUV',
          image: '/images/car-suv.png',
          links: [
            { label: '订购', href: '#lineup' },
            { label: '了解', href: '#lineup' },
          ],
        },
        {
          name: '曜夜跑车',
          image: '/images/car-coupe.png',
          links: [
            { label: '订购', href: '#lineup' },
            { label: '了解', href: '#lineup' },
          ],
        },
      ],
      links: [
        { label: '现车订购', href: '#lineup' },
        { label: '二手车', href: '#lineup' },
      ],
    },
  },
  { label: '能源', href: '#' },
  { label: '充电', href: '#' },
  { label: '发现', href: '#' },
]

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TeslaNav items={navItems} wordmark="MOTORS" overlay />
      <main className="-mt-16 flex-1">
        <ShowcaseHero />
        <ShowcaseModel />
        <div id="lineup">
          <ShowcaseLineup />
        </div>
        <ShowcaseTokens />
        <ShowcaseComponents />
      </main>
      <AskBar />
    </div>
  )
}
