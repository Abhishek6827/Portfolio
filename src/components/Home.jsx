"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import SkillsComponent from "./Skills";
import ExperienceComponent from "./Experience";

// Import local images with correct paths
import MyntraImage1 from "../images/Myntra/image1.png";
import MyntraImage2 from "../images/Myntra/image2.png";
import MyntraImage3 from "../images/Myntra/image3.png";
import MyntraImage4 from "../images/Myntra/image4.png";
import MyntraImage5 from "../images/Myntra/image5.png";
import MyntraImage6 from "../images/Myntra/image6.png";

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

// Import Elante_Mall images
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

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <SkillsComponent />
      <ExperienceComponent />
    </div>
  );
}

function Hero() {
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

  // Create array for Elante Mall images
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

  const featuredProjects = [
    {
      name: "Skill_Up",
      images: skillUpImages,
      demo: "https://Abhishek6827.github.io/Skill_Up/",
      github: "https://github.com/Abhishek6827/Skill_Up",
      tech: ["React", "Firebase"],
      description:
        "Created a learning platform enabling users to browse and access online courses.",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Myntra Clone",
      images: myntraImages,
      demo: "https://Abhishek6827.github.io/Myntra/",
      github: "https://github.com/Abhishek6827/Myntra",
      tech: ["React", "Redux", "CSS"],
      description: "Fashion e-commerce platform with modern UI",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Market Seasonality Calendar",
      images: calendarImages,
      demo: "https://abhishek6827.github.io/Market-Seasonality-Explorer/",
      github: "https://github.com/Abhishek6827/Market-Seasonality-Explorer",
      tech: ["React", "Tailwind CSS", "Recharts", "Binance API"],
      description: "Calendar highlighting seasonal market trends",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Kanban_WorkBoard",
      images: workboardImages,
      demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
      github: "https://github.com/Abhishek6827/Kanban_WorkBoard",
      tech: ["React", "Redux", "Tailwind"],
      description: "Project management dashboard with collaboration tools",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Elante Mall",
      images: elanteImages,
      demo: "https://Abhishek6827.github.io/Elante_Mall/",
      github: "https://github.com/Abhishek6827/Elante_Mall",
      tech: ["React", "CSS", "JavaScript"],
      description:
        "Shopping mall website with store directory and interactive map",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(1);

  const INTERVAL_TIME = 6000; // 6 seconds

  // Enhanced auto-switching with progress indicator
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentProject((current) => {
            const next = (current + 1) % featuredProjects.length;
            setDirection(1);
            return next;
          });
          return 0;
        }
        return prev + 100 / (INTERVAL_TIME / 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, featuredProjects.length]);

  // Cycle through images for the current project
  useEffect(() => {
    const currentProjectData = featuredProjects[currentProject];
    if (!currentProjectData.images) return;

    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % currentProjectData.images.length
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(imageInterval);
  }, [currentProject]);

  // Enhanced project selection with direction tracking
  const handleProjectSelect = useCallback(
    (index) => {
      setDirection(index > currentProject ? 1 : -1);
      setCurrentProject(index);
      setCurrentImageIndex(0);
      setProgress(0);
      setIsAutoPlaying(false);
      setImageLoaded(false);
      // Resume auto-play after 15 seconds of manual selection
      setTimeout(() => setIsAutoPlaying(true), 15000);
    },
    [currentProject]
  );

  // Navigation functions for previous/next
  const goToPrevious = useCallback(() => {
    const prevIndex =
      currentProject === 0 ? featuredProjects.length - 1 : currentProject - 1;
    handleProjectSelect(prevIndex);
  }, [currentProject, featuredProjects.length, handleProjectSelect]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentProject + 1) % featuredProjects.length;
    handleProjectSelect(nextIndex);
  }, [currentProject, featuredProjects.length, handleProjectSelect]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [goToPrevious, goToNext, isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.3, 1.1],
            x: [-20, 20, -10],
            y: [-10, 10, -5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: [1.2, 0.8, 1], x: [10, -15, 5], y: [5, -10, 0] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full mix-blend-screen opacity-25 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: [0.8, 1.2, 0.9], x: [-5, 15, -8], y: [8, -12, 3] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Abhishek Tiwari
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 h-16">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Full-Stack Developer | React Enthusiast | Problem Solver
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Crafting digital experiences with modern web technologies.
                Passionate about creating scalable solutions that make a
                difference.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <motion.a
                href="https://github.com/Abhishek6827"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub
                  size={24}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhishek-tiwariiii"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin
                  size={24}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </motion.a>
              <motion.a
                href="mailto:abhishektiwari6827@gmail.com"
                className="group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail
                  size={24}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 relative overflow-hidden">
              {/* Enhanced header with progress bar */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Featured Projects
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleProjectSelect(index)}
                        className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentProject
                            ? "bg-blue-400 w-6"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {index === currentProject && isAutoPlaying && (
                          <div
                            className="absolute inset-0 bg-blue-300 rounded-full transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      isAutoPlaying
                        ? "bg-blue-500 text-white"
                        : "bg-gray-600 text-gray-300"
                    }`}
                    title={isAutoPlaying ? "Pause auto-play" : "Play auto-play"}
                  >
                    {isAutoPlaying ? "⏸" : "▶"}
                  </button>
                </div>
              </div>

              {/* Enhanced project carousel with navigation */}
              <div className="relative group">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentProject}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                    }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      {featuredProjects[currentProject].images ? (
                        <img
                          src={
                            featuredProjects[currentProject].images[
                              currentImageIndex
                            ]
                          }
                          alt={featuredProjects[currentProject].name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onLoad={() => setImageLoaded(true)}
                          onError={() => setImageLoaded(false)}
                        />
                      ) : (
                        <img
                          src={featuredProjects[currentProject].image}
                          alt={featuredProjects[currentProject].name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onLoad={() => setImageLoaded(true)}
                          onError={() => setImageLoaded(false)}
                        />
                      )}

                      {/* Loading state */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Navigation arrows */}
                      <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        title="Previous project"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        title="Next project"
                      >
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-2">
                          <motion.a
                            href={featuredProjects[currentProject].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="View live demo"
                          >
                            <Eye size={14} />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={featuredProjects[currentProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="View source code"
                          >
                            <FaGithub size={14} />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {featuredProjects[currentProject].name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {featuredProjects[currentProject].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProjects[currentProject].tech.map((tech) => (
                          <span
                            key={tech}
                            className={`bg-gradient-to-r ${featuredProjects[currentProject].color} bg-opacity-20 text-white px-2 py-1 rounded text-xs font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Keyboard navigation hint */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Use ← → keys to navigate • Space to pause/play
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
