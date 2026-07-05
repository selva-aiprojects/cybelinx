import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export default function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  const inner = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-surface">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      {href && (
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="frame group block rounded-2xl p-6 transition-colors duration-200 hover:border-primary/30">
        {inner}
      </Link>
    );
  }

  return <div className="frame rounded-2xl p-6">{inner}</div>;
}
