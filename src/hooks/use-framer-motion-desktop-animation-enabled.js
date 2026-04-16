import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Returns true only when:
 *  - user has NOT enabled prefers-reduced-motion, AND
 *  - device is a pointer:fine (mouse/trackpad) device — i.e. NOT a touch/mobile device
 *
 * Use this instead of useReducedMotion() anywhere Framer Motion variants or
 * whileHover/whileTap props are applied, so animations are skipped on mobile.
 */
export function useShouldAnimate() {
  const prefersReduced = useReducedMotion()

  // Initialize synchronously so Framer Motion's `initial` prop is evaluated
  // with the correct value on the very first render (not after a useEffect flush).
  // Without this, desktop users get shouldAnimate=false on first render, which
  // causes `initial="hidden"` to be consumed with empty variants — animations
  // never fire even though shouldAnimate later becomes true.
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: fine)').matches
      : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isDesktop && !prefersReduced
}
