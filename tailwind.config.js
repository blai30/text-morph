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
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        display: ['Assistant'],
        body: ['Open Sans'],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.400'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.indigo.200'),
            },
            a: {
              color: theme('colors.indigo.400'),
            }
          },
        },
      }),
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
      typography: [
        'dark',
      ],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
