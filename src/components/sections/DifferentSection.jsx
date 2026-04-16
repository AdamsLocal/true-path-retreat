import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

const items = [
  'Practical mindset and neuroscience-based tools',
  'Meditation and breathwork (beginner-friendly, fully guided)',
  'Real conversations and brotherhood',
  'Physical experiences that wake you back up',
]

export default function DifferentSection() {
  return (
    <section className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Difference</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-12">
            What Makes This <em className="italic text-gold">Different</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted leading-relaxed mb-8">This experience integrates:</p>
          <ul className="text-left space-y-5 mb-12">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-gold/60 font-light mt-0.5">-</span>
                <span className="text-tx">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GoldRule className="mb-8" />
          <p className="text-muted text-sm mb-3">All grounded in a simple truth:</p>
          <p className="font-heading text-2xl md:text-3xl italic text-gold-light">
            Alignment drives performance and growth.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
