/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        // Primary colors
        primary: {
          100: '#E0DBFF',
          200: '#C2B7FF',
          300: '#A393FF',
          400: '#8A4FFF',
          500: '#7536FF',
          600: '#6029EB',
          700: '#4C1FC3',
          800: '#3A189C',
          900: '#2A1270',
        },
        // Secondary colors
        secondary: {
          100: '#D1FDFF',
          200: '#A3FBFF',
          300: '#75F6FF',
          400: '#47F0FF',
          500: '#00E6FF',
          600: '#00C7DB',
          700: '#00A9B7',
          800: '#008A94',
          900: '#006C72',
        },
        // Accent colors
        accent: {
          100: '#FFE9E2',
          200: '#FFD3C5',
          300: '#FFBCA8',
          400: '#FFA58B',
          500: '#FF7D54',
          600: '#E65E35',
          700: '#CC4425',
          800: '#B32A15',
          900: '#991005',
        },
        // Success colors
        success: {
          100: '#E0FFED',
          200: '#B3FFCF',
          300: '#86FFB1',
          400: '#58FF93',
          500: '#2BFF75',
          600: '#00DB53',
          700: '#00B744',
          800: '#009335',
          900: '#007026',
        },
        // Warning colors
        warning: {
          100: '#FFF8D1',
          200: '#FFF1A3',
          300: '#FFE975',
          400: '#FFE247',
          500: '#FFDA00',
          600: '#DBB700',
          700: '#B79500',
          800: '#937300',
          900: '#705100',
        },
        // Error colors
        error: {
          100: '#FFE1E1',
          200: '#FFC3C3',
          300: '#FFA5A5',
          400: '#FF8787',
          500: '#FF5757',
          600: '#DB3838',
          700: '#B72828',
          800: '#931818',
          900: '#700808',
        },
        // Light colors
        light: {
          100: '#FFFFFF',
          200: '#F5F7FA',
          300: '#E4E7EB',
          400: '#CBD2D9',
          500: '#919AA3',
          600: '#52667A',
          700: '#384352',
          800: '#202A38',
          900: '#121A26',
        },
        // Dark colors
        dark: {
          100: '#292D4D',
          200: '#232643',
          300: '#1E2139',
          400: '#191C30',
          500: '#141726',
          600: '#10121D',
          700: '#0C0E15',
          800: '#08090E',
          900: '#040507',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(138, 79, 255, 0.3), 0 0 10px rgba(138, 79, 255, 0.2)' },
          '50%': { boxShadow: '0 0 10px rgba(138, 79, 255, 0.5), 0 0 20px rgba(138, 79, 255, 0.3)' },
        },
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 5s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'url("/images/mesh-bg.png")',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.primary.400"), 0 0 10px theme("colors.primary.500")',
        'neon-hover': '0 0 10px theme("colors.primary.400"), 0 0 20px theme("colors.primary.500")',
        'neon-secondary': '0 0 5px theme("colors.secondary.400"), 0 0 10px theme("colors.secondary.500")',
        'glow-accent': '0 0 15px theme("colors.accent.500")',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform, filter',
      },
    },
  },
  plugins: [],
};