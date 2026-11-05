/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        strawberry: {
          50: '#FFF1F4',
          100: '#FFE4EC',
          200: '#FFCCD8',
          300: '#FFA0B5',
          400: '#FF85A1',
          500: '#FF6B8B',
          600: '#F43F5E',
          700: '#E8436E',
          800: '#BE123C',
          900: '#881337',
          950: '#4C0519',
          glow: 'rgba(255, 107, 139, 0.45)',
        },
        glacier: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          deep: '#0F172A',
          night: '#070B16',
          nightCard: 'rgba(15, 23, 42, 0.85)',
        },
        // Stitch Glacier Strawberry & Midnight Tokens
        'primary-brand': '#346479',
        'primary-container': '#a8d8f0',
        'on-primary-container': '#2e5f74',
        'secondary-brand': '#ad2c4f',
        'secondary-container': '#fd6989',
        'surface-tint': '#346479',
        'surface-dim': '#cbdafc',
        'surface-container-low': '#f1f3ff',
        'surface-container': '#e8eeff',
        'surface-container-high': '#dfe8ff',
        'surface-container-highest': '#d7e3ff',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#0b1b35',
        'on-surface-variant': '#41484c',
        'outline-brand': '#71787c',
        'outline-variant': '#c0c7cc',
      },
      borderRadius: {
        'card': '1.5rem',
        'pill': '9999px',
      },
      animation: {
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
