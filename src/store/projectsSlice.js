// store/projectsSlice.js
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

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
      },
      Amazon: {
        description:
          "A comprehensive Amazon-inspired e-commerce platform with product listings, search functionality, and responsive design.",
        technologies: ["CSS", "HTML"],
        // demo: "https://Abhishek6827.github.io/Amazon/",
        category: "E-commerce",
        featured: false,
      },
      Skill_Up: {
        description:
          "An educational platform for skill development with course listings, progress tracking, and interactive learning modules.",
        technologies: ["React", "Bootstrap", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Skill_Up/",
        category: "Education",
        featured: true,
      },

      Calculator: {
        description:
          "A modern calculator application with scientific functions, memory operations, and responsive design.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://Abhishek6827.github.io/Calculator/",
        category: "Utility",
        featured: false,
      },
      Elante_Mall: {
        description:
          "A shopping mall website with store directory, event listings, and interactive mall map functionality.",
        technologies: ["React", "CSS", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Elante_Mall/",
        category: "Business",
        featured: true,
      },
      Kanban_WorkBoard: {
        description:
          "A full-stack project management dashboard with Django backend and React frontend. Features task tracking, team collaboration, and intuitive drag-and-drop interface.",
        technologies: ["Django", "React", "Redux", "Tailwind CSS"],
        demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
        backend: "https://abhishektiwari6827.pythonanywhere.com/",
        category: "Productivity",
        featured: true,
      },
      "Market-Seasonality-Explorer": {
        description:
          "A calendar application highlighting seasonal market trends and patterns for traders and investors.",
        technologies: ["React", "Tailwind CSS", "Recharts", "Binance API"],
        demo: "https://abhishek6827.github.io/Market-Seasonality-Explorer/",
        category: "Productivity",
        featured: true,
      },
      "E-commerce": {
        description:
          "A modern e-commerce platform with product listings, shopping cart, and user authentication.",
        technologies: ["React", "JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/E-commerce/",
        category: "E-commerce",
        featured: false,
      },
      Currency_Converter: {
        description:
          "A currency converter application with real-time exchange rates and intuitive interface.",
        technologies: ["JavaScript", "CSS", "HTML", "API"],
        demo: "https://abhishek6827.github.io/Currency_Converter/",
        category: "Utility",
        featured: false,
      },
      Password_Generator: {
        description:
          "A secure password generator with customizable options for length and character types.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/Password_Generator/",
        category: "Utility",
        featured: false,
      },
      RPS: {
        description:
          "A Rock Paper Scissors game with interactive UI and score tracking.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/RPS/",
        category: "Game",
        featured: false,
      },
      "Tic-Tac-Toe": {
        description:
          "A Tic Tac Toe game with multiplayer functionality and win detection.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/Tic-Tac-Toe/",
        category: "Game",
        featured: false,
      },
      "Bharat-Clock": {
        description:
          "A beautiful digital clock application showing Indian time zones with elegant design and smooth animations.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://Abhishek6827.github.io/Bharat-Clock/",
        category: "Utility",
        featured: false,
      },
      Tempusmail: {
        description:
          "A temporary email service with real-time email receiving, Firebase backend integration, and modern UI. Features include disposable email addresses, automatic email cleanup, and instant email notifications.",
        technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
        demo: "https://tempusmail-backend--tempusmail6827.us-central1.hosted.app/",
        backend: "https://tempusmail-backend--tempusmail6827.us-central1.hosted.app/",
        category: "Utility",
        featured: true,
      },
    };

    const availableRepos = data.map((repo) => repo.name);
    console.log("Available repositories:", availableRepos);

    // Make sure these names match exactly with your GitHub repo names
    const projectsToKeep = [
      "Myntra",
      "Amazon",
      "Kanban_WorkBoard",
      "Skill_Up",
      "Elante_Mall",
      "Bharat-Clock",
      "Calculator",
      "Market-Seasonality-Explorer",
      "E-commerce",
      "Currency_Converter",
      "Password_Generator",
      "RPS",
      "Tic-Tac-Toe",
      "Tempusmail",
    ].filter((name) => availableRepos.includes(name));

    console.log("Projects to keep:", projectsToKeep);

    const filteredProjects = data.filter((project) =>
      projectsToKeep.includes(project.name)
    );

    // Order the projects
    const orderedProjects = projectsToKeep
      .map((name) => {
        const repo = filteredProjects.find((project) => project.name === name);
        if (!repo) {
          console.warn(`Project not found: ${name}`);
          return null;
        }
        return repo;
      })
      .filter(Boolean);

    const mappedProjects = orderedProjects.map((project) => {
      const details = projectDetails[project.name] || {};

      return {
        ...project,
        id: project.id,
        description: details.description || project.description,
        technologies: details.technologies || [],
        demo: details.demo || null,
        backend: details.backend || null,
        category: details.category || "Other",
        featured: details.featured || false,
        stargazers_count: project.stargazers_count || 0,
        updated_at: project.updated_at || new Date().toISOString(),
        deployStatus: "idle",
        deployedUrl: details.demo || null,
      };
    });

    // Add Tempusmail if not in GitHub repos
    if (!availableRepos.includes("Tempusmail")) {
      const tempusmailDetails = projectDetails["Tempusmail"];
      mappedProjects.unshift({
        id: "tempusmail-custom",
        name: "Tempusmail",
        description: tempusmailDetails.description,
        technologies: tempusmailDetails.technologies,
        demo: tempusmailDetails.demo,
        backend: tempusmailDetails.backend,
        category: tempusmailDetails.category,
        featured: tempusmailDetails.featured,
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
        deployStatus: "idle",
        deployedUrl: tempusmailDetails.demo,
        html_url: null, // No GitHub repo
      });
    }

    return mappedProjects;
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
      });
  },
});

export const { updateProject } = projectsSlice.actions;

// Selectors
export const selectAllProjects = (state) => state.projects.projects;
export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);

// Memoized selectors using createSelector
export const selectFeaturedProjects = createSelector(
  [selectAllProjects],
  (projects) => projects.filter((project) => project.featured)
);

export const selectProjectsByCategory = createSelector(
  [selectAllProjects, (_, category) => category],
  (projects, category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  }
);

export default projectsSlice.reducer;
