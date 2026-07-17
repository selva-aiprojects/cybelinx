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
        primary: {
          DEFAULT: "var(--cb-primary)",
          deep: "var(--cb-primary-deep)",
        },
        accent: {
          DEFAULT: "var(--cb-accent)",
          warm: "var(--cb-accent-warm)",
        },
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
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.2)",
        "warm": "0 0 20px rgba(249, 115, 22, 0.15)",
      },
    },
  },
  plugins: [],
};
