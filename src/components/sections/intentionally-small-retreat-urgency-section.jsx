import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

/**
 * Closing urgency section. Reframes the 8-man cap as an intentional design
 * decision (trust + depth) rather than scarcity marketing. Placed AFTER the
 * package selection as the final psychological push before the apply form.
 */
export default function IntentionallySmallRetreatUrgencySection() {
  return (
    <section id="urgency" className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
            By Design
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-12 leading-tight">
            This Retreat Is
            <br />
            <em className="italic text-gold">Intentionally Small</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="font-heading text-2xl md:text-3xl text-tx mb-8">
            Only <em className="italic text-gold">8 men</em>. Total.
          </p>

          <p className="text-muted leading-relaxed mb-10">
            Not because of scarcity marketing.
            <br />
            Because this work requires trust, honesty, and real depth.
          </p>

          <GoldRule className="mb-10" />

          <div className="space-y-3 text-muted">
            <p>This is not a seminar.</p>
            <p>It is not a mastermind.</p>
            <p>It is not another weekend escape.</p>
          </div>

          <p className="font-heading text-2xl md:text-3xl italic text-gold-light mt-10 mb-10">
            It is a turning point.
          </p>

          <GoldRule className="mb-8" />

          <p className="text-muted text-sm tracking-[0.05em]">
            When the rooms are full, registration closes.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
