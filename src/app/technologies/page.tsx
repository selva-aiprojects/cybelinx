import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import AnimatedSection from "@/components/AnimatedSection";
import { technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Modern engineering technologies powering Cybelinx product delivery.",
};

export default function TechnologiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Technologies"
          title="A modern stack for enterprise-grade products."
          description="We select technologies for durability, security, and team velocity—aligned to your cloud and compliance requirements."
        />
      </Section>

      <Section textured>
        <AnimatedSection>
          <ArchitectureEcosystem
            title="The Cybelinx Multi-Tenant Stack"
            description="Engineered from the ground up for strict tenant isolation, high-throughput AI inference, and seamless enterprise integrations."
            components={[
              {
                label: "Core Infrastructure",
                sublabel: "Cloud & Compute",
                items: ["AWS / GCP Multi-Region", "Kubernetes Clusters", "Zero-Trust Mesh", "Automated Failover"],
                color: "primary",
              },
              {
                label: "AI & Telemetry Engine",
                sublabel: "Intelligence Layer",
                items: ["Real-time Stream Processing", "Custom LLM Fine-tuning", "Predictive Analytics", "Statutory Rule Engine"],
                color: "cyan",
              },
              {
                label: "Data & Persistence",
                sublabel: "Storage Layer",
                items: ["Isolated Tenant Schemas", "Vector Embeddings DB", "Distributed Caching", "Automated Backups"],
                color: "violet",
              },
              {
                label: "Security & Compliance",
                sublabel: "Governance",
                items: ["SOC 2 Type II Certified", "End-to-End Encryption", "RBAC & SAML/SSO", "Immutable Audit Logs"],
                color: "primary",
              },
            ]}
          />
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="mb-8">
            <span className="slugline">Core Technologies</span>
            <h3 className="font-display mt-2 text-2xl font-bold text-surface">Proven enterprise frameworks and tools.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 0.05}>
                <div className="spotlight-card rounded-2xl p-6 text-sm font-bold text-white flex items-center justify-between group">
                  <span>{tech}</span>
                  <span className="h-2 w-2 rounded-full bg-cyan/40 group-hover:bg-cyan group-hover:shadow-[0_0_10px_#60c8e0] transition-all" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section textured>
        <AnimatedSection>
          <ArchitectureFlow
            title="Secure Deployment & Integration Pipeline"
            steps={[
              { label: "Code & Security Audit", description: "Automated SAST/DAST vulnerability scanning and dependency checks." },
              { label: "Immutable Build", description: "Containerized artifacts deployed across multi-region Kubernetes clusters." },
              { label: "Live Telemetry & Self-Healing", description: "Continuous monitoring with automatic failover and AI anomaly detection." },
            ]}
            outcome="Continuous delivery with 99.99% uptime guarantee and zero-trust security architecture across all client environments."
          />
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand heading="Architecture review?" subheading="Our platform engineers can assess your stack and roadmap modernization paths." />
      </Section>
    </>
  );
}
