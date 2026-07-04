"use client";

import dynamic from "next/dynamic";
import Button from "./Button";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center">
      <div className="h-64 w-64 animate-pulse rounded-full border border-cyan/20 bg-brand-gradient opacity-20" />
    </div>
  ),
});

export default function Hero() {
  const highlights = ["AI-native delivery", "Cloud-first platforms", "Regulated industry expertise"];

  return (
    <div className="relative overflow-hidden pb-20 pt-16 md:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 78% 12%, rgba(13,71,255,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 16% 84%, rgba(123,97,255,0.16), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.02fr,0.98fr]">
        <div>
          <span className="glass inline-flex items-center rounded-full border border-cyan/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan">
            Global Product Engineering Partner
          </span>

          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
            Engineering Intelligent Products.{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Accelerating Digital Enterprises.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-surface/80 md:text-lg">
            Cybelink designs, builds, modernizes, and scales AI-powered products and cloud-native platforms for
            organizations that need speed, resilience, and measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/solutions">Explore Solutions</Button>
            <Button href="/products" variant="secondary">
              View Products
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-surface/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(0,194,255,0.35), rgba(123,97,255,0.15), transparent)" }}
          />
          <div className="glass relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 p-4 md:min-h-[430px]">
            <div className="absolute inset-6 rounded-full border border-cyan/20" />
            <div className="absolute inset-10 rounded-full border border-cyan/20 opacity-70" />
            <GlobeScene />
          </div>
        </div>
      </div>
    </div>
  );
}
