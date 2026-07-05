'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Neden Biz?', href: '#neden-biz' },
  { label: 'İletişim', href: '#iletisim' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#anasayfa" className="flex items-center">
          <img src="/logo.png" alt="Bıyık Statik Logo" className="h-10 md:h-14 w-auto object-contain" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                scrolled ? 'text-muted-foreground' : 'text-background/90',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/905050653851?text=Merhaba%2C%20teklif%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-10 bg-accent px-5 text-accent-foreground hover:bg-accent/90',
            )}
          >
            Teklif Al
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'md:hidden',
            scrolled ? 'text-foreground' : 'text-background',
          )}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/905050653851?text=Merhaba%2C%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-2 h-10 w-full bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
