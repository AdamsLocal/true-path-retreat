import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

const pillars = [
  {
    num: '01',
    title: 'Self',
    sub: 'Identity & Inner Alignment',
    body: 'Understand who you are beneath the roles, pressure, and expectations. Reconnect with your internal compass through guided reflection, meditation, and breathwork.',
  },
  {
    num: '02',
    title: 'Mission',
    sub: 'Purpose & Career',
    body: "Get clear on where you're going and why it matters. Align your work, energy, and decisions with a direction that actually feels right.",
  },
  {
    num: '03',
    title: 'Connection',
    sub: 'Relationships & Brotherhood',
    body: "Build real connection - with yourself and with other men. Experience what it's like to be supported, challenged, and understood without judgment.",
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
}

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-bg px-6">
      <div className="max-w-5xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">The Framework</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx">
            The 3 Pillars of <em className="italic text-gold">True Path</em>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ background: 'rgba(255,255,255,0.04)', transition: { duration: 0.2 } }}
              className="p-10 bg-bg transition-colors duration-200"
            >
              <p className="font-heading text-5xl font-light text-gold/20 mb-4">{p.num}</p>
              <h3 className="font-heading text-3xl font-light text-tx mb-1">{p.title}</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-muted mb-6">{p.sub}</p>
              <GoldRule center={false} className="mb-6" />
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
