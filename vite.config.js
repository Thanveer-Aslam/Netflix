import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true, // optional: auto-open browser
  },
  preview: {
    port: 4173, // default preview port
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
  // 👇 important: fallback to index.html for React Router
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
