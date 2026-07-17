"use client";

import { customerLogos, trustMetrics } from "@/lib/content";
import { motion } from "framer-motion";

function StatCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate">{label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const doubledLogos = [...customerLogos, ...customerLogos];

  return (
    <div className="space-y-10">
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {trustMetrics.map((metric, i) => (
          <StatCounter key={metric.label} value={metric.value} label={metric.label} delay={i * 0.1} />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Logo ticker */}
      <div>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate/60">
          Trusted by enterprises worldwide
        </p>
        <div className="relative overflow-hidden">
          <div className="logo-ticker flex gap-12">
            {doubledLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2 rounded-xl border border-border/50 bg-background/60 px-6 py-3 text-sm font-semibold text-slate/70 backdrop-blur-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
