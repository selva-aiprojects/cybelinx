import React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
};

const iconStyles = [
  {
    bg: "from-primary/12 to-violet/12",
    iconColor: "var(--cb-primary)",
    glowColor: "rgba(13,71,255,0.25)",
    borderColor: "rgba(13,71,255,0.2)",
  },
  {
    bg: "from-violet/12 to-rose/12",
    iconColor: "var(--cb-violet)",
    glowColor: "rgba(123,97,255,0.25)",
    borderColor: "rgba(123,97,255,0.2)",
  },
  {
    bg: "from-accent/12 to-primary/12",
    iconColor: "var(--cb-accent)",
    glowColor: "rgba(0,194,255,0.25)",
    borderColor: "rgba(0,194,255,0.2)",
  },
  {
    bg: "from-live/12 to-accent/12",
    iconColor: "var(--cb-live)",
    glowColor: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.2)",
  },
];

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}: FeatureCardProps) {
  const style = iconStyles[index % iconStyles.length];

  const inner = (
    <div className="glass-card-refined shiny-card relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1.5 shadow-lg">
      {/* Specular top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-cyan-400/40 to-transparent pointer-events-none z-20" />

      {/* Subtle background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 30% 0%, ${style.glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${style.bg} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}
        style={{
          border: `1px solid ${style.borderColor}`,
          boxShadow: `0 4px 16px ${style.glowColor}`,
        }}
      >
        <Icon className="h-5 w-5" style={{ color: style.iconColor }} />
      </div>

      {/* Content */}
      <h3 className="relative mt-5 text-lg font-bold text-surface leading-snug">{title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate">{description}</p>

      {href && (
        <div className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
          style={{ color: style.iconColor }}
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}

      {/* Bottom gradient shadow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${style.glowColor}15, transparent)`,
        }}
      />
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
