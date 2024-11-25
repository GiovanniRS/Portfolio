/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ["JetBrains Mono", "monospace"]
      },
      colors: {
        violet: {
          gr: "#6803FA"
        },
        pink: {
          gr: "#F030A5"
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-text-fill"),
  ],
}

