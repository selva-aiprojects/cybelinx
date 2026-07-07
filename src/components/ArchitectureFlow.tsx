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
      className="spotlight-card rounded-2xl p-8 md:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-surface md:text-3xl flex items-center gap-3">
          {icon || <Sparkles className="h-6 w-6 text-cyan animate-pulse" />}
          {title}
        </h3>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan border border-cyan/20">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-ping" />
          Live Pipeline
        </span>
      </div>

      {/* Steps with Animated Data Streams */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-2 relative">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-1 items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex-1 rounded-xl bg-gradient-to-br from-primary/25 via-cyan/15 to-transparent p-4 border border-primary/30 shadow-[0_10px_25px_rgba(1,4,11,0.5)] transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan">{step.label}</span>
                <span className="text-[10px] font-mono text-surface/50">0{index + 1}</span>
              </div>
              <p className="text-xs leading-relaxed text-surface/80">{step.description}</p>
            </motion.div>

            {index < steps.length - 1 && (
              <div className="hidden sm:flex items-center justify-center text-cyan/70">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Outcome box with glowing border */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-xl border border-cyan/40 bg-gradient-to-r from-primary/15 via-cyan/10 to-transparent p-5 shadow-[0_0_30px_rgba(96,200,224,0.12)]"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-cyan">
            ✓
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-cyan">Enterprise Outcome</span>
            <p className="mt-1 text-base font-semibold text-surface">{outcome}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
