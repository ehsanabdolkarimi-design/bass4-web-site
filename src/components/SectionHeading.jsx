import React from 'react'
import Reveal from './Reveal'

/** Centered or left section heading: gold label + large title. */
export default function SectionHeading({ label, title, align = 'center', children }) {
  return (
    <Reveal className={`section-head align-${align}`}>
      <span className="label-gold">{label}</span>
      <h2>{title}</h2>
      {children}
    </Reveal>
  )
}
