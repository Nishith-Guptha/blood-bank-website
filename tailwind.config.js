export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c'
        },
        neon: {
          cyan: '#06b6d4',
          yellow: '#eab308',
          pink: '#ec4899'
        }
      },
      boxShadow: {
        glow: '0 25px 80px rgba(239, 68, 68, 0.20)',
        neon: '0 20px 60px rgba(6, 182, 212, 0.20)',
        intense: '0 30px 140px rgba(255, 255, 255, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.05)', opacity: '1' }
        },
        tilt: {
          '0%, 100%': { transform: 'rotateY(-6deg) rotateX(3deg)' },
          '50%': { transform: 'rotateY(6deg) rotateX(-3deg)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(120px) rotate(180deg)', opacity: '0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        tilt: 'tilt 8s ease-in-out infinite',
        slideUp: 'slideUp 0.8s ease-out both',
        fadeIn: 'fadeIn 0.8s ease both',
        confetti: 'confetti 1.4s linear infinite'
      }
    }
  },
  plugins: []
}
