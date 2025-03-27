/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    extend: {
      keyframes: {
        fade: {
          to: {
            scale: '1',
            opacity: '1',
          },
        },
      },
      animation: {
        fade: 'fade linear forwards',
      },

      fontFamily: {
        'sans': ['"Open Sans"', '"Lato"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}