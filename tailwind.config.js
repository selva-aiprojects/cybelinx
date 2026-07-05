/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#01040B",
        ink: "#01040B",
        charcoal: "#020D1E",
        surface: "#E8ECF1",
        slate: "#8891A8",
        primary: "#4A9FDF",
        cyan: "#60C8E0",
        violet: "#3281C1",
        highlight: "#4A9FDF",
        live: "#22D3A6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #4A9FDF, #60C8E0)",
        "glow-gradient": "linear-gradient(135deg, #D6E8F7, #E8ECF1, #FFFFFF)",
        "grade-wash":
          "radial-gradient(ellipse 70% 55% at 20% 8%, rgba(74,159,223,0.22), transparent 55%), radial-gradient(ellipse 60% 45% at 85% 92%, rgba(50,129,193,0.16), transparent 55%)",
      },
      letterSpacing: {
        slug: "0.16em",
      },
    },
  },
  plugins: [],
};
