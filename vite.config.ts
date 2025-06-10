import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "HotelierWidget",
      fileName: (format) => "hotelier-widgets.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        globals: {
          // jika pakai external lib
        },
      },
    },
  },
});
