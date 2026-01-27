
// import React from "react";

// export default function Contact() {
//   return (
//     <section className="bg-gray-50 py-28">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

//         {/* ================= LEFT CONTENT ================= */}
//         <div>
//           <p className="text-red-500 font-semibold tracking-widest mb-4">
//             WHY CHOOSE US
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
//             The Best Solutions <br /> For Your Electrical Needs
//           </h2>

//           <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
//             Rihan Power Enterprises is an ISO 9001:2015 certified company
//             delivering reliable, customized and cost-effective electrical
//             solutions from concept to commissioning for industrial,
//             commercial and infrastructure projects.
//           </p>

//           {/* FEATURES */}
//           <div className="space-y-8">
//             <div className="flex gap-5">
//               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
//                 ⚡
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   ISO 9001:2015 Certified
//                 </h4>
//                 <p className="text-gray-500 text-sm">
//                   Quality-driven processes with strict testing standards at
//                   every stage of manufacturing.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
//                 🏭
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   Concept to Commissioning
//                 </h4>
//                 <p className="text-gray-500 text-sm">
//                   Complete electrical design, manufacturing, installation and
//                   commissioning solutions under one roof.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
//                 🛠️
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">
//                   Proven Industry Expertise
//                 </h4>
//                 <p className="text-gray-500 text-sm">
//                   Trusted by industrial, commercial and infrastructure clients
//                   across multiple sectors.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT FORM ================= */}
//         <div className="bg-white shadow-xl rounded-xl p-12">
//           <p className="text-red-500 font-semibold tracking-widest mb-4">
//             CONTACT US
//           </p>

//           <h3 className="text-3xl font-bold text-gray-900 mb-8">
//             Contact Us For Your <br /> Project Requirement
//           </h3>

//           <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <input
//               type="text"
//               placeholder="Company Name"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <input
//               type="date"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <input
//               type="time"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
//             />

//             <textarea
//               rows="4"
//               placeholder="Briefly describe your project requirement"
//               className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500 sm:col-span-2"
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-red-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-red-600 transition sm:col-span-2"
//             >
//               Submit Requirement
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import { useCreateContactMutation } from "../redux/apis/contactApi";


export default function Contact() {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createContact(form).unwrap();
      alert(res.message || "Requirement submitted successfully");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="text-red-500 font-semibold tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            The Best Solutions <br /> For Your Electrical Needs
          </h2>

          <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
            Rihan Power Enterprises is an ISO 9001:2015 certified company
            delivering reliable, customized and cost-effective electrical
            solutions from concept to commissioning for industrial,
            commercial and infrastructure projects.
          </p>

          {/* FEATURES */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
                ⚡
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  ISO 9001:2015 Certified
                </h4>
                <p className="text-gray-500 text-sm">
                  Quality-driven processes with strict testing standards at
                  every stage of manufacturing.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
                🏭
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  Concept to Commissioning
                </h4>
                <p className="text-gray-500 text-sm">
                  Complete electrical design, manufacturing, installation and
                  commissioning solutions under one roof.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
                🛠️
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  Proven Industry Expertise
                </h4>
                <p className="text-gray-500 text-sm">
                  Trusted by industrial, commercial and infrastructure clients
                  across multiple sectors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-white shadow-xl rounded-xl p-12">
          <p className="text-red-500 font-semibold tracking-widest mb-4">
            CONTACT US
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Contact Us For Your <br /> Project Requirement
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500"
            />

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your project requirement"
              required
              className="border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:border-red-500 sm:col-span-2"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-red-600 transition sm:col-span-2 disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Requirement"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



