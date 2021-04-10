const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.rose,
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        display: ['Assistant'],
        body: ['Open Sans'],
      },
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
      ],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
