import { ModelCard } from '@/components/ui/model-card'

export function ShowcaseModel() {
  return (
    <ModelCard
      name="旗舰轿车"
      tagline="双电机全轮驱动 · 续航 700 公里"
      image="/images/model-hero.png"
      alt="银色电动轿车行驶在黄昏的海岸公路上"
      tone="dark"
      primaryLabel="立即订购"
      secondaryLabel="了解更多"
    />
  )
}
