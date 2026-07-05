"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import GlobeScene from "./GlobeScene";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const highlights = ["Live in production", "Multi-tenant SaaS", "AI-native workflows"];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="relative bg-grade-wash pb-16 pt-20 md:pb-24 md:pt-28">
        <motion.div aria-hidden="true" style={{ opacity }} className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(42,119,173,0.14),transparent_60%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-6">
          <span className="slugline">SaaS Products. Live Today.</span>

          <div className="mt-8 flex items-center gap-8 lg:gap-16">
            <div className="min-w-0 flex-1">
              <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] text-surface md:text-5xl lg:text-6xl">
                AI-powered products that{" "}
                <span className="bg-glow-gradient bg-clip-text text-transparent">run your enterprise</span>.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-surface/85 md:text-lg">
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

              <div className="mt-9 flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-surface/10 bg-surface/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-surface/85"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div style={{ y }} className="hidden shrink-0 md:block">
              <GlobeScene />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
