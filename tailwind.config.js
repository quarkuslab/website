import * as colors from "tailwindcss/colors"
import exposeColors from "@tailwind-plugin/expose-colors"
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
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
        nelphim: ['nelphim', 'serif'],

        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter Variable', 'sans-serif']
      },
      colors: {
        background: 'rgb(var(--color-bg) / <alpha-value>)',
        foreground: 'rgb(var(--color-fg) / <alpha-value>)',
        primary: {
          background: colors.sky[50],
          foreground: colors.sky[800],
        },
        secondary: {
          background: colors.purple[50],
          foreground: colors.purple[800],
        },
        tertiary: {
          background: colors.emerald[50],
          foreground: colors.emerald[800],
        }
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
    }),
    iconsPlugin({
      collections: getIconCollections(["tabler"])
    })
  ],
}

