"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const statsRow = [
  { value: "200+", label: "Enterprises" },
  { value: "15+", label: "Years" },
  { value: "12", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div 
      ref={ref} 
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* ── Background Image ── */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* ── Dark Gradient Overlay (SC Bank Style) ── */}
      {/* Solid dark on left, fading to completely transparent on the right */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent sm:w-[85%] md:w-[70%] lg:w-[60%]" 
        aria-hidden="true"
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 py-20 pt-32 lg:py-32">
        <div className="grid lg:grid-cols-2">
          
          {/* ── Left Content ── */}
          <motion.div style={{ y, opacity }} className="max-w-2xl">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-charcoal/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <span className="live-dot relative h-2 w-2 rounded-full bg-live" />
                AI-Native Platform · Now in Production
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              Enterprise software, reimagined with AI.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl"
            >
              One multi-tenant platform — SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering — for regulated enterprises worldwide.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/products" variant="primary" size="lg">
                Explore Products
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Request a Demo
              </Button>
              <a
                href="#how-it-works"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent transition-colors ml-2"
              >
                How it works <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Trust stat strip (integrated cleanly below the text) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/50 pt-8"
            >
              {statsRow.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate/70 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right side is intentionally left blank so the bright hero image shines through! */}

        </div>
      </div>

      {/* Bottom gradient fade to next section to ensure a smooth transition into the dark site */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
}
