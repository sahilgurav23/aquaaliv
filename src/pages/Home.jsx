// import { Helmet } from 'react-helmet-async'
// import HeroSection from '../components/HeroSection'
// import ServiceCard from '../components/ServiceCard'
// import ProductCard from '../components/ProductCard'
// import TestimonialCard from '../components/TestimonialCard'
// import Achievements from '../components/Achievements'
// import { services } from '../data/services'
// import { products } from '../data/products'
// import { testimonials } from '../data/testimonials'
// import { Link, useNavigate } from 'react-router-dom'

// export default function Home() {
//   const navigate = useNavigate()

//   return (
//     <>
//       <Helmet>
//         <title>AquaaLiv | Your One-Stop Solution for RO Service and Safe Drinking Water</title>
//         <meta name="description" content="The Choice of Purity. Pure, refreshing, and naturally sourced. Every drop delivers the essence of freshness. For those who chooses nature's finest. Experience the purity, feel the difference" />
//       </Helmet>
//       <HeroSection />

//       <section className="container-p py-16">
//         <div className="mb-8 flex items-end justify-between">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Services</h2>
//             <p className="text-slate-600">Expert care across the water purifier lifecycle</p>
//           </div>
//           <Link to="/services" className="hidden sm:inline-flex btn-secondary">View All</Link>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s) => (
//             <ServiceCard
//               key={s.id}
//               title={s.title}
//               description={s.description}
//               features={s.features}
//               image={s.image}
//               cta={<Link to="/contact" className="btn-primary mt-5 w-full">Book Service</Link>}
//             />
//           ))}
//         </div>
//         <div className="sm:hidden mt-6">
//           <Link to="/services" className="btn-secondary w-full">View All Services</Link>
//         </div>
//       </section>

//       <Achievements />

//       <section className="container-p py-16">
//         <div className="mb-8 flex items-end justify-between">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Products</h2>
//             <p className="text-slate-600">Advanced RO and UV/UF systems</p>
//           </div>
//           <Link to="/products" className="hidden sm:inline-flex btn-secondary">View All</Link>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.slice(0, 4).map((p) => (
//             <ProductCard key={p.id} {...p} onEnquire={() => navigate('/contact')} />
//           ))}
//         </div>
//         <div className="sm:hidden mt-6">
//           <Link to="/products" className="btn-secondary w-full">View All Products</Link>
//         </div>
//       </section>

//       <section className="container-p py-16">
//         <div className="mb-8 text-center">
//           <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
//           <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">WHY CHOOSE AQUAALIV</h2>
//           <p className="text-slate-600">YOUR TRUSTED PARTNER IN PURE DRINING WATER</p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-8a4 4 0 0 0-4-4H7"/><path d="m7 7 3 3-3 3"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">FAST AND RELIABLE</p>
//             <p className="mt-2 text-sm text-slate-600">Quick Installations and Doorstep Service Across All Major Cities.</p>
//           </div>
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C12 22 3 17 3 10a9 9 0 1 1 18 0c0 7-9 12-9 12Z"/><path d="M12 7v6l4 2"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">PURE WATER ASSURANCE</p>
//             <p className="mt-2 text-sm text-slate-600">Our Multi-Stage RO Purification Guarantees 100% Safe Drinkin water.</p>
//           </div>
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Z"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">EXPERT TECHNICIANS</p>
//             <p className="mt-2 text-sm text-slate-600">Certified and Experienced Professionals Handle Everything With Care.</p>
//           </div>
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">. 24 / 7 SUPPORT</p>
//             <p className="mt-2 text-sm text-slate-600">We’re Always Available to Solve Issues and Schedule Maintenance.</p>
//           </div>
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v6H3z"/><path d="M3 13h18v8H3z"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">CUSTOM PLANS</p>
//             <p className="mt-2 text-sm text-slate-600">We Offer Personalized Service Packages to Meet Your Specific Needs.</p>
//           </div>
//           <div className="card transition hover:-translate-y-1 hover:shadow-lg">
//             <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//             </div>
//             <p className="text-lg font-semibold text-slate-900">CUSTOMER APPROACH</p>
//             <p className="mt-2 text-sm text-slate-600">Your Satisfaction Is Our Priority and We Improve Based on Your Feedback.</p>
//           </div>
//         </div>
//       </section>

//       <section className="container-p py-16">
//         <div className="mb-8 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Customers Say</h2>
//           <p className="text-slate-600">Trusted by homes and businesses</p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {testimonials.map((t) => (
//             <TestimonialCard key={t.id} {...t} />
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }


import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import Achievements from "../components/Achievements";

import { services } from "../data/services";
import { products } from "../data/products";
import { testimonials } from "../data/testimonials";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          AquaaLiv | Your One-Stop Solution for RO Service and Safe Drinking Water
        </title>
        <meta
          name="description"
          content="The Choice of Purity. Pure, refreshing, and naturally sourced. Every drop delivers the essence of freshness. Experience the purity, feel the difference."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= SERVICES (ONLY 4) ================= */}
      <section className="container-p py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="text-slate-600">
              Expert care across the water purifier lifecycle
            </p>
          </div>

          {/* Desktop View All */}
          <Link
            to="/services"
            className="hidden sm:inline-flex btn-secondary"
          >
            View All
          </Link>
        </div>

        {/* Show ONLY first 4 services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              features={s.features}
              image={s.image}
              cta={
                <Link
                  to="/contact"
                  className="btn-primary mt-5 w-full"
                >
                  Book Service
                </Link>
              }
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-6">
          <Link to="/services" className="btn-secondary w-full">
            View All Services
          </Link>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <Achievements />

      {/* ================= PRODUCTS ================= */}
      <section className="container-p py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Featured Products
            </h2>
            <p className="text-slate-600">
              Advanced RO and UV/UF systems
            </p>
          </div>

          <Link
            to="/products"
            className="hidden sm:inline-flex btn-secondary"
          >
            View All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              onEnquire={() => navigate("/contact")}
            />
          ))}
        </div>

        <div className="sm:hidden mt-6">
          <Link to="/products" className="btn-secondary w-full">
            View All Products
          </Link>
        </div>
      </section>

      {/* ================= WHY CHOOSE AQUAALIV ================= */}
      <section className="container-p py-16">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            WHY CHOOSE AQUAALIV
          </h2>
          <p className="text-slate-600">
            YOUR TRUSTED PARTNER IN PURE DRINKING WATER
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              title: "FAST AND RELIABLE",
              desc: "Quick installations and doorstep service across major cities.",
              icon: (
                <path d="M17 21v-8a4 4 0 0 0-4-4H7" />
              ),
            },
            {
              title: "PURE WATER ASSURANCE",
              desc: "Multi-stage RO purification guarantees safe drinking water.",
              icon: (
                <path d="M12 22C12 22 3 17 3 10a9 9 0 1 1 18 0c0 7-9 12-9 12Z" />
              ),
            },
            {
              title: "EXPERT TECHNICIANS",
              desc: "Certified professionals handle everything with care.",
              icon: (
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Z" />
              ),
            },
            {
              title: "24 / 7 SUPPORT",
              desc: "Always available to solve issues and schedule maintenance.",
              icon: (
                <circle cx="12" cy="12" r="10" />
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              <p className="text-lg font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="container-p py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            What Customers Say
          </h2>
          <p className="text-slate-600">
            Trusted by homes and businesses
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </section>
    </>
  );
}
