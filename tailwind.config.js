import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    colors: {
      'primary-orange': '#E74646',
      'primary-cream': '#FFE5CA',
      'secondary-orange': '#FA9884',
      'secondary-cream': '#FFF3E2'
    },
    fontFamily: {
      inter: ["var(--font-inter)", ...fontFamily.sans],
      roboto: ["var(--font-roboto)", ...fontFamily.sans],
    },
  },
}
export const plugins = [
  require('tailwind-scrollbar-hide')
]
