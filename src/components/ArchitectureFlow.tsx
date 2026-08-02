"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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

const stepColors = [
  { from: "#0D47FF", to: "#4FD8FF" },
  { from: "#7B61FF", to: "#C084FC" },
  { from: "#00C2FF", to: "#4FD8FF" },
  { from: "#10B981", to: "#0D47FF" },
];

export default function ArchitectureFlow({ title, steps, outcome, icon }: ArchitectureFlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-border bg-card-bg overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-6 md:px-10 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
        <h3 className="font-display text-xl font-bold text-surface md:text-2xl flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            {icon || <Sparkles className="h-4.5 w-4.5 text-primary" />}
          </div>
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-3 py-1 text-xs font-semibold text-live border border-live/20 w-fit">
          <span className="live-dot relative h-1.5 w-1.5 rounded-full bg-live" />
          Live Pipeline
        </span>
      </div>

      {/* Steps */}
      <div className="relative px-8 py-10 md:px-10">
        {/* Continuous horizontal gradient line (desktop) */}
        <div className="hidden sm:block absolute top-[4.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

        {/* Animated fill */}
        <motion.div
          className="hidden sm:block absolute top-[4.25rem] left-[10%] h-px bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          whileInView={{ width: "80%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
        />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4 relative z-10">
          {steps.map((step, index) => {
            const color = stepColors[index % stepColors.length];
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                className="flex-1 flex flex-col items-center"
              >
                {/* Step circle node (desktop) */}
                <div className="hidden sm:flex mb-7 relative">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-[-6px] rounded-full opacity-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.35 }}
                    style={{ background: `radial-gradient(circle, ${color.from}55, transparent)` }}
                  />
                  <motion.div
                    className="relative flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md z-20"
                    style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.25 + index * 0.35, type: "spring", stiffness: 300 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Vertical connector (mobile) */}
                {index > 0 && (
                  <div
                    className="sm:hidden h-6 w-px mb-2 -mt-6"
                    style={{ background: `linear-gradient(to bottom, ${stepColors[index - 1].to}, ${color.from})` }}
                  />
                )}

                {/* Card */}
                <div
                  className="w-full h-full rounded-2xl border p-5 transition-all duration-300 text-left shadow-sm group hover:-translate-y-1"
                  style={{
                    borderColor: `${color.from}25`,
                    background: `linear-gradient(135deg, ${color.from}06, transparent)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color.from}50`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${color.from}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color.from}25`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-surface">
                      {step.label}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Outcome */}
      <div className="mx-8 mb-8 md:mx-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.07] to-accent/[0.04] p-5 flex items-start gap-4">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/20">
          <span className="text-primary text-sm font-bold">✓</span>
        </div>
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
            Enterprise Outcome
          </span>
          <p className="text-sm font-semibold text-surface">{outcome}</p>
        </div>
      </div>
    </motion.div>
  );
}
