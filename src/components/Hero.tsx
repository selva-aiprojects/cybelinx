"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const ApertureScene = dynamic(() => import("./ApertureScene"), {
  ssr: false,
  loading: () => <div className="h-64 w-64 animate-pulse rounded-full border border-primary/20" />,
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const highlights = ["Multi-tenant by design", "AI-native platforms", "Built for scale"];

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Letterbox bars — 2.35:1 cinema frame */}
      <div className="letterbox-bar h-6 w-full md:h-10" aria-hidden="true" />

      <div className="relative bg-grade-wash pb-16 pt-14 md:pb-24 md:pt-20">
        <motion.div
          aria-hidden="true"
          style={{ opacity }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(227,168,87,0.10),transparent_60%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="slugline flex items-center gap-3">
            <span>Scene 01</span>
            <span className="text-surface/25">·</span>
            <span>Int. Cybelinx — Continuous</span>
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div>
              <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] text-surface md:text-5xl lg:text-6xl">
                Software products,{" "}
                <span className="italic text-primary">engineered</span> — not services, rendered.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-surface/70 md:text-lg">
                Cybelinx builds AI-native, multi-tenant SaaS platforms. CogniHR runs statutory-compliant HR for
                Indian enterprises; eHMS runs multi-property hospitality operations. Both shipped, both live.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/products">View the Products</Button>
                <Button href="/contact" variant="secondary">
                  Talk to Us
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-sm border border-surface/10 bg-surface/[0.03] px-3.5 py-1.5 font-slug text-[11px] tracking-wide text-surface/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div style={{ y }} className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
              <div className="frame relative flex aspect-square items-center justify-center overflow-hidden rounded-full p-4">
                <ApertureScene />
              </div>
              <div className="slugline mt-4 text-center text-[10px] text-surface/40">
                Shot on Cybelinx — Cam A
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="letterbox-bar h-6 w-full md:h-10" aria-hidden="true" />
    </div>
  );
}
