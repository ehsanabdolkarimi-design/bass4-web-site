import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_URL, LOGO_WHITE } from '../data/site'

/**
 * Per-route SEO: document title, meta description, canonical + optional JSON-LD.
 * <Seo title="…" description="…" jsonLd={{…}} />
 */
export default function Seo({ title, description, jsonLd = [] }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const full = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | فروشگاه پاور سوئیچینگ و منابع تغذیه`
    document.title = full

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    if (description) setMeta('description', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = SITE_URL + pathname

    document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
    const list = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    list.filter(Boolean).forEach((obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seoJsonld = '1'
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
    })

    return () => document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
  }, [title, description, pathname, JSON.stringify(jsonLd)])

  return null
}

export const orgJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'آتریا الکترونیک',
  alternateName: 'ATRYA ELECTRONIC',
  url: SITE_URL,
  logo: LOGO_WHITE,
  telephone: '+989126709618',
})
