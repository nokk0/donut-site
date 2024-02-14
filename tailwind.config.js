/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'primary-color':'#FEEBE7',
        'secondary-color': '#66183F',
        'nav-bar-bg-color-sm': '#FFF7F6',
        'text-gradient-1':'#D62689',
        'text-gradient-2':'#952792',

      },
      fontFamily:{
        main:'Inter, sans-serif',
      }
    }
  },
  plugins: [],
};



