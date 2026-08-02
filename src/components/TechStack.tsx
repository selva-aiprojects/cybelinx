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
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#FF9900" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#FF9900" strokeWidth="0.5" opacity="0.5" />
        <path d="M16 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5M24 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 26s2 4 10 4 10-4 10-4" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#4285F4" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#4285F4" strokeWidth="0.5" opacity="0.5" />
        <path d="M16 28l4-10 4 6 4-6 4 10" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="2" fill="#4285F4" opacity="0.6" />
        <circle cx="28" cy="22" r="2" fill="#4285F4" opacity="0.6" />
        <path d="M16 30h16" stroke="#4285F4" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Azure",
    category: "Cloud",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#0078D4" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#0078D4" strokeWidth="0.5" opacity="0.5" />
        <path d="M16 30l6-16 6 10-6 2" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 26l8 4-14 0" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    color: "#326CE5",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#326CE5" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#326CE5" strokeWidth="0.5" opacity="0.5" />
        <circle cx="24" cy="24" r="8" stroke="#326CE5" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="#326CE5" opacity="0.5" />
        <path d="M24 16v-2M24 34v-2M16 24h-2M34 24h-2" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.3 18.3l-1.4-1.4M31.1 31.1l-1.4-1.4M29.7 18.3l1.4-1.4M16.9 31.1l1.4-1.4" stroke="#326CE5" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "AI",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#10A37F" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#10A37F" strokeWidth="0.5" opacity="0.5" />
        <path d="M20 16c-4.4 0-8 3.1-8 7 0 3.9 3.6 7 8 7h8c4.4 0 8-3.1 8-7 0-3.9-3.6-7-8-7h-1" stroke="#10A37F" strokeWidth="1.5" fill="none" />
        <path d="M24 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#10A37F" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    category: "AI",
    color: "#D4A57A",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#D4A57A" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#D4A57A" strokeWidth="0.5" opacity="0.5" />
        <path d="M18 30L24 14l6 16" stroke="#D4A57A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 25h7" stroke="#D4A57A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Data",
    color: "#3ECF8E",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#3ECF8E" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#3ECF8E" strokeWidth="0.5" opacity="0.5" />
        <path d="M24 14l-8 12h6l-2 8 10-12h-6l2-8h-2z" fill="#3ECF8E" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Terraform",
    category: "IaC",
    color: "#7B42BC",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#7B42BC" opacity="0.15" />
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#7B42BC" strokeWidth="0.5" opacity="0.5" />
        <path d="M14 16l8 4v8l-8-4z" fill="#7B42BC" opacity="0.5" />
        <path d="M24 16l8 4v8l-8-4z" fill="#7B42BC" opacity="0.7" />
        <path d="M19 28l8 4v4l-8-4z" fill="#7B42BC" opacity="0.4" />
      </svg>
    ),
  },
];

export default function TechStack() {
  // Duplicate for seamless loop
  const doubled = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden">
      <div className="text-center mb-10">
        <span className="eyebrow-pill">Enterprise Infrastructure</span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-surface md:text-3xl lg:text-4xl">
          Built On{" "}
          <span className="gradient-text">Enterprise Foundations</span>
        </h2>
        <p className="mt-3 text-sm text-slate/70 max-w-xl mx-auto">
          Every Cybelinx product runs on battle-tested cloud infrastructure and AI platform partners.
        </p>
      </div>

      {/* Animated ticker */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="flex gap-4 logo-ticker w-max">
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="group flex items-center gap-3 rounded-2xl border border-border/50 bg-card-bg/80 px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 backdrop-blur-sm shrink-0"
                style={{
                  boxShadow: "0 1px 4px rgba(13,71,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${tech.color}25`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(13,71,255,0.05)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                }}
              >
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-surface block">{tech.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate/40">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
