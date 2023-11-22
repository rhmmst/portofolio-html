/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        prem: '#14b8a6',
      },
      screens: {
        '2xl' : '1320px',
      },
      fontFamily: {
        'quicksands' : ['Quicksand'],
        'inter' : ['Inter']
      }
    },
  },
  plugins: [],
}

