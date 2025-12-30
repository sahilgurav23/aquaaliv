
// import { Link } from "react-router-dom";
// import heroImage from "../assets/main_image.png";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
//       <div className="container-p py-16 sm:py-20 lg:py-24">
//         <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/95 border border-sky-100 rounded-[2rem] shadow-[0_26px_80px_rgba(15,23,42,0.20)] px-6 sm:px-10 py-10 lg:py-12">
//           <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-t from-sky-100/70 via-transparent to-transparent rounded-[2.5rem] blur-2xl" />

//           {/* Left Content */}
//           <div className="relative">
//             {/* Badge */}
//             <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
//               <span className="h-2 w-2 rounded-full bg-brand-blue" />
//               Trusted Water Experts
//             </p>

//             {/* Heading */}
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//               Your One-Stop Solution for{" "}
//               <span className="text-brand-blue">RO Services</span>
//             </h1>

//             {/* Description */}
//             <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
//               The Choice of Purity. Pure, refreshing, and naturally sourced.
//               Every drop delivers the essence of freshness. For those who choose
//               nature’s finest. Experience the purity, feel the difference.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row gap-3">
//               <Link to="/contact" className="btn-primary">
//                 Book Free Water Check
//               </Link>
//               <Link to="/products" className="btn-secondary">
//                 Explore Products
//               </Link>
//             </div>

//             {/* Features with Green Check Icon */}
//             <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
//               {[
//                 "Certified Technicians",
//                 "Genuine Filters",
//                 "Quick Service",
//                 "AMC Plans & New Sales",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <svg
//                     className="h-5 w-5 text-emerald-500 flex-shrink-0"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Image */}
//           <div className="relative h-full flex items-center justify-center">
//             <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-sky-100 via-white to-emerald-100 rounded-[2.25rem] blur-md opacity-90" />
//             <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(15,23,42,0.32)] ring-1 ring-sky-100/70 bg-slate-900/2">
//               <img
//                 src={heroImage}
//                 alt="AquaaLiv water purifier service"
//                 className="block w-full h-auto max-h-[420px] object-contain"
//                 loading="eager"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import img1 from "../assets/main_slid_image/main_image1.png";
import img2 from "../assets/main_slid_image/main_image2.png";
import img3 from "../assets/main_slid_image/main_image4.png";

const SLIDE_DELAY = 4500;

export default function HeroSection() {
  const images = [img1, img2, img3];
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, SLIDE_DELAY);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="container-p py-16 sm:py-20 lg:py-24">
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/95 border border-sky-100 rounded-[2rem] shadow-[0_26px_80px_rgba(15,23,42,0.20)] px-6 sm:px-10 py-10 lg:py-12">

          {/* glow — unchanged */}
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-t from-sky-100/70 via-transparent to-transparent rounded-[2.5rem] blur-2xl" />

          {/* LEFT CONTENT — UNTOUCHED */}
          <div className="relative">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              Trusted Water Experts
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Your One-Stop Solution for{" "}
              <span className="text-brand-blue">RO Services</span>
            </h1>

            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
              The Choice of Purity. Pure, refreshing, and naturally sourced.
              Every drop delivers the essence of freshness.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">
                Book Free Water Check
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE — SAME CONTAINER, NOW SLIDER */}
          <div className="relative h-full flex items-center justify-center">
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-sky-100 via-white to-emerald-100 rounded-[2.25rem] blur-md opacity-90" />

            <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(15,23,42,0.32)] ring-1 ring-sky-100/70 bg-white min-h-[380px] flex items-center justify-center">

              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="AquaaLiv RO Service"
                  className={`absolute w-full h-full object-contain transition-opacity duration-700 ease-in-out
                    ${i === active ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
