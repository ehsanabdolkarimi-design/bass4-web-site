import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { LOGO_WHITE, navLinks, PHONE, PHONE_INTL, SITE_URL, ADDRESS, businessHours } from '../data/site'

const services = ['پیگیری سفارش', 'شرایط ارسال', 'قوانین و مقررات', 'حریم خصوصی', 'سوالات متداول']
const socials = [
  { label: 'اینستاگرام', href: '#', d: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.6 1.1.7.4.1.8.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1a3 3 0 0 0-1.1-.7c-.4-.1-.8-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z' },
  { label: 'تلگرام', href: '#', d: 'M21.9 4.6 19 19.3c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2L7.5 13.1 3 11.7c-1-.3-1-1 .2-1.4l17.4-6.7c.8-.3 1.5.2 1.3 1.4z' },
  { label: 'واتس‌اپ', href: '#', d: 'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.3-.5 0-1.1.1-3.6-.9-3-1.2-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5s-.2.3-.4.5l-.5.6c-.2.2-.3.3-.1.6.2.4.7 1.2 1.5 2 1 1 1.9 1.3 2.2 1.4.3.1.5.1.7-.1s.8-.9 1-1.2c.2-.3.4-.3.7-.2s1.8.9 2.1 1c.3.2.5.3.6.4.1.2.1.8-.1 1.5Z' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={LOGO_WHITE} alt="لوگوی آتریا الکترونیک" width="120" height="120" loading="lazy" />
            <p>
              آتریا الکترونیک، فروشگاه تخصصی و قابل اعتماد در زمینه تجهیزات الکترونیکی و منابع تغذیه؛
              عرضه‌کننده رسمی پاورهای سوئیچینگ، آداپتور و محصولات LED برند ONYX.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} className="social" href={s.href} aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>دسترسی سریع</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>خدمات مشتریان</h4>
            <ul>
              {services.map((s) => (
                <li key={s}><Link to="/contact">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>تماس با ما</h4>
            <ul className="footer-contact">
              <li><a href={`tel:${PHONE_INTL}`} dir="ltr"><Icon name="phone" size={15} /> {PHONE}</a></li>
              <li><span><Icon name="clock" size={15} /> {businessHours[0].days}: {businessHours[0].hours}</span></li>
              <li><span><Icon name="pin" size={15} /> {ADDRESS}</span></li>
            </ul>
            <h4 className="mt">خبرنامه</h4>
            {subscribed ? (
              <p className="newsletter-success" role="status">✓ عضویت شما ثبت شد.</p>
            ) : (
              <form className="newsletter" onSubmit={submit}>
                <label htmlFor="newsletter-email" className="sr-only">ایمیل شما</label>
                <input id="newsletter-email" type="email" required placeholder="ایمیل شما" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="btn btn-gold btn-sm" aria-label="عضویت در خبرنامه">عضویت</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear().toLocaleString('fa-IR')} آتریا الکترونیک — تمامی حقوق محفوظ است.</p>
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer">atryaelectronic.com</a>
        </div>
      </div>
    </footer>
  )
}
