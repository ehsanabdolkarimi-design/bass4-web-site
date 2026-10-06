import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { useStore } from '../context/StoreContext'
import { products } from '../data/products'
import { toFa } from '../utils/format'

export default function Wishlist() {
  const { wishlist } = useStore()
  const items = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <>
      <Seo title="علاقه‌مندی‌ها" description="لیست علاقه‌مندی‌های شما در فروشگاه آتریا الکترونیک" />
      <section className="page-hero" aria-label="علاقه‌مندی‌ها">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'علاقه‌مندی‌ها' }]} />
          <h1>علاقه‌مندی‌ها</h1>
          <p>محصولاتی که برای خرید بعدی ذخیره کرده‌اید.</p>
        </div>
      </section>

      <section className="section" aria-label="لیست علاقه‌مندی‌ها">
        <div className="container">
          {items.length ? (
            <div className="product-grid">
              {items.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="empty-state">
              <p>لیست علاقه‌مندی‌های شما خالی است. با زدن آیکون ♥ روی هر محصول، آن را اینجا ذخیره کنید.</p>
              <Link to="/shop" className="btn btn-primary">مشاهده محصولات</Link>
            </div>
          )}
          {items.length > 0 && <p className="articles-note">{toFa(items.length)} محصول در لیست شما</p>}
        </div>
      </section>
    </>
  )
}
