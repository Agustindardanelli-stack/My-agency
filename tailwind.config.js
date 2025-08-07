/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'green': '#ececec',   // Gris muy claro
          'lime': '#bded0b',    // Verde lima vibrante
          'teal': '#2F52E0',    // Azul medio
          'blue': '#03045E',    // Azul oscuro
          'white': '#ffffff',   // Blanco puro
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #2F52E0, #03045E)',
        'gradient-accent': 'linear-gradient(135deg, #bded0b, #ececec)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
  safelist: [
    // Asegurar que las clases personalizadas se incluyan
    'bg-custom-green',
    'bg-custom-lime',
    'bg-custom-teal', 
    'bg-custom-blue',
    'text-custom-green',
    'text-custom-lime',
    'text-custom-teal',
    'text-custom-blue',
    'border-custom-green',
    'border-custom-lime',
    'border-custom-teal',
    'border-custom-blue',
    'from-custom-green',
    'from-custom-lime',
    'from-custom-teal',
    'from-custom-blue',
    'to-custom-green',
    'to-custom-lime',
    'to-custom-teal',
    'to-custom-blue',
  ]
}