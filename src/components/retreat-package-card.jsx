import { motion } from 'framer-motion'
import GoldRule from './GoldRule.jsx'

/**
 * Premium retreat package card. Two visual tiers:
 *
 *   featured=true  → gold-tinted glass, animated shimmer border, ribbon badge,
 *                    filled-gold CTA. Used to anchor the higher-tier (VIP) option
 *                    as the psychological default.
 *   featured=false → neutral dark glass, outlined-gold CTA. Used for the
 *                    secondary tier so the price-anchor still pulls toward VIP.
 *
 * Both tiers share identical layout so package comparison is frictionless.
 * CTA opens Stripe checkout in a new tab so the landing page stays trusted.
 */
export default function RetreatPackageCard({
  featured = false,
  badge,
  eyebrow,
  title,
  emphasis,
  description,
  price,
  spotsLine,
  positioning,
  features,
  ctaLabel,
  ctaHref,
}) {
  const containerStyle = featured
    ? {
        background:
          'linear-gradient(180deg, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.04) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }
    : {
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.10)',
      }

  const ctaClass = featured
    ? 'block w-full text-center text-sm tracking-[0.15em] uppercase px-8 py-4 bg-gold text-bg hover:bg-gold-light transition-colors duration-200'
    : 'block w-full text-center text-sm tracking-[0.15em] uppercase px-8 py-4 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200'

  const ctaShadow = featured
    ? '0 0 40px rgba(201,169,110,0.45)'
    : '0 0 30px rgba(201,169,110,0.3)'

  return (
    <motion.div
      className="relative h-full"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div
        className="relative h-full p-8 md:p-10 rounded-sm overflow-hidden flex flex-col"
        style={containerStyle}
      >
        {featured && (
          <>
            {/* Animated gold shimmer border anchors VIP as default choice */}
            <div
              className="absolute inset-0 rounded-sm pointer-events-none gold-shimmer-border"
              style={{ border: '1px solid rgba(201,169,110,0.45)' }}
            />
            {badge && (
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold text-bg text-[10px] tracking-[0.2em] uppercase font-medium">
                {badge}
              </div>
            )}
          </>
        )}

        <p
          className={`text-xs tracking-[0.2em] uppercase mb-3 ${
            featured ? 'text-gold' : 'text-muted'
          }`}
        >
          {eyebrow}
        </p>

        <h3 className="font-heading text-3xl md:text-4xl font-light text-tx mb-4 leading-tight">
          {title} <em className="italic text-gold">{emphasis}</em>
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-7 italic">
          {description}
        </p>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-heading text-5xl md:text-6xl text-tx leading-none">
            {price}
          </span>
          <span className="text-muted text-xs tracking-[0.15em] uppercase">
            USD
          </span>
        </div>
        <p className="text-muted text-xs tracking-[0.05em] mb-6">{spotsLine}</p>

        <GoldRule className="mb-6" center={false} />

        <p className="text-tx text-sm leading-relaxed mb-6">{positioning}</p>

        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-sm text-tx/85 leading-snug"
            >
              <span className="text-gold mt-[3px] text-xs">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass}
          whileHover={{ scale: 1.02, boxShadow: ctaShadow }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaLabel}
        </motion.a>
        <p className="text-muted text-[11px] text-center mt-3 tracking-[0.05em]">
          Secure checkout via Stripe
        </p>
      </div>
    </motion.div>
  )
}
