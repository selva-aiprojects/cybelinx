"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { platformPillars, type PlatformPillar } from "@/lib/content";

/* ── Accent palette per pillar ───────────────────── */
const accents = [
  { from: "#0D47FF", to: "#4FD8FF", glow: "rgba(13,71,255,0.5)", text: "#4FD8FF" },
  { from: "#7B61FF", to: "#C084FC", glow: "rgba(123,97,255,0.5)", text: "#C084FC" },
  { from: "#00C2FF", to: "#4FD8FF", glow: "rgba(0,194,255,0.45)", text: "#00C2FF" },
  { from: "#8B5CF6", to: "#E879F9", glow: "rgba(139,92,246,0.5)", text: "#E879F9" },
  { from: "#10B981", to: "#06B6D4", glow: "rgba(16,185,129,0.45)", text: "#10B981" },
];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── Shiny Tab Button ─────────────────────────────── */
function ShinyTab({
  pillar,
  accent,
  index,
  isActive,
  onClick,
}: {
  pillar: PlatformPillar;
  accent: (typeof accents)[number];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = pillar.icon;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative w-full text-left group"
    >
      {/* ── Animated conic-gradient border on active ── */}
      {isActive && (
        <span
          className="absolute -inset-[1.5px] rounded-2xl z-0 animated-conic-border"
          style={
            {
              "--c-from": accent.from,
              "--c-to": accent.to,
            } as React.CSSProperties
          }
          aria-hidden
        />
      )}

      {/* ── Inner tab card ────────────────────────── */}
      <span
        className={`relative z-10 flex items-start gap-4 rounded-[14px] p-4 transition-all duration-300 border ${
          isActive
            ? "bg-white dark:bg-white/5 border-blue-300 dark:border-white/20 shadow-lg shadow-blue-500/10 dark:shadow-none"
            : "bg-white/80 hover:bg-white dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border-slate-200/80 dark:border-white/5"
        }`}
        style={
          isActive
            ? { boxShadow: `0 8px 30px ${accent.glow}20, inset 0 0 0 1px transparent` }
            : {}
        }
      >
        {/* Number + Icon chip */}
        <div className="relative flex-shrink-0">
          {/* Active glow behind icon */}
          {isActive && (
            <span
              className="absolute -inset-2 rounded-full blur-xl opacity-60 dark:opacity-100"
              style={{ background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)` }}
              aria-hidden
            />
          )}
          <div
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
              isActive ? "scale-110" : "scale-100 group-hover:scale-105 bg-slate-100 dark:bg-white/10"
            }`}
            style={
              isActive
                ? {
                    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    boxShadow: `0 4px 20px ${accent.glow}50`,
                  }
                : {}
            }
          >
            <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-600 dark:text-white/70"}`} />
          </div>
          {/* Number badge */}
          <span
            className={`absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
              isActive
                ? "text-white"
                : "bg-slate-200 text-slate-700 dark:bg-white/20 dark:text-white/80"
            }`}
            style={
              isActive
                ? { background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }
                : {}
            }
          >
            {index + 1}
          </span>
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1 py-0.5">
          <h3
            className={`text-sm font-bold transition-colors duration-200 leading-tight ${
              isActive ? "" : "text-slate-800 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white"
            }`}
            style={isActive ? { color: accent.from } : {}}
          >
            {pillar.title}
          </h3>
          <p className={`mt-1 text-xs leading-snug transition-colors ${isActive ? "text-slate-600 dark:text-white/60" : "text-slate-500 dark:text-white/40"}`}>
            {pillar.subtitle}
          </p>
        </div>

        {/* Active arrow */}
        <ArrowRight
          className={`mt-1 h-4 w-4 flex-shrink-0 transition-all duration-300 ${
            isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
          style={{ color: accent.from }}
        />
      </span>
    </motion.button>
  );
}

/* ── Content Panel ────────────────────────────────── */
function ContentPanel({
  pillar,
  accent,
  index,
}: {
  pillar: PlatformPillar;
  accent: (typeof accents)[number];
  index: number;
}) {
  const Icon = pillar.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pillar.slug}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full overflow-hidden rounded-3xl p-8 md:p-10 bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-500/10 dark:bg-[#070d1e] dark:border-white/10"
      >
        {/* Background orb */}
        <div
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-100"
          style={{ background: `radial-gradient(circle, ${accent.glow}25 0%, transparent 70%)` }}
          aria-hidden
        />
        <div
          className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-100"
          style={{ background: `radial-gradient(circle, ${accent.glow}15 0%, transparent 70%)` }}
          aria-hidden
        />

        {/* Pillar number */}
        <div className="relative flex items-center gap-3 mb-7">
          <span
            className="font-display text-5xl font-extrabold leading-none opacity-20 select-none"
            style={{ color: accent.from }}
          >
            0{index + 1}
          </span>
          <div className="h-8 w-px rounded-full opacity-20" style={{ background: accent.from }} />
          <span className="eyebrow-pill" style={{ borderColor: `${accent.from}30`, background: `${accent.from}10`, color: accent.from }}>
            Platform Pillar
          </span>
        </div>

        {/* Icon */}
        <div
          className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${accent.from}25, ${accent.to}15)`,
            border: `1px solid ${accent.from}30`,
            boxShadow: `0 8px 32px ${accent.glow}30`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl animate-pulse"
            style={{ background: `radial-gradient(circle at 30% 30%, ${accent.from}20, transparent)` }}
            aria-hidden
          />
          <Icon className="relative h-8 w-8" style={{ color: accent.from }} />
        </div>

        {/* Title */}
        <h2
          className="font-display text-2xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-3xl"
        >
          {pillar.title}
        </h2>
        <p className="mt-2 text-sm font-semibold" style={{ color: accent.from }}>
          {pillar.subtitle}
        </p>

        {/* Description */}
        <p className="mt-5 text-sm leading-[1.8] text-slate-600 dark:text-white/70 md:text-[15px]">
          {pillar.description}
        </p>

        {/* Outcome chip */}
        <div
          className="relative mt-7 flex items-start gap-3 rounded-2xl p-4"
          style={{
            background: `linear-gradient(135deg, ${accent.from}12, ${accent.to}08)`,
            border: `1px solid ${accent.from}25`,
          }}
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: accent.from }} />
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: accent.from }}>
              Enterprise Outcome
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white/90">{pillar.outcome}</p>
          </div>
        </div>

        {/* Shimmer line across top */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.from}80, ${accent.to}80, transparent)` }}
          aria-hidden
        />
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Component ───────────────────────────────── */
export default function PlatformPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaIsInView = useInView(ctaRef, { once: true });
  const ctaX = useMotionValue(0);
  const ctaY = useMotionValue(0);
  const ctaSpringX = useSpring(ctaX, { stiffness: 200, damping: 20 });
  const ctaSpringY = useSpring(ctaY, { stiffness: 200, damping: 20 });

  const handleCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ctaRef.current?.getBoundingClientRect();
    if (!rect) return;
    ctaX.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    ctaY.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };
  const handleCtaLeave = () => { ctaX.set(0); ctaY.set(0); };

  const activeAccent = accents[activeIndex % accents.length];

  return (
    <>
      {/* ── Header ──────────────────────────────────── */}
      <motion.div
        ref={headerRef}
        className="relative mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
        variants={headerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={headerItem}
          className="absolute -top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(13,71,255,0.18), transparent 70%)" }}
          aria-hidden
        />

        <motion.span
          variants={headerItem}
          className="relative inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          The Cybelinx Platform Architecture
        </motion.span>

        <motion.h2
          variants={headerItem}
          className="relative mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          Five Core Platform Pillars.{" "}
          <span className="text-gradient-animated">One Foundation.</span>
        </motion.h2>

        <motion.p
          variants={headerItem}
          className="relative mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/65 md:text-lg"
        >
          SaaS/PaaS Engineering, AI &amp; LLM Core, Multi-Cloud DevSecOps, Unified Data Platform, and Quantum-Ready Cryptography — powering our 7 enterprise SaaS solutions on a single regulated foundation.
        </motion.p>

        <motion.div
          variants={headerItem}
          className="relative mt-8 h-px w-48"
          style={{ background: `linear-gradient(90deg, transparent, ${activeAccent.from}70, transparent)` }}
        />
      </motion.div>

      {/* ── Vertical / Horizontal Tabs Layout ──────────────────────── */}
      <div className="grid lg:grid-cols-5 gap-6 xl:gap-8 items-stretch">

        {/* LEFT: Shiny tab list (2/5 width on desktop, horizontal swipe bar on mobile) */}
        <div className="lg:col-span-2 flex lg:flex-col overflow-x-auto pb-3 lg:pb-0 gap-3 scrollbar-none snap-x snap-mandatory">
          {platformPillars.map((pillar, index) => (
            <div key={pillar.slug} className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 flex-shrink-0 lg:flex-shrink snap-align-start">
              <ShinyTab
                pillar={pillar}
                accent={accents[index % accents.length]}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* RIGHT: Content panel (3/5 width) */}
        <div className="lg:col-span-3 min-h-[420px] lg:min-h-[480px]">
          <ContentPanel
            pillar={platformPillars[activeIndex]}
            accent={activeAccent}
            index={activeIndex}
          />
        </div>
      </div>

      {/* ── Magnetic CTA ────────────────────────────── */}
      <motion.div
        ref={ctaRef}
        className="mt-14 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={ctaIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        onMouseMove={handleCtaMove}
        onMouseLeave={handleCtaLeave}
        style={{ x: ctaSpringX, y: ctaSpringY }}
      >
        <Link
          href="/technologies"
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white transition-all duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-violet to-accent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
          <span className="absolute inset-0 rounded-full ring-1 ring-white/20 transition-all duration-300 group-hover:ring-white/40" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-violet to-accent opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
          <span className="relative z-10">Explore the full technology stack</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </>
  );
}