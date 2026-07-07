import { ReactNode } from "react";
import TextReveal from "./TextReveal";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  textured?: boolean;
};

export default function Section({ children, className = "", id, textured = false }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      {textured && (
        <div className="map-texture pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      )}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#60c8e0]" />
        <span className="slugline">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-bold text-surface md:text-4xl leading-[1.15]">
        <TextReveal text={title} />
      </h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-8 text-surface/85">{description}</p>}
    </div>
  );
}
