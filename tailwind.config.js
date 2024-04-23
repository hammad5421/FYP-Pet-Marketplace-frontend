/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "btn-color": "#c8aa00",
        "package-cards": "#f2f2f2",
        "btn-hover": "#1b7d75"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
