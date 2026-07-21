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
      className="rounded-2xl border border-border bg-card-bg p-8 md:p-10 shadow-sm"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-border/50 pb-6">
        <h3 className="font-display text-2xl font-bold text-surface md:text-3xl flex items-center gap-3">
          {icon || <Sparkles className="h-6 w-6 text-primary" />}
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-3 py-1 text-xs font-semibold text-live border border-live/20 w-fit">
          <span className="live-dot relative h-1.5 w-1.5 rounded-full bg-live" />
          Live Pipeline
        </span>
      </div>

      <div className="relative mb-12 sm:pt-6">
        {/* Continuous horizontal line (desktop) */}
        <div className="hidden sm:block absolute top-8 left-[12%] right-[12%] h-px bg-border -translate-y-1/2" />
        
        {/* Animated fill line */}
        <motion.div 
          className="hidden sm:block absolute top-8 left-[12%] h-px bg-primary -translate-y-1/2"
          initial={{ width: "0%" }}
          whileInView={{ width: "76%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:justify-between sm:gap-5 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex-1 flex flex-col items-center"
            >
              {/* Connecting Node (desktop) */}
              <div className="hidden sm:flex h-3.5 w-3.5 mb-6 rounded-full border-2 border-card-bg bg-border z-20 transition-all duration-500 delay-300 shadow-[0_0_0_4px_var(--card-bg)] relative group-hover:scale-125" />
              
              {/* Animated active state for node */}
              <motion.div 
                className="hidden sm:block absolute top-[27px] h-3.5 w-3.5 rounded-full bg-primary z-30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.35) }}
              />

              {/* Vertical line (mobile) */}
              {index > 0 && <div className="sm:hidden h-6 w-px bg-border -mt-6 mb-2" />}

              {/* Card */}
              <div className="w-full h-full rounded-xl border border-border/80 bg-charcoal p-5 hover:border-primary transition-all duration-300 text-left shadow-sm group hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-background text-[10px] font-bold text-slate shadow-sm border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-surface group-hover:text-primary transition-colors">{step.label}</span>
                </div>
                <p className="text-xs leading-relaxed text-slate">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-3 backdrop-blur-sm">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">
          ✓
        </div>
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">Enterprise Outcome</span>
          <p className="mt-1 text-sm font-semibold text-surface">{outcome}</p>
        </div>
      </div>
    </motion.div>
  );
}
