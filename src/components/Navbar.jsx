import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/technology', label: 'Technology' },
    { to: '/agents', label: 'Agents' },
    { to: '/integrations', label: 'Integrations' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L26 8.5V19.5L14 26L2 19.5V8.5L14 2Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <circle cx="14" cy="14" r="4" fill="url(#logoGrad)"/>
              <line x1="14" y1="10" x2="14" y2="4" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              <line x1="17.5" y1="16" x2="22" y2="19" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              <line x1="10.5" y1="16" x2="6" y2="19" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26">
                  <stop stopColor="#ff6b2b"/>
                  <stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-text">HiverAI</span>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
