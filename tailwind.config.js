// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ['Playfair Display', 'serif'],
//         sans: ['Raleway', 'sans-serif'],
//         hindi: ['Poppins', 'sans-serif'],
//         handwritten: ['Caveat', 'cursive']
//       },
//       colors: {
//         poem: {
//           light: '#f3f4f6',
//           dark: '#1f2937'
//         }
//       },
//       animation: {
//         'fade-in': 'fadeIn 1.5s ease-in-out',
//         'slide-up': 'slideUp 0.8s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode with class
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        hindi: ['Poppins', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        display: ['Montserrat', 'sans-serif']
      },
      colors: {
        dark: {
          100: '#2d2d3a',
          200: '#222230',
          300: '#1a1a25',
          400: '#15151d',
          500: '#111116',
        },
        light: {
          100: '#ffffff',
          200: '#f8f8fc',
          300: '#f0f0f8',
          400: '#e6e6f0',
          500: '#dcdce8',
        },
        accent: {
          indigo: '#8b5cf6',
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6',
          teal: '#14b8a6',
          amber: '#f59e0b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 25px rgba(168, 85, 247, 0.8)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft-dark': 'linear-gradient(to bottom right, #2d2d3a, #1a1a25)',
      },
    },
  },
  plugins: [],
}
