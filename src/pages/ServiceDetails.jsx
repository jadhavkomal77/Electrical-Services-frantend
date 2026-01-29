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
//       {/* ================= HERO ================= */}
//       <section className="bg-white py-24">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <span className="inline-block mb-4 px-4 py-1 rounded-full border text-sm">
//             Our Services
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             {service.title}
//           </h1>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             {service.shortDesc}
//           </p>

//           <div className="mt-8 flex justify-center gap-4">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
//             >
//               Get Custom Quote →
//             </button>

//             <button
//               onClick={() => navigate("/services")}
//               className="border px-6 py-3 rounded-md"
//             >
//               View All Services
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE ================= */}
//       {service.whyChoose?.length > 0 && (
//         <section className="bg-gray-50 py-20">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-3">
//               Why Choose {service.title}?
//             </h2>
//             <p className="text-center text-gray-600 mb-12">
//               We combine expertise with innovation to deliver the best results.
//             </p>

//             <div className="grid md:grid-cols-4 gap-6">
//               {service.whyChoose.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-6 rounded-xl shadow text-center"
//                 >
//                   <div className="text-3xl mb-3">{item.icon}</div>
//                   <h3 className="font-semibold mb-2">{item.title}</h3>
//                   <p className="text-gray-500 text-sm">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ================= PROCESS ================= */}
//       {service.process?.length > 0 && (
//         <section className="bg-white py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-3">
//               Our Development Process
//             </h2>
//             <p className="text-gray-600 mb-12">
//               A proven methodology for successful delivery.
//             </p>

//             <div className="grid md:grid-cols-4 gap-6">
//               {service.process.map((step, i) => (
//                 <div
//                   key={i}
//                   className="bg-gray-50 p-6 rounded-xl shadow"
//                 >
//                   <div className="text-2xl font-bold mb-2">
//                     {String(step.step).padStart(2, "0")}
//                   </div>
//                   <h3 className="font-semibold mb-2">{step.title}</h3>
//                   <p className="text-sm text-gray-500">{step.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ================= TECHNOLOGIES ================= */}
//       {service.technologies?.length > 0 && (
//         <section className="bg-gray-50 py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold mb-3">
//               Technologies We Use
//             </h2>
//             <p className="text-gray-600 mb-12">
//               Modern tools for robust and scalable solutions.
//             </p>

//             <div className="grid md:grid-cols-4 gap-6">
//               {service.technologies.map((tech, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-6 rounded-xl shadow"
//                 >
//                   <h3 className="font-semibold">{tech}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ================= PROJECTS ================= */}
//       {service.projects?.length > 0 && (
//         <section className="bg-white py-20">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               Featured Projects
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {service.projects.map((p, i) => (
//                 <div
//                   key={i}
//                   className="bg-gray-50 rounded-xl overflow-hidden shadow"
//                 >
//                   {p.image && (
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="h-48 w-full object-cover"
//                     />
//                   )}
//                   <div className="p-5">
//                     <h3 className="font-semibold mb-1">{p.title}</h3>
//                     <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
//                     <div className="flex flex-wrap gap-2 text-xs">
//                       {p.tech?.map((t, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2 py-1 bg-gray-200 rounded"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ================= CTA ================= */}
//       <section className="bg-blue-50 py-20">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Build Your {service.title}?
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Let's discuss your project requirements and create a custom solution.
//           </p>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
//             >
//               Start Your Project
//             </button>
//             <button
//               onClick={() => navigate("/services")}
//               className="border px-6 py-3 rounded-md"
//             >
//               View Portfolio
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPublicServiceBySlugQuery } from "../redux/apis/serviceApi";
// import { useGetServiceBySlugQuery } from "../redux/apis/serviceApi";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: service, isLoading, isError } =
    useGetPublicServiceBySlugQuery(slug);

  if (isLoading) return <p className="p-10 text-center">Loading...</p>;
  if (isError || !service)
    return <p className="p-10 text-center text-red-500">Service not found</p>;

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="text-4xl mb-4">{service.icon || "⚡"}</div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {service.longDesc || service.shortDesc}
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      {service.whyChoose?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Why Choose This Service
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {service.whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 shadow animate-scale-in"
                >
                  <div className="text-3xl mb-3">{item.icon || "✔"}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROCESS ================= */}
      {service.process?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Process
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow animate-fade-in-up"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= TECHNOLOGIES ================= */}
      {service.technologies?.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Technologies</h2>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROJECTS ================= */}
      {service.projects?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Related Projects
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {service.projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow overflow-hidden animate-fade-in-up"
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-5">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-200 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-black">
          <h2 className="text-3xl font-bold mb-4">
            Interested in this service?
          </h2>
          <p className="text-black mb-8">
            Contact us today for expert assistance and free consultation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-md font-semibold transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}
