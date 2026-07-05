import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bıyık Statik | Endüstriyel Sentetik Boyama Çözümleri',
  description:
    'Endüstriyel yüzeylerde kusursuz sentetik boyama. Yüksek kalite, dayanıklılık ve son teknoloji boyama tesislerimizle sektördeki çözüm ortağınız.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Bıyık Statik | Endüstriyel Sentetik Boyama',
    description:
      'Endüstriyel yüzeylerde kusursuz sentetik boyama. Yüksek kalite ve dayanıklılık.',
    images: [{ url: '/logo.png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`light ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
