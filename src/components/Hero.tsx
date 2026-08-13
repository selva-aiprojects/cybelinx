"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import DynamicHeroAnimation from "./DynamicHeroAnimation";
import {
  ArrowRight,
  ChevronRight,
  Pause,
  Play,
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
    title: "Regulated Enterprise Platforms\nPowered by One Secure Runtime.",
    description:
      "Deploy automated, AI-native workflows across healthcare, banking, and enterprise operations with built-in SOC 2, HIPAA, and ABDM compliance.",
    tag: "Enterprise SaaS & PaaS Runtime",
    cssVar: "var(--hero-bg-saas)",
    tabLabel: "Enterprise SaaS & PaaS",
    tabDesc: "Regulated multi-tenant runtime core",
    color: "#0D47FF",
    icon: Globe2,
  },
  {
    id: "ai",
    title: "Production-ready GenAI &\nML at enterprise scale.",
    description:
      "Operational intelligence embedded into the core of your workflows — fine-tuned LLMs, agentic RAG, autonomous MLOps, and real-time execution.",
    tag: "AI/GenAI - ML Production Ready",
    cssVar: "var(--hero-bg-ai)",
    tabLabel: "AI/GenAI - ML Production Ready",
    tabDesc: "Enterprise GenAI, LLMOps & MLOps",
    color: "#7B61FF",
    icon: Brain,
  },
  {
    id: "devsecops",
    title: "Zero-Trust Security &\nautomated DevSecOps.",
    description:
      "Scale securely across AWS, Azure, GCP, and Kubernetes with Zero-Trust guardrails, automated SAST/DAST scanning, and built-in compliance.",
    tag: "Security & DevSecOps",
    cssVar: "var(--hero-bg-devsecops)",
    tabLabel: "Security & DevSecOps",
    tabDesc: "Zero-Trust & automated compliance",
    color: "#00C2FF",
    icon: ShieldCheck,
  },
  {
    id: "data-platform",
    title: "Unified data platform &\npredictive analytics.",
    description:
      "Connect operational data, streaming analytics, and AI into a governed open lakehouse foundation designed for clarity and execution at scale.",
    tag: "Data Platform & Analytics",
    cssVar: "var(--hero-bg-data)",
    tabLabel: "Data Platform & Analytics",
    tabDesc: "Lakehouse & real-time analytics",
    color: "#10B981",
    icon: Database,
  },
  {
    id: "quantum",
    title: "Quantum Ready Workflow &\npost-quantum security.",
    description:
      "Future-ready architecture supporting post-quantum encryption, hybrid quantum-inspired optimization, and continuous innovation without costly replatforming.",
    tag: "Quantum Ready Workflow",
    cssVar: "var(--hero-bg-quantum)",
    tabLabel: "Quantum Ready Workflow",
    tabDesc: "Post-quantum security & hybrid compute",
    color: "#C084FC",
    icon: Atom,
  },
];

const statsRow = [
  { value: "200+", label: "Enterprises", icon: Globe2 },
  { value: "15+", label: "Years", icon: Zap },
  { value: "12", label: "Countries", icon: Globe2 },
  { value: "99.9%", label: "Uptime SLA", icon: ShieldCheck },
];

import PersonaPathwaySwitcher from "./PersonaPathwaySwitcher";

const trustSeals = [
  { label: "SOC 2 Type II Certified", href: "/security", badge: "SOC 2" },
  { label: "ISO 27001 Compliant", href: "/security", badge: "ISO 27001" },
  { label: "GDPR & HIPAA Ready", href: "/security", badge: "HIPAA/GDPR" },
  { label: "ABDM Level 2 Certified", href: "/security", badge: "ABDM" },
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
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const slide = slides[activeSlide];
  const currentColors = themeColors[slide.id] || themeColors.saas;
  const primaryColor = currentColors[0];
  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-roledescription="carousel"
      aria-label="Cybelinx platform capabilities"
    >
      {/* ── Background: animated canvas & high-res graphic mesh ─────────── */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: slide.cssVar,
        }}
      >
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
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:py-14 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        {/* ── LEFT: Content ────────────────────────── */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">

          {/* Trust seals — top badge row */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4"
          >
            {trustSeals.map((seal) => (
              <Link
                key={seal.label}
                href={seal.href}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-all hover:scale-105 shadow-xs"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span>{seal.label}</span>
              </Link>
            ))}
          </motion.div>

          {/* Persona Pathway Switcher */}
          <div className="mb-4">
            <PersonaPathwaySwitcher />
          </div>

          {/* Slide content */}
          <div className="grid grid-cols-1 grid-rows-1">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={slide.id}
                style={{ gridArea: "1 / 1 / 2 / 2" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                {/* Tag pill */}
                <span
                  className="shiny-badge w-fit text-[10px] sm:text-[11px] h-7 sm:h-8"
                  style={{
                    backgroundColor: `${primaryColor}14`,
                    borderColor: `${primaryColor}40`,
                    color: primaryColor,
                  }}
                >
                  <span
                    className="relative h-2 w-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: primaryColor,
                      boxShadow: `0 0 10px ${primaryColor}`,
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
              variant="shiny"
              size="lg"
              className="font-bold text-white transition-all duration-300 hover:scale-[1.03] text-sm sm:text-base px-6 py-3.5"
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 8px 32px ${primaryColor}45`,
              }}
            >
              Explore Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              href="/contact"
              variant="glass"
              size="lg"
              className="font-semibold text-sm sm:text-base px-6 py-3.5"
            >
              Request Demo
            </Button>
          </div>

          {/* Verified SVG Trust Badges Alignment */}
          <div className="mt-8 pt-6 border-t border-brand-navy-100 dark:border-brand-navy-800">
            <p className="text-xs font-semibold text-brand-navy-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Enterprise Compliance Baseline
            </p>
            <div className="flex flex-wrap gap-5 items-center opacity-85 hover:opacity-100 transition-all">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy-800 dark:text-slate-200">
                <svg className="w-4 h-4 text-brand-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 11.95 11.95 0 01-1.8 7.375 11.958 11.958 0 01-5.777 4.564a.25.25 0 01-.114 0 11.958 11.958 0 01-5.776-4.564 11.95 11.95 0 01-1.8-7.375zm8.41 3.47a.75.75 0 10-1.152-.96l-2.25 2.7a.75.75 0 001.122.996l1.73-2.077 1.157 1.156a.75.75 0 101.06-1.061l-1.667-1.666z" clipRule="evenodd"/>
                </svg>
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy-800 dark:text-slate-200">
                <svg className="w-4 h-4 text-brand-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 11.95 11.95 0 01-1.8 7.375 11.958 11.958 0 01-5.777 4.564a.25.25 0 01-.114 0 11.958 11.958 0 01-5.776-4.564 11.95 11.95 0 01-1.8-7.375zm8.41 3.47a.75.75 0 10-1.152-.96l-2.25 2.7a.75.75 0 001.122.996l1.73-2.077 1.157 1.156a.75.75 0 101.06-1.061l-1.667-1.666z" clipRule="evenodd"/>
                </svg>
                ISO 27001
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy-800 dark:text-slate-200">
                <svg className="w-4 h-4 text-brand-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 11.95 11.95 0 01-1.8 7.375 11.958 11.958 0 01-5.777 4.564a.25.25 0 01-.114 0 11.958 11.958 0 01-5.776-4.564 11.95 11.95 0 01-1.8-7.375zm8.41 3.47a.75.75 0 10-1.152-.96l-2.25 2.7a.75.75 0 001.122.996l1.73-2.077 1.157 1.156a.75.75 0 101.06-1.061l-1.667-1.666z" clipRule="evenodd"/>
                </svg>
                HIPAA & GDPR Ready
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3 border-t border-border/30 pt-6 sm:pt-8">
            {statsRow.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="glass-card-refined shiny-card flex flex-col items-center justify-center p-3.5 text-center">
                  <div className="font-display text-xl sm:text-2xl font-extrabold shiny-text tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate mt-1">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Core Pillars Adaptive Theme Card ── */}
        <div
          className="flex lg:col-span-6 xl:col-span-5 flex-col justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div
            className="glass-premium shiny-card relative overflow-hidden rounded-3xl p-4 sm:p-7 shadow-2xl transition-all duration-500 border border-white/30 dark:border-cyan-400/20"
            style={{
              boxShadow: `0 24px 64px ${primaryColor}30, inset 0 1px 0 rgba(255,255,255,0.4)`,
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
            <div className="relative flex items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-slate-800 dark:text-white/70" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white/90">
                  5 Core Pillars
                </span>
              </div>
              <div className="flex items-center gap-2">
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
                <button
                  type="button"
                  onClick={() => setIsPaused((paused) => !paused)}
                  className="hidden lg:inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-border bg-background/90 text-surface transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={isPaused || prefersReducedMotion ? "Play hero slides" : "Pause hero slides"}
                  aria-pressed={isPaused || prefersReducedMotion}
                  disabled={prefersReducedMotion}
                >
                  {isPaused || prefersReducedMotion ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* Tabs List */}
            <div className="relative flex flex-col gap-2.5">
              {slides.map((s, index) => {
                const isActive = index === activeSlide;
                const tabColor = (themeColors[s.id] || themeColors.saas)[0];
                const Icon = s.icon;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(index)}
                    aria-pressed={isActive}
                    className={`group relative flex w-full min-h-[62px] sm:min-h-[68px] items-center justify-between rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 transition-all duration-300 ease-out text-left border ${
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

                    <div className="flex items-center gap-3.5 pl-1.5 w-full min-w-0">
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
                          className="font-display font-bold text-xs sm:text-sm leading-tight transition-colors text-slate-900 dark:text-white truncate"
                          style={{ color: isActive ? tabColor : undefined }}
                        >
                          {s.tabLabel}
                        </h3>
                        <p
                          className="text-[11px] sm:text-xs mt-0.5 font-medium line-clamp-1 transition-colors text-slate-500 dark:text-white/50"
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
        <div className="flex items-center justify-center gap-3 lg:hidden pt-3 pb-1">
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 shadow-sm transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            aria-label={isPaused || prefersReducedMotion ? "Play hero slides" : "Pause hero slides"}
            aria-pressed={isPaused || prefersReducedMotion}
            disabled={prefersReducedMotion}
          >
            {isPaused || prefersReducedMotion ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <div className="flex items-center gap-1.5" aria-label="Choose a hero slide">
            {slides.map((s, index) => {
              const isActive = index === activeSlide;
              const tabColor = (themeColors[s.id] || themeColors.saas)[0];
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(index)}
                  className="h-2 py-3.5 flex items-center justify-center cursor-pointer group"
                  aria-label={`Show slide ${index + 1}: ${s.tabLabel}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className="h-2 rounded-full transition-all duration-300 block"
                    style={{
                      backgroundColor: isActive ? tabColor : "rgba(148,163,184,0.3)",
                      width: isActive ? "1.75rem" : "0.5rem",
                      boxShadow: isActive ? `0 0 8px ${tabColor}` : "none",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
