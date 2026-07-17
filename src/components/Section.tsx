import { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  textured?: boolean;
};

export default function Section({ children, className = "", id, textured = false }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${textured ? "bg-charcoal" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`mb-14 max-w-2xl ${alignClass}`}>
      <span className="slugline">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold text-surface md:text-4xl leading-tight">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">{description}</p>}
    </div>
  );
}
