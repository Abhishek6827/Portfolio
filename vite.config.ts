import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@react-three/rapier") || id.includes("@react-three/cannon") || id.includes("physics")) {
              return "three-physics";
            }
            if (id.includes("postprocessing")) {
              return "three-fx";
            }
            if (id.includes("three-stdlib") || id.includes("@react-three/drei") || id.includes("@react-three/fiber")) {
              return "three-utils";
            }
            if (id.includes("three")) {
              return "three-core";
            }
            if (id.includes("gsap")) {
              return "gsap";
            }
            if (id.includes("react") || id.includes("scheduler")) {
              return "react-vendor";
            }
            if (id.includes("@reduxjs") || id.includes("react-redux")) {
              return "state-vendor";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
});
