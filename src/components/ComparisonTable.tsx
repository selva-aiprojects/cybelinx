"use client";

import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

const features = [
  {
    name: "Pre-configured Enterprise Compliance",
    cybelinx: "check",
    cloudAi: "partial",
    devSecOps: "partial",
    pointSaaS: "check",
  },
  {
    name: "Multi-tenant data isolation & routing",
    cybelinx: "check",
    cloudAi: "cross",
    devSecOps: "cross",
    pointSaaS: "check",
  },
  {
    name: "End-to-end multi-cloud delivery pipelines",
    cybelinx: "check",
    cloudAi: "partial",
    devSecOps: "check",
    pointSaaS: "cross",
  },
  {
    name: "Built-in tenant-aware LLM routing",
    cybelinx: "check",
    cloudAi: "partial",
    devSecOps: "cross",
    pointSaaS: "cross",
  },
  {
    name: "Shared core for infinite vertical products",
    cybelinx: "check",
    cloudAi: "cross",
    devSecOps: "cross",
    pointSaaS: "cross",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "check")
    return (
      <div className="flex justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
        </div>
      </div>
    );
  if (type === "cross")
    return (
      <div className="flex justify-center">
        <X className="h-5 w-5 text-slate/25" />
      </div>
    );
  if (type === "partial")
    return (
      <div className="flex justify-center">
        <Minus className="h-5 w-5 text-slate/40" />
      </div>
    );
  return null;
}

export default function ComparisonTable() {
  return (
    <div className="w-full">
      {/* Mobile scroll hint */}
      <p className="mb-2 text-right text-[10px] font-semibold uppercase tracking-widest text-slate/40 md:hidden">
        Scroll →
      </p>
      <div className="w-full overflow-hidden rounded-2xl border border-border bg-card-bg shadow-sm">
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1.1fr_1fr_1fr_1fr] border-b border-border/50 bg-background/50">
              <div className="px-6 py-5 font-display text-sm font-bold text-surface">Capability</div>
              {/* Cybelinx — highlighted column header */}
              <div className="relative px-6 py-5 text-center bg-primary/[0.07] border-x border-primary/20">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <span className="font-display text-sm font-bold text-primary">Cybelinx</span>
                <div className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-primary/50">Full Platform</div>
              </div>
              <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/60">Cloud AI</div>
              <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/60">DevSecOps</div>
              <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/60">Single SaaS</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col divide-y divide-border/40">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-[2fr_1.1fr_1fr_1fr_1fr] group transition-all duration-200 hover:bg-primary/[0.025] relative"
                >
                  <div className="px-6 py-4 font-medium text-slate group-hover:text-surface transition-colors flex items-center text-sm">
                    {feature.name}
                  </div>
                  {/* Cybelinx col — always highlighted */}
                  <div className="px-6 py-4 bg-primary/[0.05] group-hover:bg-primary/[0.10] transition-colors flex items-center justify-center border-x border-primary/15 relative">
                    <Icon type={feature.cybelinx} />
                  </div>
                  <div className="px-6 py-4 flex items-center justify-center">
                    <Icon type={feature.cloudAi} />
                  </div>
                  <div className="px-6 py-4 flex items-center justify-center">
                    <Icon type={feature.devSecOps} />
                  </div>
                  <div className="px-6 py-4 flex items-center justify-center">
                    <Icon type={feature.pointSaaS} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="bg-background/30 px-6 py-4 border-t border-border/40 flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-slate/50">
              <div className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-2.5 w-2.5 text-primary" strokeWidth={2.5} />
                </div>
                Included
              </div>
              <div className="flex items-center gap-2">
                <Minus className="h-4 w-4 text-slate/40" /> Requires Build
              </div>
              <div className="flex items-center gap-2">
                <X className="h-4 w-4 text-slate/25" /> Not Supported
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
