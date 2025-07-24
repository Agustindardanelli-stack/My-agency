/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // solo si existe la carpeta pages
    './src/**/*.{js,ts,jsx,tsx,mdx}', // para cubrir cualquier archivo en src
    './app/**/*.{js,ts,jsx,tsx,mdx}', // por si usás la carpeta app en la raíz
    './components/**/*.{js,ts,jsx,tsx,mdx}', // por si usás la carpeta components en la raíz
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // por si usás la carpeta pages en la raíz
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#233605',
        'custom-lime': '#ddd863',
        'custom-teal': '#1d4f56',
        'custom-blue': '#55bdca',
      },
    },
  },
  plugins: [
 
  ],
}