import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff8fb',
          100: '#fdf1f6',
          200: '#f8dfe8',
          300: '#f2bfd4',
          400: '#e59db8',
          500: '#d77c9d',
          600: '#c75d83',
          700: '#ae446e',
          800: '#8e3556',
          900: '#742d47',
        },
        rose: {
          50: '#fff6f8',
          100: '#fdf0f5',
          200: '#fce4ee',
          300: '#f9d4e3',
          400: '#f3bfd3',
          500: '#e69bb2',
          600: '#d9829c',
          700: '#c06282',
          800: '#9d4666',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
        },
      },
      boxShadow: {
        soft: '0 18px 45px -28px rgba(146, 95, 116, 0.45)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
