"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchProjects,
  selectAllProjects,
  selectFeaturedProjects,
  selectProjectsByCategory,
} from "../store/projectsSlice";
import { AlertCircle } from "lucide-react";
import ProjectCard from "./ProjectCard";
import DemoModal from "./DemoModal";
import { getProjectImages, getProjectBackend } from "../utils/projectImages";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const featuredProjects = useSelector(selectFeaturedProjects);
  const { status, error } = useSelector((state) => state.projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoError, setDemoError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get filtered projects using the memoized selector
  const filteredProjects = useSelector((state) =>
    selectProjectsByCategory(state, filter)
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const categories = [
    "all",
    "E-commerce",
    "Productivity",
    "Utility",
    "Business",
    "Education",
    "Portfolio",
  ];

  const handleDemoClick = (project) => {
    if (project.demo || project.deployedUrl) {
      setSelectedProject(project);
      setDemoError(null);
    } else {
      setDemoError("Live demo is not available for this project.");
      setTimeout(() => setDemoError(null), 3000);
    }
  };

  if (status === "loading") {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-8 h-8 border-2 border-blue-500 border-transparent rounded-full"
          />
          <span className="ml-3 text-lg">Loading projects...</span>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-red-500">
          <AlertCircle size={48} className="mx-auto mb-4" />
          <p className="text-lg">Error loading projects: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my portfolio of web applications, from e-commerce platforms to
          productivity tools, each built with modern technologies and best
          practices.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              images={getProjectImages(project.name)}
              backend={getProjectBackend(project.name)}
              index={index}
              onDemoClick={() => handleDemoClick(project)}
              onHover={setHoveredProject}
              isFeatured={true}
            />
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === category
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              images={getProjectImages(project.name)}
              backend={getProjectBackend(project.name)}
              index={index}
              onDemoClick={() => handleDemoClick(project)}
              onHover={setHoveredProject}
              isFeatured={false}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <DemoModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {demoError && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-lg shadow-xl flex items-center max-w-sm z-50"
          >
            <AlertCircle className="mr-3 flex-shrink-0" size={20} />
            <span className="text-sm">{demoError}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
