import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from '@honkhonk/vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), reactRefresh()],
  base: "./",
  build: {
    outDir: path.resolve(__dirname, "build"),
  },
});