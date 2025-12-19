import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-p py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white font-bold">A</span>
            <span className="font-semibold text-slate-800 text-lg">AquaaLiv</span>
          </div>
          <p className="text-slate-600 text-sm">Pure, healthy, and great-tasting water solutions for homes and businesses. Installation, repair, AMC, and expert guidance.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Phone: <a href="tel:+919689102762" className="hover:underline">+91 96891 02762</a></li>
            <li>Email: <a href="mailto:aquaaliv@gmail.com" className="hover:underline">aquaaliv@gmail.com</a></li>
            <li>Address: AquaaLiv, Office No 02, Bhakti-Desai Heights, Near Bank of Maharashtra, Akurdi - 035</li>
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
