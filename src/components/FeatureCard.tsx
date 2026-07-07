import React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export default function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  const inner = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan/20 group-hover:border-cyan/40 group-hover:shadow-[0_0_20px_rgba(96,200,224,0.3)]">
        <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-cyan" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-surface transition-colors duration-200 group-hover:text-cyan">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate/90">{description}</p>
      {href && (
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-cyan transition-colors">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </>
  );

  return <SpotlightCard href={href}>{inner}</SpotlightCard>;
}
