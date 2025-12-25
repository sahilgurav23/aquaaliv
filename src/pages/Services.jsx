import { Helmet } from 'react-helmet-async'
import ServiceCard from '../components/ServiceCard'
import PricingCard from '../components/PricingCard'
import { services } from '../data/services'
import { pricing } from '../data/pricing'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | AquaaLiv</title>
        <meta name="description" content="RO installation, repair & maintenance, AMC plans, and genuine filter replacement by AquaaLiv." />
      </Helmet>
      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
          <p className="mt-2 text-slate-600">End-to-end care for your water purifier</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              features={s.features}
              image={s.image}
              cta={<Link to="/contact" className="btn-primary mt-5 w-full">Book Service</Link>}
            />
          ))}
        </div>
      </section>

      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">TRANSPARENT AMC PLANS</h2>
          <p className="mt-2 text-slate-600">Affordable AMC plans for peace of mind</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <PricingCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-primary">Enquire About AMC</Link>
        </div>
      </section>
    </>
  )
}
