import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GoldRule from '../GoldRule.jsx'
import { useShouldAnimate } from '../../hooks/use-framer-motion-desktop-animation-enabled.js'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.12, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const ref           = useRef(null)
  const shouldAnimate = useShouldAnimate()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center text-center px-6 pt-10 md:pt-20 overflow-hidden relative bg-[#0c0a09]"
    >
      {/* 1. Dark gradient base */}
      <div className="hero-bg" aria-hidden="true" />
      {/* 2. Cinematic glow layers — breathe and wander above the base gradient, behind the logo */}
      <div className="hero-glow-primary"   aria-hidden="true" />
      <div className="hero-glow-secondary" aria-hidden="true" />
      {/* Background video — place hero.mp4 / hero.webm in public/ to activate */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        preload="none"
      >
        <source src={`${import.meta.env.BASE_URL}hero.webm`} type="video/webm" />
        <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
      </video>
      {/* Scanline noise overlay */}
      <div className="hero-noise" aria-hidden="true" />
      {/* Compass logo — large decorative background mark */}
      <motion.img
        src={`${import.meta.env.BASE_URL}images/true-path-compass-logo.webp`}
        alt=""
        aria-hidden="true"
        width={700}
        height={700}
        className="absolute pointer-events-none select-none"
        style={{ opacity: 0.17, width: 'clamp(420px, 72vw, 700px)', height: 'auto' }}
        animate={shouldAnimate ? { rotate: 360 } : {}}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={shouldAnimate ? { y: yParallax } : {}}
        className="relative max-w-3xl mx-auto md:z-10"
      >
        <motion.div
          variants={shouldAnimate ? stagger : {}}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={shouldAnimate ? fadeIn : {}}
            className="text-xs tracking-[0.25em] uppercase text-muted mb-8"
          >
            Marble Falls, Texas &nbsp;·&nbsp; August 19–23, 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={shouldAnimate ? fadeUp : {}}
            className="font-heading font-light leading-none text-tx mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            True Path
            <br />
            <em className="italic">Retreat</em>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={shouldAnimate ? fadeUp : {}}
            className="font-heading text-xl md:text-2xl font-light italic text-gold-light mb-3"
          >
            Find Your True North. Become Your True Self.
          </motion.p>

          {/* Sub */}
          <motion.p
            variants={shouldAnimate ? fadeUp : {}}
            className="text-xs tracking-[0.2em] uppercase text-muted mb-10"
          >
            A Men's Alignment Retreat
          </motion.p>

          {/* Gold rule */}
          <motion.div variants={shouldAnimate ? fadeIn : {}}>
            <GoldRule className="mb-10" />
          </motion.div>

          {/* Badge */}
          <motion.p
            variants={shouldAnimate ? fadeIn : {}}
            className="text-sm text-muted mb-10 tracking-wide"
          >
            Limited to 8 Men
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={shouldAnimate ? fadeUp : {}}
            href="#apply"
            className="inline-block text-sm tracking-[0.15em] uppercase px-12 py-4 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200"
            whileHover={shouldAnimate ? {
              scale: 1.03,
              boxShadow: '0 0 30px rgba(201,169,110,0.3)',
            } : {}}
            whileTap={shouldAnimate ? { scale: 0.97 } : {}}
          >
            Apply for Your Spot
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
