/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#ffe5e5',
          100: '#ffdbdb',
          200: '#ffd1d1',
          300: '#ffc7c7',
          400: '#ffbdbd',
          500: '#ffb3b3',
          600: '#f5a9a9',
          700: '#eb9f9f',
          800: '#e19595',
          900: '#d78b8b',
        },
        orange: {
          50: '#ffffd6',
          100: '#ffffcc',
          200: '#fff9c2',
          300: '#ffefb8',
          400: '#ffe5ae',
          500: '#ffdba4',
          600: '#f5d19a',
          700: '#ebc790',
          800: '#e1bd86',
          900: '#d7b37c',
        },
        yellow: {
          50: '#ffffe0',
          100: '#ffffd6',
          200: '#ffffcc',
          300: '#fffdc2',
          400: '#fff3b8',
          500: '#ffe9ae',
          600: '#f5dfa4',
          700: '#ebd59a',
          800: '#e1cb90',
          900: '#d7c186',
        },
        blue: {
          50: '#f3ffff',
          100: '#e9ffff',
          200: '#dfffff',
          300: '#d5ffff',
          400: '#cbf9ff',
          500: '#c1efff',
          600: '#b7e5f5',
          700: '#addbeb',
          800: '#a3d1e1',
          900: '#99c7d7',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
