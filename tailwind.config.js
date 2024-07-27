import * as colors from "tailwindcss/colors"
import exposeColors from "@tailwind-plugin/expose-colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Serif', 'serif'],
				fira: ['Fira Sans', 'sans-serif'],
        staal: ['Staatliches', 'system-ui'],
        noto: ['Noto Serif Variable', 'serif'],
        aref: ['Aref Ruqaa', 'serif'],
        kurale: ['Kurale', 'serif'],
        aesthetic: ['aestheticregular', 'serif'],
        nelphim: ['nelphim', 'serif']
      },
      colors: {
        background: colors.sky[50],
        foreground: colors.sky[800],
      },
      container: {
        padding: {
          '2xl': "2rem",
          "xl": "4rem"
        },
        // screens: {
        //   '2xl': "1240px"
        // }
      }
    },
  },
  plugins: [
    exposeColors({
      extract: ["background", "foreground"],
      prefix: "--color"
    })
  ],
}

