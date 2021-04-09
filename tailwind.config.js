module.exports = {
  // mode: 'jit',
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
        'dark',
        'disabled',
      ],
      cursor: [
        'dark',
        'disabled',
      ],
      opacity: [
        'dark',
        'disabled',
      ],
      textOpacity: [
        'dark',
        'disabled',
      ]
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
