"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { ArrowRight, ChevronRight } from "lucide-react";

// The 4 domains with their respective images
const slides = [
  {
    id: "saas",
    title: "Enterprise software, reimagined with AI.",
    description: "One multi-tenant platform — SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering — for regulated enterprises worldwide.",
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
    description: "Ready your enterprise architecture for post-quantum decryption threats today with quantum-resistant key management.",
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

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-slate-900">
      
      {/* ── Background Image Slider ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[background-image] duration-700"
            style={{ backgroundImage: slide.cssVar }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* ── Left-to-Right Dark Gradient Overlay (Reference Style) ── */}
        {/* This creates the dark fade on the left so white text is highly readable, while leaving the right side of the image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> {/* Slight overall darkening to ensure contrast everywhere */}
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-20 pt-32 lg:py-32 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* ── Left Content (Forced Light Text on Dark Gradient) ── */}
        <div className="lg:col-span-8 max-w-2xl">
          <div className="relative h-[380px] md:h-[320px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md mb-6">
                    <span className="live-dot relative h-2 w-2 rounded-full bg-emerald-400" />
                    {slide.tag}
                  </span>

                  <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl font-medium">
                    {slide.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button href="/products" variant="primary" size="lg" className="border-none">
              Explore Platform
            </Button>
            {/* Outline button matching the reference "Know More" style */}
            <Button href="/contact" variant="secondary" size="lg" className="bg-transparent border-white/50 text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/20 pt-8">
            {statsRow.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Navigation Slider (Glassmorphism) ── */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 ml-auto w-full max-w-sm relative z-20">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className={`group relative text-left p-4 rounded-2xl border transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] ${
                  isActive 
                    ? "bg-white/60 border-white/80 dark:bg-white/10 dark:border-white/30 scale-[1.02]" 
                    : "bg-white/20 border-white/40 hover:bg-white/40 hover:border-white/60 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20"
                }`}
              >
                {/* Active progress bar indicator (Subtle edge glow) */}
                {isActive && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary/80 to-primary shadow-[0_0_12px_var(--cb-primary)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-display font-bold text-base transition-colors ${isActive ? 'text-surface' : 'text-slate-700 dark:text-slate-300'}`}>
                      {s.tabLabel}
                    </h3>
                    <p className={`text-xs mt-0.5 font-medium transition-colors ${isActive ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'}`}>
                      {s.tabDesc}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'text-primary translate-x-1' : 'text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5'}`} />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
