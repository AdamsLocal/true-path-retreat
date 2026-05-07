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

      {/* AdamsLocal credit — restrained, cinematic. Two-tier opacity
          hierarchy: prefix sits behind a veil, the brand cluster (skull +
          mark + wordmark) reads slightly brighter so the eye lands there.
          flex-wrap with justify-center keeps it centered without orphan
          breaks; items-center holds skull, mark, and caps on one optical
          line. Hover lifts every layer in sync. */}
      <a
        href="https://adamslocal.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Designed and built by AdamsLocal LLC"
        className="group mt-5 inline-flex flex-wrap items-center justify-center gap-x-1.5 text-[11px] tracking-[0.05em] leading-none"
      >
        <span className="text-muted/35 group-hover:text-muted/60 transition-colors duration-200">
          Designed &amp; Built by
        </span>
        <span
          aria-hidden="true"
          className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        >
          ☠️
        </span>
        <img
          src={`${import.meta.env.BASE_URL}images/adamslocal-icon.png`}
          alt=""
          width={14}
          height={14}
          loading="lazy"
          decoding="async"
          className="h-3.5 w-3.5 opacity-75 group-hover:opacity-100 transition-opacity duration-200"
        />
        <span className="text-muted/70 group-hover:text-muted transition-colors duration-200">
          AdamsLocal LLC
        </span>
      </a>
    </footer>
  )
}
