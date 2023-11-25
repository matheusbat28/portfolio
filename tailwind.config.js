/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cor-linkedin': '#004182',
        'cor-instagram': '#F54746',
        'cor-github': '#080808',
        'cor-email': '#EF3D08',
        'cor-html': '#E34F26',
        'cor-css': '#1572B6',
        'cor-js': '#F7DF1E',
        'cor-python': '#3776AB',
        'cor-react': '#61DAFB',
        'cor-react-native': '#61DAFB',
        'cor-node': '#339933',
        'cor-mysql': '#4479A1',
        'cor-django': '#092E20',
        'cor-django-rest': '#0C4B33',
        'hover-pricipal': '#318EAD',
      },
    },
  },
  plugins: [],
}

