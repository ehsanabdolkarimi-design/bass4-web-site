import React, { useMemo, useState } from 'react'
import { Breadcrumbs } from '../components/Section'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { products } from '../data/products'
import { PHONE_INTL, EMAIL, SITE_NAME } from '../data/site'
import { toFa, faPrice } from '../utils/format'

/** Simple order form — customer's contact info + selected products,
    delivered to the store via WhatsApp / email (no backend needed). */
export default function OrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [picked, setPicked] = useState({}) // id -> qty
  const [query, setQuery] = useState('')
  const [sent, setSent] = useState(false)

  const selected = useMemo(
    () => products.filter((p) => picked[p.id] > 0),
    [picked],
  )

  const setMessage = () => {
    const lines = [
      'سلام، سفارش جدید از سایت آتریا الکترونیک:',
      `نام: ${name}`,
      `شماره تماس: ${phone}`,
      'محصولات مورد نظر:',
      ...selected.map((p) => `• ${p.name} — ${toFa(picked[p.id])} عدد (${faPrice(p.price)})`),
    ]
    if (note.trim()) lines.push(`توضیحات: ${note.trim()}`)
    return lines.join('\n')
  }

  const whatsappHref = `https://wa.me/${PHONE_INTL.replace('+', '')}?text=${encodeURIComponent(setMessage())}`
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('ثبت سفارش از سایت — ' + name)}&body=${encodeURIComponent(setMessage())}`

  const setQty = (id, qty) => {
    setPicked((prev) => {
      const next = { ...prev }
      if (qty > 0) next[id] = qty
      else delete next[id]
      return next
    })
  }

  const shown = products.filter((p) => p.name.includes(query.trim()))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    window.open(whatsappHref, '_blank', 'noopener')
  }

  return (
    <>
      <Seo title="ثبت سفارش" description="فرم ثبت سفارش آتریا الکترونیک — اطلاعات تماس و لیست محصولات مورد نظر خود را برای ما ارسال کنید." />
      <section className="page-hero" aria-label="ثبت سفارش">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'ثبت سفارش' }]} />
          <h1>ثبت سفارش</h1>
          <p>اطلاعات تماس و لیست محصولات مورد نظر خود را وارد کنید؛ سفارش شما برای کارشناسان ما در واتس‌اپ یا ایمیل ارسال می‌شود.</p>
        </div>
      </section>

      <section className="section" aria-label="فرم ثبت سفارش">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            {sent ? (
              <div className="success-box" role="status">
                <span className="success-icon">✓</span>
                <h3>سفارش شما آماده ارسال است</h3>
                <p>پیام سفارش در واتس‌اپ باز شده است؛ فقط دکمه ارسال را بزنید. اگر واتس‌اپ باز نشد، از دکمه‌های زیر استفاده کنید.</p>
                <div className="order-actions">
                  <a className="btn btn-gold" href={whatsappHref} target="_blank" rel="noopener">
                    <Icon name="chat" size={16} /> ارسال با واتس‌اپ
                  </a>
                  <a className="btn btn-outline" href={mailtoHref}>
                    <Icon name="mail" size={16} /> ارسال با ایمیل
                  </a>
                  <button className="btn btn-outline" onClick={() => setSent(false)}>سفارش جدید</button>
                </div>
              </div>
            ) : (
              <form className="form-grid" onSubmit={submit}>
                <span className="section-label" style={{ gridColumn: '1 / -1' }}>فرم سفارش</span>
                <h2 style={{ gridColumn: '1 / -1', margin: 0 }}>سفارش خود را ثبت کنید</h2>

                <div className="field">
                  <label htmlFor="o-name">نام و نام خانوادگی</label>
                  <input id="o-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="نام شما" />
                </div>
                <div className="field">
                  <label htmlFor="o-phone">شماره تماس</label>
                  <input id="o-phone" type="tel" required dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="09xxxxxxxxx" />
                </div>

                <div className="field field-full">
                  <label htmlFor="o-search">جستجوی محصول</label>
                  <input id="o-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="مثلاً: پاور 12 ولت" />
                </div>

                <div className="field field-full">
                  <label>محصولات مورد نظر و تعداد</label>
                  <div className="order-products">
                    {shown.map((p) => (
                      <label key={p.id} className={`order-item ${picked[p.id] ? 'is-picked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={!!picked[p.id]}
                          onChange={(e) => setQty(p.id, e.target.checked ? 1 : 0)}
                        />
                        <img src={p.image} alt="" width="44" height="44" loading="lazy" />
                        <span className="order-item-name">{p.name}</span>
                        <span className="order-item-price">{faPrice(p.price)}</span>
                        <input
                          className="order-qty"
                          type="number"
                          min="1"
                          max="99"
                          value={picked[p.id] || ''}
                          onChange={(e) => setQty(p.id, Number(e.target.value))}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`تعداد ${p.name}`}
                        />
                      </label>
                    ))}
                    {shown.length === 0 && <p className="order-empty">محصولی با این نام پیدا نشد.</p>}
                  </div>
                  <small>انتخاب‌شده: {toFa(selected.length)} محصول</small>
                </div>

                <div className="field field-full">
                  <label htmlFor="o-note">توضیحات (اختیاری)</label>
                  <textarea id="o-note" rows="3" value={note} onChange={(e) => setNote(e.target.value)} placeholder="مثلاً آدرس، زمان تماس مناسب یا سوال فنی…" />
                </div>

                <button type="submit" className="btn btn-gold btn-block" disabled={selected.length === 0}>
                  ثبت و ارسال سفارش به {SITE_NAME}
                </button>
                {selected.length === 0 && <small style={{ gridColumn: '1 / -1' }}>برای ثبت سفارش، حداقل یک محصول انتخاب کنید.</small>}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
