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

export function SceneHeading({
  scene,
  slug,
  title,
  description,
}: {
  scene: string;
  slug: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="slugline flex flex-wrap items-center gap-3">
        <span>{scene}</span>
        <span className="text-surface/25">·</span>
        <span>{slug}</span>
      </div>
      <h2 className="font-display mt-3 text-3xl font-semibold text-surface md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-8 text-surface/70">{description}</p>}
    </div>
  );
}
