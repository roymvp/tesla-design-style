import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

// Universal Sans (Display + Text) is proprietary. Inter is the open substitute:
// an engineered, low-key geometric grotesque. Loaded once and shared by both the
// Display and Text roles, mirroring Tesla's single-voice typographic system.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Latin substitute above has no CJK glyphs, so Chinese copy would render as
// tofu boxes on systems without a local CJK font. Noto Sans SC supplies the
// Chinese coverage at matching weights (400 regular, 500 medium — no bold,
// per Tesla's restrained type system). preload is off because the CJK payload
// is large and Latin/Inter carries the above-the-fold text.
const notoSansSC = Noto_Sans_SC({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Tesla 风格 Design System',
  description:
    'A reusable design system inspired by Tesla — radical subtraction, photography-first, monochrome-plus-one.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
