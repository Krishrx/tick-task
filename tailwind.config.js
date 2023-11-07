/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'text': '#0f0817',
        'background': '#f7f4fb',
        'primary': '#8045bf',
        'secondary': '#d3bee9',
        'accent': '#6c38a3',
      },
    },
  },
  plugins: [],
});

