"use client";

import { trustMetrics } from "@/lib/content";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, Server, ShieldCheck } from "lucide-react";

const statIcons = [TrendingUp, Globe2, Server, ShieldCheck];
const statAccents = ["#0D47FF", "#7B61FF", "#00C2FF", "#10B981"];

function StatCard({
  value,
  label,
  delay,
  index,
}: {
  value: string;
  label: string;
  delay: number;
  index: number;
}) {
  const Icon = statIcons[index] || TrendingUp;
  const accent = statAccents[index] || "#0D47FF";
  const isUptime = index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl glass-surface gradient-border-card p-6 text-center"
    >
      {/* Corner glow */}
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
      />

      {/* Icon chip */}
      <div className="relative flex justify-center mb-3">
        {isUptime && (
          <span className="absolute inset-0 m-auto h-10 w-10 rounded-full animate-ping opacity-20" style={{ background: accent }} />
        )}
        <div
          className="relative flex h-10 w-10 items-center justify-center rounded-xl mx-auto"
          style={{
            background: `${accent}20`,
            border: `1px solid ${accent}40`,
          }}
        >
          <Icon className="h-4.5 w-4.5" style={{ color: accent }} />
        </div>
      </div>

      {/* Value */}
      <div
        className="font-display text-4xl font-extrabold md:text-5xl stat-value bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${accent} 100%)`,
        }}
      >
        {value}
      </div>
      <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate/60">
        {label}
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  return (
    <div className="space-y-10">
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {trustMetrics.map((metric, i) => (
          <StatCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            delay={i * 0.1}
            index={i}
          />
        ))}
      </div>

      {/* Frosted gradient divider */}
      <div className="frosted-divider" />

      {/* Trust footnote */}
      <div className="text-center space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
          Trusted by enterprises across 12 countries
        </p>
        <p className="text-xs font-medium text-slate/50">
          Platform metrics and SLAs are available to your SRE and DevOps teams during onboarding.
        </p>
      </div>
    </div>
  );
}
