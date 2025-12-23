import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <section className="container-p py-16">
        <div className="card text-center">
          <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
          <p className="mt-2 text-slate-600">The product you are looking for does not exist.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link to="/products" className="btn-secondary">Back to Products</Link>
            <button className="btn-primary" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
        </div>
      </section>
    )
  }

  const { name, type, capacity, price, features = [], image } = product

  return (
    <>
      <Helmet>
        <title>{name} | AquaaLiv</title>
        <meta name="description" content={`${name} - ${type} purifier, capacity ${capacity}. Key features and pricing by AquaaLiv.`} />
      </Helmet>
      <section className="container-p py-12 sm:py-16">
        <nav className="text-sm text-slate-600 mb-6">
          <Link to="/products" className="hover:underline">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            {image ? (
              <img
                src={image}
                alt={`${name} purifier image`}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(name)}&font=inter`
                }}
              />
            ) : (
              <div className="h-[320px] sm:h-[420px] grid place-items-center bg-slate-100 text-slate-500">No image</div>
            )}
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{name}</h1>
            <p className="mt-1 text-slate-600">{type} • Capacity: {capacity}</p>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">₹ {price.toLocaleString('en-IN')}</p>

            {features?.length > 0 && (
              <ul className="mt-5 space-y-2 text-slate-700 text-sm">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> {f}</li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn-primary" onClick={() => navigate('/contact')}>Enquire Now</button>
              <a href={`tel:+919689102762`} className="btn-secondary">Call to Order</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
