/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--cb-background)",
        surface: "var(--cb-surface)",
        slate: "var(--cb-slate)",
        primary: "var(--cb-primary)",
        accent: "var(--cb-accent)",
        violet: "var(--cb-violet)",
        live: "var(--cb-live)",
        border: "var(--cb-border)",
        "nav-bg": "var(--cb-nav-bg)",
        charcoal: "var(--cb-charcoal)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
