/* module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
} */


// postcss.config.js
/* module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
} */

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-nesting': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true
      }
    }
  }
}