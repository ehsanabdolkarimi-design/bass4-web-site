import React from 'react'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { services } from '../data/team'

export default function Services() {
  return (
    <>
      <section className="page-hero" aria-label="Services">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">Services</span></nav>
          <h1>Our Services</h1>
          <p>Everything a serious buyer or seller needs — from first valuation to final signature.</p>
        </div>
      </section>

      <section className="section section-services" aria-label="Service list">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal as="article" className="service-row" key={s.title} delay={i * 60}>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-why" aria-label="How we work">
        <div className="container why-grid">
          <Reveal className="why-copy">
            <span className="label-gold">How We Work</span>
            <h2>A Calm, Considered Process</h2>
            <div className="why-points">
              {[
                { title: 'Discover', text: 'We start with your brief — lifestyle, budget, horizon.' },
                { title: 'Curate', text: 'You see a short, hand-picked selection. Never a firehose.' },
                { title: 'Negotiate', text: 'Data-led, discreet and always on your side of the table.' },
                { title: 'Close', text: 'We coordinate inspections, legal and logistics to the last detail.' },
              ].map((p) => (
                <div className="point" key={p.title}>
                  <span className="point-dot" aria-hidden="true" />
                  <div><h3>{p.title}</h3><p>{p.text}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="why-media" delay={120}>
            <img src="/images/hero-2.jpg" alt="Glass residence at blue hour" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
