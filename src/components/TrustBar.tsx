"use client";

import { customerLogos, trustMetrics } from "@/lib/content";
import { motion } from "framer-motion";

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card-bg p-6 text-center transition-all hover:border-primary/40 hover:shadow-card-hover"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="font-display text-4xl font-extrabold gradient-text md:text-5xl stat-value">
          {value}
        </div>
        <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate">{label}</div>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const doubledLogos = [...customerLogos, ...customerLogos];

  return (
    <div className="space-y-12">
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {trustMetrics.map((metric, i) => (
          <StatCard key={metric.label} value={metric.value} label={metric.label} delay={i * 0.1} />
        ))}
      </div>

      {/* Gradient divider */}
      <div className="gradient-line" />

      {/* Logo ticker */}
      <div>
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-widest text-slate/40">
          Trusted by enterprises across 12 countries
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="logo-ticker flex gap-6">
            {doubledLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="group/logo relative flex shrink-0 items-center gap-2.5 overflow-hidden rounded-full border border-border/50 bg-background px-6 py-3 text-sm font-semibold text-slate/60 transition-all hover:border-primary/30 hover:text-primary"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/logo:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/logo:bg-primary transition-colors" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
