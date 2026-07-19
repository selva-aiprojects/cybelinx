import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import { platformPillars, differentiators, capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description: "Cybelinx is an AI-native, multi-tenant platform for web, SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering.",
};

export default function PlatformPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Platform"
          title="One unified foundation for every product."
          description="Cybelinx gives engineering and platform teams a single multi-tenant core for web apps, SaaS/PaaS products, multi-cloud DevSecOps, LLM services, and future quantum workloads — built for regulated enterprises from day one."
        />
      </Section>

      {/* Four Pillars */}
      <Section textured id="pillars">
        <div className="grid gap-8">
          {platformPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.slug} delay={index * 0.08}>
              <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md md:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{pillar.subtitle}</span>
                        <h2 className="mt-1 font-display text-2xl font-bold text-surface">{pillar.title}</h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">{pillar.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Developer outcome</span>
                      <span className="text-sm font-semibold text-surface">{pillar.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Architecture Stack */}
      <Section id="architecture">
        <AnimatedSection>
          <ArchitectureEcosystem
            title="The Cybelinx Platform Stack"
            description="Four layers engineered for strict tenant isolation, high-throughput AI inference, and enterprise-grade reliability across every product."
            components={[
              {
                label: "Core Infrastructure",
                sublabel: "Cloud & Compute",
                items: [
                  "AWS / GCP Multi-Region",
                  "Kubernetes Clusters",
                  "Zero-Trust Service Mesh",
                  "Automated Failover & DR",
                ],
                color: "primary",
              },
              {
                label: "Platform Services",
                sublabel: "Developer Experience",
                items: [
                  "Internal Developer Portal",
                  "Golden-Path Templates",
                  "CI/CD Pipeline Automation",
                  "Feature Flag Management",
                ],
                color: "cyan",
              },
              {
                label: "Data & Multi-Tenancy",
                sublabel: "Tenant Isolation",
                items: [
                  "Isolated Tenant Schemas",
                  "Vector Embeddings DB",
                  "Distributed Caching Layer",
                  "Automated Backup & Restore",
                ],
                color: "violet",
              },
              {
                label: "Security & Compliance",
                sublabel: "Governance",
                items: [
                  "SOC 2 Type II Certified",
                  "End-to-End Encryption",
                  "RBAC & SAML/SSO",
                  "Immutable Audit Logs",
                ],
                color: "primary",
              },
            ]}
          />
        </AnimatedSection>
      </Section>

      {/* How Cybelinx Is Different */}
      <Section id="how-cybelinx-is-different">
        <AnimatedSection>
          <div className="mb-12 max-w-3xl">
            <span className="slugline">How Cybelinx Is Different</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-surface md:text-4xl">
              Cloud AI platforms give you building blocks. DevSecOps tools secure your pipelines. Single-vertical SaaS solves one problem. Cybelinx brings all three together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              An AI-native, multi-tenant platform, multi-cloud DevSecOps, and a portfolio of regulated SaaS products — all designed to boost developer productivity in enterprise engineering and platform teams.
            </p>
          </div>
        </AnimatedSection>
        <div className="space-y-8">
          {differentiators.map((diff, index) => (
            <AnimatedSection key={diff.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md md:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <diff.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-surface">{diff.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-primary/80">{diff.hook}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{diff.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {diff.details.map((d) => (
                        <li key={d.slice(0, 20)} className="flex items-start gap-2 text-sm text-slate">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <blockquote className="mt-4 border-l-2 border-primary pl-4 text-sm italic leading-relaxed text-surface/80">
                      {diff.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Pipeline */}
      <Section textured>
        <AnimatedSection>
          <ArchitectureFlow
            title="Platform-Enabled Delivery Pipeline"
            steps={[
              { label: "Template & Security Audit", description: "Golden-path scaffolding with automated SAST/DAST scanning, dependency audits, and compliance gates enforced before merge." },
              { label: "Immutable Build & Deploy", description: "Containerized artifacts built once, deployed across multi-region Kubernetes clusters with canary release strategies." },
              { label: "Live Telemetry & Self-Healing", description: "Continuous observability with AI-driven anomaly detection, automatic failover, and incident response across all tenants." },
            ]}
            outcome="Product teams ship weekly with zero-downtime deployments, automated compliance, and self-healing infrastructure across all tenant environments."
          />
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand heading="See the platform in action" subheading="Book an architecture walkthrough with our platform engineering team." />
      </Section>
    </>
  );
}
