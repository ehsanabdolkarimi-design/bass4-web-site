import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { stats } from '../data/team'

const values = [
  { title: 'Integrity First', text: 'Straight answers and transparent advice — even when it costs us a deal.' },
  { title: 'Design Obsessed', text: 'We represent homes worth remembering, and present them that way.' },
  { title: 'Client for Life', text: 'Most of our business comes from referrals and repeat clients.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero" aria-label="About us">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">About Us</span></nav>
          <h1>Who We Are</h1>
          <p>A boutique agency built on architecture, market intelligence and long-term relationships.</p>
        </div>
      </section>

      <section className="section section-about" aria-label="Our story">
        <div className="container about-grid">
          <Reveal className="about-copy">
            <span className="label-gold">Our Story</span>
            <h2>Built on Trust, Guided by Taste</h2>
            <p>
              Horizon Properties was founded in 2001 with a simple conviction: buying or selling an
              exceptional home should feel as considered as the home itself. We keep our roster of
              listings deliberately small and our standards deliberately high.
            </p>
            <p className="about-sub">
              Today our advisors represent clients across Texas, California, Arizona, Nevada and
              Florida — from lakefront villas to skyline penthouses.
            </p>
            <Link to="/team" className="btn btn-outline">Meet the Team <span aria-hidden="true">→</span></Link>
          </Reveal>
          <Reveal className="about-media" delay={120}>
            <div className="about-main"><img src="/images/about-main.jpg" alt="Modern luxury home with pool at dusk" loading="lazy" /></div>
            <div className="about-side"><img src="/images/about-side.jpg" alt="Residence terrace in the evening" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      <section className="section section-values" aria-label="Our values">
        <div className="container">
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div className="services-grid">
            {values.map((v, i) => (
              <Reveal as="article" className="service-row" key={v.title} delay={i * 70}>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{v.title}</h3><p>{v.text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="stats-row stats-bordered" delay={150}>
            {stats.map((s) => (
              <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
