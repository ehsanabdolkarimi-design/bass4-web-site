import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to Horizon Properties">
      <div className="hero-bg" aria-hidden="true">
        <img src="/images/hero.jpg" alt="" fetchpriority="high" />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <Reveal as="span" className="label-gold label-light">Luxury Real Estate</Reveal>
        <Reveal as="h1" delay={80}>
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </Reveal>
        <Reveal as="p" delay={180}>
          Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
        </Reveal>
        <Reveal className="hero-actions" delay={280}>
          <Link to="/properties" className="btn btn-gold">Explore Properties</Link>
          <Link to="/contact" className="btn btn-light-outline">Talk to an Advisor</Link>
        </Reveal>
      </div>
      <a className="hero-scroll-cue" href="#who-we-are" aria-label="Scroll to content">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14m-6-6 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
