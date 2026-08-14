const links = [
  { href: '#dark', label: 'Тёмная' },
  { href: '#light', label: 'Светлая' },
  { href: '#price', label: 'Прайс' },
  { href: '#mix', label: 'Микс-бокс' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Nav() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 blend-diff">
      <nav className="flex items-center gap-5 md:gap-8 border border-white/60 rounded-full px-5 md:px-8 py-2.5 backdrop-blur-sm">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-[0.18em]" data-cursor>
          ПОРЦИЯ
        </a>
        <div className="hidden md:flex items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.14em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity" data-cursor>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contacts" className="md:hidden text-[12px] font-semibold uppercase tracking-[0.14em]">
          Меню ↓
        </a>
      </nav>
    </header>
  )
}
