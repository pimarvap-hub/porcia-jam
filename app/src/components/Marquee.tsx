import React from 'react'

export default function Marquee({
  items,
  dir = 'left',
  speed = 42,
  className = '',
  itemClassName = '',
}: {
  items: string[]
  dir?: 'left' | 'right'
  speed?: number
  className?: string
  itemClassName?: string
}) {
  const row = (
    <>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span className={`font-display text-2xl md:text-4xl tracking-wide ${itemClassName}`}>{t}</span>
          <svg width="26" height="26" viewBox="0 0 26 26" className="mx-6 md:mx-10 shrink-0 opacity-80" aria-hidden>
            <path
              d="M13 1v24M1 13h24M4.2 4.2l17 17M21.8 4.2l-17 17"
              stroke="currentColor"
              strokeWidth="2.4"
            />
          </svg>
        </React.Fragment>
      ))}
    </>
  )
  return (
    <div className={`marquee py-4 md:py-5 ${className}`} data-dir={dir} aria-hidden>
      <div className="marquee-track" style={{ ['--mq-speed' as string]: `${speed}s` }}>
        {row}
        {row}
      </div>
    </div>
  )
}
