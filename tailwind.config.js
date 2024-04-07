/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#5B656F',}
    },
    fontFamily: {
      'body':"'UnifrakturCook', cursive",
      'rufina': "'Rufina', serif",
    }

  },
  plugins: [require("daisyui")],
}

