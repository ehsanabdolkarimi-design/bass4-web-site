import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Header'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Instagram', href: '#', d: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.6 1.1.7.4.1.8.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1a3 3 0 0 0-1.1-.7c-.4-.1-.8-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z' },
  { label: 'LinkedIn', href: '#', d: 'M20.4 3H3.6C3.3 3 3 3.3 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6zM8.3 18.4H5.7V9.8h2.6v8.6zM7 8.6a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1zm11.4 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.8h2.5v1.2c.3-.7 1.2-1.4 2.5-1.4 2.6 0 3.2 1.7 3.2 4v4.8z' },
  { label: 'X (Twitter)', href: '#', d: 'M18.2 2.3h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.9-6 6.9H1.6l7.7-8.9L1.2 2.3h6.8l4.8 6.3 5.4-6.3zm-1.2 17.6h1.9L7 4.1H5L17 19.9z' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Connecting people with extraordinary homes and smart investments. Integrity, transparency and
              client satisfaction — since 2001.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} className="social" href={s.href} aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {nav.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><a href="tel:+15552467890">(555) 246-7890</a></li>
              <li><a href="mailto:hello@horizonproperties.com">hello@horizonproperties.com</a></li>
              <li><span>1200 Congress Avenue, Suite 400<br />Austin, TX 78701</span></li>
            </ul>
          </div>

          <div className="footer-col footer-news">
            <h4>Newsletter</h4>
            <p>Monthly insights on the luxury market. No noise.</p>
            {subscribed ? (
              <p className="newsletter-success" role="status">✓ You're on the list.</p>
            ) : (
              <form className="newsletter" onSubmit={submit}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-gold btn-sm" aria-label="Subscribe">→</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <p>Equal Housing Opportunity — <span aria-hidden="true">⌂</span></p>
        </div>
      </div>
    </footer>
  )
}
