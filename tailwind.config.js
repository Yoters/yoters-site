module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'quick': ['Quicksand', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '	768px',
      'lg': '1024px',
      'xl': '1280px',
      'one': '1356px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        'bannerTitle': '3.2vw',
        'bannerDescription': '1.5vw',
        'bannerButtons': '1.1vw',
        'headerTitle': '2.4vw',
        'headerDescription': '1.8vw',
      },
      backgroundSize: {
        'none': '0%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
