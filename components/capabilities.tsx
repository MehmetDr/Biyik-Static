'use client'

import { motion } from 'framer-motion'
import { Flame, Layers, Truck, Palette } from 'lucide-react'

const items = [
  {
    icon: Flame,
    title: 'Geniş Ebatlı Fırınlar',
    desc: 'Büyük hacimli iş parçalarını tek seferde işleyebilen yüksek sıcaklık kontrollü kurutma fırınları.',
  },
  {
    icon: Layers,
    title: 'Yüksek Kaliteli Sentetik Kaplama',
    desc: 'Korozyona ve dış etkenlere dayanıklı, uzun ömürlü profesyonel sentetik boya sistemleri.',
  },
  {
    icon: Truck,
    title: 'Hızlı Teslimat',
    desc: 'Planlı üretim akışı ve geniş kapasitemiz ile projelerinizi zamanında teslim ediyoruz.',
  },
  {
    icon: Palette,
    title: 'Özel Renk Çalışmaları',
    desc: 'RAL kataloğu ve müşteriye özel renk eşleştirmesi ile talep ettiğiniz her tonu uyguluyoruz.',
  },
]

export function Capabilities() {
  return (
    <section id="hizmetler" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Teknik Kapasitemiz
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Endüstriyel Ölçekte Boyama Çözümleri
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Modern ekipmanlarımız ve uzman kadromuzla her ölçekteki projeye
            profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
