/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#045FCA",
        "darker-primary": "#034796",
        danger: "#f00",
        "darker-danger": "#a00",
      },
    },
  },
  plugins: [],
};
