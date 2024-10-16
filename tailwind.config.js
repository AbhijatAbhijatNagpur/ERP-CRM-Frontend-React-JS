/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {


    extend: {
      colors: {
        'custom-sky': '#CAD2FF',
         'hover-sky'  :'#AAB6FF',
         'dashboard-color': '#E9EBF7',
           'container' : '#e5e4e0',
           'card': '#F6F6F6',
           'founds': '#006AFF',
           'bgcolor' :'#BF83FF',
           'custom-enviro' : '#74A57B',
           'hover-enviro' : '#BCDCC1',
           'enviro-menu' : '#DCE4D4',
           'ignite-menu' : '#FBEBE1',
           'ignite-btn' : '#FFC09B',
           'ignite-dash' : '#B1C7DA',
           'blue-light' : '#96A1E7',
           'red-light' : '#FF7E7E',


      },
    },
  },
  plugins: [],
};
