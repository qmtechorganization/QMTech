/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        body: "var(--color-bg)",
        hover: "var(--color-hover)",
        accent: "var(--color-accent-bg)",
      },
      textColor: {
        body: "var(--color-text)",
        hover: "var(--color-text-hover)",
        accent: "var(--color-accent-text)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
        accent: "var(--color-accent-bg)",
      },
      ringColor: {
        accent: "var(--color-accent-bg)",
      },
      fontFamily: {
        sans: 'Lexend, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
};