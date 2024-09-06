/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100":"#F1EAFF",
          primary: "#6528F7",
          secondary:"#A076F9",
          accent: "#D7BBF5"
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
}

