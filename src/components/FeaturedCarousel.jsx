import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import PropertyCard from './PropertyCard'
import { properties } from '../data/properties'

function ArrowIcon({ dir = 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === 'left' ? 'scaleX(-1)' : 'none' }} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

/** Horizontal, snap-scrolling property carousel with drag, buttons and keyboard support. */
export default function FeaturedCarousel() {
  const trackRef = useRef(null)
  const featured = properties.filter((p) => p.featured)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  // rAF-based smooth scroll — deterministic in all browsers/iframes
  const animateTo = (target) => {
    const el = trackRef.current
    if (!el) return
    const from = el.scrollLeft
    const max = el.scrollWidth - el.clientWidth
    const to = Math.max(0, Math.min(target, max))
    const dur = 480
    const t0 = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1)
      el.scrollLeft = from + (to - from) * ease(p)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.prop-card')
    const step = card ? card.offsetWidth + 24 : 420
    animateTo(el.scrollLeft + dir * step)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') scrollByCard(1)
    if (e.key === 'ArrowLeft') scrollByCard(-1)
  }

  // Mouse drag-to-scroll
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false })
  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    drag.current = { down: true, startX: e.clientX, startLeft: trackRef.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e) => {
    if (!drag.current.down) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 4) drag.current.moved = true
    trackRef.current.scrollLeft = drag.current.startLeft - dx
  }
  const endDrag = () => (drag.current.down = false)
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <section className="section section-featured" aria-label="Featured properties">
      <div className="container">
        <div className="featured-head">
          <SectionHeading label="Featured" title="Featured Properties" align="left" />
          <div className="carousel-nav">
            <button className="carousel-arrow" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous properties">
              <ArrowIcon dir="left" />
            </button>
            <button className="carousel-arrow" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next properties">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div
          ref={trackRef}
          className="carousel-track"
          role="region"
          aria-label="Featured properties carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
