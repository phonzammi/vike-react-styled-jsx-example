import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({}),
    react({
      babel: {
        plugins: [["styled-jsx/babel", { sourceMaps: false }]],
      },
    }),
  ],
  optimizeDeps: {
    include: ["styled-jsx/style"],
  },
});
