// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#050404",
        secondary: "#10B981", // Added secondary color
        outlinePrimary: "#D6D2D2",
        outlineSecondary: "#10B981", // Added outlineSecondary color
      },
      borderColor: {
        primary: "#000000",
        secondary: "#10B981", // Added secondary border color
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
