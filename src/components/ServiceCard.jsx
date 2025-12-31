// export default function ServiceCard({ title, description, features = [], cta, image }) {
//   return (
//     <div className="card h-full flex flex-col">
//       {image && (
//         <div className="mb-4 overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
//           <img
//             src={image}
//             alt={`${title} service illustration`}
//             loading="lazy"
//             decoding="async"
//             referrerPolicy="no-referrer"
//             onError={(e) => {
//               e.currentTarget.onerror = null
//               e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(title)}&font=inter`
//             }}
//             className="h-full w-full object-cover"
//           />
//         </div>
//       )}
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
//         <p className="mt-2 text-sm text-slate-600">{description}</p>
//         {features?.length > 0 && (
//           <ul className="mt-3 space-y-1 text-sm text-slate-600">
//             {features.map((f, i) => (
//               <li key={i} className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> {f}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {cta}
//     </div>
//   )
// }


export default function ServiceCard({
  title,
  description,
  features = [],
  cta,
  image,
}) {
  return (
    <div className="card h-full flex flex-col">
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
          <img
            src={image}
            alt={`${title} service illustration`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(
                title
              )}&font=inter`;
            }}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          {description}
        </p>

        {/* ✅ FEATURES WITH GREEN TICK */}
        {features?.length > 0 && (
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                {/* GREEN TICK ICON */}
                <svg
                  className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cta}
    </div>
  );
}
