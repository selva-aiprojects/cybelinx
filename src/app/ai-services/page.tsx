import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { Brain, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services",
  description: "Applied AI, data engineering, and intelligent automation for enterprise products.",
};

const services = [
  {
    icon: Brain,
    title: "Applied AI Engineering",
    description: "Embed copilots, classification, and decision support into operational workflows.",
  },
  {
    icon: Cpu,
    title: "Data Platform Engineering",
    description: "Lakehouse, streaming, and analytics foundations for AI-ready enterprises.",
  },
  {
    icon: Sparkles,
    title: "AI Product Integration",
    description: "Ship AI features with guardrails, observability, and enterprise governance.",
  },
];

export default function AIServicesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="AI Services"
          title="Intelligence engineered into products—not bolted on."
          description="Cybelink helps enterprises move from AI experiments to production systems with measurable ROI."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <FeatureCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Start an AI readiness assessment" subheading="Identify high-impact use cases and a pragmatic path to production." />
      </Section>
    </>
  );
}
