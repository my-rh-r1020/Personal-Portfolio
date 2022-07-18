/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#334155",
        secondary: "#64748b",
        // Using modern hsl 'convert' color
        primary: "#77bef8",
        primaryAlt: "#64b5f7",
        icons: "#272a3f",
        navMenu: "#dde3ee",
        iconsSub: "#fafbff",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      // screens: {
      //   "2xl": "1320px",
      // },
    },
  },
  plugins: [],
};
