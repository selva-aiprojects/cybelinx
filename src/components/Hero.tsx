"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const highlights = ["Live in production", "Multi-tenant SaaS", "AI-native workflows"];

  return (
    <div ref={ref} className="relative overflow-hidden bg-charcoal">
      <div className="relative py-20 md:py-28 lg:py-36">
        <motion.div aria-hidden="true" style={{ opacity }} className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="slugline">SaaS Products. Live Today.</span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-surface md:text-5xl lg:text-6xl">
              AI-powered products that run your enterprise.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Cybelinx builds multi-tenant SaaS platforms for enterprise operations. CybeHRM handles
              statutory-compliant HR and payroll. CybeHMS runs multi-property hospitality. Both are live,
              both in production — and more platforms are on the way.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products">Explore Products</Button>
              <Button href="/contact" variant="secondary">
                Request a Demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-slate"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
