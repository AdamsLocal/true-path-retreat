import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GoldRule from '../GoldRule.jsx'

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
  const ref = useRef(null)

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
      {/* Vignette — darkens edges for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.82) 100%)' }}
        aria-hidden="true"
      />
      {/* Light beam sweep — pure CSS gold shimmer drifting across the frame */}
      <div className="hero-light-beam" aria-hidden="true" />
      {/* Compass logo — large decorative background mark. Shadow variant
          carries a baked-in soft halo for added cinematic weight. */}
      <motion.img
        src={`${import.meta.env.BASE_URL}images/true-path-compass-logo-shadow.webp`}
        alt=""
        aria-hidden="true"
        width={700}
        height={700}
        className="absolute pointer-events-none select-none"
        style={{ opacity: 0.24, width: 'clamp(420px, 72vw, 700px)', height: 'auto' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{ y: yParallax }}
        className="relative max-w-3xl mx-auto md:z-10"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeIn}
            className="text-xs tracking-[0.25em] uppercase text-muted mb-8"
          >
            Marble Falls, Texas &nbsp;·&nbsp; August 19–23, 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-light leading-none text-tx mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            True Path
            <br />
            <em className="italic">Retreat</em>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="font-heading text-xl md:text-2xl font-light italic text-gold-light mb-3"
          >
            Find Your True North. Become Your True Self.
          </motion.p>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-muted mb-10"
          >
            A Men's Alignment Retreat
          </motion.p>

          {/* Gold rule */}
          <motion.div variants={fadeIn}>
            <GoldRule className="mb-10" />
          </motion.div>

          {/* Badge */}
          <motion.p
            variants={fadeIn}
            className="text-sm text-muted mb-10 tracking-wide"
          >
            Limited to 8 Men
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="#apply"
            className="inline-block text-sm tracking-[0.15em] uppercase px-12 py-4 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200"
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(201,169,110,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Apply for Your Spot
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
