
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { DEFAULT_SITE_CONTACT, getSiteContact } from "../lib/siteContact";
// import footerLogo from "../assets/second_logo.jpeg";

// export default function Footer() {
//   const [contact, setContact] = useState(DEFAULT_SITE_CONTACT);

//   useEffect(() => {
//     let alive = true;

//     (async () => {
//       try {
//         const data = await getSiteContact();
//         if (!alive) return;
//         setContact(data);
//       } catch {
//         if (!alive) return;
//         setContact(DEFAULT_SITE_CONTACT);
//       }
//     })();

//     return () => {
//       alive = false;
//     };
//   }, []);

//   return (
//     <footer className="mt-16 bg-[#001f3f] text-white">
//       <div className="container-p py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         {/* Logo & About */}
//         <div>
//           <Link to="/" className="inline-flex items-center mb-4">
//             <img
//               src={footerLogo}
//               alt="AquaaLiv"
//               className="h-9 w-auto opacity-90"
//             />
//           </Link>
//           <p className="text-slate-200 text-sm leading-relaxed">
//             Pure, healthy, and great-tasting water solutions for homes and
//             businesses. Installation, repair, AMC, and expert guidance.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/services", label: "Services" },
//               { to: "/products", label: "Products" },
//               { to: "/about", label: "About Us" },
//               { to: "/contact", label: "Contact" },
//             ].map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.to}
//                   className="block px-2 py-1 rounded-md hover:bg-white/10 transition"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Contact</h4>

//           {/* 🔥 CHANGED: space-y-5 */}
//           <ul className="space-y-5 text-sm">

//             {/* Phone */}
//             <li className="flex items-start gap-3">
//               {/* 🔥 CHANGED: w-5 h-5 + shrink-0 */}
//               <svg
//                 className="w-5 h-5 text-sky-300 shrink-0"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-1.09 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.09l3 .5a2 2 0 0 1 1.72 2z" />
//               </svg>
//               <span>{contact.phoneDisplay}</span>
//             </li>

//             {/* Email */}
//             <li className="flex items-start gap-3">
//               <svg
//                 className="w-5 h-5 text-sky-300 shrink-0"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect x="2" y="4" width="20" height="16" rx="2" />
//                 <path d="m22 6-10 7L2 6" />
//               </svg>
//               <span>{contact.email}</span>
//             </li>

//             {/* Address */}
//             <li className="flex items-start gap-3">
//               <svg
//                 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//               <span className="leading-relaxed">
//                 {contact.address}
//               </span>
//             </li>

//           </ul>
//         </div>

//         {/* CTA */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Get Started</h4>
//           <div className="flex flex-col gap-3">
//             <Link
//               to="/contact"
//               className="rounded-md bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium py-2 text-center transition"
//             >
//               Book Service
//             </Link>
//             <Link
//               to="/products"
//               className="rounded-md border border-sky-400 hover:bg-white/10 text-white text-sm font-medium py-2 text-center transition"
//             >
//               Explore Products
//             </Link>
//           </div>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="border-t border-white/20">
//         <div className="container-p py-4 text-center text-xs text-slate-300">
//           © {new Date().getFullYear()} AquaaLiv. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_SITE_CONTACT, getSiteContact } from "../lib/siteContact";
import footerLogo from "../assets/second_logo.jpeg";

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
    <footer className="mt-16 bg-[#001f3f] text-white">
      <div className="container-p py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* ================= Logo & About ================= */}
        <div>
          <Link to="/" className="inline-flex items-center mb-4">
            <img
              src={footerLogo}
              alt="AquaaLiv"
              className="h-9 w-auto opacity-90"
            />
          </Link>
          <p className="text-slate-200 text-sm leading-relaxed">
            Pure, healthy, and great-tasting water solutions for homes and
            businesses. Installation, repair, AMC, and expert guidance.
          </p>
        </div>

        {/* ================= Quick Links ================= */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
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
                  className="block px-2 py-1 rounded-md text-white hover:text-white hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= Contact ================= */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>

          <ul className="space-y-5 text-sm">

            {/* Phone */}
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-sky-300 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-1.09 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.09l3 .5a2 2 0 0 1 1.72 2z" />
              </svg>
              <span>{contact.phoneDisplay}</span>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-sky-300 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span>{contact.email}</span>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-sky-300 shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="leading-relaxed">
                {contact.address}
              </span>
            </li>

          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div>
          <h4 className="font-semibold text-white mb-3">Get Started</h4>
          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium py-2 text-center transition"
            >
              Book Service
            </Link>
            <Link
              to="/products"
              className="rounded-md border border-sky-400 hover:bg-white/10 text-white text-sm font-medium py-2 text-center transition"
            >
              Explore Products
            </Link>
          </div>
        </div>

      </div>

      {/* ================= Bottom ================= */}
      <div className="border-t border-white/20">
        <div className="container-p py-4 text-center text-xs text-slate-300">
          © {new Date().getFullYear()} AquaaLiv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
