import React, { useState } from 'react'
import { Breadcrumbs } from '../components/Section'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { PHONE, PHONE_INTL, PHONE_LANDLINE, EMAIL, ADDRESS, GOOGLE_MAP_QUERY, businessHours } from '../data/site'

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(GOOGLE_MAP_QUERY)}&z=17&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_MAP_QUERY)}`

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Seo title="تماس با ما" description="تماس با آتریا الکترونیک — مشاوره تخصصی و ثبت سفارش: ۰۹۱۲۶۷۰۹۶۱۸" />
      <section className="page-hero" aria-label="تماس با ما">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'تماس با ما' }]} />
          <h1>تماس با ما</h1>
          <p>برای مشاوره تخصصی، ثبت سفارش و پشتیبانی فنی با ما در ارتباط باشید.</p>
        </div>
      </section>

      <section className="section" aria-label="اطلاعات تماس و فرم">
        <div className="container contact-grid">
          <div>
            <div className="contact-cards">
              <Reveal as="a" className="contact-card" href={`tel:${PHONE_INTL}`}>
                <span className="contact-icon"><Icon name="phone" size={20} /></span>
                <div>
                  <h3>تماس تلفنی</h3>
                  <p dir="ltr">{PHONE_LANDLINE} | {PHONE}</p>
                  <small>شنبه تا چهارشنبه ۹ تا ۱۷، پنجشنبه ۹ تا ۱۳</small>
                </div>
              </Reveal>
              <Reveal className="contact-card" delay={60}>
                <span className="contact-icon"><Icon name="pin" size={20} /></span>
                <div>
                  <h3>آدرس فروشگاه</h3>
                  <p>{ADDRESS}</p>
                  <small>ایمیل: <a href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a></small>
                </div>
              </Reveal>
              <Reveal className="contact-card" delay={120}>
                <span className="contact-icon"><Icon name="clock" size={20} /></span>
                <div>
                  <h3>ساعات کاری</h3>
                  {businessHours.map((h) => (
                    <p key={h.days} className="hours-line">{h.days}: {h.hours}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal className="contact-map" delay={150} aria-label="نقشه فروشگاه">
              <iframe
                title="نقشه فروشگاه آتریا الکترونیک — گوگل مپ"
                src={mapEmbed}
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="map-link" href={mapLink} target="_blank" rel="noopener">برای دیدن نقشه در گوگل مپ کلیک کنید</a>
            </Reveal>
          </div>

          <Reveal className="contact-form-wrap" delay={100}>
            {sent ? (
              <div className="success-box" role="status">
                <span className="success-icon">✓</span>
                <h3>پیام شما ثبت شد</h3>
                <p>کارشناسان ما در اولین فرصت کاری با شما تماس می‌گیرند. برای پاسخ فوری: <a href={`tel:${PHONE_INTL}`} dir="ltr">{PHONE}</a></p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>ارسال پیام جدید</button>
              </div>
            ) : (
              <>
                <span className="section-label">فرم تماس</span>
                <h2>پیام شما</h2>
                <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="field"><label htmlFor="c-name">نام</label><input id="c-name" required placeholder="نام" /></div>
                  <div className="field"><label htmlFor="c-family">نام خانوادگی</label><input id="c-family" required placeholder="نام خانوادگی" /></div>
                  <div className="field"><label htmlFor="c-phone">شماره تماس</label><input id="c-phone" type="tel" required placeholder="09xxxxxxxxx" dir="ltr" /></div>
                  <div className="field"><label htmlFor="c-email">ایمیل (اختیاری)</label><input id="c-email" type="email" placeholder="you@example.com" dir="ltr" /></div>
                  <div className="field field-full"><label htmlFor="c-subject">موضوع</label>
                    <select id="c-subject">
                      <option>مشاوره خرید</option>
                      <option>پیگیری سفارش</option>
                      <option>پشتیبانی فنی</option>
                      <option>سایر موارد</option>
                    </select>
                  </div>
                  <div className="field field-full"><label htmlFor="c-msg">پیام</label><textarea id="c-msg" rows="5" required placeholder="پیام خود را بنویسید…" /></div>
                  <button type="submit" className="btn btn-gold btn-block">ارسال پیام</button>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
