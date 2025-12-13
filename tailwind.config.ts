import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#F5F5F5",
        purple: {
          primary: "#8B5CF6",
          accent: "#A78BFA",
          dark: "#6D28D9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-purple": "linear-gradient(to right, #8B5CF6, #A78BFA, #6366F1)",
        "gradient-dark": "linear-gradient(to bottom, #000000, rgba(109, 40, 217, 0.2), #000000)",
      },
    },
  },
  plugins: [],
};

export default config;
