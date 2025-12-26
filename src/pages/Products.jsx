import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import { productSections } from '../data/productSections'

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | AquaaLiv</title>
        <meta name="description" content="Premium water purifier brands and systems by AquaaLiv. Explore curated categories including Home RO, Under-sink, Commercial & Industrial RO, UV plants, water softeners, dispensers, and treatment plants." />
      </Helmet>
      {/* Intro heading section */}
      <section className="container-p pt-12 sm:pt-16 pb-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Premium Water Purifier Brands</h1>
          <p className="mt-3 text-slate-600">Explore our curated collection of trusted water purification solutions, organized by categories for easy discovery.</p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {productSections.map((s) => (
            <a key={s.key} href={`#${s.key}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">{s.title}</a>
          ))}
        </div>
      </section>

      {/* Sections */}
      {productSections.map((section) => (
        <section key={section.key} id={section.key} className="container-p py-10 sm:py-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{section.title}</h2>
            {section.subtitle && <p className="mt-2 text-slate-600">{section.subtitle}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section.items.map((p, idx) => (
              <ProductCard key={(p.id || section.key) + '-' + idx} {...p} onEnquire={() => (window.location.href = '/contact')} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
