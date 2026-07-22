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
        {/* Customer names/logos temporarily removed per request */}
        <p className="mt-8 text-center text-xs font-medium text-slate/60">
          Platform metrics and SLAs are available to your SRE and DevOps teams during onboarding.
        </p>
      </div>
    </div>
  );
}
