/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#001524",
        "background-light": "#445D48",
        "accent-light-100": "#D6CC99",
        "accent-light-50": "#FDE5D4",
        "button-hover": "#FACFB1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
