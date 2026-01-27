

// import React from "react";
// import electricImg from "../assets/electric.jpg";

// export default function Hero() {
//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="relative bg-cover bg-center text-white"
//         style={{ backgroundImage: `url(${electricImg})` }}
//       >
//         <div className="absolute inset-0 bg-black/70"></div>

//         <div className="relative max-w-7xl mx-auto px-6 py-40">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             Professional Electrical <br /> Services You Can Trust
//           </h1>

//           <p className="text-gray-200 max-w-xl mb-8 text-lg">
//             Reliable, affordable and fast electrical services for homes,
//             offices and industries.
//           </p>

//           <button className="bg-red-500 px-8 py-4 rounded-md text-lg hover:bg-red-600 transition">
//             Get Free Estimation
//           </button>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
//           {[
//             "24/7 Availability",
//             "Affordable Price",
//             "100% Guarantee",
//             "Free Estimation",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-8 text-center rounded-xl shadow-md hover:shadow-xl transition"
//             >
//               <div className="text-4xl text-red-500 mb-4">⚡</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {item}
//               </h3>
//               <p className="text-gray-500 text-sm">
//                 Professional electrical solutions with guaranteed quality.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

    
//       {/* <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        
//           <div className="relative">
//             <img
//               src={electricImg}
//               alt="Electrical Work"
//               className="rounded-xl shadow-lg"
//             />

//             <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-lg p-6">
//               <h2 className="text-4xl font-bold text-red-500">15+</h2>
//               <p className="text-gray-600 text-sm">Years Experience</p>
//             </div>
//           </div>

          
//           <div>
//             <p className="text-red-500 font-semibold mb-3">WHO WE ARE</p>

//             <h2 className="text-4xl font-bold text-gray-800 mb-6">
//               We get the lights on fast and for a good price.
//             </h2>

//             <p className="text-gray-500 mb-4">
//               We are certified electricians providing safe, reliable and
//               affordable electrical services for residential and commercial
//               clients.
//             </p>

//             <p className="text-gray-500 mb-6">
//               From wiring and maintenance to industrial power systems, we do it
//               all with precision and care.
//             </p>

//             <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
//               Discover More
//             </button>
//           </div>

//         </div>
//       </section> */}


   
//     </>
//   );
// }




import React from "react";
import { useGetPublicHeroQuery } from "../redux/apis/heroApi";

export default function Hero() {
  const { data: hero, isLoading } = useGetPublicHeroQuery();

  if (isLoading || !hero) return null;

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-44">
        <div className="max-w-2xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {hero.title}
          </h1>

          {hero.subtitle && (
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              {hero.subtitle}
            </p>
          )}

          <div className="flex items-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-md text-base font-semibold">
              {hero.buttonText}
            </button>

            {/* Optional secondary CTA (looks premium even if not clickable) */}
            <span className="text-sm text-gray-300">
              Trusted by 500+ clients
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}





// import React from "react";
// import { useGetPublicHeroQuery } from "../redux/apis/heroApi";

// export default function Hero() {
//   const { data: hero, isLoading } = useGetPublicHeroQuery();

//   if (isLoading || !hero) return null;

//   return (
//     <section
//       className="relative bg-cover bg-center text-white"
//       style={{ backgroundImage: `url(${hero.backgroundImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-32 lg:py-36">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
//           {hero.title}
//         </h1>

//         {hero.subtitle && (
//           <p className="text-gray-200 max-w-xl mb-7 text-base sm:text-lg">
//             {hero.subtitle}
//           </p>
//         )}

//         <button className="bg-red-500 px-7 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-red-600 transition">
//           {hero.buttonText}
//         </button>
//       </div>
//     </section>
//   );
// }
