"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap } from "lucide-react";

const rows = [
  {
    category: "Platform vs Single Product",
    vendor: "Single-vertical point SaaS or generic cloud infra",
    cybelinx: "Unified Enterprise PaaS core + vertical SaaS suite",
    highlight: true,
  },
  {
    category: "AI & GenAI Integration",
    vendor: "Third-party add-on or un-isolated prompt wrapper",
    cybelinx: "Enterprise-isolated AI scribes, LLMOps & real-time RAG",
    highlight: true,
  },
  {
    category: "DevSecOps & Security Baseline",
    vendor: "External pipeline scanners added after deployment",
    cybelinx: "Native SOC 2, ISO 27001, HIPAA & ABDM guardrails",
    highlight: true,
  },
  {
    category: "Data Isolation & SLA Runtime",
    vendor: "Shared DB schemas with variable execution latency",
    cybelinx: "Multi-cloud isolated routing with sub-50ms SLA runtime",
    highlight: true,
  },
  {
    category: "Global Regulatory Adaptation",
    vendor: "Manual manual regional code rewrites per jurisdiction",
    cybelinx: "Automated global statutory adaptation engine (US/IN/EU)",
    highlight: true,
  },
];

export default function CompactComparisonTable() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-brand-navy-100 dark:border-brand-navy-800 bg-white dark:bg-brand-navy-900 shadow-xl my-8">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="border-b border-brand-navy-100 dark:border-brand-navy-800 bg-brand-navy-50/70 dark:bg-brand-navy-800/80">
              <th className="px-6 py-5 text-xs font-extrabold uppercase tracking-widest text-brand-navy-900 dark:text-white w-1/4">
                Architecture Dimension
              </th>
              <th className="px-6 py-5 text-xs font-extrabold uppercase tracking-widest text-brand-navy-500 dark:text-slate-400 w-1/3">
                Typical Point Vendor
              </th>
              <th className="px-6 py-5 text-xs font-extrabold uppercase tracking-widest text-brand-cyan-500 dark:text-brand-cyan-400 bg-brand-cyan-500/10 dark:bg-brand-cyan-500/20 border-x border-brand-cyan-500/30 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan-500" />
                  Cybelinx Platform Core
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-cyan-500 text-brand-navy-900 uppercase">
                  Enterprise
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-navy-100 dark:divide-brand-navy-800">
            {rows.map((row, i) => (
              <motion.tr
                key={row.category}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group hover:bg-brand-navy-50/50 dark:hover:bg-brand-navy-800/50 transition-colors"
              >
                <td className="px-6 py-5 text-sm font-bold text-brand-navy-900 dark:text-white">
                  {row.category}
                </td>
                <td className="px-6 py-5 text-sm text-brand-navy-500 dark:text-slate-300">
                  {row.vendor}
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-brand-navy-900 dark:text-white bg-brand-cyan-500/5 dark:bg-brand-cyan-500/10 border-x border-brand-cyan-500/20">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-cyan-500 shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{row.cybelinx}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
