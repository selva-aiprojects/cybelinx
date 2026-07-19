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
        rose: "var(--cb-rose)",
        live: "var(--cb-live)",
        border: "var(--cb-border)",
        "nav-bg": "var(--cb-nav-bg)",
        charcoal: "var(--cb-charcoal)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(79,70,229,0.25)",
        "glow-lg": "0 0 48px rgba(79,70,229,0.30)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.25)",
        "glow-violet": "0 0 20px rgba(124,58,237,0.25)",
        "card": "0 1px 3px rgba(79,70,229,0.04), 0 4px 16px rgba(79,70,229,0.04)",
        "card-hover": "0 4px 24px rgba(79,70,229,0.10), 0 8px 40px rgba(79,70,229,0.06)",
        "glass": "0 8px 32px rgba(79,70,229,0.08)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        ticker: "ticker 30s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, var(--cb-primary) 0%, var(--cb-violet) 50%, var(--cb-accent) 100%)",
        "gradient-brand-r": "linear-gradient(135deg, var(--cb-accent) 0%, var(--cb-violet) 50%, var(--cb-primary) 100%)",
        "gradient-cta": "linear-gradient(135deg, #3730a3 0%, #6d28d9 40%, #0891b2 100%)",
      },
    },
  },
  plugins: [],
};
