'use client'

import './globals.css'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const subject = encodeURIComponent(`Inquiry from ${form.name} — ${form.type || 'General'}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`)
    window.location.href = `mailto:reisha.reynolds@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSubmitted(true)
      setSending(false)
    }, 800)
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <div className="header-inner">
            <h1 className="site-name">Reisha <em>Reynolds</em></h1>
            <p className="site-tagline">Actress &nbsp;·&nbsp; Cultural Strategist &nbsp;·&nbsp; Fractional Operations Director</p>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="bio-section">
            <p className="section-label">About</p>
            <p className="bio-lede">
              Reisha Reynolds works at the intersection of storytelling, cultural strategy,
              and operational leadership — bringing rare precision to mission-driven work.
            </p>
            <div className="bio-body">
              <p>With a corporate foundation built across startups and established organizations — growing from <strong>Team Lead to Department Director</strong> — she brings operational fluency to the cultural and creative sectors that most creatives simply don't have. She has led customer-facing teams with measurable impact: building performance frameworks, managing SLAs, and coaching talent at scale. That infrastructure instinct doesn't leave when she walks into a creative room. It's what makes her an unusually effective fractional partner for mission-driven organizations who need someone who can both vision and execute.</p>
              <p>On screen, Reisha has appeared in <strong>Amazon Studios' <em>I'm a Virgo</em></strong>, the <strong>Netflix</strong> blockbuster <strong><em>Carry On</em></strong>, and independent projects including <em>The Dissonance</em> — a film she also wrote. Her work as an actress informs everything: the precision of character, the architecture of narrative, the discipline of showing up prepared.</p>
              <p>Off screen, Reisha is the <strong>fifth-generation steward</strong> of a 120-year-old family farm in the Gulf Coast region of Texas — cultivating crops with deep historical and cultural relevance to African American life in the South. The farm is both a living archive and an active site, home to agrotourism experiences that connect visitors to land, food, and Black agricultural heritage.</p>
              <p>She is also the founder and visionary behind <strong>KIN</strong>, a nonprofit organization dedicated to the multidisciplinary preservation of Black cultural assets — through documentary work, oral history, land stewardship, and the excavation of family and community legacy. KIN operates at the intersection of where Reisha has always lived: between the archive and the living story.</p>
              <p>Reisha Reynolds is available for <strong>fractional engagements</strong>, commissioned creative and documentary work, and grant-funded projects. She brings the full weight of her career — corporate, creative, cultural — to every collaboration.</p>
            </div>
          </section>

          <div className="divider" />

          <section className="contact-section" id="contact">
            <p className="section-label">Get in Touch</p>
            <p className="contact-intro">Available for fractional engagements, commissioned work, and grant-funded projects. Send a note and she'll be in touch.</p>
            {submitted ? (
              <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--accent)' }}>Thank you — your message is on its way.</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="type">Nature of Inquiry</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option value="Fractional Engagement">Fractional Engagement</option>
                    <option value="Commissioned Creative Work">Commissioned Creative Work</option>
                    <option value="Grant-Funded Project">Grant-Funded Project</option>
                    <option value="Documentary / Content Production">Documentary / Content Production</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Tell me about your project or need..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-btn" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
              </form>
            )}
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-copy">© {new Date().getFullYear()} Reisha Reynolds</span>
            <span className="footer-copy">Available for select engagements</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
