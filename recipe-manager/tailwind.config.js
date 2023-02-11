/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}",],
  theme: {
    extend: {
      colors: {
        'smoothRed':'#66023C',
        'lightPink':'#FF8080',
        'brightYellow':'#FFF7BC',
        'beuGreen':'#C0EDA6'
   },
    },
   
  },
 
  plugins: [],
  prefix: 'tw-'
}
