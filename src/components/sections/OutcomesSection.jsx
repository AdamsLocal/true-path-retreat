import AnimatedSection from '../AnimatedSection.jsx'

const outcomes = [
  'Clear direction on your next chapter',
  'A deeper understanding of yourself',
  'Tools to manage stress and stay grounded',
  'Stronger communication and relationships',
  'A renewed sense of energy and purpose',
  'A brotherhood that extends beyond the retreat',
]

export default function OutcomesSection() {
  return (
    <section className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Outcome</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-12">
            You'll Leave <em className="italic text-gold">With</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ul className="text-left space-y-5">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-gold/60 font-light mt-0.5">-</span>
                <span className="text-tx">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

      </div>
    </section>
  )
}
