import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#faf5ff",
          200: "#f3e8ff",
          300: "#e9d5ff",
          400: "#e879f9",
          500: "#d946ef",
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        black: {
          100: "#f6f6f6",
          200: "#e7e7e7",
          300: "#d1d1d1",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
};

export default config;
