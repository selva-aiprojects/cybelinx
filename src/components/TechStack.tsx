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
    category: "Cloud Platform",
    color: "#FF9900",
    icon: (
      <svg viewBox="0 0 36 36" className="h-7 w-7" fill="none">
        <path d="M11 15.5l-2.4 6h-2.1l3.5-9h2.3l3.5 9h-2.1L11 15.5zm-1.8-1.5h3.2L11 9.8 9.2 14z" fill="#232F3E" className="dark:fill-white" />
        <path d="M16.5 12.5h2l1.8 6.5 1.9-6.5h1.9l-2.8 9h-2l-2.8-9z" fill="#232F3E" className="dark:fill-white" />
        <path d="M27.8 19.8c.8.6 1.8.9 2.9.9 1.4 0 2.2-.6 2.2-1.5 0-.8-.7-1.2-2-1.6-1.8-.5-3.1-1.2-3.1-2.9 0-1.8 1.5-2.9 3.5-2.9 1.1 0 2.1.3 2.8.8l-.8 1.5c-.6-.4-1.3-.6-2-.6-1.1 0-1.7.5-1.7 1.2 0 .7.6 1.1 1.8 1.5 1.9.6 3.3 1.3 3.3 3 0 1.9-1.5 3.1-3.7 3.1-1.3 0-2.5-.4-3.4-1l.7-1.5z" fill="#232F3E" className="dark:fill-white" />
        <path d="M6 25c7 4.5 16 4.5 23 0" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M29.8 24l.8 2.6-2.6-.7" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Cloud & AI",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M24.8 14.5c-.8-4.2-4.5-7.3-8.8-7.3-3.5 0-6.6 2-8.1 5-3.7.4-6.6 3.5-6.6 7.3 0 4.1 3.3 7.5 7.5 7.5h15.5c3.6 0 6.5-2.9 6.5-6.5 0-3.3-2.5-6-6-6.4z" fill="#4285F4" opacity="0.12" />
        <path d="M16 9.2c3.5 0 6.5 2.5 7.2 5.9l.3 1.6 1.6.2c2.4.3 4.2 2.3 4.2 4.8 0 2.6-2.1 4.8-4.8 4.8H8.8C5.6 26.5 3 23.9 3 20.7c0-3 2.3-5.5 5.3-5.8l1.4-.1.6-1.2C11.6 11.2 13.7 9.2 16 9.2z" stroke="#4285F4" strokeWidth="1.8" />
        <path d="M8.3 14.9C10 11.4 12.8 9.2 16 9.2c2.2 0 4.2 1 5.6 2.7" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
        <path d="M21.6 11.9c1.6 1.5 2.6 3.5 2.6 5.8 0 .4 0 .8-.1 1.2" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" />
        <path d="M24.5 26.5H8.8c-2.2 0-4.1-1.2-5-3" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    category: "Cloud & Enterprise",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M17.5 4.5L7.8 21.6l6.3 5.4h11.6L17.5 4.5z" fill="url(#azGrad1)" />
        <path d="M17.5 4.5L11.7 18.2l11.3 8.8 4.2-6.3-9.7-16.2z" fill="url(#azGrad2)" />
        <defs>
          <linearGradient id="azGrad1" x1="7.8" y1="15.8" x2="25.7" y2="15.8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#114A8B" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
          <linearGradient id="azGrad2" x1="11.7" y1="4.5" x2="27.2" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0078D4" />
            <stop offset="0.8" stopColor="#50E6FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    color: "#326CE5",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5z" fill="#326CE5" fillOpacity="0.12" stroke="#326CE5" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="3.6" fill="#326CE5" />
        <path d="M16 5.5v5.5M16 21v5.5M6.5 10.5l4.8 2.8M20.7 18.7l4.8 2.8M6.5 21.5l4.8-2.8M20.7 13.3l4.8-2.8" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="5.5" r="1.4" fill="#326CE5" />
        <circle cx="25.5" cy="10.8" r="1.4" fill="#326CE5" />
        <circle cx="25.5" cy="21.2" r="1.4" fill="#326CE5" />
        <circle cx="16" cy="26.5" r="1.4" fill="#326CE5" />
        <circle cx="6.5" cy="21.2" r="1.4" fill="#326CE5" />
        <circle cx="6.5" cy="10.8" r="1.4" fill="#326CE5" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "LLMs & Vision",
    color: "#10A37F",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M27.2 14.1a6.4 6.4 0 0 0-.5-5.1 6.6 6.6 0 0 0-5.6-3.4 6.4 6.4 0 0 0-4.3 1.7A6.6 6.6 0 0 0 11 5.5a6.6 6.6 0 0 0-5.7 3.4 6.4 6.4 0 0 0 0 6.4 6.6 6.6 0 0 0-2.1 4.7 6.6 6.6 0 0 0 2.1 4.8 6.4 6.4 0 0 0 .5 5.1 6.6 6.6 0 0 0 5.6 3.4 6.4 6.4 0 0 0 4.3-1.7 6.6 6.6 0 0 0 5.8 1.7 6.6 6.6 0 0 0 5.7-3.4 6.4 6.4 0 0 0 0-6.4 6.6 6.6 0 0 0 2.1-4.7 6.6 6.6 0 0 0-2.1-4.7z" stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12.5v7M12.8 14.2l6.4 3.6M12.8 17.8l6.4-3.6" stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    category: "Agentic AI & RAG",
    color: "#CC785C",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M18.4 4h-4.8l-1 5.6-4.6-2.7-2.6 4 4.8 3-5.6 1v4.8l5.6 1-4.8 3 2.6 4 4.6-2.7 1 5.6h4.8l1-5.6 4.6 2.7 2.6-4-4.8-3 5.6-1v-4.8l-5.6-1 4.8-3-2.6-4-4.6 2.7-1-5.6z" fill="#CC785C" />
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    category: "GPU Compute & CUDA",
    color: "#76B900",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M4 16c0-4.6 3.2-8.5 7.7-9.5.5-.1.9.3.9.8v1.1c0 .4-.3.8-.7.9-3.4 1-5.8 4-5.8 7.6s2.4 6.6 5.8 7.6c.4.1.7.5.7.9v1.1c0 .5-.4.9-.9.8C7.2 24.5 4 20.6 4 16z" fill="#76B900" />
        <path d="M11 16c0-2.2 1.5-4 3.5-4.4.5-.1.9.3.9.8v1c0 .4-.3.7-.7.9-1.2.4-2 1.5-2 2.8s.8 2.3 2 2.8c.4.1.7.5.7.9v1c0 .5-.4.9-.9.8-2-.5-3.5-2.3-3.5-4.5z" fill="#76B900" />
        <circle cx="16.8" cy="16" r="1.8" fill="#76B900" />
        <path d="M19 8.7c4.2 1 7.4 4.7 7.4 9.2 0 4.5-3.2 8.3-7.4 9.2-.5.1-.9-.3-.9-.8v-1.1c0-.4.3-.8.7-.9 3.2-.9 5.5-3.7 5.5-7.1 0-3.4-2.3-6.2-5.5-7.1-.4-.1-.7-.5-.7-.9v-1.1c0-.5.4-.9.9-.8z" fill="#76B900" />
      </svg>
    ),
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    color: "#7B42BC",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M11.7 9.1L18.7 5v8l-7 4.1V9.1z" fill="#7B42BC" />
        <path d="M19.5 5.1L26.5 9v8.1l-7-4.1V5.1z" fill="#844FBA" />
        <path d="M11.7 18L18.7 14v8.1l-7 4.1V18z" fill="#5C4EE5" />
        <path d="M4 5.1l7 4v8.1l-7-4.1V5.1z" fill="#5C4EE5" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Container Runtime",
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M29.5 15.3c-.4-.3-1.8-.4-3 .3-.4-1.1-1.2-2-2.3-2.5-.4-.3-.9-.3-1.3-.3-.3-1.5-1.2-2.8-2.5-3.6l-.8-.5-.5.8c-.8 1.2-1.1 2.7-.8 4-.8.5-1.7 1.3-2.4 2.3H3.7c-.7 0-1.1.5-1.1 1.2 0 2.9 1.1 5.7 3.1 7.7 2.3 2.3 5.3 3.5 8.5 3.5 8.9 0 15.3-5.6 16.4-11.7.3-.3.1-.7-.1-.9h-.7z" fill="#2496ED" />
        <path d="M8 14h2.7v2.7H8zm3.3 0H14v2.7h-2.7zm3.3 0h2.7v2.7h-2.7zm-6.6-3.3h2.7v2.7H8zm3.3 0H14v2.7h-2.7zm3.3 0h2.7v2.7h-2.7zm-3.3-3.3H14v2.7h-2.7z" fill="white" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational Lakehouse",
    color: "#336791",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M16 3.5C9.4 3.5 4 8.8 4 15.5c0 5.3 3.5 9.8 8.3 11.3v-2.9C8.9 22.7 6.5 19.5 6.5 15.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5c0 4-2.4 7.2-5.8 8.4v2.9c4.8-1.5 8.3-6 8.3-11.3 0-6.7-5.4-12-12-12z" fill="#336791" />
        <path d="M16 9.5c-3.3 0-6 2.7-6 6 0 2.4 1.5 4.5 3.6 5.5v-2.1c-1.1-.7-1.8-1.9-1.8-3.4 0-2.3 1.8-4.1 4.2-4.1s4.2 1.8 4.2 4.1c0 1.5-.7 2.7-1.8 3.4v2.1c2.1-1 3.6-3.1 3.6-5.5 0-3.3-2.7-6-6-6z" fill="#336791" />
        <path d="M14.7 19.5h2.6v7.3h-2.6z" fill="#336791" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Real-time Vector DB",
    color: "#3ECF8E",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M17.5 3.3L5 18.3c-.5.7-.1 1.7.8 1.7h9.6l-2.4 8.7c-.4 1.2 1.2 2 2 .9L27.8 14.6c.5-.7.1-1.7-.8-1.7h-9.6l2.4-8.7c.4-1.2-1.2-2-2-.9z" fill="url(#supaGrad)" />
        <defs>
          <linearGradient id="supaGrad" x1="5" y1="3.3" x2="27.8" y2="29.7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#24B47E" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "In-Memory Caching",
    color: "#DC382D",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M16 3.3L3.7 9.6l12.3 6.3 12.3-6.3L16 3.3z" fill="#DC382D" />
        <path d="M3.7 12.7l12.3 6.3 12.3-6.3v4.3L16 23.3 3.7 17v-4.3z" fill="#A82820" />
        <path d="M3.7 19.3l12.3 6.3 12.3-6.3v4.3L16 29.9 3.7 23.6v-4.3z" fill="#781D17" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-background/80 px-4 py-8 shadow-sm backdrop-blur-2xl sm:px-6 lg:px-8 lg:py-10">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-4 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-violet/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mb-8 text-center">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
          Enterprise Infrastructure Partners
        </span>
        <h2 className="mt-4 font-display text-2xl font-extrabold text-surface md:text-3xl lg:text-4xl">
          Built On <span className="bg-gradient-to-r from-primary via-violet to-accent bg-clip-text text-transparent">Enterprise Foundations</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate/80">
          Every Cybelinx platform runs on certified multi-cloud infrastructure, autonomous container orchestration, and industry-standard AI compute engines.
        </p>
      </div>

      <div className="relative z-10">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden py-2">
          <div className="logo-ticker flex w-max gap-4 hover:[animation-play-state:paused]">
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="group shrink-0 flex items-center gap-3.5 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.boxShadow = `0 14px 32px ${tech.color}18`;
                  target.style.borderColor = `${tech.color}45`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.boxShadow = "";
                  target.style.borderColor = "";
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-white/95 transition-transform duration-300 group-hover:scale-105 shadow-xs"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}10 0%, #FFFFFF 100%)`,
                  }}
                >
                  {tech.icon}
                </div>
                <div className="min-w-0 pr-1">
                  <span className="block font-display text-sm font-bold text-surface">{tech.name}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate/70">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
