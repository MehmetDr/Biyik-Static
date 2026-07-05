'use client'

import { motion } from 'framer-motion'
import { Clock, Sparkles, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Zamanında Teslimat',
    description:
      'Söz verdiğimiz günde işinizi teslim ediyoruz. Planınızı aksatmadan, güvenle çalışın.',
  },
  {
    icon: Sparkles,
    title: 'Titiz İşçilik',
    description:
      'Her yüzeyi özenle hazırlar, pürüzsüz ve dayanıklı bir boya kaplaması için detaylara önem veririz.',
  },
  {
    icon: Wallet,
    title: 'Ekonomik Çözümler',
    description:
      'Kaliteden ödün vermeden, bütçenize uygun ve dürüst fiyatlarla yanınızdayız.',
  },
]

export function WhyUs() {
  return (
    <section id="neden-biz" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            Neden Biz?
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sizi Rahat Ettiren Bir Çalışma Anlayışı
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            İşimizi bir ustanın gururuyla yapıyoruz. Sizinle uzun soluklu bir
            güven ilişkisi kurmak için buradayız.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
