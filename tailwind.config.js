const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      tealL: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'dark': '#212121',
      'light': '#f3f3f3',
      // 'pokemon': "url('/icon_back.png')",
    },
    fontFamily: {
      odibeeSans: ['Odibee Sans', 'cursive']
    },
    extend:{
    backgroundImage: theme => ({
      'pokemon-img': "url('icon_back.png')",

     })
    }
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }