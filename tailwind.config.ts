import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          50: "#f0f7f2",
          100: "#d4ead9",
          200: "#a8d4b7",
          300: "#7dba96",
          400: "#5a9e75",
          500: "#3d7a56",
          600: "#2d6045",
          700: "#234d38",
          800: "#1a3a2a",
          900: "#0d1f15",
          950: "#061009",
        },
        gold: {
          50: "#fdf8e8",
          100: "#f7ecbc",
          200: "#f0d898",
          300: "#e8c97a",
          400: "#e0b861",
          500: "#d4a84b",
          600: "#c9973a",
          700: "#a87515",
          800: "#8b6010",
          900: "#6b4a0d",
        },
        cream: "#faf7f2",
      },
    },
  },
  plugins: [],
};

export default config;
