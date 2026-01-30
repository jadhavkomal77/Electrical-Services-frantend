
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




