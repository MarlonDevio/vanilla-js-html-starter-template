/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: 'red'
        }
      });
    }
  ]
};
