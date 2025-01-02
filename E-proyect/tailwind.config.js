/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: 'var(--color-primary)',
        secundary: 'var(--color-secundary)',
        neutro: 'var(--color-neutro)',
        accent: 'var(--color-accent)', 
        
      },  
    },
  },
  plugins: [],
  
}