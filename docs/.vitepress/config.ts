import { defineConfig } from "vitepress";
import { version } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/hotelier-widgets/",
  title: "Hotelier Widgets",
  description: "List of widget for hotelier",
  head: [
    ["link", { rel: "icon", href: "/hotelier-widgets/favicon.ico" }],
    ["script", { src: `https://cdn.jsdelivr.net/npm/hotelier-widgets@${version}/dist/hotelier-widgets.js`, type: "module" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.png", alt: "Hotelier Widgets Logo", width: 24, height: 24 },
    nav: [
      { text: "Get Started", link: "/installation" },
      { text: "Demo", link: "/demo" },
      {
        text: version,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/Bintang-Technology-Solusindo/hotelier-widgets/releases",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Get Started",
        items: [{ text: "Installation", link: "/installation" }],
      },
      {
        text: "Widgets",
        items: [{ text: "Demo", link: "/demo" }],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Bintang-Technology-Solusindo/hotelier-widgets" }],
  },
});
