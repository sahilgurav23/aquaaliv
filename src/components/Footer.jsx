import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_SITE_CONTACT, getSiteContact } from "../lib/siteContact";
import logo from "../assets/aquaaliv_logo.png";

export default function Footer() {
  const [contact, setContact] = useState(DEFAULT_SITE_CONTACT);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const data = await getSiteContact();
        if (!alive) return;
        setContact(data);
      } catch {
        if (!alive) return;
        setContact(DEFAULT_SITE_CONTACT);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-p py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <Link to="/" className="inline-flex items-center mb-4">
            <img src={logo} alt="AquaaLiv" className="h-14 w-auto" />
          </Link>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pure, healthy, and great-tasting water solutions for homes and
            businesses. Installation, repair, AMC, and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-slate-100 transition"
                >
                  <span className="text-brand-blue font-bold">{">"}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact (Professional & Clean) */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-600">

            {/* Phone */}
            <li className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400"
              >
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-1.09 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.09l3 .5a2 2 0 0 1 1.72 2z" />
              </svg>
              <a
                href={`tel:${contact.phoneTel}`}
                className="hover:text-brand-blue transition"
              >
                {contact.phoneDisplay}
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-brand-blue transition"
              >
                {contact.email}
              </a>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400 mt-0.5"
              >
                <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="leading-relaxed">{contact.address}</span>
            </li>

          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Get Started</h4>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="btn-primary">
              Book Service
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200">
        <div className="container-p py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AquaaLiv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
