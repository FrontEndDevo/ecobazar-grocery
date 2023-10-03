/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // For (gray and neutral) colors:
        main: {
          100: "#9CA3AF",
          500: "#374151",
          700: "#262626",
        },
        // For (green) colors:
        primary: {
          100: "#84D187",
          500: "#00B207",
          700: "#2C742F",
        },
      },
    },

    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
