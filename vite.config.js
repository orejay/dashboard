import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Converts render-blocking <link rel="stylesheet"> to async at build time
function asyncCSSPlugin() {
  return {
    name: "async-css",
    apply: "build",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        `<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="$1"><noscript><link rel="stylesheet" href="$1"></noscript>`
      );
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), asyncCSSPlugin()],
  base: mode === "production" ? "/dashboard/" : "/",
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
    port: 3000,
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
            if (id.includes("react-slideshow"))
              return "slideshow";
            if (id.includes("lottie-react") || id.includes("react-slick"))
              return "animations";
            if (id.includes("react-select") || id.includes("react-toastify") || id.includes("react-helmet"))
              return "ui-libs";
          }
        },
      },
    },
  },
}));
