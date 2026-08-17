import { useState } from 'react'
import { RevealRoot } from '../hooks/useReveal'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: 'honey',
    volume: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'opened'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const mailtoUrl = `mailto:erkin12@mail.ru?subject=Заказ%20ПОРЦИЯ%20от%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Имя: ${formData.name}\nПочта: ${formData.email}\nТелефон: ${formData.phone}\nКомпания: ${formData.company}\nПродукт: ${formData.productType}\nОбъём: ${formData.volume}\n\nСообщение:\n${formData.message}`
    )}`
    const mailtoLink = document.createElement('a')
    mailtoLink.href = mailtoUrl

    document.body.appendChild(mailtoLink)
    mailtoLink.click()
    mailtoLink.remove()
    setSubmitStatus('opened')
    setFormData({ name: '', email: '', phone: '', company: '', productType: 'honey', volume: '', message: '' })
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 noise overflow-hidden" id="form">
      <RevealRoot className="px-6 md:px-[6vw] max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10" data-rv>
          <span className="font-display text-2xl text-[#e8390f]">06</span>
          <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-white/50">Контакт · Заказ</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div data-rv>
            <h2 className="font-display leading-[0.84] text-[14vw] md:text-[7vw] mb-8">
              <span className="rv-line">
                <span>ДАВАЙТЕ</span>
              </span>
              <span className="rv-line">
                <span className="text-outline text-white">РАБОТАТЬ ВМЕСТЕ</span>
              </span>
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
              Подайте заявку — и мы обсудим лучший формат сотрудничества именно для вас.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📞', title: 'Телефон', value: '+7 701 531 58 72' },
                { icon: '✉️', title: 'Email', value: 'erkin12@mail.ru' },
                { icon: '📍', title: 'Локация', value: 'г. Алматы, ул. Толе би, 301' },
                { icon: '⏰', title: 'График', value: 'Пн–пт 9:00–18:00' },
              ].map((c, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.1em]">{c.title}</p>
                    <p className="font-display text-lg text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/15 rounded-2xl p-8 space-y-6"
            data-rv
            style={{ ['--scale' as string]: '0.96' }}
          >
            <div>
              <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                placeholder="Иван Петров"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                  placeholder="+7 701 XXX XX XX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                Компания / Заведение
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                placeholder="ООО Сушилка"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Интересует
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                >
                  <option value="honey" className="bg-[#0a0a0a]">Мёд в стиках</option>
                  <option value="jam" className="bg-[#0a0a0a]">Варенье (малина, клубника, смородина)</option>
                  <option value="sauce" className="bg-[#0a0a0a]">Соевый соус</option>
                  <option value="all" className="bg-[#0a0a0a]">Весь ассортимент</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                  Объём / Количество
                </label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all"
                  placeholder="Например, 1000 шт"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/70 mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e8390f] transition-all resize-none"
                placeholder="Поделитесь деталями вашего заказа..."
              />
            </div>

            {submitStatus === 'opened' && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm">
                ✓ Спасибо! Мы попытались открыть ваш почтовый клиент с готовой заявкой. Если этого не произошло, напишите нам напрямую на почту.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#e8390f] hover:bg-white text-white hover:text-[#e8390f] font-display text-lg tracking-[0.1em] py-4 rounded-lg transition-all"
              data-cursor
            >
              📤 ОТПРАВИТЬ ЗАЯВКУ
            </button>

            <p className="text-[11px] text-white/40 text-center">
              * Обязательные поля. Мы не передаём данные третьим лицам.
            </p>
          </form>
        </div>
      </RevealRoot>
    </section>
  )
}
