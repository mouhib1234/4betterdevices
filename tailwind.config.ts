import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
          primary: {
          50:  '#e7f7f7',
          100: '#b5e7e7',
          200: '#91dcdb',
          300: '#5ecbcb',
          400: '#3fc1c1',
          500: '#0fb2b1',
          600: '#0ea2a1',
          700: '#0b7e7e',
          800: '#086261',
          900: '#064b4a',
        },
        secondary: {
          50:  '#f7e7f1',
          100: '#e7b5d3',
          200: '#dc91be',
          300: '#cb5ea1',
          400: '#c13f8e',
          500: '#b20772',
          600: '#a20e68',
          700: '#7e0b51',
          800: '#62083f',
          900: '#4b0630',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

export default config
