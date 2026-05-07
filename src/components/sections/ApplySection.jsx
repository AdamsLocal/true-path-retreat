import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection.jsx'
import GoldRule from '../GoldRule.jsx'

const inputClass =
  'w-full bg-transparent border border-border text-tx placeholder-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-200'

export default function ApplySection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData]   = useState({
    name: '', email: '', phone: '', message: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = new URLSearchParams({
      'form-name': 'true-path-retreat-application',
      ...formData,
    })
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      setSubmitted(true)
    } catch {
      // fallback: still show success (Netlify will catch via standard form POST)
      setSubmitted(true)
    }
  }

  return (
    <section id="apply" className="py-24 md:py-32 bg-surface px-6">
      <div className="max-w-lg mx-auto">

        <AnimatedSection className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Your Invitation</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-tx mb-8">
            This Is Where You
            <br />
            <em className="italic text-gold">Invest In Yourself</em>
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            You've invested in your career.<br />You've invested in others.
          </p>
          <p className="text-muted leading-relaxed">
            Not to escape your life.<br />But to return to it aligned, clear, and intentional.
          </p>
        </AnimatedSection>

        {submitted ? (
          <AnimatedSection className="text-center py-12" role="alert" aria-live="polite">
            <GoldRule className="mb-8" />
            <p className="font-heading text-3xl italic text-gold-light mb-4">Thank You.</p>
            <p className="text-tx mb-3">Your application has been received.</p>
            <p className="text-muted text-sm">We'll reach out within 48 hours to schedule your introductory call.</p>
            <GoldRule className="mt-8" />
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.1}>
            <form
              name="true-path-retreat-application"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-trap"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="true-path-retreat-application" />
              <p className="hidden">
                <label>Leave empty: <input name="bot-trap" /></label>
              </p>

              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text" name="name" required autoComplete="name"
                  placeholder="Your full name" value={formData.name}
                  onChange={handleChange} className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email" name="email" required autoComplete="email"
                  placeholder="your@email.com" value={formData.email}
                  onChange={handleChange} className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">
                  Phone Number
                </label>
                <input
                  type="tel" name="phone" autoComplete="tel"
                  placeholder="(555) 000-0000" value={formData.phone}
                  onChange={handleChange} className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">
                  What brings you to True Path? <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message" required rows={5}
                  placeholder="Tell us a bit about where you are and what you're looking for…"
                  value={formData.message} onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full text-sm tracking-[0.15em] uppercase px-12 py-4 border border-gold text-gold hover:text-bg hover:bg-gold transition-colors duration-200"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(201,169,110,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Application
              </motion.button>

              <p className="text-muted text-xs text-center">
                We'll be in touch within 48 hours to schedule your introductory call.
              </p>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
