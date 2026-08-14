import { RevealRoot } from '../hooks/useReveal'

const stats = [
  { n: '10 Г', d: 'точная порция мёда и соуса' },
  { n: '13 Г', d: 'порция ягодного варенья' },
  { n: '5', d: 'вкусов в экосистеме' },
  { n: '0', d: 'отходов и недоеденных банок' },
]

export default function Manifesto() {
  return (
    <section className="relative bg-[#f2e8d5] text-[#22264b] py-24 md:py-36 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#c81e3a] mb-8" data-rv>
          Манифест
        </p>
        <h2 className="font-display leading-[0.86] text-[15vw] md:text-[8.5vw]">
          <span className="rv-line" data-rv>
            <span>УМНАЯ ПОРЦИЯ.</span>
          </span>
          <span className="rv-line" data-rv>
            <span>ИДЕАЛЬНЫЙ ВКУС.</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-[#c81e3a]">НОЛЬ ОТХОДОВ.</span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 mt-14 md:mt-20 items-end">
          <p className="text-base md:text-lg leading-relaxed text-[#22264b]/80 max-w-[52ch]" data-rv>
            Мы упаковываем противоположные вкусы — солёный азиатский соус и сладкие топпинги — в один
            формат: герметичный стик с точной дозой. Один стик = одна порция. Ничего не высыхает, не
            скисает и не отправляется в мусор. Две вселенные вкуса, одна система.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((s) => (
              <div key={s.n} data-rv>
                <div className="font-display text-6xl md:text-7xl leading-none text-[#22264b]">{s.n}</div>
                <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#22264b]/60">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealRoot>
    </section>
  )
}
