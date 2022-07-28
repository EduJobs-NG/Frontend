/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      dropShadow: {
       feature:' 4px 4px 8px 0px #62626240'
      },
      colors:{
        blue: "#02378B"
      },
      backgroundImage:{
        hero:'url("/src/assets/hero.jpg")',
        jobs:'url("/src/assets/jobs.png")'
      }
    },
  },
  plugins: [],
}
