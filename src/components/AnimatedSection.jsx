/**
 * Static section wrapper — previously animated with Framer Motion scroll-reveal.
 * Simplified to plain div; motion reserved for intentional Hero/CTA interactions.
 */
export default function AnimatedSection({ children, className = '', delay = 0, as = 'div' }) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
