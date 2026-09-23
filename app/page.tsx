{/* v0 Design System Showcase Page */}
import { TeslaNav } from '@/components/ui/tesla-nav'
import { AskBar } from '@/components/ui/ask-bar'
import { ShowcaseHero } from '@/components/showcase/showcase-hero'
import { ShowcaseModel } from '@/components/showcase/showcase-model'
import { ShowcaseLineup } from '@/components/showcase/showcase-lineup'
import { ShowcaseTokens } from '@/components/showcase/showcase-tokens'
import { ShowcaseComponents } from '@/components/showcase/showcase-components'

const navItems = [
  { label: 'Model 系列', href: '#lineup' },
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
