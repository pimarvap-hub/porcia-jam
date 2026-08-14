export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[620px]">
      <div className="split-wrap flex flex-col md:flex-row h-full">
        {/* DARK SIDE */}
        <a
          href="#dark"
          className="split-side group bg-[#0a0a0a] min-h-[50svh] md:min-h-0"
          data-cursor="ТЁМНАЯ"
          aria-label="Тёмная сторона — соевый соус"
        >
          <img src="/img/dark-stick.jpg" alt="Стик соевого соуса" className="split-img opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
          <div className="absolute left-6 md:left-10 bottom-24 md:bottom-28">
            <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.3em] text-[#e8390f] mb-3">
              Dark side · B2B
            </p>
            <h2 className="font-display text-[17vw] md:text-[9vw] leading-[0.82] text-white">
              ТЁМНАЯ
              <br />
              СТОРОНА
            </h2>
            <p className="mt-4 text-white/70 text-sm md:text-base max-w-[240px]">
              Соевый соус 10 г — для суши-баров и доставок роллов
            </p>
          </div>
        </a>

        {/* LIGHT SIDE */}
        <a
          href="#light"
          className="split-side group bg-[#f2e8d5] min-h-[50svh] md:min-h-0"
          data-cursor="СВЕТЛАЯ"
          aria-label="Светлая сторона — мёд и варенье"
        >
          <img src="/img/honey-drip.jpg" alt="Стик натурального мёда" className="split-img blend-multiply opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f2e8d5] via-transparent to-[#f2e8d5]/30" />
          <div className="absolute right-6 md:right-10 bottom-6 md:bottom-28 text-right">
            <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.3em] text-[#c81e3a] mb-3">
              Light side · HoReCa + Retail
            </p>
            <h2 className="font-display text-[17vw] md:text-[9vw] leading-[0.82] text-[#22264b]">
              СВЕТЛАЯ
              <br />
              СТОРОНА
            </h2>
            <p className="mt-4 text-[#22264b]/70 text-sm md:text-base max-w-[260px] ml-auto">
              Мёд и варенье в стиках — для кофеен, отелей и микс-боксов
            </p>
          </div>
        </a>
      </div>

      {/* center brand, inverts over both halves */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center blend-diff">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4">Экосистема порционных вкусов</p>
        <h1 className="font-display text-[21vw] md:text-[13vw] leading-[0.8] text-center">ПОРЦИЯ</h1>
        <p className="mt-4 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
          Умная порция · Идеальный вкус · Ноль отходов
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 blend-diff flex flex-col items-center gap-2">
        <div className="vline" />
        <span className="text-[10px] uppercase tracking-[0.3em]">листай</span>
      </div>
    </section>
  )
}
