import { motion } from 'framer-motion'
import { useShouldAnimate } from '../../hooks/use-framer-motion-desktop-animation-enabled.js'
import AnimatedSection from '../AnimatedSection.jsx'
import GlassCard from '../GlassCard.jsx'
import GoldRule from '../GoldRule.jsx'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const items = [
  '5 days / 4 nights guided retreat experience',
  'Pre-retreat intention-setting call',
  'Daily workshops, breathwork & meditation',
  'Nature excursions in the Texas Hill Country',
  'Ziplining experience',
  'Structured group work & personal reflection time',
  'Post-retreat integration session',
  'All meals, lodging & local transportation',
]

export default function IncludedSection() {
  const shouldAnimate = useShouldAnimate()
  return (
    <section id="included" className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-3xl mx-auto text-center">

        <AnimatedSection>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Everything's Handled</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-12">
            The Experience <em className="italic text-gold">Includes</em>
          </h2>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 gap-3 text-left mb-12"
          variants={shouldAnimate ? container : {}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item) => (
            <motion.div key={item} variants={shouldAnimate ? cardVariant : {}}>
              <GlassCard variant="dark" className="px-5 py-4" hover={false}>
                <div className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-xs">✦</span>
                  <span className="text-muted text-sm leading-relaxed">{item}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Zipline group photo — visual proof of the adventure experience */}
        <AnimatedSection delay={0.15} className="mb-12">
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/true-path-retreat-group-ziplining-experience-mens-retreat-texas.webp`}
              alt="Group of men in harnesses ready for ziplining at True Path Retreat, Marble Falls Texas"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="text-xs tracking-[0.15em] uppercase text-center mt-3" style={{ color: 'rgba(240,237,232,0.3)' }}>
            From previous retreats
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GoldRule className="mb-8" />
          <p className="font-heading text-xl md:text-2xl italic text-gold-light">
            Everything is handled - so you can focus on showing up.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
