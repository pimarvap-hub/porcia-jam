import { RevealRoot } from '../hooks/useReveal'

const flavors = [
  {
    img: '/img/honey-drip.jpg',
    name: 'МЁД',
    sub: 'натуральный · стик 10 г',
    fact: 'Витамины группы B, K, E, C и провитамин A — в связке с природными минералами.',
    tag: 'тепло',
  },
  {
    img: '/img/jam-raspberry.jpg',
    name: 'МАЛИНА',
    sub: 'варенье · стик 13 г',
    fact: 'Нежная классика для капучино и сырников. Фирменный вкус ТОО «КЕЛЕР».',
    tag: 'ягода',
  },
  {
    img: '/img/jam-strawberry.jpg',
    name: 'КЛУБНИКА',
    sub: 'варенье · стик 13 г',
    fact: 'Природный аспирин: помогает при головных болях и просто поднимает настроение.',
    tag: 'ягода',
  },
  {
    img: '/img/jam-currant.jpg',
    name: 'СМОРОДИНА',
    sub: 'варенье · стик 13 г',
    fact: 'Неспелые ягоды держат в 4 раза больше активного витамина C. Запас на весь год.',
    tag: 'ягода',
  },
]

export default function LightSide() {
  return (
    <section id="light" className="relative bg-[#f2e8d5] text-[#22264b] py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#c81e3a]">02</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#22264b]/50">
            Light side — светлая сторона
          </span>
        </div>

        <h2 className="font-display leading-[0.84] text-[16vw] md:text-[9vw] mb-6">
          <span className="rv-line" data-rv>
            <span>МЁД И ВАРЕНЬЕ</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-outline">К КАЖДОЙ ЧАШКЕ</span>
          </span>
        </h2>
        <p className="text-[#22264b]/75 text-base md:text-lg leading-relaxed max-w-[54ch] mb-16" data-rv>
          Яркая, сочная, тёплая сторона экосистемы. Стики с мёдом и ягодным вареньем для кофеен,
          завтраков в отелях и полок розницы. Открывается одной рукой, не капает, не липнет.
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {flavors.map((f) => (
            <article
              key={f.name}
              className="group bg-white/70 rounded-xl overflow-hidden border border-[#22264b]/10 hover:-translate-y-1.5 transition-transform duration-500"
              data-rv
              style={{ ['--scale' as string]: '0.95' }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f2e8d5]">
                <img
                  src={f.img}
                  alt={`Стик: ${f.name}`}
                  className="w-full h-full object-cover blend-multiply group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  data-cursor
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl tracking-wide">{f.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c81e3a]">{f.tag}</span>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#22264b]/50 mt-1">{f.sub}</p>
                <p className="text-sm text-[#22264b]/70 mt-3 leading-relaxed">{f.fact}</p>
              </div>
            </article>
          ))}
        </div>
      </RevealRoot>
    </section>
  )
}
