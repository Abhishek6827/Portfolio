import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdStar, MdDateRange, MdCode, MdOpenInNew, MdLayers } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchProjects } from "../store/projectsSlice";

const Work = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: projects, status } = useSelector((state: RootState) => state.projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    if (projects.length === 0) return;
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  const goToNext = useCallback(() => {
    if (projects.length === 0) return;
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  if (status === 'loading') {
    return <div className="work-section" id="work"><div className="work-container section-container"><h2>Loading <span>Projects...</span></h2></div></div>;
  }

  if (status === 'failed' || projects.length === 0) {
    return <div className="work-section" id="work"><div className="work-container section-container"><h2>No <span>Projects</span> Found</h2></div></div>;
  }

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                    <div className="carousel-details">
                        <div className="carousel-header-meta">
                          <h4>{project.name}</h4>
                          <span className="project-badge">
                            <MdStar className="meta-icon" /> {project.stargazers_count || 0}
                          </span>
                        </div>

                        <div className="project-sub-meta">
                          <span className="meta-item"><MdLayers className="meta-icon" /> {project.category || "Other"}</span>
                          <span className="meta-item"><MdDateRange className="meta-icon" /> {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>

                        <p className="carousel-description">
                          {project.description}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">Technologies</span>
                          <div className="tech-tags-container">
                            {project.technologies.slice(0, 5).map(tech => (
                              <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="tech-badge">+{project.technologies.length - 5}</span>
                            )}
                          </div>
                        </div>

                        <div className="project-action-links">
                          {(project.demo || project.homepage) && (
                            <a href={project.demo || project.homepage || undefined} target="_blank" rel="noreferrer" className="action-btn demo-btn">
                              <MdOpenInNew /> Live Demo
                            </a>
                          )}
                          {project.backend && (
                            <a href={project.backend} target="_blank" rel="noreferrer" className="action-btn backend-btn">
                              <MdCode /> Backend
                            </a>
                          )}
                          {project.html_url && (
                            <a href={project.html_url} target="_blank" rel="noreferrer" className="action-btn github-btn">
                              <FaGithub /> Source
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        projectName={project.name}
                        alt={project.name}
                        link={project.demo || project.html_url || undefined}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
