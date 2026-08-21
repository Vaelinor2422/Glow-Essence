/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF9FAF',
          softPink: '#FFD9DE',
          lightPink: '#FFF0F2',
          accent: '#F58BFF',
          cyan: '#C8F8FA',
          mint: '#C9F7E6',
          cream: '#FFF8F5',
          ink: '#2A2440',
          stone: '#6B6478',
          gold: '#F5B85B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 18px 50px -25px rgba(255, 159, 175, 0.55)',
        soft: '0 14px 40px -22px rgba(42, 36, 64, 0.35)',
        float: '0 30px 70px -30px rgba(245, 139, 255, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatySlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(8deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        floatySlow: 'floatySlow 11s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};
