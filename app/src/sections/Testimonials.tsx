import { RevealRoot } from '../hooks/useReveal'

interface Testimonial {
  text: string
  author: string
  role: string
  emoji: string
}

const testimonials: Testimonial[] = [
  {
    text: 'Клиенты просят именно стики ПОРЦИЯ. Удобно, чисто, без отходов. Прибыль выше, чем с обычными соусами.',
    author: 'Альберт',
    role: 'Владелец суши-бара',
    emoji: '🍣',
  },
  {
    text: 'Для нашей доставки это спасение. Не протекает, не боится дороги, клиент доволен качеством.',
    author: 'Марина',
    role: 'Менеджер доставки роллов',
    emoji: '🚴',
  },
  {
    text: 'Мёд в стиках для завтраков — идеально. Гости в отеле видят премиум, никаких паутин на столе.',
    author: 'Дмитрий',
    role: 'Шеф-повар отеля',
    emoji: '☕',
  },
  {
    text: 'Варенье ПОРЦИЯ лежит на полке как драгоценность. Упаковка красивая, вкус натуральный — нарасхват!',
    author: 'Ирина',
    role: 'Владелица кофейни',
    emoji: '🌟',
  },
  {
    text: 'B2B-сотрудничество на понимание. Честная цена, надёжные поставки, техподдержка реагирует быстро.',
    author: 'Илья',
    role: 'Закупщик ресторана',
    emoji: '🤝',
  },
  {
    text: 'Клубничное варенье использую дома — натуральное, без консервантов. Дарю друзьям в подарок.',
    author: 'Сабина',
    role: 'Частный покупатель',
    emoji: '🍓',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#18181b] to-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#ff5d73]">05</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">Доверие · Результаты</span>
        </div>

        <h2 className="font-display leading-[0.84] text-[15vw] md:text-[8vw] mb-8">
          <span className="rv-line" data-rv>
            <span>РАССКАЗЫВАЮТ</span>
          </span>
          <span className="rv-line" data-rv>
            <span className="text-outline text-[#ff5d73]">ТЕ, КТО ИСПОЛЬЗУЕТ</span>
          </span>
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-[58ch] mb-16" data-rv>
          От владельцев сетей к домашним гурманам. Услышьте, почему люди выбирают ПОРЦИЯ для своих
          бизнесов и семей.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/8 hover:border-[#ff5d73]/50 transition-all duration-500"
              data-rv
              style={{ ['--scale' as string]: '0.96' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{t.emoji}</span>
              </div>

              <blockquote className="text-base md:text-lg leading-relaxed text-white/85 mb-6 italic">
                "{t.text}"
              </blockquote>

              <div className="pt-4 border-t border-white/10">
                <p className="font-display text-lg tracking-wide text-white">{t.author}</p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50 mt-1">
                  {t.role}
                </p>
              </div>

              <div className="absolute top-4 right-4 text-[#ff5d73]/20 text-3xl group-hover:text-[#ff5d73]/50 transition-colors">
                "
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#ff5d73]/10 to-[#f7a026]/10 border border-white/10" data-rv>
          <h3 className="font-display text-2xl md:text-3xl mb-3">🚀 Готовы присоединиться?</h3>
          <p className="text-white/70 text-base mb-6">
            Будь то небольшая кофейня или сеть ресторанов — у нас есть формат для вас. Начните с
            пробной партии уже сегодня.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-3 bg-[#ff5d73] text-white font-display text-lg tracking-[0.1em] px-8 py-3 rounded-lg hover:bg-white hover:text-[#ff5d73] transition-colors"
            data-cursor
          >
            Начать сотрудничество <span aria-hidden>→</span>
          </a>
        </div>
      </RevealRoot>
    </section>
  )
}
