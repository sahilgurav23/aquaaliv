import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import TestimonialCard from '../components/TestimonialCard'
import { services } from '../data/services'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>AquaaLiv | Pure Water. Pure Life.</title>
        <meta name="description" content="The Choice of Purity. Pure, refreshing, and naturally sourced. Every drop delivers the essence of freshness. For those who chooses nature's finest. Experience the purity, feel the difference" />
      </Helmet>
      <HeroSection />

      <section className="container-p py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600">Expert care across the water purifier lifecycle</p>
          </div>
          <Link to="/services" className="hidden sm:inline-flex btn-secondary">View All</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} title={s.title} description={s.description} features={s.features} cta={<Link to="/contact" className="btn-primary mt-5 w-full">Book Service</Link>} />
          ))}
        </div>
        <div className="sm:hidden mt-6">
          <Link to="/services" className="btn-secondary w-full">View All Services</Link>
        </div>
      </section>

      <section className="container-p py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-600">Advanced RO and UV/UF systems</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex btn-secondary">View All</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} {...p} onEnquire={() => navigate('/contact')} />
          ))}
        </div>
        <div className="sm:hidden mt-6">
          <Link to="/products" className="btn-secondary w-full">View All Products</Link>
        </div>
      </section>

      <section className="container-p py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">WHY CHOOSE AQUAALIV</h2>
          <p className="text-slate-600">YOUR TRUSTED PARTNER IN PURE DRINING WATER</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">FAST AND RELIABLE</p>
            <p className="mt-2 text-sm text-slate-600">Quick Installations and Doorstep Service Across All Major Cities.</p>
          </div>
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">PURE WATER ASSURANCE</p>
            <p className="mt-2 text-sm text-slate-600">Our Multi-Stage RO Purification Guarantees 100% Safe Drinkin water.</p>
          </div>
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">EXPERT TECHNICIANS</p>
            <p className="mt-2 text-sm text-slate-600">Certified and Experienced Professionals Handle Everything With Care.</p>
          </div>
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">. 24 / 7 SUPPORT</p>
            <p className="mt-2 text-sm text-slate-600">We’re Always Available to Solve Issues and Schedule Maintenance.</p>
          </div>
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">CUSTOM PLANS</p>
            <p className="mt-2 text-sm text-slate-600">We Offer Personalized Service Packages to Meet Your Specific Needs.</p>
          </div>
          <div className="card">
            <p className="text-lg font-semibold text-slate-900">CUSTOMER APPROACH</p>
            <p className="mt-2 text-sm text-slate-600">Your Satisfaction Is Our Priority and We Improve Based on Your Feedback.</p>
          </div>
        </div>
      </section>

      <section className="container-p py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Customers Say</h2>
          <p className="text-slate-600">Trusted by homes and businesses</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </section>
    </>
  )
}
