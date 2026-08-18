/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#0B132B',
          850: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        brand: {
          blue: '#0066FF',
          cobalt: '#0052CC',
          darkblue: '#0A192F',
          cyan: '#00C6FF',
          sky: '#38BDF8',
          emerald: '#10B981',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Sora', 'sans-serif'],
        body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-beam': 'borderBeam 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.4, filter: 'blur(20px)' },
          '50%': { opacity: 0.8, filter: 'blur(30px)' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 102, 255, 0.12)',
        'glass-hover': '0 12px 40px 0 rgba(0, 198, 255, 0.25)',
        'cyan-glow': '0 0 25px rgba(0, 198, 255, 0.3)',
        'blue-glow': '0 0 25px rgba(0, 102, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
