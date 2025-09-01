import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Calendar, GitBranch, Eye, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getTechIcon } from "../utils/techIcons";

const ProjectCard = React.forwardRef(
  (
    {
      project,
      images,
      backend,
      index,
      onDemoClick,
      onHover,
      isFeatured = false,
    },
    ref
  ) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (!images) return;
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(imageInterval);
    }, [images]);

    return (
      <motion.div
        ref={ref}
        className={`group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
          isFeatured ? "" : "rounded-lg"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onHoverStart={() => onHover(project.id)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ y: isFeatured ? -8 : -5, scale: isFeatured ? 1.02 : 1 }}
      >
        <div className="relative overflow-hidden">
          {images && images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt={project.name}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                isFeatured ? "h-48" : "h-40"
              }`}
            />
          ) : (
            <div
              className={`w-full bg-gray-700 flex items-center justify-center ${
                isFeatured ? "h-48" : "h-40"
              }`}
            >
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {isFeatured && (
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                <Star size={12} className="mr-1" />
                Featured
              </span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              {(project.demo || project.deployedUrl) && (
                <motion.a
                  href={project.demo || project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}
              {backend && (
                <motion.a
                  href={backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={16} />
                  <span>Backend</span>
                </motion.a>
              )}
              <motion.a
                href={project.html_url} // Use the GitHub URL from the API
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className={isFeatured ? "p-6" : "p-4"}>
          <div className="flex items-start justify-between mb-3">
            <h3
              className={`font-semibold text-white group-hover:text-blue-400 transition-colors ${
                isFeatured ? "text-xl" : "text-lg"
              }`}
            >
              {project.name}
            </h3>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Star size={14} />
              <span>{project.stargazers_count || 0}</span>
            </div>
          </div>

          <p
            className={`text-gray-400 mb-4 line-clamp-3 ${
              isFeatured ? "text-sm" : "text-sm h-12 overflow-hidden"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {(project.technologies || [])
              .slice(0, isFeatured ? 4 : 3)
              .map((tech) => (
                <span
                  key={tech}
                  className={`flex items-center space-x-1 text-xs font-medium ${
                    isFeatured
                      ? "bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      : "bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                  }`}
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            {(project.technologies || []).length > (isFeatured ? 4 : 3) && (
              <span
                className={`${
                  isFeatured
                    ? "bg-gray-700 text-gray-300"
                    : "bg-blue-500/20 text-blue-400"
                } px-2 py-1 rounded text-xs`}
              >
                +{(project.technologies || []).length - (isFeatured ? 4 : 3)}{" "}
                more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <Calendar size={12} className="mr-1" />
              {new Date(project.updated_at).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <GitBranch size={12} className="mr-1" />
              {project.category || "Other"}
            </span>
          </div>

          {/* Bottom GitHub link */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              {(project.demo || project.deployedUrl) && (
                <motion.a
                  href={project.demo || project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}
              {backend && (
                <motion.a
                  href={backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={16} />
                  <span>Backend</span>
                </motion.a>
              )}
            </div>

            <motion.a
              href={project.html_url} // GitHub URL from API
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={16} />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
