const colors = require('tailwindcss/colors')

const hover = require('./tailwindcss/hover')

module.exports = {
  purge: [
    './index.html',
    './site/**/*.vue',
    './site/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter var', 'Inter', 'PingFang SC'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    hover(),
  ],
}
