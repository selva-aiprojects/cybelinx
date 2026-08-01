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

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-12 pt-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">

        {/* ── Left Content ── */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col justify-start space-y-6"
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md mb-4 transition-colors duration-500 shadow-sm"
                    style={{
                      backgroundColor: `${currentColors[0]}15`,
                      borderColor: `${currentColors[0]}40`,
                      color: currentColors[0]
                    }}
                  >
                    <span
                      className="relative h-2 w-2 rounded-full animate-pulse"
                      style={{
                        backgroundColor: currentColors[0],
                        boxShadow: `0 0 10px ${currentColors[0]}`
                      }}
                    />
                    {slide.tag}
                  </span>

                  <h1 className="font-display text-3.5xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl drop-shadow-xl text-surface">
                    {slide.title}
                  </h1>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate font-normal">
                    {slide.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button 
              href="/products" 
              variant="primary" 
              size="lg" 
              className="border-none font-bold shadow-lg text-white transition-all duration-300 hover:scale-[1.02]" 
              style={{ 
                backgroundColor: currentColors[0],
                boxShadow: `0 4px 20px ${currentColors[0]}40`
              }}
            >
              Explore Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-background/80 backdrop-blur-md border-border text-surface hover:bg-surface/5 font-semibold transition-all hover:border-primary/40"
            >
              Request Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/60 pt-8">
            {statsRow.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-surface tracking-tight">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Navigation Tabs Card ── */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-3xl border border-border/60 bg-card-bg/80 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl shadow-slate-900/5 transition-all">
            {/* Header pill */}
            <div className="flex items-center justify-between px-2 pb-4 mb-2 border-b border-border/40">
              <span className="text-xs font-bold uppercase tracking-wider text-slate">Platform Pillars</span>
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                0{activeSlide + 1} / 0{slides.length}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {slides.map((s, index) => {
                const isActive = index === activeSlide;
                const tabColor = (themeColors[s.id] || themeColors.saas)[0];

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(index)}
                    className={`group relative flex w-full flex-row items-center justify-between rounded-2xl p-4 border transition-all duration-300 ease-out text-left ${
                      isActive
                        ? "backdrop-blur-xl shadow-md"
                        : "bg-surface/5 border-border/40 hover:bg-surface/10 hover:border-border"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: `${tabColor}14`,
                            borderColor: `${tabColor}66`,
                            boxShadow: `0 4px 20px ${tabColor}20`
                          }
                        : {}
                    }
                  >
                    {/* Active indicator line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        backgroundColor: tabColor,
                        boxShadow: isActive ? `0 0 10px ${tabColor}` : 'none'
                      }}
                    />
                    <div className="flex items-center justify-between w-full pl-2">
                      <div>
                        <h3
                          className="font-display font-bold text-sm sm:text-base transition-colors"
                          style={{ color: isActive ? tabColor : undefined }}
                        >
                          {s.tabLabel}
                        </h3>
                        <p
                          className="text-xs mt-0.5 font-medium text-slate transition-colors line-clamp-1"
                          style={{ color: isActive ? `${tabColor}cc` : undefined }}
                        >
                          {s.tabDesc}
                        </p>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 shrink-0 transition-transform ${
                          isActive ? 'translate-x-1' : 'text-slate/40 group-hover:translate-x-0.5'
                        }`}
                        style={{ color: isActive ? tabColor : undefined }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile Dots Navigation ── */}
        <div className="flex justify-center gap-2 lg:hidden col-span-12 pt-4">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            const tabColor = (themeColors[s.id] || themeColors.saas)[0];
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isActive ? tabColor : 'rgba(148, 163, 184, 0.3)',
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}