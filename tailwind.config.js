/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lekton: ['"Lekton"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
