/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#FAF8FF',
          100: '#F4F0FF',
          200: '#E9E2FE',
          300: '#D6C8FD',
          400: '#BAA3FB',
          500: '#9B7BF7',
          600: '#7E53EE',
          700: '#6332DC',
          800: '#4C1D95',
          900: '#32106A',
          950: '#1D0742',
        },
        darkbg: {
          DEFAULT: '#0B0914',
          surface: '#131024',
          card: '#1A1633',
          border: '#2A244D',
          hover: '#241E45'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'soft-purple': '0 4px 20px -2px rgba(139, 92, 246, 0.12)',
        'glow-purple': '0 0 25px -5px rgba(126, 83, 238, 0.35)',
        'glass': '0 8px 32px 0 rgba(109, 40, 217, 0.08)',
      }
    },
  },
  plugins: [],
}
