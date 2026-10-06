import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { SectionHeading } from './Section'
import Icon from './Icon'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import { LOGO_WHITE } from '../data/site'

/** Premium navy ONYX brand section. */
export default function OnyxSection() {
  const featured = products.filter((p) => p.brand === 'ONYX' && p.featured).slice(0, 4)

  return (
    <section className="section section-onyx" aria-label="محصولات برند ONYX">
      <div className="container">
        <div className="onyx-head">
          <Reveal>
            <img className="onyx-logo" src={LOGO_WHITE} alt="لوگوی ONYX" width="90" height="90" loading="lazy" />
            <h2>محصولات برند ONYX</h2>
            <p>
              برند ONYX زنجیره‌ای از پاورهای سوئیچینگ، آداپتورها و ال‌ای‌دی‌های حرفه‌ای است که آتریا الکترونیک
              به‌عنوان فروشگاه متخصص، با ضمانت اصالت کالا عرضه می‌کند.
            </p>
            <Link to="/shop?q=ONYX" className="btn btn-gold">مشاهده همه محصولات ONYX</Link>
          </Reveal>
        </div>
        <div className="onyx-grid">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}><ProductCard product={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
