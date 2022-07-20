/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#334155",
        secondary: "#64748b",
        linkedin: "#0077B5",
        github: "#171515",
        whatsapp: "#25D366",
        // Using modern hsl 'convert' color
        primary: "#77bef8",
        primaryAlt: "#64b5f7",
        icons: "#272a3f",
        navMenu: "#dde3ee",
        iconsSub: "#fafbff",
        darkTheme: "#0b111e",
        darkThemeNav: "#1c2536",
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
