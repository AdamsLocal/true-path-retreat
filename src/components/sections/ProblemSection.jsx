import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Reality</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-10">
            You Know You're Meant For{' '}
            <em className="italic text-gold">More</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="space-y-5 mb-10 text-muted leading-relaxed">
          <p>From the outside, life looks solid.<br />You're building, providing, leading.</p>
          <p className="text-tx font-light">But internally… something feels off.</p>
          <p>
            There's a gap between who you are today<br />
            and who you know you're capable of becoming.
          </p>
          <p>
            You've outgrown old patterns.<br />
            You're questioning what's next.<br />
            And you're ready for something deeper than surface-level change.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GoldRule className="my-8" />
          <div className="space-y-1">
            <p className="text-muted">Not more noise.</p>
            <p className="text-muted">Not more pressure.</p>
            <p className="font-heading text-2xl md:text-3xl italic text-gold-light mt-5">
              Real clarity. Real alignment. Real direction.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
