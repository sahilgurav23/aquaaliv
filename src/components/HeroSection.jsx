// import { Link } from "react-router-dom";
// import heroImage from "../assets/main_image.png";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
//       <div className="container-p py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">

//         {/* Left Content */}
//         <div>
//           {/* Badge */}
//           <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
//             <span className="h-2 w-2 rounded-full bg-brand-blue" />
//             Trusted Water Experts
//           </p>

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//             Your One-Stop Solution for{" "}
//             <span className="text-brand-blue">RO Services</span>
//           </h1>

//           {/* Description */}
//           <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
//             The Choice of Purity. Pure, refreshing, and naturally sourced.
//             Every drop delivers the essence of freshness. For those who choose
//             nature’s finest. Experience the purity, feel the difference.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-3">
//             <Link to="/contact" className="btn-primary">
//               Book Free Water Check
//             </Link>
//             <Link to="/products" className="btn-secondary">
//               Explore Products
//             </Link>
//           </div>

//           {/* Features */}
//           <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
//               Certified Technicians
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
//               Genuine Filters
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
//               Quick Service
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
//               AMC Plans & New Sales
//             </li>
//           </ul>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <img
//             src={heroImage}
//             alt="AquaaLiv water purifier service"
//             className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-2xl shadow-lg"
//             loading="eager"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import heroImage from "../assets/main_image.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="container-p py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          {/* Badge */}
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Trusted Water Experts
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Your One-Stop Solution for{" "}
            <span className="text-brand-blue">RO Services</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
            The Choice of Purity. Pure, refreshing, and naturally sourced.
            Every drop delivers the essence of freshness. For those who choose
            nature’s finest. Experience the purity, feel the difference.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Book Free Water Check
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>

          {/* Features with Green Check Icon */}
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
            {[
              "Certified Technicians",
              "Genuine Filters",
              "Quick Service",
              "AMC Plans & New Sales",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={heroImage}
            alt="AquaaLiv water purifier service"
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-2xl shadow-lg"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}
