/** @type {import('tailwindcss').Config} */
const themesPlugin = require('./themes/theme.plugin.js')
const themes = require('./themes/themes.json')

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {}
  },
  plugins: [themesPlugin({ colorThemes: themes })]
}
