import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import CategoryTabs from '../components/CategoryTabs'
import ProductFilters, { applyFilters, emptyFilters } from '../components/ProductFilters'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { products, categoryLabel } from '../data/products'
import { toFa } from '../utils/format'

export default function Shop() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState(() => ({ ...emptyFilters, q: params.get('q') || '' }))
  const [tab, setTab] = useState('all')
  const [showFull, setShowFull] = useState(false)

  const results = useMemo(
    () => applyFilters(products.filter((p) => tab === 'all' || p.category === tab), filters),
    [filters, tab],
  )
  const isDefault = JSON.stringify(filters) === JSON.stringify({ ...emptyFilters, q: params.get('q') || '' })

  return (
    <>
      <Seo
        title="فروشگاه"
        description="خرید پاور ۱۲ ولت و ۲۴ ولت صنعتی، اسلیم، فن‌دار و ضد آب، آداپتور و محصولات LED برند ONYX از آتریا الکترونیک."
      />
      <section className="page-hero" aria-label="فروشگاه">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'فروشگاه' }]} />
          <h1>فروشگاه آتریا الکترونیک</h1>
          <p>پاورهای سوئیچینگ صنعتی، اسلیم، فن‌دار و ضد آب، آداپتور و محصولات LED برند ONYX</p>
        </div>
      </section>

      <section className="section section-results" aria-label="نتایج محصولات">
        <div className="container">
          <CategoryTabs active={tab} onChange={setTab} />
          {showFull ? (
            <ProductFilters filters={filters} onChange={setFilters} />
          ) : (
            <ProductFilters compact filters={filters} onChange={setFilters} />
          )}
          <button className="link-reset toggle-full" onClick={() => setShowFull(!showFull)}>
            {showFull ? 'فیلترهای کمتر −' : 'فیلترهای بیشتر +'}
          </button>

          <div className="results-head">
            <p role="status">
              {toFa(results.length)} {results.length === 1 ? 'محصول' : 'محصول'} یافت شد
              {tab !== 'all' ? ` در دسته «${categoryLabel(tab)}»` : ''}
              {filters.q ? ` برای «${filters.q}»` : ''}
            </p>
            {!isDefault && (
              <button className="link-reset" onClick={() => { setFilters(emptyFilters); setTab('all') }}>حذف فیلترها</button>
            )}
          </div>

          {results.length ? (
            <div className="product-grid">
              {results.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i, 6) * 50}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>محصولی مطابق فیلترهای شما یافت نشد.</p>
              <button className="btn btn-primary" onClick={() => { setFilters(emptyFilters); setTab('all') }}>حذف فیلترها</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
