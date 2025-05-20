import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/",
  server: {
    host: true, // 👈 This allows access from your local network
    port: 5173, // Optional: you can change the port if needed
  },
});
