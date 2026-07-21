import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedProductSection from "@/components/AnimatedProductSection";
import { portfolios } from "@/lib/portfolios";

export const metadata: Metadata = {
  title: "CybePlatforms & Product Portfolio",
  description: "AI-native multi-tenant platform powering HR, healthcare, pharma, analytics, and quantum-ready workloads.",
};

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen text-surface relative">
      <Section className="pt-24 pb-12 border-b border-border/40 relative overflow-hidden">
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
        
        <PageHeader
          eyebrow="Portfolio & Platform"
          title="Intelligent enterprise solutions on a unified core."
          description="Explore how Cybelinx empowers regulated industries with secure, multi-tenant SaaS products and future-proof infrastructure."
        />
      </Section>

      {/* Data-driven animated product sections */}
      <div className="flex flex-col">
        {portfolios.map((content, index) => (
          <AnimatedProductSection key={content.id} content={content} index={index} />
        ))}
      </div>

      <Section textured className="py-24">
        <CTABand 
          heading="Ready to elevate your enterprise?" 
          subheading="Our platform strategists will help you map capabilities to your industry and compliance requirements."
        />
      </Section>
    </main>
  );
}
