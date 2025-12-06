"use client";

import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  fetchProjects,
  selectAllProjects,
  selectFeaturedProjects,
  selectProjectsByCategory,
} from "../store/projectsSlice";
import {
  AlertCircle,
  Code,
  Laptop,
  Rocket,
  Zap,
  Star,
  Globe,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import DemoModal from "./DemoModal";
import { getProjectImages, getProjectBackend } from "../utils/projectImages";

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
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
    "Game",
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
    <div
      ref={sectionRef}
      className="container mx-auto px-4 py-20 relative overflow-hidden"
    >
      {/* Animated Background Icons - Positioned to avoid cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top area icons */}
        {[Code, Laptop, Rocket].map((Icon, i) => (
          <motion.div
            key={`top-${i}`}
            className="absolute"
            style={{
              top: `${3 + i * 8}%`,
              left: `${15 + i * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-purple-500" size={40 + i * 4} />
            </motion.div>
            <Icon
              className="relative text-pink-300 opacity-70"
              size={40 + i * 4}
            />
          </motion.div>
        ))}

        {/* Side icons - positioned to avoid card areas */}
        {[Zap, Star, Globe].map((Icon, i) => (
          <motion.div
            key={`side-${i}`}
            className="absolute"
            style={{
              top: `${40 + i * 20}%`,
              left: i % 2 === 0 ? "3%" : "92%",
            }}
            animate={{
              y: [0, -35, 0],
              x: i % 2 === 0 ? [0, 25, 0] : [0, -25, 0],
              rotate: [0, 360],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-purple-500" size={42 + i * 5} />
            </motion.div>
            <Icon
              className="relative text-pink-300 opacity-70"
              size={42 + i * 5}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50, rotateX: -20, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              : { opacity: 0, y: -50, rotateX: -20, scale: 0.9 }
          }
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
          className="text-center mb-12 relative"
        >
          <motion.h2
            className="text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text relative z-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% auto" }}
            >
              My Projects
            </motion.span>
            <motion.span
              className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl -z-10"
              animate={{
                opacity: [0.25, 0.5, 0.25],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore my portfolio of{" "}
            <span className="text-purple-400 font-semibold">
              web applications
            </span>
            , from{" "}
            <span className="text-blue-400 font-semibold">
              e-commerce platforms
            </span>{" "}
            to productivity tools, each built with{" "}
            <span className="text-cyan-400 font-semibold">
              modern technologies
            </span>{" "}
            and best practices.
          </motion.p>

          {/* Decorative wave underline */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, x: -80, rotateY: -15 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, rotateY: 0 }
              : { opacity: 0, x: -80, rotateY: -15 }
          }
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
          className="mb-16 relative"
        >
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            style={{ display: "block" }}
          >
            <span className="relative z-10">Featured Projects</span>
            <motion.span
              className="absolute inset-0 bg-blue-500 blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
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
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.9 }
          }
          transition={{
            duration: 0.7,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                filter === category
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter === category && (
                <motion.span
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0.5,
                  }}
                />
              )}
              <span className="relative z-10">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            type: "spring",
            stiffness: 80,
          }}
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
      </div>

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
