import React, { useEffect, useMemo, useState } from 'react'
import { properties, propertyTypes, propertyLocations } from '../data/properties'

export const PRICE_RANGES = [
  { value: 'any', label: 'Any price' },
  { value: '0-2.5', label: 'Under $2.5M' },
  { value: '2.5-4', label: '$2.5M – $4M' },
  { value: '4-6', label: '$4M – $6M' },
  { value: '6-999', label: '$6M+' },
]

export const emptyFilters = { q: '', location: 'any', type: 'any', price: 'any', beds: 'any', baths: 'any', sort: 'featured' }

export function applyFilters(list, f) {
  let out = list.filter((p) => {
    if (f.q) {
      const q = f.q.toLowerCase()
      if (!(p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q))) return false
    }
    if (f.location !== 'any' && p.city !== f.location) return false
    if (f.type !== 'any' && p.type !== f.type) return false
    if (f.price !== 'any') {
      const [min, max] = f.price.split('-').map(Number)
      if (p.price < min * 1e6 || p.price >= max * 1e6) return false
    }
    if (f.beds !== 'any' && p.beds < Number(f.beds)) return false
    if (f.baths !== 'any' && p.baths < Number(f.baths)) return false
    return true
  })
  const sorters = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    'sqft-desc': (a, b) => b.sqft - a.sqft,
    featured: (a, b) => Number(b.featured) - Number(a.featured),
  }
  return out.sort(sorters[f.sort] || sorters.featured)
}

/** Search + filter bar for the Properties page. */
export default function PropertyFilters({ filters, onChange }) {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  return (
    <form className="filters" role="search" aria-label="Property filters" onSubmit={(e) => e.preventDefault()}>
      <div className="filter-field filter-search">
        <label htmlFor="f-search">Search</label>
        <input id="f-search" type="search" placeholder="Name, city or type…" value={filters.q} onChange={set('q')} />
      </div>
      <div className="filter-field">
        <label htmlFor="f-location">Location</label>
        <select id="f-location" value={filters.location} onChange={set('location')}>
          <option value="any">All locations</option>
          {propertyLocations.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="f-type">Type</label>
        <select id="f-type" value={filters.type} onChange={set('type')}>
          <option value="any">All types</option>
          {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="f-price">Price range</label>
        <select id="f-price" value={filters.price} onChange={set('price')}>
          {PRICE_RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="f-beds">Beds</label>
        <select id="f-beds" value={filters.beds} onChange={set('beds')}>
          <option value="any">Any</option>
          {[3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}+</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="f-baths">Baths</label>
        <select id="f-baths" value={filters.baths} onChange={set('baths')}>
          <option value="any">Any</option>
          {[2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="f-sort">Sort by</label>
        <select id="f-sort" value={filters.sort} onChange={set('sort')}>
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="sqft-desc">Size: largest</option>
        </select>
      </div>
    </form>
  )
}
