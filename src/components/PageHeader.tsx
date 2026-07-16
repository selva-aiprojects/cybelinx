type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <span className="slugline">{eyebrow}</span>
      <h1 className="mt-3 font-display text-4xl font-bold text-surface md:text-5xl">{title}</h1>
      {description && <p className="mt-5 max-w-2xl text-lg text-slate">{description}</p>}
    </div>
  );
}
