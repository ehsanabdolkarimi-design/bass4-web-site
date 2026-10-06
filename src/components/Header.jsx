import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { useStore } from '../context/StoreContext'
import { navLinks, LOGO_HEADER, PHONE, PHONE_INTL } from '../data/site'
import { products } from '../data/products'
import { faPrice } from '../utils/format'

function SearchBar({ mobile = false }) {
  const [q, setQ] = useState('')
  const [focused, setFocused] = useState(false)
  const boxRef = useRef(null)
  const navigate = useNavigate()

  const suggestions = q.trim()
    ? products
        .filter((p) => {
          const t = q.trim().toLowerCase()
          return (
            p.name.toLowerCase().includes(t) ||
            p.brand.toLowerCase().includes(t) ||
            p.type.includes(q.trim()) ||
            String(p.voltage).includes(q.trim()) ||
            String(p.current).includes(q.trim()) ||
            p.sku.toLowerCase().includes(t)
          )
        })
        .slice(0, 5)
    : []

  useEffect(() => {
    const onDoc = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setFocused(false)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => document.removeEventListener('pointerdown', onDoc)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if (q.trim()) {
      navigate(`/shop?q=${encodeURIComponent(q.trim())}`)
      setQ('')
      setFocused(false)
    }
  }

  return (
    <form className={`searchbar ${mobile ? 'searchbar-mobile' : ''}`} onSubmit={submit} role="search" ref={boxRef}>
      <label className="sr-only" htmlFor={mobile ? 'search-m' : 'search-d'}>جستجو در محصولات</label>
      <input
        id={mobile ? 'search-m' : 'search-d'}
        type="search"
        placeholder="جستجوی محصول، ولتاژ یا آمپراژ…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => setFocused(true)}
        autoComplete="off"
      />
      <button type="submit" aria-label="جستجو"><Icon name="search" size={17} /></button>
      {focused && suggestions.length > 0 && (
        <ul className="search-suggestions" role="listbox">
          {suggestions.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => { navigate(`/product/${p.id}`); setQ(''); setFocused(false) }}
              >
                <img src={p.image} alt="" loading="lazy" />
                <span className="s-name">{p.name}</span>
                <span className="s-price">{faPrice(p.price)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount, setCartOpen } = useStore()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-main">
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label="آتریا الکترونیک — صفحه اصلی">
            <img src={LOGO_HEADER} alt="لوگوی آتریا الکترونیک" width="140" height="40" />
          </Link>

          <nav className="nav" aria-label="فهرست اصلی">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <SearchBar />
            <Link to="/wishlist" className="icon-btn" aria-label="علاقه‌مندی‌ها"><Icon name="heart" size={20} /></Link>
            <button className="icon-btn cart-btn" onClick={() => setCartOpen(true)} aria-label={`سبد خرید، ${cartCount} کالا`}>
              <Icon name="cart" size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount.toLocaleString('fa-IR')}</span>}
            </button>
            <button
              className={`burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <SearchBar mobile />
        <nav aria-label="فهرست موبایل">
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={{ transitionDelay: `${menuOpen ? i * 40 + 60 : 0}ms` }}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
              <Icon name="chevronLeft" size={18} />
            </NavLink>
          ))}
        </nav>
        <a className="mobile-phone" href={`tel:${PHONE_INTL}`} dir="ltr">
          <Icon name="phone" size={16} /> {PHONE}
        </a>
      </div>
    </header>
  )
}
