"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const highlights = [
    { label: "SaaS/PaaS and LLM services live in production", color: "bg-live" },
    { label: "Multi-cloud DevSecOps pipeline", color: "bg-primary" },
    { label: "Quantum-ready architecture", color: "bg-violet" },
  ];

  return (
    <div ref={ref} className="hero-mesh relative overflow-hidden">
      <div className="relative py-24 md:py-32 lg:py-44">
        <motion.div aria-hidden="true" style={{ opacity }} className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet/5 blur-3xl" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div style={{ y }} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="slugline">AI-Native Platform for Regulated Enterprises</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-surface md:text-6xl lg:text-7xl"
            >
              AI-native platform for{" "}
              <span className="gradient-text">regulated enterprises</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-slate md:text-xl"
            >
              Web, SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering —
              on one developer-friendly platform for engineering and platform teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/products">Explore Products</Button>
              <Button href="/contact" variant="secondary">
                Request a Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-semibold text-slate backdrop-blur-sm"
                >
                  <span className={`h-2 w-2 rounded-full ${item.color}`} aria-hidden="true" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
