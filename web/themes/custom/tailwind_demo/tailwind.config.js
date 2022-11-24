/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.twig',
    '../../../{modules,themes}/custom/**/*.twig'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
