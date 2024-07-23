import * as colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Serif', 'serif'],
				fira: ['Fira Sans', 'sans-serif'],
        staal: ['Staatliches', 'system-ui'],
      },
      colors: {
        background: colors.sky[50],
        foreground: colors.sky[800],
      }
    },
  },
  plugins: [],
}

