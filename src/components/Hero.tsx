"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import DynamicHeroAnimation from "./DynamicHeroAnimation";
import {
  ArrowRight,
  ChevronRight,
  Activity,
  ShieldCheck,
  BarChart3
} from "lucide-react";

// The 4 domains with their respective images
const slides = [
  {
    id: "saas",
    title: "Enterprise software, reimagined with AI.",
    description: "One platform — SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering — for regulated enterprises worldwide.",
    tag: "AI-Native Platform · Now in Production",
    cssVar: "var(--hero-bg-saas)",
    tabLabel: "SaaS & PaaS",
    tabDesc: "Multi-tenant enterprise apps"
  },
  {
    id: "devsecops",
    title: "Automated compliance and zero-trust security.",
    description: "Standardize builds, scans, and deployments across multi-region Kubernetes clusters with our multi-cloud DevSecOps engine.",
    tag: "DevSecOps Engine",
    cssVar: "var(--hero-bg-devsecops)",
    tabLabel: "DevSecOps",
    tabDesc: "Secure multi-cloud pipelines"
  },
  {
    id: "ai",
    title: "Intelligence built into the foundation.",
    description: "Expose tenant-aware LLM APIs with centralized governance, vector embeddings, and cost controls directly from the platform core.",
    tag: "AI & LLM Services",
    cssVar: "var(--hero-bg-ai)",
    tabLabel: "AI-Native Core",
    tabDesc: "LLMs and Data Mesh"
  },
  {
    id: "quantum",
    title: "Future-proof cryptographic agility.",
    description: "Prepare enterprise systems for post-quantum decryption threats with quantum-resistant key management.",
    tag: "Quantum-Ready",
    cssVar: "var(--hero-bg-quantum)",
    tabLabel: "Quantum-Ready",
    tabDesc: "Post-quantum security"
  },
  {
    id: "data-platform",
    title: "Unified data foundation for AI & analytics.",
    description: "Scale your enterprise workloads on a modern data lakehouse architecture with built-in governance, real-time streaming, and unified analytics.",
    tag: "Data Platform",
    cssVar: "var(--hero-bg-data)",
    tabLabel: "Data Platform",
    tabDesc: "Lakehouse & Analytics"
  }
];

const statsRow = [
  { value: "200+", label: "Enterprises" },
  { value: "15+", label: "Years" },
  { value: "12", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  // Colors for the particle mesh based on active slide (Brand Palette)
  const themeColors: Record<string, string[]> = {
    saas: ['#0D47FF', '#4FD8FF'], // Brand Blue → Cyan
    devsecops: ['#00C2FF', '#4FD8FF'], // Brand Cyan → Light Cyan
    ai: ['#7B61FF', '#0D47FF'], // Brand Violet → Blue
    quantum: ['#7B61FF', '#00C2FF'], // Brand Violet → Cyan
    "data-platform": ['#0D47FF', '#00C2FF', '#4FD8FF'], // Brand Blue, Cyan & Light Cyan
  };

  const currentColors = themeColors[slide.id] || themeColors.saas;

  return (
    <div className="relative min-h-[75vh] md:min-h-[90vh] flex items-start overflow-hidden bg-background">

      {/* ── Dynamic Particle Wave Animation (Thoughtworks Style) ── */}
      {/* We add z-0 here to ensure ALL background elements (including the gradient overlay) stay strictly behind the z-10 text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {/* Subtle Tech Grid overlay (Static Grid) - Light & Dark variants */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDB2ODBNODAgMHY4ME0wIDBoODBNMCA4MGg4MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] dark:hidden z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDB2ODBNODAgMHY4ME0wIDBoODBNMCA4MGg4MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] hidden dark:block z-0" />

        {/* Dynamic Data Visualizer (Canvas) */}
        <div className="absolute inset-0 opacity-80 mix-blend-multiply dark:mix-blend-screen z-10 transition-colors duration-1000">
          <DynamicHeroAnimation color={currentColors[0]} slideId={slide.id} />
        </div>

        {/* ── Left-to-Right Gradient Overlay (For Text Readability) ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-8 pt-16 lg:py-16 lg:pt-20 grid lg:grid-cols-12 gap-8 items-start">

        {/* ── Left Content ── */}
        <div className="lg:col-span-8 max-w-2xl">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col justify-start space-y-5"
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md mb-4 transition-colors duration-500"
                    style={{
                      backgroundColor: `${currentColors[0]}1a`,
                      borderColor: `${currentColors[0]}40`,
                      color: currentColors[0]
                    }}
                  >
                    <span
                      className="relative h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: currentColors[0],
                        boxShadow: `0 0 10px ${currentColors[0]}`
                      }}
                    />
                    {slide.tag}
                  </span>

                  <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl drop-shadow-xl text-gradient-animated">
                    {slide.title}
                  </h1>

                  <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed font-normal text-slate">
                    {slide.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Button href="/products" variant="primary" size="lg" className="border-none font-bold shadow-glow text-white transition-all duration-300" style={{ backgroundColor: currentColors[0] }}>
              Explore Platform
            </Button>
            {/* Outline button matching the theme */}
            <Button href="/contact" variant="secondary" size="lg" className="bg-transparent border-border text-surface hover:bg-surface/5 font-semibold">
              Request Demo
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
            {statsRow.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-surface">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation Tabs ── */}
        <div className="absolute right-0 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3 w-56 lg:w-64">
          <div className="flex flex-col gap-3">
            {slides.map((s, index) => {
              const isActive = index === activeSlide;
              const tabColor = (themeColors[s.id] || themeColors.saas)[0];

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(index)}
                  className={`group relative flex w-full flex-row items-center justify-between rounded-2xl p-4 border transition-all duration-500 ease-out ${isActive
                    ? "scale-[1.02] backdrop-blur-xl shadow-lg"
                    : "bg-white/50 border-border hover:bg-white/80"
                    }`}
                  style={
                    isActive
                      ? {
                        backgroundColor: `${tabColor}1f`,
                        borderColor: `${tabColor}66`,
                        boxShadow: `0 0 25px ${tabColor}33`
                      }
                      : {}
                  }
                >
                  {/* Active progress bar indicator */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"
                      }`}
                    style={{
                      backgroundColor: tabColor,
                      boxShadow: isActive ? `0 0 12px ${tabColor}` : 'none'
                    }}
                  />
                  <div className="flex items-center justify-between w-full pl-2">
                    <div className="text-left">
                      <h3
                        className="font-display font-bold text-base transition-colors"
                        style={{ color: isActive ? tabColor : undefined }}
                      >
                        {s.tabLabel}
                      </h3>
                      <p
                        className="text-xs mt-0.5 font-medium transition-colors opacity-80"
                        style={{ color: isActive ? tabColor : undefined }}
                      >
                        {s.tabDesc}
                      </p>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${isActive ? 'translate-x-1' : 'text-slate opacity-50 group-hover:translate-x-0.5'}`}
                      style={{ color: isActive ? tabColor : undefined }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Mobile Navigation ── */}
        <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-2 md:hidden px-6">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            const tabColor = (themeColors[s.id] || themeColors.saas)[0];
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: isActive ? tabColor : 'rgba(148, 163, 184, 0.4)',
                  width: isActive ? '2rem' : '0.5rem',
                  boxShadow: isActive ? `0 0 8px ${tabColor}` : 'none'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}