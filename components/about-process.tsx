'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Yüzey Hazırlığı',
    desc: 'Kumlama ve kimyasal temizlik ile boyaya mükemmel tutunma sağlayan pürüzsüz zemin hazırlanır.',
  },
  {
    title: 'Astar Uygulaması',
    desc: 'Korozyon önleyici astar katmanı ile metal yüzeyler uzun ömürlü koruma altına alınır.',
  },
  {
    title: 'Sentetik Boya Katmanı',
    desc: 'Kontrollü kabin ortamında homojen ve dökümansız düzgün yüzey garantisi ile boya uygulanır.',
  },
  {
    title: 'Fırınlama & Kontrol',
    desc: 'Yüksek sıcaklık fırınlarında kürleme sonrası her parça kalite kontrolünden geçirilir.',
  },
]

export function AboutProcess() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src="/images/process-painting.png"
                alt="Sentetik boyama süreci"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-lg sm:block">
              <p className="text-3xl font-bold text-accent">%100</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Düzgün Yüzey Garantisi
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Sürecimiz
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Titiz İşçilik, Pürüzsüz ve Kusursuz Sonuç
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Her projede detaya verdiğimiz önem farkımızı ortaya koyar. Yüzey
              hazırlığından son kat boyaya kadar her aşamada kalite standartlarını
              titizlikle uygular, dökümansız ve pürüzsüz yüzeyler garanti ederiz.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      <span className="mr-2 text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
