// import { Link } from 'react-router-dom'

// export default function ProductCard({ id, name, type, capacity, price, features = [], onEnquire, image, linkToDetail = true }) {
//   return (
//     <div className="card h-full flex flex-col transition hover:shadow-md hover:-translate-y-0.5">
//       {image && (
//         <div className="mb-4 overflow-hidden rounded-xl aspect-[4/3] bg-slate-50 grid place-items-center p-4">
//           {linkToDetail && id ? (
//             <Link to={`/products/${id}`} aria-label={`${name} details`} className="block h-full w-full">
//               <img
//                 src={image}
//                 alt={`${name} purifier image`}
//                 loading="lazy"
//                 decoding="async"
//                 onError={(e) => {
//                   e.currentTarget.onerror = null
//                   e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(name)}&font=inter`
//                 }}
//                 className="h-full w-full object-contain"
//               />
//             </Link>
//           ) : (
//             <img
//               src={image}
//               alt={`${name} purifier image`}
//               loading="lazy"
//               decoding="async"
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(name)}&font=inter`
//               }}
//               className="h-full w-full object-contain"
//             />
//           )}
//         </div>
//       )}
//       <div className="flex-1">
//         <p className="text-xs uppercase tracking-wide text-slate-500">{type}</p>
//         <h3 className="mt-1 text-lg font-semibold text-slate-900">
//           {linkToDetail && id ? (
//             <Link to={`/products/${id}`} className="hover:text-brand-blue transition">{name}</Link>
//           ) : (
//             <span>{name}</span>
//           )}
//         </h3>
//         {capacity && (
//           <p className="mt-1 text-sm text-slate-600">Capacity: {capacity}</p>
//         )}
//         {typeof price === 'number' && !Number.isNaN(price) && (
//           <p className="mt-3 text-xl font-bold text-slate-900">₹ {price.toLocaleString('en-IN')}</p>
//         )}
//         {features?.length > 0 && (
//           <ul className="mt-3 space-y-1 text-sm text-slate-600">
//             {features.slice(0, 4).map((f, i) => (
//               <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue"/> {f}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <button onClick={onEnquire} className="btn-primary mt-4">Enquire</button>
//     </div>
//   )
// }


import { Link } from 'react-router-dom'

export default function ProductCard({
  id,
  name,
  type,
  capacity,
  price,
  features = [],
  onEnquire,
  image,
  linkToDetail = true,
}) {
  return (
    <div className="card h-full flex flex-col transition hover:shadow-md hover:-translate-y-0.5">
      
      {/* IMAGE CONTAINER – FIXED */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center h-[220px] p-4">
          {linkToDetail && id ? (
            <Link
              to={`/products/${id}`}
              aria-label={`${name} details`}
              className="flex items-center justify-center w-full h-full"
            >
              <img
                src={image}
                alt={`${name} purifier image`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(name)}`
                }}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          ) : (
            <img
              src={image}
              alt={`${name} purifier image`}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(name)}`
              }}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-slate-500">{type}</p>

        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          {linkToDetail && id ? (
            <Link to={`/products/${id}`} className="hover:text-brand-blue transition">
              {name}
            </Link>
          ) : (
            <span>{name}</span>
          )}
        </h3>

        {capacity && (
          <p className="mt-1 text-sm text-slate-600">Capacity: {capacity}</p>
        )}

        {typeof price === 'number' && !Number.isNaN(price) && (
          <p className="mt-3 text-xl font-bold text-slate-900">
            ₹ {price.toLocaleString('en-IN')}
          </p>
        )}

        {features?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={onEnquire} className="btn-primary mt-4">
        Enquire
      </button>
    </div>
  )
}
