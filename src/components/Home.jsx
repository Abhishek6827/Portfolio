// components/Home.jsx
"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Mail, Eye, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFirebase, SiTailwindcss } from "react-icons/si";
import { useState, useEffect, useCallback, useRef } from "react";
import SkillsComponent from "./Skills";
import ExperienceComponent from "./Experience";
import { getProjectImages } from "../utils/projectImages";

// Featured projects data
// components/Home.jsx (Hero section)
// Update the featuredProjects array to use your local images:

const featuredProjects = [
  {
    name: "Tempusmail",
    images: getProjectImages("Tempusmail"),
    demo: "https://tempusmail-backend--tempusmail6827.us-central1.hosted.app/",
    tech: ["Next.js", "Firebase", "Notion Database", "Tailwind CSS"],
    description:
      "Temporary email service with real-time email receiving and modern UI",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Myntra Clone",
    images: getProjectImages("Myntra Clone"),
    demo: "https://Abhishek6827.github.io/Myntra/",
    tech: ["React", "Redux", "CSS"],
    description: "Fashion e-commerce platform with modern UI",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Skill_Up",
    images: getProjectImages("Skill_Up"),
    demo: "https://Abhishek6827.github.io/Skill_Up/",
    tech: ["React", "Firebase"],
    description:
      "Created a learning platform enabling users to browse and access online courses.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Market-Seasonality-Explorer",
    images: getProjectImages("Market-Seasonality-Explorer"),
    demo: "https://abhishek6827.github.io/Market-Seasonality-Explorer/",
    tech: ["React", "Tailwind CSS", "Recharts", "Binance API"],
    description: "Calendar highlighting seasonal market trends",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Kanban_WorkBoard",
    images: getProjectImages("Kanban_WorkBoard"),
    demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
    tech: ["React", "Redux", "Tailwind"],
    description: "Project management dashboard with collaboration tools",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Elante Mall",
    images: getProjectImages("Elante Mall"),
    demo: "https://Abhishek6827.github.io/Elante_Mall/",
    tech: ["React", "CSS", "JavaScript"],
    description:
      "Shopping mall website with store directory and interactive map",
    color: "from-purple-500 to-violet-500",
  },
];

function Hero() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(1);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const INTERVAL_TIME = 6000;
  
  // Floating tech icons data
  const techIcons = [
    { Icon: FaReact, color: "text-cyan-400", size: 40, delay: 0 },
    { Icon: SiNextdotjs, color: "text-white", size: 35, delay: 0.5 },
    { Icon: SiTypescript, color: "text-blue-500", size: 38, delay: 1 },
    { Icon: FaNodeJs, color: "text-green-500", size: 42, delay: 1.5 },
    { Icon: SiFirebase, color: "text-yellow-500", size: 36, delay: 2 },
    { Icon: SiTailwindcss, color: "text-cyan-400", size: 40, delay: 2.5 }
  ];

  // Auto-switching with progress indicator
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
    const images = getProjectImages(currentProjectData.name);
    if (!images) return;

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [currentProject]);

  const handleProjectSelect = useCallback(
    (index) => {
      setDirection(index > currentProject ? 1 : -1);
      setCurrentProject(index);
      setCurrentImageIndex(0);
      setProgress(0);
      setIsAutoPlaying(false);
      setImageLoaded(false);
      setTimeout(() => setIsAutoPlaying(true), 15000);
    },
    [currentProject]
  );

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
    <section ref={heroRef} className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Geometric Background with Floating Tech Icons */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: yParallax }}
      >
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-24 h-24 bg-blue-500/10 backdrop-blur-sm"
          style={{ top: "15%", left: "-10%", filter: "blur(2px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-purple-500/15 backdrop-blur-sm rotate-45"
          style={{ top: "35%", left: "-8%", filter: "blur(1px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 32,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-cyan-400/12 backdrop-blur-sm rotate-12"
          style={{ top: "55%", left: "-12%", filter: "blur(2px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 6,
          }}
        />
        <motion.div
          className="absolute w-28 h-28 bg-indigo-500/8 backdrop-blur-sm"
          style={{ top: "70%", left: "-15%", filter: "blur(3px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 9,
          }}
        />
        <motion.div
          className="absolute w-14 h-14 bg-blue-400/20 backdrop-blur-sm rotate-45"
          style={{ top: "25%", left: "-6%", filter: "blur(1px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 26,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 12,
          }}
        />
        <motion.div
          className="absolute w-18 h-18 bg-purple-400/10 backdrop-blur-sm rotate-12"
          style={{ top: "45%", left: "-10%", filter: "blur(2px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 29,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 15,
          }}
        />
        <motion.div
          className="absolute w-22 h-22 bg-cyan-500/15 backdrop-blur-sm"
          style={{ top: "65%", left: "-8%", filter: "blur(2px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 33,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 18,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-indigo-400/12 backdrop-blur-sm rotate-45"
          style={{ top: "80%", left: "-12%", filter: "blur(3px)" }}
          animate={{
            x: ["0vw", "110vw"],
          }}
          transition={{
            duration: 31,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 21,
          }}
        />

        {/* Subtle gradient orbs for depth */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-15 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: [1.1, 0.9, 1.1], x: [10, -10, 10], y: [5, -5, 5] }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full mix-blend-screen opacity-18 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: [0.9, 1.1, 0.9], x: [-5, 15, -5], y: [8, -8, 8] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Tech Icons */}
        {techIcons.map(({ Icon, color, size, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} z-20`}
            style={{
              top: `${15 + index * 12}%`,
              left: `${10 + (index % 3) * 30}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </motion.div>

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
              <motion.h1 
                className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.6, -0.05, 0.01, 0.99],
                  delay: 0.2
                }}
              >
                Abhishek Tiwari
              </motion.h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 h-16">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  Full-Stack Developer | Next.js & TypeScript | SaaS Builder
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
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
              {/* Carousel header */}
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

              {/* Project carousel */}
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
                      {(() => {
                        const images = getProjectImages(
                          featuredProjects[currentProject].name
                        );
                        return images ? (
                          <img
                            src={images[currentImageIndex]}
                            alt={featuredProjects[currentProject].name}
                            className="w-full h-82 object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(false)}
                          />
                        ) : (
                          <div className="w-full h-80 bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400">
                              No image available
                            </span>
                          </div>
                        );
                      })()}

                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                        <motion.a
                          href={featuredProjects[currentProject].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors w-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          title="View live demo"
                        >
                          <Eye size={14} />
                          <span>Live Demo</span>
                        </motion.a>
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

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Use ← → keys to navigate • Space to pause/play
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator with Pulse Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: opacityParallax }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="text-blue-400" size={32} />
        </motion.div>
        <span className="text-gray-400 text-sm mt-2">Scroll to explore</span>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <SkillsComponent />
      <ExperienceComponent />
    </div>
  );
}
