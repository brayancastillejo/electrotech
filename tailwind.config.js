/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#045FCA",
        "darker-primary": "#034796",
        danger: "#f00",
        "darker-danger": "#a00",
      },
      backgroundImage: {
        "form-background": "url(/src/assets/images/light-background.png)",
      },
    },
  },
  plugins: [],
};
