import { useEffect, useRef } from 'react'

/** Adds data-inview="true" when the element enters the viewport (once). */
export function useReveal<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).dataset.inview = 'true'
            io.unobserve(e.target)
          }
        })
      },
      { threshold },
    )
    el.querySelectorAll('[data-rv]').forEach((c) => io.observe(c))
    if (el.dataset.rv !== undefined) io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

export function RevealRoot({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
