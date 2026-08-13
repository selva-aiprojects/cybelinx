"use client";

import { ReactNode } from "react";

interface TechItem {
  name: string;
  category: string;
  icon: ReactNode;
  color: string;
}

const technologies: TechItem[] = [
  {
    name: "AWS",
    category: "Cloud",
    color: "#FF9900",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#FF9900" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#FF9900" strokeWidth="0.8" opacity="0.9" />
        <path d="M16 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5M24 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 26s2 4 10 4 10-4 10-4" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#4285F4" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#4285F4" strokeWidth="0.8" opacity="0.9" />
        <path d="M16 28l4-10 4 6 4-6 4 10" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="2.2" fill="#4285F4" opacity="0.8" />
        <circle cx="28" cy="22" r="2.2" fill="#4285F4" opacity="0.8" />
        <path d="M16 30h16" stroke="#4285F4" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Azure",
    category: "Cloud",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#0078D4" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#0078D4" strokeWidth="0.8" opacity="0.9" />
        <path d="M16 30l6-16 6 10-6 2" stroke="#0078D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 26l8 4-14 0" stroke="#0078D4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    color: "#326CE5",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#326CE5" opacity="0.22" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#326CE5" strokeWidth="0.8" opacity="0.9" />
        <circle cx="24" cy="24" r="8.5" stroke="#326CE5" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="3.4" fill="#326CE5" opacity="0.7" />
        <path d="M24 16v-2M24 34v-2M16 24h-2M34 24h-2" stroke="#326CE5" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18.3 18.3l-1.4-1.4M31.1 31.1l-1.4-1.4M29.7 18.3l1.4-1.4M16.9 31.1l1.4-1.4" stroke="#326CE5" strokeWidth="1.2" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "AI",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#10A37F" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#10A37F" strokeWidth="0.8" opacity="0.9" />
        <path d="M20 16c-4.4 0-8 3.1-8 7 0 3.9 3.6 7 8 7h8c4.4 0 8-3.1 8-7 0-3.9-3.6-7-8-7h-1" stroke="#10A37F" strokeWidth="1.8" fill="none" />
        <path d="M24 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#10A37F" opacity="0.45" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    category: "AI",
    color: "#D4A57A",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#D4A57A" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#D4A57A" strokeWidth="0.8" opacity="0.9" />
        <path d="M18 30L24 14l6 16" stroke="#D4A57A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 25h7" stroke="#D4A57A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Data",
    color: "#3ECF8E",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#3ECF8E" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#3ECF8E" strokeWidth="0.8" opacity="0.9" />
        <path d="M24 14l-8 12h6l-2 8 10-12h-6l2-8h-2z" fill="#3ECF8E" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Terraform",
    category: "IaC",
    color: "#7B42BC",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#7B42BC" opacity="0.24" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#7B42BC" strokeWidth="0.8" opacity="0.9" />
        <path d="M14 16l8 4v8l-8-4z" fill="#7B42BC" opacity="0.7" />
        <path d="M24 16l8 4v8l-8-4z" fill="#7B42BC" opacity="0.85" />
        <path d="M19 28l8 4v4l-8-4z" fill="#7B42BC" opacity="0.55" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/70 px-4 py-6 shadow-[0_24px_80px_rgba(123,97,255,0.08)] backdrop-blur-xl sm:px-6 lg:px-8 lg:py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-4 h-52 w-52 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <div className="relative z-10 mb-8 text-center">
        <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/80">
          Enterprise Infrastructure
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-surface md:text-3xl lg:text-4xl">
          Built On <span className="gradient-text">Enterprise Foundations</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate/75">
          Every Cybelinx product runs on battle-tested cloud infrastructure and AI platform partners.
        </p>
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden">
          <div className="logo-ticker flex w-max gap-4">
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="group shrink-0 flex items-center gap-3 rounded-[1.25rem] border border-slate-200/80 bg-white/95 px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                style={{
                  boxShadow: "0 10px 28px rgba(15, 23, 42, 0.05)",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.boxShadow = `0 20px 38px ${tech.color}22`;
                  target.style.borderColor = `${tech.color}50`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.boxShadow = "0 10px 28px rgba(15, 23, 42, 0.05)";
                  target.style.borderColor = "";
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/90 bg-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}18 0%, rgba(255,255,255,0.98) 100%)`,
                    boxShadow: `inset 0 0 0 1px ${tech.color}22, 0 8px 18px ${tech.color}12`,
                  }}
                >
                  {tech.icon}
                </div>
                <div className="min-w-0">
                  <span className="block text-sm font-bold text-slate-800">{tech.name}</span>
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-500">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
