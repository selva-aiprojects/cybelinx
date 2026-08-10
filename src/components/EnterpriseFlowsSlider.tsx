"use client";

import { enterpriseFlows, EnterpriseFlow } from "@/lib/cognivectraContent";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function EnterpriseFlowsSlider() {
  return (
    <div className="relative w-full py-12">
      {/* Glow background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
          <span>Enterprise Transformation Flows</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Visualizing the Transformation Pipeline
        </h2>
        <p className="mt-4 text-base text-slate leading-relaxed">
          From legacy friction to autonomous AI workflows — explore our proven architecture blueprints for regulated enterprises.
        </p>
      </div>

      {/* Horizontal Scrollable Flow Cards */}
      <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {enterpriseFlows.map((flow) => (
          <div
            key={flow.id}
            className="group shrink-0 snap-center w-[340px] sm:w-[420px] rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 shadow-2xl flex flex-col justify-between"
            style={{
              boxShadow: `0 20px 50px rgba(0,0,0,0.5)`,
              background: `linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, ${flow.color} 100%)`,
            }}
          >
            <div>
              {/* Card Thumbnail Banner */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                <Image
                  src={flow.img}
                  alt={flow.title}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border backdrop-blur-md"
                    style={{
                      background: `${flow.accentColor}33`,
                      borderColor: `${flow.accentColor}66`,
                    }}
                  >
                    Enterprise Blueprint
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {flow.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">{flow.desc}</p>

              {/* Step Sequence Pills */}
              <div className="mt-5 flex items-center gap-1.5 overflow-x-auto py-2 px-3 rounded-xl bg-black/40 border border-white/10">
                {flow.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 shrink-0">
                    <div className="flex items-center gap-1">
                      <div
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{
                          background: flow.accentColor,
                          boxShadow: `0 0 6px ${flow.accentColor}`,
                        }}
                      />
                      <span className="text-[10px] font-mono font-semibold text-slate-200">{step}</span>
                    </div>
                    {idx < flow.steps.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-slate-500 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Highlight Box */}
            <div className="mt-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Proven Outcome
                  </span>
                  <p className="text-xs text-slate-200 font-medium leading-snug mt-0.5">
                    {flow.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3 text-xs text-slate-400 uppercase tracking-widest font-mono">
        ← Drag or scroll to explore enterprise blueprints →
      </div>
    </div>
  );
}
