import { RevealRoot } from '../hooks/useReveal'

const values = [
  {
    icon: '🌱',
    title: 'Натуральность',
    desc: 'Только натуральные ингредиенты: мёд от пасечников, ягоды без консервантов, соевый соус ГОСТ.',
  },
  {
    icon: '♻️',
    title: 'Ноль отходов',
    desc: 'Каждый стик — минимальная упаковка, максимальный результат. Не переплачиваешь за воздух.',
  },
  {
    icon: '⚡',
    title: 'Удобство',
    desc: 'Открывается одной рукой, не капает, не липнет. Идеально для ресторана, дома и дороги.',
  },
  {
    icon: '🎯',
    title: 'Точность',
    desc: 'Каждый стик — точная порция. Контроль затрат для ресторана, идеальный вкус для гостя.',
  },
  {
    icon: '🤝',
    title: 'Честность',
    desc: 'Работаем прямо: реальные цены, реальные условия, никаких скрытых комиссий.',
  },
  {
    icon: '🏆',
    title: 'Качество',
    desc: 'ГОСТ 58434-2019, герметичная упаковка, сертифицирующие документы. Проверено и надёжно.',
  },
]

export default function About() {
  return (
    <>
      {/* Story Section */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden">
        <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
          <div className="flex items-baseline gap-6 mb-10" data-rv>
            <span className="font-display text-2xl text-[#f7a026]">О НАС</span>
            <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">
              История ПОРЦИЯ
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div data-rv>
              <h2 className="font-display leading-[0.84] text-[14vw] md:text-[7vw] mb-8">
                <span className="rv-line">
                  <span>ИДЕЯ ИЗ</span>
                </span>
                <span className="rv-line">
                  <span className="text-outline text-white">КУХНИ</span>
                </span>
              </h2>

              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-[50ch] mb-6">
                Всё началось с простого вопроса: <span className="text-[#f7a026]">почему суши-бары используют огромные бутылки соуса?</span>
              </p>

              <p className="text-white/70 text-base leading-relaxed max-w-[50ch] mb-6">
                ТОО «КЕЛЕР» занимается производством качественных пищевых продуктов уже более 10 лет. Мы знаем,
                что значит работать с ресторанами, кофейнями и сетями. И мы понимаем: есть лучший способ.
              </p>

              <p className="text-white/70 text-base leading-relaxed max-w-[50ch]">
                <span className="text-[#f7a026] font-semibold">ПОРЦИЯ</span> — это не просто порционный продукт. Это решение
                для бизнеса, который ценит качество, контроль затрат и доверие клиентов.
              </p>
            </div>

            <div
              className="rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-[#f7a026]/20 to-[#ff5d73]/20 flex items-center justify-center"
              data-rv
            >
              <div className="text-center">
                <p className="text-7xl mb-4">🍯</p>
                <p className="text-white/60 text-lg">Сделано с любовью<br/>в Алматы</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h3 className="font-display text-2xl md:text-3xl mb-10">
              <span className="text-[#f7a026]">Что делает нас особенными:</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[#f7a026]/50 transition-all"
                  data-rv
                  style={{ ['--scale' as string]: '0.96' }}
                >
                  <p className="text-4xl mb-3">{v.icon}</p>
                  <h4 className="font-display text-xl tracking-wide mb-2">{v.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealRoot>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#18181b] text-white py-20 md:py-28 noise overflow-hidden">
        <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '10+', label: 'лет на рынке', desc: 'Опыт производства' },
              { num: '100K+', label: 'порций в месяц', desc: 'Доставляем клиентам' },
              { num: '50+', label: 'компаний-партнёров', desc: 'От малых до сетей' },
              { num: '3', label: 'вкуса варенья', desc: 'Малина, клубника, смородина' },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
                data-rv
              >
                <p className="font-display text-4xl md:text-5xl text-[#f7a026] mb-2">{s.num}</p>
                <p className="font-semibold text-lg mb-1">{s.label}</p>
                <p className="text-white/60 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealRoot>
      </section>
    </>
  )
}
