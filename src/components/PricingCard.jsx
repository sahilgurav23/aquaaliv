export default function PricingCard({ name, features = [], highlight = false }) {
  return (
    <div className={`card h-full ${highlight ? 'ring-2 ring-brand-blue' : ''}`}>
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      {/* <p className="mt-1 text-3xl font-extrabold text-slate-900">₹ {price.toLocaleString('en-IN')}</p> */}
      {features?.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-slate-600">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> {f}</li>
          ))}
        </ul>
      )}
      <button className="btn-primary mt-5 w-full">Choose Plan</button>
    </div>
  )
}
