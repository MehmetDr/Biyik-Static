import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Capabilities } from '@/components/capabilities'
import { AboutProcess } from '@/components/about-process'
import { WhyUs } from '@/components/why-us'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Capabilities />
      <AboutProcess />
      <WhyUs />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
