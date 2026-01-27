// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useGetServiceBySlugQuery } from "../redux/apis/serviceApi";


// export default function ServiceDetails() {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const { data: service, isLoading, isError } =
//     useGetServiceBySlugQuery(slug);

//   if (isLoading) return null;

//   if (isError || !service) {
//     return (
//       <p className="text-center py-32 text-gray-500">
//         Service not found
//       </p>
//     );
//   }

//   return (
//     <>
//       {/* HEADER */}
//       <section className="bg-gray-50 py-24">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <p className="text-red-500 font-semibold tracking-widest mb-3">
//             OUR SERVICES
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             {service.title}
//           </h1>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             {service.shortDesc}
//           </p>
//         </div>
//       </section>

//       {/* DETAILS */}
//       <section className="bg-white py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <p className="text-gray-600 text-lg leading-relaxed mb-12">
//             {service.shortDesc}
//           </p>

//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-red-500 text-white px-10 py-4 rounded-md font-semibold hover:bg-red-600 transition"
//           >
//             Get Free Estimation
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }





import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetServiceBySlugQuery } from "../redux/apis/serviceApi";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: service, isLoading, isError } =
    useGetServiceBySlugQuery(slug);

  if (isLoading) return null;

  if (isError || !service) {
    return (
      <p className="text-center py-32 text-gray-500">
        Service not found
      </p>
    );
  }

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in-left">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 mb-6 transition"
          >
            ← Back
          </button>

          <p className="text-red-500 font-semibold tracking-widest mb-3 uppercase">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="bg-white dark:bg-gray-900 py-16 transition-colors">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
            {service.shortDesc}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="
                bg-red-500 hover:bg-red-600
                text-white
                px-8 py-3
                rounded-md
                font-semibold
                transition
              "
            >
              Get Free Estimation
            </button>

            <button
              onClick={() => navigate(-1)}
              className="
                border border-gray-300 dark:border-gray-600
                text-gray-700 dark:text-gray-300
                px-8 py-3
                rounded-md
                font-medium
                hover:border-red-500 hover:text-red-500
                transition
              "
            >
              Go Back
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
