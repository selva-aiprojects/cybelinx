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
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-background/50">
              <th className="min-w-[240px] px-6 py-5 font-display text-sm font-bold text-surface">Capability</th>
              <th className="px-6 py-5 text-center font-display text-sm font-bold text-primary">Cybelinx</th>
              <th className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">Cloud AI Blocks</th>
              <th className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">DevSecOps Tools</th>
              <th className="px-6 py-5 text-center font-display text-sm font-bold text-slate/80">Single-Vertical SaaS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {features.map((feature, i) => (
              <motion.tr
                key={feature.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group transition-colors hover:bg-primary/5"
              >
                <td className="px-6 py-4 font-medium text-slate group-hover:text-surface transition-colors">{feature.name}</td>
                <td className="px-6 py-4 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Icon type={feature.cybelinx} />
                </td>
                <td className="px-6 py-4">
                  <Icon type={feature.cloudAi} />
                </td>
                <td className="px-6 py-4">
                  <Icon type={feature.devSecOps} />
                </td>
                <td className="px-6 py-4">
                  <Icon type={feature.pointSaaS} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-background/30 px-6 py-3 border-t border-border/50 flex justify-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-slate/60">
        <div className="flex items-center gap-1.5"><Check className="h-3 w-3 text-primary" /> Included</div>
        <div className="flex items-center gap-1.5"><Minus className="h-3 w-3 text-slate/50" /> Requires Build</div>
        <div className="flex items-center gap-1.5"><X className="h-3 w-3 text-slate/30" /> Not Supported</div>
      </div>
    </div>
  );
}
