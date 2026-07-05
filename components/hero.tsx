'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="anasayfa" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-industrial.png"
          alt="Endüstriyel sentetik boyama tesisi"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-primary/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            Güvenilir usta işçiliği, güler yüzlü hizmet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl"
          >
            İşinize Değer Katan Sentetik Boya Ustası
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/80"
          >
            Temiz işçilik, kaliteli malzeme ve zamanında teslimat ile Bıyık
            Sentetik Boyama olarak yanınızdayız.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#hizmetler"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 bg-accent px-6 text-accent-foreground hover:bg-accent/90',
              )}
            >
              Hizmetlerimizi İnceleyin
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#iletisim"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 border border-background/40 bg-background/90 px-6 text-primary shadow-sm backdrop-blur hover:bg-background',
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              İletişime Geçin
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
