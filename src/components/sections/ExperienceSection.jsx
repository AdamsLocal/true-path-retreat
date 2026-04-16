import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-3xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-4">
            A 4-Day All-Inclusive{' '}
            <em className="italic text-gold">Reset in the Texas Hill Country</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GoldRule className="my-8" />
          <p className="text-muted leading-relaxed mb-8">
            Set in the natural beauty of Marble Falls, Texas, this immersive experience blends
            structured workshops, physical experiences, and intentional downtime to help you
            reset from the inside out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {['This is not a bootcamp.', 'This is not a spiritual escape.'].map((text) => {
            const [prefix, bold, suffix] = text.split(/(not)/i)
            return (
              <div
                key={text}
                className="px-6 py-3 text-sm text-muted"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {prefix}
                <strong className="text-tx">not</strong>
                {suffix}
              </div>
            )
          })}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-heading text-xl md:text-2xl italic text-tx leading-relaxed">
            It's a grounded, guided experience designed for men who want clarity, direction,
            and connection - without losing who they are.
          </p>
        </AnimatedSection>

        {/* Visual proof — photos from previous retreats */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="grid sm:grid-cols-2 gap-2 mb-3">
            <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/true-path-retreat-breathwork-meditation-session-mens-retreat-texas.webp`}
                alt="Men in guided breathwork and meditation session at True Path Retreat, Marble Falls Texas"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/true-path-retreat-mens-brotherhood-group-dinner-marble-falls.webp`}
                alt="Brotherhood group dinner — men laughing and connecting at True Path Retreat, Texas"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <p className="text-xs tracking-[0.15em] uppercase text-center" style={{ color: 'rgba(240,237,232,0.3)' }}>
            From previous retreats
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
