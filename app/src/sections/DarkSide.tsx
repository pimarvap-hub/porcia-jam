import { RevealRoot } from '../hooks/useReveal'

const benefits = [
  { n: '01', t: 'Точная порция 10 г', d: 'Каждый ролл получает ровно столько соуса, сколько нужно. Себестоимость порции — под контролем.' },
  { n: '02', t: 'Ноль отходов', d: 'Никаких открытых бутылок, выцветшего соуса и липких наливников. Вскрыл — использовал — выбросил пустой стик.' },
  { n: '03', t: 'Гигиена и срок', d: 'Герметичная индивидуальная упаковка, ГОСТ 58434-2019. Соус не контактирует с воздухом до момента подачи.' },
  { n: '04', t: 'Формат доставки', d: 'Стик не протекает и не боится тряски в термосумке. Кладётся в каждый сет вместо салфетки.' },
]

const audiences = ['Суши-бары', 'Доставки роллов', 'Дарк-китчены', 'Рестораны азиатской кухни', 'Кейтеринг']

export default function DarkSide() {
  return (
    <section id="dark" className="relative bg-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#e8390f]">01</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">
            Dark side — тёмная сторона
          </span>
        </div>

        <h2 className="font-display leading-[0.84] text-[16vw] md:text-[9vw] mb-16">
          <span className="rv-line" data-rv>
            <span>СОЕВЫЙ СОУС</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-outline text-white">ПО СТИКУ К СЕТУ</span>
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[50ch] mb-12" data-rv>
              Чёрный, как сам соус. Премиальный сервис для тех, кто кормит город роллами: порционный
              соевый соус для суши в стиках по 10 г. Клиент вскрывает свежий соус — а не зажатую
              бутылку из зоны доставки.
            </p>
            <ul className="divide-y divide-white/12 border-y border-white/12">
              {benefits.map((b) => (
                <li key={b.n} className="py-6 flex gap-6 group" data-rv>
                  <span className="font-display text-xl text-[#e8390f] pt-1">{b.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-wide group-hover:text-[#e8390f] transition-colors">
                      {b.t}
                    </h3>
                    <p className="text-sm text-white/55 mt-1 max-w-[46ch]">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-10" data-rv>
              {audiences.map((a) => (
                <span key={a} className="text-[12px] font-bold uppercase tracking-[0.12em] border border-white/25 rounded-full px-4 py-2 text-white/75">
                  {a}
                </span>
              ))}
            </div>
            <a
              href="mailto:erkin12@mail.ru?subject=B2B-прайс%20на%20соевый%20соус%20в%20стиках"
              className="inline-flex items-center gap-3 mt-10 bg-[#e8390f] text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white hover:text-[#0a0a0a] transition-colors"
              data-cursor
              data-rv
            >
              Запросить B2B-прайс <span aria-hidden>→</span>
            </a>
            <p className="text-white/40 text-xs mt-4">Условия и объёмы — по запросу. Работаем с сетями и доставками.</p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl overflow-hidden" data-rv style={{ ['--scale' as string]: '0.94' }}>
              <img src="/img/dark-pour.jpg" alt="Стик соевого соуса поливает ролл" className="w-full h-full object-cover" data-cursor />
            </div>
            <div className="rounded-xl overflow-hidden" data-rv style={{ ['--scale' as string]: '0.94' }}>
              <img src="/img/dark-box.jpg" alt="Короб стиков соевого соуса 10 г" className="w-full h-full object-cover" data-cursor />
            </div>
          </div>
        </div>
      </RevealRoot>
    </section>
  )
}
