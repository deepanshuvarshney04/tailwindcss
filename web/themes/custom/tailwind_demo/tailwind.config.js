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
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Space: ["Space Grotesk"],
        fontawesome : ["FontAwesome"],
       },
      fontSize: {
        'f-13': '13px',
        'f-20': '20px',
        'f-85': '85px',
      },
      letterSpacing: {
        'text-space': '5px',
      },
      colors: {
        'textlogo': '#ed8f1c',
        'slider-bg': '#90bbbb',
        'card-bg': '#012b30',
        'card-body': '#daeded',
        'bordercolor': '#e9ebed',
        'footer-bg': '#f5fcfc',
        'footer-text': '#68737d',
        'footer-fourth': '#17494d',
      },
      lineHeight: {
        'lh-45': '2.813rem',
        'lh-48': '3rem',
        'lh-50': '3.12rem',
        'lh-55': '3.438rem',
        'lh-96': '6rem',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
