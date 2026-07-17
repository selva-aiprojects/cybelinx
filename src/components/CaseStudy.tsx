import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CaseStudyProps = {
  slug: string;
  industry: string;
  title: string;
  outcome: string;
};

export default function CaseStudy({ slug, industry, title, outcome }: CaseStudyProps) {
  return (
    <Link
      href={`/contact`}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">{industry}</span>
      <h3 className="mt-3 font-display text-xl font-bold text-surface transition-colors group-hover:text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{outcome}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
        Read case study
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
