import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      animation: {
        fall: 'fall 15s linear infinite',
        twinkle: 'twinkle ease-in-out infinite alternate',
        fadeIn: 'fadeIn 0.2s ease-out',
        fadeOut: 'fadeOut 0.2s ease-out',
        scaleIn: 'scaleIn 0.2s ease-out',
        scaleOut: 'scaleOut 0.2s ease-out',
        flyAcross: 'flyAcross 8s linear infinite',
        starTwinkle: 'starTwinkle 2s ease-in-out infinite',
        northStar: 'northStar 3s ease-in-out infinite',
        aurora: 'aurora 25s ease infinite alternate',
        auroraMove: 'auroraMove 60s ease infinite alternate',
        sparkleOut: 'sparkleOut 0.5s ease-out forwards',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        flyAcross: {
          '0%': { transform: 'translateX(120vw)' },
          '100%': { transform: 'translateX(-240vw)' }
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        northStar: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        aurora: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        auroraMove: {
          '0%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(10%)' },
        },
        sparkleOut: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(1) rotate(180deg)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config