import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import Icon from '../components/Icon'
import SmartImg from '../components/SmartImg'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { useStore } from '../context/StoreContext'
import { getProduct, getRelated, categoryLabel, products } from '../data/products'
import { faPrice, toFa } from '../utils/format'

function ProductGallery({ product }) {
  const images = [product.imageLarge || product.image, product.image].filter(
    (v, i, a) => a.indexOf(v) === i,
  )
  const [i, setI] = useState(0)
  return (
    <div className="gallery">
      <div className="gallery-main">
        <SmartImg key={i} src={images[i]} fallback={product.image} alt={product.name} width="600" height="600" />
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, n) => (
            <button
              key={src}
              className={`gallery-thumb ${n === i ? 'active' : ''}`}
              onClick={() => setI(n)}
              aria-label={`تصویر ${toFa(n + 1)}`}
              aria-pressed={n === i}
            >
              <SmartImg src={src} fallback={product.image} alt="" width="80" height="80" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Tabs({ product }) {
  const tabs = [
    { key: 'intro', label: 'معرفی محصول' },
    { key: 'specs', label: 'مشخصات فنی' },
    { key: 'apps', label: 'کاربردها' },
    { key: 'pros', label: 'مزایا' },
    { key: 'guide', label: 'راهنمای خرید' },
    { key: 'faq', label: 'سوالات متداول' },
  ]
  const [active, setActive] = useState('intro')
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="ptabs" aria-label="اطلاعات محصول">
      <div className="ptabs-nav" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === t.key}
            className={`ptab ${active === t.key ? 'active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="ptabs-body">
        {active === 'intro' && (
          <div>
            <p>{product.description}</p>
            <p>{product.short}</p>
          </div>
        )}
        {active === 'specs' && (
          <table className="spec-table">
            <tbody>
              {product.specs.map(([k, v]) => (
                <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
              ))}
              <tr><th scope="row">شناسه کالا (SKU)</th><td dir="ltr">{product.sku}</td></tr>
            </tbody>
          </table>
        )}
        {active === 'apps' && (
          <ul className="check-list">
            {product.applications.map((a) => <li key={a}><span className="check">✓</span>{a}</li>)}
          </ul>
        )}
        {active === 'pros' && (
          <ul className="check-list">
            {product.advantages.map((a) => <li key={a}><span className="check">✓</span>{a}</li>)}
          </ul>
        )}
        {active === 'guide' && (
          <div>
            <p>
              پیش از خرید، ولتاژ و جریان مصرفی تجهیزات خود را جمع بزنید و حدود ۲۰ تا ۳۰ درصد به آن
              حاشیه اطمینان اضافه کنید. اگر در محاسبه تردید دارید، کارشناسان آتریا الکترونیک
              از طریق شماره ۰۹۱۲۶۷۰۹۶۱۸ راهنمایی شما می‌کنند.
            </p>
            <p>برای مطالعه بیشتر، <Link to="/article/power-buying-guide">راهنمای کامل خرید پاور صنعتی</Link> را ببینید.</p>
          </div>
        )}
        {active === 'faq' && (
          <div className="faqs">
            {(product.faq || []).map(([q, a], n) => (
              <div className={`faq ${openFaq === n ? 'open' : ''}`} key={q}>
                <button className="faq-q" aria-expanded={openFaq === n} onClick={() => setOpenFaq(openFaq === n ? -1 : n)}>
                  {q}
                  <Icon name="chevronDown" size={16} />
                </button>
                <div className="faq-a" role="region"><p>{a}</p></div>
              </div>
            ))}
            {!product.faq?.length && <p>سوالی دارید؟ از <Link to="/contact">تماس با ما</Link> بپرسید.</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const navigate = useNavigate()
  const { addToCart, toggleWish, inWish } = useStore()
  const [qty, setQty] = useState(1)

  useEffect(() => setQty(1), [id])

  if (!product) {
    return (
      <section className="page-hero"><div className="container">
        <h1>محصول یافت نشد</h1>
        <Link to="/shop" className="btn btn-gold" style={{ marginTop: 20 }}>بازگشت به فروشگاه</Link>
      </div></section>
    )
  }

  const related = getRelated(product)
  const wished = inWish(product.id)
  const available = product.stock === 'موجود'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      brand: { '@type': 'Brand', name: product.brand },
      description: product.short,
      image: product.image,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IRR',
        price: product.price * 10,
        availability: available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://atryaelectronic.com/' },
        { '@type': 'ListItem', position: 2, name: 'فروشگاه', item: 'https://atryaelectronic.com/#/shop' },
        { '@type': 'ListItem', position: 3, name: product.name },
      ],
    },
    ...(product.faq?.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faq.map(([q, a]) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    }] : []),
  ]

  return (
    <>
      <Seo title={product.name} description={product.short} jsonLd={jsonLd} />
      <section className="page-hero page-hero-compact" aria-label={product.name}>
        <div className="container">
          <Breadcrumbs items={[
            { label: 'صفحه اصلی', to: '/' },
            { label: 'فروشگاه', to: '/shop' },
            { label: categoryLabel(product.category), to: `/shop` },
            { label: product.name },
          ]} />
        </div>
      </section>

      <section className="section detail-section" aria-label={product.name}>
        <div className="container detail-grid">
          <Reveal><ProductGallery product={product} /></Reveal>

          <Reveal className="detail-info" delay={80}>
            <span className="pc-brand">{product.brand === 'ONYX' ? 'برند ONYX' : product.brand}</span>
            <h1>{product.name}</h1>
            <p className="pd-short">{product.short}</p>
            <div className="pd-meta">
              <span className={`pd-stock ${available ? 'in' : 'out'}`}>{available ? '✓ موجود' : 'ناموجود'}</span>
              <span className="pd-sku">کد کالا: <span dir="ltr">{product.sku}</span></span>
            </div>
            <div className="pd-price-row">
              <span className="pd-price">{faPrice(product.price)}</span>
            </div>

            <div className="pd-actions">
              <div className="qty" aria-label="تعداد">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="کاهش تعداد">−</button>
                <span>{toFa(qty)}</span>
                <button onClick={() => setQty(Math.min(99, qty + 1))} aria-label="افزایش تعداد">+</button>
              </div>
              <button
                className="btn btn-gold"
                onClick={() => addToCart(product.id, qty)}
                disabled={!available}
              >
                <Icon name="cart" size={17} /> افزودن به سبد خرید
              </button>
              <button
                className="btn btn-primary"
                onClick={() => { addToCart(product.id, qty); navigate('/checkout') }}
                disabled={!available}
              >
                خرید مستقیم
              </button>
              <button
                className={`wish-btn pd-wish ${wished ? 'active' : ''}`}
                onClick={() => toggleWish(product.id)}
                aria-pressed={wished}
                aria-label={wished ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
              >
                <Icon name="heart" size={18} />
              </button>
            </div>

            <div className="pd-info-boxes">
              <div><Icon name="truck" size={18} /> ارسال سریع به سراسر ایران</div>
              <div><Icon name="shield" size={18} /> {product.warranty}</div>
              <div><Icon name="chat" size={18} /> مشاوره تخصصی پیش از خرید</div>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <Tabs product={product} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-similar" aria-label="محصولات مرتبط">
          <div className="container">
            <h2 className="similar-title">محصولات مرتبط</h2>
            <div className="product-grid">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
