const colors = require('./src/constants/AppColors')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mt': ['Montserrat', 'sans-serif'],
        'mt-demi': ['MontserratDemi', 'sans-serif'],
        'mt-bold': ['MontserratBold', 'sans-serif'],
        'mt-extra-bold': ['MontserratDemi','sans-serif'],
        'mt-bold-italic':['MontesseratBoldItalic','sans-serif']
      },
      gridTemplateColumns:{
        'rectangle':'200px 300px 700px 150px',
        'rectangle2':'250px 200px 700px 300px 200px',

      },
      gridTemplateRows:{
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        '6':'6',
        '7':'7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '16': '15',
        '16': '16',
      },
    },
    colors: colors,
    screens: {
      'xs': '640px', //720x480
      'sm': '768px', //960×582
      'md': '1024px',
      'lg': '1255px', //1280×720
      'xl': '1280px',
      '2xl': '1536px', //1920x1080
                        //2048×1080
      // CUSTOM
      '2md': '1040px',
      '1.5xl':'1380px',

      'm44':'1600px',
      'm44_2': '1800px',

      'h-md': { 'raw': '(min-height: 700px)' },
      'h-lg':{ 'raw': '(min-height: 900px)' },
      'h-xl': { 'raw': '(min-height: 1200px)' },

      
    },
    fontSize: {
      '4xs':'0.2rem',
      '3xs':'0.4rem',
      '2xs':'0.55rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '0.9rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.125rem',
      '5xl': '2.325rem',
      '6xl': '3.75rem'
    }
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
  important: true
}