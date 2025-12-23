import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function useCountUp(target, active, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const startTime = performance.now()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = prefersReduced ? 0 : duration

    const step = (now) => {
      const elapsed = Math.min(now - startTime, total)
      const progress = total === 0 ? 1 : elapsed / total
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (target - start) * eased)
      setValue(current)
      if (elapsed < total) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, active, duration])
  return value
}

function AchievementCard({ icon, label, value, suffix, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="card text-center transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue">
        {icon}
      </div>
      <div className="text-3xl font-extrabold text-slate-900">
        {count.toLocaleString()}<span className="text-brand-blue">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  )
}

export default function Achievements() {
  const items = [
    { label: 'Years of Experience', value: 12, suffix: '+', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17V3m0 0l-4 4m4-4l4 4"/></svg>
    )},
    { label: 'Happy Customers', value: 5000, suffix: '+', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )},
    { label: 'Projects Completed', value: 3000, suffix: '+', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 21h10"/></svg>
    )},
    { label: 'Service Coverage (Cities)', value: 12, suffix: '+', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )},
  ]

  const [containerRef, inView] = useInView(0.3)

  return (
    <section className="container-p py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Achievements</h2>
        <p className="text-slate-600">Numbers that reflect trust and consistency</p>
      </div>
      <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <AchievementCard key={it.label} {...it} active={inView} />
        ))}
      </div>
    </section>
  )
}
