/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0F1C",
        primary: "#0D47FF",
        cyan: "#00C2FF",
        violet: "#7B61FF",
        slate: "#475569",
        surface: "#E6EBF2",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #0D47FF 0%, #00C2FF 100%)",
      },
    },
  },
  plugins: [],
};
