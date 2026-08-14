import { RevealRoot } from '../hooks/useReveal'

const contents = [
  { name: 'Малина', qty: '10 шт' },
  { name: 'Клубника', qty: '10 шт' },
  { name: 'Смородина', qty: '10 шт' },
  { name: 'Мёд', qty: '10 шт' },
]

export default function MixBox() {
  return (
    <section id="mix" className="relative bg-[#e9dcc3] text-[#22264b] py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 grid gap-5">
            <div className="rounded-xl overflow-hidden bg-white" data-rv style={{ ['--scale' as string]: '0.94' }}>
              <img src="/img/mix-box.jpg" alt="Ассорти-боксы: варенье и мёд" className="w-full object-cover blend-multiply" data-cursor loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden bg-white" data-rv style={{ ['--scale' as string]: '0.94' }}>
              <img src="/img/display-box.jpg" alt="Дисплей-бокс со стиками для кофейной зоны" className="w-full object-cover blend-multiply" data-cursor loading="lazy" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-baseline gap-6 mb-8" data-rv>
              <span className="font-display text-2xl text-[#c81e3a]">04</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#22264b]/50">Розничный микс</span>
            </div>
            <h2 className="font-display leading-[0.84] text-[14vw] md:text-[6.5vw] mb-8">
              <span className="rv-line" data-rv>
                <span>4 ВКУСА</span>
              </span>
              <span className="rv-line" data-rv>
                <span className="text-outline">В ОДНОМ БОКСЕ</span>
              </span>
            </h2>
            <p className="text-[#22264b]/75 text-base md:text-lg leading-relaxed max-w-[50ch] mb-8" data-rv>
              Ассорти «варенье + мёд» — 40 стиков в прозрачном боксе. Готовое решение для кофейной
              зоны, стойки ресепшн или полки у кассы: бери бокс — ставь — продавай.
            </p>
            <ul className="border-y border-[#22264b]/15 divide-y divide-[#22264b]/15 mb-8" data-rv>
              {contents.map((c) => (
                <li key={c.name} className="flex items-baseline py-4">
                  <span className="font-display text-2xl md:text-3xl">{c.name}</span>
                  <span className="leader" />
                  <span className="font-display text-2xl md:text-3xl">{c.qty}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-baseline gap-4 flex-wrap" data-rv>
              <span className="font-display text-6xl md:text-7xl">2 800 <span className="text-3xl text-[#22264b]/50">тг</span></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#22264b]/55">за бокс · 40 стиков</span>
            </div>
          </div>
        </div>
      </RevealRoot>
    </section>
  )
}
