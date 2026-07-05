import { Factory, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Neden Biz?', href: '#neden-biz' },
  { label: 'İletişim', href: '#iletisim' },
]

const services = [
  'Sentetik Boyama',
  'Elektrostatik Toz Boya',
  'Kumlama',
  'Özel Renk Çalışmaları',
]

export function Footer() {
  return (
    <footer id="iletisim" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Factory className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">
                Bıyık <span className="text-accent">Sentetik</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Temiz işçilik ve dürüst hizmet anlayışıyla sentetik boyama
              işlerinizde güvenle yanınızdayız.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Hızlı Bağlantılar
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Hizmetlerimiz
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-primary-foreground/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span>
                  Şeker, Şahan Sk. No:22
                  <br />
                  38080 Kocasinan / Kayseri
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-5 w-5 flex-none text-accent" />
                <a href="tel:+905050653851" className="hover:text-accent">
                  +90 505 065 38 51
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-5 w-5 flex-none text-accent" />
                <a
                  href="mailto:info@biyiksentetik.com"
                  className="hover:text-accent"
                >
                  info@biyiksentetik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Bıyık Sentetik Boyama. Tüm hakları
            saklıdır.
          </p>
          <p>Endüstriyel Boyama Çözümleri</p>
        </div>
      </div>
    </footer>
  )
}
