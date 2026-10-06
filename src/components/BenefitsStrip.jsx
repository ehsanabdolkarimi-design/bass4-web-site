import React from 'react'
import { Icon } from './Icon'
import { benefits } from '../data/site'

/** Navy strip with gold line-icon benefits (below the hero). */
export default function BenefitsStrip() {
  return (
    <section className="benefits" aria-label="مزایای خرید از آتریا">
      <div className="container">
        <ul className="benefits-row">
          {benefits.map((b) => (
            <li key={b.title}>
              <span className="benefit-icon"><Icon name={b.icon} size={22} /></span>
              <div>
                <strong>{b.title}</strong>
                <span>{b.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
