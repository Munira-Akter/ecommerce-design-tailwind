/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding: "1rem",
    },
    screens:{
      sm: "576px",
      md: "768px",
      lg : "996px",
      xl:  "1200px"
    },
    extend: {
      fontFamily:{
        poppins : 'Poppins, sans-serif',
        roboto : 'Roboto, sans-serif',
      },
      colors:{
        primary : "#EB1D36",
      }
    },
  },
  variants:{
    extend:{
      display : ['group-hover'],
      visibility:['group-hover'],
    }

  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
}