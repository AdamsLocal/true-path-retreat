import GoldRule from './GoldRule.jsx'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border px-6 py-14 text-center">
      <a
        href="#hero"
        className="font-heading text-xl font-light tracking-[0.2em] text-gold uppercase inline-block mb-3"
      >
        True Path
      </a>
      <p className="text-xs tracking-[0.15em] uppercase text-muted mb-2">
        Men's Alignment Retreat
      </p>
      <p className="text-xs text-muted mb-8">
        Marble Falls, Texas &nbsp;·&nbsp; August 19–23, 2026
      </p>
      <GoldRule className="mb-8" />
      <p className="text-xs text-muted">
        Questions?&nbsp;
        <a
          href="mailto:info@truepathretreat.com"
          className="text-gold hover:text-gold-light transition-colors"
        >
          info@truepathretreat.com
        </a>
      </p>
      <p className="text-xs text-muted/40 mt-6">
        © 2026 True Path Retreat. All rights reserved.
      </p>
    </footer>
  )
}
