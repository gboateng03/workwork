import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [imagetools(), reactRefresh()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // 根路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          core: [
            "react",
            "react-dom",
            "react-router-dom",
            "mobx",
            "mobx-react-lite",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
});
