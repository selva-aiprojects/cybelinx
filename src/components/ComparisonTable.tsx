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
  if (type === "check") return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (type === "cross") return <X className="mx-auto h-5 w-5 text-slate/30" />;
  if (type === "partial") return <Minus className="mx-auto h-5 w-5 text-slate/50" />;
  return null;
}

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card-bg shadow-sm">
      <div className="min-w-[800px] overflow-x-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-border/50 bg-background/50">
          <div className="px-6 py-5 font-display text-sm font-bold text-surface">Capability</div>
          <div className="px-6 py-5 text-center font-display text-sm font-bold text-primary">Cybelinx</div>
          <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">Cloud AI Blocks</div>
          <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">DevSecOps Tools</div>
          <div className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">Single-Vertical SaaS</div>
        </div>
        <div className="flex flex-col divide-y divide-border/50">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] group transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10 relative"
            >
              {/* Row Glow Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-opacity pointer-events-none" />
              
              <div className="px-6 py-4 font-medium text-slate group-hover:text-surface transition-colors flex items-center relative z-10">{feature.name}</div>
              <div className="px-6 py-4 bg-primary/5 group-hover:bg-primary/15 transition-colors flex items-center justify-center border-x border-primary/20 relative z-10">
                {/* Glow effect for Cybelinx column on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-opacity" />
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
      </div>
      <div className="bg-background/30 px-6 py-4 border-t border-border/50 flex justify-center gap-8 text-[10px] uppercase tracking-widest font-semibold text-slate/60">
        <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> Included</div>
        <div className="flex items-center gap-2"><Minus className="h-3.5 w-3.5 text-slate/50" /> Requires Build</div>
        <div className="flex items-center gap-2"><X className="h-3.5 w-3.5 text-slate/30" /> Not Supported</div>
      </div>
    </div>
  );
}
