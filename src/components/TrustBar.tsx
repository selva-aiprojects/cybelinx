"use client";

import { trustMetrics } from "@/lib/content";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, Server, Brain, ShieldCheck } from "lucide-react";

const statIcons = [TrendingUp, Globe2, Server, Brain, ShieldCheck];
const statAccents = ["#0D47FF", "#7B61FF", "#00C2FF", "#EC4899", "#10B981"];

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
  const isLive = index === 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      className="stat-card group"
    >
      {/* Corner accent glow */}
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
      />

      {/* Icon + Value side-by-side */}
      <div className="flex items-center justify-center gap-3">
        {/* Icon chip */}
        <div className="relative flex-shrink-0">
          {isLive && (
            <span
              className="absolute inset-0 m-auto h-10 w-10 rounded-full animate-ping opacity-15"
              style={{ background: accent }}
            />
          )}
          <div
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl"
            style={{
              background: `${accent}18`,
              border: `1px solid ${accent}35`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: accent }} />
          </div>
        </div>

        {/* Stat value */}
        <div
          className="font-display text-3xl font-extrabold md:text-4xl stat-value bg-clip-text text-transparent leading-none"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--cb-surface) 0%, ${accent} 100%)`,
          }}
        >
          {value}
        </div>
      </div>

      {/* Label */}
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate/60 text-center">
        {label}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </motion.div>
  );
}

export default function TrustBar() {
  return (
    <div className="space-y-10">
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {trustMetrics.map((metric, i) => (
          <StatCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            delay={i * 0.08}
            index={i}
          />
        ))}
      </div>

      {/* Frosted gradient divider */}
      <div className="frosted-divider" />

      {/* Trust footnote */}
      <div className="text-center space-y-1.5">
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
