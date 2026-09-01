"use client";

import { useState } from "react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import {
  Code2,
  Cpu,
  Globe2,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Plane,
  Sparkles,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Send,
  Users,
  Layers,
} from "lucide-react";

const culturePillars = [
  {
    icon: Code2,
    title: "Engineering as a Product Discipline",
    description:
      "We don't build throwaway custom projects. Every engineer contributes to enduring multi-tenant platforms, shared runtime primitives, and automated compliance pipelines.",
    color: "#0D47FF",
  },
  {
    icon: Cpu,
    title: "AI-Native by Default",
    description:
      "Every product engineer works directly with LLM orchestration, vector search, RAG pipelines, and automated ML evaluation workflows — not just a siloed data science team.",
    color: "#7B61FF",
  },
  {
    icon: Rocket,
    title: "High Autonomy & Ownership",
    description:
      "Small, high-context teams own entire product verticals from database schema and API contracts to canary rollouts, live telemetry, and customer SLA adherence.",
    color: "#00C2FF",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust & High Rigor",
    description:
      "We build software for hospitals, banks, and regulated enterprises. Robust testing, automated security scans, and continuous compliance are built into every PR.",
    color: "#10B981",
  },
];

const techStack = [
  { category: "Frontend & Web", items: ["Next.js 14 / React", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL / Three.js"] },
  { category: "Backend & Systems", items: ["Python & FastAPI", "Node.js & Go", "PostgreSQL (Schema-isolated)", "Redis & Kafka", "ClickHouse / Lakehouse"] },
  { category: "Cloud & Infrastructure", items: ["Kubernetes & EKS", "Terraform & Pulumi", "AWS / GCP / Azure", "ArgoCD & Canary Deployments", "OpenTelemetry & Prometheus"] },
  { category: "AI & ML Production", items: ["LangChain & LlamaIndex", "vLLM / TensorRT", "Qdrant / pgvector", "PyTorch", "Automated Guardrail Evaluators"] },
];

const perks = [
  { icon: Laptop, title: "Hybrid & Remote Flexibility", description: "Work from our Bangalore engineering hub or remotely with asynchronous communication standards." },
  { icon: GraduationCap, title: "Continuous Learning Stipend", description: "Annual allowance for books, certifications (AWS, CKA, ML), and global tech conferences." },
  { icon: HeartHandshake, title: "Comprehensive Healthcare", description: "Full medical coverage for you and your dependents, plus mental health support allowances." },
  { icon: Sparkles, title: "Generous Equity & Performance Bonuses", description: "Meaningful ESOP grants and bi-annual performance bonuses aligned with platform growth." },
  { icon: Plane, title: "Recharge & Offsites", description: "Flexible time off, mandatory disconnect days, and quarterly team engineering hackathons and offsites." },
  { icon: Globe2, title: "Global Impact", description: "Your code runs across 200+ regulated enterprise environments handling millions of critical daily transactions." },
];

const openTeams = [
  { role: "Senior Distributed Systems Engineer", domain: "PaaS Core Runtime", location: "Bangalore / Remote", type: "Full-Time" },
  { role: "Staff AI/LLM Infrastructure Engineer", domain: "CybeAI Suite", location: "Bangalore / Hybrid", type: "Full-Time" },
  { role: "Lead Fullstack Engineer (Next.js / Python)", domain: "Healthcare & Fintech Verticals", location: "Bangalore / Hybrid", type: "Full-Time" },
  { role: "DevSecOps & Kubernetes Platform Architect", domain: "Multi-Cloud SRE", location: "Bangalore / Remote", type: "Full-Time" },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("Engineering");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", linkedin: "", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Careers at Cybelinx"
            title="Build enduring enterprise intelligence platforms."
            description="Join a team of 50+ product architects, distributed systems engineers, and AI specialists engineering cloud-native platforms for 200+ enterprises across 12 countries."
          />
        </AnimatedSection>

        {/* Engineering Stats */}
        <AnimatedSection delay={0.15}>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "50+", label: "Platform Engineers" },
              { value: "12", label: "Global Live Markets" },
              { value: "99.9%", label: "System Uptime SLA" },
              { value: "100%", label: "TypeScript & Cloud-Native" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm">
                <div className="font-display text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Engineering Culture ───────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Engineering Culture</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              How we build, ship, and scale.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
              We value clarity of thought, automated guardrails over manual bureaucracy, and clean architecture that stands the test of time.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: `${pillar.color}25` }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                    style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}35` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-surface">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Technology Stack ──────────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Modern Tech Stack</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Modern tooling engineered for enterprise scale.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((group) => (
              <div key={group.category} className="rounded-2xl border border-border bg-background p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4">{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/80 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-surface shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Active Hiring & Priority Profiles ─────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Priority Profiles</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Immediate teams scaling up in 2026.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate">
              We evaluate exceptional engineers continuously regardless of open headcount. If you build world-class platform software, we want to talk.
            </p>
          </div>

          <div className="grid gap-4">
            {openTeams.map((team, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-surface">{team.role}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate/70">
                    <span className="font-semibold text-primary">{team.domain}</span>
                    <span>&middot;</span>
                    <span>{team.location}</span>
                    <span>&middot;</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{team.type}</span>
                  </div>
                </div>
                <a
                  href="#talent-waitlist"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105 active:scale-95"
                >
                  Apply via Talent Network
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Benefits & Perks ──────────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Benefits & Growth</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Designed to help you do the best work of your career.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="rounded-2xl border border-border bg-background p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-surface">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Interactive Talent Network / Fast Track Application ───────── */}
      <Section id="talent-waitlist" textured className="py-12">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-gradient-to-b from-background to-charcoal p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <span className="slugline">Direct Engineering Access</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-surface md:text-4xl">
                Join our Global Engineering Network
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate">
                Skip the generic HR inbox. Submit your profile directly to our platform leadership team for technical review within 48 hours.
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-live/30 bg-live/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-live" />
                <h3 className="mt-3 font-display text-xl font-bold text-surface">Application Received!</h3>
                <p className="mt-2 text-sm text-slate">
                  Thank you for connecting. Our engineering leadership team reviews every submission and will reach out via email within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Domain Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate/70 mb-2 block">
                    Target Specialization
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {["Engineering", "AI / ML", "Cloud & SRE", "Product Architecture"].map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setSelectedRole(cat)}
                        className={`rounded-xl border py-2.5 px-3 text-xs font-bold transition-all ${
                          selectedRole === cat
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-border bg-background/80 text-slate hover:text-surface"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate/70 mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate/70 mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate/70 mb-1.5 block">
                    LinkedIn / GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate/70 mb-1.5 block">
                    Key Highlights / What you love building
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about high-scale systems, AI models, or platform architectures you've built..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full justify-center py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-violet text-white shadow-md shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Profile for Engineering Review
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
