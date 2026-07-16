"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics?: string[];
  href?: string;
  delay?: number;
}

export default function CaseStudy({ title, challenge, solution, impact, metrics, href, delay = 0 }: CaseStudyProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex h-full flex-col rounded-lg border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-6 flex items-start justify-between">
        <h3 className="font-display text-xl font-bold text-surface">{title}</h3>
        {href && <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:opacity-100" />}
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Challenge</p>
          <p className="mt-2 text-sm leading-6 text-slate">{challenge}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Solution</p>
          <p className="mt-2 text-sm leading-6 text-slate">{solution}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Impact</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-surface">{impact}</p>
        </div>

        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <span key={metric} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {metric}
              </span>
            ))}
          </div>
        )}
      </div>

      {href && (
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate transition-colors group-hover:text-primary">
            Learn More &rarr;
          </p>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
