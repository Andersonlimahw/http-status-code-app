/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/index.html",
    "./public/index.html",
    "./src/**/*.{html,js,tsx}",
    "./src/pages/**/*.{html,js,tsx, ts}",
    "./src/components/**/*.{html,js,ts,tsx,jsx}",
    "./src/components/**/**/*.{html,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      scale: {
        '110': '1.1',
        '150': '1.5',
      }      
    },
  },
  plugins: [],
}

