import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from '../components/Cursor'
import Marquee from '../components/Marquee'
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Manifesto from '../sections/Manifesto'
import DarkSide from '../sections/DarkSide'
import LightSide from '../sections/LightSide'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import About from '../sections/About'
import ContactForm from '../sections/ContactForm'
import Pricing from '../sections/Pricing'
import MixBox from '../sections/MixBox'
import Segments from '../sections/Segments'
import Footer from '../sections/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    // anchor navigation through lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const el = document.querySelector(a.getAttribute('href')!)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: 0 })
      }
    }
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={['СОЕВЫЙ СОУС 10 Г', 'МЁД 10 Г', 'МАЛИНА', 'КЛУБНИКА', 'СМОРОДИНА', 'НОЛЬ ОТХОДОВ']}
          className="bg-[#e8390f] text-white border-y border-black/30"
          speed={36}
        />
        <Manifesto />
        <DarkSide />
        <Marquee
          items={['СУШИ-БАРЫ', 'ДОСТАВКА РОЛЛОВ', 'ДАРК-КИТЧЕНЫ', 'B2B-ПРАЙС', 'ГОСТ 58434-2019']}
          dir="right"
          className="bg-[#18181b] text-[#eef0b1] border-y border-white/10"
          speed={40}
        />
        <LightSide />
        <Gallery />
        <Testimonials />
        <About />
        <ContactForm />
        <Pricing />
        <MixBox />
        <Marquee
          items={['КОФЕЙНИ', 'ОТЕЛИ', 'ЗАВТРАКИ', 'МИКС-БОКС 4 ВКУСА', 'РИТЕЙЛ']}
          className="bg-[#f7a026] text-[#22264b] border-y border-[#22264b]/20"
          speed={36}
        />
        <Segments />
      </main>
      <Footer />
    </>
  )
}
