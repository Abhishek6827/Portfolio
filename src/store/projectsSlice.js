import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch projects from GitHub
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch(
      "https://api.github.com/users/Abhishek6827/repos"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();

    const projectDetails = {
      Myntra: {
        description:
          "A fully responsive e-commerce fashion website clone with modern UI/UX, product catalog, shopping cart, and user authentication features.",
        technologies: ["React", "Redux", "CSS", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Myntra/",
        category: "E-commerce",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
      },
      Amazon: {
        description:
          "A comprehensive Amazon-inspired e-commerce platform with product listings, search functionality, and responsive design.",
        technologies: ["React", "JavaScript", "CSS", "HTML"],
        demo: "https://Abhishek6827.github.io/Amazon/",
        category: "E-commerce",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
      },
      Kanban_WorkBoard: {
        description:
          "A project management dashboard with task tracking, team collaboration features, and intuitive drag-and-drop interface.",
        technologies: ["React", "Redux", "Tailwind CSS", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
        category: "Productivity",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1611224923853-0139583c060f?w=500&h=300&fit=crop&crop=center",
      },
      "Bharat-Clock": {
        description:
          "A beautiful digital clock application showing Indian time zones with elegant design and smooth animations.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://Abhishek6827.github.io/Bharat-Clock/",
        category: "Utility",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop&crop=center",
      },
      Calculator: {
        description:
          "A modern calculator application with scientific functions, memory operations, and responsive design.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://Abhishek6827.github.io/Calculator/",
        category: "Utility",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop&crop=center",
      },
      Elante_Mall: {
        description:
          "A shopping mall website with store directory, event listings, and interactive mall map functionality.",
        technologies: ["React", "CSS", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Elante_Mall/",
        category: "Business",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1555529902-5261145633bf?w=500&h=300&fit=crop&crop=center",
      },
      Skill_Up: {
        description:
          "An educational platform for skill development with course listings, progress tracking, and interactive learning modules.",
        technologies: ["React", "Bootstrap", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Skill_Up/",
        category: "Education",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
      },
      Portfolio: {
        description:
          "My personal portfolio website showcasing projects, skills, and professional information built with modern React technologies.",
        technologies: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
        demo: "https://Abhishek6827.github.io/Portfolio/",
        category: "Portfolio",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      },
    };

    const orderedProjects = [
      "Myntra",
      "Amazon",
      "Kanban_WorkBoard",
      "Skill_Up",
      "Elante_Mall",
      "Bharat-Clock",
      "Calculator",
      "Portfolio",
    ];

    const sortedProjects = orderedProjects
      .map((name) => data.find((project) => project.name === name))
      .filter(Boolean);

    const otherProjects = data.filter(
      (project) => !orderedProjects.includes(project.name)
    );

    return [...sortedProjects, ...otherProjects].map((project, index) => ({
      ...project,
      id: project.id || index + 1,
      description:
        projectDetails[project.name]?.description || project.description,
      technologies: projectDetails[project.name]?.technologies || [],
      demo: projectDetails[project.name]?.demo || null,
      category: projectDetails[project.name]?.category || "Other",
      featured: projectDetails[project.name]?.featured || false,
      image:
        projectDetails[project.name]?.image ||
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
      stars: project.stargazers_count || 0,
      lastUpdated: project.updated_at || new Date().toISOString(),
      deployStatus: "idle",
      deployedUrl: projectDetails[project.name]?.demo || null,
    }));
  }
);

// Deploy project
export const deployProject = createAsyncThunk(
  "projects/deployProject",
  async (projectId, { getState }) => {
    const { projects } = getState().projects;
    const project = projects.find((p) => p.id === projectId);
    if (!project) throw new Error("Project not found");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      id: projectId,
      deployedUrl: `https://Abhishek6827.github.io/${project.name}`,
      status: "deployed",
    };
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateProject: (state, action) => {
      const { id, updates } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        Object.assign(project, updates);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deployProject.pending, (state, action) => {
        const project = state.projects.find((p) => p.id === action.meta.arg);
        if (project) {
          project.deployStatus = "deploying";
        }
      })
      .addCase(deployProject.fulfilled, (state, action) => {
        const project = state.projects.find((p) => p.id === action.payload.id);
        if (project) {
          project.deployStatus = "deployed";
          project.deployedUrl = action.payload.deployedUrl;
        }
      })
      .addCase(deployProject.rejected, (state, action) => {
        const project = state.projects.find((p) => p.id === action.meta.arg);
        if (project) {
          project.deployStatus = "failed";
          project.deployError = action.error.message;
        }
      });
  },
});

export const { updateProject } = projectsSlice.actions;

// Selectors
export const selectAllProjects = (state) => state.projects.projects;
export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);
export const selectFeaturedProjects = (state) =>
  state.projects.projects.filter((project) => project.featured);

export default projectsSlice.reducer;
