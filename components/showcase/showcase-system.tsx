'use client'

import { useState } from 'react'
import { Info, Inbox, TriangleAlert } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, Radio } from '@/components/ui/radio-group'
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { SpecGrid } from '@/components/ui/spec-grid'
import { Tabs, TabsList, TabsTab, TabsPanel } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { EmptyState } from '@/components/ui/empty-state'

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

const SPECS = [
  { value: '3.1', unit: '秒', label: '百公里加速' },
  { value: '714', unit: '公里', label: 'CLTC 续航' },
  { value: '261', unit: 'km/h', label: '最高车速' },
  { value: '0.22', unit: 'Cd', label: '风阻系数' },
]

export function ShowcaseSystem() {
  const [agree, setAgree] = useState(true)
  const [autopilot, setAutopilot] = useState(true)
  const [color, setColor] = useState('white')
  const [wheel, setWheel] = useState('19')

  return (
    <TooltipProvider>
      <section className="mx-auto max-w-[1383px] px-6 py-24">
        <div className="mb-14 flex flex-col gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            系统扩展
          </span>
          <h2 className="text-[28px] font-medium leading-9 text-foreground">
            表单控件 · 数据陈列 · 反馈与状态
          </h2>
        </div>

        {/* Spec grid — a hero data pattern */}
        <div className="mb-16 border-y border-border py-10">
          <SpecGrid specs={SPECS} />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Form controls */}
          <Panel title="表单控件">
            <div className="flex flex-col gap-6">
              <label className="flex items-center gap-3 text-sm text-foreground">
                <Checkbox checked={agree} onCheckedChange={setAgree} />
                我已阅读并同意订购条款
              </label>

              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">增强版自动辅助驾驶</span>
                <Switch checked={autopilot} onCheckedChange={setAutopilot} />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-foreground">车漆</span>
                <RadioGroup value={color} onValueChange={(v) => setColor(String(v))}>
                  <label className="flex items-center gap-3 text-sm text-body">
                    <Radio value="white" /> 珍珠白
                  </label>
                  <label className="flex items-center gap-3 text-sm text-body">
                    <Radio value="black" /> 曜石黑
                  </label>
                  <label className="flex items-center gap-3 text-sm text-body">
                    <Radio value="blue" /> 深海蓝
                  </label>
                </RadioGroup>
              </div>

              <label className="flex max-w-xs flex-col gap-2">
                <span className="text-sm font-medium text-foreground">轮毂</span>
                <Select value={wheel} onValueChange={(v) => setWheel(String(v))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="19">19 英寸标准轮毂</SelectItem>
                    <SelectItem value="20">20 英寸运动轮毂</SelectItem>
                    <SelectItem value="21">21 英寸高性能轮毂</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </Panel>

          {/* Badges, tooltip, dialog */}
          <Panel title="标签 · 提示 · 弹窗">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">徽标</span>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="neutral">现车</Badge>
                  <Badge variant="accent">新款</Badge>
                  <Badge variant="solid">限时</Badge>
                  <Badge variant="outline">展示车</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">工具提示</span>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <button className="inline-flex items-center gap-1.5 text-sm text-body">
                        <Info className="size-4" /> 什么是 CLTC 续航
                      </button>
                    }
                  />
                  <TooltipContent>
                    中国轻型汽车行驶工况下的官方续航里程
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">弹窗</span>
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button variant="secondary" size="ctaSecondary">
                        预约试驾
                      </Button>
                    }
                  />
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>预约试驾</DialogTitle>
                      <DialogDescription>
                        留下联系方式，专属顾问将在 24 小时内与您确认到店时间。
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose
                        render={
                          <Button variant="secondary" size="ctaSecondary">
                            取消
                          </Button>
                        }
                      />
                      <Button variant="primary" size="cta">
                        提交预约
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Panel>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Panel title="标签页（下划线指示器）">
            <Tabs defaultValue="range">
              <TabsList>
                <TabsTab value="range">续航</TabsTab>
                <TabsTab value="charge">充电</TabsTab>
                <TabsTab value="warranty">质保</TabsTab>
              </TabsList>
              <TabsPanel value="range">
                <p className="max-w-prose text-sm leading-relaxed text-body">
                  CLTC 工况下最高可达 714 公里，日常通勤一周一充。
                </p>
              </TabsPanel>
              <TabsPanel value="charge">
                <p className="max-w-prose text-sm leading-relaxed text-body">
                  超级充电 15 分钟最高补充约 275 公里续航。
                </p>
              </TabsPanel>
              <TabsPanel value="warranty">
                <p className="max-w-prose text-sm leading-relaxed text-body">
                  整车四年或八万公里质保，动力电池八年或十六万公里质保。
                </p>
              </TabsPanel>
            </Tabs>
          </Panel>
        </div>

        {/* Accordion */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Panel title="常见问题（Accordion）">
            <Accordion>
              <AccordionItem value="a">
                <AccordionTrigger>如何预约试驾？</AccordionTrigger>
                <AccordionPanel>
                  在车型页点击「预约试驾」，填写联系方式后顾问将与您联系。
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>支持哪些充电方式？</AccordionTrigger>
                <AccordionPanel>
                  支持家用交流充电、超级充电及第三方公共充电桩。
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>可以更改订单配置吗？</AccordionTrigger>
                <AccordionPanel>
                  车辆进入生产前均可在账户中调整外观、内饰与轮毂配置。
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Panel>

          {/* States */}
          <Panel title="加载 · 空 · 错误状态">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">骨架屏</span>
                <div className="flex flex-col gap-3 rounded-[8px] bg-muted p-4">
                  <Skeleton className="h-32 w-full rounded-[8px]" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Spinner />
                <span className="text-sm text-muted-foreground">正在载入配置…</span>
              </div>
              <div className="rounded-[8px] bg-muted">
                <EmptyState
                  icon={<Inbox className="size-8" />}
                  title="暂无可选现车"
                  description="当前区域没有匹配的库存车辆，可切换城市或预约新车订购。"
                  action={
                    <Button variant="secondary" size="ctaSecondary">
                      预约新车
                    </Button>
                  }
                />
              </div>
              <div className="rounded-[8px] bg-muted">
                <EmptyState
                  tone="error"
                  icon={<TriangleAlert className="size-8" />}
                  title="加载失败"
                  description="网络异常，请检查连接后重试。"
                  action={
                    <Button variant="secondary" size="ctaSecondary">
                      重新加载
                    </Button>
                  }
                />
              </div>
            </div>
          </Panel>
        </div>
      </section>
    </TooltipProvider>
  )
}
