"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-lg border border-border bg-background p-8 md:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-surface md:text-3xl flex items-center gap-3">
          {icon || <Sparkles className="h-6 w-6 text-primary" />}
          {title}
        </h3>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 border border-green-200">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Live Pipeline
        </span>
      </div>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-1 items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-1 rounded-lg border border-border bg-charcoal p-4"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{step.label}</span>
                <span className="text-[10px] text-slate">0{index + 1}</span>
              </div>
              <p className="text-xs leading-relaxed text-slate">{step.description}</p>
            </motion.div>

            {index < steps.length - 1 && (
              <div className="hidden sm:flex items-center justify-center text-slate">
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-charcoal p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
            ✓
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-primary">Enterprise Outcome</span>
            <p className="mt-1 text-base font-semibold text-surface">{outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
