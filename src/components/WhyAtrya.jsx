import React from 'react'
import { SectionHeading } from './Section'
import Icon from './Icon'
import { whyAtrya } from '../data/site'
import Reveal from './Reveal'

/** «چرا آتریا الکترونیک؟» — benefits grid on light background. */
export default function WhyAtrya() {
  return (
    <section className="section section-why" aria-label="چرا آتریا الکترونیک">
      <div className="container">
        <SectionHeading label="مزیت‌های آتریا" title="چرا آتریا الکترونیک؟" />
        <div className="why-grid">
          {whyAtrya.map((w, i) => (
            <Reveal as="article" className="why-card" key={w.title} delay={i * 60}>
              <span className="why-icon"><Icon name={w.icon} size={24} /></span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
