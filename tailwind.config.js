/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Montserrat', 'sans-serif'],  
      },
      colors: {
        'primary': '#003366',  
        'secondary': ' #00B894',
        'Complementary': '#FF6F00'
      },
        perspective: {
        '1000': '1000px',
      },
      transformOrigin: {
        'center': 'center',
      },
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  plugins: [],
}
