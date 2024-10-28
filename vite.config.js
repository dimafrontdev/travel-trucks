import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      assets: path.resolve(__dirname, "./src/assets"),
      utils: path.resolve(__dirname, "./src/utils"),
      api: path.resolve(__dirname, "./src/api"),
      "src/redux": path.resolve(__dirname, "./src/redux"),
    },
  },
});
