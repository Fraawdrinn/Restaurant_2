/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./*.{html, js}",
  ],
  theme: {
    extend: {
      // Fonts
      'sans': ['PrimarySansFont', ...defaultTheme.fontFamily.sans],
      'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

