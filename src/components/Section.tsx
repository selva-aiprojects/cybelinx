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
        <div className="map-texture pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true" />
      )}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
