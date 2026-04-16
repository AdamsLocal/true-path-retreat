/**
 * Decorative gold horizontal divider line.
 * center: true  → mx-auto (centered)
 * center: false → left-aligned
 */
export default function GoldRule({ center = true, className = '' }) {
  return (
    <div
      className={`h-px w-16 bg-gold/40 ${center ? 'mx-auto' : ''} ${className}`}
    />
  )
}
