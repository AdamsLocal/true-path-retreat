import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

const facilitators = [
  {
    photo: `${import.meta.env.BASE_URL}images/brent-mccann-co-facilitator-true-path-retreat.webp`,
    name: 'Brent McCann',
    role: 'Co-Facilitator',
    bio: [
      'Brent brings a grounded, real-world approach to personal transformation shaped by 15+ years in corporate leadership and human resources.',
      'With certifications in HR (PHR, SHRM-CP), neuroscience of change, and somatic breathwork, Brent specializes in helping men understand how they operate - mentally, emotionally, and behaviorally - so they can lead with clarity and consistency.',
      'His personal journey, including overcoming addiction and rebuilding his life from the inside out, informs the way he shows up: honest, practical, and deeply committed to helping men create lasting change.',
    ],
  },
  {
    photo: `${import.meta.env.BASE_URL}images/zachary-lafever.webp`,
    name: 'Zachary LaFever',
    role: 'Co-Facilitator',
    bio: [
      'Zachary LaFever is a professional certified life coach, intuitive strategist, and transformation facilitator with over 30 years of experience across business, technology, and entrepreneurship.',
      'Through his practice, he helps individuals align mind, spirit, and body to operate from their authentic core.',
      'With training in transpersonal psychology, psychosynthesis, trauma-informed therapy, and integrated wellness, Zachary blends strategic thinking with deep inner work to help men move from awareness into action.',
    ],
  },
]

export default function FacilitatorsSection() {
  return (
    <section id="facilitators" className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-5xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Who You'll Work With</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx">
            Your <em className="italic text-gold">Facilitators</em>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {facilitators.map((f, i) => (
            <AnimatedSection key={f.name} delay={i * 0.15}>
              <img
              src={f.photo}
              alt={`${f.name} — ${f.role}, True Path Retreat`}
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 rounded-full object-cover object-top mb-6"
              style={{ border: '1px solid rgba(201,169,110,0.25)' }}
            />
              <h3 className="font-heading text-3xl font-light text-tx mb-1">{f.name}</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-gold mb-6">{f.role}</p>
              <GoldRule center={false} className="mb-6" />
              <div className="space-y-4">
                {f.bio.map((para, j) => (
                  <p key={j} className="text-muted text-sm leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-14">
          <GoldRule className="mb-6" />
          <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto">
            Their combined approach is grounded, direct, and results-oriented - focused on helping
            men create real alignment across identity, career, and relationships.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
