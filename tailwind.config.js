/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#rgb(27,36,40)",
        accent: "#2d394b",
        transcript: "#afbfcb",
        based: "#rgb(45,57,75)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
