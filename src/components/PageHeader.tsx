type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <span className="slugline">{eyebrow}</span>
      <h1 className="font-display mt-3 text-4xl font-semibold text-surface md:text-5xl">{title}</h1>
      {description && <p className="mt-5 max-w-2xl text-surface/70">{description}</p>}
    </div>
  );
}
