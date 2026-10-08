import React, { useEffect, useState } from 'react'

const slides = [
  {
    src: '/wp-content/uploads/2026/06/00000000.png',
    alt: 'بنر اصلی آتریا الکترونیک — خرید پاور ۲۴ ولت صنعتی',
  },
  {
    src: '/wp-content/uploads/2026/06/ATRYA_Zephyr_Hero_1920x900-2222222.webp',
    alt: 'بنر محصولات پاور سوئیچینگ آتریا الکترونیک',
  },
  {
    src: '/wp-content/uploads/2026/07/ATRYA_LED_HERO_1920x900.webp',
    alt: 'بنر محصولات ال ای دی آتریا الکترونیک',
  },
]

/** Hero: the real ATRYA promotional banners in a gold-framed carousel. */
export default function HeroBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" aria-label="بنرهای تبلیغاتی">
      <div className="container">
        <div className="hero-frame">
          {slides.map((s, i) => (
            <div key={s.src} className={`hero-slide ${i === index ? 'active' : ''}`} aria-hidden={i !== index}>
              <img src={s.src} alt={s.alt} width="1920" height="900" fetchpriority={i === 0 ? 'high' : undefined} />
            </div>
          ))}
          <div className="hero-dots" role="tablist" aria-label="انتخاب بنر">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`بنر ${i + 1}`}
                className={`hero-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
