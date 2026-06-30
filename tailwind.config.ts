import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif']
      },
      colors: {
        // remapped to brand cobalt blue scale (label color)
        leaf: {
          50: '#eef5ff',
          100: '#dbeaf9',
          200: '#b9d6f2',
          300: '#86b8e6',
          400: '#4f95d6',
          500: '#1875e0',
          600: '#125bb3',
          700: '#0e498f',
          800: '#0b3870',
          900: '#0a2a55',
          950: '#06192e'
        },
        // warm editorial cream / paper
        cream: {
          50: '#f7f2e8',
          100: '#efe7d5',
          200: '#e3d4b2',
          300: '#d2bb88',
          400: '#bf9d5b'
        },
        // lime-green accent (badges on bottle label)
        gold: {
          400: '#b9e36a',
          500: '#9fcf4d',
          600: '#7eb030'
        },
        ink: {
          50: '#f5f7fa',
          900: '#0c1a2b',
          950: '#06101c'
        }
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse at top right, rgba(134,184,230,0.35), transparent 55%), radial-gradient(ellipse at bottom left, rgba(191,157,91,0.18), transparent 55%), linear-gradient(180deg, #f7f2e8 0%, #efe7d5 100%)',
        'leaf-gradient':
          'linear-gradient(135deg, #06192e 0%, #0e498f 55%, #1875e0 100%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(12,26,43,0.20)',
        card: '0 24px 60px -24px rgba(12,26,43,0.35)',
        bottle: '0 50px 80px -30px rgba(6,16,28,0.55)'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 8s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
