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
            if (id.includes("three-stdlib") || id.includes("@react-three")) {
              return "three-utils";
            }
            if (id.includes("three")) {
              return "three-core";
            }
            if (id.includes("gsap")) {
              return "gsap";
            }
            if (id.includes("react")) {
              return "react-vendor";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
