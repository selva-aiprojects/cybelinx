import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Building2,
  Globe2,
  Users,
  Brain,
  ShieldCheck,
  Lightbulb,
  Cpu,
  Sparkles,
  MapPin,
  Award,
  Target,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company — Cybelinx",
  description:
    "Cybelinx builds enduring enterprise technology platforms — unifying AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and cloud platforms. Founded in Bangalore, deployed in 12 countries.",
};

const milestones = [
  { year: "2009", title: "Founded in Bangalore", description: "Cybelinx incorporated with a focus on enterprise technology platforms for regulated industries." },
  { year: "2014", title: "First 50 Enterprises", description: "Crossed 50 enterprise deployments across healthcare and hospitality verticals in India." },
  { year: "2018", title: "AI-Native Rebuild", description: "Entire platform rearchitected with AI-native data pipelines, MLOps, and LLM orchestration as core primitives." },
  { year: "2021", title: "200+ Enterprises", description: "Reached 200+ enterprise deployments spanning 9 regulated industries and 8 countries." },
  { year: "2023", title: "12 Countries Live", description: "Platform goes live in 12 countries including India, UAE, UK, Singapore, and Malaysia." },
  { year: "2025", title: "Quantum Ready", description: "Launched NIST PQC-aligned quantum-safe encryption and hybrid quantum compute abstraction layer." },
];

const leadership = [
  {
    role: "Chief Technology Officer",
    description: "20+ years in enterprise platform engineering. Led engineering teams at global SaaS companies before founding Cybelinx's platform architecture practice.",
    icon: Cpu,
    color: "#0D47FF",
    initials: "CTO",
  },
  {
    role: "Chief Product Officer",
    description: "Domain expert in regulated industry software with deep expertise in HCM, BFSI, and healthcare SaaS products across APAC markets.",
    icon: Target,
    color: "#7B61FF",
    initials: "CPO",
  },
  {
    role: "VP of Engineering",
    description: "Cloud-native platform architect with expertise in Kubernetes orchestration, multi-tenant SaaS, and zero-trust security at enterprise scale.",
    icon: Building2,
    color: "#00C2FF",
    initials: "VPE",
  },
  {
    role: "VP of AI & ML",
    description: "PhD in Machine Learning. Former AI research lead at a top-tier AI lab. Leads Cybelinx's LLMOps, agentic workflow, and AI governance frameworks.",
    icon: Brain,
    color: "#10B981",
    initials: "AI",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Enduring Platforms",
    description: "We engineer technology to outlast trends — built to adapt gracefully as technology evolves, not require costly rewrites.",
    color: "#0D47FF",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description: "Enterprise buyers depend on our platforms for mission-critical operations. We take that responsibility personally.",
    color: "#EC4899",
  },
  {
    icon: ShieldCheck,
    title: "Trust by Design",
    description: "Security, compliance, and data integrity are architectural foundations — never added as afterthoughts or compliance checkboxes.",
    color: "#10B981",
  },
  {
    icon: Sparkles,
    title: "AI as a Principle",
    description: "Intelligence is woven into every workflow we build. We believe AI should empower human decisions, not replace human judgment.",
    color: "#7B61FF",
  },
];

const globalPresence = [
  { region: "Headquarters", detail: "Bangalore, Karnataka, India", icon: "🇮🇳" },
  { region: "Middle East", detail: "Dubai, UAE", icon: "🇦🇪" },
  { region: "Southeast Asia", detail: "Singapore, Malaysia", icon: "🌏" },
  { region: "United Kingdom", detail: "London", icon: "🇬🇧" },
];

export default function CompanyPage() {
  return (
    <>
      {/* ── Hero / Mission ─────────────────────────────────────────────── */}
      <Section className="pt-16 pb-0">
        <AnimatedSection>
          <div className="max-w-4xl">
            <span className="slugline">Our Mission</span>
            <h1 className="mt-4 font-display text-5xl font-extrabold text-surface leading-tight md:text-6xl">
              Engineering the Future of{" "}
              <span className="bg-gradient-to-r from-primary via-violet to-accent bg-clip-text text-transparent">
                Enterprise Intelligence.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Cybelinx builds enduring technology platforms rather than selling software development services. Our architecture spans AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and multi-cloud infrastructure — engineered to adapt as technology evolves without becoming dated.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "15+", label: "Years engineering platforms" },
                { value: "12", label: "Countries with live deployments" },
                { value: "200+", label: "Enterprise deployments" },
                { value: "50+", label: "Platform engineers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-surface">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Cybelinx was founded with a singular conviction: enterprises need enduring technology platform foundations, not custom software development services that require constant rewrites. By unifying artificial intelligence, vertical SaaS/PaaS engines, multi-cloud DevSecOps, cybersecurity guardrails, and real-time analytics, we enable regulated global enterprises to innovate continuously without tech debt or technological obsolescence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              What started as a platform for Indian regulated industries has grown into a global enterprise technology company — serving healthcare providers, banks, hospitality chains, and HCM operations across 12 countries — all running on a single unified platform core.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Company Timeline ──────────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Company Milestones</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface">
              From Bangalore to the world.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-violet to-accent md:left-1/2 md:-ml-px hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="rounded-2xl border border-border bg-background p-5 transition-all hover:shadow-md inline-block w-full md:max-w-sm">
                      <div className="font-display text-2xl font-extrabold text-primary">{milestone.year}</div>
                      <h3 className="mt-1 font-semibold text-surface">{milestone.title}</h3>
                      <p className="mt-2 text-sm text-slate">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 md:-ml-3 top-5 h-6 w-6 rounded-full border-2 border-primary bg-background z-10 hidden md:flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Leadership ────────────────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Leadership</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface">
              Built by enterprise platform experts.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate">
              Our leadership team brings decades of experience building and scaling enterprise technology platforms across regulated global industries.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, i) => {
              const Icon = leader.icon;
              return (
                <div
                  key={leader.role}
                  className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Avatar */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-white font-display text-lg font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${leader.color}80, ${leader.color}40)`,
                      border: `1px solid ${leader.color}30`,
                    }}
                  >
                    <Icon className="h-7 w-7" style={{ color: leader.color }} />
                  </div>
                  <h3 className="mt-4 font-semibold text-surface leading-snug">{leader.role}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{leader.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Platform Principles / Values ─────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Company Values</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface">How we build enduring platforms.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${value.color}15`, border: `1px solid ${value.color}30` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="mt-4 font-semibold text-surface">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{value.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Global Operations ─────────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Globe2 className="h-6 w-6 text-primary mb-3" />
            <h2 className="font-display text-2xl font-bold text-surface">Global Operations</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate">
              Distributed platform engineering teams providing enterprise governance, zero-trust cybersecurity, multi-cloud reliability, and 24/7 continuous operations for global enterprises across 12+ countries.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {globalPresence.map((loc) => (
              <div
                key={loc.region}
                className="rounded-2xl border border-border bg-background p-5 transition-all hover:shadow-md"
              >
                <div className="text-3xl mb-3">{loc.icon}</div>
                <div className="font-semibold text-surface">{loc.region}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate">
                  <MapPin className="h-3 w-3 text-primary" />
                  {loc.detail}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand
          heading="Partner with Cybelinx"
          subheading="Let's discuss how our enduring technology platforms can elevate your enterprise intelligence."
        />
      </Section>
    </>
  );
}
