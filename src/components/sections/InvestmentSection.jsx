import AnimatedSection from '../AnimatedSection.jsx'
import RetreatPackageCard from '../retreat-package-card.jsx'

// Stripe checkout URLs — direct links bypass form friction for ready buyers.
// Both open in a new tab to keep this trusted page available behind them.
const STRIPE_VIP_URL = 'https://buy.stripe.com/7sY8wPalU6yZ2ph9MCgfu0F'
const STRIPE_FULL_URL = 'https://buy.stripe.com/9B6cN5alUcXn9RJgb0gfu0G'

const vipFeatures = [
  'Private Bedroom',
  'Pre-Retreat Group Connection + Intentions Call',
  'Airport ↔ Airbnb Transportation (Uber Included)',
  'Private 1:1 Breakthrough Session During Retreat',
  '1:1 Integration Call (~1 Week After Retreat)',
  '1:1 Momentum Call (~4 Weeks After Retreat)',
  'Group Breathwork Session After Retreat',
  'Claim Your Path Workbook',
  'All Meals Included',
  'Local Transportation Included',
  'Outdoor Adventures + Guided Experiences',
  'Private Luxury Airbnb Stay',
  'Brotherhood + Full Retreat Access',
]

const fullFeatures = [
  'Shared Bedroom',
  'Pre-Retreat Group Connection + Intentions Call',
  '1:1 Integration Call (30 Minutes)',
  'Group Breathwork Session After Retreat',
  'Claim Your Path Workbook',
  'All Meals Included',
  'Local Transportation Included',
  'Outdoor Adventures + Guided Experiences',
  'Private Luxury Airbnb Stay',
  'Brotherhood + Full Retreat Access',
]

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-24 md:py-32 bg-bg px-6 relative">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
            Choose Your Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-10 leading-tight">
            This Is Not a Vacation.
            <br />
            <em className="italic text-gold">It's a Reset.</em>
          </h2>
          <div className="max-w-2xl mx-auto space-y-5 text-muted leading-relaxed">
            <p>
              Five days away from noise, distraction, and the version of you that
              has been surviving instead of leading.
            </p>
            <p>
              In a private luxury Airbnb in Marble Falls, Texas, you'll experience
              deep reflection, real brotherhood, guided teachings, breathwork,
              meditation, outdoor challenge, and the kind of honest conversations
              most men avoid for years.
            </p>
            <p>
              Everything is handled for you — meals, local transportation,
              structure, support, and space to do the work.
            </p>
            <p className="font-heading italic text-tx text-xl md:text-2xl pt-2">
              All-inclusive, minus airfare.
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-gold pt-4">
              Only 8 Total Spots Available
            </p>
          </div>
        </AnimatedSection>

        {/* VIP first to anchor as the premium default; Full Experience as
            the more accessible alternative beside it. */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          <RetreatPackageCard
            featured
            badge="Best for Deeper Support"
            eyebrow="VIP — Private Room"
            title="Full"
            emphasis="Transformation"
            description="For the man who wants deeper support, private space, and personalized breakthrough work."
            price="$4,497"
            spotsLine="Only 4 VIP spots available"
            positioning="Your own bedroom. Direct coaching access. Continued momentum after you return home — because real transformation happens after the retreat ends."
            features={vipFeatures}
            ctaLabel="Reserve Your VIP Spot"
            ctaHref={STRIPE_VIP_URL}
          />
          <RetreatPackageCard
            eyebrow="Full Experience — Shared Room"
            title="Full"
            emphasis="Experience"
            description="For the man who wants the full retreat experience and brotherhood — with shared accommodations and full access."
            price="$3,497"
            spotsLine="Only 4 Full Experience spots available"
            positioning="You still do the work. You still get the breakthrough. You just do it shoulder-to-shoulder with other men walking the same path."
            features={fullFeatures}
            ctaLabel="Reserve Your Spot"
            ctaHref={STRIPE_FULL_URL}
          />
        </div>

        <AnimatedSection className="text-center mt-14">
          <p className="text-muted text-sm">
            Payment plans available. Questions before reserving?{' '}
            <a
              href="#apply"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Submit an application
            </a>{' '}
            and we'll reach out within 48 hours.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
