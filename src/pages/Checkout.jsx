import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import Seo from '../components/Seo'
import { useStore } from '../context/StoreContext'
import { products } from '../data/products'
import { faPrice, toFa } from '../utils/format'

const PROVINCES = ['تهران', 'اصفهان', 'خراسان رضوی', 'فارس', 'آذربایجان شرقی', 'آذربایجان غربی', 'البرز', 'گیلان', 'مازندران', 'خوزستان', 'کرمان', 'یزد', 'قزوین', 'همدان', 'کرمانشاه', 'سایر']

export default function Checkout() {
  const { cart, updateQty, removeFromCart } = useStore()
  const [placed, setPlaced] = useState(false)

  const items = cart.map((x) => ({ ...x, product: products.find((p) => p.id === x.id) })).filter((x) => x.product)
  const subtotal = items.reduce((s, x) => s + x.product.price * x.qty, 0)
  const shipping = subtotal > 0 ? (subtotal >= 5000000 ? 0 : 150000) : 0
  const total = subtotal + shipping

  const submit = (e) => {
    e.preventDefault()
    try {
      const orders = JSON.parse(localStorage.getItem('atrya-orders')) || []
      orders.push({
        createdAt: new Date().toISOString(),
        items: items.map((x) => ({ id: x.id, name: x.product.name, qty: x.qty, price: x.product.price })),
        subtotal, shipping, total,
        customer: Object.fromEntries(new FormData(e.target)),
      })
      localStorage.setItem('atrya-orders', JSON.stringify(orders))
    } catch { /* storage unavailable */ }
    setPlaced(true)
  }

  if (placed) {
    return (
      <section className="section"><div className="container">
        <div className="success-box" role="status">
          <span className="success-icon">✓</span>
          <h3>سفارش شما ثبت شد</h3>
          <p>
            اطلاعات سفارش شما ذخیره شد و کارشناسان آتریا الکترونیک برای نهایی‌سازی و پرداخت با شما تماس می‌گیرند.
            (درگاه پرداخت آنلاین هنوز متصل نیست؛ در به‌روزرسانی بعدی درگاه پرداخت ایرانی به این مرحله متصل می‌شود.)
          </p>
          <Link to="/shop" className="btn btn-primary">بازگشت به فروشگاه</Link>
        </div>
      </div></section>
    )
  }

  return (
    <>
      <Seo title="تسویه حساب" description="تکمیل سفارش از فروشگاه آتریا الکترونیک" />
      <section className="page-hero page-hero-compact" aria-label="تسویه حساب">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'فروشگاه', to: '/shop' }, { label: 'تسویه حساب' }]} />
          <h1>تسویه حساب</h1>
        </div>
      </section>

      <section className="section" aria-label="فرم سفارش">
        <div className="container checkout-grid">
          <form className="checkout-form" onSubmit={submit}>
            <h2>اطلاعات خریدار</h2>
            <div className="form-grid">
              <div className="field"><label htmlFor="k-name">نام</label><input id="k-name" name="firstName" required placeholder="نام" /></div>
              <div className="field"><label htmlFor="k-family">نام خانوادگی</label><input id="k-family" name="lastName" required placeholder="نام خانوادگی" /></div>
              <div className="field"><label htmlFor="k-mobile">شماره موبایل</label><input id="k-mobile" name="mobile" type="tel" required placeholder="09xxxxxxxxx" dir="ltr" /></div>
              <div className="field"><label htmlFor="k-province">استان</label>
                <select id="k-province" name="province" required defaultValue="تهران">
                  {PROVINCES.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="field"><label htmlFor="k-city">شهر</label><input id="k-city" name="city" required placeholder="شهر" /></div>
              <div className="field"><label htmlFor="k-postal">کد پستی</label><input id="k-postal" name="postal" type="text" required placeholder="کد پستی" dir="ltr" /></div>
              <div className="field field-full"><label htmlFor="k-address">آدرس</label><textarea id="k-address" name="address" rows="2" required placeholder="آدرس دقیق پستی" /></div>
              <div className="field field-full"><label htmlFor="k-note">توضیحات سفارش (اختیاری)</label><textarea id="k-note" name="note" rows="2" placeholder="توضیحات تکمیلی سفارش…" /></div>
            </div>
            <h2 className="mt-lg">شیوه پرداخت</h2>
            <div className="pay-note">
              <strong>درگاه پرداخت آنلاین (به‌زودی)</strong>
              <p>درگاه پرداخت ایرانی هنوز به فروشگاه متصل نشده است؛ پس از ثبت سفارش، کارشناسان ما برای نهایی‌سازی خرید و پرداخت امن با شما تماس می‌گیرند.</p>
            </div>
            <button type="submit" className="btn btn-gold btn-block" disabled={!items.length}>ثبت سفارش</button>
          </form>

          <aside className="checkout-summary">
            <h2>سفارش شما</h2>
            {items.length === 0 ? (
              <div className="cart-empty">
                <p>سبد خرید خالی است.</p>
                <Link to="/shop" className="btn btn-primary">مشاهده محصولات</Link>
              </div>
            ) : (
              <>
                <ul className="cart-items">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="cart-item">
                      <img src={product.image} alt={product.name} width="56" height="56" loading="lazy" />
                      <div className="ci-info">
                        <span className="ci-name">{product.name}</span>
                        <div className="qty-row">
                          <div className="qty">
                            <button type="button" onClick={() => updateQty(product.id, qty - 1)} aria-label="کاهش">−</button>
                            <span>{toFa(qty)}</span>
                            <button type="button" onClick={() => updateQty(product.id, qty + 1)} aria-label="افزایش">+</button>
                          </div>
                          <button type="button" className="ci-remove" onClick={() => removeFromCart(product.id)}>حذف</button>
                        </div>
                      </div>
                      <span className="ci-line">{faPrice(product.price * qty)}</span>
                    </li>
                  ))}
                </ul>
                <div className="drawer-total summary-rows">
                  <div><span>جمع کالاها:</span><strong>{faPrice(subtotal)}</strong></div>
                  <div><span>هزینه ارسال:</span><strong>{shipping === 0 ? 'رایگان' : faPrice(shipping)}</strong></div>
                  <div className="grand"><span>مبلغ نهایی:</span><strong>{faPrice(total)}</strong></div>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
