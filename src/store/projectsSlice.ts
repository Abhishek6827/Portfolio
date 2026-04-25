import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';

interface Project {
  id: number | string;
  name: string;
  description: string;
  html_url: string | null;
  homepage: string | null;
  topics: string[];
  technologies: string[];
  demo: string | null;
  backend: string | null;
  category: string;
  featured: boolean;
  image: string;
  stargazers_count: number;
  updated_at: string;
}

interface ProjectsState {
  items: Project[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProjectsState = {
  items: [],
  status: 'idle',
  error: null,
};

const projectDetails: Record<string, any> = {
  Myntra: {
    description:
      "A fully responsive e-commerce fashion website clone with modern UI/UX, product catalog, shopping cart, and user authentication features.",
    technologies: ["React", "Node.js", "Redux", "CSS", "JavaScript"],
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
    technologies: ["React", "Bootstrap", "JavaScript", "Tailwind CSS", "Firebase"],
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
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
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
    technologies: [
      "Next.js",
      "Notion Database",
      "Tailwind CSS",
      "Firebase",
    ],
    demo: "https://tempusmail-backend--tempusmail6827.us-central1.hosted.app/",
    category: "Utility",
    featured: true,
  },
  Social_Connect: {
    description:
      "A full-stack real-time social platform with Socket.io-powered chat (text, image, audio, voice & file messages), WebRTC peer-to-peer video/audio calls, emoji reactions, message editing & deletion, read receipts, typing indicators, online/offline presence tracking, JWT + Google/Facebook OAuth via Passport.js, and user profiles with avatar & cover uploads.",
    technologies: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Passport.js", "Material UI"],
    demo: "https://social-media-lemon-six.vercel.app/login",
    category: "Social",
    featured: true,
  },
  Youtube_Automation: {
    description:
      "An AI-powered automated YouTube upload pipeline: scans Google Drive folders, generates metadata via 3-tier AI system (AssemblyAI transcription → Gemini Vision frame analysis → filename fallback), uploads to YouTube with configurable scheduling, and includes copyright claim detection with auto-revert protection. Features multi-job cron automation and draft/preview workflows.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Generative AI", "AssemblyAI", "FFmpeg", "Tailwind CSS", "NextAuth"],
    demo: "https://yt-automation-beta.vercel.app/",
    category: "Productivity",
    featured: true,
  },
};


export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await fetch('https://api.github.com/users/Abhishek6827/repos?per_page=100');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();

  // Whitelist and ordering
  const projectsToKeep = [
    "Social_Connect",
    "Youtube_Automation",
    "Tempusmail",
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
  ];

  const mappedProjects: Project[] = [];

  // Add whitelisted projects from GitHub
  projectsToKeep.forEach(name => {
    const repo = data.find((r: any) => r.name === name);
    const details = projectDetails[name] || {};

    if (repo) {
      mappedProjects.push({
        id: repo.id,
        name: name.replace(/_/g, " "),
        description: details.description || repo.description || "",
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        technologies: details.technologies || [],
        demo: details.demo || repo.homepage || null,
        backend: details.backend || null,
        category: details.category || "Other",
        featured: details.featured || false,
        image: details.image || "images/placeholder.webp",
        stargazers_count: repo.stargazers_count || 0,
        updated_at: repo.updated_at,
      });
    } else if (details.description) {
      // Fallback for custom projects not in GitHub or with different names
      mappedProjects.push({
        id: `custom-${name}`,
        name: name.replace(/_/g, " "),
        description: details.description,
        html_url: null,
        homepage: details.demo,
        topics: [],
        technologies: details.technologies || [],
        demo: details.demo,
        backend: details.backend || null,
        category: details.category || "Other",
        featured: details.featured || false,
        image: details.image || "images/placeholder.webp",
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
      });
    }
  });

  return mappedProjects;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectAllProjects = (state: { projects: ProjectsState }) => state.projects.items;
export const selectFeaturedProjects = createSelector(
  [selectAllProjects],
  (projects) => projects.filter(p => p.featured)
);
export const selectOtherProjects = createSelector(
  [selectAllProjects],
  (projects) => projects.filter(p => !p.featured)
);

export default projectsSlice.reducer;
