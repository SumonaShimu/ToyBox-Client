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
        mytheme: {

          "primary": "#93E7FB",

          "secondary": "#FFEEAD",

          "accent": "#D9534F",

          "neutral": "#021431",

          "base-100": "#FAFAFA",

          "info": "#3194F6",

          "success": "#5FC992",

          "warning": "#F7DE2D",

          "error": "#E60300",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

