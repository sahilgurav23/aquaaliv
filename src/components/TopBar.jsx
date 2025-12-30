// export default function TopBar() {
//   return (
//     <div className="bg-[#001f3f] text-white text-xs sm:text-sm">
//       <div className="container-p py-2 sm:h-10 flex items-center justify-center">
//         <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">

//           {/* Row 1: Phone + Email (side by side on mobile) */}
//           <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">

//             {/* Phone */}
//             <div className="flex items-center gap-2">
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="shrink-0"
//               >
//                 <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-1.09 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.09l3 .5a2 2 0 0 1 1.72 2z" />
//               </svg>
//               <a
//                 href="tel:+919689142762"
//                 className="hover:text-sky-300 transition"
//               >
//                 +91 9689142762
//               </a>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-2">
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="shrink-0"
//               >
//                 <path d="M4 4h16v16H4z" />
//                 <polyline points="22,6 12,13 2,6" />
//               </svg>
//               <a
//                 href="mailto:aquaaliv.as@gmail.com"
//                 className="hover:text-sky-300 transition break-all"
//               >
//                 aquaaliv.as@gmail.com
//               </a>
//             </div>

//           </div>

//           {/* Row 2: Location (below on mobile) */}
//           <div className="flex items-center gap-2 sm:mt-0">
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="shrink-0"
//             >
//               <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
//               <circle cx="12" cy="10" r="3" />
//             </svg>
//             <span>Pune, India</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
export default function TopBar() {
  return (
    <div className="bg-[#001f3f] text-white text-xs sm:text-sm">
      <div className="container-p flex items-center justify-center sm:justify-between h-8 sm:h-10">

        {/* Phone + Email (ALWAYS visible) */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Phone */}
          <a
            href="tel:+919689142762"
            className="flex items-center gap-1.5 hover:text-sky-300 transition"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-1.09 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.09l3 .5a2 2 0 0 1 1.72 2z" />
            </svg>
            <span>+91 9689142762</span>
          </a>

          {/* Email */}
          <a
            href="mailto:aquaaliv.as@gmail.com"
            className="flex items-center gap-1.5 hover:text-sky-300 transition"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            <span>aquaaliv.as@gmail.com</span>
          </a>

        </div>

        {/* Location (DESKTOP ONLY) */}
        <div className="hidden sm:flex items-center gap-1.5 text-white/90">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Pune, India</span>
        </div>

      </div>
    </div>
  );
}
