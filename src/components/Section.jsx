import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export function SectionHeading({ label, title, align = 'center', children }) {
  return (
    <Reveal className={`section-head align-${align}`}>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {children}
    </Reveal>
  )
}

/** RTL-aware breadcrumb trail: items = [{label, to?}] */
export function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="مسیر صفحه">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
