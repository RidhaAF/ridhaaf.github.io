const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "index.html",
    "./index.html",
    "*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        ...colors,
        primary: "#059669",
        secondary: "#63748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
