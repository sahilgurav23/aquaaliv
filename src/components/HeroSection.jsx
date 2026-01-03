
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

// import img1 from "../assets/main_slid_image/main_image1.png";
// import img2 from "../assets/main_slid_image/main_image2.png";
// import img3 from "../assets/main_slid_image/main_image4.png";

// const SLIDE_DELAY = 4500;

// export default function HeroSection() {
//   const images = [img1, img2, img3];
//   const [active, setActive] = useState(0);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setActive((prev) => (prev + 1) % images.length);
//     }, SLIDE_DELAY);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
//       <div className="container-p py-16 sm:py-20 lg:py-24">
//         <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/95 border border-sky-100 rounded-[2rem] shadow-[0_26px_80px_rgba(15,23,42,0.20)] px-6 sm:px-10 py-10 lg:py-12">

//           {/* glow — unchanged */}
//           <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-t from-sky-100/70 via-transparent to-transparent rounded-[2.5rem] blur-2xl" />

//           {/* LEFT CONTENT — UNTOUCHED */}
//           <div className="relative">
//             <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
//               <span className="h-2 w-2 rounded-full bg-brand-blue" />
//               Trusted Water Experts
//             </p>

//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//               Your One-Stop Solution for{" "}
//               <span className="text-brand-blue">RO Services</span>
//             </h1>

//             <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-prose">
//               The Choice of Purity. Pure, refreshing, and naturally sourced.
//               Every drop delivers the essence of freshness.
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-3">
//               <Link to="/contact" className="btn-primary">
//                 Book Free Water Check
//               </Link>
//               <Link to="/products" className="btn-secondary">
//                 Explore Products
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT IMAGE — SAME CONTAINER, NOW SLIDER */}
//           <div className="relative h-full flex items-center justify-center">
//             <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-sky-100 via-white to-emerald-100 rounded-[2.25rem] blur-md opacity-90" />

//             <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(15,23,42,0.32)] ring-1 ring-sky-100/70 bg-white min-h-[380px] flex items-center justify-center">

//               {images.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt="AquaaLiv RO Service"
//                   className={`absolute w-full h-full object-contain transition-opacity duration-700 ease-in-out
//                     ${i === active ? "opacity-100" : "opacity-0"}
//                   `}
//                 />
//               ))}

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

const WATER_DROP_DEFAULT_CONFIG = {
  dropFrequency: 0.4,
  minDropSizeVw: 0.6,
  maxDropSizeVw: 1.2,
  minDurationMs: 2200,
  maxDurationMs: 4200,
  color: "rgba(56,189,248,0.65)",
};

/**
 * WaterDropsOverlay renders animated water drops within the hero section.
 *
 * It relies on lightweight DOM nodes plus CSS keyframes for the motion, while
 * requestAnimationFrame is used only to schedule new drops based on a
 * configurable frequency. This keeps updates efficient and GPU-accelerated.
 *
 * The overlay is fully contained by its parent section and uses relative units
 * (vw, vh, %) so that the visuals scale naturally across screen sizes.
 * Graceful degradation is applied by skipping animation when reduced motion
 * is requested or requestAnimationFrame is unavailable.
 */
function WaterDropsOverlay({ config, hovered }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (
      typeof window === "undefined" ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      return;
    }

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    const settings = {
      dropFrequency:
        config?.dropFrequency ?? WATER_DROP_DEFAULT_CONFIG.dropFrequency,
      minDropSizeVw:
        config?.minDropSizeVw ?? WATER_DROP_DEFAULT_CONFIG.minDropSizeVw,
      maxDropSizeVw:
        config?.maxDropSizeVw ?? WATER_DROP_DEFAULT_CONFIG.maxDropSizeVw,
      minDurationMs:
        config?.minDurationMs ?? WATER_DROP_DEFAULT_CONFIG.minDurationMs,
      maxDurationMs:
        config?.maxDurationMs ?? WATER_DROP_DEFAULT_CONFIG.maxDurationMs,
      color: config?.color ?? WATER_DROP_DEFAULT_CONFIG.color,
    };

    let frameId;
    let lastTime = performance.now();
    let accumulator = 0;
    let destroyed = false;

    const hoverBoost = hovered ? 1.4 : 1;
    const baseFrequency = Math.max(
      settings.dropFrequency * hoverBoost,
      0.05
    );

    /**
     * createDrop injects a single drop element with randomized position,
     * size, and animation duration. Each drop removes itself once its
     * CSS animation completes to avoid leaking DOM nodes.
     */
    function createDrop() {
      if (!container) return;

      const drop = document.createElement("div");
      drop.className = "water-drop";

      const sizeVw =
        settings.minDropSizeVw +
        Math.random() *
          (settings.maxDropSizeVw - settings.minDropSizeVw);
      const leftPercent = Math.random() * 100;
      const durationMs =
        settings.minDurationMs +
        Math.random() *
          (settings.maxDurationMs - settings.minDurationMs);

      drop.style.width = `${sizeVw}vw`;
      drop.style.height = `${sizeVw * 1.6}vw`;
      drop.style.left = `${leftPercent}%`;
      drop.style.top = "-12vh";
      drop.style.animationDuration = `${durationMs}ms`;
      drop.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), ${settings.color})`;

      if (hovered) {
        drop.style.filter = "brightness(1.08)";
      }

      const handleAnimationEnd = () => {
        drop.removeEventListener("animationend", handleAnimationEnd);
        if (drop.parentElement === container) {
          container.removeChild(drop);
        }
      };

      drop.addEventListener("animationend", handleAnimationEnd);

      container.appendChild(drop);
    }

    /**
     * animationLoop converts requestAnimationFrame timestamps into discrete
     * drop creation events based on the configured frequency. Work per frame
     * is minimal and scales with the number of visible drops.
     */
    function animationLoop(now) {
      if (destroyed) return;

      const delta = now - lastTime;
      lastTime = now;
      accumulator += delta;

      const intervalMs = 1000 / baseFrequency;

      while (accumulator >= intervalMs) {
        accumulator -= intervalMs;
        createDrop();
      }

      frameId = window.requestAnimationFrame(animationLoop);
    }

    frameId = window.requestAnimationFrame(animationLoop);

    return () => {
      destroyed = true;
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [config, hovered]);

  return <div ref={containerRef} className="water-drops-overlay" />;
}

export default function HeroSection() {
  const images = [img1, img2, img3];
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, SLIDE_DELAY);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WaterDropsOverlay
        config={WATER_DROP_DEFAULT_CONFIG}
        hovered={isHovered}
      />
      <div className="container-p py-16 sm:py-20 lg:py-24">
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/95 border border-sky-100 rounded-[2rem] shadow-[0_26px_80px_rgba(15,23,42,0.20)] px-6 sm:px-10 py-10 lg:py-12">

          {/* Glow */}
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-t from-sky-100/70 via-transparent to-transparent rounded-[2.5rem] blur-2xl" />

          {/* LEFT CONTENT */}
          <div className="relative">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              Trusted Water Experts
            </p>

            {/* ✅ UPDATED HEADING */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Smart & Reliable{" "}
              <span className="text-brand-blue">
                RO Water Solutions
              </span>
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

          {/* RIGHT IMAGE SLIDER */}
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

