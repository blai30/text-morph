module.exports = {
  // mode: 'jit',
  // NODE_ENV set to 'production' to purge.
  // Don't purge during development for PostCSS faster reloads.
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './src/index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
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
