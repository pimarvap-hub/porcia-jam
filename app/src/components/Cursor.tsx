import { useEffect, useRef, useState } from 'react'

/** White difference-blend cursor: inverts over dark & light universes. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [big, setBig] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    let x = -100
    let y = -100
    let tx = x
    let ty = y
    let raf = 0
    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const t = (e.target as HTMLElement).closest('[data-cursor]')
      if (t) {
        setBig(true)
        setLabel((t as HTMLElement).dataset.cursor || '')
      } else {
        setBig(false)
      }
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate(${x - 8}px, ${y - 8}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="cursor-dot" data-big={big}>
      <span>{label}</span>
    </div>
  )
}
