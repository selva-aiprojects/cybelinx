import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import AnimatedSection from "@/components/AnimatedSection";
import TypicalWorkflows from "@/components/TypicalWorkflows";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engineering & DevOps",
  description: "Cybelinx engineering stack \u2014 cloud-native, Kubernetes, React/Next.js, Python, event-driven architecture, GenAI, and DevSecOps for enterprise SaaS.",
};

export default function TechnologiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Engineering & DevOps"
          title="A modern stack for enterprise-grade SaaS products."
          description="Cybelinx gives platform and DevOps teams an AI-native, multi-tenant foundation — complete with shared templates, multi-cloud DevSecOps pipelines, and built-in compliance — maximizing developer productivity so you ship faster without reinventing infrastructure."
        />
      </Section>

      <Section textured>
        <AnimatedSection>
          <ArchitectureEcosystem />
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="mb-8">
            <span className="slugline">Core Technologies</span>
            <h3 className="mt-2 font-display text-2xl font-bold text-surface">Proven frameworks for multi-tenant SaaS delivery.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 0.05}>
                <div className="rounded-2xl border border-border bg-background p-5 text-sm font-semibold text-surface flex items-center justify-between transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
                  <span>{tech}</span>
                  <span className="h-2 w-2 rounded-full bg-primary/30" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section id="workflows">
        <AnimatedSection>
          <TypicalWorkflows />
        </AnimatedSection>
      </Section>

      <Section textured>
        <AnimatedSection>
          <div className="mb-10 max-w-3xl">
            <h3 className="font-display text-3xl font-bold text-surface md:text-4xl">Platform-Enabled Deployment Pipeline</h3>
            <p className="mt-4 text-base leading-relaxed text-slate">
              By standardizing templates, pipelines, and guardrails, Cybelinx aims to reduce repetitive ops work and ticket churn for engineering teams, while improving deployment frequency and reliability.
            </p>
          </div>
          <ArchitectureFlow
            title=""
            steps={[
              { label: "Template & Security Audit", description: "Golden-path scaffolding with automated SAST/DAST scanning, dependency audits, and compliance gates enforced before merge." },
              { label: "Immutable Build & Deploy", description: "Containerized artifacts built once, deployed across multi-region Kubernetes clusters with canary release strategies." },
              { label: "Live Telemetry & Self-Healing", description: "Continuous observability with AI-driven anomaly detection, automatic failover, and incident response across all tenants." },
            ]}
            outcome="Product teams ship weekly with zero-downtime deployments, automated compliance, and self-healing infrastructure. 99.9% Uptime SLA, with 99.99% observed across client environments."
          />
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Link href="/platform" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-violet transition-colors">
              Explore the platform architecture <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-violet transition-colors">
              See how engineering teams use Cybelinx in production <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
        <CTABand heading="Platform architecture review" subheading="Our platform engineers can assess your stack and roadmap cloud-native modernization paths." />
      </Section>
    </>
  );
}
