/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
  extend: {
   gridTemplateColumns: {
    // Simple 16 column grid
    msGrids: 'repeat(auto-fit, minmax(200px, 1fr))',
   },
   colors: {
    lightWhite: '#efefef',
    lightBlue: '#455ff1',
    lightpurple: '#ec2662',
    grays: '#626262',
    white: '#fff',
    grayblack: '#1d2938',
    backgroundRgba: 'rgba(0, 0, 0, 0.7)',
    boxshadow: '5px 5px 30px rgba(0, 0, 0, 0.1)',
    background:
     'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(24,118,242,1) 100%)',
   },
   fontSize: {
    larger: '3rem',
    large: '2.5rem',
    fontSize1: '2rem',
    fontSize2: '1.4rem',
    fontSize3: '1.2rem',
    fontSize4: '16px',
   },
   screens: {
    // '2xl': { max: '1400px' },

    xl: { max: '1279px' },
    lg: { max: '1200px' },
    md: { max: '767px' },
    sm: { max: '700px' },
    smaller: { max: '400px' },

    tablet: { max: '992px' },
   },
  },
 },
 plugins: [],
}
