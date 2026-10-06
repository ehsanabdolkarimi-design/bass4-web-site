import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import BenefitsStrip from '../components/BenefitsStrip'
import CategoryTabs from '../components/CategoryTabs'
import OnyxSection from '../components/OnyxSection'
import WhyAtrya from '../components/WhyAtrya'
import ArticlesSection from '../components/ArticlesSection'
import HoursSection from '../components/HoursSection'
import { SectionHeading } from '../components/Section'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import Seo, { orgJsonLd } from '../components/Seo'
import { products } from '../data/products'

function CategoriesAndProducts() {
  const [tab, setTab] = useState('all')
  const list = (tab === 'all' ? products : products.filter((p) => p.category === tab)).slice(0, 8)

  return (
    <section className="section section-catalog" aria-label="محصولات">
      <div className="container">
        <SectionHeading label="آتریا الکترونیک" title="محصولات منتخب" />
        <CategoryTabs active={tab} onChange={setTab} />
        <div className="product-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 4) * 60}><ProductCard product={p} /></Reveal>
          ))}
        </div>
        <Reveal className="grid-more">
          <Link to="/shop" className="btn btn-primary">مشاهده همه محصولات</Link>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo jsonLd={[orgJsonLd()]} />
      <HeroBanner />
      <BenefitsStrip />
      <CategoriesAndProducts />
      <OnyxSection />
      <WhyAtrya />
      <ArticlesSection />
      <HoursSection />
    </>
  )
}
