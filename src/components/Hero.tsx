"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { ArrowRight, ChevronRight } from "lucide-react";

// The 4 domains (using the same bright background image for all for now)
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
    bg: "hero-bg.png",
    tabLabel: "DevSecOps",
    tabDesc: "Secure multi-cloud pipelines"
  },
  {
    id: "ai",
    title: "Intelligence built into the foundation.",
    description: "Expose tenant-aware LLM APIs with centralized governance, vector embeddings, and cost controls directly from the platform core.",
    tag: "AI & LLM Services",
    bg: "hero-bg.png",
    tabLabel: "AI-Native Core",
    tabDesc: "LLMs and Data Mesh"
  },
  {
    id: "quantum",
    title: "Future-proof cryptographic agility.",
    description: "Ready your enterprise architecture for post-quantum decryption threats today with quantum-resistant key management.",
    tag: "Quantum-Ready",
    bg: "hero-bg.png",
    tabLabel: "Quantum-Ready",
    tabDesc: "Post-quantum security"
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
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-background">
      
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

      {/* ── Dark Gradient Overlay (SC Bank Style) ── */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent sm:w-[85%] md:w-[75%] lg:w-[65%]" 
        aria-hidden="true"
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-20 pt-32 lg:py-32 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* ── Left Content (Dark Background -> White Text) ── */}
        <div className="lg:col-span-8 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-charcoal/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md mb-6">
                <span className="live-dot relative h-2 w-2 rounded-full bg-live" />
                {slide.tag}
              </span>

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
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

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/50 pt-8">
            {statsRow.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Navigation Slider (Bright Background -> Dark Text) ── */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 ml-auto w-full max-w-sm relative z-20">
          {slides.map((s, index) => {
            const isActive = index === activeSlide;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isActive 
                    ? "bg-white border-primary shadow-xl scale-105" 
                    : "bg-white/40 border-white/40 hover:bg-white/60 hover:border-white/80"
                }`}
              >
                {/* Active progress bar indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeSlideIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-display font-bold text-lg transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal/80'}`}>
                      {s.tabLabel}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors ${isActive ? 'text-charcoal/70' : 'text-charcoal/60'}`}>
                      {s.tabDesc}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'text-primary translate-x-1' : 'text-charcoal/40 group-hover:translate-x-0.5'}`} />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
}
