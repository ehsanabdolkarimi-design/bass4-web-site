import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function KeyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.7 12.3 21 2m-4 1 3 3m-5 1 3 3" />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <Reveal className="cta-band">
          <span className="cta-icon-circle"><KeyIcon /></span>
          <div className="cta-text">
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <Link to="/contact" className="btn btn-primary cta-btn">
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
