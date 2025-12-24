import { Link } from "react-router-dom";
import heroImage from "../assets/Second.jpeg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="container-p py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Trusted Water Experts
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="text-brand-blue">Your One-Stop Solution for RO Service and Safe Drinking Water</span>
          </h1>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
            The Choice of Purity. Pure, refreshing, and naturally sourced. Every drop delivers the essence of freshness. For those who choose nature’s finest. Experience the purity, feel the difference
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Book Free Water Check
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Certified Technicians
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Genuine Filters
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Quick Service
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              AMC Plans
            </li>
          </ul>
        </div>

        {/* Right Image (NO CARD / NO BORDER) */}
        <div className="relative">
          <img
            src={heroImage}
            alt="AquaaLiv water purifier service"
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-2xl"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}
