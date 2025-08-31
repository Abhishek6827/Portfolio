"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchProjects,
  selectAllProjects,
  selectFeaturedProjects,
} from "../store/projectsSlice";
import {
  ExternalLink,
  AlertCircle,
  Eye,
  Code,
  Star,
  Calendar,
  GitBranch,
} from "lucide-react";
import {
  FaGithub,
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiDjango } from "react-icons/si";
import React from "react";

// Import local images for projects
import MyntraImage1 from "../images/Myntra/image1.png";
import MyntraImage2 from "../images/Myntra/image2.png";
import MyntraImage3 from "../images/Myntra/image3.png";
import MyntraImage4 from "../images/Myntra/image4.png";
import MyntraImage5 from "../images/Myntra/image5.png";
import MyntraImage6 from "../images/Myntra/image6.png";

import ElanteImage1 from "../images/Elante_Mall/image1.png";
import ElanteImage2 from "../images/Elante_Mall/image2.png";
import ElanteImage3 from "../images/Elante_Mall/image3.png";
import ElanteImage4 from "../images/Elante_Mall/image4.png";
import ElanteImage5 from "../images/Elante_Mall/image5.png";
import ElanteImage6 from "../images/Elante_Mall/image6.png";
import ElanteImage7 from "../images/Elante_Mall/image7.png";
import ElanteImage8 from "../images/Elante_Mall/image8.png";
import ElanteImage9 from "../images/Elante_Mall/image9.png";
import ElanteImage10 from "../images/Elante_Mall/image10.png";
import ElanteImage11 from "../images/Elante_Mall/image11.png";
import ElanteImage12 from "../images/Elante_Mall/image12.png";
import ElanteImage13 from "../images/Elante_Mall/image13.png";
import ElanteImage14 from "../images/Elante_Mall/image14.png";
import ElanteImage15 from "../images/Elante_Mall/image15.png";
import ElanteImage16 from "../images/Elante_Mall/image16.png";
import ElanteImage17 from "../images/Elante_Mall/image17.png";
import ElanteImage18 from "../images/Elante_Mall/image18.png";
import ElanteImage19 from "../images/Elante_Mall/image19.png";

import SkillUpImage1 from "../images/Skill_Up/image1.png";
import SkillUpImage2 from "../images/Skill_Up/image2.png";
import SkillUpImage3 from "../images/Skill_Up/image3.png";
import SkillUpImage4 from "../images/Skill_Up/image4.png";
import SkillUpImage5 from "../images/Skill_Up/image5.png";
import SkillUpImage6 from "../images/Skill_Up/image6.png";
import SkillUpImage7 from "../images/Skill_Up/image7.png";
import SkillUpImage8 from "../images/Skill_Up/image8.png";
import SkillUpImage9 from "../images/Skill_Up/image9.png";
import SkillUpImage10 from "../images/Skill_Up/image10.png";
import SkillUpImage11 from "../images/Skill_Up/image11.png";
import SkillUpImage12 from "../images/Skill_Up/image12.png";
import SkillUpImage13 from "../images/Skill_Up/image13.png";
import SkillUpImage14 from "../images/Skill_Up/image14.png";
import SkillUpImage15 from "../images/Skill_Up/image15.png";

import WorkboardImage1 from "../images/Workboard/image1.png";
import WorkboardImage2 from "../images/Workboard/image2.png";
import WorkboardImage3 from "../images/Workboard/image3.png";
import WorkboardImage4 from "../images/Workboard/image4.png";
import WorkboardImage5 from "../images/Workboard/image5.png";
import WorkboardImage6 from "../images/Workboard/image6.png";
import WorkboardImage7 from "../images/Workboard/image7.png";
import WorkboardImage8 from "../images/Workboard/image8.png";
import WorkboardImage9 from "../images/Workboard/image9.png";
import WorkboardImage10 from "../images/Workboard/image10.png";
import WorkboardImage11 from "../images/Workboard/image11.png";
import WorkboardImage12 from "../images/Workboard/image12.png";
import WorkboardImage13 from "../images/Workboard/image13.png";
import WorkboardImage14 from "../images/Workboard/image14.png";
import WorkboardImage15 from "../images/Workboard/image15.png";

import CalendarImage1 from "../images/Market-Seasonality-Explorer/image1.png";
import CalendarImage2 from "../images/Market-Seasonality-Explorer/image2.png";
import CalendarImage3 from "../images/Market-Seasonality-Explorer/image3.png";
import CalendarImage4 from "../images/Market-Seasonality-Explorer/image4.png";
import CalendarImage5 from "../images/Market-Seasonality-Explorer/image5.png";
import CalendarImage6 from "../images/Market-Seasonality-Explorer/image6.png";
import CalendarImage7 from "../images/Market-Seasonality-Explorer/image7.png";
import CalendarImage8 from "../images/Market-Seasonality-Explorer/image8.png";
import CalendarImage9 from "../images/Market-Seasonality-Explorer/image9.png";
import CalendarImage10 from "../images/Market-Seasonality-Explorer/image10.png";
import CalendarImage11 from "../images/Market-Seasonality-Explorer/image11.png";
import CalendarImage12 from "../images/Market-Seasonality-Explorer/image12.png";
import CalendarImage13 from "../images/Market-Seasonality-Explorer/image13.png";
import CalendarImage14 from "../images/Market-Seasonality-Explorer/image14.png";
import CalendarImage15 from "../images/Market-Seasonality-Explorer/image15.png";

// Enhanced projects data from the second code
const enhancedProjects = [
  {
    id: 1,
    name: "Myntra Clone",
    description:
      "A fully responsive e-commerce fashion website clone with modern UI/UX, product catalog, shopping cart, and user authentication features.",
    demo: "https://Abhishek6827.github.io/Myntra/",
    backend: null,
    github: "https://github.com/Abhishek6827/Myntra",
    technologies: ["React", "Redux", "CSS", "JavaScript"],
    category: "E-commerce",
    featured: true,
    stargazers_count: 12,
    updated_at: "2025-01-15",
  },
  {
    id: 2,
    name: "Amazon Clone",
    description:
      "A comprehensive Amazon-inspired e-commerce platform with product listings, search functionality, and responsive design.",
    demo: "https://Abhishek6827.github.io/Amazon-Clone/",
    backend: null,
    github: "https://github.com/Abhishek6827/Amazon-Clone",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    category: "E-commerce",
    featured: false,
    stargazers_count: 8,
    updated_at: "2025-01-10",
  },
  {
    id: 3,
    name: "Skill_Up",
    description:
      "An educational platform for skill development with course listings, progress tracking, and interactive learning modules.",
    demo: "https://Abhishek6827.github.io/Skill_Up/",
    backend: null,
    github: "https://github.com/Abhishek6827/Skill_Up",
    technologies: ["React", "Bootstrap", "JavaScript"],
    category: "Education",
    featured: true,
    stargazers_count: 10,
    updated_at: "2025-01-20",
  },
  {
    id: 4,
    name: "Bharat Clock",
    description:
      "A beautiful digital clock application showing Indian time zones with elegant design and smooth animations.",
    demo: "https://Abhishek6827.github.io/Bharat-Clock/",
    backend: null,
    github: "https://github.com/Abhishek6827/Bharat-Clock",
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "Utility",
    featured: false,
    stargazers_count: 5,
    updated_at: "2023-12-20",
  },
  {
    id: 5,
    name: "Calculator",
    description:
      "A modern calculator application with scientific functions, memory operations, and responsive design.",
    demo: "https://Abhishek6827.github.io/Calculator/",
    backend: null,
    github: "https://github.com/Abhishek6827/Calculator",
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "Utility",
    featured: false,
    stargazers_count: 3,
    updated_at: "2023-11-15",
  },
  {
    id: 6,
    name: "Elante Mall",
    description:
      "A shopping mall website with store directory, event listings, and interactive mall map functionality.",
    demo: "https://Abhishek6827.github.io/Elante_Mall/",
    backend: null,
    github: "https://github.com/Abhishek6827/Elante_Mall",
    technologies: ["React", "CSS", "JavaScript"],
    category: "Business",
    featured: true,
    stargazers_count: 7,
    updated_at: "2025-01-05",
  },
  {
    id: 7,
    name: "Kanban_WorkBoard",
    description:
      "A full-stack project management dashboard with Django backend and React frontend. Features task tracking, team collaboration, and intuitive drag-and-drop interface.",
    demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
    backend: "https://abhishektiwari6827.pythonanywhere.com/",
    github: "https://github.com/Abhishek6827/Kanban_WorkBoard",
    technologies: ["Django", "React", "Redux", "Tailwind CSS"],
    category: "Productivity",
    featured: true,
    stargazers_count: 15,
    updated_at: "2025-08-30",
  },
  {
    id: 8,
    name: "Market-Seasonality-Explorer",
    description:
      "A calendar application highlighting seasonal market trends and patterns for traders and investors.",
    demo: "https://abhishek6827.github.io/Market-Seasonality-Explorer/",
    backend: null,
    github: "https://github.com/Abhishek6827/Market-Seasonality-Explorer",
    technologies: ["React", "Tailwind CSS", "Recharts", "Binance API"],
    category: "Productivity",
    featured: true,
    stargazers_count: 15,
    updated_at: "2025-08-30",
  },
];

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const featuredProjects = useSelector(selectFeaturedProjects);
  const { status, error } = useSelector((state) => state.projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoError, setDemoError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Create arrays of images for each project
  const myntraImages = [
    MyntraImage1,
    MyntraImage2,
    MyntraImage3,
    MyntraImage4,
    MyntraImage5,
    MyntraImage6,
  ];

  const skillUpImages = [
    SkillUpImage1,
    SkillUpImage2,
    SkillUpImage3,
    SkillUpImage4,
    SkillUpImage5,
    SkillUpImage6,
    SkillUpImage7,
    SkillUpImage8,
    SkillUpImage9,
    SkillUpImage10,
    SkillUpImage11,
    SkillUpImage12,
    SkillUpImage13,
    SkillUpImage14,
    SkillUpImage15,
  ];

  const workboardImages = [
    WorkboardImage1,
    WorkboardImage2,
    WorkboardImage3,
    WorkboardImage4,
    WorkboardImage5,
    WorkboardImage6,
    WorkboardImage7,
    WorkboardImage8,
    WorkboardImage9,
    WorkboardImage10,
    WorkboardImage11,
    WorkboardImage12,
    WorkboardImage13,
    WorkboardImage14,
    WorkboardImage15,
  ];

  const elanteImages = [
    ElanteImage1,
    ElanteImage2,
    ElanteImage3,
    ElanteImage4,
    ElanteImage5,
    ElanteImage6,
    ElanteImage7,
    ElanteImage8,
    ElanteImage9,
    ElanteImage10,
    ElanteImage11,
    ElanteImage12,
    ElanteImage13,
    ElanteImage14,
    ElanteImage15,
    ElanteImage16,
    ElanteImage17,
    ElanteImage18,
    ElanteImage19,
  ];

  const calendarImages = [
    CalendarImage1,
    CalendarImage2,
    CalendarImage3,
    CalendarImage4,
    CalendarImage5,
    CalendarImage6,
    CalendarImage7,
    CalendarImage8,
    CalendarImage9,
    CalendarImage10,
    CalendarImage11,
    CalendarImage12,
    CalendarImage13,
    CalendarImage14,
    CalendarImage15,
  ];

  // Map local images to projects
  const getProjectImages = (projectName) => {
    const imageMap = {
      "Myntra Clone": myntraImages,
      Skill_Up: skillUpImages,
      Kanban_WorkBoard: workboardImages,
      "Market-Seasonality-Explorer": calendarImages,
      "Elante Mall": elanteImages,
    };
    return imageMap[projectName] || null;
  };

  // Add backend URLs to specific projects
  const getProjectBackend = (projectName) => {
    const backendMap = {
      Kanban_WorkBoard: "https://abhishektiwari6827.pythonanywhere.com/",
    };
    return backendMap[projectName] || null;
  };

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

  // Use enhancedProjects instead of Redux projects for demonstration
  const projectsToUse = enhancedProjects;
  const featuredProjectsToUse = enhancedProjects.filter(
    (project) => project.featured
  );

  const filteredProjects =
    filter === "all"
      ? projectsToUse
      : projectsToUse.filter((project) => project.category === filter);

  const handleDemoClick = (project) => {
    if (project.demo || project.deployedUrl) {
      setSelectedProject(project);
      setDemoError(null);
    } else {
      setDemoError("Live demo is not available for this project.");
      setTimeout(() => setDemoError(null), 3000);
    }
  };

  const getTechIcon = (tech) => {
    const iconMap = {
      React: <FaReact className="text-blue-400" />,
      Redux: <SiRedux className="text-purple-400" />,
      JavaScript: <FaJsSquare className="text-yellow-400" />,
      CSS: <FaCss3Alt className="text-blue-500" />,
      HTML: <FaHtml5 className="text-orange-500" />,
      Bootstrap: <FaBootstrap className="text-purple-500" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
      Django: <SiDjango className="text-green-600" />,
    };
    return iconMap[tech] || <Code className="text-gray-400" />;
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
          {featuredProjectsToUse.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              images={getProjectImages(project.name)}
              backend={getProjectBackend(project.name)}
              index={index}
              onDemoClick={() => handleDemoClick(project)}
              onHover={setHoveredProject}
              getTechIcon={getTechIcon}
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
              getTechIcon={getTechIcon}
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

const FeaturedProjectCard = React.forwardRef(
  (
    { project, images, backend, index, onDemoClick, onHover, getTechIcon },
    ref
  ) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cycle through images for projects that have multiple images
    useEffect(() => {
      if (!images) return;

      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(imageInterval);
    }, [images]);

    return (
      <motion.div
        ref={ref}
        className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onHoverStart={() => onHover(project.id)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={
              images
                ? images[currentImageIndex]
                : "/placeholder.svg?height=192&width=400&query=project showcase"
            }
            alt={project.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <Star size={12} className="mr-1" />
              Featured
            </span>
          </div>

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
                href={project.github}
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

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Star size={14} />
              <span>{project.stargazers_count || 0}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {(project.technologies || []).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="flex items-center space-x-1 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium"
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </span>
            ))}
            {(project.technologies || []).length > 4 && (
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                +{(project.technologies || []).length - 4} more
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
        </div>
      </motion.div>
    );
  }
);

FeaturedProjectCard.displayName = "FeaturedProjectCard";

const ProjectCard = React.forwardRef(
  (
    { project, images, backend, index, onDemoClick, onHover, getTechIcon },
    ref
  ) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cycle through images for projects that have multiple images
    useEffect(() => {
      if (!images) return;

      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(imageInterval);
    }, [images]);

    return (
      <motion.div
        ref={ref}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => onHover(project.id)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={
              images
                ? images[currentImageIndex]
                : "/placeholder.svg?height=160&width=400&query=project showcase"
            }
            alt={project.name}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <Star size={12} />
              <span>{project.stargazers_count || 0}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {(project.technologies || []).map((tech) => (
              <span
                key={tech}
                className="flex items-center space-x-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium"
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
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
                  <span>Get Started</span>
                </motion.a>
              )}
            </div>

            <motion.a
              href={project.github}
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

function DemoModal({ project, onClose }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(
      "Failed to load the demo. The project might not be deployed or the URL might be incorrect."
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">Live Demo Preview</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href={project.demo || project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </motion.a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <ExternalLink size={24} className="rotate-45" />
            </button>
          </div>
        </div>

        <div className="relative" style={{ height: "70vh" }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
              />
              <span className="ml-3 text-white">Loading demo...</span>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <AlertCircle className="text-red-500 mb-4" size={48} />
              <p className="text-red-400 text-lg mb-4">{error}</p>
              <motion.a
                href={project.demo || project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open in New Tab
              </motion.a>
            </div>
          )}

          <iframe
            src={project.demo || project.deployedUrl}
            title={`${project.name} Demo`}
            className={`w-full h-full border-0 ${
              loading || error ? "hidden" : ""
            }`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
