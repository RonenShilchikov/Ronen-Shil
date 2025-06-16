/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}', // Optional if using /app directory
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['var(--font-roboto)', 'sans-serif'],
          terminal: ['var(--font-terminal)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
