/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  
  theme: {
    extend: {
      backgroundColor: {
        body: "#020202",
        hover: "#2E4057"
      },
      textColor: {
        body: "#FFFBFC",
        hover: "#2E4057"
      },
      fontFamily: {
        sans: 'Lexend, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
};
