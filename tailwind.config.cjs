/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme')
const files = require('./files.cjs')

const preferredStyles = {
  letterSpacing: '-0.025em',
  lineHeight: '1.25',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...files],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f9f3eb',
          75: '#e5cdad',
          100: '#dab88b',
          200: '#cb9a59',
          300: '#c08537',
          400: '#865d27',
          500: '#755122',
        },
        secondary: {
          50: '#e7eced',
          75: '#9eafb4',
          100: '#768e95',
          200: '#3a5d67',
          300: '#123c48',
          400: '#0d2a32',
          500: '#0b252c',
        },
        success: {
          50: '#e6f6f4',
          75: '#96dcd2',
          100: '#6bcdbf',
          200: '#2bb8a4',
          300: '#00a991',
          400: '#007666',
          500: '#006758',
        },
        warning: {
          50: '#fef9ed',
          75: '#fce7b5',
          100: '#fadd96',
          200: '#f8cf69',
          300: '#f7c54a',
          400: '#ad8a34',
          500: '#97782d',
        },
        danger: {
          50: '#fae9e9',
          75: '#eaa6a6',
          100: '#e18181',
          200: '#d44a4a',
          300: '#cb2525',
          400: '#8e1a1a',
          500: '#7c1717',
        },
      },
      backgroundImage: {
        resort: "url('/images/jake-irish-61OONDO7nrU-unsplash.jpg')",
        nature: "url('/images/john-lee-oMneOBYhJxY-unsplash.jpg')",
        'resort-2': "url('/images/sara-dubler-Koei_7yYtIo-unsplash.jpg')",
        grain: "url('/images/grain.png')",
        seashore: "url('/images/gaddafi-rusli-2ueUnL4CkV8-unsplash.jpg')",
      },
      backgroundPosition: {
        'top-16': 'center top -16rem',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        serif: ['Old Standard TT', ...fontFamily.serif],
      },
      minWidth: {
        xs: '320px',
      },

      typography: {
        DEFAULT: {
          css: [
            {
              h1: {
                fontWeight: '700',
                ...preferredStyles,
              },
              h2: {
                ...preferredStyles,
              },
              h3: {
                ...preferredStyles,
              },
              li: {
                marginBottom: '0.25em',
                marginTop: '0.25em',
              },
            },
          ],
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
    content: false,
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
