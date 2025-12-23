import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/aquaaliv_logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-p h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center" aria-label="AquaaLiv Home">
            <img src={logo} alt="AquaaLiv" className="h-10 sm:h-11 w-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/login" className="btn-secondary text-sm">Login</Link>
          <Link to="/contact" className="btn-primary text-sm">Book Service</Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-p py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `py-2 text-sm ${isActive ? 'text-brand-blue' : 'text-slate-700'}`}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="btn-secondary w-full">Login</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm">Book Service</Link>
          </div>
        </div>
      )}
    </header>
  )
}
