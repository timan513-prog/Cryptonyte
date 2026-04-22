/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070A',
          900: '#0B0B10',
          800: '#111118',
          700: '#181821',
          600: '#22222D',
        },
        cream: {
          50: '#FBF7EF',
          100: '#F5EFE4',
          200: '#E8DFCD',
          300: '#CFC4AC',
          400: '#A8997A',
        },
        champagne: {
          50: '#FBEFC9',
          100: '#F4DFA0',
          200: '#ECCE75',
          300: '#E5B85C',
          400: '#D39C3A',
          500: '#B07D22',
          600: '#7D5812',
        },
        mint: {
          100: '#D7F5EA',
          200: '#A7EDD1',
          300: '#7EE3C4',
          400: '#4CCFA6',
          500: '#25B088',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-grid':
          'radial-gradient(circle at 1px 1px, rgba(229,184,92,0.12) 1px, transparent 0)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(245,239,228,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(229,184,92,0.2), 0 20px 60px -10px rgba(229,184,92,0.12)',
      },
      animation: {
        'slow-spin': 'spin 40s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
