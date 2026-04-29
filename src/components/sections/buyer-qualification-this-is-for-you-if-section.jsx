import AnimatedSection from '../AnimatedSection.jsx'
import GlassCard from '../GlassCard.jsx'

/**
 * Buyer qualification section. Surfaces the internal signals a man feels
 * before he books — letting him self-qualify into the retreat. Placed BEFORE
 * the package selection so by the time he sees pricing, he's already nodding.
 */
const qualifiers = [
  "You're successful on paper, but disconnected inside.",
  "You know you're capable of more, but something keeps pulling you backward.",
  "You're tired of overthinking and ready for clarity.",
  "You want real brotherhood — not surface-level networking.",
  "You're done talking about change and ready to actually make it happen.",
]

export default function BuyerQualificationSection() {
  return (
    <section id="qualification" className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-3xl mx-auto">

        <AnimatedSection className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
            Honest Assessment
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx leading-tight">
            This Is <em className="italic text-gold">For You</em> If
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {qualifiers.map((q) => (
            <GlassCard
              key={q}
              variant="dark"
              className="px-6 py-5 md:px-8 md:py-6"
              hover={false}
            >
              <div className="flex items-start gap-4">
                <span className="text-gold mt-[6px] text-[10px]">●</span>
                <p className="text-tx leading-relaxed">{q}</p>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  )
}
