/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-color": "var(--clr-dark)",
        "blue-color": "var(--clr-blue)",
        "green-color": "var(--clr-green)",
        "purple-color": "var(--clr-purple)",
        "main-font": "var(--clr-font-main)",
        "normal-font": "var(--clr-font-normal)",
        "light-font": "var(--clr-font-light)",
        "test-clr": "var(--clr-test)",
      },
    },
  },
  plugins: [],
};
