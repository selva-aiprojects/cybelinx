"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { platformPillars } from "@/lib/content";

const accentColors = [
  { from: "#0D47FF", to: "#4FD8FF", text: "#4FD8FF" },
  { from: "#7B61FF", to: "#0D47FF", text: "#7B61FF" },
  { from: "#00C2FF", to: "#4FD8FF", text: "#00C2FF" },
  { from: "#8B5CF6", to: "#C084FC", text: "#C084FC" },
  { from: "#10B981", to: "#0D47FF", text: "#10B981" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PlatformPillars() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Animated Header */}
      <motion.div
        ref={headerRef}
        className="flex flex-col items-center text-center mb-16"
        variants={headerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.span
          variants={headerItem}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          The Cybelinx Platform
        </motion.span>

        <motion.h2
          variants={headerItem}
          className="font-display text-4xl font-extrabold text-surface tracking-tight sm:text-5xl max-w-3xl"
        >
          Five pillars.{" "}
          <span className="bg-gradient-to-r from-primary via-violet to-cyan bg-clip-text text-transparent">
            One foundation.
          </span>
        </motion.h2>

        <motion.p
          variants={headerItem}
          className="mt-5 max-w-2xl text-base text-slate/80 leading-relaxed"
        >
          SaaS/PaaS, AI &amp; LLM, DevSecOps, a world-class data platform, and
          quantum-ready engineering — unified on a single regulated enterprise core.
        </motion.p>
      </motion.div>

      {/* Staggered Card Grid */}
      <motion.div
        ref={gridRef}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {platformPillars.map((pillar, index) => {
          const accent = accentColors[index] || accentColors[0];
          return (
            <motion.div
              key={pillar.slug}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px ${accent.from}28, 0 0 0 1px ${accent.from}40`,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card-bg/80 backdrop-blur-sm p-7 cursor-default"
              style={{ boxShadow: `0 0 0 1px ${accent.from}15` }}
            >
              {/* Top bar animates width on scroll-enter */}
              <motion.div
                className="absolute top-0 left-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.9, delay: 0.35 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Ambient corner glow */}
              <div
                className="absolute -top-10 -right-10 h-36 w-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${accent.from}, transparent 70%)` }}
              />

              {/* Icon + badge */}
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}25, ${accent.to}25)`,
                    border: `1px solid ${accent.from}45`,
                  }}
                  whileHover={{ scale: 1.18, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 16 }}
                >
                  <pillar.icon className="h-5 w-5" style={{ color: accent.text }} />
                </motion.div>
                <span
                  className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full tabular-nums"
                  style={{
                    background: `${accent.from}18`,
                    color: accent.text,
                    border: `1px solid ${accent.from}35`,
                  }}
                >
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-surface group-hover:text-white transition-colors duration-300 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate/75 line-clamp-3 mb-5">
                {pillar.description}
              </p>

              {/* Outcome chip */}
              <div
                className="inline-flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold leading-snug"
                style={{
                  background: `${accent.from}12`,
                  border: `1px solid ${accent.from}30`,
                  color: accent.text,
                }}
              >
                <span className="mt-0.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: accent.text }} />
                {pillar.outcome}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-10 flex items-center justify-center"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/60"
        >
          Explore the full technology stack
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </>
  );
}
