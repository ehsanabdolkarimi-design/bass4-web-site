import React, { useRef, useState, useEffect } from 'react'
import { SectionHeading } from './Section'
import ProductCard from './ProductCard'
import Icon from './Icon'
import { useStore } from '../context/StoreContext'
import { products } from '../data/products'

/** Horizontal featured-products carousel with drag, arrows, keyboard & snap. */
export default function ProductCarousel({ items = products.filter((p) => p.featured), label = 'محصولات منتخب' }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    // RTL: content scrolls toward negative values
    setCanNext(Math.abs(el.scrollLeft) < el.scrollWidth - el.clientWidth - 8)
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

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.product-card')
    const step = (card ? card.offsetWidth : 280) + 20
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') scrollByCard(-1)
    if (e.key === 'ArrowRight') scrollByCard(1)
  }

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

  if (!items.length) return null

  return (
    <section className="section section-products" aria-label={label}>
      <div className="container">
        <div className="carousel-head">
          <SectionHeading label="آتریا الکترونیک" title={label} align="start" />
          <div className="carousel-nav">
            <button className="carousel-arrow" onClick={() => scrollByCard(1)} disabled={!canPrev} aria-label="محصولات قبلی">
              <Icon name="chevronRight" size={18} />
            </button>
            <button className="carousel-arrow" onClick={() => scrollByCard(-1)} disabled={!canNext} aria-label="محصولات بعدی">
              <Icon name="chevronLeft" size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div
          ref={trackRef}
          className="carousel-track"
          role="region"
          aria-label={label}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
