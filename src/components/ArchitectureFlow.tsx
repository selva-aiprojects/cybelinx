"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  label: string;
  description: string;
}

interface ArchitectureFlowProps {
  title: string;
  steps: FlowStep[];
  outcome: string;
  icon?: React.ReactNode;
}

export default function ArchitectureFlow({ title, steps, outcome, icon }: ArchitectureFlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-surface/10 bg-gradient-to-br from-surface/[0.05] to-transparent p-8"
    >
      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold text-surface">{title}</h3>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex min-w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/20 px-3 py-2"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{step.label}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 flex-shrink-0 text-slate/50 sm:block" />
            )}
          </div>
        ))}
      </div>

      <p className="mb-6 text-sm leading-7 text-surface/80">{steps.map((s) => s.description).join(" \u2192 ")}</p>

      <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
        <p className="text-sm font-semibold text-primary">
          <span className="block text-xs uppercase tracking-wide text-slate/60">Outcome</span>
          <span className="mt-2 text-surface">{outcome}</span>
        </p>
      </div>
    </motion.div>
  );
}
