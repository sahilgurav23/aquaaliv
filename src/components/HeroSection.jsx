import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="container-p py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
            <span className="h-2 w-2 rounded-full bg-brand-blue" /> Trusted Water Experts
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Pure Water. <span className="text-brand-blue">Pure Life.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
            Pure, healthy, and great-tasting water solutions for homes and businesses. Installation, repair, AMC, and expert guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">Book Free Water Check</Link>
            <Link to="/products" className="btn-secondary">Explore Products</Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> Certified Technicians</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> Genuine Filters</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> Quick Service</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> AMC Plans</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-400 to-emerald-400 opacity-10 absolute inset-0"/>
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-green grid place-items-center text-white font-bold">A</div>
                <p className="text-slate-700 font-medium">Advanced RO Purification</p>
                <p className="text-slate-500 text-sm">Clean taste • Minerals retained • 7-stage filtration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
