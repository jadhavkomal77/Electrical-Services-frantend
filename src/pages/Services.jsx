

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Services() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: "electrical-installation",
//       title: "Electrical Installation",
//       desc:
//         "Professional electrical installation services for residential and commercial buildings.",
//     },
//     {
//       id: "wiring-rewiring",
//       title: "Wiring & Rewiring",
//       desc:
//         "Safe and efficient wiring solutions using high-quality materials and standards.",
//     },
//     {
//       id: "lighting-solutions",
//       title: "Lighting Solutions",
//       desc:
//         "Modern and energy-efficient lighting solutions for indoor and outdoor spaces.",
//     },
//     {
//       id: "panel-breaker",
//       title: "Panel & Breaker Repair",
//       desc:
//         "Electrical panel inspection, upgrades and breaker fault repairs.",
//     },
//     {
//       id: "industrial-electrical",
//       title: "Industrial Electrical Work",
//       desc:
//         "Industrial-grade electrical services with strict safety compliance.",
//     },
//     {
//       id: "maintenance-inspection",
//       title: "Maintenance & Inspection",
//       desc:
//         "Routine electrical maintenance and detailed safety inspections.",
//     },
//   ];

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <section className="bg-white py-24">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-red-500 font-semibold tracking-widest mb-3">
//             OUR SERVICES
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Professional Electrical Services
//           </h1>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Reliable and affordable electrical solutions delivered by certified
//             professionals with years of experience.
//           </p>
//         </div>
//       </section>

//       {/* ================= SERVICES GRID ================= */}
//       <section className="bg-gray-50 py-24">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="
//                 bg-white 
//                 rounded-xl 
//                 p-10 
//                 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//                 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
//                 transition
//               "
//             >
//               <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-2xl mb-6">
//                 ⚡
//               </div>

//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed mb-8">
//                 {service.desc}
//               </p>

//               <button
//                 onClick={() => navigate(`/services/${service.id}`)}
//                 className="text-red-500 font-semibold hover:underline"
//               >
//                 View Details →
//               </button>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-white py-24">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Looking for Reliable Electrical Service?
//           </h2>

//           <p className="text-gray-600 text-lg mb-10">
//             Get in touch with our expert team today for a free consultation and quotation.
//           </p>

//           <button
//             onClick={() => navigate("/contact")}
//             className="
//               bg-red-500 
//               text-white 
//               px-10 
//               py-4 
//               rounded-md 
//               font-semibold 
//               shadow-md 
//               hover:bg-red-600 
//               hover:shadow-lg 
//               transition
//             "
//           >
//             Get Free Estimation
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }





import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetPublicServicesQuery } from "../redux/apis/serviceApi";

export default function Services() {
  const navigate = useNavigate();
  const { data: services, isLoading } = useGetPublicServicesQuery();

  if (isLoading) return null;

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center animate-fade-in-left">
          <p className="text-red-500 font-semibold tracking-widest mb-2 uppercase">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Electrical Services
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reliable, safe and affordable electrical solutions delivered by
            certified professionals.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services?.map((service, index) => (
            <div
              key={service._id}
              className="
                bg-white
                rounded-2xl
                p-8
                border border-gray-100
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                transition
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* ICON */}
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center text-xl mb-5">
                {service.icon || "⚡"}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.shortDesc}
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate(`/services/${service.slug}`)}
                className="text-red-500 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Details <span>→</span>
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for Reliable Electrical Service?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Get in touch with our expert team today for a free consultation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-md font-semibold shadow-lg transition"
          >
            Get Free Estimation
          </button>
        </div>
      </section>
    </>
  );
}
