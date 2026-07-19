import { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  textured?: boolean;
  dark?: boolean;
  glow?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  textured = false,
  dark = false,
  glow = false,
}: SectionProps) {
  const bg = dark
    ? "bg-charcoal section-dark"
    : textured
    ? "bg-charcoal map-texture"
    : "bg-background";

  return (
    <section id={id} className={`relative py-20 md:py-28 overflow-hidden ${bg} ${className}`}>
      {/* Ambient glow orbs for visually rich sections */}
      {glow && (
        <>
          <div
            className="orb orb-primary h-96 w-96 opacity-20 top-0 right-0"
            aria-hidden
          />
          <div
            className="orb orb-violet h-80 w-80 opacity-15 bottom-0 left-0"
            aria-hidden
          />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  gradient = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  gradient?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      {/* Eyebrow with accent left bar */}
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        {align !== "center" && (
          <span className="h-4 w-0.5 rounded-full bg-gradient-to-b from-primary to-violet" />
        )}
        <span className="slugline">{eyebrow}</span>
      </div>

      {/* Title */}
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-surface md:text-4xl lg:text-5xl ${
          gradient ? "gradient-text" : ""
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
