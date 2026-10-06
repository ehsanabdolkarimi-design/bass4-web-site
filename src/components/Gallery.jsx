import React, { useCallback, useEffect, useState } from 'react'

/** Main image + thumbnail strip + fullscreen lightbox. */
export default function Gallery({ images, alt }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const open = (i) => { setIndex(i); setLightbox(true) }
  const close = useCallback(() => setLightbox(false), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, next, prev])

  return (
    <div className="gallery">
      <button className="gallery-main" onClick={() => open(index)} aria-label="Open image in fullscreen">
        <img key={index} src={images[index]} alt={`${alt} — image ${index + 1}`} />
        <span className="gallery-expand" aria-hidden="true">⛶</span>
      </button>
      <div className="gallery-thumbs" role="tablist" aria-label="Gallery thumbnails">
        {images.map((src, i) => (
          <button
            key={src + i}
            role="tab"
            aria-selected={i === index}
            className={`gallery-thumb ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close viewer">×</button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image">‹</button>
          <img className="lb-img" src={images[index]} alt={`${alt} — image ${index + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image">›</button>
          <span className="lb-count" onClick={(e) => e.stopPropagation()}>{index + 1} / {images.length}</span>
        </div>
      )}
    </div>
  )
}
