/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F99417",
        secondary: "#FFF",
        alternative: "#222831",
      },
      fontFamily: {
        permaMarker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
