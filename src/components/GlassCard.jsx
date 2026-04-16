import { motion } from 'framer-motion'

/**
 * Reusable glassmorphism card.
 * variant: 'dark' | 'gold'
 * - dark: rgba(255,255,255,0.04) bg, rgba(255,255,255,0.08) border
 * - gold: rgba(201,169,110,0.06) bg, rgba(201,169,110,0.15) border
 * Both: backdrop-filter blur(20px), smooth hover lift
 */
export default function GlassCard({ children, variant = 'dark', className = '', hover = true }) {
  const base = {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  }

  const styles = {
    dark: {
      ...base,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
    },
    gold: {
      ...base,
      background: 'rgba(201,169,110,0.06)',
      border: '1px solid rgba(201,169,110,0.15)',
    },
  }

  return (
    <motion.div
      style={styles[variant]}
      className={`rounded-sm ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
    >
      {children}
    </motion.div>
  )
}
