/** @type {import('tailwindcss').Config} */
//const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito"', 'sans-serif'],
        'Work': ['"Work Sans"', 'sans-serif']
      },
      colors: {
        'dark': '#0c111b',
        'primary': '#00AFAA',
        'secondary': '#7BC794',
        'yellow': '#F4CD0C',
        'grey': '#E8EDEF',
        'white': '#FFF',
        'red':'#dc2626'
      },
    },
  },
  plugins: [],
}