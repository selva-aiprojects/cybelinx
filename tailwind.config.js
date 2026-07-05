/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cinematic colour grade — an ink base with the classic teal/amber
        // film LUT pairing, instead of generic blue/violet SaaS gradients.
        background: "#0B0C0F", // ink — base negative
        ink: "#0B0C0F",
        charcoal: "#15171B", // card / surface stock
        surface: "#F1ECE3", // bone — warm off-white for text on dark
        slate: "#9A968D", // warm grey — secondary text
        primary: "#E3A857", // amber key light — primary accent / CTA
        cyan: "#3F7C76", // teal shadow — cool grade accent
        violet: "#3F7C76",
        highlight: "#E3A857",
        tally: "#B23A3A", // crimson tally-light — rare alert / live accent
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-courier)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #E3A857, #C97B3F)",
        "glow-gradient": "linear-gradient(45deg, #E3A857, #3F7C76)",
        "grade-wash":
          "radial-gradient(ellipse 70% 55% at 20% 10%, rgba(63,124,118,0.24), transparent 55%), radial-gradient(ellipse 60% 45% at 85% 90%, rgba(227,168,87,0.16), transparent 55%)",
      },
      letterSpacing: {
        slug: "0.24em",
      },
    },
  },
  plugins: [],
};
