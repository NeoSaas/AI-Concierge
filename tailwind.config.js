/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'cursive': ['Style Script', 'sans-serif'],
      'wedding': ['WeddingdayPersonalUseRegular', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [require('flowbite/plugin')],
}

