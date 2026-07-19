"use client";

import { motion } from "framer-motion";

const rows = [
  {
    category: "Platform vs products",
    vendor: "Platform or single SaaS",
    cybelinx: "Platform and multiple vertical SaaS",
  },
  {
    category: "AI & LLM",
    vendor: "Add-on or infra only",
    cybelinx: "AI-native, tenant-aware LLM services",
  },
  {
    category: "DevSecOps",
    vendor: "Secures pipelines only",
    cybelinx: "Embedded into the product platform",
  },
  {
    category: "Regulated industries",
    vendor: "Compliance added later",
    cybelinx: "Designed for regulated industries from day one",
  },
];

export default function CompactComparisonTable() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/60 bg-card-bg shadow-sm my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-background/50">
              <th className="px-5 py-4 font-display text-sm font-bold text-slate/70">Category</th>
              <th className="px-5 py-4 font-display text-sm font-bold text-slate/70">Typical Vendor</th>
              <th className="px-5 py-4 font-display text-sm font-bold text-primary">Cybelinx</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {rows.map((row, i) => (
              <motion.tr
                key={row.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group hover:bg-primary/5 transition-colors"
              >
                <td className="px-5 py-4 font-semibold text-slate group-hover:text-surface transition-colors">{row.category}</td>
                <td className="px-5 py-4 text-slate/80">{row.vendor}</td>
                <td className="px-5 py-4 font-medium text-surface bg-primary/5 group-hover:bg-primary/10 transition-colors">{row.cybelinx}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
