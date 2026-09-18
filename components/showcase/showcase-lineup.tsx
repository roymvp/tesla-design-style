import { VehicleCard } from '@/components/ui/vehicle-card'
import { CategoryCard } from '@/components/ui/category-card'

const vehicles = [
  {
    name: '零式轿跑',
    image: '/images/car-sedan.png',
    alt: '银色电动轿车',
    links: [
      { label: '立即订购', href: '#' },
      { label: '查看现车', href: '#' },
    ],
  },
  {
    name: '疾风 SUV',
    image: '/images/car-suv.png',
    alt: '白色电动 SUV',
    links: [
      { label: '立即订购', href: '#' },
      { label: '查看现车', href: '#' },
    ],
  },
  {
    name: '曜石轿跑',
    image: '/images/car-coupe.png',
    alt: '深灰色电动跑车',
    links: [
      { label: '立即订购', href: '#' },
      { label: '查看现车', href: '#' },
    ],
  },
]

export function ShowcaseLineup() {
  return (
    <section className="mx-auto max-w-[1383px] px-6 py-24">
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <h2 className="text-[32px] font-medium leading-tight text-foreground">
          车型阵容
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-body">
          导航面板采用透明卡片承载去背车型渲染图，仅靠间距分隔，无边框、无阴影。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <VehicleCard key={v.name} {...v} />
        ))}
      </div>

      <div className="mt-24 mb-14 flex flex-col items-center gap-3 text-center">
        <h2 className="text-[32px] font-medium leading-tight text-foreground">
          探索品类
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-body">
          品类卡为全幅横向摄影，12px 圆角裁切，标签置于左上角，依靠画面本身的暗部保证白字对比度。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CategoryCard
          label="高性能轿车"
          sublabel="风阻更低，续航更远"
          image="/images/cat-sedan.png"
          alt="银色电动轿车行驶在山间公路"
          href="#"
        />
        <CategoryCard
          label="全能 SUV"
          sublabel="七座空间，从容出行"
          image="/images/cat-suv.png"
          alt="白色电动 SUV 停靠在山景观景台"
          href="#"
        />
      </div>
    </section>
  )
}
