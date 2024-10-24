/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bgColor: '#0b041e',
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #3f1eff, #f459ff, #fc6a93, #fff2a2)',
      },
      borderColor: {
        'custom-border': '#3f1eff', // You can also set this to a gradient if needed
      },
      colors: {
        'main': '#e002a2',
        'second': '#47019d',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      }
    },
  },
  plugins: [require("daisyui")],
}

