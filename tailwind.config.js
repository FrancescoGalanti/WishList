/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      padding: '2rem',

    },
    transitionDuration:{
      DEFAULT: "300ms"
    },
    extend: {
      colors:{
        primary: colors.violet['800'],
        primaryDark: colors.violet['900'],
        secondary: colors.pink['300'],
      }
    },
  },
  plugins: [],
}