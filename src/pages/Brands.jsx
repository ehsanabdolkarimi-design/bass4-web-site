import React from 'react'
import { Breadcrumbs } from '../components/Section'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { products } from '../data/products'
import { LOGO_WHITE } from '../data/site'

/** برندها — ONYX is the product brand sold by ATRYA Electronic. */
export default function Brands() {
  const onyx = products.filter((p) => p.brand === 'ONYX')
  return (
    <>
      <Seo title="برندها" description="برند ONYX — محصولات پاور سوئیچینگ، آداپتور و LED عرضه‌شده در آتریا الکترونیک" />
      <section className="page-hero" aria-label="برندها">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'برندها' }]} />
          <h1>برندها</h1>
          <p>برندهایی که آتریا الکترونیک با ضمانت اصالت کالا عرضه می‌کند.</p>
        </div>
      </section>

      <section className="section section-onyx" aria-label="برند ONYX">
        <div className="container">
          <div className="onyx-head">
            <Reveal>
              <img className="onyx-logo" src={LOGO_WHITE} alt="لوگوی ONYX" width="90" height="90" loading="lazy" />
              <h2>محصولات برند ONYX</h2>
              <p>
                ONYX برند محصولی آتریا الکترونیک است؛ شامل پاورهای سوئیچینگ صنعتی، اسلیم، فن‌دار و ضد آب،
                آداپتورها و ال‌ای‌دی‌های تابلو. آتریا الکترونیک فروشگاه این برند است.
              </p>
            </Reveal>
          </div>
          <div className="product-grid">
            {onyx.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 6) * 50}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
