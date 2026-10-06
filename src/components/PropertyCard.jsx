import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../App'
import { formatPrice } from '../data/properties'

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function HeartIcon({ filled }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  )
}

/** Reusable property card — used in carousels, grids and detail pages. */
export default function PropertyCard({ property, featured = false }) {
  const { has, toggle } = useFavorites()
  const fav = has(property.id)

  return (
    <article className={`prop-card ${featured ? 'prop-card-featured' : ''}`}>
      <Link to={`/properties/${property.id}`} className="prop-media" aria-label={property.name}>
        <img className="prop-img" src={property.image} alt={property.name} loading="lazy" />
        <span className="prop-type-chip">{property.type}</span>
      </Link>
      <button
        className={`fav-btn ${fav ? 'active' : ''}`}
        onClick={() => toggle(property.id)}
        aria-label={fav ? `Remove ${property.name} from favorites` : `Save ${property.name} to favorites`}
        aria-pressed={fav}
      >
        <HeartIcon filled={fav} />
      </button>
      <div className="prop-body">
        <h3 className="prop-name"><Link to={`/properties/${property.id}`}>{property.name}</Link></h3>
        <p className="prop-loc"><PinIcon /> {property.location}</p>
        <div className="prop-foot">
          <span className="prop-price">{formatPrice(property.price)}</span>
          <span className="prop-specs">{property.beds} bd · {property.baths} ba · {property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </article>
  )
}
