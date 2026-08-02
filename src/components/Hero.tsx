"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import DynamicHeroAnimation from "./DynamicHeroAnimation";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  Brain,
  Atom,
  Database,
  Layers,
} from "lucide-react";

const slides = [
  {
    id: "saas",
    title: "Enterprise software,\nreimagined with AI.",
    description:
      "One platform — SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering — for regulated enterprises worldwide.",
    tag: "AI-Native Platform · Now in Production",
    cssVar: "var(--hero-bg-saas)",
    tabLabel: "SaaS & PaaS",
    tabDesc: "Multi-tenant enterprise apps",
    color: "#0D47FF",
    icon: Globe2,
  },
  {
    id: "devsecops",
    title: "Automated compliance\nand zero-trust security.",
    description:
      "Standardize builds, scans, and deployments across multi-region Kubernetes clusters with our multi-cloud DevSecOps engine.",
    tag: "DevSecOps Engine",
    cssVar: "var(--hero-bg-devsecops)",
    tabLabel: "DevSecOps",
    tabDesc: "Secure multi-cloud pipelines",
    color: "#00C2FF",
    icon: ShieldCheck,
  },
  {
    id: "ai",
    title: "Intelligence built\ninto the foundation.",
    description:
      "Expose tenant-aware LLM APIs with centralized governance, vector embeddings, and cost controls directly from the platform core.",
    tag: "AI & LLM Services",
    cssVar: "var(--hero-bg-ai)",
    tabLabel: "AI-Native Core",
    tabDesc: "LLMs and Data Mesh",
    color: "#7B61FF",
    icon: Brain,
  },
  {
    id: "quantum",
    title: "Future-proof\ncryptographic agility.",
    description:
      "Prepare enterprise systems for post-quantum decryption threats with quantum-resistant key management.",
    tag: "Quantum-Ready",
    cssVar: "var(--hero-bg-quantum)",
    tabLabel: "Quantum-Ready",
    tabDesc: "Post-quantum security",
    color: "#C084FC",
    icon: Atom,
  },
  {
    id: "data-platform",
    title: "Unified data foundation\nfor AI & analytics.",
    description:
      "Scale your enterprise workloads on a modern data lakehouse architecture with built-in governance, real-time streaming, and unified analytics.",
    tag: "Data Platform",
    cssVar: "var(--hero-bg-data)",
    tabLabel: "Data Platform",
    tabDesc: "Lakehouse & Analytics",
    color: "#10B981",
    icon: Database,
  },
];

const statsRow = [
  { value: "200+", label: "Enterprises", icon: Globe2 },
  { value: "15+", label: "Years", icon: Zap },
  { value: "12", label: "Countries", icon: Globe2 },
  { value: "99.9%", label: "Uptime SLA", icon: ShieldCheck },
];

const trustBullets = [
  "SOC 2 Type II Certified",
  "ISO 27001 Compliant",
  "GDPR & HIPAA Ready",
];

const themeColors: Record<string, string[]> = {
  saas: ["#0D47FF", "#4FD8FF"],
  devsecops: ["#00C2FF", "#4FD8FF"],
  ai: ["#7B61FF", "#0D47FF"],
  quantum: ["#C084FC", "#00C2FF"],
  "data-platform": ["#10B981", "#0D47FF"],
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];
  const currentColors = themeColors[slide.id] || themeColors.saas;
  const primaryColor = currentColors[0];

  return (
    <div className="relative overflow-hidden bg-background">
      {/* ── Background: animated canvas ─────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,71,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,71,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Dynamic animation canvas */}
        <div className="absolute inset-0 opacity-70 mix-blend-multiply dark:mix-blend-screen dark:opacity-60 transition-colors duration-1000">
          <DynamicHeroAnimation color={primaryColor} slideId={slide.id} />
        </div>

        {/* Color gradient orbs that shift with slide */}
        <motion.div
          key={`orb-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${primaryColor}18 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <motion.div
          key={`orb2-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${currentColors[1] || currentColors[0]}12 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Left-to-right readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>

      {/* ── Main content ─────────────────────────── */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-0 lg:min-h-[88vh]">

        {/* ── LEFT: Content ────────────────────────── */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">

          {/* Trust bullets — top badge row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            {trustBullets.map((bullet) => (
              <span
                key={bullet}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                {bullet}
              </span>
            ))}
          </motion.div>

          {/* Slide content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 sm:gap-5"
              >
                {/* Tag pill */}
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider w-fit backdrop-blur-md shadow-sm"
                  style={{
                    backgroundColor: `${primaryColor}12`,
                    borderColor: `${primaryColor}35`,
                    color: primaryColor,
                  }}
                >
                  <span
                    className="relative h-2 w-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: primaryColor,
                      boxShadow: `0 0 8px ${primaryColor}`,
                    }}
                  />
                  {slide.tag}
                </span>

                {/* Headline */}
                <h1
                  className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-surface"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate font-normal">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href="/products"
              variant="primary"
              size="lg"
              className="border-none font-bold shadow-lg text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl text-sm sm:text-base px-6 py-3"
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 4px 24px ${primaryColor}45`,
              }}
            >
              Explore Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-card-bg border-border text-surface font-semibold transition-all hover:border-primary/40 hover:bg-primary/5 text-sm sm:text-base px-6 py-3"
            >
              Request Demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 border-t border-border/40 pt-6 sm:pt-8">
            {statsRow.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className={`flex flex-col ${i > 0 && i % 2 !== 0 ? "sm:border-l border-border/40 sm:pl-4" : i > 0 ? "border-l border-border/40 pl-4" : ""}`}>
                  <div className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-surface tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate/70 mt-1">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Platform Pillars Adaptive Theme Card ── */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
          <div
            className="relative overflow-hidden rounded-3xl p-6 sm:p-7 shadow-2xl transition-all duration-500 bg-slate-100 border border-slate-300/80 dark:bg-[#070D24] dark:border-white/15"
            style={{
              boxShadow: `0 24px 64px ${primaryColor}25, 0 4px 20px rgba(0,0,0,0.1)`,
            }}
          >
            {/* Top glowing ambient line */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)` }}
            />
            {/* Ambient background orb inside card */}
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-80"
              style={{ background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)` }}
            />

            {/* Card header */}
            <div className="relative flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-slate-800 dark:text-white/70" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white/90">
                  5 Core Platform Pillars
                </span>
              </div>
              <span
                className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border shadow-xs"
                style={{
                  background: `${primaryColor}20`,
                  color: primaryColor,
                  borderColor: `${primaryColor}50`,
                }}
              >
                0{activeSlide + 1} / 0{slides.length}
              </span>
            </div>

            {/* Tabs List */}
            <div className="relative flex flex-col gap-3">
              {slides.map((s, index) => {
                const isActive = index === activeSlide;
                const tabColor = (themeColors[s.id] || themeColors.saas)[0];
                const Icon = s.icon;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(index)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl p-3.5 transition-all duration-300 ease-out text-left border ${
                      isActive
                        ? "bg-white dark:bg-white/10 border-blue-400 dark:border-white/30 shadow-md shadow-blue-500/10 dark:shadow-none"
                        : "bg-white/70 hover:bg-white border-slate-200/80 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] dark:border-white/[0.06]"
                    }`}
                    style={
                      isActive
                        ? {
                            borderColor: tabColor,
                            backgroundColor: `${tabColor}15`,
                          }
                        : {}
                    }
                  >
                    {/* Left active glow bar */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                        style={{
                          backgroundColor: tabColor,
                          boxShadow: `0 0 10px ${tabColor}`,
                        }}
                      />
                    )}

                    <div className="flex items-center gap-3.5 pl-1.5 w-full">
                      {/* Icon container */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive ? "scale-105" : "group-hover:scale-105"
                        }`}
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${tabColor}, ${tabColor}dd)`
                            : "rgba(13, 71, 255, 0.06)",
                          border: isActive
                            ? `1px solid ${tabColor}`
                            : "1px solid rgba(13, 71, 255, 0.12)",
                          boxShadow: isActive ? `0 4px 14px ${tabColor}40` : "none",
                        }}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-700 dark:text-white/70"}`} />
                      </div>

                      {/* Title & subtitle */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="font-display font-bold text-sm sm:text-base leading-tight transition-colors text-slate-900 dark:text-white"
                          style={{ color: isActive ? tabColor : undefined }}
                        >
                          {s.tabLabel}
                        </h3>
                        <p
                          className="text-xs mt-0.5 font-medium line-clamp-1 transition-colors text-slate-500 dark:text-white/50"
                        >
                          {s.tabDesc}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isActive ? "translate-x-0.5 text-slate-900 dark:text-white" : "text-slate-400 dark:text-white/30 group-hover:text-slate-600 dark:group-hover:text-white/60 group-hover:translate-x-0.5"
                        }`}
                        style={{ color: isActive ? tabColor : undefined }}
                      />
                    </div>

                    {/* Active progress bar bottom */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-2xl">
                        <div
                          key={activeSlide}
                          className="h-full progress-fill"
                          style={{ background: tabColor, animationDuration: "8s" }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile dots ──────────────────────────── */}
        <div className="flex justify-center gap-2 lg:hidden col-span-12 pt-2">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            const tabColor = (themeColors[s.id] || themeColors.saas)[0];
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isActive ? tabColor : "rgba(148,163,184,0.3)",
                  width: isActive ? "2rem" : "0.5rem",
                  boxShadow: isActive ? `0 0 6px ${tabColor}` : "none",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}