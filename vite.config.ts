import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@img": "/src/assets/img",
      "@apis": "/src/apis",
      "@shared": "/src/shared",
      "@hooks": "/src/hooks",
      "@store": "/src/store",
      "@styles": "/src/styles",
    },
  },
});
