/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

//Iconos svg

const {
  iconsPlugin,
  dynamicIconsPlugin,
} = require("@egoist/tailwindcss-icons");

export default {
  darkMode: "selector",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      main: ["DM Sans", ...defaultTheme.fontFamily.sans],
      secondary: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7931A", // Color secundario
          // light: "#ff5757", // Variante clara
          dark: "#201E1C", // Variante oscura
          // accent: "#C72C29", // Variante de acento
          soft: "#FAF8F7", // Variante suave
        },
        secondary: {
          DEFAULT: "#201E1C", // Color principal
          // light: "#5a5a5a", // Variante clara
          // dark: "#1a1a1a", // Variante oscura
          //no hay variable de acento de esta paleta de color secundary
          // soft: "#f2f2f2", // Variante suave
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    iconsPlugin({ prefix: "icon" }),
    require("preline/plugin"),
    require("@tailwindcss/aspect-ratio"),
    dynamicIconsPlugin({ prefix: "icon" }),
  ],
};
