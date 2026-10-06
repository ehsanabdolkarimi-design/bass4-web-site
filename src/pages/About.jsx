import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Seo, { orgJsonLd } from '../components/Seo'
import { whyAtrya, businessHours, PHONE, PHONE_INTL, LOGO_WHITE } from '../data/site'
import { stats } from './aboutStats'

export default function About() {
  return (
    <>
      <Seo title="درباره ما" description="آتریا الکترونیک، فروشگاه تخصصی تجهیزات الکترونیکی و منابع تغذیه صنعتی — عرضه‌کننده پاور سوئیچینگ، آداپتور و محصولات LED برند ONYX." jsonLd={[orgJsonLd()]} />
      <section className="page-hero" aria-label="درباره ما">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'درباره ما' }]} />
          <h1>درباره آتریا الکترونیک</h1>
          <p>فروشگاه تخصصی منابع تغذیه، آداپتور و محصولات LED</p>
        </div>
      </section>

      <section className="section" aria-label="معرفی شرکت">
        <div className="container about-grid">
          <Reveal className="about-copy">
            <span className="section-label">معرفی</span>
            <h2>فروشگاه تخصصی و قابل اعتماد</h2>
            <p>
              آتریا الکترونیک یک فروشگاه تخصصی و قابل اعتماد در زمینه تجهیزات الکترونیکی و منابع تغذیه است.
              فعالیت ما بر عرضه پاورهای سوئیچینگ ۱۲ ولت و ۲۴ ولت صنعتی، پاورهای اسلیم، فن‌دار و ضد آب،
              آداپتورها و محصولات LED تمرکز دارد و برند محصولی ما ONYX است.
            </p>
            <p>
              تیم ما از شناخت دقیق فنی محصولات، بازار و نیاز واقعی مشتریان برخوردار است؛ به همین دلیل
              پیش از هر خرید، مشاوره تخصصی ارائه می‌دهیم تا ولتاژ، آمپراژ و نوع پاورِ درست برای پروژه شما انتخاب شود.
            </p>
            <p>
              ضمانت اصالت کالا، پشتیبانی فنی پس از خرید و قیمت‌گذاری منصفانه، سه رکنی است که آتریا الکترونیک
              بر آن‌ها پایدار ایستاده است.
            </p>
            <Link to="/shop" className="btn btn-primary">مشاهده محصولات</Link>
          </Reveal>
          <Reveal className="about-media" delay={120}>
            <img src={LOGO_WHITE} alt="لوگوی آتریا الکترونیک" width="220" height="220" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section-why" aria-label="ارزش‌ها">
        <div className="container">
          <div className="why-grid">
            {whyAtrya.slice(0, 6).map((w, i) => (
              <Reveal as="article" className="why-card" key={w.title} delay={i * 50}>
                <span className="why-icon"><Icon name={w.icon} size={24} /></span>
                <div><h3>{w.title}</h3><p>{w.text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="stats-row">
            {stats.map((s) => (
              <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-hours" aria-label="ساعات کاری">
        <div className="container">
          <Reveal className="hours-band">
            <div>
              <h2>کنار شما هستیم</h2>
              <ul className="hours-list">
                {businessHours.map((h) => (
                  <li key={h.days}><Icon name="clock" size={16} /><strong>{h.days}:</strong><span>{h.hours}</span></li>
                ))}
              </ul>
            </div>
            <a href={`tel:${PHONE_INTL}`} className="btn btn-gold" dir="ltr"><Icon name="phone" size={16} /> {PHONE}</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
