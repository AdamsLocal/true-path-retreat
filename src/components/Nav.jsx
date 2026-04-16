import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useShouldAnimate } from '../hooks/use-framer-motion-desktop-animation-enabled.js'

const navLinks = [
  { label: 'Experience',   href: '#experience' },
  { label: 'Facilitators', href: '#facilitators' },
  { label: 'Investment',   href: '#investment' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldAnimate           = useShouldAnimate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const glassStyle = {
    background: scrolled ? 'rgba(12,10,9,0.72)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: '1px solid transparent',
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200]"
      style={{
        ...glassStyle,
        /* promote nav to its own GPU layer — prevents will-change siblings
           (glow orbs) from breaking position:fixed on mobile WebKit */
        transform: 'translateZ(0)',
        transition: 'background 300ms ease, backdrop-filter 300ms ease, -webkit-backdrop-filter 300ms ease',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-base font-light tracking-[0.2em] text-gold uppercase"
        >
          True Path
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.12em] uppercase text-muted hover:text-tx transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#apply"
            className="text-xs tracking-[0.15em] uppercase px-7 py-3 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200"
            whileHover={shouldAnimate ? { scale: 1.03, boxShadow: '0 0 30px rgba(201,169,110,0.3)' } : {}}
            whileTap={shouldAnimate ? { scale: 0.97 } : {}}
          >
            Apply Now
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px bg-muted transition-all duration-200"
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border"
          style={{ background: 'rgba(22,20,18,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm tracking-[0.12em] uppercase text-muted hover:text-tx transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={closeMenu}
              className="text-xs tracking-[0.15em] uppercase px-7 py-3 border border-gold text-gold text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
