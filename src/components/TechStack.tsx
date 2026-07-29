import { ReactNode } from "react";

interface TechItem {
  name: string;
  icon: ReactNode;
}

const technologies: TechItem[] = [
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#FF9900" opacity="0.15"/>
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#FF9900" strokeWidth="0.5" opacity="0.5"/>
        <path d="M16 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5M24 22c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 26s2 4 10 4 10-4 10-4" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "GCP",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#4285F4" opacity="0.15"/>
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#4285F4" strokeWidth="0.5" opacity="0.5"/>
        <path d="M16 28l4-10 4 6 4-6 4 10" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="22" r="2" fill="#4285F4" opacity="0.6"/>
        <circle cx="28" cy="22" r="2" fill="#4285F4" opacity="0.6"/>
        <path d="M16 30h16" stroke="#4285F4" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#326CE5" opacity="0.15"/>
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#326CE5" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="24" cy="24" r="8" stroke="#326CE5" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="#326CE5" opacity="0.5"/>
        <path d="M24 16v-2M24 34v-2M16 24h-2M34 24h-2" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18.3 18.3l-1.4-1.4M31.1 31.1l-1.4-1.4M29.7 18.3l1.4-1.4M16.9 31.1l1.4-1.4" stroke="#326CE5" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#10A37F" opacity="0.15"/>
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#10A37F" strokeWidth="0.5" opacity="0.5"/>
        <path d="M20 16c-4.4 0-8 3.1-8 7 0 3.9 3.6 7 8 7h8c4.4 0 8-3.1 8-7 0-3.9-3.6-7-8-7h-1" stroke="#10A37F" strokeWidth="1.5" fill="none"/>
        <path d="M24 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#10A37F" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#3ECF8E" opacity="0.15"/>
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="#3ECF8E" strokeWidth="0.5" opacity="0.5"/>
        <path d="M24 14l-8 12h6l-2 8 10-12h-6l2-8h-2z" fill="#3ECF8E" opacity="0.6"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <span className="slugline">Enterprise Infrastructure</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-surface md:text-3xl lg:text-4xl">
            Built On{" "}
            <span className="gradient-text">Enterprise Foundations</span>
          </h2>
          <p className="mt-3 text-sm text-slate/70 max-w-xl mx-auto">
            Every Cybelinx product runs on battle-tested cloud infrastructure and AI platform partners.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 rounded-2xl border border-border/50 bg-card-bg/80 px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-glow hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="text-sm font-semibold text-surface">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
