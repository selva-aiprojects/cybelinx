"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import AnimatedSection from "@/components/AnimatedSection";
import CTABand from "@/components/CTABand";
import { boardMembers, boardStats } from "@/lib/leadership";
import {
  Cpu,
  Layers,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Globe2,
  ChevronDown,
  ChevronUp,
  Quote,
  Briefcase,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";

export default function LeadershipPage() {
  const [filter, setFilter] = useState<"all" | "technology" | "healthcare">("all");
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const filteredMembers =
    filter === "all"
      ? boardMembers
      : boardMembers.filter((m) => m.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-surface">
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-primary/5 via-background to-background pt-36 pb-20">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0D47FF 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-5">
                <Compass className="h-3.5 w-3.5" />
                Board of Directors & Executive Governance
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-surface leading-[1.12]">
                Governed by Decades of{" "}
                <span className="bg-gradient-to-r from-primary via-violet to-accent bg-clip-text text-transparent">
                  Technology Mastery
                </span>{" "}
                & Real-Time Healthcare Domain Authority.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate leading-relaxed">
                Cybelinx is guided by a unique dual-engine board: over <strong>48 combined years</strong> of enterprise technology architecture & solution designing, coupled with <strong>20 combined years</strong> of frontline clinical healthcare practice, medical informatics, and digital health entrepreneurship.
              </p>
            </div>

            {/* Board Trust Metrics Banner */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {boardStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-md transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-semibold text-slate leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Category Filter Bar ─────────────────────────────────────── */}
      <section className="sticky top-20 z-20 border-b border-border bg-background/85 backdrop-blur-md py-4">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate/80 mr-2 hidden sm:inline">
              Filter By Domain:
            </span>
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface/5 text-slate hover:text-surface"
              }`}
            >
              All Board Members ({boardMembers.length})
            </button>
            <button
              onClick={() => setFilter("technology")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                filter === "technology"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface/5 text-slate hover:text-surface"
              }`}
            >
              Technology & Solution Architects (2)
            </button>
            <button
              onClick={() => setFilter("healthcare")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                filter === "healthcare"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface/5 text-slate hover:text-surface"
              }`}
            >
              Healthcare & Clinical Domain Experts (2)
            </button>
          </div>

          <div className="text-xs text-slate/70">
            Showing <strong>{filteredMembers.length}</strong> Directors
          </div>
        </div>
      </section>

      {/* ── Main Board Members Showcase Grid ────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredMembers.map((member) => {
              const Icon = member.icon;
              const isExpanded = expandedMember === member.id;

              return (
                <div
                  key={member.id}
                  id={member.id}
                  className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle top accent gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.gradient}`}
                  />

                  <div>
                    {/* Header Row: Photo / Monogram + Identity */}
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      {/* Photo Container with Monogram Fallback */}
                      <div className="relative shrink-0">
                        <div
                          className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden border-2 border-border/80 shadow-md relative bg-surface/5 flex items-center justify-center group-hover:border-primary transition-colors"
                        >
                          <img
                            src={member.photoUrl}
                            alt={member.name}
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              // If custom photo is missing, show fallback monogram badge
                              e.currentTarget.style.display = "none";
                            }}
                          />

                          {/* Fallback Icon & Monogram */}
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center text-white p-2"
                            style={{
                              background: `linear-gradient(135deg, ${member.accentColor}, #061034)`,
                            }}
                          >
                            <Icon className="h-8 w-8 mb-1 opacity-90" />
                            <span className="font-display font-black text-xl tracking-wider">
                              {member.initials}
                            </span>
                          </div>
                        </div>

                        {/* Experience Pill Badge */}
                        <div
                          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md"
                          style={{ background: member.accentColor }}
                        >
                          {member.experience}
                        </div>
                      </div>

                      {/* Name, Title & Specialty */}
                      <div className="flex-1 mt-2 sm:mt-0">
                        <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider mb-1.5"
                          style={{
                            color: member.accentColor,
                            backgroundColor: `${member.accentColor}15`,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {member.expertiseBadge}
                        </div>

                        <h2 className="font-display text-2xl font-bold text-surface group-hover:text-primary transition-colors leading-tight">
                          {member.name}
                        </h2>

                        <div className="text-xs font-semibold text-primary mt-1">
                          {member.role}
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-slate leading-relaxed">
                          {member.shortBio}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Full Bio */}
                    {isExpanded && (
                      <div className="mt-6 pt-5 border-t border-border/70 text-xs sm:text-sm text-slate leading-relaxed space-y-3 animate-fade-in">
                        {member.fullBio.split("\n\n").map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    )}

                    {/* Expand/Collapse Trigger */}
                    <button
                      onClick={() => toggleExpand(member.id)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-deep transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          Read Full Executive Biography
                        </>
                      )}
                    </button>

                    {/* Key Competencies Chips */}
                    <div className="mt-6 pt-5 border-t border-border/60">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-slate/70 mb-2.5 flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                        Core Domain Competencies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.keyCompetencies.map((comp, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-surface/90"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Board Advisory Focus */}
                    <div className="mt-4">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-slate/70 mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="h-3 w-3 text-primary" />
                        Board Governance & Advisory Charter
                      </div>
                      <ul className="space-y-1 text-xs text-slate">
                        {member.advisoryFocus.map((focus, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Director Quote Card */}
                  <div className="mt-6 rounded-2xl border border-border/80 bg-surface/5 p-4 text-xs italic text-slate/90 relative">
                    <Quote className="h-5 w-5 text-primary/30 absolute top-3 right-3" />
                    &ldquo;{member.quote}&rdquo;
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strategic Synergy Section (Technology + Healthcare Domain) ── */}
      <section className="py-16 border-t border-border bg-gradient-to-b from-background via-surface/5 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="slugline">Dual-Engine Leadership</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-surface">
                Why Enterprise Architecture + Real-Time Healthcare Domain Authority Creates an Unfair Advantage
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate leading-relaxed">
                Most technology vendors fail in regulated domains because engineers don’t understand clinical nuance, or clinicians cannot architect distributed cloud systems. Cybelinx eliminates this divide at the board level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-surface mb-2">
                  23+ & 25+ Yrs IT Mastery
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Steered by <strong>Haribabu Subaschandrabose</strong> & <strong>Selvakumar Balakrishnan</strong>, ensuring zero-tech-debt microservices, post-quantum crypto, and multi-tenant schema isolation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a8e6e]/10 text-[#0a8e6e] mb-4">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-surface mb-2">
                  15+ Yrs Clinical Expertise
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Guided by <strong>Dr. Thala Pushpam Hari Babu</strong>, translating frontline hospital workflows, ABDM Milestone 1/2/3 protocols, and FHIR standards directly into software code.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-surface mb-2">
                  HealthTech Venture Agility
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Infused by <strong>Dr. Ragunandan Jeyaviswadarsan</strong>, focusing on fast product-market fit, clinical partner networks, and commercial healthtech expansion across APAC & MENA.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet mb-4">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-surface mb-2">
                  Continuous Compliance
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Every product passes through both architectural scalability benchmarks and medical domain safety checks before reaching production release.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Governance Charter Pillars ──────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <span className="slugline">Board Governance Charter</span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-surface">
                    Commitment to Enduring Quality, Security, and Clinical Integrity.
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed">
                    Our board members actively participate in quarterly architectural reviews, statutory compliance gates, and clinical safety audits. This governance model protects our enterprise clients against platform obsolescence and regulatory penalties.
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-primary">
                    <Link href="/company" className="hover:underline flex items-center gap-1.5">
                      Explore Company Story <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <span>&bull;</span>
                    <Link href="/security" className="hover:underline flex items-center gap-1.5">
                      Security & Compliance <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Zero-Tech-Debt Standard",
                      desc: "Platform modularity ensuring clients upgrade without codebase forks or costly re-platforming.",
                    },
                    {
                      title: "Clinical Accuracy First",
                      desc: "Medical decision guardrails audited by healthcare clinicians before algorithmic deployment.",
                    },
                    {
                      title: "Compliance as Code",
                      desc: "Automated SOC 2, ISO 27001, ABDM, and HIPAA verification built into every CI/CD golden path.",
                    },
                    {
                      title: "Post-Quantum Safeguards",
                      desc: "NIST PQC ML-KEM & ML-DSA encryption standards protecting mission-critical patient & financial data.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-border/80 bg-background p-4">
                      <div className="flex items-center gap-2 font-display font-bold text-sm text-surface mb-1">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item.title}
                      </div>
                      <p className="text-xs text-slate leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────────── */}
      <Section>
        <CTABand
          heading="Engage with Our Technology & Domain Leadership"
          subheading="Schedule an executive briefing with our Board Directors to discuss enterprise platform architecture, ABDM compliance, or digital transformation."
        />
      </Section>
    </div>
  );
}
