/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0F1C",
        primary: "#1E90FF",
        cyan: "#00BFFF",
        violet: "#8B5CF6",
        slate: "#64748B",
        surface: "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1E90FF 0%, #00BFFF 50%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [],
};
