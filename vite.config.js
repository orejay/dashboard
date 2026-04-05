import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/dashboard/",
  assetsInclude: ["**/*.PNG", "**/*.JPEG"],
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.tips180.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) return "mui";
            if (id.includes("react-dom") || id.includes("react-router"))
              return "vendor";
          }
        },
      },
    },
  },
});
