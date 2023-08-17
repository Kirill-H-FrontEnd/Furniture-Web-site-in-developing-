import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#272727",
        black_secondary: "#000",
        green: "#346751",
        gray: "#ABABAB",
        white: "#fff",
        white_bg: "#F9F9F9",
      },
      gridTemplateColumns: {
        auto_2: "repeat(2, auto)",
        auto_3: "repeat(3, auto)",
        auto_4: "repeat(4, auto)",
        auto_5: "repeat(5, auto)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
