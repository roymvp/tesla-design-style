'use client'

import { Carousel } from '@/components/ui/carousel'
import { Hero } from '@/components/ui/hero'

const slides = [
  {
    title: '零式轿跑',
    subtitle: '双电机全轮驱动 · 续航 715 公里',
    promo: '限时低息金融方案',
    image: '/images/hero-sedan.png',
    alt: '银色电动轿车停在城市天际线前',
  },
  {
    title: '疾风 SUV',
    subtitle: '七座布局 · 一次充电，纵享远行',
    image: '/images/hero-suv.png',
    alt: '白色电动 SUV 行驶在黄昏的海岸公路上',
  },
  {
    title: '曜石轿跑',
    subtitle: '2.1 秒破百 · 极致操控',
    promo: '现车可即刻交付',
    image: '/images/hero-coupe.png',
    alt: '深灰色电动跑车置于影棚灯光下',
  },
]

export function ShowcaseHero() {
  return (
    <Carousel
      className="h-[100svh]"
      slides={slides.map((s, i) => (
        <Hero
          key={s.title}
          {...s}
          tone={i === 1 ? 'light' : 'dark'}
        />
      ))}
    />
  )
}
