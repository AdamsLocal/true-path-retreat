import AnimatedSection from '../AnimatedSection.jsx'
import GlassCard from '../GlassCard.jsx'
import GoldRule from '../GoldRule.jsx'

const BASE = import.meta.env.BASE_URL

const amenities = [
  'Comfortable shared and private room options',
  'Expansive outdoor space',
  'Pool, sauna, and cold plunge',
  'Space to unplug, reset, and think clearly',
]

/* Featured first, then 4 grid tiles */
const gallery = [
  {
    src: `${BASE}images/true-path-retreat-pool-outdoor-space-texas-hill-country.webp`,
    alt: 'Outdoor pool and shaded lounge at True Path Retreat private property, Marble Falls Texas',
  },
  {
    src: `${BASE}images/true-path-retreat-barrel-sauna-recovery-mens-retreat-texas.webp`,
    alt: 'Cedar barrel sauna for recovery and reflection, True Path Retreat Texas Hill Country',
  },
  {
    src: `${BASE}images/true-path-retreat-stone-path-evening-lights-private-grounds.webp`,
    alt: 'Stone pathway lit by string lights at dusk on the private 10-acre grounds, Marble Falls Texas',
  },
  {
    src: `${BASE}images/true-path-retreat-natural-swimming-hole-texas-hill-country.webp`,
    alt: 'Natural swimming hole nature excursion at True Path Retreat, Texas Hill Country',
  },
  {
    src: `${BASE}images/true-path-retreat-peacocks-private-property-marble-falls-texas.webp`,
    alt: 'Peacocks roaming the private 10-acre retreat property, Marble Falls Texas',
  },
]

export default function EnvironmentSection() {
  return (
    <section id="environment" className="py-24 md:py-32 bg-surface px-6">

      {/* Text content — narrow */}
      <div className="max-w-2xl mx-auto text-center mb-12">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Setting</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-10">
            The <em className="italic text-gold">Environment</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GlassCard variant="gold" className="px-8 py-6 mb-10 text-center" hover={false}>
            <p className="font-heading text-xl italic text-gold-light mb-2">
              Private. 4,000 sq ft. 10 Acres.
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted">Marble Falls, Texas</p>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-muted leading-relaxed mb-8">
            You'll stay in a private, high-end property designed for both connection and
            restoration - with expansive outdoor space in the heart of the Texas Hill Country.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="grid sm:grid-cols-2 gap-3 text-left">
          {amenities.map((item) => (
            <GlassCard key={item} variant="dark" className="px-5 py-4" hover={false}>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5 text-xs">✦</span>
                <span className="text-muted text-sm leading-relaxed">{item}</span>
              </div>
            </GlassCard>
          ))}
        </AnimatedSection>

      </div>

      {/* Photo gallery — wider than body text */}
      <AnimatedSection delay={0.3} className="max-w-5xl mx-auto mb-12">
        {/* Featured: pool — wide banner */}
        <div className="overflow-hidden mb-2" style={{ aspectRatio: '21/9' }}>
          <img
            src={gallery[0].src}
            alt={gallery[0].alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* 4-tile grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {gallery.slice(1).map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden"
              style={{ aspectRatio: '1' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-xs tracking-[0.15em] uppercase text-center mt-3" style={{ color: 'rgba(240,237,232,0.3)' }}>
          The property · Marble Falls, Texas
        </p>
      </AnimatedSection>

      {/* Closing tagline */}
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection delay={0.35}>
          <GoldRule className="mb-8" />
          <p className="font-heading text-xl md:text-2xl italic text-tx">
            This isn't just where you stay.
            <br />
            <span className="text-gold">It's part of the work.</span>
          </p>
        </AnimatedSection>
      </div>

    </section>
  )
}
