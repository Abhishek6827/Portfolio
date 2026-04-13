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
            if (
              id.includes("three") ||
              id.includes("@react-three") ||
              id.includes("@dimforge/rapier3d-compat") ||
              id.includes("react") ||
              id.includes("scheduler")
            ) {
              return "vendor";
            }
            if (id.includes("gsap")) {
              return "gsap";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 5000,
  },
});
