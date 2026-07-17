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
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-surface">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      {href && (
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </>
  );

  return <SpotlightCard href={href}>{inner}</SpotlightCard>;
}
