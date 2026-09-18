const colors = [
  { name: 'Electric Blue', token: '--primary', hex: '#3E6AE1', className: 'bg-primary', dark: true },
  { name: 'Carbon Dark', token: '--foreground', hex: '#171A20', className: 'bg-foreground', dark: true },
  { name: 'Graphite', token: '--body', hex: '#393C41', className: 'bg-body', dark: true },
  { name: 'Pewter', token: '--muted-foreground', hex: '#5C5E62', className: 'bg-muted-foreground', dark: true },
  { name: 'Silver Fog', token: '--placeholder', hex: '#8E8E8E', className: 'bg-placeholder', dark: true },
  { name: 'Pale Silver', token: '--input', hex: '#D0D1D2', className: 'bg-input', dark: false },
  { name: 'Cloud Gray', token: '--border', hex: '#EEEEEE', className: 'bg-border', dark: false },
  { name: 'Light Ash', token: '--muted', hex: '#F4F4F4', className: 'bg-muted', dark: false },
  { name: 'Pure White', token: '--background', hex: '#FFFFFF', className: 'bg-background', dark: false },
]

const typeScale = [
  { label: '主标题 Hero', sample: '技术，不必张扬', className: 'text-[40px] font-medium leading-[48px]' },
  { label: '区块标题', sample: '车型阵容', className: 'text-[32px] font-medium' },
  { label: '产品名', sample: '零式轿跑', className: 'text-[17px] font-medium' },
  { label: '促销文案', sample: '限时低息金融方案', className: 'text-[22px] font-normal text-primary' },
  { label: '正文 Body', sample: '双电机全轮驱动，续航 715 公里。', className: 'text-sm leading-5 text-body' },
  { label: '导航 / 按钮', sample: '立即订购', className: 'text-sm font-medium' },
]

const radii = [
  { name: '控件 4px', className: 'rounded-[4px]' },
  { name: '媒体卡 12px', className: 'rounded-[12px]' },
  { name: '圆形 50%', className: 'rounded-full' },
  { name: '直角 0', className: 'rounded-none' },
]

export function ShowcaseTokens() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-[1383px] px-6 py-24">
        <div className="mb-14 flex flex-col gap-3">
          <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground">
            设计令牌
          </span>
          <h2 className="text-[32px] font-medium leading-tight text-foreground">
            颜色 · 字体 · 圆角 · 动效
          </h2>
        </div>

        {/* Colors */}
        <h3 className="mb-6 text-[17px] font-medium text-foreground">颜色</h3>
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {colors.map((c) => (
            <div key={c.token} className="flex flex-col gap-2">
              <div
                className={`${c.className} h-24 rounded-[4px] ring-1 ring-inset ring-black/5`}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground">{c.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{c.hex}</span>
                <span className="font-mono text-xs text-muted-foreground">{c.token}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <h3 className="mb-6 text-[17px] font-medium text-foreground">字体层级</h3>
        <div className="mb-16 flex flex-col divide-y divide-border">
          {typeScale.map((t) => (
            <div
              key={t.label}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="w-40 shrink-0 text-xs text-muted-foreground">
                {t.label}
              </span>
              <span className={`${t.className} text-foreground`}>{t.sample}</span>
            </div>
          ))}
        </div>

        {/* Radius + Motion */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-[17px] font-medium text-foreground">圆角</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {radii.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-3">
                  <div
                    className={`${r.className} size-20 bg-foreground/10 ring-1 ring-inset ring-black/5`}
                  />
                  <span className="text-xs text-muted-foreground">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-[17px] font-medium text-foreground">动效</h3>
            <p className="max-w-md text-sm leading-relaxed text-body">
              全站统一 0.33s、仅过渡颜色相关属性（无位移、无缩放），
              缓动曲线 <span className="font-mono text-xs">cubic-bezier(0.5, 0, 0, 0.75)</span>。
              悬停下方按钮观察其颜色渐变节奏。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="cursor-pointer rounded-[4px] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-tesla hover:bg-primary/90">
                悬停我
              </span>
              <span className="cursor-pointer rounded-[4px] border border-input px-4 py-2 text-sm font-medium text-secondary-foreground transition-tesla hover:bg-muted">
                也悬停我
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
