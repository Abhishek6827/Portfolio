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
            if (id.includes("@dimforge/rapier3d-compat") || id.includes("physics")) {
              return "three-physics-engine";
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
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 3000,
  },
});
