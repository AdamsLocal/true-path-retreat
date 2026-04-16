import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

const bullets = [
  'You move with intention',
  'You lead without force',
  'You make decisions without second-guessing',
]

export default function SolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Path Forward</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-10">
            The Shift Isn't{' '}
            <em className="italic text-gold">In Doing More</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="space-y-5 text-muted leading-relaxed mb-8">
          <p>It's in creating space to realign.</p>
          <p>
            The grounded, clear, confident version of you isn't gone.<br />
            It's just buried under responsibility, expectation, and pace.
          </p>
          <p>
            You don't need to burn your life down.<br />
            You need to reconnect to it - on your terms.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-tx mb-8">When that happens, everything changes:</p>
          <ul className="inline-block text-left space-y-4 mb-12">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="text-gold/60 font-light">-</span>
                <span className="text-tx">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GoldRule className="mb-8" />
          <p className="font-heading text-3xl md:text-4xl italic text-gold-light">
            That's the True Path.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
