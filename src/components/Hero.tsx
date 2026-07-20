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
    bg: "hero-bg.png",
    tabLabel: "SaaS & PaaS",
    tabDesc: "Multi-tenant enterprise apps"
  },
  {
    id: "devsecops",
    title: "Automated compliance and zero-trust security.",
    description: "Standardize builds, scans, and deployments across multi-region Kubernetes clusters with our multi-cloud DevSecOps engine.",
    tag: "DevSecOps Engine",
    bg: "hero-devsecops.png",
    tabLabel: "DevSecOps",
    tabDesc: "Secure multi-cloud pipelines"
  },
  {
    id: "ai",
    title: "Intelligence built into the foundation.",
    description: "Expose tenant-aware LLM APIs with centralized governance, vector embeddings, and cost controls directly from the platform core.",
    tag: "AI & LLM Services",
    bg: "hero-ai.png",
    tabLabel: "AI-Native Core",
    tabDesc: "LLMs and Data Mesh"
  },
  {
    id: "quantum",
    title: "Future-proof cryptographic agility.",
    description: "Ready your enterprise architecture for post-quantum decryption threats today with quantum-resistant key management.",
    tag: "Quantum-Ready",
    bg: "hero-quantum.png",
    tabLabel: "Quantum-Ready",
    tabDesc: "Post-quantum security"
  },
  {
    id: "data-platform",
    title: "Unified data foundation for AI & analytics.",
    description: "Scale your enterprise workloads on a modern data lakehouse architecture with built-in governance, real-time streaming, and unified analytics.",
    tag: "Data Platform",
    bg: "hero-data.png",
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
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* ── Background Image Slider ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/${slide.bg}')` }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* No dark gradient overlay anymore! The image is bright and the text is dark. */}

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-20 pt-32 lg:py-32 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* ── Left Content (Dark text on bright background) ── */}
        <div className="lg:col-span-8 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md mb-6">
                <span className="live-dot relative h-2 w-2 rounded-full bg-live" />
                {slide.tag}
              </span>

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-surface md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl font-medium">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/products" variant="primary" size="lg">
              Explore Platform
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Request Demo
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/30 pt-8">
            {statsRow.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-surface">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Navigation Slider (Dark text on bright background) ── */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 ml-auto w-full max-w-sm relative z-20">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isActive 
                    ? "bg-white/90 border-primary shadow-xl" 
                    : "bg-white/40 border-white/60 hover:bg-white/70 hover:border-white/80"
                }`}
              >
                {/* Active progress bar indicator */}
                {isActive && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-display font-bold text-base transition-colors ${isActive ? 'text-surface' : 'text-slate-700'}`}>
                      {s.tabLabel}
                    </h3>
                    <p className={`text-xs mt-0.5 font-medium transition-colors ${isActive ? 'text-slate-600' : 'text-slate-500'}`}>
                      {s.tabDesc}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'text-primary translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom gradient fade to next section (dark to blend into the rest of the site) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
