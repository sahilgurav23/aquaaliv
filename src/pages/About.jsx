import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | AquaaLiv Water Solution</title>
        <meta name="description" content="Learn about AquaaLiv Water Solution — established in 2012 in Pune Akurdi, delivering sustainable, high-quality water purification solutions for homes and businesses." />
      </Helmet>

      {/* Hero Section */}
      <section role="banner" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        {/* soft water-inspired glow */}
        <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-64 w-64 rounded-full bg-gradient-to-br from-sky-300 to-emerald-300 blur-3xl opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-16 sm:py-20 lg:py-24">
            {/* thin accent line + droplet chip */}
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
              <span className="inline-flex items-center gap-2 text-xs font-medium text-sky-700">
                <svg
                  className="h-4 w-4 text-sky-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10z" />
                </svg>
                Since 2012
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              About AquaaLiv Water Solution
            </h1>
            <p className="mt-3 text-lg text-slate-600">Pure Water. Healthy Living.</p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate">
            <h2>Who We Are</h2>
            <p><strong>Welcome to AquaaLiv Water Solution.</strong><br/>Situated at Pune Akurdi, AquaaLiv Water Solution was established in 2012 with the mission of providing pure and healthy water for homes, industries, and communities.</p>
            <p>We are passionate about delivering safe and eco-friendly water solutions. Our journey spans over a decade of innovation and trust. Over the years, we have grown steadily, serving thousands of happy customers.</p>
            <p>We provide a wide range of services in water filtration systems, including routine service &amp; maintenance, installation, sales, and Annual Maintenance Contracts (AMC).</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Core Values</h2>
          <p className="mt-2 text-slate-600">What guides every decision we make</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-brand-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Sustainability</h3>
            <p className="mt-2 text-sm text-slate-600">Eco-friendly products and practices in every service we offer.</p>
          </div>
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-brand-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Quality</h3>
            <p className="mt-2 text-sm text-slate-600">Only genuine parts and certified technicians for top performance.</p>
          </div>
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-brand-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l4 4 12-12"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Trust</h3>
            <p className="mt-2 text-sm text-slate-600">Transparent pricing, honest recommendations, and reliable support.</p>
          </div>
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-brand-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Responsiveness</h3>
            <p className="mt-2 text-sm text-slate-600">Rapid responses to service calls and efficient turnaround times.</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* vertical gradient accent strip on the left */}
            <div className="absolute inset-y-0 left-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-sky-400 to-emerald-400" />

            {/* soft background glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-sky-100 to-emerald-100 blur-2xl" />

            <div className="relative p-8 sm:p-12 pl-10 sm:pl-14">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-sky-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2l8 10-8 10-8-10 8-10z" />
                </svg>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="mt-2 max-w-3xl text-slate-700">
                To be a trusted leader in water purification by providing sustainable, innovative, and affordable solutions that ensure safe drinking water for every home and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-slate-700">To deliver high-quality water solutions through advanced technology, dedicated service, and customer-centric support, while promoting eco-friendly practices that protect our environment.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Customer-first approach</h3>
                <p className="mt-1 text-sm text-slate-600">Timely support, clear communication, and continuous improvement.</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-brand-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l4 8H8l4-8zm0 20l-4-8h8l-4 8z"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Innovation & quality</h3>
                <p className="mt-1 text-sm text-slate-600">Advanced purification tech and genuine parts for reliable performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
        <p className="text-sm uppercase tracking-wide text-slate-500">AquaaLiv Water Solution</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Delivering Pure Water Since 2012</h2>
      </section>
    </>
  )
}
