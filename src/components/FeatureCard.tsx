import React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
};

const iconGradients = [
  { bg: "from-primary/15 to-violet/15", text: "text-primary", glow: "shadow-glow" },
  { bg: "from-violet/15 to-rose/15", text: "text-violet", glow: "shadow-glow-violet" },
  { bg: "from-accent/15 to-primary/15", text: "text-accent", glow: "shadow-glow-cyan" },
  { bg: "from-live/15 to-accent/15", text: "text-live", glow: "shadow-glow-cyan" },
];

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}: FeatureCardProps) {
  const style = iconGradients[index % iconGradients.length];

  const inner = (
    <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card-bg p-6 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-card-hover group-hover:-translate-y-1">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-violet/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${style.bg} transition-all duration-300 group-hover:scale-110 group-hover:${style.glow}`}
      >
        <Icon className={`h-5 w-5 ${style.text}`} />
      </div>

      {/* Content */}
      <h3 className="relative mt-5 text-lg font-bold text-surface">{title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate">{description}</p>

      {href && (
        <div className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2.5 group-hover:text-violet">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group block h-full cursor-pointer">
        {inner}
      </a>
    );
  }

  return <div className="group h-full">{inner}</div>;
}
