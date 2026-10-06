import React, { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters, { applyFilters, emptyFilters } from '../components/PropertyFilters'
import CTASection from '../components/CTASection'
import { properties } from '../data/properties'

export default function Properties() {
  const [filters, setFilters] = useState(emptyFilters)
  const results = useMemo(() => applyFilters(properties, filters), [filters])

  return (
    <>
      <section className="page-hero" aria-label="Properties">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">Properties</span>
          </nav>
          <h1>Our Properties</h1>
          <p>Browse a curated collection of exceptional homes and investment opportunities.</p>
        </div>
      </section>

      <section className="section section-results" aria-label="Search results">
        <div className="container">
          <PropertyFilters filters={filters} onChange={setFilters} />
          <div className="results-head">
            <p role="status">
              {results.length} {results.length === 1 ? 'property' : 'properties'} found
            </p>
            {JSON.stringify(filters) !== JSON.stringify(emptyFilters) && (
              <button className="link-reset" onClick={() => setFilters(emptyFilters)}>Clear filters</button>
            )}
          </div>
          {results.length ? (
            <div className="results-grid">
              {results.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i, 5) * 60}><PropertyCard property={p} /></Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No properties match your search.</p>
              <button className="btn btn-outline" onClick={() => setFilters(emptyFilters)}>Reset filters</button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
