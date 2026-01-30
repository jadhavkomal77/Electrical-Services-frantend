
import React from "react";
import { useGetPublicAboutQuery } from "../redux/apis/aboutApi";

export default function About() {
  const { data: about, isLoading } = useGetPublicAboutQuery();
  if (isLoading || !about) return null;

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <div className="relative animate-fade-in-left">
          <img
            src={about.image}
            alt="About us"
            className="w-full h-[520px] object-cover rounded-lg shadow-md"
          />

          {/* EXPERIENCE BADGE (UPDATED & SUBTLE) */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-gray-200 px-6 py-4 rounded-lg shadow-lg animate-scale-in">
            <h3 className="text-3xl font-bold text-gray-900 leading-none">
              {about.experience}+
            </h3>
            <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
              Years Experience
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="animate-fade-in-right">
          <p className="text-red-500 font-semibold tracking-widest mb-4 uppercase">
            {about.headingSmall}
          </p>

          <h2 className="text-[40px] md:text-[46px] font-bold text-gray-900 leading-tight mb-6">
            {about.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">
            {about.description1}
          </p>

          {about.description2 && (
            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              {about.description2}
            </p>
          )}

          <button className="bg-red-500 text-white px-10 py-4 rounded-md font-semibold hover:bg-red-600 transition duration-300">
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
}




