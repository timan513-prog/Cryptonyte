/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070502',
          900: '#0b0805',
          800: '#120d07',
        },
        gold: {
          50: '#FFF8E5',
          100: '#FBEDB9',
          200: '#F5DC85',
          300: '#ECC75A',
          400: '#DFB23F',
          500: '#CDA349',
          600: '#A8822F',
          700: '#7A5E1F',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-fade':
          'linear-gradient(to right, rgba(205,163,73,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(205,163,73,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'spin-slow': 'spin 22s linear infinite',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
