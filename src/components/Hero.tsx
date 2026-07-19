"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";

const highlights = [
  { label: "SaaS & PaaS in production", icon: Zap, color: "text-live" },
  { label: "Multi-cloud DevSecOps", icon: Shield, color: "text-primary" },
  { label: "Quantum-ready architecture", icon: Cpu, color: "text-violet" },
];

const statsRow = [
  { value: "200+", label: "Enterprises" },
  { value: "15+", label: "Years" },
  { value: "12", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className="hero-mesh relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-primary h-[600px] w-[600px] -top-40 -left-40 opacity-40" aria-hidden />
      <div className="orb orb-violet h-[500px] w-[500px] top-20 right-0 opacity-30" aria-hidden />
      <div className="orb orb-cyan h-[400px] w-[400px] bottom-0 left-1/3 opacity-20" aria-hidden />

      <div className="relative py-20 md:py-32 lg:py-40">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* ─── Left: Content ──────────────────── */}
            <motion.div style={{ y }} className="max-w-2xl">
              {/* Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <span className="live-dot relative h-2 w-2 rounded-full bg-live" />
                  AI-Native Platform · Now in Production
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-accent md:text-5xl lg:text-6xl"
              >
                Enterprise software,{" "}
                <span className="gradient-text-hero">reimagined</span>{" "}
                with AI.
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
              >
                One multi-tenant platform — SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering — for regulated enterprises worldwide.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.48 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Button href="/products" variant="primary" size="lg">
                  Explore Products
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Request a Demo
                </Button>
                <a
                  href="#how-it-works"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent transition-colors ml-1"
                >
                  How it works <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Trust stat strip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.62 }}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border/50 pt-8"
              >
                {statsRow.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ─── Right: Visual card ──────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              {/* Floating platform card */}
              <div className="relative animate-float">
                {/* Main visual panel */}
                <div className="glass-card p-1 shadow-2xl glow-primary">
                  {/* Header bar */}
                  <div className="flex items-center gap-1.5 rounded-t-[0.875rem] border-b border-border/30 bg-charcoal/50 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose/70" />
                    <span className="h-3 w-3 rounded-full bg-accent/70" />
                    <span className="h-3 w-3 rounded-full bg-live/70" />
                    <span className="ml-3 flex-1 rounded-md border border-border/30 bg-background/40 px-3 py-1 text-center text-[11px] text-slate/60">
                      app.cybelinx.com/dashboard
                    </span>
                  </div>

                  {/* Dashboard preview */}
                  <div className="rounded-b-[0.875rem] bg-charcoal/30 p-5">
                    {/* Top metric row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "Active Tenants", value: "247", color: "text-primary", bg: "bg-primary/10" },
                        { label: "API Uptime", value: "99.9%", color: "text-live", bg: "bg-live/10" },
                        { label: "AI Requests", value: "1.2M", color: "text-violet", bg: "bg-violet/10" },
                      ].map((m) => (
                        <div key={m.label} className={`rounded-xl ${m.bg} border border-border/20 px-3 py-3`}>
                          <div className={`font-display text-xl font-bold ${m.color}`}>{m.value}</div>
                          <div className="text-[10px] font-semibold text-slate/70 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart bar simulation */}
                    <div className="rounded-xl border border-border/20 bg-background/20 p-4 mb-3">
                      <div className="flex items-end justify-between gap-1.5 h-16">
                        {[40, 55, 48, 70, 65, 85, 78, 90, 82, 95, 88, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background: i >= 10
                                ? "linear-gradient(to top, var(--cb-primary), var(--cb-violet))"
                                : "var(--cb-border)",
                              opacity: i >= 10 ? 1 : 0.5,
                            }}
                          />
                        ))}
                      </div>
                      <div className="mt-2 text-[10px] text-slate/50">Platform throughput · Last 12 weeks</div>
                    </div>

                    {/* Module pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {["HRM", "HMS", "DevSecOps", "AI Suite", "Banking", "Health"].map((tag, i) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${
                            i < 2
                              ? "border-live/30 bg-live/10 text-live"
                              : i < 4
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border/40 bg-background/30 text-slate/60"
                          }`}
                        >
                          {i < 2 ? "● " : i < 4 ? "◉ " : "○ "}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating highlight badges */}
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  const positions = [
                    "-left-8 top-10",
                    "-right-8 top-1/3",
                    "-left-6 bottom-12",
                  ];
                  return (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                      className={`absolute ${positions[i]} glass-card px-3 py-2 flex items-center gap-2 shadow-lg`}
                    >
                      <Icon className={`h-3.5 w-3.5 shrink-0 ${h.color}`} />
                      <span className="text-[11px] font-semibold text-surface whitespace-nowrap">{h.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Glow reflection beneath card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-3/4 rounded-full bg-primary/20 blur-2xl" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
