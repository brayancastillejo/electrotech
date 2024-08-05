/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#045FCA",
        "darker-primary": "#034796",
        danger: "#f00",
        "darker-danger": "#a00",
        "dark-primary": "#09f",
      },
      backgroundImage: {
        "form-background": "url(/src/assets/images/light-background.png)",
        "dark-form-background": "url(/src/assets/images/dark-background.png)",
      },
    },
  },
  plugins: [],
};
