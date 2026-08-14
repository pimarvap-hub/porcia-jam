import { RevealRoot } from '../hooks/useReveal'

const honey = [
  { pack: '4 стика', weight: '40 г', price: '280' },
  { pack: '25 стиков', weight: '250 г', price: '1 750' },
  { pack: '50 стиков', weight: '500 г', price: '3 500' },
  { pack: '100 стиков', weight: '1000 г', price: '7 000' },
]
const jam = [
  { pack: '4 стика', weight: '52 г', price: '280' },
  { pack: '20 стиков', weight: '250 г', price: '1 400' },
  { pack: '40 стиков', weight: '500 г', price: '2 800' },
  { pack: '78 стиков', weight: '1000 г', price: '5 460' },
]

function PriceTable({ title, rows, accent }: { title: string; rows: typeof honey; accent: string }) {
  return (
    <div className="border border-white/15 rounded-xl p-6 md:p-8 bg-[#18181b]" data-rv style={{ ['--scale' as string]: '0.96' }}>
      <h3 className={`font-display text-3xl md:text-4xl tracking-wide mb-6 ${accent}`}>{title}</h3>
      <ul>
        {rows.map((r) => (
          <li key={r.pack} className="flex items-baseline py-4 border-b border-white/10 last:border-0">
            <div>
              <span className="font-display text-2xl md:text-3xl">{r.pack}</span>
              <span className="ml-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white/45">{r.weight}</span>
            </div>
            <span className="leader" />
            <span className="font-display text-2xl md:text-3xl whitespace-nowrap">
              {r.price} <span className="text-base text-white/50">тг</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="price" className="relative bg-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#f7a026]">03</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">Прайс · тенге</span>
        </div>
        <h2 className="font-display leading-[0.84] text-[15vw] md:text-[8vw] mb-6">
          <span className="rv-line" data-rv>
            <span>ЧЕСТНАЯ ЦЕНА</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-outline text-white">ЗА ГРАММ ВКУСА</span>
          </span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-[52ch] mb-14" data-rv>
          Упаковки от пробных 4 стиков до килограммового запаса. Соевый соус и корпоративные объёмы —
          по индивидуальному B2B-прайсу.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <PriceTable title="МЁД · 10 Г" rows={honey} accent="text-[#f7a026]" />
          <PriceTable title="ВАРЕНЬЕ · 13 Г" rows={jam} accent="text-[#ff5d73]" />
        </div>
        <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-white/40" data-rv>
          Варенье: малина · клубника · смородина — цена одинаковая для всех ягод
        </p>
      </RevealRoot>
    </section>
  )
}
