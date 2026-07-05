import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { Brain, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services",
  description: "AI capabilities built natively into Cybelinx product platforms.",
};

const services = [
  {
    icon: Brain,
    title: "Embedded AI Copilots",
    description: "Intelligent assistants inside payroll, compliance, and operational workflows \u2014 not bolted on as chatbots.",
  },
  {
    icon: Cpu,
    title: "Document Intelligence",
    description: "Extract, classify, and route unstructured documents across enterprise workflows automatically.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "AI-powered decision support, anomaly detection, and process automation built into every product.",
  },
];

export default function AIServicesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="AI Capabilities"
          title="Intelligence engineered into products\u2014not bolted on."
          description="Cybelinx platforms ship with AI built into core workflows \u2014 payroll, compliance, operations \u2014 from day one."
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
        <CTABand heading="See AI in action" subheading="Book a demo to see how AI transforms payroll, compliance, and operations." />
      </Section>
    </>
  );
}
