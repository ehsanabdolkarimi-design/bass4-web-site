import React, { useState } from 'react'
import Reveal from '../components/Reveal'

const cards = [
  { title: 'Call Us', line: '(555) 246-7890', sub: 'Mon–Sat, 9:00–18:00', href: 'tel:+15552467890', icon: '☎' },
  { title: 'Email Us', line: 'hello@horizonproperties.com', sub: 'We reply within one business day', href: 'mailto:hello@horizonproperties.com', icon: '✉' },
  { title: 'Visit Us', line: '1200 Congress Avenue, Suite 400', sub: 'Austin, TX 78701', href: '#', icon: '⌖' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="page-hero" aria-label="Contact">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">Contact</span></nav>
          <h1>Get in Touch</h1>
          <p>Tell us what you're looking for — an advisor will respond within one business day.</p>
        </div>
      </section>

      <section className="section section-contact" aria-label="Contact form and details">
        <div className="container contact-grid">
          <div>
            <div className="contact-cards">
              {cards.map((c, i) => (
                <Reveal as="a" className="contact-card" href={c.href} key={c.title} delay={i * 60}>
                  <span className="contact-icon" aria-hidden="true">{c.icon}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.line}</p>
                    <small>{c.sub}</small>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="contact-map" delay={150}>
              <img src="/images/pool.jpg" alt="Horizon Properties headquarters area at dusk" loading="lazy" />
            </Reveal>
          </div>

          <Reveal className="contact-form-wrap" delay={100}>
            {sent ? (
              <div className="success-box" role="status">
                <span className="success-icon" aria-hidden="true">✓</span>
                <h3>Message sent</h3>
                <p>Thank you — one of our advisors will be in touch shortly.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send another message</button>
              </div>
            ) : (
              <>
                <span className="label-gold">Contact Form</span>
                <h2>Send Us a Message</h2>
                <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="field"><label htmlFor="c-name">Full name</label><input id="c-name" required placeholder="Jane Doe" /></div>
                  <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" required placeholder="jane@email.com" /></div>
                  <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" placeholder="(555) 000-0000" /></div>
                  <div className="field"><label htmlFor="c-interest">I'm interested in</label>
                    <select id="c-interest">
                      <option>Buying a property</option>
                      <option>Selling a property</option>
                      <option>Investment advisory</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field field-full"><label htmlFor="c-msg">Message</label><textarea id="c-msg" rows="5" required placeholder="Tell us about your goals…" /></div>
                  <button type="submit" className="btn btn-primary btn-block">Send Message →</button>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
