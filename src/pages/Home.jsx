import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FeaturedCarousel from '../components/FeaturedCarousel'
import CTASection from '../components/CTASection'
import TeamCard from '../components/TeamCard'
import { services, team, whyPoints, stats } from '../data/team'

function WhoWeAre() {
  return (
    <section className="section section-about" id="who-we-are" aria-label="Who we are">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <span className="label-gold">About Us</span>
          <h2>Who We Are</h2>
          <p>
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <p className="about-sub">
            From lakefront villas to city penthouses, our advisors guide each client with market
            intelligence, discretion and a genuine love of great architecture.
          </p>
          <Link to="/about" className="btn btn-outline">Learn More <span aria-hidden="true">→</span></Link>
        </Reveal>
        <Reveal className="about-media" delay={120}>
          <div className="about-main">
            <img src="/images/about-main.jpg" alt="Modern luxury home with pool at dusk" loading="lazy" />
          </div>
          <div className="about-side">
            <img src="/images/about-side.jpg" alt="Residence pool terrace in the evening" loading="lazy" />
          </div>
          <Link to="/properties" className="about-circle-btn" aria-label="Browse our properties">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section section-services" aria-label="Our services">
      <div className="container">
        <SectionHeading label="Our Services" title="What We Do" />
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal as="article" className="service-row" key={s.title} delay={i * 60}>
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <Link to="/services" className="service-arrow" aria-label={`Learn about ${s.title}`}>→</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section className="section section-why" aria-label="Why choose Horizon">
      <div className="container why-grid">
        <Reveal className="why-copy">
          <span className="label-gold">Why Horizon</span>
          <h2>The Horizon Standard</h2>
          <div className="why-points">
            {whyPoints.map((p) => (
              <div className="point" key={p.title}>
                <span className="point-dot" aria-hidden="true" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="why-media" delay={120}>
          <img src="/images/hero-2.jpg" alt="Glass residence at blue hour" loading="lazy" />
        </Reveal>
      </div>
      <div className="container">
        <Reveal className="stats-row" delay={200}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="section section-team" aria-label="Meet the team">
      <div className="container">
        <SectionHeading label="Our Team" title="Meet the Advisors" />
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}><TeamCard member={m} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FeaturedCarousel />
      <Services />
      <WhyChoose />
      <Team />
      <CTASection />
    </>
  )
}
