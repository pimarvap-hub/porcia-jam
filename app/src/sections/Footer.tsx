import { RevealRoot } from '../hooks/useReveal'

/** Decorative barcode strip (from the product sticks' barcode motif). */
function Barcode({ seed = '77015315872' }: { seed?: string }) {
  const bars: number[] = []
  let h = 0
  for (let i = 0; i < seed.length * 3; i++) {
    h = (h * 31 + seed.charCodeAt(i % seed.length) + i * 7) % 97
    bars.push((h % 4) + 1)
  }
  return (
    <div className="flex items-end gap-[2px] h-12" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} style={{ width: `${w}px` }} className="bg-current inline-block h-full" />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contacts" className="relative bg-[#0a0a0a] text-white pt-24 md:pt-32 pb-10 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#f7a026] mb-6" data-rv>
          Объединим ваши вкусы
        </p>
        <a href="mailto:erkin12@mail.ru" className="block group" data-cursor="ПИШИ" data-rv>
          <span className="font-display leading-[0.8] text-[19vw] md:text-[14vw] block group-hover:text-[#f7a026] transition-colors">
            СВЯЗАТЬСЯ
          </span>
        </a>

        <div className="grid md:grid-cols-3 gap-10 mt-16 md:mt-24 border-t border-white/15 pt-10">
          <div data-rv>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/45 mb-4">Производитель</h3>
            <p className="font-display text-2xl tracking-wide">ТОО «КЕЛЕР»</p>
            <p className="text-white/60 text-sm mt-1">г. Алматы, ул. Толе би, 301</p>
          </div>
          <div data-rv>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/45 mb-4">Контакты</h3>
            <a href="tel:+77015315872" className="font-display text-2xl tracking-wide hover:text-[#f7a026] transition-colors" data-cursor>
              +7 701 531 58 72
            </a>
            <br />
            <a href="mailto:erkin12@mail.ru" className="text-white/60 text-sm hover:text-white transition-colors" data-cursor>
              erkin12@mail.ru
            </a>
          </div>
          <div data-rv>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/45 mb-4">Экосистема</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Соевый соус 10 г · Мёд 10 г · Варенье 13 г: малина, клубника, смородина · Ассорти-боксы
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between mt-16 text-white/35">
          <Barcode />
          <p className="text-[11px] uppercase tracking-[0.25em] text-right">
            ПОРЦИЯ © 2026
            <br />
            умная порция · идеальный вкус · ноль отходов
          </p>
        </div>
      </RevealRoot>
    </footer>
  )
}
