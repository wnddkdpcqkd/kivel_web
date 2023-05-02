/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {},
      colors: {
        primary: {
          90: "#FF693A",
          30: "#FFD9CE",
          10: "#FFF5F2",
        },
        gray: {
          90: "#272E35",
          70: "#7F8BA4",
          50: "#BEC6D6",
          30: "#E6EAF2",
          20: "#F2F5FA",
          10: "#F7F8FA",
        },
        mint: {
          90: "#009A8F",
          20: "#E8F5F3",
        },
        purple: {
          80: "#8665E5",
          20: "#F1EDFB",
        },
      },
    },
  },
  plugins: [],
};
