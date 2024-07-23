/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Serif', 'serif'],
				fira: ['Fira Sans', 'sans-serif'],
        staal: ['Staatliches', 'system-ui'],
      }
    },
  },
  plugins: [],
}

