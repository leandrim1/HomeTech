/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505', // preto profundo
          soft: '#101010', // preto secundário
          graphite: '#1A1A1A', // cinza grafite
          line: '#232323',
        },
        silver: {
          DEFAULT: '#C5C8CC',
          dim: '#A5A5A5',
        },
        gold: {
          DEFAULT: '#D7AE55',
          light: '#F1D58A',
          deep: '#A8802F',
        },
        snow: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(120deg, #A8802F 0%, #D7AE55 28%, #F1D58A 50%, #D7AE55 72%, #A8802F 100%)',
        'silver-sheen': 'linear-gradient(120deg, #6E7378 0%, #C5C8CC 42%, #FFFFFF 52%, #C5C8CC 62%, #6E7378 100%)',
        'grid-faint':
          'linear-gradient(to right, rgba(197,200,204,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(197,200,204,0.055) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.045) inset, 0 18px 40px -24px rgba(0,0,0,0.9)',
        lift: '0 1px 0 0 rgba(255,255,255,0.07) inset, 0 28px 60px -28px rgba(0,0,0,0.95), 0 0 0 1px rgba(215,174,85,0.22)',
        gold: '0 10px 30px -12px rgba(215,174,85,0.45)',
      },
      keyframes: {
        'sheen-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.92)', opacity: '0.55' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        'sheen-pan': 'sheen-pan 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
