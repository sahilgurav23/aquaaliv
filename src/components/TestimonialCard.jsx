export default function TestimonialCard({ name, role, text, description, rating }) {
  const body = text || description || "";

  return (
    <div className="card h-full">
      {typeof rating === "number" && rating > 0 && (
        <div className="mb-2 flex items-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 ${
                rating >= star ? "text-yellow-400" : "text-slate-300"
              }`}
              fill={rating >= star ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l2.39 6.95H22l-5.45 3.96L18.9 20 12 15.9 5.1 20l2.35-7.09L2 8.95h7.61z" />
            </svg>
          ))}
        </div>
      )}
      <p className="text-slate-700">“{body}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white grid place-items-center font-semibold">
          {name?.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
