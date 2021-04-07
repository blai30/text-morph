module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
