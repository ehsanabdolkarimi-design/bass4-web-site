import React from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { businessHours, PHONE, PHONE_INTL } from '../data/site'

/** «کنار شما هستیم» — business hours + contact CTA. */
export default function HoursSection() {
  return (
    <section className="section section-hours" aria-label="ساعات کاری و تماس">
      <div className="container">
        <Reveal className="hours-band">
          <div className="hours-text">
            <span className="section-label">ساعات کاری</span>
            <h2>کنار شما هستیم</h2>
            <ul className="hours-list">
              {businessHours.map((h) => (
                <li key={h.days}>
                  <Icon name="clock" size={16} />
                  <strong>{h.days}:</strong>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hours-cta">
            <p>برای مشاوره تخصصی و ثبت سفارش با ما تماس بگیرید.</p>
            <a href={`tel:${PHONE_INTL}`} className="btn btn-gold" dir="ltr">
              <Icon name="phone" size={16} /> {PHONE}
            </a>
            <Link to="/contact" className="btn btn-outline-light">تماس با ما</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
