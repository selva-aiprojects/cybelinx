type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan">{eyebrow}</span>
      <h1 className="font-display mt-3 text-4xl font-bold text-white md:text-5xl">{title}</h1>
      {description && <p className="mt-5 max-w-2xl text-surface/80">{description}</p>}
    </div>
  );
}
