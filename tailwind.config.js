const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        logo: ['Heebo', 'sans-serif'],
        footer: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gray: colors.trueGray,
        blue: colors.lightBlue,
        blackrussian: '#100E1D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
