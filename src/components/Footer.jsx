import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_SITE_CONTACT, getSiteContact } from '../lib/siteContact'
import logo from '../assets/aquaaliv_logo.png'

export default function Footer() {
  const [contact, setContact] = useState(DEFAULT_SITE_CONTACT)

  useEffect(() => {
    let alive = true

    ;(async () => {
      try {
        const data = await getSiteContact()
        if (!alive) return
        setContact(data)
      } catch {
        if (!alive) return
        setContact(DEFAULT_SITE_CONTACT)
      }
    })()

    return () => {
      alive = false
    }
  }, [])

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-p py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Link to="/" aria-label="AquaaLiv Home" className="inline-flex items-center">
              <img src={logo} alt="AquaaLiv" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          <p className="text-slate-600 text-sm">Pure, healthy, and great-tasting water solutions for homes and businesses. Installation, repair, AMC, and expert guidance.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><path d="m3 9 9-7 9 7"/><path d="M9 22V12h6v10"/></svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><path d="M12 2v20"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 20h10"/></svg>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue opacity-80 group-hover:opacity-100"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Phone: <a href={`tel:${contact.phoneTel}`} className="hover:underline">{contact.phoneDisplay}</a></li>
            <li>Email: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></li>
            <li>Address: {contact.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Get Started</h4>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="btn-primary">Book Service</Link>
            <Link to="/products" className="btn-secondary">Explore Products</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-p py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} AquaaLiv. All rights reserved.</div>
      </div>
    </footer>
  )
}
