import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
   server: {
      host: "0.0.0.0", // Listen on all interfaces
      port: 5173, // Ensure this matches your development server's port
   },
   plugins: [react()],
});
