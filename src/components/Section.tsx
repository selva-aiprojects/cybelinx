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
    ? "section-alt section-dark"
    : textured
    ? "section-alt map-texture"
    : "bg-background";

  return (
    <section id={id} className={`relative py-10 md:py-14 overflow-hidden ${bg} ${className}`}>
      {/* Ambient glow orbs */}
      {glow && (
        <>
          <div
            className="orb orb-primary h-[600px] w-[600px] opacity-[0.12] -top-32 -right-32"
            aria-hidden
          />
          <div
            className="orb orb-violet h-[500px] w-[500px] opacity-[0.08] -bottom-24 -left-24"
            aria-hidden
          />
          <div
            className="orb orb-cyan h-80 w-80 opacity-[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
      {/* Eyebrow */}
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        {align !== "center" && (
          <span className="h-5 w-0.5 rounded-full bg-gradient-to-b from-primary to-violet shrink-0" />
        )}
        <span className="eyebrow-pill">{eyebrow}</span>
      </div>

      {/* Title */}
      <h2
        className={`mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-surface md:text-4xl lg:text-5xl ${
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

