/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "public/**/*.{html, js}",
    "src/**/*.{js}",
  ],
  theme: {
    extend: {
      'sans': ['PrimarySansFont', ...defaultTheme.fontFamily.sans],
      'serif': ['CustomSerifFont', ...defaultTheme.fontFamily.serif],
      'mono': ['CustomMonoFont', ...defaultTheme.fontFamily.mono],
      'display': ['CustomDisplayFont', 'sans-serif'],
      
      'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

