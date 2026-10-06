import React from 'react'
import Icon from './Icon'

const CURRENT_OPTIONS = [5, 6, 10, 15, 20, 30]
const SORTS = [
  { value: 'newest', label: 'جدیدترین' },
  { value: 'cheap', label: 'ارزان‌ترین' },
  { value: 'expensive', label: 'گران‌ترین' },
  { value: 'popular', label: 'پرفروش‌ترین' },
]

export const emptyFilters = {
  q: '', volt: 'any', amp: 'any', type: 'any', brand: 'any',
  min: '', max: '', stock: 'any', sort: 'newest',
}

export function applyFilters(list, f) {
  let out = list.filter((p) => {
    if (f.q) {
      const t = f.q.trim().toLowerCase()
      const hay = [p.name, p.brand, p.type, p.sku, String(p.voltage), String(p.current), p.short].join(' ').toLowerCase()
      if (!hay.includes(t)) return false
    }
    if (f.volt !== 'any' && p.voltage !== Number(f.volt)) return false
    if (f.amp !== 'any' && p.current !== Number(f.amp)) return false
    if (f.type !== 'any' && p.category !== f.type) return false
    if (f.brand !== 'any' && p.brand !== f.brand) return false
    if (f.min && p.price < Number(f.min)) return false
    if (f.max && p.price > Number(f.max)) return false
    if (f.stock !== 'any' && p.stock !== f.stock) return false
    return true
  })
  const sorters = {
    cheap: (a, b) => a.price - b.price,
    expensive: (a, b) => b.price - a.price,
    popular: (a, b) => Number(b.featured) - Number(a.featured),
    newest: (a, b) => (a.featured === b.featured ? 0 : Number(b.featured) - Number(a.featured)),
  }
  return out.sort(sorters[f.sort] || sorters.newest)
}

/** Full filter panel for the shop page. */
export default function ProductFilters({ filters, onChange, compact = false }) {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  if (compact) {
    return (
      <form className="filters filters-compact" role="search" aria-label="فیلترها" onSubmit={(e) => e.preventDefault()}>
        <div className="filter-field filter-search">
          <label htmlFor="s-q">جستجو</label>
          <input id="s-q" type="search" placeholder="نام، برند، ولتاژ…" value={filters.q} onChange={set('q')} />
        </div>
        <div className="filter-field">
          <label htmlFor="s-volt">ولتاژ</label>
          <select id="s-volt" value={filters.volt} onChange={set('volt')}>
            <option value="any">همه</option>
            <option value="12">12V</option>
            <option value="24">24V</option>
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="s-amp">آمپر</label>
          <select id="s-amp" value={filters.amp} onChange={set('amp')}>
            <option value="any">همه</option>
            {CURRENT_OPTIONS.map((n) => <option key={n} value={n}>{n}A</option>)}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="s-sort">ترتیب</label>
          <select id="s-sort" value={filters.sort} onChange={set('sort')}>
            {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </form>
    )
  }

  return (
    <form className="filters" role="search" aria-label="فیلتر محصولات" onSubmit={(e) => e.preventDefault()}>
      <div className="filter-field filter-search">
        <label htmlFor="s-q">جستجو</label>
        <input id="s-q" type="search" placeholder="نام محصول، برند، ولتاژ، آمپر…" value={filters.q} onChange={set('q')} />
      </div>
      <div className="filter-field">
        <label htmlFor="s-volt">ولتاژ</label>
        <select id="s-volt" value={filters.volt} onChange={set('volt')}>
          <option value="any">همه</option>
          <option value="12">12V</option>
          <option value="24">24V</option>
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="s-amp">جریان</label>
        <select id="s-amp" value={filters.amp} onChange={set('amp')}>
          <option value="any">همه</option>
          {CURRENT_OPTIONS.map((n) => <option key={n} value={n}>{n}A</option>)}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="s-brand">برند</label>
        <select id="s-brand" value={filters.brand} onChange={set('brand')}>
          <option value="any">همه</option>
          <option value="ONYX">ONYX</option>
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="s-min">حداقل قیمت (تومان)</label>
        <input id="s-min" type="number" min="0" placeholder="۰" value={filters.min} onChange={set('min')} />
      </div>
      <div className="filter-field">
        <label htmlFor="s-max">حداکثر قیمت (تومان)</label>
        <input id="s-max" type="number" min="0" placeholder="…" value={filters.max} onChange={set('max')} />
      </div>
      <div className="filter-field">
        <label htmlFor="s-stock">موجودی</label>
        <select id="s-stock" value={filters.stock} onChange={set('stock')}>
          <option value="any">همه</option>
          <option value="موجود">موجود</option>
          <option value="ناموجود">ناموجود</option>
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="s-sort">مرتب‌سازی</label>
        <select id="s-sort" value={filters.sort} onChange={set('sort')}>
          {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>
    </form>
  )
}
