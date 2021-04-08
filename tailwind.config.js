module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
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
    extend: {
      backgroundColor: [
        'disabled',
      ],
      cursor: [
        'disabled',
      ],
      opacity: [
        'disabled',
      ],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
