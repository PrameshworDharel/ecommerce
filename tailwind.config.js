/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary':'#ffffff',
      'secondary':'#FBEBB5',
      'Tertiary':'#FAF4F4',
       'fourth':'#9F9F9F',
       'fifth':' #FFF9E5',
       'sixth': '#FAF4F480',
       'seventh':'#F5F5F5'
    },
    container: {
 
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  
    extend: {},
  },
  plugins: [],
}

