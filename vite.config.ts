import { defineConfig } from "vite";

export default defineConfig({
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
