/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "success-animation": "success-animation 3s ease-in-out",
      },
      keyframes: {
        "success-animation": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "7.5%": { opacity: "1", transform: "scale(1)" },
          "92.5%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.5)" },
        },
      },
    },
  },
  plugins: [],
};
