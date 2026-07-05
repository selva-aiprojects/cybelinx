import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
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
      <span className="slugline">{eyebrow}</span>
      <h2 className="font-display mt-3 text-3xl font-semibold text-surface md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-8 text-surface/85">{description}</p>}
    </div>
  );
}
