import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import "./styles/Career.css";
import WorkImage from "./WorkImage";
import { MdPlayArrow, MdPause, MdChevronLeft, MdChevronRight, MdVisibility, MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchProjects, selectFeaturedProjects, selectOtherProjects } from "../store/projectsSlice";
import { motion, AnimatePresence } from "framer-motion";
import { getTechIcon } from "./utils/techIcons";
import { MdFolder } from "react-icons/md";

const Work = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(selectFeaturedProjects);
  const otherProjects = useSelector(selectOtherProjects);
  const { status } = useSelector((state: RootState) => state.projects);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  const INTERVAL_TIME = 6000;

  useEffect(() => {
    if (status === "idle") dispatch(fetchProjects());
  }, [status, dispatch]);

  const handleProjectSelect = useCallback((index: number) => {
    setDirection(index > currentProject ? 1 : -1);
    setCurrentProject(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  }, [currentProject]);

  const goToPrevious = useCallback(() => {
    if (!projects.length) return;
    const prevIndex = currentProject === 0 ? projects.length - 1 : currentProject - 1;
    handleProjectSelect(prevIndex);
  }, [currentProject, projects.length, handleProjectSelect]);

  const goToNext = useCallback(() => {
    if (!projects.length) return;
    const nextIndex = (currentProject + 1) % projects.length;
    handleProjectSelect(nextIndex);
  }, [currentProject, projects.length, handleProjectSelect]);

  // Auto-switching
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentProject((current) => {
            const next = (current + 1) % projects.length;
            setDirection(1);
            return next;
          });
          return 0;
        }
        return prev + (100 / (INTERVAL_TIME / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, projects.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  if (status === "loading") {
    return (
      <div className="work-section" id="work">
        <div className="work-container">
          <h2 className="work-section-title">Loading <span>Projects...</span></h2>
        </div>
      </div>
    );
  }

  if (status === "failed" || projects.length === 0) {
    return (
      <div className="work-section" id="work">
        <div className="work-container">
          <h2 className="work-section-title">No <span>Projects</span> Found</h2>
        </div>
      </div>
    );
  }

  const project = projects[currentProject];

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        
        <h2 className="work-section-title">
          My <span>Work</span>
        </h2>

        {/* ── Hero Card ── */}
        <div className="work-hero-card">
          
          {/* Header */}
          <div className="work-card-header">
            <h3>Featured Projects</h3>
            {projects.length > 1 && (
              <div className="work-card-controls">
                <div className="work-card-dots">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleProjectSelect(index)}
                      className={`work-card-dot ${index === currentProject ? "active" : ""}`}
                    >
                      {index === currentProject && isAutoPlaying && (
                        <div
                          className="work-card-dot-progress"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`play-pause-btn ${isAutoPlaying ? "playing" : "paused"}`}
                  title={isAutoPlaying ? "Pause auto-play" : "Play auto-play"}
                >
                  {isAutoPlaying ? <MdPause size={14} /> : <MdPlayArrow size={14} />}
                </button>
              </div>
            )}
          </div>

          {/* Slider */}
          <div className="work-slider-window group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
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
              >
                {/* Image Wrapper */}
                <div className="work-image-wrapper">
                  <WorkImage
                    projectName={project.name}
                    alt={project.name}
                  />

                  {/* Overlay and Controls */}
                  <div className="work-img-overlay" />
                  
                  {projects.length > 1 && (
                    <>
                      <button onClick={goToPrevious} className="work-nav-btn work-nav-left" title="Previous Project">
                        <MdChevronLeft size={24} />
                      </button>
                      <button onClick={goToNext} className="work-nav-btn work-nav-right" title="Next Project">
                        <MdChevronRight size={24} />
                      </button>
                    </>
                  )}

                  <div className="work-demo-layer">
                    {(project.demo || project.homepage) && (
                      <a
                        href={project.demo || project.homepage || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-demo"
                        title="View Live Demo"
                      >
                        <MdVisibility size={16} /> Live Demo
                      </a>
                    )}
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-demo work-btn-source"
                        style={{ borderColor: "rgba(20, 184, 166, 0.4)", color: "#2dd4bf" }}
                        title="View Backend API/Repo"
                      >
                        <MdCode size={16} /> Backend
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Below */}
                <div className="work-content">
                  <div className="work-content-header">
                    <h4>{project.name}</h4>
                  </div>
                  <p className="work-desc">{project.description}</p>
                  <div className="work-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="work-tech-badge">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Helpers */}
          {projects.length > 1 && (
            <div className="work-helper-text">
              Hover over image to view links • Click dots to navigate
            </div>
          )}

        </div>

        {/* ── Other Notable Projects List ── */}
        {otherProjects.length > 0 && (
          <div className="other-projects-section" style={{ width: '100%', maxWidth: '1000px', margin: '80px auto 0' }}>
            <h2 className="work-section-title" style={{ marginBottom: "60px" }}>
              Other <span>Projects</span>
            </h2>
            <div className="career-info">
              <div className="career-timeline" style={{ backgroundImage: "linear-gradient(to top, #14b8a6 20%, var(--accentColor) 50%, transparent 95%)", maxHeight: "100%" }}></div>

              {otherProjects.map((proj, idx) => (
                <div key={proj.id || idx} className="career-info-box">
                  <div className="career-info-in">
                    <div className="career-role">
                      <h4>{proj.name}</h4>
                      <h5 style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        {proj.category}
                        {(proj.demo || proj.homepage) && (
                          <a
                            href={proj.demo || proj.homepage || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Demo"
                            style={{ color: "inherit", transition: "color 0.2s" }}
                            onMouseOver={(e) => e.currentTarget.style.color = "#fff"}
                            onMouseOut={(e) => e.currentTarget.style.color = "inherit"}
                          >
                            <MdVisibility size={18} />
                          </a>
                        )}
                      </h5>
                    </div>
                    <h3>{proj.updated_at ? new Date(proj.updated_at).getFullYear() : new Date().getFullYear()}</h3>
                  </div>
                  <div className="career-info-right" style={{ width: "40%" }}>
                    <p style={{ width: "100%", margin: "0 0 10px 0" }}>
                      {proj.description}
                    </p>
                    <h5 style={{ fontSize: "12px", color: "var(--accentColor)", margin: 0 }}>
                      Skills: {proj.technologies.join(", ")}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Work;