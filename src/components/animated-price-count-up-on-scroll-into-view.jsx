import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedPrice — interpolates a numeric price from startAmount to amount
 * the first time it scrolls into view. Designed for premium feel:
 *
 *   - eases out with cubic decel (no spring, no bounce, no gimmick)
 *   - tweens in either direction (startAmount > amount counts down,
 *     startAmount < amount counts up); default startAmount is 0
 *   - runs once per mount (IntersectionObserver disconnects after firing)
 *   - respects prefers-reduced-motion (renders final value, no animation)
 *   - aria-label always carries the final price so screen readers and
 *     crawlers see the real number even mid-tween
 *
 * Props:
 *   amount       number — final value the tween settles on
 *   startAmount  number — starting value, default 0
 *   duration     ms      — total tween length, default 1800
 *   prefix       string  — currency glyph, default "$"
 *   className    string  — passed through to the rendered <span>
 */

const formatter = new Intl.NumberFormat('en-US')

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const getReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function AnimatedPrice({
  amount,
  startAmount = 0,
  duration = 1800,
  prefix = '$',
  className = '',
}) {
  const [reduced] = useState(getReducedMotion)
  const [value, setValue] = useState(() =>
    getReducedMotion() ? amount : startAmount
  )
  const elementRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (reduced) {
      setValue(amount)
      return
    }
    const node = elementRef.current
    if (!node) return

    let frame
    let startTime = 0
    const delta = amount - startAmount

    const tick = (now) => {
      if (!startTime) startTime = now
      const t = Math.min(1, (now - startTime) / duration)
      setValue(Math.round(startAmount + easeOutCubic(t) * delta))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      frame = requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      start()
      return () => frame && cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start()
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [amount, startAmount, duration, reduced])

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${prefix}${formatter.format(amount)}`}
    >
      {prefix}
      {formatter.format(value)}
    </span>
  )
}
