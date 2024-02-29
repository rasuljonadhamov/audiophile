import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#D87D4A",
        blackColor: "#101010",
        whiteSecondary: "#F1F1F1",
        whitePrimary: "#FAFAFA",
        white: "#FFFFFF",
        black: "#000000",
        secondaryBlue: "#FBAF85",
      },
    },
  },
  plugins: [],
};
export default config;
