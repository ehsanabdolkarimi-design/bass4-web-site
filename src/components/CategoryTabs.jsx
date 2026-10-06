import React from 'react'
import { categories } from '../data/products'
import { toFa } from '../utils/format'

/** Yellow category filter tabs (like the reference screenshot). */
export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="cat-tabs" role="tablist" aria-label="دسته‌بندی محصولات">
      {categories.map((c) => (
        <button
          key={c.key}
          role="tab"
          aria-selected={active === c.key}
          className={`cat-tab ${active === c.key ? 'active' : ''}`}
          onClick={() => onChange(c.key)}
        >
          {c.label.replace(/\d/g, (d) => toFa(d))}
        </button>
      ))}
    </div>
  )
}
