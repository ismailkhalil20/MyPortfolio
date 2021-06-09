const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nile-blue': {
          '50': '#f3f5f7', 
          '100': '#e8ebee', 
          '200': '#c5ced5', 
          '300': '#a1b0bb', 
          '400': '#5b7489', 
          '500': '#153956', 
          '600': '#13334d', 
          '700': '#102b41', 
          '800': '#0d2234', 
          '900': '#0a1c2a'
        },
        orange: colors.amber
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
