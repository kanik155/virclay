module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '96': '26rem',
      }
    },
    fontFamily: {
      'sans': ['AlternateGothic3'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
