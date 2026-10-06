import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Gallery from '../components/Gallery'
import PropertyCard from '../components/PropertyCard'
import { getProperty, properties, formatPrice } from '../data/properties'
import { getAgent } from '../data/team'
import { useFavorites } from '../App'

function BedIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg> }
function BathIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5H2" /><path d="M18 3l3 3" /></svg> }
function AreaIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z" /><path d="M8 8v8h8" /></svg> }

function ScheduleModal({ property, agent, onClose }) {
  const [sent, setSent] = useState(false)
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Schedule a viewing" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        {sent ? (
          <div className="success-box" role="status">
            <span className="success-icon" aria-hidden="true">✓</span>
            <h3>Viewing requested</h3>
            <p>Thank you — {agent.name} will contact you shortly to confirm a time for {property.name}.</p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <span className="label-gold">Schedule a Viewing</span>
            <h3>{property.name}</h3>
            <form
              className="form-grid"
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              <div className="field"><label htmlFor="sv-name">Full name</label><input id="sv-name" required placeholder="Jane Doe" /></div>
              <div className="field"><label htmlFor="sv-email">Email</label><input id="sv-email" type="email" required placeholder="jane@email.com" /></div>
              <div className="field"><label htmlFor="sv-phone">Phone</label><input id="sv-phone" type="tel" placeholder="(555) 000-0000" /></div>
              <div className="field"><label htmlFor="sv-date">Preferred date</label><input id="sv-date" type="date" required /></div>
              <div className="field field-full"><label htmlFor="sv-note">Message</label><textarea id="sv-note" rows="3" placeholder={`I'd like to tour ${property.name}…`} /></div>
              <button type="submit" className="btn btn-primary btn-block">Request Viewing</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getProperty(id)
  const { has, toggle } = useFavorites()
  const [showSchedule, setShowSchedule] = useState(false)

  if (!property) {
    return (
      <section className="section page-hero"><div className="container">
        <h1>Property not found</h1>
        <Link to="/properties" className="btn btn-outline" style={{ marginTop: 24 }}>← Back to Properties</Link>
      </div></section>
    )
  }

  const agent = getAgent(property.agent)
  const fav = has(property.id)
  const similar = properties.filter((p) => p.id !== id).slice(0, 3)

  return (
    <>
      <section className="page-hero page-hero-compact" aria-label={property.name}>
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span aria-hidden="true">/</span> <Link to="/properties">Properties</Link> <span aria-hidden="true">/</span> <span aria-current="page">{property.name}</span>
          </nav>
          <div className="detail-top">
            <div>
              <h1>{property.name}</h1>
              <p className="detail-loc">{property.location}</p>
            </div>
            <div className="detail-price">
              <strong>{formatPrice(property.price)}</strong>
              <button className={`fav-btn fav-btn-lg ${fav ? 'active' : ''}`} onClick={() => toggle(id)} aria-pressed={fav} aria-label={fav ? 'Remove from favorites' : 'Save to favorites'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-section">
        <div className="container">
          <Reveal><Gallery images={property.gallery} alt={property.name} /></Reveal>

          <div className="specs" aria-label="Key specifications">
            <div className="spec"><BedIcon /><div><strong>{property.beds}</strong><span>Bedrooms</span></div></div>
            <div className="spec"><BathIcon /><div><strong>{property.baths}</strong><span>Bathrooms</span></div></div>
            <div className="spec"><AreaIcon /><div><strong>{property.sqft.toLocaleString()}</strong><span>Square Feet</span></div></div>
            <div className="spec"><AreaIcon /><div><strong>{property.type}</strong><span>Property Type</span></div></div>
          </div>

          <div className="detail-cols">
            <div className="detail-main">
              <Reveal as="article">
                <h2>About this property</h2>
                <p>{property.description}</p>
              </Reveal>
              <Reveal as="article">
                <h2>Key features</h2>
                <ul className="features-list">
                  {property.features.map((f) => <li key={f}><span className="check" aria-hidden="true">✓</span>{f}</li>)}
                </ul>
              </Reveal>
              <Reveal as="article">
                <h2>Amenities</h2>
                <div className="amenities">
                  {property.amenities.map((a) => <span key={a} className="amenity">{a}</span>)}
                </div>
              </Reveal>
            </div>

            <aside className="detail-side">
              <Reveal className="agent-card">
                <img src={agent.photo} alt={`Portrait of ${agent.name}`} />
                <div>
                  <h3>{agent.name}</h3>
                  <p className="label-gold">{agent.role}</p>
                  <a href={`tel:${agent.phone.replace(/[^\d+]/g, '')}`}>{agent.phone}</a><br />
                  <a href={`mailto:${agent.email}`}>{agent.email}</a>
                </div>
              </Reveal>
              <Reveal className="agent-actions" delay={100}>
                <button className="btn btn-primary btn-block" onClick={() => setShowSchedule(true)}>Schedule a Viewing</button>
                <a className="btn btn-outline btn-block" href={`mailto:${agent.email}?subject=${encodeURIComponent('Inquiry about ' + property.name)}`}>Contact Agent</a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-similar" aria-label="Similar properties">
        <div className="container">
          <h2 className="similar-title">You may also like</h2>
          <div className="results-grid grid-3">
            {similar.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
      </section>

      <div className="detail-cta-mobile">
        <span className="prop-price">{formatPrice(property.price)}</span>
        <button className="btn btn-primary" onClick={() => setShowSchedule(true)}>Schedule Viewing</button>
      </div>

      {showSchedule && <ScheduleModal property={property} agent={agent} onClose={() => setShowSchedule(false)} />}
    </>
  )
}
