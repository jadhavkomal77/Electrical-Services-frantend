import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProjectBySlugQuery,
  useGetPublicProjectsQuery,
} from "../redux/apis/projectApi";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: project, isLoading } = useGetProjectBySlugQuery(slug);
  const { data: projects = [] } = useGetPublicProjectsQuery();

  const [activeImg, setActiveImg] = useState(0);

  // ✅ SEO without Helmet
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Projects`;

      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = project.shortDesc || "Project details";
    }
  }, [project]);

  if (isLoading) return <div className="p-20 text-center">Loading...</div>;
  if (!project) return <div className="p-20 text-center">Project not found</div>;

  const images = project.images?.length
    ? project.images
    : [project.image];

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <section className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ BACK TO PROJECTS */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 text-gray-600 hover:text-black font-medium"
        >
          ← Back to Projects
        </button>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* IMAGE SIDE */}
          <div>
            <motion.img
              key={images[activeImg]}
              src={images[activeImg]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[450px] object-cover rounded-xl shadow"
            />

            {/* IMAGE GALLERY */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImg(i)}
                    className={`h-20 w-24 object-cover rounded cursor-pointer border-2
                      ${
                        i === activeImg
                          ? "border-red-500"
                          : "border-transparent"
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CONTENT SIDE */}
          <div>
            <span className="text-red-500 font-semibold">
              {project.category}
            </span>

            <h1 className="text-4xl font-bold mt-2 mb-4">
              {project.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              {project.shortDesc}
            </p>

            <div className="text-gray-700 leading-relaxed space-y-3">
              {project.description}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() => navigate("/contact")}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Contact for Similar Project
              </button>
            </div>
          </div>
        </div>

        {/* NEXT / PREVIOUS */}
        <div className="mt-16 flex justify-between items-center border-t pt-6">
          {prevProject ? (
            <button
              onClick={() =>
                navigate(`/projects/${prevProject.slug}`)
              }
              className="text-blue-600 hover:underline font-medium"
            >
              ← {prevProject.title}
            </button>
          ) : <span />}

          {nextProject && (
            <button
              onClick={() =>
                navigate(`/projects/${nextProject.slug}`)
              }
              className="text-blue-600 hover:underline font-medium"
            >
              {nextProject.title} →
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
