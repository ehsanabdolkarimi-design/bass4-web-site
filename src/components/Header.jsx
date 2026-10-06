import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export function Logo({ dark = false }) {
  return (
    <Link to="/" className="logo" aria-label="Horizon Properties — Home">
      <svg className="logo-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="#c9a56a" strokeWidth="1" />
        <path d="M9 26 20 13l11 13" stroke="#c9a56a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 26v-5m10 5v-5" stroke={dark ? '#e8edf4' : '#fff'} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        <strong>HORIZON</strong>
        <small>PROPERTIES</small>
      </span>
    </Link>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onDarkHero = location.pathname === '/' || location.pathname.startsWith('/properties/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const solid = scrolled || open || !onDarkHero

  return (
    <header className={`site-header ${solid ? 'scrolled' : ''}`} data-dark-hero={onDarkHero}>
      <div className="container header-inner">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-right">
          <a className="header-phone" href="tel:+15552467890">
            <PhoneIcon />
            <span>(555) 246-7890</span>
          </a>
          <button
            className={`burger ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} style={{ transitionDelay: `${open ? i * 40 + 80 : 0}ms` }} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-contact">
          <a href="tel:+15552467890"><PhoneIcon /> (555) 246-7890</a>
          <a href="mailto:hello@horizonproperties.com">hello@horizonproperties.com</a>
        </div>
      </div>
    </header>
  )
}
