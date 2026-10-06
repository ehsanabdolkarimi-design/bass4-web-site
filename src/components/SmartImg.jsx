import React, { useState } from 'react'

const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#f1f3f7"/><rect x="20" y="20" width="260" height="260" rx="12" fill="none" stroke="#e0e4ec" stroke-width="2"/><path d="M160 90 110 160h36l-6 50 50-70h-36l6-50z" fill="#dfe3ea"/><text x="150" y="245" font-family="sans-serif" font-size="13" fill="#9aa3b2" text-anchor="middle">تصویر محصول</text></svg>`,
  )

/** <img> that falls back to a neutral placeholder if the source fails to load. */
export default function SmartImg({ src, fallback = PLACEHOLDER, alt = '', ...rest }) {
  const [current, setCurrent] = useState(src)
  const [failed, setFailed] = useState(false)
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (current !== fallback) setCurrent(fallback)
        setFailed(true)
      }}
      data-fallback={failed || undefined}
      {...rest}
    />
  )
}
