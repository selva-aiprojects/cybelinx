import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <span className="slugline">{eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-surface md:text-5xl lg:text-6xl">{title}</h1>
      {description && <p className="mt-5 max-w-2xl text-lg text-slate">{description}</p>}
      {children}
    </div>
  );
}
