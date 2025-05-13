/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B1F3B', // Dark blue from logo
          light: '#2A2F5A',
          dark: '#12152A'
        },
        flame: {
          DEFAULT: '#8B1818', // Red/burgundy from logo
          light: '#A62020',
          dark: '#701414'
        },
        gold: {
          DEFAULT: '#E4A853', // Gold/yellow from logo
          light: '#F0B964',
          dark: '#C89142'
        },
        primary: {
          50: '#f0f1f7',
          100: '#e0e2ee',
          200: '#c2c6de',
          300: '#a3a9cd',
          400: '#858dbd',
          500: '#6670ac',
          600: '#515789',
          700: '#3d4266',
          800: '#282c44',
          900: '#1B1F3B', // navy as primary-900
          950: '#12152A',
        },
        secondary: {
          50: '#fdf2f2',
          100: '#fde4e4',
          200: '#fbc5c5',
          300: '#f89595',
          400: '#f45959',
          500: '#8B1818', // flame as secondary-500
          600: '#701414',
          700: '#5c1111',
          800: '#470d0d',
          900: '#330909',
          950: '#1f0606',
        },
        accent: {
          50: '#fdf9f2',
          100: '#fbf3e5',
          200: '#f7e7cc',
          300: '#f3dbb2',
          400: '#eecf99',
          500: '#E4A853', // gold as accent-500
          600: '#b78642',
          700: '#8a6532',
          800: '#5c4321',
          900: '#2f2211',
          950: '#171108',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};