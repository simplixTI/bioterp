import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      colors: {
        leaf: {
          50: '#f1f7f2',
          100: '#deecdf',
          200: '#bedac1',
          300: '#92be97',
          400: '#629c69',
          500: '#3f7f48',
          600: '#2e6437',
          700: '#26512e',
          800: '#1f4126',
          900: '#173220',
          950: '#0c1d12'
        },
        cream: {
          50: '#fbf8f1',
          100: '#f6efde',
          200: '#ecdfba',
          300: '#dec78a',
          400: '#d0ab5b'
        },
        gold: {
          400: '#d4a73a',
          500: '#b88b1f',
          600: '#9a721a'
        }
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse at top, rgba(190,218,193,0.45), transparent 60%), linear-gradient(180deg, #f7f3e8 0%, #ede4cf 100%)',
        'leaf-gradient':
          'linear-gradient(135deg, #173220 0%, #26512e 50%, #3f7f48 100%)'
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(23,50,32,0.25)',
        card: '0 20px 50px -20px rgba(23,50,32,0.35)'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
