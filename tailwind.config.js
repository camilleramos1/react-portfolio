/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownsugar: '#b27c66',
        darkbrownsugar: '#956a59',
        light: '#E2D5C9',
        darkbrown: '#5b4b3c',
        whiteish: '#faf9f6',
      }
    },
  },
  plugins: [],
}

