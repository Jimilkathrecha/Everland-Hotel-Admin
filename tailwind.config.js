// /** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [nextui()],
};