function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--color-background-rgb"),
        ink: withOpacity("--color-ink-rgb"),
        charcoal: withOpacity("--color-charcoal-rgb"),
        surface: withOpacity("--color-surface-rgb"),
        slate: withOpacity("--color-slate-rgb"),
        primary: withOpacity("--color-primary-rgb"),
        cyan: withOpacity("--color-cyan-rgb"),
        violet: withOpacity("--color-violet-rgb"),
        highlight: withOpacity("--color-highlight-rgb"),
        live: withOpacity("--color-live-rgb"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "var(--brand-gradient)",
        "glow-gradient": "var(--glow-gradient)",
        "grade-wash": "var(--grade-wash)",
      },
      letterSpacing: {
        slug: "0.16em",
      },
    },
  },
  plugins: [],
};
