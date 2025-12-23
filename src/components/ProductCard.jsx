import { Link } from 'react-router-dom'

export default function ProductCard({ id, name, type, capacity, price, features = [], onEnquire, image }) {
  return (
    <div className="card h-full flex flex-col">
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
          <Link to={`/products/${id}`} aria-label={`${name} details`}>
            <img
              src={image}
              alt={`${name} purifier image`}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(name)}&font=inter`
              }}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      )}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-slate-500">{type}</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          <Link to={`/products/${id}`} className="hover:text-brand-blue transition">{name}</Link>
        </h3>
        <p className="mt-1 text-sm text-slate-600">Capacity: {capacity}</p>
        <p className="mt-3 text-xl font-bold text-slate-900">₹ {price.toLocaleString('en-IN')}</p>
        {features?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> {f}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={onEnquire} className="btn-primary mt-4">Enquire</button>
    </div>
  )
}
