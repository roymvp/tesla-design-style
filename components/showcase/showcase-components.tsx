'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { OptionRow } from '@/components/ui/option-row'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function Panel({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[17px] font-medium text-foreground">{title}</h3>
      {children}
    </div>
  )
}

const TRIMS = [
  { id: 'rwd', label: '后轮驱动版', value: '¥235,500' },
  { id: 'lr-rwd', label: '长续航后轮驱动版', value: '¥259,500' },
  { id: 'lr-awd', label: '长续航全轮驱动版', value: '¥285,500' },
  { id: 'perf', label: '高性能全轮驱动版', value: '¥339,500' },
]

export function ShowcaseComponents() {
  const [trim, setTrim] = useState('rwd')

  return (
    <section className="mx-auto max-w-[1383px] px-6 py-24">
      <div className="mb-14 flex flex-col gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          组件
        </span>
        <h2 className="text-[28px] font-medium leading-9 text-foreground">
          按钮 · 输入框 · 卡片
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Buttons */}
        <Panel title="按钮">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground">主 / 次 CTA（等高 40px）</span>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="cta">
                  立即订购
                </Button>
                <Button variant="secondary" size="ctaSecondary">
                  查看现车
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground">导航 / 文本链接</span>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="nav" size="nav">
                  Model 系列
                </Button>
                <Button variant="nav" size="nav">
                  能源
                </Button>
                <Button variant="link" size="link">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground">禁用态</span>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="cta" disabled>
                  暂不可订购
                </Button>
              </div>
            </div>
          </div>
        </Panel>

        {/* Inputs */}
        <Panel title="输入框">
          <div className="flex max-w-sm flex-col gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">姓名</span>
              <Input placeholder="请输入您的姓名" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">邮箱</span>
              <Input type="email" placeholder="you@example.com" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">
                校验失败示例
              </span>
              <Input aria-invalid defaultValue="格式不正确" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                禁用
              </span>
              <Input placeholder="不可编辑" disabled />
            </label>
          </div>
        </Panel>
      </div>

      {/* Cards */}
      <div className="mt-16">
        <Panel title="卡片（Level 0 · 扁平）">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-muted p-6">
              <CardHeader>
                <CardTitle>整车质保</CardTitle>
                <CardDescription>
                  四年或八万公里整车有限质保，电池与驱动单元单独享有更长质保。
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" size="link">
                  查看条款
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-muted p-6">
              <CardHeader>
                <CardTitle>超级充电网络</CardTitle>
                <CardDescription>
                  覆盖主要城市与高速沿线，即插即充，无需下车操作。
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" size="link">
                  查看地图
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-muted p-6">
              <CardHeader>
                <CardTitle>智能辅助驾驶</CardTitle>
                <CardDescription>
                  持续通过 OTA 升级，车辆能力随时间不断进化。
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" size="link">
                  了解功能
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Panel>
      </div>

      {/* Configurator option rows */}
      <div className="mt-16">
        <Panel title="配置选择（OptionRow）">
          <div className="flex max-w-md flex-col gap-3">
            {TRIMS.map((t) => (
              <OptionRow
                key={t.id}
                label={t.label}
                value={t.value}
                selected={trim === t.id}
                onClick={() => setTrim(t.id)}
              />
            ))}
          </div>
        </Panel>
      </div>
    </section>
  )
}
