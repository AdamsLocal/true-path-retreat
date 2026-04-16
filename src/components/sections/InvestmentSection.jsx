import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useShouldAnimate } from '../../hooks/use-framer-motion-desktop-animation-enabled.js'
import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

/** Count-down hook: animates from `from` to `to` when inView becomes true */
function useCountDown(from, to, duration = 1500, inView = false) {
  const [count, setCount] = useState(from)
  const shouldAnimate = useShouldAnimate()

  useEffect(() => {
    if (!inView) return
    if (!shouldAnimate) { setCount(to); return }

    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(from - eased * (from - to)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, from, to, duration, shouldAnimate])

  return count
}

export default function InvestmentSection() {
  const shouldAnimate = useShouldAnimate()
  const [inView, setInView] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const displayValue = useCountDown(10000, 3497, 1400, inView)

  return (
    <section id="investment" className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-md mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Investment</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-10">
            What It <em className="italic text-gold">Costs</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Gold glass investment card with shimmer border */}
          <motion.div
            ref={cardRef}
            className="relative mb-8 px-10 py-12 rounded-sm overflow-hidden"
            style={{
              background: 'rgba(201,169,110,0.06)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            whileHover={shouldAnimate ? { y: -4, transition: { duration: 0.25 } } : {}}
          >
            {/* Animated shimmer border overlay */}
            <div
              className="absolute inset-0 rounded-sm pointer-events-none gold-shimmer-border"
              style={{ border: '1px solid rgba(201,169,110,0.3)' }}
            />

            <p className="text-xs tracking-[0.15em] uppercase text-muted mb-4">Starting at</p>
            <p
              className="font-heading leading-none text-tx mb-2"
              style={{ fontSize: 'clamp(3.5rem, 12vw, 5rem)' }}
            >
              ${displayValue.toLocaleString()}
            </p>
            <p className="text-sm text-muted mb-6">USD</p>
            <GoldRule className="my-6" />
            <p className="text-muted text-sm mb-1">Payment plans available</p>
            <p className="text-muted text-sm">Limited spots. Application required.</p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href="#apply"
            className="inline-block text-sm tracking-[0.15em] uppercase px-12 py-4 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200"
            whileHover={shouldAnimate ? { scale: 1.03, boxShadow: '0 0 30px rgba(201,169,110,0.3)' } : {}}
            whileTap={shouldAnimate ? { scale: 0.97 } : {}}
          >
            Apply for Your Spot
          </motion.a>
        </AnimatedSection>

      </div>
    </section>
  )
}
