import { RevealRoot } from '../hooks/useReveal'

const segments = [
  {
    n: 'S1',
    t: 'Доставки еды и суши',
    d: 'Стик соевого соуса в каждый сет. Не протекает в сумке, не увеличивает вес заказа, выглядит премиально.',
    side: 'dark',
  },
  {
    n: 'S2',
    t: 'Кофейни и чайные',
    d: 'Мёд или варенье к чаю, капучино, кашам и сырникам. Бариста не отмеряет — гость вскрывает сам.',
    side: 'light',
  },
  {
    n: 'S3',
    t: 'Отели и завтраки',
    d: 'Порционные стики на шведской линии: гигиенично, без общих банок и липких ложек.',
    side: 'light',
  },
  {
    n: 'S4',
    t: 'Ритейл и кофейные полки',
    d: 'Микс-бокс 4 вкусов — готовый импульсный товар у кассы и на полке с десертами.',
    side: 'light',
  },
]

export default function Segments() {
  return (
    <section className="relative bg-[#f2e8d5] text-[#22264b] py-24 md:py-32 noise">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-14" data-rv>
          <span className="font-display text-2xl text-[#c81e3a]">05</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#22264b]/50">
            Кому нужна экосистема
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-x-14">
          {segments.map((s) => (
            <article key={s.n} className="group border-t border-[#22264b]/15 py-9 flex gap-6" data-rv>
              <span className="font-display text-xl text-[#c81e3a] pt-1">{s.n}</span>
              <div>
                <h3 className="font-display text-3xl md:text-5xl leading-[0.9] tracking-wide group-hover:text-[#c81e3a] transition-colors">
                  {s.t}
                </h3>
                <p className="text-sm md:text-base text-[#22264b]/70 mt-3 max-w-[46ch] leading-relaxed">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </RevealRoot>
    </section>
  )
}
