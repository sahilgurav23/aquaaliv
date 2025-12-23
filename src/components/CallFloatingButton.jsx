export default function CallFloatingButton({ phoneNumber = '+919689102762' }) {
  const href = `tel:${phoneNumber}`
  return (
    <a
      href={href}
      aria-label="Call AquaaLiv"
      className="fixed bottom-6 right-24 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg hover:scale-105 transition z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.14a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  )
}
