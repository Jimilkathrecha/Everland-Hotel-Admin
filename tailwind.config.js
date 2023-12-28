/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noticia': ['"Noticia Text"', 'serif'],
        'Philosopher': ['"Philosopher"', 'sans- serif'],
        'lucida-bright-regular': ['"lucida-bright-regular"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
        'Cormorant Garamond': ['"Cormorant Garamond"', 'serif'],
        'Lobster Two': ['"Lobster Two"', 'cursive'],
        'Montserrat': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};