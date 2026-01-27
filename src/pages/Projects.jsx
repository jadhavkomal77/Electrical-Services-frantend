import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPublicProjectsQuery } from "../redux/apis/projectApi";
import { motion } from "framer-motion";

export default function Projects() {
  const navigate = useNavigate();
  const { data: projects = [], isLoading } = useGetPublicProjectsQuery();

  // SEO title
  useEffect(() => {
    document.title = "Projects | Our Work";
  }, []);

  if (isLoading) {
    return (
      <div className="py-32 text-center text-lg font-medium text-gray-600">
        Loading projects...
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="py-32 text-center text-lg font-medium text-gray-600">
        No projects found.
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold tracking-widest mb-2">
            OUR WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Recent Projects
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <span className="text-red-500 text-sm font-semibold">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.shortDesc}
                </p>

                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="inline-flex items-center gap-1 text-red-500 font-semibold hover:underline"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
